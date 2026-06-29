import axios from 'axios';

// ─── Helpers para discriminación de cátedra por docente ───────────────────────

/**
 * Normaliza un nombre de profesor eliminando títulos académicos y DNI.
 * Devuelve un Set de palabras de 3+ letras en mayúsculas para comparación.
 * Soporta formatos heterogéneos:
 *   UCASAL:  "Abg. LOPEZ ARIAS RICARDO CARMELO, 25069211"
 *   Sheet:   "RICARDO CARMELO LOPEZ ARIAS"
 */
export function normalizarNombreProfesor(str) {
  if (!str) return new Set();
  let s = str.replace(/\b(Abg|Lic|Dr|Dra|Mg|Prof|Ing|Arq|Esp|Cra|Cr|Sr|Sra)\.?\s*/gi, '');
  s = s.replace(/,?\s*\d{6,9}\s*$/, ''); // eliminar DNI al final
  return new Set(
    s.toUpperCase()
     .split(/[\s,]+/)
     .map(w => w.replace(/[^A-ZÁÉÍÓÚÜÑ]/gi, ''))
     .filter(w => w.length >= 3)
  );
}

/**
 * Calcula el score de coincidencia entre el docente guardado en BD
 * y los profesores que devuelve UCASAL para un acta.
 * @returns {number} Score entre 0 y 1
 */
export function scoreMatchActaConDocente(acta, docenteDB) {
  const docenteWords = normalizarNombreProfesor(docenteDB);
  if (docenteWords.size === 0) return 0;
  const candidatos = [acta.profTit, acta.prof1, acta.prof2].filter(Boolean);
  let maxScore = 0;
  for (const prof of candidatos) {
    const profWords = normalizarNombreProfesor(prof);
    if (profWords.size === 0) continue;
    const comunes = [...docenteWords].filter(w => profWords.has(w)).length;
    const score = comunes / Math.max(docenteWords.size, profWords.size);
    if (score > maxScore) maxScore = score;
  }
  return maxScore;
}

/**
 * Calcula el score combinando docente + cátedra de la BD contra los textos
 * del acta UCASAL (profTit, prof1, prof2 y, si existe, acta.catedra).
 * @returns {number} Score entre 0 y 1
 */
export function scoreMatchActaConIdentidad(acta, docenteDB, catedraDB) {
  const corpus = [docenteDB, catedraDB].filter(Boolean).join(' ');
  const corpusWords = normalizarNombreProfesor(corpus);
  if (corpusWords.size === 0) return 0;
  const candidatos = [acta.profTit, acta.prof1, acta.prof2, acta.catedra].filter(Boolean);
  let maxScore = 0;
  for (const prof of candidatos) {
    const profWords = normalizarNombreProfesor(prof);
    if (profWords.size === 0) continue;
    const comunes = [...corpusWords].filter(w => profWords.has(w)).length;
    const score = comunes / Math.max(corpusWords.size, profWords.size);
    if (score > maxScore) maxScore = score;
  }
  return maxScore;
}

/**
 * Filtra actas por identidad combinada de docente + cátedra de la BD.
 *
 * - Si hay coincidencias por encima del umbral, devuelve solo esas.
 * - Si no hay coincidencias y `strict` = true, devuelve [] (evita asignar
 *   los mismos inscriptos a múltiples exámenes hermanos).
 * - Si no hay coincidencias y `strict` = false, devuelve todas las actas
 *   (compatibilidad con casos sin docente/cátedra confiable).
 *
 * @param {Array}  actas
 * @param {string} docenteDB
 * @param {string} catedraDB
 * @param {{ umbral?: number, strict?: boolean }} [opts]
 * @returns {Array}
 */
export function filtrarActasPorIdentidad(actas, docenteDB, catedraDB, opts = {}) {
  const { umbral = 0.4, strict = false } = opts;
  if (!actas?.length) return actas || [];
  // catedraDB (A/B/C) es solo una etiqueta del Sheet, no comparable con campos de UCASAL.
  // El matching se realiza únicamente por nombre de docente contra profTit/prof1/prof2.
  if (!docenteDB) return actas;

  const coincidentes = actas.filter(
    a => scoreMatchActaConDocente(a, docenteDB) >= umbral
  );
  if (coincidentes.length > 0) {
    console.log(
      `🎯 Filtro identidad (docente="${docenteDB}", catedra="${catedraDB || '-'}"): ${coincidentes.length}/${actas.length} actas`
    );
    return coincidentes;
  }
  if (strict) {
    console.log(
      `⛔ Filtro identidad strict (docente="${docenteDB}", catedra="${catedraDB || '-'}"): 0/${actas.length} — descartando`
    );
    return [];
  }
  console.log(
    `⚠️  Filtro identidad (docente="${docenteDB}", catedra="${catedraDB || '-'}"): sin match, fallback a todas`
  );
  return actas;
}

