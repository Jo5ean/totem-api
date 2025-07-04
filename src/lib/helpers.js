/**
 * Helpers y utilidades para el proyecto TOTEM
 */

/**
 * Formatea el nombre de un aula para el display
 * - Quita la palabra "Aula" y deja solo el número
 * - Mantiene completo "Laboratorio de Informática" o similar
 * 
 * @param {string} nombreAula - Nombre original del aula
 * @returns {string} - Nombre formateado
 * 
 * @example
 * formatearNombreAula("Aula 12") → "12"
 * formatearNombreAula("Aula 4") → "4" 
 * formatearNombreAula("Laboratorio Informático") → "Laboratorio Informático"
 * formatearNombreAula("Laboratorio de Computación") → "Laboratorio de Computación"
 */
export function formatearNombreAula(nombreAula) {
  if (!nombreAula || typeof nombreAula !== 'string') {
    return nombreAula || 'Sin aula';
  }

  // Si contiene "Laboratorio", mantener completo
  if (nombreAula.toLowerCase().includes('laboratorio')) {
    return nombreAula;
  }

  // Si empieza con "Aula " seguido de número, quitar la palabra "Aula"
  const match = nombreAula.match(/^Aula\s+(\d+)$/i);
  if (match) {
    return match[1]; // Solo el número
  }

  // Para cualquier otro caso, devolver tal como está
  return nombreAula;
}

/**
 * Valida si una facultad tiene la estructura correcta
 * para evitar errores de carreras undefined
 */
export function validarFacultad(facultad) {
  if (!facultad || typeof facultad !== 'object') {
    return false;
  }
  
  // Verificar propiedades básicas
  if (!facultad.id || !facultad.nombre) {
    return false;
  }
  
  return true;
}

/**
 * Obtiene carreras de una facultad de forma segura
 */
export function obtenerCarrerasSeguras(facultad) {
  if (!validarFacultad(facultad)) {
    return [];
  }
  
  return Array.isArray(facultad.carreras) ? facultad.carreras : [];
} 