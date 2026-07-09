// Formatea una fecha ISO (YYYY-MM-DD) a texto legible en español (es-AR),
// sin depender de la zona horaria del navegador (parseo manual).
const MESES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
];

export function formatearFecha(iso) {
  if (!iso) return '';
  const [anio, mes, dia] = iso.split('-').map(Number);
  if (!anio || !mes || !dia) return iso;
  return `${dia} de ${MESES[mes - 1]} de ${anio}`;
}
