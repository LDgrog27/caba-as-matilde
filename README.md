# Cabañas Matilde · Sierra de Arteaga

Sitio en Astro basado en el tema [Solenne](https://github.com/Sv3nskie/astro-theme-solenne) (MIT), adaptado a las cabañas.

## Qué tiene
- **Portada:** barra de reserva con cotizador en vivo (1 noche / 2 noches / noche extra, adelanto) que abre WhatsApp con el mensaje listo, galería de cabañas, ubicación con mapa y reseñas.
- **Una página por cabaña** (`/cabanas/<nombre>/`): carrusel automático con las fotos, speech de venta, y debajo toda la información (tarifas, horarios, qué llevar, qué no incluye, reglamento).
- Mapa que al tocarlo abre Google Maps, y botón "Cómo llegar".

## Cómo se edita
| Qué | Dónde |
| --- | --- |
| Una cabaña (datos, precios, fotos, speech) | `src/content/cabanas/<nombre>.md` — el texto de abajo del frontmatter es el speech de venta |
| Agregar una cabaña | copiar un `.md` de esa carpeta y cambiar los datos (la galería de la portada muestra 5) |
| Fotos | `public/images/` con el nombre que dice el `.md`. Si falta una foto, se muestra una ilustración provisional |
| Reseñas reales | `src/data/testimonios.ts` (las marcadas `ejemplo: true` no se publican) |
| Adelanto (%), horarios, qué incluyen todas | `src/data/propiedad.ts` |
| WhatsApp, coordenadas y enlace de Google Maps | `src/config.ts` (`whatsappNumber`, `ubicacion`) |
| Cálculo del precio | `src/lib/cotizar.js` |
| Logo | `public/images/logo.png` |

## Comandos
```bash
npm install
npm run dev      # desarrollo
npm run build    # genera dist/
```

Tema base por Sven Esser, licencia MIT (ver LICENSE).
