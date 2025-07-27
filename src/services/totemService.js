import prisma from '../lib/db.js';
import SheetBestService from './sheetBestService.js';
import UcasalMappingService from './ucasalMappingService.js';
import axios from 'axios';

// ID del Google Sheet del TOTEM centralizado
const TOTEM_SHEET_ID = '12_tx2DXfebO-5SjRTiRTg3xebVR1x-5xJ_BFY7EPaS8';

class TotemService {
  constructor() {
    this.sheetBestService = new SheetBestService();
    this.ucasalMappingService = new UcasalMappingService();
  }

  async syncTotemData() {
    const startTime = Date.now();
    
    try {
      console.log('🚀 Iniciando sincronización TOTEM con Sheet.best API...');
      
      // Obtener datos directamente desde Sheet.best
      const sheetResult = await this.sheetBestService.fetchAndProcessData();
      
      if (!sheetResult.success || !sheetResult.data || sheetResult.data.length === 0) {
        throw new Error('No se obtuvieron datos válidos de Sheet.best');
      }

      console.log(`📊 Datos obtenidos: ${sheetResult.data.length} filas válidas`);
      
      // Validar estructura de datos
      const validation = this.sheetBestService.validateDataStructure(sheetResult.data);
      if (!validation.isValid) {
        console.warn(`⚠️ Validación: ${validation.issues.length} problemas encontrados`);
        validation.issues.slice(0, 5).forEach(issue => {
          console.warn(`  - Fila ${issue.row}: ${issue.message}`);
        });
      }

      // Detectar tipos de exámenes y sectores
      const detection = this.sheetBestService.detectExamTypes(sheetResult.data);
      console.log(`🔍 Detectados: ${detection.totalUniqueSectors} sectores, ${detection.totalUniqueCareers} carreras`);

      // Guardar datos brutos en TotemData
      const totemDataRecord = await this.saveRawTotemData('sheet.best', sheetResult.data, sheetResult.metadata);
      
      // Procesar los datos y crear exámenes
      const processedExams = await this.processTotemDataToExams(sheetResult.data);
      
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

  async processTotemDataToExams(sheetData) {
    const createdExams = [];
    const updatedExams = [];
    let duplicatesSkipped = 0;
    const debugLogs = []; // Capturar logs para retornar
    
    console.log(`🔄 Procesando ${sheetData.length} filas para crear/actualizar exámenes...`);
    
    // 🎯 PASO 1: MAPEO COMPLETO PREVIO CON UCASAL
    debugLogs.push('🗺️ DEBUG: ===== INICIANDO MAPEO UCASAL =====');
    debugLogs.push(`🔍 DEBUG: Procesando ${sheetData.length} filas de sheet.best`);
    debugLogs.push(`🔧 DEBUG: UcasalMappingService existe: ${!!this.ucasalMappingService}`);
    
    console.log('🗺️ DEBUG: ===== INICIANDO MAPEO UCASAL =====');
    console.log(`🔍 DEBUG: Procesando ${sheetData.length} filas de sheet.best`);
    console.log('🔧 DEBUG: Verificando UcasalMappingService...', !!this.ucasalMappingService);
    
    let ucasalMappingResult = 'NO_EJECUTADO';
    try {
      debugLogs.push('🚀 DEBUG: Llamando a mapAllCarrerasFromSheetData...');
      console.log('🚀 DEBUG: Llamando a mapAllCarrerasFromSheetData...');
      
      await this.ucasalMappingService.mapAllCarrerasFromSheetData(sheetData);
      
      ucasalMappingResult = 'EXITOSO';
      debugLogs.push('✅ DEBUG: ===== MAPEO UCASAL COMPLETADO =====');
      console.log('✅ DEBUG: ===== MAPEO UCASAL COMPLETADO =====');
    } catch (error) {
      ucasalMappingResult = `ERROR: ${error.message}`;
      debugLogs.push('❌ DEBUG: ===== ERROR EN MAPEO UCASAL =====');
      debugLogs.push(`❌ DEBUG: Error: ${error.message}`);
      debugLogs.push(`❌ DEBUG: Stack: ${error.stack?.substring(0, 200)}...`);
      
      console.error('❌ DEBUG: ===== ERROR EN MAPEO UCASAL =====');
      console.error('❌ DEBUG: Error:', error.message);
      console.error('❌ DEBUG: Stack trace:', error.stack);
      console.error('❌ DEBUG: ===== FIN ERROR =====');
    }
    
    debugLogs.push('🔄 DEBUG: Continuando con creación de exámenes...');
    console.log('🔄 DEBUG: Continuando con creación de exámenes...');
    
    for (const row of sheetData) {
      try {
        // Extraer datos del row (ya viene limpio de Sheet.best)
        const totemData = this.extractTotemRowData(row);
        
        if (!totemData.sector || !totemData.carrera || !totemData.materia || !totemData.fecha) {
          console.log('Fila incompleta, omitiendo:', { 
            sector: totemData.sector, 
            carrera: totemData.carrera, 
            materia: totemData.materia, 
            fecha: totemData.fecha 
          });
          continue;
        }

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

        // 3. Buscar o crear aula si hay información
        const aula = await this.findOrCreateAula(totemData);

        // 4. 🆕 VERIFICAR SI EXISTE PARA ACTUALIZAR O CREAR
        const existeExamen = await this.checkExamenDuplicate(totemData, carrera.id);
        
        if (existeExamen) {
          // 🔄 ACTUALIZAR EXAMEN EXISTENTE CON NUEVOS DATOS DEL SHEET
          const horaStr = totemData.hora ? totemData.hora.getHours() + ':' + totemData.hora.getMinutes() : 'sin-hora';
          
          console.log(`🔄 ACTUALIZANDO EXAMEN EXISTENTE: ${totemData.sector}/${totemData.carrera}/${totemData.materia} (${totemData.fecha.toDateString()} ${horaStr}) - ID: ${existeExamen.id}`);
          
          // Actualizar el examen con los nuevos datos
          const examenActualizado = await this.updateExamenFromTotem(existeExamen.id, totemData, carrera.id, facultad.id, aula?.id);
          
          // Actualizar también el registro ExamenTotem con datos originales actualizados
          await this.updateExamenTotemRecord(existeExamen.id, totemData, row);
          
          updatedExams.push(examenActualizado);
          
        } else {
          // 5. ✅ CREAR NUEVO EXAMEN (no existe)
          console.log(`✅ CREANDO NUEVO EXAMEN: ${totemData.sector}/${totemData.carrera}/${totemData.materia}`);
          
          const examen = await this.createExamenFromTotem(totemData, carrera.id, facultad.id, aula?.id);
          
          // Crear registro de ExamenTotem con datos originales
          await this.createExamenTotemRecord(examen.id, totemData, row);
          
          createdExams.push(examen);
        }

      } catch (error) {
        console.error('Error procesando fila del TOTEM:', error, row);
      }
    }

    console.log(`✅ Procesamiento completado: ${createdExams.length} exámenes creados, ${updatedExams.length} exámenes actualizados`);
    
    return { 
      created: createdExams, 
      updated: updatedExams,
      ucasalMappingResult,
      debugLogs 
    };
  }

  extractTotemRowData(row) {
    // 🔧 FORMATO CORREGIDO: usar nombres de propiedades procesadas por SheetBestService
    return {
      sector: row.SECTOR?.toString().trim(),           // SECTOR
      carrera: row.CARRERA?.toString().trim(),         // CARRERA  
      modo: row.MODO?.toString().trim(),               // MODO
      areaTema: row.AREATEMA?.toString().trim(),       // AREATEMA
      materia: row.MATERIA?.toString().trim(),         // MATERIA
      año: row['AÑO']?.toString().trim(),              // AÑO
      nombreCorto: row['NOMBRE CORTO']?.toString().trim(), // NOMBRE CORTO
      fecha: this.parseTotemDate(row.FECHA),           // FECHA
      url: row.URL?.toString().trim(),                 // URL
      catedra: row['CÁTEDRA']?.toString().trim(),      // CÁTEDRA
      docente: row.Docente?.toString().trim(),         // DOCENTE
      hora: this.parseTotemTime(row.Hora),             // HORA
      tipoExamen: row['Tipo Examen']?.toString().trim(), // TIPO EXAMEN
      monitoreo: row.Monitoreo?.toString().trim(),     // MONITOREO
      control: row['Control a cargo de:']?.toString().trim(), // CONTROL
      observaciones: row.Observaciones?.toString().trim(), // OBSERVACIONES
      materialPermitido: row['Material Permitido']?.toString().trim() // MATERIAL PERMITIDO
    };
  }

  parseTotemDate(dateString) {
    if (!dateString) return null;
    
    try {
      // Formato DD/MM/YYYY del TOTEM (ej: "30/6/2025")
      const parts = dateString.toString().split('/');
      if (parts.length === 3) {
        const [dia, mes, año] = parts;
        return new Date(parseInt(año), parseInt(mes) - 1, parseInt(dia));
      }
      return null;
    } catch (error) {
      console.error('Error parseando fecha TOTEM:', dateString, error);
      return null;
    }
  }

  parseTotemTime(timeString) {
    if (!timeString) return null;
    
    try {
      // Formato HH:MM del TOTEM (ej: "14:00")
      const parts = timeString.toString().split(':');
      if (parts.length === 2) {
        const [hours, minutes] = parts;
        const time = new Date();
        time.setHours(parseInt(hours), parseInt(minutes), 0, 0);
        return time;
      }
      return null;
    } catch (error) {
      console.error('Error parseando hora TOTEM:', timeString, error);
      return null;
    }
  }

  async mapSectorToFacultad(sector) {
    try {
      // ✅ LÓGICA CORRECTA: usar tabla SectorFacultad para el mapeo
      const mapeoSector = await prisma.sectorFacultad.findFirst({
        where: { 
          sector: sector.toString(),
          activo: true 
        },
        include: {
          facultad: true
        }
      });
      
      if (mapeoSector?.facultad) {
        console.log(`🎯 Mapeo correcto: Sector "${sector}" → Facultad "${mapeoSector.facultad.nombre}"`);
        return mapeoSector.facultad;
      }
      
      console.log(`⚠️ Sector "${sector}" NO está mapeado a ninguna facultad`);
      return null;
    } catch (error) {
      console.error('Error mapeando sector:', error);
      return null;
    }
  }

  async mapCarreraTotem(carreraCodigoTotem, facultadId) {
    try {
      // Buscar mapeo existente
      const mapping = await prisma.carreraTotem.findFirst({
        where: { 
          codigoTotem: carreraCodigoTotem.toString(),
          esMapeada: true,
          activo: true
        },
        include: { carrera: true }
      });

      if (mapping?.carrera) {
        return mapping.carrera;
      }

      // Si no existe mapeo, crear registro de carrera no mapeada
      await prisma.carreraTotem.upsert({
        where: { codigoTotem: carreraCodigoTotem.toString() },
        update: { nombreTotem: `Carrera TOTEM ${carreraCodigoTotem}` },
        create: {
          codigoTotem: carreraCodigoTotem.toString(),
          nombreTotem: `Carrera TOTEM ${carreraCodigoTotem}`,
          esMapeada: false,
          activo: true
        }
      });

      return null;
    } catch (error) {
      console.error('Error mapeando carrera TOTEM:', error);
      return null;
    }
  }

  async findOrCreateAula(totemData) {
    // Por ahora no crear aulas automáticamente
    // Se puede implementar lógica específica según necesidades
    return null;
  }

  async createExamenFromTotem(totemData, carreraId, facultadId, aulaId = null) {
    return await prisma.examen.create({
      data: {
        // IDs de relación
        carreraId,
        facultadId,    // ✅ NUEVO: requerido
        aulaId,
        
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
        cantidadInscriptos: 0,
        activo: true
      }
    });
  }

  async updateExamenFromTotem(examenId, totemData, carreraId, facultadId, aulaId = null) {
    return await prisma.examen.update({
      where: { id: examenId },
      data: {
        // IDs de relación
        carreraId,
        facultadId,    // ✅ NUEVO: requerido
        aulaId,
        
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
        fechaUltConsulta: new Date()
      }
    });
  }

  async createExamenTotemRecord(examenId, totemData, originalRow) {
    return await prisma.examenTotem.create({
      data: {
        examenId,
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

  async updateExamenTotemRecord(examenId, totemData, originalRow) {
    return await prisma.examenTotem.update({
      where: { examenId },
      data: {
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
    // Implementar lógica para detectar sectores desde Sheet.best que no están mapeados
    const sheetResult = await this.sheetBestService.fetchAndProcessData();
    const detection = this.sheetBestService.detectExamTypes(sheetResult.data);
    
    const sectoresEncontrados = detection.sectors;
    const sectoresMapeados = await prisma.sectorFacultad.findMany({
      where: { activo: true },
      select: { sector: true }
    });
    
    const sectoresMapeadosArray = sectoresMapeados.map(s => s.sector);
    const sectoresNoMapeados = sectoresEncontrados.filter(s => !sectoresMapeadosArray.includes(s));
    
    return sectoresNoMapeados;
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
      sectoresNoMapeados,
      carrerasNoMapeadas
    ] = await Promise.all([
      prisma.totemData.count(),
      prisma.examen.count(),
      this.getSectoresNoMapeados(),
      this.getCarrerasTotemNoMapeadas()
    ]);

    return {
      totalRegistrosTotem: totalTotemData,
      totalExamenesCreados: totalExamenes,
      sectoresNoMapeados: sectoresNoMapeados.length,
      carrerasNoMapeadas: carrerasNoMapeadas.length,
      listaSectoresNoMapeados: sectoresNoMapeados,
      listaCarrerasNoMapeadas: carrerasNoMapeadas
    };
  }

  /**
   * 🔍 VERIFICACIÓN CORRECTA DE DUPLICADOS SEGÚN CONVERGENCIA
   * Un examen es único si difiere en: materia + areaTema + fecha + horario + catedra
   */
  async checkExamenDuplicate(totemData, carreraId) {
    try {
      console.log('🔍 Verificando duplicado con criterios de convergencia...');
      
      // 🎯 CRITERIOS DE UNICIDAD: materia + areaTema + fecha + horario + catedra
      const criteriosUnicidad = {
        materia: totemData.materia?.toString().trim().toLowerCase() || '',
        areaTema: totemData.areaTema?.toString().trim().toLowerCase() || '',
        fecha: totemData.fecha?.toDateString() || '',
        horario: totemData.hora ? `${totemData.hora.getHours()}:${String(totemData.hora.getMinutes()).padStart(2, '0')}` : '',
        catedra: totemData.catedra?.toString().trim().toLowerCase() || ''
      };

      console.log('📋 Criterios de búsqueda:', criteriosUnicidad);
      
      // 🔍 BUSCAR EXÁMENES EXISTENTES CON LOS MISMOS CRITERIOS
      const examenesExistentes = await prisma.examen.findMany({
        where: {
          fecha: totemData.fecha,
          activo: true
        },
        include: {
          examenTotem: true
        }
      });

      console.log(`📊 Verificando ${examenesExistentes.length} exámenes de la misma fecha`);

      // 🔍 COMPARAR CADA EXAMEN EXISTENTE
      for (const examen of examenesExistentes) {
        if (!examen.examenTotem) continue;

        const criteriosExistente = {
          materia: examen.examenTotem.materiaTotem?.toString().trim().toLowerCase() || '',
          areaTema: examen.examenTotem.areaTemaTotem?.toString().trim().toLowerCase() || '',
          fecha: examen.fecha?.toDateString() || '',
          horario: examen.hora ? `${examen.hora.getHours()}:${String(examen.hora.getMinutes()).padStart(2, '0')}` : '',
          catedra: examen.examenTotem.catedraTotem?.toString().trim().toLowerCase() || ''
        };

        // ✅ VERIFICAR SI TODOS LOS CRITERIOS COINCIDEN
        const esIgual = 
          criteriosUnicidad.materia === criteriosExistente.materia &&
          criteriosUnicidad.areaTema === criteriosExistente.areaTema &&
          criteriosUnicidad.fecha === criteriosExistente.fecha &&
          criteriosUnicidad.horario === criteriosExistente.horario &&
          criteriosUnicidad.catedra === criteriosExistente.catedra;

        if (esIgual) {
          console.log(`🔴 DUPLICADO DETECTADO: Examen ID ${examen.id}`);
          console.log(`   Criterios coincidentes:`, criteriosExistente);
          return examen;
        }
      }

      console.log(`✅ NO ES DUPLICADO - Criterios únicos:`, criteriosUnicidad);
      return null;

    } catch (error) {
      console.error('❌ Error verificando duplicado:', error);
      return null;
    }
  }

  /**
   * 🎯 MAPEO COMPLETO PREVIO - Asegura que todo esté mapeado antes de crear exámenes
   */
  async ensureCompleteMapping(sheetData) {
    console.log('🗺️  INICIANDO MAPEO COMPLETO PREVIO...');
    
    // 1. EXTRAER TODOS LOS DATOS ÚNICOS - USAR PROPIEDADES NOMBRADAS
    const sectoresUnicos = [...new Set(sheetData.map(row => row.SECTOR?.toString().trim()).filter(s => s))];
    const carrerasUnicas = [...new Set(sheetData.map(row => row.CARRERA?.toString().trim()).filter(c => c))];
    // ✅ NO EXTRAER AULAS DEL CAMPO MONITOREO - ESO ES INCORRECTO
    const aulasUnicas = []; // Las aulas se manejan por separado, no desde el Excel
    
    console.log(`📊 Detectados: ${sectoresUnicos.length} sectores, ${carrerasUnicas.length} carreras, ${aulasUnicas.length} aulas`);
    
    // 2. MAPEAR TODOS LOS SECTORES
    let sectoresMapeados = 0;
    for (const sector of sectoresUnicos) {
      const facultadExistente = await this.mapSectorToFacultad(sector);
      if (!facultadExistente) {
        // Crear facultad por defecto si no existe mapeo
        const nuevaFacultad = await prisma.facultad.create({
          data: {
            nombre: `Facultad ${sector}`,
            codigo: sector.substring(0, 10),
            activa: true
          }
        });
        
        await this.createSectorFacultadMapping(sector, nuevaFacultad.id);
        sectoresMapeados++;
        console.log(`   🆕 Sector "${sector}" → Nueva Facultad "${nuevaFacultad.nombre}"`);
      }
    }
    
    // 3. MAPEAR TODAS LAS CARRERAS
    let carrerasMapeadas = 0;
    for (const carreraCode of carrerasUnicas) {
      // Buscar si ya está mapeada
      const carreraExistente = await prisma.carreraTotem.findUnique({
        where: { codigoTotem: carreraCode },
        include: { carrera: true }
      });
      
      if (!carreraExistente || !carreraExistente.esMapeada) {
        // 🎯 DETERMINAR FACULTAD CORRECTA SEGÚN EL SECTOR
        // Buscar qué sector corresponde a esta carrera en los datos
        const filaConCarrera = sheetData.find(row => row.CARRERA?.toString().trim() === carreraCode);
        const sectorCorrespondiente = filaConCarrera?.SECTOR?.toString().trim(); // SECTOR como propiedad nombrada
        
        // Mapear el sector a facultad
        let facultadParaCarrera = null;
        if (sectorCorrespondiente) {
          facultadParaCarrera = await this.mapSectorToFacultad(sectorCorrespondiente);
          console.log(`🔍 Mapeo sector "${sectorCorrespondiente}" → Facultad: ${facultadParaCarrera?.nombre || 'NO ENCONTRADA'}`);
        }
        
        // 🚨 NO MÁS FALLBACK AUTOMÁTICO - EXIGIR MAPEO CORRECTO
        if (!facultadParaCarrera) {
          console.error(`❌ ERROR CRÍTICO: Sector "${sectorCorrespondiente}" para carrera "${carreraCode}" NO tiene facultad mapeada`);
          console.error(`   Este error debe corregirse antes de continuar la sincronización`);
          console.error(`   Usa el endpoint de mapeo de sectores para corregir esto`);
          
          // Saltear esta carrera en lugar de asignar incorrectamente
          console.log(`⏭️ Saltando carrera "${carreraCode}" hasta que se corrija el mapeo`);
          continue;
        }
        
        // Buscar si ya existe una carrera con este código en la BD
        const carreraEnBD = await prisma.carrera.findFirst({
          where: { 
            codigo: carreraCode.substring(0, 10),
            facultadId: facultadParaCarrera.id
          }
        });
        
        let carreraId;
        if (carreraEnBD) {
          // Usar carrera existente
          carreraId = carreraEnBD.id;
          console.log(`   🔗 Carrera "${carreraCode}" → Carrera existente "${carreraEnBD.nombre}" (${facultadParaCarrera.nombre})`);
        } else {
          // Crear nueva carrera con la facultad correcta
          const nuevaCarrera = await prisma.carrera.create({
            data: {
              nombre: `Carrera ${carreraCode}`,
              codigo: carreraCode.substring(0, 10),
              facultadId: facultadParaCarrera.id, // ✅ USAR FACULTAD CORRECTA
              activa: true
            }
          });
          carreraId = nuevaCarrera.id;
          console.log(`   🆕 Carrera "${carreraCode}" → Nueva Carrera "${nuevaCarrera.nombre}" (${facultadParaCarrera.nombre})`);
        }
        
        await this.mapCarreraTotemToCarrera(carreraCode, carreraId);
        carrerasMapeadas++;
      }
    }
    
    // 4. CREAR AULAS SI ES NECESARIO
    let aulasCreadas = 0;
    for (const aulaInfo of aulasUnicas) {
      if (aulaInfo && aulaInfo !== 'undefined') {
        const aulaExistente = await prisma.aula.findFirst({
          where: { 
            nombre: { contains: aulaInfo }
          }
        });
        
        if (!aulaExistente) {
          await prisma.aula.create({
            data: {
              nombre: `Aula ${aulaInfo}`,
              capacidad: 50, // Capacidad por defecto
              sede: 'Campus Central', // Sede por defecto
              activa: true
            }
          });
          aulasCreadas++;
          console.log(`   🆕 Aula "${aulaInfo}" creada`);
        }
      }
    }
    
    console.log(`✅ MAPEO COMPLETADO: ${sectoresMapeados} sectores, ${carrerasMapeadas} carreras, ${aulasCreadas} aulas`);
  }

  /**
   * 🌐 OBTENER INSCRIPTOS DESDE UCASAL
   * Match usando materia_codigo + areaTema según datos reales del usuario
   */
  async obtenerInscriptosUcasal(examenId) {
    try {
      console.log(`🌐 Obteniendo inscriptos de UCASAL para examen ID: ${examenId}`);
      
      // 1. Obtener datos del examen
      const examen = await prisma.examen.findUnique({
        where: { id: examenId },
        include: { examenTotem: true }
      });
      
      if (!examen) {
        throw new Error(`Examen ${examenId} no encontrado`);
      }
      
      const { materia_codigo, areatema, fecha } = examen;
      
      console.log(`📋 Datos del examen: materia=${materia_codigo}, areaTema=${areatema}, fecha=${fecha.toDateString()}`);
      
      // 2. Construir rango de fechas (desde primer examen hasta hoy)
      const fechaExamen = new Date(fecha);
      const fechaDesde = new Date(fechaExamen);
      fechaDesde.setMonth(fechaDesde.getMonth() - 2); // 2 meses antes
      const fechaHasta = new Date(); // Hasta hoy
      
      const fechaDesdeStr = fechaDesde.toLocaleDateString('es-AR');
      const fechaHastaStr = fechaHasta.toLocaleDateString('es-AR');
      
      // 3. Construir URL de UCASAL
      const ucasalUrl = `https://sistemasweb-desa.ucasal.edu.ar/api/v1/acta/materia/${materia_codigo}?rendida=true&fechaDesde=${fechaDesdeStr}&fechaHasta=${fechaHastaStr}`;
      
      console.log(`🔗 Consultando UCASAL: ${ucasalUrl}`);
      
      // 4. Hacer petición a UCASAL
      const response = await axios.get(ucasalUrl);
      
      if (response.status !== 200) {
        throw new Error(`Error UCASAL: ${response.status} - ${response.statusText}`);
      }
      
      const actasData = response.data;
      console.log(`📊 UCASAL devolvió ${actasData.length} actas`);
      
      // 5. Filtrar por areaTema específico
      const actasFiltradas = actasData.filter(acta => 
        acta.areaTema === areatema && acta.materia === materia_codigo
      );
      
      console.log(`🎯 Actas filtradas por areaTema '${areatema}': ${actasFiltradas.length}`);
      
      // 6. Extraer estudiantes de todas las actas filtradas
      let estudiantesTotal = [];
      for (const acta of actasFiltradas) {
        if (acta.alumnos && Array.isArray(acta.alumnos)) {
          estudiantesTotal = estudiantesTotal.concat(acta.alumnos);
        }
      }
      
      console.log(`👥 Total estudiantes encontrados: ${estudiantesTotal.length}`);
      
      // 7. Crear registros EstudianteExamen
      let estudiantesCreados = 0;
      for (const alumno of estudiantesTotal) {
        try {
          // Verificar si el estudiante ya existe
          await prisma.estudiante.upsert({
            where: { dni: alumno.ndocu },
            update: {
              nombre: alumno.apen ? alumno.apen.split(',')[1]?.trim() || 'Sin nombre' : 'Sin nombre',
              apellido: alumno.apen ? alumno.apen.split(',')[0]?.trim() || 'Sin apellido' : 'Sin apellido'
            },
            create: {
              dni: alumno.ndocu,
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
                dni: alumno.ndocu 
              }
            },
            update: {
              asistencia: alumno.notaTipo !== 'AUSENTE',
              aprobado: alumno.notaTipo === 'APROBADO',
              nota: alumno.notaNota === 'AUSENTE' ? null : parseFloat(alumno.notaNota) || null
            },
            create: {
              examen_id: examenId,
              dni: alumno.ndocu,
              asistencia: alumno.notaTipo !== 'AUSENTE',
              aprobado: alumno.notaTipo === 'APROBADO',
              nota: alumno.notaNota === 'AUSENTE' ? null : parseFloat(alumno.notaNota) || null
            }
          });
          
          estudiantesCreados++;
        } catch (error) {
          console.error(`Error creando estudiante ${alumno.ndocu}:`, error.message);
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
      
      console.log(`✅ Match UCASAL completado: ${estudiantesCreados} estudiantes procesados`);
      
      return {
        examenId,
        actasEncontradas: actasFiltradas.length,
        estudiantesTotal: estudiantesTotal.length,
        estudiantesCreados,
        fechaConsulta: new Date()
      };
      
    } catch (error) {
      console.error('❌ Error obteniendo inscriptos UCASAL:', error);
      throw error;
    }
  }
}

export default TotemService;