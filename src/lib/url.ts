/** Ruta base del sitio (en GitHub Pages es /nombre-del-repo/). Siempre termina en "/". */
export const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

/** URL interna respetando la ruta base: url('cabanas/casa-oso/') */
export const url = (path = '') => base + path.replace(/^\//, '');
