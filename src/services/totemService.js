import prisma from '../lib/db.js';
import GoogleSheetService from './googleSheetService.js';
import UcasalMappingService from './ucasalMappingService.js';
import { formatDateDDMMYYYY } from '../lib/helpers.js';
import axios from 'axios';
import { filtrarActasPorIdentidad } from './actaExternaService.js';

// Helper functions for extractTotemRowData (moved outside class to avoid bundler issues)
function pickField(obj, keys) {
  for (const k of keys) {
    if (obj && Object.prototype.hasOwnProperty.call(obj, k)) return obj[k];
  }
  return undefined;
}

function toStr(v) {
  if (v === undefined || v === null) return null;
  const s = String(v).trim();
  return s === '' ? null : s;
}

function toDate(v) {
  if (!v) return null;
  const d = v instanceof Date ? v : new Date(v);
  return Number.isNaN(d.getTime()) ? null : d;
}

function toTime(v) {
  if (!v) return null;
  // Google Sheets serial number (0-1 range = fraction of day)
  if (typeof v === 'number' && v >= 0 && v < 1) {
    const totalMinutes = Math.round(v * 24 * 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return new Date(Date.UTC(1970, 0, 1, hours, minutes, 0));
  }
  // Google Apps Script 1899-12-30 epoch date (e.g. "1899-12-30T18:16:48.000Z")
  // These carry a +4:16:48 offset from Argentina's historical timezone (pre-1920).
  // Subtract 4h16m48s (15408 seconds) to recover the real local time, then round.
  if (typeof v === 'string' && v.includes('1899-12-30')) {
    const d = new Date(v);
    if (!Number.isNaN(d.getTime())) {
      const correctedMs = d.getTime() - 15408000; // 4h16m48s in ms
      const corrected = new Date(correctedMs);
      const h = corrected.getUTCHours();
      const m = corrected.getUTCMinutes();
      const roundedH = m >= 30 ? (h + 1) % 24 : h;
      return new Date(Date.UTC(1970, 0, 1, roundedH, 0, 0));
    }
  }
  // String like "18:00", "18:00:00", "6:00 PM"
  if (typeof v === 'string') {
    const match = v.match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?/);
    if (match) {
      const h = parseInt(match[1], 10);
      const m = parseInt(match[2], 10);
      return new Date(Date.UTC(1970, 0, 1, h, m, 0));
    }
  }
  // Date object — extract UTC hours, round to nearest hour
  const d = v instanceof Date ? v : new Date(v);
  if (Number.isNaN(d.getTime())) return null;
  const h = d.getUTCHours();
  const m = d.getUTCMinutes();
  const roundedH = m >= 30 ? (h + 1) % 24 : h;
  return new Date(Date.UTC(1970, 0, 1, roundedH, 0, 0));
}

function extractTotemRowData(row) {
  const sector = toStr(pickField(row, ['SECTOR', 'Sector', 'sector']));
  const carrera = toStr(pickField(row, ['CARRERA', 'Carrera', 'carrera']));
  const materia = toStr(pickField(row, ['MATERIA', 'Materia', 'materia']));
  const areaTema = toStr(pickField(row, ['AREATEMA', 'AREA_TEMA', 'AreaTema', 'areaTema', 'area_tema']));
  const modo = toStr(pickField(row, ['MODO', 'Modo', 'modo']));
  const nombreCorto = toStr(pickField(row, ['NOMBRE CORTO', 'NOMBRE_CORTO', 'Nombre Corto', 'nombreCorto']));
  const fecha = toDate(pickField(row, ['FECHA', 'Fecha', 'fecha']));
  const hora = toTime(pickField(row, ['Hora', 'HORA', 'hora']));
  const url = toStr(pickField(row, ['URL', 'Url', 'url']));
  const catedra = toStr(pickField(row, ['CÁTEDRA', 'CATEDRA', 'Catedra', 'catedra']));
  const docente = toStr(pickField(row, ['Docente', 'DOCENTE', 'docente']));
  const monitoreo = toStr(pickField(row, ['Monitoreo', 'MONITOREO', 'monitoreo']));
  const control = toStr(pickField(row, ['Control a cargo de:', 'CONTROL A CARGO DE:', 'Control', 'control']));
  const tipoExamen = toStr(pickField(row, ['Tipo Examen', 'TIPO EXAMEN', 'tipoExamen']));
  const materialPermitido = toStr(pickField(row, ['Material Permitido', 'MATERIAL PERMITIDO', 'materialPermitido']));
  const observacionesDo = toStr(pickField(row, ['Observaciones DO', 'OBSERVACIONES DO', 'observacionesDo']));
  const observacionesFacultad = toStr(pickField(row, ['Observaciones Facultad', 'OBSERVACIONES FACULTAD', 'observacionesFacultad']));
  const comentarios = toStr(pickField(row, ['Comentarios', 'COMENTARIOS', 'comentarios']));

  const observaciones = [observacionesDo, observacionesFacultad, comentarios].filter(Boolean).join(' | ') || null;

  return {
    sector,
    carrera,
    materia,
    areaTema,
    modo,
    nombreCorto,
    fecha,
    hora,
    url,
    catedra,
    docente,
    monitoreo,
    control,
    tipoExamen,
    materialPermitido,
    observaciones
  };
}

// Módulo-level lock para prevenir syncs concurrentes
// (Next.js mantiene el módulo en memoria entre requests en el mismo proceso)
let _syncInProgress = false;
let _syncStartedAt  = null;
const SYNC_TIMEOUT_MS = 10 * 60 * 1000; // 10 min safety reset

export function isSyncInProgress() {
  // Auto-reset por si el proceso murió sin liberar el lock
  if (_syncInProgress && _syncStartedAt && (Date.now() - _syncStartedAt) > SYNC_TIMEOUT_MS) {
    console.warn('⚠️  Sync lock vencido (>10 min), reseteando...');
    _syncInProgress = false;
    _syncStartedAt  = null;
  }
  return _syncInProgress;
}

