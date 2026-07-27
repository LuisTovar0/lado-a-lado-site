# UI Kit — Conference Website ("Viver para amar")

A high-fidelity recreation of the Lado a Lado conference landing page, recreated from the Figma frame `Website` (node `741:11`).

## Files
- `index.html` — entry; loads `styles.css` + the compiled `_ds_bundle.js`, mounts `Site`.
- `Site.jsx` — the full single-page site, composed from design-system components.

## Sections
Hero (nav · eyebrow · serif title · CTA · holding-hands illustration) → Sobre (copy + video) → yellow feature band → Oradores (speaker grid + microphone-hand illustration) → Horário (schedule rows) → Reserva band → wine footer. Clicking any **Inscrição / Reserva** button opens a registration modal (interactive, fake submit).

## Notes
Built entirely from design-system primitives (`NavBar`, `SectionHeading`, `SpeakerCard`, `ScheduleRow`, `FeatureBand`, `Button`, `HoldingHands`, `HandMic`, `Logo`). Speaker names/agenda are representative placeholders in the brand's voice.
