import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Una cabaña = un archivo en src/content/cabanas/<slug>.md
 * - El frontmatter (lo de arriba, entre ---) son los datos.
 * - El texto de abajo es el "speech de venta" que se muestra en la página de la cabaña.
 * El nombre del archivo (sin .md) es la URL: casa-aguila.md → /cabanas/casa-aguila/
 */
const cabanas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cabanas' }),
  schema: z.object({
    nombre: z.string(),
    capacidadMax: z.number(),
    precio1Noche: z.number(),
    precio2Noches: z.number(),
    precioNocheExtra: z.number().optional(),
    /** Frase corta para la galería de la portada. */
    resumen: z.string().optional(),
    /** Titular grande del speech de venta. */
    titular: z.string().optional(),
    /** Orden en la portada (menor = primero). */
    orden: z.number().default(99),
    /** Fotos en /public/images/. La primera es la portada; todas entran al carrusel. */
    imagenes: z.array(z.string()).default([]),
    amenidades: z.array(z.string()).default([]),
    queLlevar: z.array(z.string()).default([]),
    noIncluye: z.array(z.string()).default([]),
    reglamento: z.array(z.string()).default([]),
    admiteMascotas: z.boolean().default(true),
    activa: z.boolean().default(true),
  }),
});

export const collections = { cabanas };