export function acquireSyncLock() {
  if (_syncInProgress) return false;
  _syncInProgress = true;
  _syncStartedAt  = Date.now();
  return true;
}

export function releaseSyncLock() {
  _syncInProgress = false;
  _syncStartedAt  = null;
}

class TotemService {
  constructor() {
    this.googleSheetService = new GoogleSheetService();
    this.ucasalMappingService = new UcasalMappingService();
  }

  async mapSectorToFacultad(sector) {
    const sectorStr = sector?.toString();
    if (!sectorStr) return null;

    const mapping = await prisma.sectorFacultad.findFirst({
      where: {
        sector: sectorStr,
        activo: true
      },
      include: {
        facultad: true
      }
    });

    return mapping?.facultad ?? null;
  }

  async mapCarreraTotem(codigoTotem, facultadId) {
    const codigoStr = codigoTotem?.toString();
    if (!codigoStr || !facultadId) return null;

    const existing = await prisma.carreraTotem.findUnique({
      where: { codigoTotem: codigoStr },
      include: { carrera: true }
    });

    if (existing?.esMapeada && existing?.carrera && existing.carrera.facultadId === facultadId) {
      return existing.carrera;
    }

    const carreraCodigo = codigoStr.substring(0, 10);
    let carrera = await prisma.carrera.findFirst({
      where: {
        codigo: carreraCodigo,
        facultadId
      }
    });

    if (!carrera) {
      carrera = await prisma.carrera.create({
        data: {
          nombre: `Carrera ${codigoStr}`,
          codigo: carreraCodigo,
          facultadId,
          activa: true
        }
      });
    }

    await prisma.carreraTotem.upsert({
      where: { codigoTotem: codigoStr },
      update: {
        carreraId: carrera.id,
        esMapeada: true,
        activo: true
      },
      create: {
        codigoTotem: codigoStr,
        carreraId: carrera.id,
        esMapeada: true,
        nombreTotem: `Carrera ${codigoStr}`,
        activo: true
      }
    });

    return carrera;
  }

  async createExamenFromTotem(totemData, carreraId, facultadId, aulaId = null) {
    const createData = {
      carreraId,
      facultadId,
      ...(aulaId ? { aulaId } : {}),
      materia_codigo: totemData.materia?.toString() || 'SIN_CODIGO',
      nombreMateria: totemData.nombreCorto || totemData.materia || 'Sin nombre',
      areatema: totemData.areaTema,
      fecha: totemData.fecha,
      hora: totemData.hora,
      tipoExamen: totemData.tipoExamen,
      modalidadExamen: totemData.tipoExamen?.includes('Virtual') ? 'virtual' : 'presencial',
      catedra: totemData.catedra,
      docente: totemData.docente,
      monitoreo: totemData.monitoreo,
      control_cargo: totemData.control,
      materialPermitido: totemData.materialPermitido,
      observaciones: totemData.observaciones,
      url: totemData.url,
      fechaUltConsulta: new Date(),
      activo: true
    };

    return await prisma.examen.create({
      data: createData
    });
  }

  async syncTotemData(options = {}) {
    const startTime = Date.now();

    try {
      console.log('🚀 Iniciando sincronización TOTEM con Google Sheets API...');
      
      // Obtener datos directamente desde Google Sheets
      const sheetResult = await this.googleSheetService.fetchAndProcessData({ gid: options.gid });
      
      if (!sheetResult.success || !sheetResult.data || sheetResult.data.length === 0) {
        throw new Error('No se obtuvieron datos válidos de Google Sheets');
      }

      console.log(`📊 Datos obtenidos: ${sheetResult.data.length} filas válidas`);
      
      // Validar estructura de datos
      const validation = this.googleSheetService.validateDataStructure(sheetResult.data);
      if (!validation.isValid) {
        console.warn(`⚠️ Validación: ${validation.issues.length} problemas encontrados`);
        validation.issues.slice(0, 5).forEach(issue => {
          console.warn(`  - Fila ${issue.row}: ${issue.message}`);
        });
      }

      // Detectar tipos de exámenes y sectores
      const detection = this.googleSheetService.detectExamTypes(sheetResult.data);
      console.log(`🔍 Detectados: ${detection.totalUniqueSectors} sectores, ${detection.totalUniqueCareers} carreras`);

      // Guardar datos brutos en TotemData
      const source = options.gid ? `google-sheets:gid=${options.gid}` : 'google-sheets';
      const totemDataRecord = await this.saveRawTotemData(source, sheetResult.data, sheetResult.metadata);

      const gid = options.gid ?? null;
      let sheetName = options.sheetName ?? null;
      if (gid && !sheetName) {
        try {
          const sheetsResult = await this.googleSheetService.listSheets();
          const match = sheetsResult?.data?.find(s => s?.gid?.toString() === gid.toString());
          sheetName = match?.name ?? null;
        } catch (e) {
          sheetName = null;
        }
      }
      
      // Procesar los datos y crear exámenes
      const processedExams = await this.processTotemDataToExams(sheetResult.data, { gid, sheetName });
      
      // 🚀 NUEVA FUNCIONALIDAD: Sincronización automática de inscriptos
      console.log('🔄 Iniciando sincronización automática de inscriptos...');
      await this.syncInscriptosAutomatico(processedExams.created.concat(processedExams.updated));
      
      const duration = Date.now() - startTime;
      
      console.log(`🎉 Sincronización TOTEM completada en ${duration}ms`);
      console.log(`📊 Total: ${processedExams.created.length + processedExams.updated.length} exámenes creados/actualizados de ${sheetResult.data.length} filas`);
      console.log(`📊 Detalle: ${processedExams.created.length} creados, ${processedExams.updated.length} actualizados`);
      
      return {
        success: true,
        data: {
          source: 'sheet.best',
          totemDataId: totemDataRecord.id,
          examensCreated: processedExams.created.length,
          examensUpdated: processedExams.updated.length,
          examensInactivated: processedExams.inactivated?.length || 0,
          totalProcessed: processedExams.created.length + processedExams.updated.length,
          rowsProcessed: sheetResult.data.length,
          validation: validation,
          detection: detection,
          metadata: sheetResult.metadata,
          // DEBUG: Verificar que los cambios se desplegaron
          ucasalMappingResult: processedExams.ucasalMappingResult || 'NO_DISPONIBLE',
          debugLogs: processedExams.debugLogs || ['DEBUG: Logs no disponibles'],
          deployVersion: 'v2025-01-27-debug'
        },
        duration,
        timestamp: new Date().toISOString()
      };

    } catch (error) {
      console.error('❌ Error en sincronización TOTEM:', error);
      throw error;
    }
  }

