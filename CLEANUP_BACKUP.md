# CLEANUP BACKUP — totem-api
# Fecha: 2026-04-22
# Este archivo documenta todos los cambios realizados durante la limpieza del proyecto.
# Cada sección contiene el contenido original ANTES de ser modificado/eliminado.

---

## 1. package.json — Dependencias eliminadas

Las siguientes dependencias fueron removidas de `dependencies` porque no se usan en el código fuente:

```json
"cors": "^2.8.5",
"csv-parser": "^3.2.0",
"express": "^4.18.2",
"googleapis": "^144.0.0"
```

Las siguientes fueron movidas de `dependencies` a `devDependencies`:

```json
"@types/node": "^22.7.9",
"eslint": "^9.13.0",
"eslint-config-next": "^15.0.3"
```

Nota: `mysql2` se mantiene porque Prisma lo usa como driver interno.
Nota: `dotenv` se mantiene porque aunque Next.js carga .env, otros scripts podrían necesitarlo.

---

## 2. cron-daemon.js — Archivo eliminado del Dockerfile CMD

El archivo `cron-daemon.js` NO se borra del repo (puede servir como referencia), pero se elimina
su ejecución del Dockerfile CMD porque `instrumentation.js` ya registra los mismos cron jobs
via el hook nativo de Next.js.

### Línea original del Dockerfile CMD:
```
CMD ["sh", "-c", "until mysql ... ; do sleep 1; done; npx prisma migrate deploy && node /app/cron-daemon.js & npm start"]
```

### Línea nueva (sin cron-daemon.js):
```
CMD ["sh", "-c", "until mysql ... ; do sleep 1; done; npx prisma migrate deploy && npm start"]
```

---

## 3. enrollmentSync.js — Función deprecada eliminada

### `fetchEnrollmentFromExternalAPI` (líneas 347-401) — ELIMINADA
```javascript
/**
 * Fetch enrollment count from external API
 * DEPRECADO: Esta función usa mock data y será reemplazada
 */
async function fetchEnrollmentFromExternalAPI(exam) {
  try {
    console.log(`📡 Fetching enrollment for exam ${exam.id}:`, {
      materia_codigo: exam.materia_codigo,
      areatema: exam.areatema,
      fecha: exam.fecha?.toISOString(),
      hora: exam.hora?.toTimeString()
    });

    // Verificar variables de entorno
    if (!EXTERNAL_API_URL) {
      console.warn('⚠️ EXTERNAL_ENROLLMENT_API_URL no configurada, usando mock data');
      return Math.floor(Math.random() * 150) + 10;
    }

    if (!API_KEY) {
      console.warn('⚠️ EXTERNAL_API_KEY no configurada, usando mock data');
      return Math.floor(Math.random() * 150) + 10;
    }

    const params = {
      subjectId: exam.materia_codigo,
      areaTema: exam.areatema || '',
      date: exam.fecha.toISOString().split('T')[0],
      timeSlot: exam.hora ? exam.hora.toTimeString().slice(0, 5) : ''
    };

    console.log(`🔗 Calling external API: ${EXTERNAL_API_URL}/enrollments`);
    console.log(`📋 Parameters:`, params);

    // Realizar llamada a API externa con timeout
    const response = await axios.get(`${EXTERNAL_API_URL}/enrollments`, {
      params,
      headers: { 
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      timeout: 10000 // 10 segundos timeout
    });

    console.log(`✅ External API response:`, response.status, response.data);
    return response.data.count || 0;

  } catch (error) {
    console.error('❌ Error fetching enrollment from external API:', {
      message: error.message,
      code: error.code,
      response: error.response?.data,
      status: error.response?.status
    });

    // Retornar null para indicar error, pero no fallar completamente
    return null;
  }
}
```

También se eliminaron las constantes asociadas que solo usaba esta función:
```javascript
const EXTERNAL_API_URL = process.env.EXTERNAL_ENROLLMENT_API_URL || 'https://api-externa-inscripciones.ucasal.edu.ar';
const API_KEY = process.env.EXTERNAL_API_KEY;
```

