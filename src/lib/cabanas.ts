import { getCollection, type CollectionEntry } from 'astro:content';
import fs from 'node:fs';
import path from 'node:path';
import { url } from './url';

export type Cabana = CollectionEntry<'cabanas'>;

/** Cabañas activas en el orden de la portada. */
export async function cabanasActivas(): Promise<Cabana[]> {
  const todas = await getCollection('cabanas', (c) => c.data.activa);
  return todas.sort((a, b) => a.data.orden - b.data.orden || a.data.nombre.localeCompare(b.data.nombre));
}

/**
 * Imágenes de una cabaña listas para usar. Si un archivo de /public no existe
 * todavía (fotos pendientes), se usa una ilustración provisional en su lugar,
 * así el sitio nunca muestra imágenes rotas.
 */
export function imagenesDe(c: Cabana): { src: string; alt: string; provisional: boolean }[] {
  const existe = (p: string) => fs.existsSync(path.join(process.cwd(), 'public', p.replace(/^\//, '')));
  const rutas = c.data.imagenes.length ? c.data.imagenes : [];
  const reales = rutas.filter(existe);
  if (reales.length) {
    return reales.map((p, i) => ({ src: url(p), alt: `${c.data.nombre}, foto ${i + 1}`, provisional: false }));
  }
  // Cada cabaña arranca en una ilustración distinta para que no se vean todas iguales
  const giro = (c.data.orden - 1 + 4) % 4;
  return [0, 1, 2, 3].map((k) => ({
    src: url(`images/placeholder-${((giro + k) % 4) + 1}.svg`),
    alt: `${c.data.nombre}: foto próximamente`,
    provisional: true,
  }));
}

export const precioExtraDe = (c: Cabana) => c.data.precioNocheExtra ?? Math.round(c.data.precio2Noches / 2);
export const mxnCorto = (n: number) => `$${n.toLocaleString('es-MX')}`;