  async saveRawTotemData(source, sheetData, metadata = {}) {
    return await prisma.totemData.create({
      data: {
        sheetName: source,
        data: {
          rawData: sheetData,
          metadata: metadata,
          savedAt: new Date().toISOString()
        },
        processed: false
      }
    });
  }

  async processTotemDataToExams(sheetData, context = {}) {
    const createdExams = [];
    const updatedExams = [];
    const inactivatedExams = [];
    const debugLogs = []; // Capturar logs para retornar
    const processedKeys = new Set();
    
    console.log(`🔄 Procesando ${sheetData.length} filas para crear/actualizar exámenes...`);
    
    // 🎯 PASO 1: MAPEO COMPLETO PREVIO CON UCASAL
    debugLogs.push('🗺️ DEBUG: ===== INICIANDO MAPEO UCASAL =====');
    debugLogs.push(`🔍 DEBUG: Procesando ${sheetData.length} filas de sheet.best`);
    debugLogs.push(`🔧 DEBUG: UcasalMappingService existe: ${!!this.ucasalMappingService}`);
    
    console.log('🗺️ DEBUG: ===== INICIANDO MAPEO UCASAL =====');
    console.log(`🔍 DEBUG: Procesando ${sheetData.length} filas de sheet.best`);
    console.log('🔧 DEBUG: Verificando UcasalMappingService...', !!this.ucasalMappingService);
    
    let ucasalMappingResult = 'NO_DISPONIBLE';
    try {
      debugLogs.push('🚀 DEBUG: Llamando a mapAllCarrerasFromSheetData...');
      console.log('🚀 DEBUG: Llamando a mapAllCarrerasFromSheetData...');
      
      const ucasalService = new UcasalMappingService();
      const mappingResult = await ucasalService.mapAllCarrerasFromSheetData(sheetData);
      
      if (mappingResult && mappingResult.logs) {
        // Agregar todos los logs detallados del UcasalMappingService
        debugLogs.push(...mappingResult.logs);
      }
      
      if (mappingResult && mappingResult.success) {
        ucasalMappingResult = `EXITOSO: ${mappingResult.procesadas} carreras mapeadas, ${mappingResult.errores} errores`;
      } else {
        ucasalMappingResult = `ERROR: ${mappingResult?.error || 'Error desconocido'}`;
      }
      
      debugLogs.push('✅ DEBUG: ===== MAPEO UCASAL COMPLETADO =====');
    } catch (error) {
      ucasalMappingResult = `ERROR: ${error.message}`;
      debugLogs.push(`❌ DEBUG: Error en mapeo UCASAL: ${error.message}`);
      console.error('Error en mapeo UCASAL:', error);
      console.error('❌ DEBUG: ===== FIN ERROR =====');
    }
    
    debugLogs.push('🔄 DEBUG: Continuando con creación de exámenes...');
    console.log('🔄 DEBUG: Continuando con creación de exámenes...');
    
    for (const row of sheetData) {
      try {
        // Extraer datos del row (ya viene limpio de Sheet.best)
        const totemData = extractTotemRowData(row);
        
        if (!totemData.sector || !totemData.carrera || !totemData.materia || !totemData.fecha) {
          console.log('Fila incompleta, omitiendo:', { 
            sector: totemData.sector, 
            carrera: totemData.carrera, 
            materia: totemData.materia, 
            fecha: totemData.fecha 
          });
          continue;
        }

        processedKeys.add(this.buildExamKeyFromTotemData(totemData));


        // 1. Mapear sector a facultad
        const facultad = await this.mapSectorToFacultad(totemData.sector);
        if (!facultad) {
          console.log(`Sector ${totemData.sector} no mapeado a ninguna facultad`);
          continue;
        }

        // 2. Mapear carrera del TOTEM a carrera local
        const carrera = await this.mapCarreraTotem(totemData.carrera, facultad.id);
        if (!carrera) {
          console.log(`Carrera TOTEM ${totemData.carrera} no mapeada`);
          continue;
        }

        // 4. 🆕 VERIFICAR SI EXISTE PARA ACTUALIZAR O CREAR
        const existeExamen = await this.checkExamenDuplicate(totemData, carrera.id, context);
        
        if (existeExamen) {
          // 🔄 ACTUALIZAR EXAMEN EXISTENTE CON NUEVOS DATOS DEL SHEET
          const horaStr = totemData.hora ? totemData.hora.getHours() + ':' + totemData.hora.getMinutes() : 'sin-hora';
          
          console.log(`🔄 ACTUALIZANDO EXAMEN EXISTENTE: ${totemData.sector}/${totemData.carrera}/${totemData.materia} (${totemData.fecha.toDateString()} ${horaStr}) - ID: ${existeExamen.id}`);
          
          // Actualizar el examen con los nuevos datos
          const examenActualizado = await this.updateExamenFromTotem(existeExamen.id, totemData, carrera.id, facultad.id, null);
          
          // Actualizar también el registro ExamenTotem con datos originales actualizados
          await this.updateExamenTotemRecord(existeExamen.id, totemData, row, context);
          
          updatedExams.push(examenActualizado);
          
        } else {
          // 5. ✅ CREAR NUEVO EXAMEN (no existe)
          console.log(`✅ CREANDO NUEVO EXAMEN: ${totemData.sector}/${totemData.carrera}/${totemData.materia}`);
          
          const examen = await this.createExamenFromTotem(totemData, carrera.id, facultad.id, null);
          
          // Crear registro de ExamenTotem con datos originales
          await this.createExamenTotemRecord(examen.id, totemData, row, context);
          
          createdExams.push(examen);
        }

      } catch (error) {
        console.error('Error procesando fila del TOTEM:', error, row);
      }
    }

    if (context?.gid) {
      try {
        const existing = await prisma.examen.findMany({
          where: {
            activo: true,
            examenTotem: {
              gid: context.gid.toString()
            }
          },
          include: {
            examenTotem: true
          }
        });

        const toInactivateIds = [];
        for (const ex of existing) {
          const k = this.buildExamKeyFromExistingExam(ex);
          if (!processedKeys.has(k)) {
            toInactivateIds.push(ex.id);
          }
        }

        if (toInactivateIds.length > 0) {
          await prisma.examen.updateMany({
            where: { id: { in: toInactivateIds } },
            data: { activo: false }
          });
          inactivatedExams.push(...toInactivateIds);
        }
      } catch (e) {
        console.error('Error realizando soft-delete por gid:', e);
      }
    }

    console.log(`✅ Procesamiento completado: ${createdExams.length} exámenes creados, ${updatedExams.length} exámenes actualizados`);
    
    return { 
      created: createdExams, 
      updated: updatedExams,
      inactivated: inactivatedExams,
      ucasalMappingResult,
      debugLogs 
    };
  }

