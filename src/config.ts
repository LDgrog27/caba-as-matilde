export const site = {
  name: 'Cabañas Matilde',
  place: 'Sierra de Arteaga',
  city: 'Coahuila',
  title: 'Cabañas Matilde | Escapada en la Sierra de Arteaga',
  description:
    'Escapada perfecta en la Sierra de Arteaga, Coahuila. A 80 min de Saltillo y 2 hrs de Monterrey. Cabañas rústicas para familias y grupos. Reserva directo por WhatsApp.',
  ogImage: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&h=630&q=75',
  lang: 'es',
  timeZone: 'America/Monterrey',
  locale: 'es-MX',
  latitude: 25.4453,
  longitude: -100.8033,
  whatsappNumber: '528125800115',
};
/**
 * Ubicación para el mapa y los enlaces a Google Maps.
 * ⚠️ CONFIRMAR: estas coordenadas son las del centro de Arteaga. Para que el mapa
 * y "Cómo llegar" lleven a las cabañas, pon las coordenadas exactas (en Google Maps:
 * clic derecho sobre el punto → copiar coordenadas) o pega el enlace de "Compartir".
 */
export const ubicacion = {
  lat: 25.4453,
  lng: -100.8033,
  referencia: 'Sierra de Arteaga, Coahuila',
  acceso: 'Camino de terracería en buen estado (últimos 5 min).',
  /** Opcional: enlace de "Compartir" de Google Maps; si lo pones, se usa en lugar de las coordenadas. */
  enlace: '',
};
const punto = `${ubicacion.lat},${ubicacion.lng}`;
export const mapaUrl = ubicacion.enlace || `https://www.google.com/maps/search/?api=1&query=${punto}`;
export const rutaUrl = `https://www.google.com/maps/dir/?api=1&destination=${punto}`;
export const mapaEmbedUrl = `https://www.google.com/maps?q=${punto}&hl=es&z=14&output=embed`;
