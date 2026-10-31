import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cabanas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cabanas" }),
  schema: z.object({
    nombre: z.string(),
    capacidadMax: z.number(),
    precio1Noche: z.number(),
    precio2Noches: z.number(),
    precioNocheExtra: z.number().optional(),
    imagenes: z.array(z.string()),
    amenidades: z.array(z.string()),
    queLlevar: z.array(z.string()),
    noIncluye: z.array(z.string()),
    reglamento: z.array(z.string()),
    admiteMascotas: z.boolean().default(true),
    activa: z.boolean().default(true),
  })
});

export const collections = { cabanas };