  buildExamKeyFromTotemData(totemData) {
    const hora = totemData.hora
      ? `${totemData.hora.getUTCHours()}:${String(totemData.hora.getUTCMinutes()).padStart(2, '0')}`
      : '';
    const fecha = totemData.fecha instanceof Date
      ? totemData.fecha.toISOString().split('T')[0]
      : '';
    return [
      totemData.materia?.toString().trim().toLowerCase() || '',
      totemData.areaTema?.toString().trim().toLowerCase() || '',
      fecha,
      hora,
      totemData.carrera?.toString().trim().toLowerCase() || '',
      totemData.docente?.toString().trim().toLowerCase() || '',
      totemData.catedra?.toString().trim().toLowerCase() || ''
    ].join('|');
  }

  buildExamKeyFromExistingExam(examen) {
    const hora = examen.hora
      ? `${examen.hora.getUTCHours()}:${String(examen.hora.getUTCMinutes()).padStart(2, '0')}`
      : '';
    const fecha = examen.fecha instanceof Date
      ? examen.fecha.toISOString().split('T')[0]
      : '';
    return [
      examen.examenTotem?.materiaTotem?.toString().trim().toLowerCase() || '',
      examen.examenTotem?.areaTemaTotem?.toString().trim().toLowerCase() || '',
      fecha,
      hora,
      examen.examenTotem?.carreraTotem?.toString().trim().toLowerCase() || '',
      examen.examenTotem?.docenteTotem?.toString().trim().toLowerCase() || '',
      examen.examenTotem?.catedraTotem?.toString().trim().toLowerCase() || ''
    ].join('|');
  }

  async updateExamenFromTotem(examenId, totemData, carreraId, facultadId, aulaId = null) {
    // 🔒 PRESERVAR ASIGNACIONES DE AULAS EXISTENTES
    // Solo actualizar aulaId si viene específicamente desde TOTEM, sino mantener el actual
    const examenActual = await prisma.examen.findUnique({
      where: { id: examenId },
      select: { aulaId: true }
    });
    
    const updateData = {
      // IDs de relación
      carreraId,
      facultadId,    // ✅ NUEVO: requerido
      // 🔒 CRÍTICO: Solo actualizar aulaId si no hay asignación manual previa
      ...(examenActual.aulaId === null && aulaId !== null && { aulaId }),
        
        // Campos para match con sistemas externos  
        materia_codigo: totemData.materia?.toString() || 'SIN_CODIGO',     // ✅ NUEVO: requerido
        nombreMateria: totemData.nombreCorto || totemData.materia || 'Sin nombre',
        areatema: totemData.areaTema,  // ✅ NUEVO: para match UCASAL
        
        // Información básica del examen
        fecha: totemData.fecha,
        hora: totemData.hora,
        tipoExamen: totemData.tipoExamen,
        modalidadExamen: totemData.tipoExamen?.includes('Virtual') ? 'virtual' : 'presencial',
        
        // Información de personal
        catedra: totemData.catedra,         // ✅ NUEVO
        docente: totemData.docente,         // ✅ NUEVO
        monitoreo: totemData.monitoreo,
        control_cargo: totemData.control,   // ✅ NUEVO
        
        // Información adicional
        materialPermitido: totemData.materialPermitido,
        observaciones: totemData.observaciones,
        url: totemData.url,                 // ✅ NUEVO
        
        // Control de sistema
        fechaUltConsulta: new Date(),
        activo: true
      };
    
    return await prisma.examen.update({
      where: { id: examenId },
      data: updateData
    });
  }

  async createExamenTotemRecord(examenId, totemData, originalRow, context = {}) {
    return await prisma.examenTotem.create({
      data: {
        examenId,
        gid: context?.gid ? context.gid.toString() : null,
        sheetName: context?.sheetName ?? null,
        sectorTotem: totemData.sector,
        carreraTotem: totemData.carrera,
        materiaTotem: totemData.materia,
        areaTemaTotem: totemData.areaTema,
        modoTotem: totemData.modo,
        urlTotem: totemData.url,
        catedraTotem: totemData.catedra,
        docenteTotem: totemData.docente,
        monitoreoTotem: totemData.monitoreo,
        controlTotem: totemData.control,
        dataOriginal: originalRow
      }
    });
  }

  async updateExamenTotemRecord(examenId, totemData, originalRow, context = {}) {
    return await prisma.examenTotem.update({
      where: { examenId },
      data: {
        gid: context?.gid ? context.gid.toString() : null,
        sheetName: context?.sheetName ?? null,
        sectorTotem: totemData.sector,
        carreraTotem: totemData.carrera,
        materiaTotem: totemData.materia,
        areaTemaTotem: totemData.areaTema,
        modoTotem: totemData.modo,
        urlTotem: totemData.url,
        catedraTotem: totemData.catedra,
        docenteTotem: totemData.docente,
        monitoreoTotem: totemData.monitoreo,
        controlTotem: totemData.control,
        dataOriginal: originalRow
      }
    });
  }

