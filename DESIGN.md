# Lado a Lado Design

## Design Intent

Lado a Lado should look youthful without looking casual, and warm without looking generic. The brand works when it feels human, tactile, hopeful, and slightly handmade.

The visual identity is built around a contrast:

- romantic, slightly provocative, expressive messaging
- disciplined layouts and strong typography
- warm paper-like colors
- hand-drawn illustrations and signature-style marks

## Brand Character

The design language should communicate:

- closeness
- optimism
- sincerity
- movement energy
- trustworthiness

It should avoid looking corporate, tech-branded, minimal-luxury, or youth-culture ironic.

## Visual Foundations

### Color

The live Svelte site defines a compact palette in `src/styles.scss`:

- `--theme-cream`: warm paper background
- `--theme-yellow`: signature yellow feature surface
- `--theme-toast`: darker yellow accent
- `--theme-red`: primary action and emphasis color
- `--theme-brown`: deep wine/brown brand anchor
- `--theme-black`: ink black
- `--theme-white`: pure white card surfaces (`--surface-card` in the HTML design system)

The parallel HTML design system under `design/html` expands this into a fuller token set with Portuguese brand names such as `--lal-amarelo`, `--lal-bege`, `--lal-vermelho`, and `--lal-bordo`.

Practical rule:

- cream or warm white for page background
- yellow for feature bands and hero energy
- red for CTAs, labels, highlights, and accents
- deep brown/bordo for grounding text, footer, and contrast areas
- black mainly for illustration ink and strong display contrast

### Typography

The current production site uses:

- `Rubiks` for most headings and body emphasis
- `OverpassMono` for labels, nav chips, and CTAs
- `FruitsDelight` for expressive script moments
- `Open Sans` as a fallback regular face

The standalone HTML design system documents a slightly more formal type model with:

- `Abhaya Libre` as display serif
- `Rubik` as primary sans
- `Overpass Mono` as UI mono
- `Open Sans` as secondary UI/body

This means the repo currently has two design expressions:

- the live Svelte site, which leans more script-led
- the HTML design system, which leans more serif-led

Until these are consolidated, production changes should preserve the established typography of the route being edited rather than mixing both approaches arbitrarily.

### Shape

- Buttons are rounded pills with a visible outline or solid fill
- Cards should feel soft and approachable, never sharp or severe
- Circular crops are used for speakers and people
- Large illustrations can overflow sections and create asymmetry

## Layout Principles

- Build pages as a long vertical narrative
- Alternate calm cream sections with louder yellow or dark sections
- Keep content centered inside generous containers
- Let headings feel large and declarative
- Use monospace eyebrows and labels to organize sections
- Prefer obvious calls to action over dense navigation or complex controls

The main homepage uses section-based scrolling with sticky navigation. The event page uses large hero composition and editorial sections. Both should preserve strong rhythm over dense information density.

## Responsive Breakpoints

The homepage (`src/routes/+page.svelte` + `src/lib/styles/home.scss`) follows the breakpoint model of `design/html/templates/homepage/Homepage.dc.html`:

- **900px is the main breakpoint.** Below it: burger button toggles the nav drawer (which includes the "Junta-te" CTA), evento grid and testemunhos stack to one column, hero copy gets compact padding. At and above it: full nav, multi-column layouts.
- **768px is the minor breakpoint.** Below it: slideshow switches from 16/7 to 4/3, newsletter form stacks, Instagram strip becomes a snap-scrolling row.
- **480–520px are the small-phone tweaks.** Below 480px the evento CTA goes full-width with tighter padding so the mono label fits 320px viewports; partner logos shrink.
- Fluid grids use `minmax(min(Npx, 100%), 1fr)` so columns never overflow narrow viewports.

## Components and Patterns

Current recurring patterns include:

- hero blocks with large brand statement
- pill CTA buttons
- section anchors / chip navigation
- event cards and schedule rows
- round speaker avatars
- partner logo rails
- social icon links
- Instagram embed strips

The HTML design system additionally defines reusable primitives such as `Button`, `NavBar`, `SpeakerCard`, `ScheduleRow`, `FeatureBand`, and `SectionHeading`. That package is the clearest reusable component reference in the repo.

## Imagery and Illustration

- Use warm photography and human-centered scenes
- Prefer hand-drawn line illustrations where the brand already provides them
- Avoid generic SaaS-style icons or stock-tech visuals
- Logo marks and hand illustrations should remain prominent brand signatures

The conference/event surfaces especially rely on oversized illustration assets like the holding-hands motif and expressive logo compositions.

## Motion and Interaction

Interaction should stay restrained:

- light hover contrast changes
- clear active states on pills and nav items
- smooth scroll between sections
- no decorative looping animation

The site should feel alive, but not flashy.

## Voice in UI

The visual system depends on the copy style as much as the graphics:

- European Portuguese
- direct second-person address
- emotionally clear, not corporate
- short CTA labels
- section headings that can read like invitations or questions

Examples already in the product include "Foste feito para amar", "Em que consiste?", and "Nao deixes escapar nada...".

## Implementation Notes

- Live global design tokens currently live in `src/styles.scss`.
- The richer reference system lives in `design/html/readme.md` and related token files.
- Several production route files contain text-encoding issues in accented Portuguese strings. Any design/content pass should preserve the intended Portuguese copy while fixing encoding at the source.
- There is currently no single canonical design source. The Svelte routes are the production output; `design/html` is the most complete system reference.

## Recommended Design Direction

To keep the product coherent as it grows:

1. Choose one display-heading system for future pages: script-led or serif-led.
2. Normalize color token names between `src/styles.scss` and `design/html/tokens`.
3. Convert repeated UI patterns into shared Svelte components.
4. Fix Portuguese copy encoding before doing broader content polish.
5. Treat warmth, legibility, and strong CTA clarity as higher priority than novelty.