// ──────────────────────────────────────────────────────────────────────────────

class ActaExternaService {
  constructor() {
    this.baseURL = process.env.UCASAL_API_URL || 'https://backprod.ucasal.edu.ar/actas/v1';
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      timeout: parseInt(process.env.UCASAL_API_TIMEOUT) || 30000,
    });
    // Filtro obligatorio: solo inscriptos con modo=7
    this.MODO_REQUERIDO = "7";
  }

  /**
   * Formatear fecha a DD/MM/YYYY para la API de UCASAL
   */
  formatDateDDMMYYYY(date) {
    const d = new Date(date);
    return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
  }

  /**
   * Consulta genérica a la API de actas por materia
   * @param {string|number} codigoMateria - Código de materia TOTEM
   * @param {Object} options - Opciones de consulta
   * @returns {Promise<Array>} Actas encontradas
   */
  async consultarActasPorMateria(codigoMateria, options = {}) {
    try {
      const params = new URLSearchParams();
      
      if (options.rendida !== undefined) {
        params.append('rendida', options.rendida);
      } else {
        params.append('rendida', 'false'); // default
      }
      
      if (options.fechaDesde) {
        params.append('fechaDesde', options.fechaDesde);
      }
      if (options.fechaHasta) {
        params.append('fechaHasta', options.fechaHasta);
      }
      
      // Agregar areaTema si se proporciona
      if (options.areaTema) {
        params.append('areaTema', options.areaTema);
      }

      const url = `/acta/materia/${codigoMateria}?${params.toString()}`;
      console.log(` UCASAL API: ${this.baseURL}${url}`);
      
      const response = await this.axiosInstance.get(url);
      return response.data || [];
      
    } catch (error) {
      console.error(` Error consultando UCASAL (materia ${codigoMateria}):`, error.message);
      throw error;
    }
  }

  /**
   * Consultar actas por DNI
   * @param {string} dni - DNI del estudiante
   * @param {Object} options - Opciones de consulta
   */
  async consultarActasPorDNI(dni, options = {}) {
    try {
      const params = new URLSearchParams();
      
      if (options.fechaDesde) params.append('fechaDesde', options.fechaDesde);
      if (options.fechaHasta) params.append('fechaHasta', options.fechaHasta);

      const url = `/acta/DNI-LE-LC/${dni}?${params.toString()}`;
      console.log(` UCASAL API: ${this.baseURL}${url}`);
      
      const response = await this.axiosInstance.get(url);
      return response.data || [];
      
    } catch (error) {
      console.error(` Error consultando UCASAL (DNI ${dni}):`, error.message);
      throw error;
    }
  }

  /**
   * Discrimina actas por docente usando profTit, prof1 y prof2 disponibles directamente
   * en la respuesta de /acta/materia (no requiere cross-lookup por DNI).
   * @param {Array} actas - Actas ya filtradas (modo/carrera)
   * @param {string} _codigoMateria - Ignorado, mantenido por compatibilidad
   * @param {string} docenteDB - Docente según la BD local
   * @param {string} catedraDB - Catedra según la BD local
   * @param {{ umbral?: number, strict?: boolean }} [opts]
   * @returns {Array} Actas que corresponden al docente
   */
  discriminarActasPorDocente(actas, _codigoMateria, docenteDB, catedraDB = null, opts = {}) {
    if (!actas?.length) return actas || [];
    if (!docenteDB) return actas;

    const { umbral = 0.4, strict = false } = opts;
    const etiqueta = `docente="${docenteDB}", catedra="${catedraDB || '-'}"`;

    console.log(`🔍 Discriminando ${etiqueta}: ${actas.length} actas`);

    // catedraDB (A/B/C) es solo una etiqueta del Sheet, no comparable con campos de UCASAL.
    // El matching se realiza únicamente por nombre de docente contra profTit/prof1/prof2.
    const coincidentes = actas.filter(acta => {
      const s = scoreMatchActaConDocente(acta, docenteDB);
      console.log(`  📋 Acta ${acta.acta}: profTit="${acta.profTit}" → score=${s.toFixed(2)}`);
      return s >= umbral;
    });

    if (coincidentes.length > 0) {
      console.log(`🎯 Identidad: ${coincidentes.length}/${actas.length} actas para ${etiqueta}`);
      return coincidentes;
    }
    if (strict) {
      console.log(`⛔ Sin coincidencias strict para ${etiqueta} → 0 actas`);
      return [];
    }
    console.log(`⚠️  Sin coincidencias para ${etiqueta}, fallback a todas`);
    return actas;
  }

  /**
   * Obtener inscriptos para un examen específico
   * Filtra por materia + areaTema + lugar=3 + modo=7
   * Cuando se pasa docenteDB, además discrimina por cátedra usando los profesores del acta.
   */
  async obtenerInscriptosExamen(codigoMateria, areaTema, fechaExamen = null, carreraTotem = null, docenteDB = null, catedraDB = null, opts = {}) {
    const fechaDesde = fechaExamen 
      ? this.formatDateDDMMYYYY(fechaExamen)
      : this.formatDateDDMMYYYY(new Date());
    
    const fechaHasta = this.formatDateDDMMYYYY(
      new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    );
    
    // Consultar con areaTema como parámetro de query
    const actas = await this.consultarActasPorMateria(codigoMateria, {
      rendida: false,
      fechaDesde,
      fechaHasta,
      areaTema // Ahora se envía como parámetro a la API
    });
    
    // Filtrar actas por modo=7 y carrera a nivel de acta.
    // El filtro lugar=3 se aplica a nivel de alumno individual, donde el campo sí existe.
    let actasFiltradas = actas.filter(acta => {
      const matchModo = acta.modo?.toString() === this.MODO_REQUERIDO;
      const matchCarrera = carreraTotem ? acta.carrera?.toString() === carreraTotem.toString() : true;
      return matchModo && matchCarrera;
    });

    // 🎯 DISCRIMINACIÓN POR DOCENTE + CÁTEDRA
    if (docenteDB || catedraDB) {
      actasFiltradas = this.discriminarActasPorDocente(
        actasFiltradas, codigoMateria, docenteDB, catedraDB, opts
      );
    }

    console.log(` Filtro aplicado: areaTema=${areaTema}, carrera=${carreraTotem || 'todas'}, docente=${docenteDB || 'n/a'}, catedra=${catedraDB || 'n/a'}, strict=${!!opts.strict}, lugar=3, modo=${this.MODO_REQUERIDO}`);
    console.log(` Actas: ${actas.length} total → ${actasFiltradas.length} filtradas`);
    
    // Extraer alumnos de las actas filtradas, aplicando filtro de modo a nivel alumno también
    const alumnos = [];
    actasFiltradas.forEach(acta => {
      if (acta.alumnos && Array.isArray(acta.alumnos)) {
        acta.alumnos.forEach(alumno => {
          // Filtrar alumnos por lugar=3 (campo que solo existe a nivel alumno) y modo=7
          if (alumno.lugar?.toString() === "3" && alumno.modo?.toString() === this.MODO_REQUERIDO) {
            alumnos.push({
              dni: alumno.ndocu?.toString() || alumno.dni?.toString(),
              nombre: alumno.apen || alumno.nombre || alumno.nombreCompleto,
              apellido: alumno.apellido || '',
              email: alumno.email || null,
              modo: alumno.modo,
              lugar: alumno.lugar,
              nombreLugar: alumno.nombreLugar,
              nombreModo: alumno.nombreModo,
              actaId: acta.id,
              areaTema: acta.areaTema
            });
          }
        });
      }
    });
    
    console.log(` Inscriptos con modo=${this.MODO_REQUERIDO}: ${alumnos.length}`);
    
    return {
      totalActas: actasFiltradas.length,
      totalAlumnos: alumnos.length,
      alumnos,
      actasFiltradas,
      filtrosAplicados: {
        materia: codigoMateria,
        areaTema,
        carrera: carreraTotem || 'todas',
        docente: docenteDB || 'no especificado',
        lugar: "3",
        modo: this.MODO_REQUERIDO
      }
    };
  }

}

export default ActaExternaService;