  // Métodos de gestión de mapeos (sin cambios)
  async createSectorFacultadMapping(sector, facultadId) {
    return await prisma.sectorFacultad.create({
      data: { sector, facultadId, activo: true }
    });
  }

  async mapCarreraTotemToCarrera(codigoTotem, carreraId) {
    return await prisma.carreraTotem.upsert({
      where: { codigoTotem },
      update: { carreraId, esMapeada: true },
      create: { codigoTotem, carreraId, esMapeada: true, nombreTotem: `Carrera ${codigoTotem}` }
    });
  }

  async getSectoresNoMapeados() {
    try {
      // Implementar lógica para detectar sectores desde Sheet.best que no están mapeados
      const sheetResult = await this.googleSheetService.fetchAndProcessData();
      const detection = this.googleSheetService.detectExamTypes(sheetResult.data);
      
      const sectoresEncontrados = (detection.sectors || [])
        .map(s => s?.toString().trim())
        .filter(Boolean);
      const sectoresMapeados = await prisma.sectorFacultad.findMany({
        where: { activo: true },
        select: { sector: true }
      });
      
      const sectoresMapeadosArray = sectoresMapeados
        .map(s => s.sector?.toString().trim())
        .filter(Boolean);
      const sectoresNoMapeados = sectoresEncontrados.filter(s => !sectoresMapeadosArray.includes(s));
      
      return sectoresNoMapeados;
    } catch (error) {
      console.error('Error obteniendo sectores desde Google Sheets:', error);
      return [];
    }
  }

  async getCarrerasTotemNoMapeadas() {
    return await prisma.carreraTotem.findMany({
      where: { 
        esMapeada: false,
        activo: true 
      },
      orderBy: { codigoTotem: 'asc' }
    });
  }

  async getEstadisticasTotem() {
    const [
      totalTotemData,
      totalExamenes,
      totalExamenesDesdeHoy,
      sectoresNoMapeados,
      carrerasNoMapeadas
    ] = await Promise.all([
      prisma.totemData.count(),
      prisma.examen.count(),
      prisma.examen.count({
        where: {
          activo: true,
          fecha: { gte: new Date(new Date().toISOString().split('T')[0] + 'T00:00:00.000Z') }
        }
      }),
      this.getSectoresNoMapeados(),
      this.getCarrerasTotemNoMapeadas()
    ]);

    return {
      totalRegistrosTotem: totalTotemData,
      totalExamenesCreados: totalExamenes,
      totalExamenesDesdeHoy,
      sectoresNoMapeados: sectoresNoMapeados.length,
      carrerasNoMapeadas: carrerasNoMapeadas.length,
      listaSectoresNoMapeados: sectoresNoMapeados,
      listaCarrerasNoMapeadas: carrerasNoMapeadas
    };
  }

  /**
   * VERIFICACIÓN CORRECTA DE DUPLICADOS SEGÚN CONVERGENCIA
   * Un examen es único si difiere en: materia + areaTema + fecha + horario + catedra
   */
  async checkExamenDuplicate(totemData, carreraId, context = {}) {
    try {
      // Extraer YYYY-MM-DD en UTC para evitar problemas de timezone en el query
      const dateStr = totemData.fecha instanceof Date
        ? totemData.fecha.toISOString().split('T')[0]
        : null;

      if (!dateStr) return null;

      const fechaInicio = new Date(dateStr + 'T00:00:00.000Z');
      const fechaFin    = new Date(dateStr + 'T23:59:59.999Z');

      // hora en UTC para comparar en JS (evita problemas con cómo Prisma serializa TIME)
      const horaUTCStr = totemData.hora
        ? `${totemData.hora.getUTCHours()}:${String(totemData.hora.getUTCMinutes()).padStart(2, '0')}`
        : null;

      // Query directo a BD con todos los campos de unicidad — sin carga de toda la fecha en memoria
      // La colación utf8mb4_unicode_ci en MySQL hace la comparación case-insensitive automáticamente
      const candidatos = await prisma.examen.findMany({
        where: {
          carreraId,
          fecha: { gte: fechaInicio, lte: fechaFin },
          activo: true,
          examenTotem: {
            materiaTotem:  totemData.materia?.toString().trim()  || '',
            areaTemaTotem: totemData.areaTema?.toString().trim() || null,
            docenteTotem:  totemData.docente?.toString().trim()  || null,
            catedraTotem:  totemData.catedra?.toString().trim()  || null,
          },
        },
        include: { examenTotem: true },
      });

      if (candidatos.length === 0) return null;

      // Si hay un solo candidato (caso más frecuente), devolverlo directamente
      if (candidatos.length === 1) {
        console.log(`✅ DUPLICADO DETECTADO: Examen ID ${candidatos[0].id} (${candidatos[0].nombreMateria})`);
        return candidatos[0];
      }

      // Más de un candidato: desempatar por hora en UTC
      if (horaUTCStr !== null) {
        for (const c of candidatos) {
          if (!c.hora) continue;
          const existingHora = `${c.hora.getUTCHours()}:${String(c.hora.getUTCMinutes()).padStart(2, '0')}`;
          if (existingHora === horaUTCStr) {
            console.log(`✅ DUPLICADO DETECTADO (por hora): Examen ID ${c.id}`);
            return c;
          }
        }
      }

      // Sin candidato exacto por hora, devolver el primero
      console.log(`✅ DUPLICADO DETECTADO (fallback): Examen ID ${candidatos[0].id}`);
      return candidatos[0];

    } catch (error) {
      console.error('❌ Error en checkExamenDuplicate:', error);
      return null;
    }
  }

