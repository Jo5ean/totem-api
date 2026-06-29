/**
 * Helpers y utilidades para el proyecto TOTEM
 */

/**
 * Formatea una fecha en formato DD/MM/YYYY con ceros a la izquierda
 * @param {Date} date - Fecha a formatear
 * @returns {string} Fecha formateada como DD/MM/YYYY
 */
export function formatDateDDMMYYYY(date) {
  if (!date || !(date instanceof Date)) {
    throw new Error('Se requiere una fecha válida');
  }
  
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  
  return `${day}/${month}/${year}`;
}