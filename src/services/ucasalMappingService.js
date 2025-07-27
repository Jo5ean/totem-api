import axios from 'axios';
import prisma from '../lib/db.js';

/**
 * Servicio para mapear códigos de carrera y sectores usando la API de UCASAL
 * Cachea los resultados en la base de datos local para consultas rápidas
 */
class UcasalMappingService {
  constructor() {
    this.ucasalApiUrl = 'https://sistemasweb.ucasal.edu.ar/v1/oferta-academica';
    this.timeout = 10000; // 10 segundos
    this.cache = new Map(); // Cache en memoria para esta sesión
  }

  /**
   * Obtener información de carrera desde la API de UCASAL
   */
  async fetchCarreraFromUcasal(codigoCarrera) {
    try {
      console.log(`🔍 Consultando UCASAL para carrera: ${codigoCarrera}`);
      
      const response = await axios.get(`${this.ucasalApiUrl}?codigoCarrera=${codigoCarrera}`, {
        timeout: this.timeout,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (!response.data || !response.data.data || response.data.data.length === 0) {
        console.log(`⚠️ Carrera ${codigoCarrera} no encontrada en UCASAL`);
        return null;
      }

      // Tomar el primer resultado (todos deberían tener los mismos datos de carrera)
      const carreraData = response.data.data[0];
      
      const resultado = {
        codigoCarrera: carreraData.codigoCarrera,
        nombreCarrera: carreraData.nombreCarrera,
        codigoSector: carreraData.codigoSector,
        nombreSector: carreraData.nombreSector,
        tipoCarrera: carreraData.tipoCarrera
      };

      console.log(`✅ Carrera ${codigoCarrera}: ${resultado.nombreCarrera} (${resultado.nombreSector})`);
      return resultado;

    } catch (error) {
      console.error(`❌ Error consultando UCASAL para carrera ${codigoCarrera}:`, error.message);
      return null;
    }
  }

  /**
   * Obtener o crear facultad basada en el sector de UCASAL
   */
  async getOrCreateFacultad(codigoSector, nombreSector) {
    try {
      // Buscar si ya existe una facultad con este código de sector
      let facultad = await prisma.facultad.findFirst({
        where: { codigo: codigoSector.toString() }
      });

      if (!facultad) {
        // Crear nueva facultad con el nombre real de UCASAL
        facultad = await prisma.facultad.create({
          data: {
            nombre: nombreSector,
            codigo: codigoSector.toString(),
            activa: true
          }
        });
        console.log(`🆕 Facultad creada: ${nombreSector} (código: ${codigoSector})`);
      } else {
        // Actualizar nombre si es diferente
        if (facultad.nombre !== nombreSector) {
          facultad = await prisma.facultad.update({
            where: { id: facultad.id },
            data: { nombre: nombreSector }
          });
          console.log(`🔄 Facultad actualizada: ${nombreSector} (código: ${codigoSector})`);
        }
      }

      return facultad;
    } catch (error) {
      console.error(`❌ Error creando/obteniendo facultad:`, error);
      throw error;
    }
  }

  /**
   * Obtener o crear carrera basada en los datos de UCASAL
   */
  async getOrCreateCarrera(carreraData, facultadId) {
    try {
      const codigoCarrera = carreraData.codigoCarrera.toString();
      
      // Buscar si ya existe una carrera con este código en esta facultad
      let carrera = await prisma.carrera.findFirst({
        where: { 
          codigo: codigoCarrera,
          facultadId: facultadId 
        }
      });

      if (!carrera) {
        // Crear nueva carrera con el nombre real de UCASAL
        carrera = await prisma.carrera.create({
          data: {
            nombre: carreraData.nombreCarrera,
            codigo: codigoCarrera,
            facultadId: facultadId,
            activa: true
          }
        });
        console.log(`🆕 Carrera creada: ${carreraData.nombreCarrera} (código: ${codigoCarrera})`);
      } else {
        // Actualizar nombre si es diferente
        if (carrera.nombre !== carreraData.nombreCarrera) {
          carrera = await prisma.carrera.update({
            where: { id: carrera.id },
            data: { nombre: carreraData.nombreCarrera }
          });
          console.log(`🔄 Carrera actualizada: ${carreraData.nombreCarrera} (código: ${codigoCarrera})`);
        }
      }

      return carrera;
    } catch (error) {
      console.error(`❌ Error creando/obteniendo carrera:`, error);
      throw error;
    }
  }

  /**
   * Crear o actualizar mapeo de carrera TOTEM
   */
  async createOrUpdateCarreraTotemMapping(codigoCarrera, carreraId, nombreCarrera) {
    try {
      const codigoCarreraStr = codigoCarrera.toString();
      
      // Buscar mapeo existente
      let mapeo = await prisma.carreraTotem.findUnique({
        where: { codigoTotem: codigoCarreraStr }
      });

      if (!mapeo) {
        // Crear nuevo mapeo
        mapeo = await prisma.carreraTotem.create({
          data: {
            codigoTotem: codigoCarreraStr,
            nombreTotem: nombreCarrera,
            carreraId: carreraId,
            esMapeada: true,
            activo: true
          }
        });
        console.log(`🔗 Mapeo TOTEM creado: ${codigoCarreraStr} → ${nombreCarrera}`);
      } else {
        // Actualizar mapeo existente
        mapeo = await prisma.carreraTotem.update({
          where: { id: mapeo.id },
          data: {
            nombreTotem: nombreCarrera,
            carreraId: carreraId,
            esMapeada: true,
            activo: true
          }
        });
        console.log(`🔄 Mapeo TOTEM actualizado: ${codigoCarreraStr} → ${nombreCarrera}`);
      }

      return mapeo;
    } catch (error) {
      console.error(`❌ Error creando/actualizando mapeo TOTEM:`, error);
      throw error;
    }
  }

  /**
   * Crear o actualizar mapeo de sector a facultad
   */
  async createOrUpdateSectorMapping(codigoSector, facultadId) {
    try {
      const codigoSectorStr = codigoSector.toString();
      
      // Buscar mapeo existente
      let mapeo = await prisma.sectorFacultad.findFirst({
        where: { sector: codigoSectorStr }
      });

      if (!mapeo) {
        // Crear nuevo mapeo
        mapeo = await prisma.sectorFacultad.create({
          data: {
            sector: codigoSectorStr,
            facultadId: facultadId,
            activo: true
          }
        });
        console.log(`🔗 Mapeo sector creado: ${codigoSectorStr} → Facultad ID ${facultadId}`);
      } else {
        // Actualizar mapeo existente
        mapeo = await prisma.sectorFacultad.update({
          where: { id: mapeo.id },
          data: {
            facultadId: facultadId,
            activo: true
          }
        });
        console.log(`🔄 Mapeo sector actualizado: ${codigoSectorStr} → Facultad ID ${facultadId}`);
      }

      return mapeo;
    } catch (error) {
      console.error(`❌ Error creando/actualizando mapeo sector:`, error);
      throw error;
    }
  }

  /**
   * Procesar y mapear una carrera específica
   */
  async processCarrera(codigoCarrera) {
    try {
      const codigoCarreraStr = codigoCarrera.toString();
      
      // Verificar cache en memoria
      if (this.cache.has(codigoCarreraStr)) {
        return this.cache.get(codigoCarreraStr);
      }

      // Verificar si ya está mapeada en la base de datos
      const mapeoExistente = await prisma.carreraTotem.findUnique({
        where: { codigoTotem: codigoCarreraStr },
        include: { carrera: { include: { facultad: true } } }
      });

      if (mapeoExistente && mapeoExistente.esMapeada && mapeoExistente.carrera) {
        console.log(`✅ Carrera ${codigoCarrera} ya mapeada: ${mapeoExistente.carrera.nombre}`);
        const resultado = {
          carrera: mapeoExistente.carrera,
          facultad: mapeoExistente.carrera.facultad
        };
        this.cache.set(codigoCarreraStr, resultado);
        return resultado;
      }

      // Consultar UCASAL
      const carreraData = await this.fetchCarreraFromUcasal(codigoCarrera);
      if (!carreraData) {
        console.log(`⚠️ No se pudo obtener datos de UCASAL para carrera ${codigoCarrera}`);
        return null;
      }

      // Crear/obtener facultad
      const facultad = await this.getOrCreateFacultad(carreraData.codigoSector, carreraData.nombreSector);
      
      // Crear/obtener carrera
      const carrera = await this.getOrCreateCarrera(carreraData, facultad.id);
      
      // Crear/actualizar mapeos
      await this.createOrUpdateCarreraTotemMapping(codigoCarrera, carrera.id, carreraData.nombreCarrera);
      await this.createOrUpdateSectorMapping(carreraData.codigoSector, facultad.id);

      const resultado = { carrera, facultad };
      this.cache.set(codigoCarreraStr, resultado);
      
      return resultado;

    } catch (error) {
      console.error(`❌ Error procesando carrera ${codigoCarrera}:`, error);
      return null;
    }
  }

  /**
   * Procesar múltiples carreras en lotes para evitar sobrecargar la API
   */
  async processCarrerasInBatches(codigosCarrera, batchSize = 5) {
    const resultados = new Map();
    const codigosUnicos = [...new Set(codigosCarrera.map(c => c.toString()))];
    
    console.log(`🚀 Procesando ${codigosUnicos.length} carreras únicas en lotes de ${batchSize}...`);

    for (let i = 0; i < codigosUnicos.length; i += batchSize) {
      const lote = codigosUnicos.slice(i, i + batchSize);
      console.log(`📦 Procesando lote ${Math.floor(i/batchSize) + 1}/${Math.ceil(codigosUnicos.length/batchSize)}: ${lote.join(', ')}`);

      // Procesar lote en paralelo
      const promesasLote = lote.map(codigo => this.processCarrera(codigo));
      const resultadosLote = await Promise.all(promesasLote);

      // Guardar resultados
      lote.forEach((codigo, index) => {
        if (resultadosLote[index]) {
          resultados.set(codigo, resultadosLote[index]);
        }
      });

      // Pausa entre lotes para no sobrecargar la API
      if (i + batchSize < codigosUnicos.length) {
        console.log('⏳ Pausa entre lotes...');
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1 segundo de pausa
      }
    }

    console.log(`✅ Procesamiento completado: ${resultados.size}/${codigosUnicos.length} carreras mapeadas`);
    return resultados;
  }

  /**
   * Extraer códigos únicos de carrera desde datos de sheet.best
   */
  extractCodigosCarrera(sheetData) {
    const codigos = sheetData
      .map(row => row.CARRERA?.toString().trim())
      .filter(codigo => codigo && codigo !== 'undefined' && codigo !== 'null')
      .filter((codigo, index, array) => array.indexOf(codigo) === index); // únicos

    console.log(`📊 Códigos de carrera extraídos: ${codigos.length} únicos`);
    console.log(`🔍 Códigos: ${codigos.slice(0, 10).join(', ')}${codigos.length > 10 ? '...' : ''}`);
    
    return codigos;
  }

  /**
   * Proceso completo: mapear todas las carreras de los datos de sheet.best
   */
  async mapAllCarrerasFromSheetData(sheetData) {
    const logs = [];
    
    logs.push('🚀 DEBUG: Iniciando mapeo completo de carreras con API UCASAL...');
    logs.push(`🔍 DEBUG: Recibidos ${sheetData.length} registros de sheet.best`);
    
    // Extraer códigos únicos de carreras del sheet.best
    const codigosCarreras = [...new Set(
      sheetData.map(row => row.CARRERA?.toString().trim()).filter(codigo => codigo)
    )];
    
    logs.push(`📊 DEBUG: Códigos de carreras únicos encontrados: ${codigosCarreras.length}`);
    logs.push(`🔍 DEBUG: Códigos: ${codigosCarreras.slice(0, 10).join(', ')}${codigosCarreras.length > 10 ? '...' : ''}`);
    
    if (codigosCarreras.length === 0) {
      logs.push('⚠️ DEBUG: No se encontraron códigos de carreras válidos');
      return { success: false, logs, error: 'No se encontraron códigos de carreras válidos' };
    }
    
    let procesadas = 0;
    let errores = 0;
    
    try {
      logs.push('🗺️ INICIANDO MAPEO COMPLETO DE CARRERAS CON UCASAL...');
      
      // Procesar cada código de carrera
      for (const codigoCarrera of codigosCarreras) {
        try {
          logs.push(`🔍 Procesando carrera: ${codigoCarrera}`);
          
          // Obtener información de UCASAL
          const infoCarrera = await this.fetchCarreraFromUcasal(codigoCarrera);
          
          if (infoCarrera) {
            // Mapear sector a facultad
            await this.mapSectorToFacultad(infoCarrera.codigoSector, infoCarrera.nombreSector);
            
            // Mapear carrera
            await this.mapCarreraTotem(codigoCarrera, infoCarrera);
            
            procesadas++;
            logs.push(`✅ Carrera ${codigoCarrera} mapeada exitosamente: ${infoCarrera.nombreCarrera}`);
          } else {
            errores++;
            logs.push(`⚠️ Carrera ${codigoCarrera}: No se encontró información en UCASAL`);
          }
        } catch (error) {
          errores++;
          logs.push(`❌ Error procesando carrera ${codigoCarrera}: ${error.message}`);
        }
      }
      
      logs.push('🎉 MAPEO COMPLETO FINALIZADO');
      logs.push(`📊 Resumen: ${procesadas} carreras mapeadas, ${errores} errores`);
      
      // También hacer console.log para los logs de Railway
      logs.forEach(log => console.log(log));
      
      return { 
        success: true, 
        logs, 
        procesadas, 
        errores,
        total: codigosCarreras.length 
      };

    } catch (error) {
      const errorMsg = `❌ Error en mapeo completo: ${error.message}`;
      logs.push(errorMsg);
      console.error(errorMsg, error);
      
      return { 
        success: false, 
        logs, 
        error: error.message,
        procesadas, 
        errores 
      };
    }
  }
}

export default UcasalMappingService;