  /**
   *  OBTENER INSCRIPTOS DESDE UCASAL - VERSIÓN MEJORADA
   * Match usando materia_codigo + areaTema según datos reales del usuario
   */
  async obtenerInscriptosUcasal(examenId) {
    try {
      console.log(`🔍 Consultando inscriptos: examen ${examenId}`);
      
      const examen = await prisma.examen.findUnique({
        where: { id: examenId },
        include: { examenTotem: true }
      });
      
      if (!examen) {
        throw new Error(`Examen ${examenId} no encontrado`);
      }
      
      // CORREGIDO: Usar materiaTotem en lugar de materia_codigo
      const materiaCode = examen.examenTotem?.materiaTotem;
      const areaTema = examen.examenTotem?.areaTemaTotem;
      const carreraTotem = examen.examenTotem?.carreraTotem;
      const fecha = examen.fecha;
      
      // Validar que tenemos los datos necesarios
      if (!materiaCode) {
        throw new Error(`Examen ${examenId} no tiene código de materia definido en examenTotem.materiaTotem`);
      }
      
      // 2. Construir rango de fechas específico para el examen
      const fechaExamen = new Date(fecha);
      
      // Formatear fechas con DD/MM/YYYY (con ceros a la izquierda)
      const fechaDesdeStr = formatDateDDMMYYYY(fechaExamen);
      
      // 3. Construir URL de UCASAL (producción) con areaTema
      // fechaHasta = mismo día que fechaDesde para acotar solo el examen en cuestión
      const ucasalBaseUrl = process.env.UCASAL_API_URL || 'https://backprod.ucasal.edu.ar/actas/v1';
      const ucasalUrl = `${ucasalBaseUrl}/acta/materia/${materiaCode}?rendida=false&fechaDesde=${fechaDesdeStr}&fechaHasta=${fechaDesdeStr}${areaTema ? `&areaTema=${areaTema}` : ''}`;
      
      console.log(`🔍 Consultando UCASAL: materia=${materiaCode}, areaTema=${areaTema}, fecha=${fechaDesdeStr}`);
      
      // 4. Hacer petición a UCASAL con timeout y retry
      let response;
      let retryCount = 0;
      const maxRetries = 3;
      
      while (retryCount < maxRetries) {
        try {
          response = await axios.get(ucasalUrl, {
            timeout: 30000, // 30 segundos
            headers: {
              'Accept': 'application/json',
              'User-Agent': 'TOTEM-API/1.0'
            }
          });
          break; // Salir del loop si la petición es exitosa
        } catch (axiosError) {
          retryCount++;
          
          if (axiosError.code === 'ENOTFOUND' || axiosError.code === 'ECONNREFUSED') {
            throw new Error(`API UCASAL no disponible: ${axiosError.message}`);
          }
          
          if (axiosError.response && axiosError.response.status === 404) {
            console.log(`⚠️ Materia ${materiaCode} no encontrada en UCASAL (404)`);
            return {
              success: true,
              examenId,
              actasEncontradas: 0,
              estudiantesTotal: 0,
              estudiantesCreados: 0,
              cantidadInscriptos: 0,
              fechaConsulta: new Date(),
              warning: `Materia ${materiaCode} no encontrada en UCASAL`
            };
          }
          
          // Si es error 500 y aún hay reintentos
          if (axiosError.response && axiosError.response.status === 500 && retryCount < maxRetries) {
            console.log(`⚠️ Error 500 para materia ${materiaCode}, reintento ${retryCount}/${maxRetries} en 2 segundos...`);
            await new Promise(resolve => setTimeout(resolve, 2000)); // Esperar 2 segundos
            continue;
          }
          
          // Si se agotaron los reintentos o es otro error
          throw axiosError;
        }
      }
      
      if (response.status !== 200) {
        throw new Error(`Error UCASAL: ${response.status} - ${response.statusText}`);
      }
      
      const actasData = response.data;
      
      // Validar que la respuesta sea un array
      if (!Array.isArray(actasData)) {
        console.log(`⚠️ Sin actas para materia ${materiaCode}`);
        return {
          success: true,
          examenId,
          actasEncontradas: 0,
          estudiantesTotal: 0,
          estudiantesCreados: 0,
          cantidadInscriptos: 0,
          fechaConsulta: new Date(),
          warning: 'Respuesta de UCASAL en formato inesperado'
        };
      }
      
      // 5. Filtrar por materia, areaTema Y carrera para asociar correctamente los inscriptos
      let actasFiltradas = actasData.filter(acta => {
        // Convertir a string para comparación segura
        const materiaActaStr = String(acta.materia).trim();
        const materiaExamenStr = String(materiaCode).trim();
        const coincideMateria = materiaActaStr === materiaExamenStr;
        
        // Filtrar por areaTema si está especificado
        let coincideAreaTema = true;
        if (areaTema && areaTema !== 'null' && areaTema !== '') {
          const areaActaStr = String(acta.areaTema || '').trim();
          const areaExamenStr = String(areaTema).trim();
          coincideAreaTema = areaActaStr === areaExamenStr;
        }

        // Filtrar por carrera para no mezclar inscriptos de distintas carreras con la misma materia
        let coincideCarrera = true;
        if (carreraTotem && carreraTotem !== 'null' && carreraTotem !== '') {
          const carreraActaStr = String(acta.carrera || '').trim();
          const carreraExamenStr = String(carreraTotem).trim();
          coincideCarrera = carreraActaStr === carreraExamenStr;
        }
        
        console.log(`🔍 Acta: materia=${acta.materia}, areaTema=${acta.areaTema}, carrera=${acta.carrera}, coincideMateria=${coincideMateria}, coincideAreaTema=${coincideAreaTema}, coincideCarrera=${coincideCarrera}`);
        
        return coincideMateria && coincideAreaTema && coincideCarrera;
      });
      
      console.log(`✅ ${actasFiltradas.length} actas encontradas (materia/areaTema/carrera)`);

      // 🎯 DISCRIMINACIÓN POR DOCENTE + CÁTEDRA (combinada)
      // Si existen exámenes "hermanos" (misma materia/areaTema/carrera/fecha y distinta cátedra),
      // usamos modo strict para NO replicar los mismos inscriptos en cada hermano.
      if ((examen.docente || examen.catedra) && actasFiltradas.length > 0) {
        const dateStr = examen.fecha instanceof Date
          ? examen.fecha.toISOString().split('T')[0]
          : null;
        const fechaInicio = dateStr ? new Date(dateStr + 'T00:00:00.000Z') : null;
        const fechaFin    = dateStr ? new Date(dateStr + 'T23:59:59.999Z') : null;

        let siblingsCount = 1;
        if (fechaInicio && fechaFin) {
          siblingsCount = await prisma.examen.count({
            where: {
              activo: true,
              carreraId: examen.carreraId,
              fecha: { gte: fechaInicio, lte: fechaFin },
              examenTotem: {
                materiaTotem: materiaCode,
                areaTemaTotem: areaTema || null,
              },
            },
          });
        }
        const tieneCatedraExplicita = examen.catedra && examen.catedra !== '-' && examen.catedra.trim() !== '';
        const strict = tieneCatedraExplicita || siblingsCount > 1;
        console.log(`👥 Exámenes hermanos detectados: ${siblingsCount} (strict=${strict})`);

        actasFiltradas = filtrarActasPorIdentidad(
          actasFiltradas,
          examen.docente,
          examen.catedra,
          { umbral: 0.4, strict }
        );
        console.log(`🎯 Tras discriminar por identidad: ${actasFiltradas.length} actas`);
      }
      
      // 6. Extraer estudiantes de todas las actas filtradas
      const estudiantesTotal = [];

      // Filtro obligatorio: modo=7
      const MODO_REQUERIDO = "7";
      
      for (const acta of actasFiltradas) {
        if (acta.alumnos && Array.isArray(acta.alumnos)) {
          for (const alumno of acta.alumnos) {
            // 🎯 FILTROS OBLIGATORIOS: lugar=3 (número) Y modo="7"
            // lugar es un número en la API, usar toString() para comparación segura
            const esLugarValido = alumno.lugar?.toString() === "3";
            const esModoValido = alumno.modo?.toString() === MODO_REQUERIDO;
            
            if (esLugarValido && esModoValido) {
              estudiantesTotal.push(alumno);
              console.log(`✅ Inscripto válido: ${alumno.apen}, lugar="${alumno.lugar}", modo="${alumno.modo}"`);
            } else {
              console.log(`❌ Filtrado: ${alumno.apen}, lugar="${alumno.lugar}", modo="${alumno.modo}" - Requiere lugar=3 Y modo=7`);
            }
          }
        }
      }
      
      console.log(`👥 ${estudiantesTotal.length} estudiantes VÁLIDOS procesados (con lugar="3")`);
      
      // 7. Crear registros EstudianteExamen
      let estudiantesCreados = 0;
      let estudiantesProcesados = new Set();
      
      for (const alumno of estudiantesTotal) {
        // Evitar duplicados por DNI
        const dniStr = alumno.ndocu?.toString();
        if (!dniStr || estudiantesProcesados.has(dniStr)) {
          continue;
        }
        
        estudiantesProcesados.add(dniStr);
        
        try {
          // Verificar si el estudiante ya existe
          await prisma.estudiante.upsert({
            where: { dni: dniStr },
            update: {
              nombre: alumno.apen ? alumno.apen.split(',')[1]?.trim() || 'Sin nombre' : 'Sin nombre',
              apellido: alumno.apen ? alumno.apen.split(',')[0]?.trim() || 'Sin apellido' : 'Sin apellido'
            },
            create: {
              dni: dniStr,
              nombre: alumno.apen ? alumno.apen.split(',')[1]?.trim() || 'Sin nombre' : 'Sin nombre',
              apellido: alumno.apen ? alumno.apen.split(',')[0]?.trim() || 'Sin apellido' : 'Sin apellido',
              activo: true
            }
          });
          
          // Crear relación estudiante-examen
          await prisma.estudianteExamen.upsert({
            where: { 
              examen_id_dni: { 
                examen_id: examenId, 
                dni: dniStr
              }
            },
            update: {
              asistencia: alumno.notaTipo !== 'AUSENTE',
              aprobado: alumno.notaTipo === 'APROBADO',
              nota: alumno.notaNota === 'AUSENTE' ? null : parseFloat(alumno.notaNota) || null
            },
            create: {
              examen_id: examenId,
              dni: dniStr,
              asistencia: alumno.notaTipo !== 'AUSENTE',
              aprobado: alumno.notaTipo === 'APROBADO',
              nota: alumno.notaNota === 'AUSENTE' ? null : parseFloat(alumno.notaNota) || null
            }
          });
          
          estudiantesCreados++;
        } catch (error) {
          console.error(`Error con estudiante ${alumno.ndocu}:`, error.message);
        }
      }
      
      // 8. Actualizar contador en el examen
      await prisma.examen.update({
        where: { id: examenId },
        data: {
          cantidadInscriptos: estudiantesCreados,
          fechaUltConsulta: new Date()
        }
      });
      
      return {
        success: true,
        examenId,
        actasEncontradas: actasFiltradas.length,
        estudiantesTotal: estudiantesTotal.length,
        estudiantesCreados,
        cantidadInscriptos: estudiantesCreados,
        fechaConsulta: new Date()
      };
      
    } catch (error) {
      console.error('❌ Error obteniendo inscriptos UCASAL:', error);
      
      // Marcar que hubo un intento de consulta fallido
      try {
        await prisma.examen.update({
          where: { id: examenId },
          data: {
            fechaUltConsulta: new Date() // Marcar que se intentó consultar
          }
        });
      } catch (updateError) {
        console.error('Error actualizando fecha de consulta:', updateError);
      }
      
      throw error;
    }
  }

