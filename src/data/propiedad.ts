/** Datos que aplican a toda la propiedad (no a una cabaña en particular). */
export const adelantoPct = 30;

export const horarios = {
  llegada: '10:00 AM',
  salida: '1:00 PM',
  salidaMax: '2:00 PM',
};

/** Lo que incluyen todas las cabañas (viene de la sección original de la portada). */
export const incluyeTodas = [
  { icono: 'cooking-pot', titulo: 'Cocina equipada', texto: 'Utensilios básicos en todas las cabañas.' },
  { icono: 'wifi-high', titulo: 'WiFi (costo extra)', texto: 'Consulta por la disponibilidad del servicio.' },
  { icono: 'fire', titulo: 'Asador y fogatero', texto: 'Para disfrutar las noches al aire libre.' },
  { icono: 'tag', titulo: 'Reserva directa', texto: 'Sin intermediarios, atención personalizada.' },
];

/* ---------- Información común a todas las cabañas ----------
   Estas listas se muestran en la página de cada cabaña.
   Si una cabaña necesita algo distinto, escribe sus propias listas
   (queLlevar / noIncluye / reglamento) en su archivo .md y reemplazan a estas. */
export const queLlevarComun = [
  'Alimentos y bebidas frías y calientes',
  'Hielo y hielera (no hay refrigerador)',
  'Carbón, servilletas, azúcar, sal, café, aceite comestible y condimentos',
  'Sleeping bags o cobertores',
  'Sillas y/o mesas plegables',
  'Linternas',
  'Ropa adecuada para baja temperatura',
  'Sanitizante en gel o aerosol',
  'Bolsas para la basura',
];

export const noIncluyeComun = [
  'No hay refrigerador: lleva hielera con hielo',
  'No hay pantallas de TV',
  'La energía es solar: por eso hay que cuidarla (ver reglamento)',
];

export const reglamentoComun = [
  'Ambiente 100% familiar. Prohibidas las fiestas privadas: no es salón de fiestas ni de eventos.',
  'No fumar dentro de la casa rústica. Si fumas, hazlo al aire libre, lejos de áreas arboladas, pasto, maleza o matorrales, y deposita las colillas en el bote de basura. Evita incendios.',
  'Tira la basura en sus bolsas y llévatela. Si prefieres no llevártela, se hace un cargo de $250 que se paga en ese momento.',
  'No hacer fogatas directas sobre el piso: puedes ser multado por las autoridades.',
  'No mover las camas ni otros muebles. Si es muy necesario, pide a los administradores que lo hagan para evitar cargos por daños.',
  'Música con volumen moderado y sin bafles ni bocinas.',
  'Por la energía solar, no llevar: microondas, tostador, cafetera eléctrica, plancha, pantallas de TV, calentadores eléctricos ni herramientas eléctricas.',
  'No cortar leña por tu cuenta.',
  'Enciende solo los focos necesarios y apaga los demás: la electricidad viene de baterías solares.',
  'Deja la casa a tiempo: salida a la 1:00 PM, máximo 2:00 PM, o al horario convenido.',
];
