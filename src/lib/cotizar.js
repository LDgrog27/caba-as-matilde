/**
 * Cálculo de precio de una estancia (modelo de Cabañas Matilde):
 *   1 noche            → precio de 1 noche
 *   2 noches           → precio de 2 noches
 *   más de 2 noches    → precio de 2 noches + (noches - 2) × precio de noche extra
 * Se usa en el navegador (main.js) y también en el servidor para la Fase 2.
 */
export function cotizar({ precio1, precio2, precioExtra }, noches, adelantoPct = 30) {
  if (!noches || noches < 1) return null;
  const extra = Number.isFinite(precioExtra) ? precioExtra : Math.round(precio2 / 2);
  const total = noches === 1 ? precio1 : precio2 + Math.max(0, noches - 2) * extra;
  const adelanto = Math.round((total * adelantoPct) / 100);
  return { noches, total, adelanto, resto: total - adelanto };
}

export const mxn = (n) => `$${Math.round(n).toLocaleString('es-MX')} MXN`;