  /**
   * � VALIDACIÓN PRE-CONSULTA UCASAL
   * Verifica si un código de materia es válido en UCASAL antes de consultar inscriptos
   */
  async validateUcasalMapping(materiaCodigoTotem, areaTema = null) {
    try {
      console.log(`🔍 Validando mapeo UCASAL para materia: ${materiaCodigoTotem}, areaTema: ${areaTema}`);
      
      // Formatear fecha actual para consulta mínima
      const hoy = new Date();
      const fechaDesdeStr = formatDateDDMMYYYY(hoy);
      
      // Consulta rápida solo para validar si la materia existe
      const ucasalBaseUrl = process.env.UCASAL_API_URL || 'https://backprod.ucasal.edu.ar/actas/v1';
      const testUrl = `${ucasalBaseUrl}/acta/materia/${materiaCodigoTotem}?rendida=false&fechaDesde=${fechaDesdeStr}${areaTema ? `&areaTema=${areaTema}` : ''}`;
      
      const response = await axios.get(testUrl, {
        timeout: 5000 // 5 segundos máximo para validación
      });
      
      if (response.status !== 200) {
        console.log(`❌ Materia ${materiaCodigoTotem} no válida en UCASAL (status: ${response.status})`);
        return { isValid: false, reason: `HTTP ${response.status}` };
      }
      
      const data = response.data;
      
      // Verificar que sea un array válido
      if (!Array.isArray(data)) {
        console.log(`❌ Materia ${materiaCodigoTotem} devuelve formato inválido`);
        return { isValid: false, reason: 'Formato de respuesta inválido' };
      }
      
      // Si hay areaTema específico, verificar que exista
      if (areaTema && data.length > 0) {
        const tieneAreaTema = data.some(acta => acta.areaTema === areaTema);
        if (!tieneAreaTema) {
          console.log(`⚠️ Materia ${materiaCodigoTotem} válida pero areaTema '${areaTema}' no encontrado`);
          return { isValid: true, hasAreaTema: false, reason: `areaTema '${areaTema}' no encontrado` };
        }
      }
      
      console.log(`✅ Materia ${materiaCodigoTotem} válida en UCASAL (${data.length} actas)`);
      return { 
        isValid: true, 
        hasAreaTema: areaTema ? true : null,
        actasCount: data.length 
      };
      
    } catch (error) {
      console.log(`❌ Error validando materia ${materiaCodigoTotem}: ${error.message}`);
      return { isValid: false, reason: error.message };
    }
  }

