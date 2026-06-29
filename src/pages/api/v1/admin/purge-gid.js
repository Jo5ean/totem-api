import prisma from '../../../../lib/db.js';
import { withCors } from '../../../../lib/cors.js';

function getBearerToken(req) {
  const header = req.headers?.authorization || req.headers?.Authorization || '';
  if (typeof header !== 'string') return null;
  const [type, token] = header.split(' ');
  if (type !== 'Bearer' || !token) return null;
  return token;
}

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: `Método ${req.method} no permitido`,
      allowedMethods: ['POST']
    });
  }

  if (process.env.ALLOW_DB_RESET !== 'true') {
    return res.status(403).json({
      success: false,
      error: 'Operación deshabilitada',
      message: 'Seteá ALLOW_DB_RESET=true para habilitar purge por gid.'
    });
  }

  const adminToken = process.env.ADMIN_TOKEN;
  const bearer = getBearerToken(req);
  if (!adminToken || bearer !== adminToken) {
    return res.status(401).json({
      success: false,
      error: 'No autorizado'
    });
  }

  const purgeNoGidRaw = req.query?.purgeNoGid ?? req.body?.purgeNoGid;
  const purgeNoGid = purgeNoGidRaw === true || purgeNoGidRaw === 'true' || purgeNoGidRaw === '1';

  const gid = (req.query?.gid ?? req.body?.gid)?.toString();
  if (!purgeNoGid && !gid) {
    return res.status(400).json({
      success: false,
      error: 'Parámetro requerido: gid (o usar purgeNoGid=true)'
    });
  }

  try {
    // Buscar exámenes del gid o sin gid
    const examenes = await prisma.examen.findMany({
      where: purgeNoGid
        ? {
            OR: [
              { examenTotem: { is: null } },
              { examenTotem: { is: { gid: null } } },
              { examenTotem: { is: { gid: '' } } }
            ]
          }
        : {
            examenTotem: {
              gid
            }
          },
      select: { id: true }
    });

    const examenIds = examenes.map(e => e.id);

    // Borrar datos crudos de totemData de ese gid (si aplica)
    const source = gid ? `google-sheets:gid=${gid}` : null;

    const [totemDataDeleted, estudianteExamenDeleted, examenTotemDeleted, examenesDeleted] = await prisma.$transaction([
      source
        ? prisma.totemData.deleteMany({
            where: {
              sheetName: source
            }
          })
        : prisma.totemData.deleteMany({
            where: {
              id: -1
            }
          }),
      prisma.estudianteExamen.deleteMany({
        where: {
          examen_id: {
            in: examenIds
          }
        }
      }),
      prisma.examenTotem.deleteMany({
        where: {
          examenId: {
            in: examenIds
          }
        }
      }),
      prisma.examen.deleteMany({
        where: {
          id: {
            in: examenIds
          }
        }
      })
    ]);

    return res.status(200).json({
      success: true,
      gid: gid ?? null,
      purgeNoGid,
      matchedExamenes: examenIds.length,
      deleted: {
        examenes: examenesDeleted.count,
        examenTotem: examenTotemDeleted.count,
        estudianteExamenes: estudianteExamenDeleted.count,
        totemData: totemDataDeleted.count
      },
      note: 'No se eliminaron aulas ni mapeos. Si algún examen tenía aula asignada, se eliminó el examen completo.'
    });
  } catch (error) {
    console.error('❌ Error purge-gid:', error);
    return res.status(500).json({
      success: false,
      error: 'Error realizando purge por gid',
      message: error.message
    });
  }
}

export default withCors(handler);
