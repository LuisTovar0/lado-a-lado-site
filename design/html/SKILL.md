---
name: lado-a-lado-design
description: Use this skill to generate well-branded interfaces and assets for Lado a Lado, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Quick orientation:
- Brand: **Lado a Lado** ("side by side") — a Portuguese movement inspiring young people to build families on fidelity and true love. Voice: young + reliable; informal "tu"; warm, hopeful, hand-drawn.
- Palette: cream `#FCF9E9`, yellow `#FFE57D`, coral red `#BD4747`, wine bordô `#6D2E46` (+ Castanho, Salmão). Defined in `tokens/colors.css`.
- Type: Abhaya Libre (serif display), Rubik (body/headings), Overpass Mono (uppercase eyebrows/labels/CTAs), Open Sans (UI). Script "ladoalado" wordmark ships as SVG.
- Components live in `components/` and are exposed on `window.LadoALadoDesignSystem_313ead` once `_ds_bundle.js` is loaded. See each component's `.prompt.md`.
- Full design guide, content & visual foundations, iconography: `readme.md`.
- Working examples: `ui_kits/website/` and `ui_kits/merch/`.