---

## 4. actaExternaService.js — Métodos con schema inválido eliminados

### `relacionarAlumnosConExamen` (líneas 359-447) — ELIMINADO
Referenciaba relaciones Prisma inexistentes: examen.materia, examen.totemData, examen.estado

### `sincronizarInscripcionesExamenes` (líneas 490-555) — ELIMINADO
Mismo problema: referenciaba examen.materia, examen.totemData

### `verificarCoincidenciaDatos` (líneas 452-485) — ELIMINADO
Solo era usado por `relacionarAlumnosConExamen`

Contenido completo de los métodos eliminados está en el archivo original
(git history preserva todo).

---

## 5. totemService.js — Método muerto eliminado

### `ensureCompleteMapping` (líneas 789-911) — ELIMINADO
Nunca se llamaba desde ningún endpoint. Fue reemplazado por
`UcasalMappingService.mapAllCarrerasFromSheetData()`.

---

## 6. helpers.js — Funciones no usadas eliminadas

### Funciones eliminadas:
- `formatearNombreAula` — nunca importada fuera del archivo
- `validarFacultad` — solo usada por obtenerCarrerasSeguras (también eliminada)
- `obtenerCarrerasSeguras` — nunca importada fuera del archivo
- `getNextYearJanuaryFirst` — nunca importada fuera del archivo

### Contenido eliminado:
```javascript
export function formatearNombreAula(nombreAula) {
  if (!nombreAula || typeof nombreAula !== 'string') {
    return nombreAula || 'Sin aula';
  }
  if (nombreAula.toLowerCase().includes('laboratorio')) {
    return nombreAula;
  }
  const match = nombreAula.match(/^Aula\s+(\d+)$/i);
  if (match) {
    return match[1];
  }
  return nombreAula;
}

export function validarFacultad(facultad) {
  if (!facultad || typeof facultad !== 'object') {
    return false;
  }
  if (!facultad.id || !facultad.nombre) {
    return false;
  }
  return true;
}

export function obtenerCarrerasSeguras(facultad) {
  if (!validarFacultad(facultad)) {
    return [];
  }
  return Array.isArray(facultad.carreras) ? facultad.carreras : [];
}

export function getNextYearJanuaryFirst(baseDate = new Date()) {
  const nextYear = new Date(baseDate);
  nextYear.setFullYear(nextYear.getFullYear() + 1);
  nextYear.setMonth(0);
  nextYear.setDate(1);
  return nextYear;
}
```

---

## 7. middleware/validation.js — Archivo completo (NO eliminado, pero documentado como no usado)

El archivo completo usa patrón Express (next() callback) incompatible con Next.js Pages API.
Se mantiene pero se documenta como no usado. Ninguna API route lo importa efectivamente.

---

## 8. AsignacionAulaService.js — Bug corregido

En `asignarAulaInformatica`, línea ~160, se referenciaba `examen` que no existe en el scope
del método estático (el parámetro es solo `cantidadEstudiantes`).

### Código original:
```javascript
if (examen && examen.fecha && examen.hora) {
  const tieneConflicto = await this.verificarConflictoHorario(aulaLab.id, examen.fecha, examen.hora);
  if (tieneConflicto) {
    throw new Error(`Laboratorio Informatico no disponible en esa fecha y hora`);
  }
}
```

### Corrección: se eliminó el bloque porque `examen` no está en scope.

---

## 9. nixpacks.toml — Corregido

### Original:
```toml
[start]
cmd = "node server.js"
```

### Nuevo:
```toml
[start]
cmd = "npm start"
```

---

## 10. Archivos Windows .tmp eliminados de src/generated/prisma/

- query_engine-windows.dll.node.tmp11904
- query_engine-windows.dll.node.tmp26792

---

## 11. pages/index.js — Actualizado

Endpoint inexistente `/api/hello` eliminado de la lista.

---

## 12. Dockerfile — Referencia a cron-daemon.js eliminada del COPY y CMD

---
