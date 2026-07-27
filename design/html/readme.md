# Lado a Lado — Design System

> Brand voice: **young and reliable.** The audience is young people who want to
> marry and build a family grounded in good values — fidelity and true love.
> Tagline energy: *"Foste feito para amar"* / *"Viver para amar"* — you were made to love.

Lado a Lado ("side by side", in Portuguese) is a movement and event brand that
inspires young people to discover the meaning of life in real love — through
conferences, courses, volunteering and a small merch line. The identity is warm,
human and hand-drawn: cream paper, a sunny yellow, a coral red and a deep wine
bordô, paired with black ink illustrations of hands.

## Sources
This system was extracted from the attached Figma file **"Lado a Lado.fig"** (a
read-only mounted file at the time of authoring). Key frames used:
- `Website` / `741:11` — the "Viver para amar" conference landing page.
- `page › CORES DA MARCA`, `Conjugações tipografia` — brand colour & type specimens.
- `Merch` page — coffee + apparel slogan compositions and merch icons.
- Figma Variable collections "Variable collection" (the named brand palette:
  Amarelo, Bege, Vermelho, Bordô, Castanho, Salmão, Preto) and "Ungrouped".

The file also embeds two third-party libraries (Mercedes-Benz "Workbench" `wb-*`
buttons/spinners and a generic "SDS" token set + `bds-*` icons). These are **not
the Lado a Lado brand** and were intentionally not recreated; the brand's own
button is the pill (`Frame 7`), recreated here as `Button`.

---

## Content fundamentals — how Lado a Lado writes

- **Language:** European Portuguese. Warm, direct, hopeful.
- **Address:** second person singular, informal **"tu"** — *"Foste feito para amar"*,
  *"Reserva o teu lugar"*, *"Não deixes escapar nada"*. Speaks to one young person,
  like a friend who believes in them.
- **Tone:** sincere and uplifting, never preachy or corporate. Big, romantic
  statements stated plainly: *"E viveram lado a lado para sempre"*, *"Não nascemos
  ensinados — também temos que aprender a amar"*.
- **Casing:** sentence case for serif headlines (*"Em que consiste?"*). UPPERCASE,
  letter-tracked monospace for eyebrows, labels and CTAs (*"SOBRE"*, *"ORADORES"*,
  *"INSCRIÇÃO"*, *"CONFERÊNCIA • 3 MARÇO 2024, LISBOA"*).
- **Questions as headings:** sections often open with a question — *"Em que
  consiste?"*, *"Quem são os oradores?"*, *"Que programa temos para oferecer?"*.
- **Punctuation flourish:** a `•` bullet separates eyebrow fragments (date • place).
- **Merch voice (English, playful):** *"Made to love and be loved"*, *"Requires
  caffeine & perseverance"*, *"Fidelity advocate"*, *"Made with love"*.
- **Emoji:** none. Warmth comes from illustration and colour, not emoji.

---

## Visual foundations

**Colour.** A warm, papery palette. Cream (`--lal-bege #FCF9E9`) is the default
page; sunny yellow (`--lal-amarelo #FFE57D`) marks feature bands; coral red
(`--lal-vermelho #BD4747`) is the primary accent (eyebrows, avatars, buttons,
dots); deep wine bordô (`--lal-bordo #6D2E46`) is the dark/footer colour and
secondary accent. Castanho (mustard) and Salmão round out the merch palette. Black
is reserved for ink illustrations and serif display text.

**Type.** Four faces:
- **Abhaya Libre** (serif) — elegant display headlines (*"Viver para amar"*).
- **Rubik** (sans) — bold headings and body copy.
- **Overpass Mono** — uppercase, tracked eyebrows, labels, CTAs, schedule times.
- **Open Sans** — secondary / denser UI text.
- The **"ladoalado" wordmark** is a flowing signature script (originally *Fruits
  Delight*); it ships as an SVG (`assets/logo-ladoalado.svg`, component `Logo`).

**Backgrounds.** Flat warm fields — cream, yellow bands, wine footer. No
gradients. Imagery is **hand-drawn black ink line art** (holding hands, a hand
holding a microphone, praying hands) sitting directly on the cream, often bleeding
off the top-right of the hero. Photography, where used, is warm-toned.

**Shape & cards.** A deliberate contrast: **fully-rounded pills** for buttons and
tags, and **softly-rounded cards** (`--radius-card 16px`) for content. Cards are
white or cream with a soft, warm, low-contrast shadow (`--shadow-sm/md`, tinted
with bordô). A playful **hard ink offset** (`--shadow-ink`, `6px 6px 0 #000` + 2px
black border) is available for posters/merch.

**Borders & buttons.** The signature button is a pill with a **heavy 3px stroke** —
solid (filled coral/bordô) or outline (red ring on transparent). Hairlines are a
translucent bordô (`--border-hairline`), used for schedule dividers.

**Motion.** Restrained and soft. Hover = slight brightness drop / lift
(`translateY(-4px)`); press = `scale(0.97)`. Easing `--ease-out`
(`cubic-bezier(.22,1,.36,1)`), 140–420ms. No bounces, no infinite loops.

**Layout.** Centred content column (`--container-max 1200px`) with generous fluid
padding. Section rhythm: mono eyebrow → serif question heading → content. Full-bleed
yellow bands break up the long scroll.

---

## Iconography

Lado a Lado is **illustration-led, not icon-led.** The brand's own marks are a
small set of **hand-drawn merch icons** — `Heart`, `Smile`, `Coffee` (several
sizes), `SmileyHappyPlus` — materialised into `components/icons/` and rendered via
`<Icon name="…" />` (single-colour, painted with `currentColor`). The large
hero illustrations (holding hands, hand-with-microphone) are React components in
`components/illustrations/`. There is **no icon font**; UI affordances use these
brand marks or simple text. Avoid generic icon libraries — they read as
off-brand. (The Figma file's embedded `bds-*` chevrons/info icons belong to a
third-party library and are not part of this identity.)

---

## Index / manifest

**Root**
- `styles.css` — global entry (imports the four token files). Consumers link this.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`
  (Google Fonts import). `fig-tokens.css` is the raw materialised Figma variable
  dump, kept for reference (not imported).
- `assets/` — `logo-ladoalado.svg`.

**Components** (`components/`, exposed on `window.LadoALadoDesignSystem_313ead`)
- `core/` — `Button`, `Eyebrow`, `SectionHeading`, `Tag`, `Avatar`, `SpeakerCard`,
  `ScheduleRow`, `TestimonialCard`, `Card`, `FeatureBand`
- `navigation/` — `Logo`, `NavBar`
- `illustrations/` — `HoldingHands`, `HandMic`
- `icons/` — `Icon` (Heart, Smile, Coffee, SmileyHappyPlus)

**Foundation cards** (`guidelines/`) — colour, type, spacing, radii/shadow, logo
specimens (shown in the Design System tab).

**UI kits** (`ui_kits/`)
- `website/` — "Viver para amar" conference landing page (interactive).
- `merch/` — merch / apparel shop collection.

**Other**
- `SKILL.md` — Agent-Skill manifest for using this system in Claude Code.
