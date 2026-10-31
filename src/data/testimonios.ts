/**
 * Reseñas de huéspedes de Cabañas Matilde (sección "Huéspedes").
 *
 * ➜ Agrega aquí reseñas REALES (con permiso de quien las escribió): copia el texto tal
 *   cual de Google, Facebook o WhatsApp. Si es de una cabaña en particular, pon su `cabana`
 *   (el nombre del archivo sin .md, p. ej. 'casa-aguila') y también aparecerá en la página
 *   de esa cabaña.
 *
 * Los textos de abajo marcados con `ejemplo: true` son de muestra: se ven mientras
 * trabajas con `npm run dev`, pero NO se publican (npm run build). Cuando tengas reseñas
 * reales, ponlas en la lista y borra las de ejemplo.
 */
export interface Testimonio {
  tipo: string;
  texto: string;
  autor: string;
  detalle: string;
  cabana?: string;
  ejemplo?: boolean;
}

export const testimonios: Testimonio[] = [
  {
    tipo: 'Escapada familiar',
    texto: 'La cabaña tenía todo lo necesario y el entorno es increíble. Los chicos no querían irse. Reservar por WhatsApp fue súper rápido.',
    autor: 'Mariana G.',
    detalle: 'Viajó en familia desde Monterrey',
    ejemplo: true,
  },
  {
    tipo: 'Fin de semana con amigos',
    texto: 'El asador y el fogatero fueron el centro de la reunión. La atención de los dueños fue de diez, siempre pendientes de que no nos faltara nada.',
    autor: 'Carlos y amigos',
    detalle: 'Grupo de 10 personas',
    ejemplo: true,
  },
  {
    tipo: 'Desconexión total',
    texto: 'Buscábamos silencio y naturaleza, y lo encontramos. La cabaña es rústica y acogedora. El proceso de reserva directa fue muy transparente.',
    autor: 'Laura M.',
    detalle: 'Pareja, desde Saltillo',
    ejemplo: true,
  },
];

/** Reseñas visibles: en producción se ocultan las de ejemplo. */
export function reseñasVisibles(cabana?: string): Testimonio[] {
  const lista = testimonios.filter((t) => import.meta.env.DEV || !t.ejemplo);
  return cabana ? lista.filter((t) => t.cabana === cabana) : lista;
}
