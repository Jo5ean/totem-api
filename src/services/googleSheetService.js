import axios from 'axios';

class GoogleSheetService {
  constructor() {
    // URL del Google Apps Script que retorna JSON directamente
    this.apiUrl = process.env.GOOGLE_SHEET_API_URL || 'https://script.google.com/macros/s/AKfycbzlrzntOPPCHzeTFu3wqGlm983G6SD1DWVsEy3AzHtSbViH1S787vf0lf4zLh2wi6YM/exec';
    this.timeout = parseInt(process.env.GOOGLE_SHEET_TIMEOUT) || 60000;
  }

  buildRequestUrl(options = {}) {
    const { gid, action } = options;
    const url = new URL(this.apiUrl);

    if (action !== undefined && action !== null && action !== '') {
      url.searchParams.set('action', action.toString());
    }

    if (gid !== undefined && gid !== null && gid !== '') {
      url.searchParams.set('gid', gid.toString());
    }

    return url.toString();
  }

  async listSheets() {
    try {
      const requestUrl = this.buildRequestUrl({ action: 'listSheets' });

      console.log('📥 Obteniendo lista de hojas/turnos desde Google Sheets...');
      console.log(`🔗 URL: ${requestUrl}`);

      const response = await axios.get(requestUrl, {
        timeout: this.timeout,
        headers: {
          'Accept': 'application/json'
        },
        maxRedirects: 5
      });

      const contentType = response?.headers?.['content-type'] || '';
      if (typeof response.data === 'string' && (response.data.trim().startsWith('<') || contentType.includes('text/html'))) {
        throw new Error('Google Apps Script no devolvió JSON (posible login/redirect). Verificá que el Web App esté desplegado con acceso público (Anyone) y que el endpoint /exec sea accesible sin autenticación.');
      }

      if (!response.data || !Array.isArray(response.data)) {
        throw new Error('Respuesta inválida de Google Sheets API (listSheets)');
      }

      return {
        success: true,
        data: response.data,
        total: response.data.length,
        source: 'google-sheets',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('❌ Error obteniendo lista de hojas desde Google Sheets:', error.message);
      throw new Error(`Error en Google Sheets API (listSheets): ${error.message}`);
    }
  }

  /**
   * Obtener datos desde Google Apps Script
   * Los datos ya vienen en formato JSON con pares clave-valor
   */
  async fetchData(options = {}) {
    try {
      const requestUrl = this.buildRequestUrl(options);

      console.log('📥 Obteniendo datos desde Google Sheets...');
      console.log(`🔗 URL: ${requestUrl}`);
      
      const response = await axios.get(requestUrl, {
        timeout: this.timeout,
        headers: {
          'Accept': 'application/json'
        },
        maxRedirects: 5
      });

      const contentType = response?.headers?.['content-type'] || '';
      if (typeof response.data === 'string' && (response.data.trim().startsWith('<') || contentType.includes('text/html'))) {
        throw new Error('Google Apps Script no devolvió JSON (posible login/redirect). Verificá que el Web App esté desplegado con acceso público (Anyone) y que el endpoint /exec sea accesible sin autenticación.');
      }

      if (!response.data) {
        throw new Error('Respuesta inválida de Google Sheets API');
      }

      if (!Array.isArray(response.data)) {
        if (typeof response.data === 'object' && response.data.error) {
          throw new Error(response.data.error);
        }
        throw new Error('Respuesta inválida de Google Sheets API');
      }

      console.log(`✅ Datos obtenidos: ${response.data.length} registros`);
      
      return {
        success: true,
        data: response.data,
        totalRows: response.data.length,
        source: 'google-sheets',
        timestamp: new Date().toISOString()
      };

    } catch (error) {
      console.error('❌ Error obteniendo datos de Google Sheets:', error.message);
      throw new Error(`Error en Google Sheets API: ${error.message}`);
    }
  }

  /**
   * Filtrar datos válidos (campos mínimos requeridos)
   */
  filterValidData(data) {
    const validData = data.filter(row => 
      row.SECTOR && row.CARRERA && row.MATERIA && row.FECHA
    );
    
    console.log(`📊 Datos válidos: ${validData.length} de ${data.length}`);
    return validData;
  }

  /**
   * Obtener datos ya filtrados
   */
  async fetchAndProcessData(options = {}) {
    let effectiveOptions = { ...options };
    if (effectiveOptions.gid === undefined || effectiveOptions.gid === null || effectiveOptions.gid === '') {
      const sheets = await this.listSheets();
      const active = sheets?.data?.filter(s => s?.activo) || [];
      const chosen = active[0] || sheets?.data?.[0];
      if (!chosen?.gid) {
        throw new Error('No se pudo determinar un gid válido para Google Sheets');
      }
      effectiveOptions.gid = chosen.gid;
    }

    const result = await this.fetchData(effectiveOptions);
    const validData = this.filterValidData(result.data);
    
    return {
      success: true,
      data: validData,
      metadata: {
        totalRows: result.totalRows,
        validRows: validData.length,
        headers: validData.length > 0 ? Object.keys(validData[0]) : [],
        gid: effectiveOptions.gid ?? null,
        source: 'google-sheets',
        processedAt: new Date().toISOString()
      }
    };
  }

  /**
   * Detectar tipos de exámenes y sectores únicos
   */
  detectExamTypes(data) {
    const examTypes = new Set();
    const sectors = new Set();
    const careers = new Set();

    data.forEach(row => {
      if (row['Tipo Examen']) examTypes.add(row['Tipo Examen']);
      if (row.SECTOR) sectors.add(row.SECTOR);
      if (row.CARRERA) careers.add(row.CARRERA);
    });

    return {
      examTypes: Array.from(examTypes),
      sectors: Array.from(sectors),
      careers: Array.from(careers),
      totalUniqueExamTypes: examTypes.size,
      totalUniqueSectors: sectors.size,
      totalUniqueCareers: careers.size
    };
  }

  /**
   * Validar estructura de datos
   */
  validateDataStructure(data) {
    const requiredFields = ['SECTOR', 'CARRERA', 'MATERIA', 'FECHA'];
    const issues = [];

    data.forEach((row, index) => {
      requiredFields.forEach(field => {
        if (!row[field]) {
          issues.push({
            row: index + 1,
            field,
            message: `Campo '${field}' vacío`
          });
        }
      });
    });

    return {
      isValid: issues.length === 0,
      issues,
      totalRows: data.length
    };
  }

  /**
   * Test de conexión al endpoint
   */
  async testConnection(options = {}) {
    try {
      console.log('🧪 Probando conexión a Google Sheets...');
      const result = await this.fetchData(options);
      
      const sample = result.data.slice(0, 2);
      
      return {
        success: true,
        message: 'Conexión exitosa',
        totalRows: result.totalRows,
        sampleData: sample,
        headers: sample.length > 0 ? Object.keys(sample[0]) : []
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        error: error
      };
    }
  }
}

export default GoogleSheetService;