  /**
   * 🚀 SINCRONIZACIÓN AUTOMÁTICA DE INSCRIPTOS - MEJORADA
   * Solo procesa exámenes con mapeo UCASAL válido
   */
  async syncInscriptosAutomatico(examenes) {
    console.log(`🔄 Sincronizando inscriptos para ${examenes.length} exámenes...`);
    
    let exitosos = 0;
    let fallidos = 0;
    
    for (const examen of examenes) {
      try {
        // Verificar que el examen tenga código de materia
        const examenCompleto = await prisma.examen.findUnique({
          where: { id: examen.id },
          include: { examenTotem: true }
        });
        
        if (!examenCompleto?.examenTotem?.materiaTotem) {
          continue;
        }
        
        // 🚀 AÑADIR DELAY para evitar sobrecarga de API UCASAL
        await new Promise(resolve => setTimeout(resolve, 500)); // 500ms delay
        
        // Consultar inscriptos usando el método existente
        const inscriptosResult = await this.obtenerInscriptosUcasal(examen.id);
        
        if (inscriptosResult && inscriptosResult.success) {
          exitosos++;
        } else {
          fallidos++;
        }
        
      } catch (error) {
        fallidos++;
        console.error(`❌ Error examen ${examen.id}:`, error.message);
      }
    }
    
    console.log(`✅ Completado: ${exitosos} exitosos, ${fallidos} fallidos`);
    
    return {
      success: true,
      procesados: examenes.length,
      exitosos,
      fallidos
    };
  }

  /**
   * 🎯 SINCRONIZACIÓN INDIVIDUAL DE INSCRIPTOS
   * Para consultar inscriptos de UN SOLO examen desde el backoffice
   */
  async syncInscriptosIndividual(examenId) {
    try {
      console.log(`🎯 Sincronización individual de inscriptos para examen ID: ${examenId}`);
      
      // Verificar que el examen existe
      const examen = await prisma.examen.findUnique({
        where: { id: parseInt(examenId) },
        include: { 
          examenTotem: true,
          carrera: {
            include: { facultad: true }
          },
          aula: true
        }
      });
      
      if (!examen) {
        throw new Error(`Examen ${examenId} no encontrado`);
      }
      
      if (!examen.examenTotem?.materiaTotem) {
        throw new Error(`Examen ${examenId} no tiene código de materia asociado`);
      }
      
      const materiaCode = examen.examenTotem.materiaTotem;
      const areaTema = examen.examenTotem.areaTemaTotem;
      
      // Validación pre-consulta
      console.log(`🔍 Validando mapeo UCASAL...`);
      const validacion = await this.validateUcasalMapping(materiaCode, areaTema);
      
      if (!validacion.isValid) {
        throw new Error(`Mapeo UCASAL inválido para materia ${materiaCode}: ${validacion.reason}`);
      }
      
      console.log(`✅ Mapeo válido, consultando inscriptos...`);
      
      // Consultar inscriptos
      const inscriptosResult = await this.obtenerInscriptosUcasal(parseInt(examenId));
      
      return {
        success: true,
        examen: {
          id: examen.id,
          nombre: examen.nombreMateria,
          fecha: examen.fecha,
          hora: examen.hora,
          carrera: examen.carrera?.nombre,
          facultad: examen.carrera?.facultad?.nombre,
          aula: examen.aula ? {
            id: examen.aula.id,
            nombre: examen.aula.nombre,
            capacidad: examen.aula.capacidad
          } : null,
          materiaCode,
          areaTema
        },
        inscriptos: inscriptosResult,
        validacion,
        timestamp: new Date().toISOString()
      };
      
    } catch (error) {
      console.error(`❌ Error en sincronización individual:`, error);
      throw error;
    }
  }
}

export default TotemService;