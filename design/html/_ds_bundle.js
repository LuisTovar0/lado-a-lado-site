/* @ds-bundle: {"format":3,"namespace":"LadoALadoDesignSystem_313ead","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"FeatureBand","sourcePath":"components/core/FeatureBand.jsx"},{"name":"ScheduleRow","sourcePath":"components/core/ScheduleRow.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"SpeakerCard","sourcePath":"components/core/SpeakerCard.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"TestimonialCard","sourcePath":"components/core/TestimonialCard.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"HandMic","sourcePath":"components/illustrations/HandMic.jsx"},{"name":"HoldingHands","sourcePath":"components/illustrations/HoldingHands.jsx"},{"name":"Logo","sourcePath":"components/navigation/Logo.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"a68bef696184","components/core/Button.jsx":"b7a3fa5cc0fc","components/core/Card.jsx":"7bdff9db24be","components/core/Eyebrow.jsx":"8a338181cc31","components/core/FeatureBand.jsx":"74ec09dfa876","components/core/ScheduleRow.jsx":"47af7ccba288","components/core/SectionHeading.jsx":"7a1b716c5c8e","components/core/SpeakerCard.jsx":"cfc484ea0461","components/core/Tag.jsx":"50701452a84e","components/core/TestimonialCard.jsx":"810d839df811","components/icons/Icon.jsx":"41cf0c04459b","components/icons/icon-data.js":"95d1e98076c2","components/illustrations/HandMic.jsx":"cb0a9c58ea00","components/illustrations/HoldingHands.jsx":"371e78c16d15","components/navigation/Logo.jsx":"215b18231fa1","components/navigation/NavBar.jsx":"38f80aa9c508","ui_kits/merch/Merch.jsx":"94e42533165f","ui_kits/website/Site.jsx":"0a21fe96d85f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LadoALadoDesignSystem_313ead = window.LadoALadoDesignSystem_313ead || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
/**
 * Circular avatar. Shows an image when `src` is given, otherwise a
 * solid coral-red disc with optional initials — matching the website's
 * speaker placeholders.
 */
function Avatar({
  src,
  alt = "",
  initials,
  size = 72,
  tone = "red",
  style = {}
}) {
  const tones = {
    red: "var(--lal-vermelho)",
    bordo: "var(--lal-bordo)",
    yellow: "var(--lal-amarelo)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-full)",
      background: src ? "var(--lal-neutral-200)" : tones[tone],
      color: tone === "yellow" ? "var(--lal-bordo)" : "var(--lal-bege)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      flexShrink: 0,
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: size * 0.34,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || null);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lado a Lado primary action. A fully-rounded pill with an uppercase
 * Overpass Mono label. Filled (solid red/bordô) or outline (heavy ring).
 */
function Button({
  children,
  variant = "primary",
  // "primary" | "deep" | "outline" | "outline-light" | "ghost"
  size = "md",
  // "sm" | "md" | "lg"
  as = "button",
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "10px 22px",
      fontSize: "12px"
    },
    md: {
      padding: "15px 34px",
      fontSize: "14px"
    },
    lg: {
      padding: "20px 46px",
      fontSize: "16px"
    }
  };
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--text-on-accent)",
      boxShadow: "none",
      border: "var(--border-width-strong) solid var(--accent)"
    },
    deep: {
      background: "var(--accent-deep)",
      color: "var(--text-on-footer)",
      border: "var(--border-width-strong) solid var(--accent-deep)"
    },
    outline: {
      background: "transparent",
      color: "var(--accent)",
      border: "var(--border-width-strong) solid var(--accent)"
    },
    "outline-light": {
      background: "transparent",
      color: "var(--lal-bege)",
      border: "var(--border-width-strong) solid var(--lal-bege)"
    },
    ghost: {
      background: "transparent",
      color: "var(--accent)",
      border: "var(--border-width-strong) solid transparent"
    }
  };
  // On hover, transparent variants fill in so it's obvious the cursor is over them.
  const hovers = {
    primary: {
      background: "var(--accent-hover)",
      color: "var(--text-on-accent)"
    },
    deep: {
      background: "var(--accent-deep)",
      color: "var(--text-on-footer)",
      filter: "brightness(0.9)"
    },
    outline: {
      background: "var(--accent)",
      color: "var(--text-on-accent)"
    },
    "outline-light": {
      background: "var(--lal-bege)",
      color: "var(--accent-deep)"
    },
    ghost: {
      background: "var(--accent)",
      color: "var(--text-on-accent)"
    }
  };
  const base = variants[variant];
  const hover = hovers[variant] || {};
  const applyHover = el => {
    el.style.background = hover.background ?? base.background;
    if (hover.color) el.style.color = hover.color;
    el.style.filter = hover.filter ?? "none";
  };
  const clearHover = el => {
    el.style.background = base.background;
    el.style.color = base.color;
    el.style.filter = "none";
    el.style.transform = "scale(1)";
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: as === "button" ? disabled : undefined,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      textDecoration: "none",
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-soft), filter var(--dur-base) var(--ease-soft)",
      whiteSpace: "nowrap",
      lineHeight: 1,
      ...sizes[size],
      ...variants[variant],
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseEnter: e => {
      if (!disabled) applyHover(e.currentTarget);
    },
    onMouseLeave: e => {
      clearHover(e.currentTarget);
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Generic content surface. `tone` switches between the white card,
 * cream raised surface, yellow band, and dark wine footer panel.
 * `edge` toggles the playful hard ink offset shadow.
 */
function Card({
  children,
  tone = "card",
  edge = false,
  padding = "28px",
  style = {},
  ...rest
}) {
  const tones = {
    card: {
      background: "var(--surface-card)",
      color: "var(--text-body)"
    },
    cream: {
      background: "var(--surface-raised)",
      color: "var(--text-body)"
    },
    band: {
      background: "var(--surface-band)",
      color: "var(--text-on-band)"
    },
    footer: {
      background: "var(--surface-footer)",
      color: "var(--text-on-footer)"
    },
    ink: {
      background: "var(--surface-ink)",
      color: "var(--lal-bege)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--radius-card)",
      padding,
      boxShadow: edge ? "var(--shadow-ink)" : "var(--shadow-sm)",
      border: edge ? "2px solid var(--lal-preto)" : "none",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Monospace, uppercase, letter-tracked label — the brand's signature
 * "eyebrow" that sits above section headings ("SOBRE", "ORADORES",
 * "CONFERÊNCIA • 3 MARÇO 2024"). Red by default.
 */
function Eyebrow({
  children,
  color,
  align = "start",
  as = "span",
  style = {},
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      display: "block",
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: "var(--text-eyebrow)",
      letterSpacing: "var(--eyebrow-tracking)",
      textTransform: "uppercase",
      color: color || "var(--text-eyebrow)",
      textAlign: align,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/FeatureBand.jsx
try { (() => {
/**
 * Full-bleed yellow feature band — the brand's recurring divider that
 * carries a short script/serif statement ("E viveram lado a lado para
 * sempre") and an optional action. Defaults to the signature yellow.
 */
function FeatureBand({
  children,
  action,
  tone = "yellow",
  align = "center",
  style = {}
}) {
  const tones = {
    yellow: {
      background: "var(--surface-band)",
      color: "var(--text-on-band)"
    },
    bordo: {
      background: "var(--surface-footer)",
      color: "var(--text-on-footer)"
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: align === "center" ? "center" : "space-between",
      gap: "32px",
      flexWrap: "wrap",
      padding: "40px var(--container-pad)",
      width: "100%",
      boxSizing: "border-box",
      ...tones[tone],
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontStyle: "italic",
      fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
      lineHeight: 1.1,
      textAlign: align
    }
  }, children), action);
}
Object.assign(__ds_scope, { FeatureBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FeatureBand.jsx", error: String((e && e.message) || e) }); }

// components/core/ScheduleRow.jsx
try { (() => {
/**
 * Agenda / schedule line — time range, title + subtitle, and optional
 * coral "dots" marker. Mirrors the website's "Que programa temos para
 * oferecer?" timetable, with a hairline divider above each row.
 */
function ScheduleRow({
  time,
  title,
  subtitle,
  dots = 0,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(140px, 200px) 1fr auto",
      alignItems: "center",
      gap: "24px",
      padding: "20px 4px",
      borderTop: "1.5px solid var(--border-hairline)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 600,
      fontSize: "0.95rem",
      letterSpacing: "0.02em",
      color: "var(--text-body)"
    }
  }, time), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "3px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: "1.05rem",
      color: "var(--text-strong)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "0.92rem",
      color: "var(--text-muted)"
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px",
      justifySelf: "end"
    }
  }, Array.from({
    length: dots
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 16,
      height: 16,
      borderRadius: "var(--radius-full)",
      background: "var(--lal-vermelho)"
    }
  }))));
}
Object.assign(__ds_scope, { ScheduleRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ScheduleRow.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/**
 * Section header: optional mono eyebrow + serif display title (Abhaya Libre).
 * Mirrors the website's "SOBRE / Em que consiste?" pattern.
 */
function SectionHeading({
  eyebrow,
  children,
  align = "center",
  size = "m",
  // "m" | "l" | "xl"
  color,
  eyebrowColor,
  style = {}
}) {
  const sizes = {
    m: "var(--text-display-m)",
    l: "var(--text-display-l)",
    xl: "var(--text-display-xl)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      textAlign: align,
      alignItems: align === "center" ? "center" : align === "end" ? "flex-end" : "flex-start",
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    align: align,
    color: eyebrowColor
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: sizes[size],
      lineHeight: "var(--lh-snug)",
      color: color || "var(--text-strong)",
      textWrap: "balance"
    }
  }, children));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/SpeakerCard.jsx
try { (() => {
/**
 * Speaker / person row: avatar beside name, role and organisation.
 * Layout matches the website's "Quem são os oradores?" grid.
 */
function SpeakerCard({
  name,
  role,
  org,
  src,
  initials,
  size = 80,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "18px",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: src,
    initials: initials,
    size: size,
    alt: name
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: "1.05rem",
      color: "var(--text-strong)"
    }
  }, name), role && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "0.95rem",
      color: "var(--text-body)"
    }
  }, role), org && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "0.95rem",
      color: "var(--text-muted)"
    }
  }, org)));
}
Object.assign(__ds_scope, { SpeakerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SpeakerCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small rounded label/chip. Used for categories, dates, statuses.
 */
function Tag({
  children,
  tone = "red",
  style = {},
  ...rest
}) {
  const tones = {
    red: {
      background: "var(--lal-vermelho)",
      color: "var(--lal-bege)"
    },
    bordo: {
      background: "var(--lal-bordo)",
      color: "var(--lal-bege)"
    },
    yellow: {
      background: "var(--lal-amarelo)",
      color: "var(--lal-bordo)"
    },
    cream: {
      background: "var(--lal-bege)",
      color: "var(--lal-bordo)",
      boxShadow: "inset 0 0 0 1.5px var(--border-hairline)"
    },
    outline: {
      background: "transparent",
      color: "var(--lal-vermelho)",
      boxShadow: "inset 0 0 0 1.5px var(--lal-vermelho)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-mono)",
      fontWeight: 600,
      fontSize: "11px",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      padding: "6px 12px",
      borderRadius: "var(--radius-pill)",
      lineHeight: 1,
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/TestimonialCard.jsx
try { (() => {
/**
 * Testimonial / quote card — soft cream card with a serif quote and an
 * attributed person row.
 */
function TestimonialCard({
  quote,
  name,
  role,
  src,
  initials,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-sm)",
      padding: "32px 30px",
      display: "flex",
      flexDirection: "column",
      gap: "22px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "1.4rem",
      lineHeight: 1.32,
      color: "var(--text-strong)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--lal-vermelho)"
    }
  }, "\u201C"), quote, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--lal-vermelho)"
    }
  }, "\u201D")), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: src,
    initials: initials,
    size: 48,
    alt: name
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: "0.98rem",
      color: "var(--text-strong)"
    }
  }, name), role && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "0.88rem",
      color: "var(--text-muted)"
    }
  }, role))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/icons/icon-data.js
try { (() => {
// Generated by fig_materialize (moduleFormat: 'icon-data') — 14 icon(s)
// as { viewBox, body } SVG-markup entries. Render via the sibling Icon.jsx
// (<Icon name="CoffeeSize16" />), or consume the path data directly.
try {
  void {
    "CoffeeSize16": {
      viewBox: "0 0 16 16",
      body: "<path d=\"M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/><path d=\"M 11.333 4.667 L 11.333 3.867 L 11.333 4.667 Z M 11.333 10 L 11.333 10.8 L 11.333 10 Z M 10.667 9.2 C 10.225 9.2 9.867 9.558 9.867 10 C 9.867 10.442 10.225 10.8 10.667 10.8 L 10.667 9.2 Z M 0 4.667 L 0 3.867 C -0.442 3.867 -0.8 4.225 -0.8 4.667 L 0 4.667 Z M 0 10.667 L -0.8 10.667 L 0 10.667 Z M 3.467 0 C 3.467 -0.442 3.108 -0.8 2.667 -0.8 C 2.225 -0.8 1.867 -0.442 1.867 0 L 3.467 0 Z M 1.867 2 C 1.867 2.442 2.225 2.8 2.667 2.8 C 3.108 2.8 3.467 2.442 3.467 2 L 1.867 2 Z M 6.133 0 C 6.133 -0.442 5.775 -0.8 5.333 -0.8 C 4.892 -0.8 4.533 -0.442 4.533 0 L 6.133 0 Z M 4.533 2 C 4.533 2.442 4.892 2.8 5.333 2.8 C 5.775 2.8 6.133 2.442 6.133 2 L 4.533 2 Z M 8.8 0 C 8.8 -0.442 8.442 -0.8 8 -0.8 C 7.558 -0.8 7.2 -0.442 7.2 0 L 8.8 0 Z M 7.2 2 C 7.2 2.442 7.558 2.8 8 2.8 C 8.442 2.8 8.8 2.442 8.8 2 L 7.2 2 Z M 10.667 5.467 L 11.333 5.467 L 11.333 3.867 L 10.667 3.867 L 10.667 5.467 Z M 11.333 5.467 C 11.828 5.467 12.303 5.663 12.653 6.013 L 13.785 4.882 C 13.135 4.232 12.253 3.867 11.333 3.867 L 11.333 5.467 Z M 12.653 6.013 C 13.003 6.363 13.2 6.838 13.2 7.333 L 14.8 7.333 C 14.8 6.414 14.435 5.532 13.785 4.882 L 12.653 6.013 Z M 13.2 7.333 C 13.2 7.828 13.003 8.303 12.653 8.653 L 13.785 9.785 C 14.435 9.135 14.8 8.253 14.8 7.333 L 13.2 7.333 Z M 12.653 8.653 C 12.303 9.003 11.828 9.2 11.333 9.2 L 11.333 10.8 C 12.253 10.8 13.135 10.435 13.785 9.785 L 12.653 8.653 Z M 11.333 9.2 L 10.667 9.2 L 10.667 10.8 L 11.333 10.8 L 11.333 9.2 Z M 0 5.467 L 10.667 5.467 L 10.667 3.867 L 0 3.867 L 0 5.467 Z M 9.867 4.667 L 9.867 10.667 L 11.467 10.667 L 11.467 4.667 L 9.867 4.667 Z M 9.867 10.667 C 9.867 11.162 9.67 11.637 9.32 11.987 L 10.451 13.118 C 11.101 12.468 11.467 11.586 11.467 10.667 L 9.867 10.667 Z M 9.32 11.987 C 8.97 12.337 8.495 12.533 8 12.533 L 8 14.133 C 8.919 14.133 9.801 13.768 10.451 13.118 L 9.32 11.987 Z M 8 12.533 L 2.667 12.533 L 2.667 14.133 L 8 14.133 L 8 12.533 Z M 2.667 12.533 C 2.172 12.533 1.697 12.337 1.347 11.987 L 0.215 13.118 C 0.865 13.768 1.747 14.133 2.667 14.133 L 2.667 12.533 Z M 1.347 11.987 C 0.997 11.637 0.8 11.162 0.8 10.667 L -0.8 10.667 C -0.8 11.586 -0.435 12.468 0.215 13.118 L 1.347 11.987 Z M 0.8 10.667 L 0.8 4.667 L -0.8 4.667 L -0.8 10.667 L 0.8 10.667 Z M 1.867 0 L 1.867 2 L 3.467 2 L 3.467 0 L 1.867 0 Z M 4.533 0 L 4.533 2 L 6.133 2 L 6.133 0 L 4.533 0 Z M 7.2 0 L 7.2 2 L 8.8 2 L 8.8 0 L 7.2 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.333 0.667)\"/>"
    },
    "CoffeeSize20": {
      viewBox: "0 0 20 20",
      body: "<path d=\"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/><path d=\"M 14.167 5.833 L 14.167 4.833 L 14.167 5.833 Z M 14.167 12.5 L 14.167 13.5 L 14.167 12.5 Z M 13.333 11.5 C 12.781 11.5 12.333 11.948 12.333 12.5 C 12.333 13.052 12.781 13.5 13.333 13.5 L 13.333 11.5 Z M 0 5.833 L 0 4.833 C -0.552 4.833 -1 5.281 -1 5.833 L 0 5.833 Z M 0 13.333 L -1 13.333 L 0 13.333 Z M 4.333 0 C 4.333 -0.552 3.886 -1 3.333 -1 C 2.781 -1 2.333 -0.552 2.333 0 L 4.333 0 Z M 2.333 2.5 C 2.333 3.052 2.781 3.5 3.333 3.5 C 3.886 3.5 4.333 3.052 4.333 2.5 L 2.333 2.5 Z M 7.667 0 C 7.667 -0.552 7.219 -1 6.667 -1 C 6.114 -1 5.667 -0.552 5.667 0 L 7.667 0 Z M 5.667 2.5 C 5.667 3.052 6.114 3.5 6.667 3.5 C 7.219 3.5 7.667 3.052 7.667 2.5 L 5.667 2.5 Z M 11 0 C 11 -0.552 10.552 -1 10 -1 C 9.448 -1 9 -0.552 9 0 L 11 0 Z M 9 2.5 C 9 3.052 9.448 3.5 10 3.5 C 10.552 3.5 11 3.052 11 2.5 L 9 2.5 Z M 13.333 6.833 L 14.167 6.833 L 14.167 4.833 L 13.333 4.833 L 13.333 6.833 Z M 14.167 6.833 C 14.786 6.833 15.379 7.079 15.817 7.517 L 17.231 6.103 C 16.418 5.29 15.316 4.833 14.167 4.833 L 14.167 6.833 Z M 15.817 7.517 C 16.254 7.954 16.5 8.548 16.5 9.167 L 18.5 9.167 C 18.5 8.017 18.043 6.915 17.231 6.103 L 15.817 7.517 Z M 16.5 9.167 C 16.5 9.786 16.254 10.379 15.817 10.817 L 17.231 12.231 C 18.043 11.418 18.5 10.316 18.5 9.167 L 16.5 9.167 Z M 15.817 10.817 C 15.379 11.254 14.786 11.5 14.167 11.5 L 14.167 13.5 C 15.316 13.5 16.418 13.043 17.231 12.231 L 15.817 10.817 Z M 14.167 11.5 L 13.333 11.5 L 13.333 13.5 L 14.167 13.5 L 14.167 11.5 Z M 0 6.833 L 13.333 6.833 L 13.333 4.833 L 0 4.833 L 0 6.833 Z M 12.333 5.833 L 12.333 13.333 L 14.333 13.333 L 14.333 5.833 L 12.333 5.833 Z M 12.333 13.333 C 12.333 13.952 12.087 14.546 11.65 14.983 L 13.064 16.397 C 13.877 15.585 14.333 14.483 14.333 13.333 L 12.333 13.333 Z M 11.65 14.983 C 11.212 15.421 10.619 15.667 10 15.667 L 10 17.667 C 11.149 17.667 12.251 17.21 13.064 16.397 L 11.65 14.983 Z M 10 15.667 L 3.333 15.667 L 3.333 17.667 L 10 17.667 L 10 15.667 Z M 3.333 15.667 C 2.714 15.667 2.121 15.421 1.683 14.983 L 0.269 16.397 C 1.082 17.21 2.184 17.667 3.333 17.667 L 3.333 15.667 Z M 1.683 14.983 C 1.246 14.546 1 13.952 1 13.333 L -1 13.333 C -1 14.483 -0.543 15.585 0.269 16.397 L 1.683 14.983 Z M 1 13.333 L 1 5.833 L -1 5.833 L -1 13.333 L 1 13.333 Z M 2.333 0 L 2.333 2.5 L 4.333 2.5 L 4.333 0 L 2.333 0 Z M 5.667 0 L 5.667 2.5 L 7.667 2.5 L 7.667 0 L 5.667 0 Z M 9 0 L 9 2.5 L 11 2.5 L 11 0 L 9 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.667 0.833)\"/>"
    },
    "CoffeeSize24": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/><path d=\"M 17 7 L 17 5.75 L 17 7 Z M 17 15 L 17 16.25 L 17 15 Z M 16 13.75 C 15.31 13.75 14.75 14.31 14.75 15 C 14.75 15.69 15.31 16.25 16 16.25 L 16 13.75 Z M 0 7 L 0 5.75 C -0.69 5.75 -1.25 6.31 -1.25 7 L 0 7 Z M 0 16 L -1.25 16 L 0 16 Z M 5.25 0 C 5.25 -0.69 4.69 -1.25 4 -1.25 C 3.31 -1.25 2.75 -0.69 2.75 0 L 5.25 0 Z M 2.75 3 C 2.75 3.69 3.31 4.25 4 4.25 C 4.69 4.25 5.25 3.69 5.25 3 L 2.75 3 Z M 9.25 0 C 9.25 -0.69 8.69 -1.25 8 -1.25 C 7.31 -1.25 6.75 -0.69 6.75 0 L 9.25 0 Z M 6.75 3 C 6.75 3.69 7.31 4.25 8 4.25 C 8.69 4.25 9.25 3.69 9.25 3 L 6.75 3 Z M 13.25 0 C 13.25 -0.69 12.69 -1.25 12 -1.25 C 11.31 -1.25 10.75 -0.69 10.75 0 L 13.25 0 Z M 10.75 3 C 10.75 3.69 11.31 4.25 12 4.25 C 12.69 4.25 13.25 3.69 13.25 3 L 10.75 3 Z M 16 8.25 L 17 8.25 L 17 5.75 L 16 5.75 L 16 8.25 Z M 17 8.25 C 17.729 8.25 18.429 8.54 18.945 9.055 L 20.712 7.288 C 19.728 6.303 18.392 5.75 17 5.75 L 17 8.25 Z M 18.945 9.055 C 19.46 9.571 19.75 10.271 19.75 11 L 22.25 11 C 22.25 9.608 21.697 8.272 20.712 7.288 L 18.945 9.055 Z M 19.75 11 C 19.75 11.729 19.46 12.429 18.945 12.945 L 20.712 14.712 C 21.697 13.728 22.25 12.392 22.25 11 L 19.75 11 Z M 18.945 12.945 C 18.429 13.46 17.729 13.75 17 13.75 L 17 16.25 C 18.392 16.25 19.728 15.697 20.712 14.712 L 18.945 12.945 Z M 17 13.75 L 16 13.75 L 16 16.25 L 17 16.25 L 17 13.75 Z M 0 8.25 L 16 8.25 L 16 5.75 L 0 5.75 L 0 8.25 Z M 14.75 7 L 14.75 16 L 17.25 16 L 17.25 7 L 14.75 7 Z M 14.75 16 C 14.75 16.729 14.46 17.429 13.945 17.945 L 15.712 19.712 C 16.697 18.728 17.25 17.392 17.25 16 L 14.75 16 Z M 13.945 17.945 C 13.429 18.46 12.729 18.75 12 18.75 L 12 21.25 C 13.392 21.25 14.728 20.697 15.712 19.712 L 13.945 17.945 Z M 12 18.75 L 4 18.75 L 4 21.25 L 12 21.25 L 12 18.75 Z M 4 18.75 C 3.271 18.75 2.571 18.46 2.055 17.945 L 0.288 19.712 C 1.272 20.697 2.608 21.25 4 21.25 L 4 18.75 Z M 2.055 17.945 C 1.54 17.429 1.25 16.729 1.25 16 L -1.25 16 C -1.25 17.392 -0.697 18.728 0.288 19.712 L 2.055 17.945 Z M 1.25 16 L 1.25 7 L -1.25 7 L -1.25 16 L 1.25 16 Z M 2.75 0 L 2.75 3 L 5.25 3 L 5.25 0 L 2.75 0 Z M 6.75 0 L 6.75 3 L 9.25 3 L 9.25 0 L 6.75 0 Z M 10.75 0 L 10.75 3 L 13.25 3 L 13.25 0 L 10.75 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 1)\"/>"
    },
    "CoffeeSize32": {
      viewBox: "0 0 32 32",
      body: "<path d=\"M 0 0 L 32 0 L 32 32 L 0 32 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/><path d=\"M 22.667 9.333 L 22.667 7.833 L 22.667 9.333 Z M 22.667 20 L 22.667 21.5 L 22.667 20 Z M 21.333 18.5 C 20.505 18.5 19.833 19.172 19.833 20 C 19.833 20.828 20.505 21.5 21.333 21.5 L 21.333 18.5 Z M 0 9.333 L 0 7.833 C -0.828 7.833 -1.5 8.505 -1.5 9.333 L 0 9.333 Z M 0 21.333 L -1.5 21.333 L 0 21.333 Z M 6.833 0 C 6.833 -0.828 6.162 -1.5 5.333 -1.5 C 4.505 -1.5 3.833 -0.828 3.833 0 L 6.833 0 Z M 3.833 4 C 3.833 4.828 4.505 5.5 5.333 5.5 C 6.162 5.5 6.833 4.828 6.833 4 L 3.833 4 Z M 12.167 0 C 12.167 -0.828 11.495 -1.5 10.667 -1.5 C 9.838 -1.5 9.167 -0.828 9.167 0 L 12.167 0 Z M 9.167 4 C 9.167 4.828 9.838 5.5 10.667 5.5 C 11.495 5.5 12.167 4.828 12.167 4 L 9.167 4 Z M 17.5 0 C 17.5 -0.828 16.828 -1.5 16 -1.5 C 15.172 -1.5 14.5 -0.828 14.5 0 L 17.5 0 Z M 14.5 4 C 14.5 4.828 15.172 5.5 16 5.5 C 16.828 5.5 17.5 4.828 17.5 4 L 14.5 4 Z M 21.333 10.833 L 22.667 10.833 L 22.667 7.833 L 21.333 7.833 L 21.333 10.833 Z M 22.667 10.833 C 23.683 10.833 24.658 11.237 25.377 11.956 L 27.499 9.835 C 26.217 8.553 24.479 7.833 22.667 7.833 L 22.667 10.833 Z M 25.377 11.956 C 26.096 12.675 26.5 13.65 26.5 14.667 L 29.5 14.667 C 29.5 12.854 28.78 11.116 27.499 9.835 L 25.377 11.956 Z M 26.5 14.667 C 26.5 15.683 26.096 16.658 25.377 17.377 L 27.499 19.499 C 28.78 18.217 29.5 16.479 29.5 14.667 L 26.5 14.667 Z M 25.377 17.377 C 24.658 18.096 23.683 18.5 22.667 18.5 L 22.667 21.5 C 24.479 21.5 26.217 20.78 27.499 19.499 L 25.377 17.377 Z M 22.667 18.5 L 21.333 18.5 L 21.333 21.5 L 22.667 21.5 L 22.667 18.5 Z M 0 10.833 L 21.333 10.833 L 21.333 7.833 L 0 7.833 L 0 10.833 Z M 19.833 9.333 L 19.833 21.333 L 22.833 21.333 L 22.833 9.333 L 19.833 9.333 Z M 19.833 21.333 C 19.833 22.35 19.429 23.325 18.711 24.044 L 20.832 26.165 C 22.113 24.884 22.833 23.146 22.833 21.333 L 19.833 21.333 Z M 18.711 24.044 C 17.992 24.763 17.017 25.167 16 25.167 L 16 28.167 C 17.812 28.167 19.55 27.447 20.832 26.165 L 18.711 24.044 Z M 16 25.167 L 5.333 25.167 L 5.333 28.167 L 16 28.167 L 16 25.167 Z M 5.333 25.167 C 4.317 25.167 3.342 24.763 2.623 24.044 L 0.501 26.165 C 1.783 27.447 3.521 28.167 5.333 28.167 L 5.333 25.167 Z M 2.623 24.044 C 1.904 23.325 1.5 22.35 1.5 21.333 L -1.5 21.333 C -1.5 23.146 -0.78 24.884 0.501 26.165 L 2.623 24.044 Z M 1.5 21.333 L 1.5 9.333 L -1.5 9.333 L -1.5 21.333 L 1.5 21.333 Z M 3.833 0 L 3.833 4 L 6.833 4 L 6.833 0 L 3.833 0 Z M 9.167 0 L 9.167 4 L 12.167 4 L 12.167 0 L 9.167 0 Z M 14.5 0 L 14.5 4 L 17.5 4 L 17.5 0 L 14.5 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.667 1.333)\"/>"
    },
    "CoffeeSize40": {
      viewBox: "0 0 40 40",
      body: "<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/><path d=\"M 28.333 11.667 L 28.333 9.917 L 28.333 11.667 Z M 28.333 25 L 28.333 26.75 L 28.333 25 Z M 26.667 23.25 C 25.7 23.25 24.917 24.034 24.917 25 C 24.917 25.966 25.7 26.75 26.667 26.75 L 26.667 23.25 Z M 0 11.667 L 0 9.917 C -0.966 9.917 -1.75 10.7 -1.75 11.667 L 0 11.667 Z M 0 26.667 L -1.75 26.667 L 0 26.667 Z M 8.417 0 C 8.417 -0.966 7.633 -1.75 6.667 -1.75 C 5.7 -1.75 4.917 -0.966 4.917 0 L 8.417 0 Z M 4.917 5 C 4.917 5.966 5.7 6.75 6.667 6.75 C 7.633 6.75 8.417 5.966 8.417 5 L 4.917 5 Z M 15.083 0 C 15.083 -0.966 14.3 -1.75 13.333 -1.75 C 12.367 -1.75 11.583 -0.966 11.583 0 L 15.083 0 Z M 11.583 5 C 11.583 5.966 12.367 6.75 13.333 6.75 C 14.3 6.75 15.083 5.966 15.083 5 L 11.583 5 Z M 21.75 0 C 21.75 -0.966 20.966 -1.75 20 -1.75 C 19.034 -1.75 18.25 -0.966 18.25 0 L 21.75 0 Z M 18.25 5 C 18.25 5.966 19.034 6.75 20 6.75 C 20.966 6.75 21.75 5.966 21.75 5 L 18.25 5 Z M 26.667 13.417 L 28.333 13.417 L 28.333 9.917 L 26.667 9.917 L 26.667 13.417 Z M 28.333 13.417 C 29.637 13.417 30.888 13.935 31.81 14.857 L 34.285 12.382 C 32.706 10.803 30.566 9.917 28.333 9.917 L 28.333 13.417 Z M 31.81 14.857 C 32.732 15.779 33.25 17.029 33.25 18.333 L 36.75 18.333 C 36.75 16.101 35.863 13.96 34.285 12.382 L 31.81 14.857 Z M 33.25 18.333 C 33.25 19.637 32.732 20.888 31.81 21.81 L 34.285 24.285 C 35.863 22.706 36.75 20.566 36.75 18.333 L 33.25 18.333 Z M 31.81 21.81 C 30.888 22.732 29.637 23.25 28.333 23.25 L 28.333 26.75 C 30.566 26.75 32.706 25.863 34.285 24.285 L 31.81 21.81 Z M 28.333 23.25 L 26.667 23.25 L 26.667 26.75 L 28.333 26.75 L 28.333 23.25 Z M 0 13.417 L 26.667 13.417 L 26.667 9.917 L 0 9.917 L 0 13.417 Z M 24.917 11.667 L 24.917 26.667 L 28.417 26.667 L 28.417 11.667 L 24.917 11.667 Z M 24.917 26.667 C 24.917 27.971 24.399 29.221 23.477 30.143 L 25.951 32.618 C 27.53 31.04 28.417 28.899 28.417 26.667 L 24.917 26.667 Z M 23.477 30.143 C 22.555 31.065 21.304 31.583 20 31.583 L 20 35.083 C 22.232 35.083 24.373 34.197 25.951 32.618 L 23.477 30.143 Z M 20 31.583 L 6.667 31.583 L 6.667 35.083 L 20 35.083 L 20 31.583 Z M 6.667 31.583 C 5.363 31.583 4.112 31.065 3.19 30.143 L 0.715 32.618 C 2.294 34.197 4.434 35.083 6.667 35.083 L 6.667 31.583 Z M 3.19 30.143 C 2.268 29.221 1.75 27.971 1.75 26.667 L -1.75 26.667 C -1.75 28.899 -0.863 31.04 0.715 32.618 L 3.19 30.143 Z M 1.75 26.667 L 1.75 11.667 L -1.75 11.667 L -1.75 26.667 L 1.75 26.667 Z M 4.917 0 L 4.917 5 L 8.417 5 L 8.417 0 L 4.917 0 Z M 11.583 0 L 11.583 5 L 15.083 5 L 15.083 0 L 11.583 0 Z M 18.25 0 L 18.25 5 L 21.75 5 L 21.75 0 L 18.25 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.333 1.667)\"/>"
    },
    "CoffeeSize48": {
      viewBox: "0 0 48 48",
      body: "<path d=\"M 0 0 L 48 0 L 48 48 L 0 48 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/><path d=\"M 34 14 L 34 12 L 34 14 Z M 34 30 L 34 32 L 34 30 Z M 32 28 C 30.895 28 30 28.895 30 30 C 30 31.105 30.895 32 32 32 L 32 28 Z M 0 14 L 0 12 C -1.105 12 -2 12.895 -2 14 L 0 14 Z M 0 32 L -2 32 L 0 32 Z M 10 0 C 10 -1.105 9.105 -2 8 -2 C 6.895 -2 6 -1.105 6 0 L 10 0 Z M 6 6 C 6 7.105 6.895 8 8 8 C 9.105 8 10 7.105 10 6 L 6 6 Z M 18 0 C 18 -1.105 17.105 -2 16 -2 C 14.895 -2 14 -1.105 14 0 L 18 0 Z M 14 6 C 14 7.105 14.895 8 16 8 C 17.105 8 18 7.105 18 6 L 14 6 Z M 26 0 C 26 -1.105 25.105 -2 24 -2 C 22.895 -2 22 -1.105 22 0 L 26 0 Z M 22 6 C 22 7.105 22.895 8 24 8 C 25.105 8 26 7.105 26 6 L 22 6 Z M 32 16 L 34 16 L 34 12 L 32 12 L 32 16 Z M 34 16 C 35.591 16 37.117 16.632 38.243 17.757 L 41.071 14.929 C 39.196 13.054 36.652 12 34 12 L 34 16 Z M 38.243 17.757 C 39.368 18.883 40 20.409 40 22 L 44 22 C 44 19.348 42.946 16.804 41.071 14.929 L 38.243 17.757 Z M 40 22 C 40 23.591 39.368 25.117 38.243 26.243 L 41.071 29.071 C 42.946 27.196 44 24.652 44 22 L 40 22 Z M 38.243 26.243 C 37.117 27.368 35.591 28 34 28 L 34 32 C 36.652 32 39.196 30.946 41.071 29.071 L 38.243 26.243 Z M 34 28 L 32 28 L 32 32 L 34 32 L 34 28 Z M 0 16 L 32 16 L 32 12 L 0 12 L 0 16 Z M 30 14 L 30 32 L 34 32 L 34 14 L 30 14 Z M 30 32 C 30 33.591 29.368 35.117 28.243 36.243 L 31.071 39.071 C 32.946 37.196 34 34.652 34 32 L 30 32 Z M 28.243 36.243 C 27.117 37.368 25.591 38 24 38 L 24 42 C 26.652 42 29.196 40.946 31.071 39.071 L 28.243 36.243 Z M 24 38 L 8 38 L 8 42 L 24 42 L 24 38 Z M 8 38 C 6.409 38 4.883 37.368 3.757 36.243 L 0.929 39.071 C 2.804 40.946 5.348 42 8 42 L 8 38 Z M 3.757 36.243 C 2.632 35.117 2 33.591 2 32 L -2 32 C -2 34.652 -0.946 37.196 0.929 39.071 L 3.757 36.243 Z M 2 32 L 2 14 L -2 14 L -2 32 L 2 32 Z M 6 0 L 6 6 L 10 6 L 10 0 L 6 0 Z M 14 0 L 14 6 L 18 6 L 18 0 L 14 0 Z M 22 0 L 22 6 L 26 6 L 26 0 L 22 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 4 2)\"/>"
    },
    "Heart": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10.62 17.71 L 10.378 17 L 10.37 17.003 L 10.62 17.71 Z M 9.38 17.71 L 9.63 17.003 L 9.622 17 L 9.38 17.71 Z M 10 2.24 L 9.398 2.687 C 9.539 2.878 9.763 2.99 10 2.99 C 10.237 2.99 10.461 2.878 10.602 2.687 L 10 2.24 Z M 10.37 17.003 C 10.306 17.026 10.171 17.05 10 17.05 C 9.829 17.05 9.694 17.026 9.63 17.003 L 9.13 18.417 C 9.406 18.514 9.721 18.55 10 18.55 C 10.279 18.55 10.594 18.514 10.87 18.417 L 10.37 17.003 Z M 9.622 17 C 8.28 16.542 6.037 15.324 4.139 13.38 C 2.251 11.445 0.75 8.841 0.75 5.59 L -0.75 5.59 C -0.75 9.339 0.989 12.3 3.066 14.428 C 5.133 16.546 7.58 17.888 9.138 18.42 L 9.622 17 Z M 0.75 5.59 C 0.75 2.911 2.908 0.75 5.56 0.75 L 5.56 -0.75 C 2.072 -0.75 -0.75 2.089 -0.75 5.59 L 0.75 5.59 Z M 5.56 0.75 C 7.131 0.75 8.523 1.508 9.398 2.687 L 10.602 1.793 C 9.457 0.252 7.629 -0.75 5.56 -0.75 L 5.56 0.75 Z M 10.602 2.687 C 11.477 1.509 12.878 0.75 14.44 0.75 L 14.44 -0.75 C 12.382 -0.75 10.543 0.251 9.398 1.793 L 10.602 2.687 Z M 14.44 0.75 C 17.092 0.75 19.25 2.911 19.25 5.59 L 20.75 5.59 C 20.75 2.089 17.928 -0.75 14.44 -0.75 L 14.44 0.75 Z M 19.25 5.59 C 19.25 8.841 17.749 11.445 15.861 13.38 C 13.963 15.324 11.72 16.542 10.378 17 L 10.862 18.42 C 12.42 17.888 14.867 16.546 16.934 14.428 C 19.011 12.3 20.75 9.339 20.75 5.59 L 19.25 5.59 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 3.100)\"/>"
    },
    "SmileSize16": {
      viewBox: "0 0 16 16",
      body: "<path d=\"M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/><path d=\"M 4.64 7.52 C 4.375 7.167 3.873 7.095 3.52 7.36 C 3.167 7.625 3.095 8.127 3.36 8.48 L 4.64 7.52 Z M 9.973 8.48 C 10.238 8.127 10.167 7.625 9.813 7.36 C 9.46 7.095 8.958 7.167 8.693 7.52 L 9.973 8.48 Z M 4.667 3.867 C 4.225 3.867 3.867 4.225 3.867 4.667 C 3.867 5.108 4.225 5.467 4.667 5.467 L 4.667 3.867 Z M 4.673 5.467 C 5.115 5.467 5.473 5.108 5.473 4.667 C 5.473 4.225 5.115 3.867 4.673 3.867 L 4.673 5.467 Z M 8.667 3.867 C 8.225 3.867 7.867 4.225 7.867 4.667 C 7.867 5.108 8.225 5.467 8.667 5.467 L 8.667 3.867 Z M 8.673 5.467 C 9.115 5.467 9.473 5.108 9.473 4.667 C 9.473 4.225 9.115 3.867 8.673 3.867 L 8.673 5.467 Z M 12.533 6.667 C 12.533 9.907 9.907 12.533 6.667 12.533 L 6.667 14.133 C 10.79 14.133 14.133 10.79 14.133 6.667 L 12.533 6.667 Z M 6.667 12.533 C 3.427 12.533 0.8 9.907 0.8 6.667 L -0.8 6.667 C -0.8 10.79 2.543 14.133 6.667 14.133 L 6.667 12.533 Z M 0.8 6.667 C 0.8 3.427 3.427 0.8 6.667 0.8 L 6.667 -0.8 C 2.543 -0.8 -0.8 2.543 -0.8 6.667 L 0.8 6.667 Z M 6.667 0.8 C 9.907 0.8 12.533 3.427 12.533 6.667 L 14.133 6.667 C 14.133 2.543 10.79 -0.8 6.667 -0.8 L 6.667 0.8 Z M 4 8 C 3.36 8.48 3.36 8.48 3.36 8.481 C 3.36 8.481 3.361 8.481 3.361 8.481 C 3.361 8.481 3.361 8.482 3.362 8.482 C 3.362 8.483 3.363 8.484 3.364 8.485 C 3.365 8.487 3.367 8.489 3.369 8.492 C 3.373 8.497 3.378 8.504 3.384 8.512 C 3.397 8.527 3.413 8.547 3.433 8.572 C 3.474 8.62 3.532 8.685 3.605 8.762 C 3.75 8.914 3.963 9.114 4.238 9.314 C 4.784 9.711 5.613 10.133 6.667 10.133 L 6.667 8.533 C 6.054 8.533 5.549 8.289 5.179 8.02 C 4.995 7.886 4.854 7.753 4.76 7.655 C 4.713 7.606 4.679 7.567 4.659 7.543 C 4.649 7.531 4.642 7.522 4.639 7.518 C 4.637 7.516 4.637 7.515 4.637 7.516 C 4.637 7.516 4.637 7.516 4.638 7.517 C 4.638 7.517 4.638 7.518 4.639 7.518 C 4.639 7.518 4.639 7.519 4.639 7.519 C 4.639 7.519 4.64 7.519 4.64 7.52 C 4.64 7.52 4.64 7.52 4 8 Z M 6.667 10.133 C 7.72 10.133 8.549 9.711 9.096 9.314 C 9.37 9.114 9.583 8.914 9.729 8.762 C 9.802 8.685 9.859 8.62 9.9 8.572 C 9.92 8.547 9.937 8.527 9.949 8.512 C 9.955 8.504 9.96 8.497 9.964 8.492 C 9.966 8.489 9.968 8.487 9.97 8.485 C 9.97 8.484 9.971 8.483 9.972 8.482 C 9.972 8.482 9.972 8.481 9.973 8.481 C 9.973 8.481 9.973 8.481 9.973 8.481 C 9.973 8.48 9.973 8.48 9.333 8 C 8.693 7.52 8.694 7.52 8.694 7.52 C 8.694 7.519 8.694 7.519 8.694 7.519 C 8.694 7.519 8.694 7.518 8.695 7.518 C 8.695 7.518 8.695 7.517 8.696 7.517 C 8.696 7.516 8.697 7.516 8.697 7.516 C 8.697 7.515 8.696 7.516 8.694 7.518 C 8.691 7.522 8.685 7.531 8.674 7.543 C 8.654 7.567 8.62 7.606 8.573 7.655 C 8.48 7.753 8.338 7.886 8.154 8.02 C 7.784 8.289 7.28 8.533 6.667 8.533 L 6.667 10.133 Z M 4.667 5.467 L 4.673 5.467 L 4.673 3.867 L 4.667 3.867 L 4.667 5.467 Z M 8.667 5.467 L 8.673 5.467 L 8.673 3.867 L 8.667 3.867 L 8.667 5.467 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.333 1.333)\"/>"
    },
    "SmileSize20": {
      viewBox: "0 0 20 20",
      body: "<path d=\"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/><path d=\"M 5.8 9.4 C 5.469 8.958 4.842 8.869 4.4 9.2 C 3.958 9.531 3.869 10.158 4.2 10.6 L 5.8 9.4 Z M 12.467 10.6 C 12.798 10.158 12.708 9.531 12.267 9.2 C 11.825 8.869 11.198 8.958 10.867 9.4 L 12.467 10.6 Z M 5.833 4.833 C 5.281 4.833 4.833 5.281 4.833 5.833 C 4.833 6.386 5.281 6.833 5.833 6.833 L 5.833 4.833 Z M 5.842 6.833 C 6.394 6.833 6.842 6.386 6.842 5.833 C 6.842 5.281 6.394 4.833 5.842 4.833 L 5.842 6.833 Z M 10.833 4.833 C 10.281 4.833 9.833 5.281 9.833 5.833 C 9.833 6.386 10.281 6.833 10.833 6.833 L 10.833 4.833 Z M 10.842 6.833 C 11.394 6.833 11.842 6.386 11.842 5.833 C 11.842 5.281 11.394 4.833 10.842 4.833 L 10.842 6.833 Z M 15.667 8.333 C 15.667 12.383 12.383 15.667 8.333 15.667 L 8.333 17.667 C 13.488 17.667 17.667 13.488 17.667 8.333 L 15.667 8.333 Z M 8.333 15.667 C 4.283 15.667 1 12.383 1 8.333 L -1 8.333 C -1 13.488 3.179 17.667 8.333 17.667 L 8.333 15.667 Z M 1 8.333 C 1 4.283 4.283 1 8.333 1 L 8.333 -1 C 3.179 -1 -1 3.179 -1 8.333 L 1 8.333 Z M 8.333 1 C 12.383 1 15.667 4.283 15.667 8.333 L 17.667 8.333 C 17.667 3.179 13.488 -1 8.333 -1 L 8.333 1 Z M 5 10 C 4.2 10.6 4.2 10.6 4.2 10.601 C 4.201 10.601 4.201 10.601 4.201 10.601 C 4.201 10.602 4.202 10.602 4.202 10.603 C 4.203 10.604 4.204 10.605 4.205 10.606 C 4.207 10.609 4.209 10.612 4.211 10.615 C 4.216 10.622 4.223 10.63 4.231 10.639 C 4.246 10.659 4.266 10.684 4.292 10.714 C 4.343 10.775 4.414 10.857 4.506 10.952 C 4.688 11.142 4.954 11.392 5.297 11.642 C 5.981 12.139 7.016 12.667 8.333 12.667 L 8.333 10.667 C 7.567 10.667 6.936 10.361 6.474 10.025 C 6.244 9.858 6.067 9.691 5.95 9.569 C 5.892 9.508 5.849 9.459 5.824 9.429 C 5.811 9.414 5.803 9.403 5.799 9.398 C 5.797 9.395 5.796 9.394 5.796 9.395 C 5.796 9.395 5.796 9.395 5.797 9.396 C 5.797 9.397 5.798 9.397 5.798 9.398 C 5.799 9.398 5.799 9.398 5.799 9.399 C 5.799 9.399 5.799 9.399 5.8 9.399 C 5.8 9.4 5.8 9.4 5 10 Z M 8.333 12.667 C 9.651 12.667 10.686 12.139 11.369 11.642 C 11.713 11.392 11.979 11.142 12.161 10.952 C 12.252 10.857 12.324 10.775 12.375 10.714 C 12.4 10.684 12.421 10.659 12.436 10.639 C 12.444 10.63 12.45 10.622 12.455 10.615 C 12.458 10.612 12.46 10.609 12.462 10.606 C 12.463 10.605 12.464 10.604 12.465 10.603 C 12.465 10.602 12.465 10.602 12.466 10.601 C 12.466 10.601 12.466 10.601 12.466 10.601 C 12.466 10.6 12.467 10.6 11.667 10 C 10.867 9.4 10.867 9.4 10.867 9.399 C 10.867 9.399 10.867 9.399 10.868 9.399 C 10.868 9.398 10.868 9.398 10.868 9.398 C 10.869 9.397 10.869 9.397 10.87 9.396 C 10.87 9.395 10.871 9.395 10.871 9.395 C 10.871 9.394 10.87 9.395 10.868 9.398 C 10.864 9.403 10.856 9.414 10.843 9.429 C 10.817 9.459 10.775 9.508 10.717 9.569 C 10.599 9.691 10.422 9.858 10.193 10.025 C 9.731 10.361 9.099 10.667 8.333 10.667 L 8.333 12.667 Z M 5.833 6.833 L 5.842 6.833 L 5.842 4.833 L 5.833 4.833 L 5.833 6.833 Z M 10.833 6.833 L 10.842 6.833 L 10.842 4.833 L 10.833 4.833 L 10.833 6.833 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.667 1.667)\"/>"
    },
    "SmileSize24": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/><path d=\"M 7 11.25 C 6.586 10.698 5.802 10.586 5.25 11 C 4.698 11.414 4.586 12.198 5 12.75 L 7 11.25 Z M 15 12.75 C 15.414 12.198 15.302 11.414 14.75 11 C 14.198 10.586 13.414 10.698 13 11.25 L 15 12.75 Z M 7 5.75 C 6.31 5.75 5.75 6.31 5.75 7 C 5.75 7.69 6.31 8.25 7 8.25 L 7 5.75 Z M 7.01 8.25 C 7.7 8.25 8.26 7.69 8.26 7 C 8.26 6.31 7.7 5.75 7.01 5.75 L 7.01 8.25 Z M 13 5.75 C 12.31 5.75 11.75 6.31 11.75 7 C 11.75 7.69 12.31 8.25 13 8.25 L 13 5.75 Z M 13.01 8.25 C 13.7 8.25 14.26 7.69 14.26 7 C 14.26 6.31 13.7 5.75 13.01 5.75 L 13.01 8.25 Z M 18.75 10 C 18.75 14.832 14.832 18.75 10 18.75 L 10 21.25 C 16.213 21.25 21.25 16.213 21.25 10 L 18.75 10 Z M 10 18.75 C 5.168 18.75 1.25 14.832 1.25 10 L -1.25 10 C -1.25 16.213 3.787 21.25 10 21.25 L 10 18.75 Z M 1.25 10 C 1.25 5.168 5.168 1.25 10 1.25 L 10 -1.25 C 3.787 -1.25 -1.25 3.787 -1.25 10 L 1.25 10 Z M 10 1.25 C 14.832 1.25 18.75 5.168 18.75 10 L 21.25 10 C 21.25 3.787 16.213 -1.25 10 -1.25 L 10 1.25 Z M 6 12 C 5 12.75 5 12.75 5.001 12.751 C 5.001 12.751 5.001 12.751 5.001 12.752 C 5.002 12.752 5.002 12.753 5.003 12.754 C 5.004 12.755 5.005 12.756 5.006 12.758 C 5.008 12.761 5.011 12.764 5.014 12.768 C 5.02 12.777 5.028 12.787 5.037 12.798 C 5.056 12.822 5.081 12.853 5.112 12.89 C 5.174 12.963 5.26 13.062 5.371 13.177 C 5.591 13.407 5.912 13.709 6.327 14.011 C 7.153 14.611 8.406 15.25 10 15.25 L 10 12.75 C 9.094 12.75 8.347 12.389 7.798 11.989 C 7.525 11.791 7.315 11.593 7.176 11.448 C 7.107 11.376 7.057 11.318 7.027 11.282 C 7.012 11.265 7.002 11.252 6.998 11.247 C 6.995 11.244 6.994 11.242 6.995 11.243 C 6.995 11.243 6.995 11.244 6.996 11.245 C 6.997 11.246 6.997 11.246 6.998 11.247 C 6.998 11.248 6.999 11.248 6.999 11.249 C 6.999 11.249 6.999 11.249 6.999 11.249 C 7 11.25 7 11.25 6 12 Z M 10 15.25 C 11.594 15.25 12.847 14.611 13.673 14.011 C 14.088 13.709 14.409 13.407 14.629 13.177 C 14.74 13.062 14.826 12.963 14.888 12.89 C 14.919 12.853 14.944 12.822 14.963 12.798 C 14.972 12.787 14.98 12.777 14.986 12.768 C 14.989 12.764 14.992 12.761 14.994 12.758 C 14.995 12.756 14.996 12.755 14.997 12.754 C 14.998 12.753 14.998 12.752 14.999 12.752 C 14.999 12.751 14.999 12.751 14.999 12.751 C 15 12.75 15 12.75 14 12 C 13 11.25 13 11.25 13.001 11.249 C 13.001 11.249 13.001 11.249 13.001 11.249 C 13.001 11.248 13.002 11.248 13.002 11.247 C 13.003 11.246 13.003 11.246 13.004 11.245 C 13.005 11.244 13.005 11.243 13.005 11.243 C 13.006 11.242 13.005 11.244 13.002 11.247 C 12.998 11.252 12.988 11.265 12.973 11.282 C 12.943 11.318 12.893 11.376 12.824 11.448 C 12.685 11.593 12.475 11.791 12.202 11.989 C 11.653 12.389 10.906 12.75 10 12.75 L 10 15.25 Z M 7 8.25 L 7.01 8.25 L 7.01 5.75 L 7 5.75 L 7 8.25 Z M 13 8.25 L 13.01 8.25 L 13.01 5.75 L 13 5.75 L 13 8.25 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 2)\"/>"
    },
    "SmileSize32": {
      viewBox: "0 0 32 32",
      body: "<path d=\"M 0 0 L 32 0 L 32 32 L 0 32 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/><path d=\"M 9.2 15.1 C 8.703 14.437 7.763 14.303 7.1 14.8 C 6.437 15.297 6.303 16.237 6.8 16.9 L 9.2 15.1 Z M 19.867 16.9 C 20.364 16.237 20.229 15.297 19.567 14.8 C 18.904 14.303 17.964 14.437 17.467 15.1 L 19.867 16.9 Z M 9.333 7.833 C 8.505 7.833 7.833 8.505 7.833 9.333 C 7.833 10.162 8.505 10.833 9.333 10.833 L 9.333 7.833 Z M 9.347 10.833 C 10.175 10.833 10.847 10.162 10.847 9.333 C 10.847 8.505 10.175 7.833 9.347 7.833 L 9.347 10.833 Z M 17.333 7.833 C 16.505 7.833 15.833 8.505 15.833 9.333 C 15.833 10.162 16.505 10.833 17.333 10.833 L 17.333 7.833 Z M 17.347 10.833 C 18.175 10.833 18.847 10.162 18.847 9.333 C 18.847 8.505 18.175 7.833 17.347 7.833 L 17.347 10.833 Z M 25.167 13.333 C 25.167 19.869 19.869 25.167 13.333 25.167 L 13.333 28.167 C 21.526 28.167 28.167 21.526 28.167 13.333 L 25.167 13.333 Z M 13.333 25.167 C 6.798 25.167 1.5 19.869 1.5 13.333 L -1.5 13.333 C -1.5 21.526 5.141 28.167 13.333 28.167 L 13.333 25.167 Z M 1.5 13.333 C 1.5 6.798 6.798 1.5 13.333 1.5 L 13.333 -1.5 C 5.141 -1.5 -1.5 5.141 -1.5 13.333 L 1.5 13.333 Z M 13.333 1.5 C 19.869 1.5 25.167 6.798 25.167 13.333 L 28.167 13.333 C 28.167 5.141 21.526 -1.5 13.333 -1.5 L 13.333 1.5 Z M 8 16 C 6.8 16.9 6.8 16.9 6.801 16.901 C 6.801 16.901 6.801 16.902 6.802 16.902 C 6.802 16.903 6.803 16.903 6.803 16.904 C 6.804 16.906 6.806 16.908 6.807 16.909 C 6.81 16.913 6.814 16.918 6.817 16.923 C 6.825 16.933 6.835 16.946 6.847 16.961 C 6.871 16.991 6.903 17.031 6.943 17.079 C 7.024 17.175 7.137 17.304 7.282 17.455 C 7.57 17.755 7.99 18.151 8.534 18.546 C 9.617 19.334 11.253 20.167 13.333 20.167 L 13.333 17.167 C 12.08 17.167 11.05 16.666 10.299 16.12 C 9.926 15.849 9.639 15.578 9.448 15.379 C 9.353 15.28 9.283 15.2 9.241 15.15 C 9.22 15.125 9.206 15.108 9.199 15.099 C 9.196 15.094 9.194 15.092 9.194 15.092 C 9.194 15.092 9.195 15.093 9.196 15.094 C 9.196 15.095 9.197 15.096 9.198 15.097 C 9.198 15.097 9.198 15.098 9.199 15.098 C 9.199 15.099 9.199 15.099 9.199 15.099 C 9.2 15.1 9.2 15.1 8 16 Z M 13.333 20.167 C 15.413 20.167 17.05 19.334 18.132 18.546 C 18.676 18.151 19.097 17.755 19.385 17.455 C 19.53 17.304 19.643 17.175 19.723 17.079 C 19.763 17.031 19.796 16.991 19.819 16.961 C 19.831 16.946 19.841 16.933 19.849 16.923 C 19.853 16.918 19.857 16.913 19.859 16.909 C 19.861 16.908 19.862 16.906 19.863 16.904 C 19.864 16.903 19.865 16.903 19.865 16.902 C 19.865 16.902 19.866 16.901 19.866 16.901 C 19.866 16.9 19.867 16.9 18.667 16 C 17.467 15.1 17.467 15.1 17.467 15.099 C 17.467 15.099 17.468 15.099 17.468 15.098 C 17.468 15.098 17.469 15.097 17.469 15.097 C 17.47 15.096 17.47 15.095 17.471 15.094 C 17.472 15.093 17.472 15.092 17.472 15.092 C 17.473 15.092 17.471 15.094 17.467 15.099 C 17.46 15.108 17.446 15.125 17.425 15.15 C 17.383 15.2 17.314 15.28 17.219 15.379 C 17.028 15.578 16.74 15.849 16.368 16.12 C 15.617 16.666 14.587 17.167 13.333 17.167 L 13.333 20.167 Z M 9.333 10.833 L 9.347 10.833 L 9.347 7.833 L 9.333 7.833 L 9.333 10.833 Z M 17.333 10.833 L 17.347 10.833 L 17.347 7.833 L 17.333 7.833 L 17.333 10.833 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.667 2.667)\"/>"
    },
    "SmileSize40": {
      viewBox: "0 0 40 40",
      body: "<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/><path d=\"M 11.4 18.95 C 10.82 18.177 9.723 18.02 8.95 18.6 C 8.177 19.18 8.02 20.277 8.6 21.05 L 11.4 18.95 Z M 24.733 21.05 C 25.313 20.277 25.157 19.18 24.383 18.6 C 23.61 18.02 22.513 18.177 21.933 18.95 L 24.733 21.05 Z M 11.667 9.917 C 10.7 9.917 9.917 10.7 9.917 11.667 C 9.917 12.633 10.7 13.417 11.667 13.417 L 11.667 9.917 Z M 11.683 13.417 C 12.65 13.417 13.433 12.633 13.433 11.667 C 13.433 10.7 12.65 9.917 11.683 9.917 L 11.683 13.417 Z M 21.667 9.917 C 20.7 9.917 19.917 10.7 19.917 11.667 C 19.917 12.633 20.7 13.417 21.667 13.417 L 21.667 9.917 Z M 21.683 13.417 C 22.65 13.417 23.433 12.633 23.433 11.667 C 23.433 10.7 22.65 9.917 21.683 9.917 L 21.683 13.417 Z M 31.583 16.667 C 31.583 24.905 24.905 31.583 16.667 31.583 L 16.667 35.083 C 26.838 35.083 35.083 26.838 35.083 16.667 L 31.583 16.667 Z M 16.667 31.583 C 8.428 31.583 1.75 24.905 1.75 16.667 L -1.75 16.667 C -1.75 26.838 6.495 35.083 16.667 35.083 L 16.667 31.583 Z M 1.75 16.667 C 1.75 8.428 8.428 1.75 16.667 1.75 L 16.667 -1.75 C 6.495 -1.75 -1.75 6.495 -1.75 16.667 L 1.75 16.667 Z M 16.667 1.75 C 24.905 1.75 31.583 8.428 31.583 16.667 L 35.083 16.667 C 35.083 6.495 26.838 -1.75 16.667 -1.75 L 16.667 1.75 Z M 10 20 C 8.6 21.05 8.6 21.051 8.601 21.051 C 8.601 21.051 8.601 21.052 8.602 21.052 C 8.602 21.053 8.603 21.054 8.604 21.055 C 8.605 21.057 8.607 21.059 8.608 21.061 C 8.612 21.066 8.616 21.071 8.621 21.077 C 8.63 21.09 8.642 21.105 8.657 21.124 C 8.686 21.161 8.726 21.209 8.775 21.268 C 8.874 21.386 9.013 21.545 9.192 21.732 C 9.548 22.103 10.069 22.593 10.742 23.082 C 12.081 24.056 14.101 25.083 16.667 25.083 L 16.667 21.583 C 15.066 21.583 13.753 20.944 12.8 20.251 C 12.327 19.907 11.962 19.563 11.719 19.31 C 11.599 19.184 11.51 19.083 11.456 19.018 C 11.429 18.986 11.411 18.963 11.401 18.951 C 11.396 18.945 11.394 18.942 11.394 18.942 C 11.394 18.942 11.394 18.942 11.395 18.944 C 11.396 18.944 11.396 18.945 11.397 18.946 C 11.398 18.947 11.398 18.947 11.398 18.948 C 11.399 18.948 11.399 18.949 11.399 18.949 C 11.4 18.949 11.4 18.95 10 20 Z M 16.667 25.083 C 19.232 25.083 21.253 24.056 22.592 23.082 C 23.265 22.593 23.785 22.103 24.141 21.732 C 24.32 21.545 24.459 21.386 24.558 21.268 C 24.608 21.209 24.647 21.161 24.676 21.124 C 24.691 21.105 24.703 21.09 24.713 21.077 C 24.717 21.071 24.721 21.066 24.725 21.061 C 24.727 21.059 24.728 21.057 24.73 21.055 C 24.73 21.054 24.731 21.053 24.732 21.052 C 24.732 21.052 24.732 21.051 24.732 21.051 C 24.733 21.051 24.733 21.05 23.333 20 C 21.933 18.95 21.934 18.949 21.934 18.949 C 21.934 18.949 21.935 18.948 21.935 18.948 C 21.935 18.947 21.936 18.947 21.936 18.946 C 21.937 18.945 21.938 18.944 21.938 18.944 C 21.939 18.942 21.94 18.942 21.94 18.942 C 21.939 18.942 21.937 18.945 21.932 18.951 C 21.923 18.963 21.904 18.986 21.877 19.018 C 21.823 19.083 21.735 19.184 21.614 19.31 C 21.371 19.563 21.006 19.907 20.533 20.251 C 19.581 20.944 18.268 21.583 16.667 21.583 L 16.667 25.083 Z M 11.667 13.417 L 11.683 13.417 L 11.683 9.917 L 11.667 9.917 L 11.667 13.417 Z M 21.667 13.417 L 21.683 13.417 L 21.683 9.917 L 21.667 9.917 L 21.667 13.417 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.333 3.333)\"/>"
    },
    "SmileSize48": {
      viewBox: "0 0 48 48",
      body: "<path d=\"M 0 0 L 48 0 L 48 48 L 0 48 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/><path d=\"M 13.6 22.8 C 12.937 21.916 11.684 21.737 10.8 22.4 C 9.916 23.063 9.737 24.316 10.4 25.2 L 13.6 22.8 Z M 29.6 25.2 C 30.263 24.316 30.084 23.063 29.2 22.4 C 28.316 21.737 27.063 21.916 26.4 22.8 L 29.6 25.2 Z M 14 12 C 12.895 12 12 12.895 12 14 C 12 15.105 12.895 16 14 16 L 14 12 Z M 14.02 16 C 15.125 16 16.02 15.105 16.02 14 C 16.02 12.895 15.125 12 14.02 12 L 14.02 16 Z M 26 12 C 24.895 12 24 12.895 24 14 C 24 15.105 24.895 16 26 16 L 26 12 Z M 26.02 16 C 27.125 16 28.02 15.105 28.02 14 C 28.02 12.895 27.125 12 26.02 12 L 26.02 16 Z M 38 20 C 38 29.941 29.941 38 20 38 L 20 42 C 32.15 42 42 32.15 42 20 L 38 20 Z M 20 38 C 10.059 38 2 29.941 2 20 L -2 20 C -2 32.15 7.85 42 20 42 L 20 38 Z M 2 20 C 2 10.059 10.059 2 20 2 L 20 -2 C 7.85 -2 -2 7.85 -2 20 L 2 20 Z M 20 2 C 29.941 2 38 10.059 38 20 L 42 20 C 42 7.85 32.15 -2 20 -2 L 20 2 Z M 12 24 C 10.4 25.2 10.4 25.201 10.401 25.201 C 10.401 25.202 10.402 25.202 10.402 25.203 C 10.403 25.204 10.404 25.205 10.404 25.206 C 10.406 25.208 10.408 25.21 10.41 25.213 C 10.414 25.218 10.419 25.225 10.424 25.232 C 10.435 25.246 10.45 25.265 10.467 25.286 C 10.501 25.33 10.548 25.388 10.607 25.458 C 10.724 25.597 10.89 25.787 11.103 26.009 C 11.527 26.451 12.147 27.034 12.949 27.617 C 14.545 28.778 16.949 30 20 30 L 20 26 C 18.051 26 16.455 25.222 15.301 24.383 C 14.728 23.966 14.285 23.549 13.991 23.241 C 13.844 23.088 13.737 22.965 13.671 22.886 C 13.638 22.847 13.615 22.819 13.603 22.804 C 13.597 22.796 13.594 22.792 13.593 22.791 C 13.593 22.791 13.593 22.791 13.595 22.793 C 13.595 22.794 13.596 22.795 13.597 22.796 C 13.597 22.796 13.598 22.797 13.598 22.798 C 13.599 22.798 13.599 22.799 13.599 22.799 C 13.6 22.799 13.6 22.8 12 24 Z M 20 30 C 23.051 30 25.455 28.778 27.051 27.617 C 27.853 27.034 28.473 26.451 28.897 26.009 C 29.11 25.787 29.276 25.597 29.393 25.458 C 29.452 25.388 29.499 25.33 29.533 25.286 C 29.55 25.265 29.565 25.246 29.576 25.232 C 29.581 25.225 29.586 25.218 29.59 25.213 C 29.592 25.21 29.594 25.208 29.596 25.206 C 29.596 25.205 29.597 25.204 29.598 25.203 C 29.598 25.202 29.599 25.202 29.599 25.201 C 29.6 25.201 29.6 25.2 28 24 C 26.4 22.8 26.4 22.799 26.401 22.799 C 26.401 22.799 26.401 22.798 26.402 22.798 C 26.402 22.797 26.403 22.796 26.403 22.796 C 26.404 22.795 26.405 22.794 26.405 22.793 C 26.407 22.791 26.407 22.791 26.407 22.791 C 26.406 22.792 26.403 22.796 26.397 22.804 C 26.385 22.819 26.362 22.847 26.329 22.886 C 26.263 22.965 26.156 23.088 26.009 23.241 C 25.715 23.549 25.272 23.966 24.699 24.383 C 23.545 25.222 21.949 26 20 26 L 20 30 Z M 14 16 L 14.02 16 L 14.02 12 L 14 12 L 14 16 Z M 26 16 L 26.02 16 L 26.02 12 L 26 12 L 26 16 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 4 4)\"/>"
    },
    "SmileyHappyPlus": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 16.935 9.605 L 17.203 8.642 L 16.935 9.605 Z M 17.354 10.027 L 18.328 9.802 L 17.354 10.027 Z M 11.802 3.686 L 12.149 2.748 L 12.149 2.748 L 11.802 3.686 Z M 12.165 4.159 L 11.176 4.306 L 12.165 4.159 Z M 19.816 0 C 19.816 -0.552 19.368 -1 18.816 -1 C 18.264 -1 17.816 -0.552 17.816 0 L 19.816 0 Z M 17.816 6.601 C 17.816 7.153 18.264 7.601 18.816 7.601 C 19.368 7.601 19.816 7.153 19.816 6.601 L 17.816 6.601 Z M 15.576 2.315 C 15.024 2.315 14.576 2.763 14.576 3.315 C 14.576 3.867 15.024 4.315 15.576 4.315 L 15.576 2.315 Z M 22 4.315 C 22.552 4.315 23 3.867 23 3.315 C 23 2.763 22.552 2.315 22 2.315 L 22 4.315 Z M 6.699 13.329 C 6.411 12.857 5.796 12.707 5.324 12.994 C 4.853 13.282 4.703 13.897 4.99 14.369 L 6.699 13.329 Z M 13.024 14.369 C 13.311 13.897 13.161 13.282 12.69 12.994 C 12.218 12.707 11.603 12.857 11.316 13.329 L 13.024 14.369 Z M 6.229 8.942 L 6.229 7.942 C 5.677 7.942 5.229 8.39 5.229 8.942 L 6.229 8.942 Z M 6.32 8.942 L 7.32 8.942 C 7.32 8.39 6.872 7.942 6.32 7.942 L 6.32 8.942 Z M 11.703 8.942 L 11.703 7.942 C 11.151 7.942 10.703 8.39 10.703 8.942 L 11.703 8.942 Z M 11.784 8.942 L 12.784 8.942 C 12.784 8.39 12.336 7.942 11.784 7.942 L 11.784 8.942 Z M 6.32 9.017 L 6.32 10.017 C 6.872 10.017 7.32 9.569 7.32 9.017 L 6.32 9.017 Z M 6.229 9.017 L 5.229 9.017 C 5.229 9.569 5.677 10.017 6.229 10.017 L 6.229 9.017 Z M 11.784 9.017 L 11.784 10.017 C 12.336 10.017 12.784 9.569 12.784 9.017 L 11.784 9.017 Z M 11.703 9.017 L 10.703 9.017 C 10.703 9.569 11.151 10.017 11.703 10.017 L 11.703 9.017 Z M 12.149 2.748 C 11.101 2.361 9.97 2.15 8.793 2.15 L 8.793 4.15 C 9.73 4.15 10.626 4.317 11.455 4.624 L 12.149 2.748 Z M 17.203 8.642 C 15.104 8.057 13.488 6.251 13.154 4.011 L 11.176 4.306 C 11.625 7.322 13.802 9.77 16.666 10.568 L 17.203 8.642 Z M 18.586 12.075 C 18.586 11.294 18.497 10.533 18.328 9.802 L 16.38 10.253 C 16.515 10.837 16.586 11.447 16.586 12.075 L 18.586 12.075 Z M 8.793 22 C 14.216 22 18.586 17.542 18.586 12.075 L 16.586 12.075 C 16.586 16.466 13.083 20 8.793 20 L 8.793 22 Z M -1 12.075 C -1 17.542 3.371 22 8.793 22 L 8.793 20 C 4.503 20 1 16.466 1 12.075 L -1 12.075 Z M 8.793 2.15 C 3.371 2.15 -1 6.608 -1 12.075 L 1 12.075 C 1 7.684 4.503 4.15 8.793 4.15 L 8.793 2.15 Z M 16.666 10.568 C 16.562 10.539 16.424 10.443 16.38 10.253 L 18.328 9.802 C 18.187 9.193 17.715 8.785 17.203 8.642 L 16.666 10.568 Z M 11.455 4.624 C 11.259 4.551 11.189 4.395 11.176 4.306 L 13.154 4.011 C 13.078 3.497 12.742 2.967 12.149 2.748 L 11.455 4.624 Z M 17.816 0 L 17.816 6.601 L 19.816 6.601 L 19.816 0 L 17.816 0 Z M 15.576 4.315 L 22 4.315 L 22 2.315 L 15.576 2.315 L 15.576 4.315 Z M 9.007 14.666 C 8.055 14.666 7.198 14.148 6.699 13.329 L 4.99 14.369 C 5.822 15.734 7.3 16.666 9.007 16.666 L 9.007 14.666 Z M 11.316 13.329 C 10.817 14.148 9.959 14.666 9.007 14.666 L 9.007 16.666 C 10.714 16.666 12.193 15.734 13.024 14.369 L 11.316 13.329 Z M 6.229 9.942 L 6.32 9.942 L 6.32 7.942 L 6.229 7.942 L 6.229 9.942 Z M 11.703 9.942 L 11.784 9.942 L 11.784 7.942 L 11.703 7.942 L 11.703 9.942 Z M 5.32 8.942 L 5.32 9.017 L 7.32 9.017 L 7.32 8.942 L 5.32 8.942 Z M 6.32 8.017 L 6.229 8.017 L 6.229 10.017 L 6.32 10.017 L 6.32 8.017 Z M 7.229 9.017 L 7.229 8.942 L 5.229 8.942 L 5.229 9.017 L 7.229 9.017 Z M 10.784 8.942 L 10.784 9.017 L 12.784 9.017 L 12.784 8.942 L 10.784 8.942 Z M 11.784 8.017 L 11.703 8.017 L 11.703 10.017 L 11.784 10.017 L 11.784 8.017 Z M 12.703 9.017 L 12.703 8.942 L 10.703 8.942 L 10.703 9.017 L 12.703 9.017 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 2)\"/>"
    }
  };
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/icon-data.js", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Icon({
  name,
  size = 24,
  ...rest
}) {
  const d = __ds_scope.icons[name];
  if (!d) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: d.viewBox,
    fill: "none"
    // body strings are emitter-controlled <path> markup — geometry,
    // numeric fills and transforms only; no .fig-authored text reaches them.
    ,
    dangerouslySetInnerHTML: {
      __html: d.body
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/illustrations/HandMic.jsx
try { (() => {
// Lado a Lado — bordô "hand holding microphone" illustration (oradores section).
// Intrinsic art box: 506.444 x 733.582. Recolor via `color` (paints with currentColor).
function HandMic({
  width = 300,
  color = "var(--lal-bordo, #6D2E46)",
  style = {}
}) {
  const W = 506.444,
    H = 733.582;
  const scale = width / W;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: width,
      height: H * scale,
      color,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: W,
      height: H,
      transform: `scale(${scale})`,
      transformOrigin: "top left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 506.444,
      height: 733.582,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.971,0.239,-0.239,0.971,131.451,153.453)",
      transformOrigin: "0 0",
      width: 196.245,
      height: 549.117,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 196.245,
      height: 549.117,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 196.245,
      height: 549.117,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 196.245,
    height: 549.117,
    viewBox: "0 0 196.245 549.117",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 196.245,
      height: 549.117,
      color: "rgb(109,46,70)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 184.719 383.918 L 184.719 380.459 C 184.719 389.683 184.719 400.059 184.719 410.435 C 187.024 388.53 189.329 363.166 185.871 345.872 C 188.177 344.719 191.635 322.814 190.482 322.814 C 190.482 318.202 190.482 313.591 191.635 308.979 C 191.635 312.438 191.635 314.744 190.482 318.202 C 190.482 314.744 190.482 312.438 191.635 308.979 C 192.787 295.144 196.245 279.004 196.245 262.863 C 196.245 246.722 191.635 228.276 177.803 214.441 C 174.345 210.982 167.429 206.37 161.665 202.912 C 155.902 199.453 150.139 193.688 144.376 189.077 C 135.154 177.548 125.933 162.56 121.323 155.642 C 120.17 153.337 119.017 151.031 116.712 148.725 C 119.017 152.184 119.017 152.184 121.323 156.795 C 114.407 147.572 108.643 139.502 102.88 131.431 C 104.033 132.584 102.88 133.737 105.185 137.196 L 102.88 132.584 C 99.422 129.126 93.659 119.902 90.201 116.444 C 91.354 117.597 89.048 114.138 87.896 110.679 L 87.896 111.832 C 84.438 106.067 80.98 100.303 76.369 94.538 C 74.064 92.233 71.758 88.774 69.453 86.468 C 67.148 84.162 63.69 81.856 61.384 80.704 C 60.232 79.551 59.079 78.398 59.079 78.398 C 56.774 76.092 53.316 73.786 51.011 71.48 C 52.163 71.48 45.247 64.563 49.858 68.022 C 47.553 65.716 44.095 62.257 42.942 58.798 C 40.637 55.34 39.484 51.881 37.179 48.422 C 33.721 41.505 29.11 34.587 24.5 29.976 C 22.194 27.67 18.736 24.211 16.431 21.905 C 15.278 20.752 14.126 20.752 14.126 19.599 C 12.973 18.447 12.973 17.294 12.973 17.294 C 12.973 16.141 14.126 14.988 14.126 14.988 C 15.278 13.835 16.431 13.835 17.584 12.682 C 17.584 11.529 21.042 10.376 24.5 10.376 C 31.415 10.376 38.331 12.682 45.247 14.988 C 54.469 18.447 63.69 21.905 72.911 29.976 C 80.98 34.587 89.048 44.963 92.506 46.116 C 99.422 54.187 101.727 57.645 107.491 65.716 C 106.338 63.41 113.254 73.786 110.949 69.174 C 108.643 62.257 107.491 62.257 105.185 57.645 C 98.269 46.116 90.201 34.587 78.674 25.364 C 68.3 16.141 55.621 8.07 41.789 3.459 C 34.873 2.306 29.11 0 21.042 0 C 18.736 0 16.431 0 15.278 1.153 C 12.973 1.153 10.668 3.459 9.515 3.459 C 8.362 4.612 4.904 5.765 3.752 8.07 C 1.446 10.376 0.294 12.682 0.294 14.988 C -0.859 20.752 1.446 25.364 6.057 28.823 C 8.362 31.128 10.668 33.434 12.973 35.74 C 19.889 42.658 24.5 49.575 29.11 58.798 C 33.721 69.174 40.637 77.245 48.705 83.009 C 52.163 85.315 54.469 88.774 56.774 91.08 C 60.232 93.385 62.537 94.538 64.842 97.997 C 67.148 101.456 69.453 104.915 72.911 108.373 C 77.522 116.444 83.285 124.514 89.048 131.431 C 89.048 131.431 89.048 131.431 89.048 130.279 C 94.811 138.349 98.269 144.113 102.88 152.184 L 104.033 153.337 C 104.033 155.642 136.307 198.3 140.918 200.606 L 143.223 202.912 C 150.139 209.829 160.513 215.594 167.429 221.358 C 174.345 225.97 177.803 234.04 181.261 240.958 C 182.413 243.263 184.719 246.722 185.871 250.181 C 185.871 252.487 187.024 253.64 187.024 257.098 C 185.871 266.322 185.871 270.933 187.024 266.322 C 187.024 273.239 187.024 280.156 185.871 287.074 C 185.871 290.533 184.719 292.838 184.719 296.297 C 184.719 298.603 183.566 300.909 183.566 302.062 C 182.413 308.979 182.413 306.673 181.261 313.591 C 180.108 314.744 180.108 332.037 180.108 334.343 L 180.108 333.19 C 178.955 341.261 177.803 347.025 176.65 355.095 C 175.497 378.154 175.497 402.365 175.497 423.117 C 176.65 423.117 175.497 418.505 176.65 418.505 C 176.65 431.187 176.65 442.716 176.65 455.398 C 176.65 457.704 176.65 460.01 176.65 461.163 C 176.65 464.622 176.65 463.469 176.65 466.927 L 175.497 466.927 C 176.65 471.539 175.497 472.692 175.497 477.304 C 175.497 477.304 175.497 478.456 175.497 480.762 C 174.345 480.762 175.497 485.374 175.497 485.374 C 175.497 486.527 175.497 486.527 175.497 487.68 C 175.497 489.986 178.955 503.82 178.955 506.126 L 178.955 507.279 C 178.955 509.585 180.108 510.738 180.108 509.585 L 180.108 511.891 L 180.108 514.197 C 180.108 514.197 180.108 515.35 178.955 514.197 C 178.955 515.35 180.108 517.655 180.108 518.808 C 180.108 514.197 180.108 508.432 181.261 503.82 C 181.261 506.126 181.261 509.585 181.261 510.738 C 181.261 513.044 181.261 518.808 181.261 522.267 C 181.261 523.42 182.413 523.42 182.413 525.726 C 182.413 526.879 182.413 528.032 182.413 529.184 C 182.413 526.879 182.413 525.726 182.413 523.42 C 181.261 523.42 182.413 528.032 182.413 529.184 C 182.413 530.337 182.413 533.796 183.566 536.102 C 182.413 534.949 183.566 538.408 183.566 539.561 C 183.566 540.714 183.566 541.866 183.566 541.866 C 184.719 541.866 183.566 536.102 184.719 537.255 C 184.719 538.408 184.719 540.714 184.719 543.019 C 184.719 543.019 184.719 541.866 185.871 543.019 C 185.871 545.325 187.024 546.478 185.871 547.631 L 185.871 546.478 C 185.871 548.784 182.413 533.796 183.566 537.255 C 183.566 536.102 187.024 549.937 187.024 548.784 C 187.024 547.631 188.177 549.937 188.177 548.784 L 188.177 547.631 C 188.177 545.325 188.177 544.172 189.329 545.325 C 189.329 548.784 185.871 536.102 187.024 538.408 L 187.024 537.255 C 187.024 538.408 188.177 541.866 187.024 543.019 C 187.024 543.019 188.177 544.172 188.177 546.478 C 188.177 547.631 188.177 549.937 189.329 548.784 C 188.177 540.714 192.787 554.548 192.787 545.325 C 192.787 548.784 191.635 544.172 191.635 540.714 C 191.635 540.714 191.635 538.408 191.635 536.102 C 191.635 533.796 191.635 534.949 190.482 534.949 C 190.482 533.796 190.482 531.49 190.482 531.49 C 189.329 530.337 190.482 529.184 190.482 526.879 C 190.482 524.573 190.482 526.879 190.482 525.726 C 190.482 523.42 190.482 518.808 190.482 516.503 C 190.482 515.35 191.635 513.044 191.635 515.349 C 191.635 519.961 190.482 514.197 190.482 517.655 C 191.635 515.35 190.482 521.114 191.635 522.267 C 191.635 521.114 191.635 517.655 191.635 515.349 C 191.635 513.044 190.482 509.585 191.635 507.279 C 191.635 507.279 191.635 507.279 192.787 508.432 L 192.787 506.126 C 192.787 504.973 192.787 503.82 192.787 502.668 L 190.482 487.68 C 190.482 485.374 190.482 485.374 190.482 483.068 C 190.482 483.068 190.482 484.221 190.482 486.527 C 190.482 487.68 190.482 491.139 191.635 493.444 C 191.635 498.056 192.787 502.668 192.787 500.362 C 192.787 498.056 189.329 477.304 190.482 476.151 C 190.482 474.998 190.482 472.692 190.482 472.692 C 190.482 470.386 191.635 473.845 191.635 471.539 L 191.635 469.233 C 190.482 465.775 191.635 460.01 190.482 455.398 C 190.482 456.551 191.635 457.704 191.635 461.163 C 191.635 461.163 191.635 463.469 192.787 463.469 C 192.787 461.163 192.787 458.857 192.787 456.551 L 192.787 455.398 C 192.787 454.245 192.787 454.245 192.787 455.398 C 193.94 454.245 191.635 445.022 191.635 440.411 C 191.635 439.258 191.635 440.411 191.635 438.105 C 191.635 433.493 191.635 430.034 191.635 425.423 C 191.635 424.27 190.482 424.27 190.482 425.423 L 190.482 421.964 C 191.635 425.423 191.635 415.047 192.787 418.505 C 192.787 417.352 192.787 415.047 192.787 412.741 C 192.787 412.741 191.635 412.741 191.635 409.282 C 191.635 405.823 191.635 406.976 191.635 403.518 C 191.635 402.365 191.635 403.518 192.787 403.518 C 192.787 398.906 193.94 398.906 193.94 395.447 C 193.94 393.141 193.94 387.377 192.787 387.377 C 183.566 383.918 184.719 383.918 184.719 383.918 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.971,0.239,-0.239,0.971,243.959,102.826)",
      transformOrigin: "0 0",
      width: 92.212,
      height: 180.409,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 92.212,
      height: 180.409,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 92.212,
      height: 180.409,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 92.212,
    height: 180.409,
    viewBox: "0 0 92.212 180.409",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 92.212,
      height: 180.409,
      color: "rgb(109,46,70)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.29 119.902 C 17.29 122.208 17.29 125.667 17.29 129.126 C 18.442 121.055 21.9 112.985 18.442 106.067 C 20.748 106.067 23.053 97.997 23.053 97.997 C 23.053 96.844 23.053 94.538 23.053 93.385 C 23.053 81.856 26.511 71.48 31.122 59.951 C 33.427 54.187 38.038 35.74 41.496 31.128 C 41.496 29.976 42.648 29.976 42.648 28.823 C 41.496 29.976 41.496 29.976 41.496 31.128 C 42.648 27.67 43.801 24.211 44.954 21.905 C 43.801 21.905 43.801 21.905 42.648 23.058 L 43.801 21.905 C 43.801 20.752 46.106 17.294 47.259 16.141 C 47.259 17.294 48.412 16.141 49.564 14.988 C 53.022 12.682 56.48 10.376 59.938 11.529 L 61.091 11.529 C 62.243 11.529 63.396 11.529 64.549 12.682 C 64.549 12.682 66.854 14.988 64.549 13.835 C 66.854 13.835 69.159 17.294 72.617 18.447 C 77.228 21.905 79.533 24.211 80.686 27.67 C 80.686 32.281 80.686 39.199 80.686 43.81 C 80.686 47.269 82.991 50.728 81.839 56.492 C 82.991 59.951 82.991 64.563 85.297 65.716 C 85.297 69.174 86.449 71.48 86.449 74.939 C 87.602 73.786 87.602 78.398 87.602 77.245 C 88.754 74.939 87.602 74.939 88.754 72.633 C 89.907 62.257 89.907 51.881 91.06 42.658 C 91.06 39.199 91.06 35.74 92.212 32.281 C 92.212 29.976 92.212 27.67 92.212 25.364 C 92.212 21.905 91.06 19.599 88.754 17.294 C 85.297 12.682 81.839 10.376 78.381 8.07 C 74.923 5.765 71.465 3.459 68.007 2.306 C 65.701 2.306 64.549 1.153 63.396 0 C 58.785 0 54.175 0 49.564 2.306 C 44.954 4.612 42.648 6.917 40.343 10.376 C 38.038 13.835 34.58 14.988 32.274 18.447 L 32.274 19.599 C 31.122 19.599 28.816 25.364 27.664 29.976 C 26.511 35.74 25.358 40.352 25.358 41.505 L 25.358 42.658 C 23.053 49.575 19.595 56.492 18.442 63.41 C 18.442 64.563 18.442 66.869 18.442 68.022 C 17.29 69.174 18.442 69.174 18.442 70.327 C 16.137 73.786 16.137 74.939 17.29 73.786 C 16.137 77.245 16.137 79.551 16.137 81.856 C 16.137 83.009 16.137 84.162 16.137 85.315 C 16.137 86.468 16.137 86.468 14.985 87.621 C 14.985 89.927 14.985 88.774 13.832 92.233 C 12.679 92.233 13.832 99.15 12.679 100.303 C 11.527 103.762 10.374 104.915 9.221 108.373 C 6.916 116.444 6.916 126.82 8.069 134.89 C 9.221 134.89 8.069 132.584 9.221 132.584 C 9.221 137.196 9.221 141.808 9.221 146.419 C 9.221 147.572 8.069 147.572 8.069 148.725 C 8.069 149.878 8.069 149.878 8.069 149.878 L 6.916 149.878 C 6.916 151.031 5.763 152.184 5.763 153.337 L 5.763 154.49 C 4.611 154.49 5.763 155.643 4.611 155.643 C 4.611 155.643 4.611 155.643 4.611 156.795 C 4.611 156.795 5.763 162.56 5.763 163.713 C 5.763 164.866 5.763 164.866 5.763 164.866 L 5.763 166.019 L 5.763 167.172 C 5.763 167.172 5.763 167.172 4.611 167.172 C 4.611 168.324 4.611 168.324 4.611 168.324 C 5.763 167.172 6.916 164.866 8.069 163.713 C 8.069 164.866 6.916 166.019 6.916 166.019 C 5.763 167.172 5.763 168.324 4.611 169.477 C 4.611 169.477 5.763 170.63 4.611 170.63 C 3.458 170.63 4.611 171.783 3.458 171.783 C 3.458 170.63 3.458 170.63 4.611 169.477 C 3.458 169.477 3.458 170.63 3.458 171.783 C 3.458 171.783 2.305 172.936 2.305 174.089 C 2.305 174.089 1.153 174.089 1.153 175.242 L 1.153 176.395 C 1.153 176.395 2.305 174.089 2.305 175.242 L 1.153 176.395 C 1.153 176.395 1.153 177.548 0 177.548 C 0 178.701 0 172.936 0 174.089 L 0 178.701 C 0 178.701 0 179.854 1.153 178.701 L 1.153 177.548 C 1.153 176.395 2.305 176.395 2.305 177.548 C 2.305 178.701 1.153 172.936 1.153 174.089 C 1.153 174.089 1.153 175.242 0 176.395 L 0 177.548 L 0 178.701 C 1.153 176.395 2.305 182.159 3.458 179.854 C 2.305 181.006 3.458 178.701 3.458 177.548 C 3.458 177.548 4.611 177.548 4.611 176.395 C 4.611 175.242 4.611 176.395 4.611 175.242 L 5.763 174.089 C 5.763 172.936 6.916 172.936 6.916 172.936 C 6.916 171.783 8.069 170.63 8.069 169.477 C 8.069 169.477 9.221 168.324 10.374 169.477 C 9.221 170.63 9.221 168.324 9.221 170.63 C 10.374 170.63 9.221 171.783 9.221 172.936 C 9.221 172.936 10.374 171.783 10.374 170.63 C 10.374 169.477 10.374 168.324 11.527 167.172 L 11.527 166.019 L 11.527 164.866 L 11.527 159.101 C 11.527 157.948 12.679 157.948 11.527 157.948 L 11.527 164.866 C 12.679 163.713 11.527 155.643 12.679 155.643 L 12.679 154.49 C 12.679 153.337 13.832 154.49 13.832 154.49 L 13.832 153.337 C 13.832 152.184 13.832 149.878 13.832 147.572 C 13.832 147.572 14.985 148.725 14.985 149.878 L 14.985 151.031 C 14.985 149.878 14.985 148.725 14.985 147.572 C 16.137 146.419 13.832 144.113 14.985 141.808 C 14.985 141.808 14.985 141.808 14.985 140.655 C 14.985 138.349 14.985 137.196 14.985 136.043 C 14.985 136.043 13.832 134.89 13.832 136.043 L 13.832 134.89 C 14.985 136.043 14.985 132.584 16.137 133.737 C 16.137 133.737 16.137 132.584 16.137 131.431 C 16.137 131.431 14.985 131.431 14.985 130.279 C 14.985 129.126 14.985 129.126 14.985 127.973 C 14.985 127.973 14.985 127.973 16.137 127.973 C 16.137 126.82 17.29 126.82 17.29 124.514 C 16.137 122.208 16.137 121.055 17.29 119.902 C 16.137 118.749 16.137 118.749 17.29 119.902 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.971,0.239,-0.239,0.971,319.533,161.831)",
      transformOrigin: "0 0",
      width: 178.762,
      height: 428.514,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 178.762,
      height: 428.514,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 178.762,
      height: 428.514,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 178.762,
    height: 428.514,
    viewBox: "0 0 178.762 428.514",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 178.762,
      height: 428.514,
      color: "rgb(109,46,70)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 84.244 51.881 L 85.396 53.034 C 84.244 51.881 83.091 50.728 81.938 49.575 C 80.786 48.422 79.633 47.269 78.48 46.116 C 76.175 43.81 73.87 42.658 71.565 42.658 C 73.87 42.658 76.175 44.963 78.48 47.269 C 79.633 48.422 81.938 50.728 81.938 51.881 C 83.091 53.034 83.091 54.187 86.549 57.645 C 90.007 59.951 93.465 62.257 96.923 62.257 C 101.534 62.257 102.686 61.104 104.992 61.104 C 108.45 59.951 110.755 59.951 114.213 58.798 C 114.213 59.951 117.671 61.104 121.129 63.41 C 124.587 64.563 126.892 66.869 126.892 66.869 C 128.045 66.869 131.503 70.327 133.808 71.48 C 137.266 73.786 140.724 77.245 144.182 80.704 C 148.792 84.162 147.64 93.386 147.64 103.762 C 147.64 108.373 148.792 114.138 151.098 119.902 C 152.25 122.208 153.403 125.667 154.556 127.973 C 155.708 130.279 156.861 131.431 156.861 133.737 C 159.166 139.502 162.624 151.031 163.777 162.56 C 163.777 168.324 163.777 174.089 163.777 179.854 C 163.777 184.465 162.624 189.077 161.472 191.383 C 160.319 192.536 160.319 194.841 159.166 195.994 C 160.319 193.688 160.319 193.688 161.472 190.23 C 160.319 197.147 156.861 205.218 154.556 213.288 C 155.708 212.135 155.708 212.135 156.861 208.676 L 155.708 212.135 C 155.708 215.594 153.403 223.664 152.25 227.123 C 152.25 225.97 151.098 229.429 149.945 231.734 L 151.098 230.581 C 148.792 239.805 146.487 251.334 144.182 260.557 C 144.182 261.71 144.182 262.863 143.029 262.863 C 143.029 266.322 143.029 268.627 143.029 272.086 C 144.182 273.239 144.182 281.309 143.029 277.851 C 144.182 284.768 144.182 291.686 145.335 297.45 C 147.64 308.979 149.945 319.355 152.25 329.732 C 153.403 341.261 154.556 351.637 154.556 363.166 C 154.556 371.236 156.861 378.154 156.861 387.377 C 158.014 394.294 160.319 403.518 162.624 405.823 C 163.777 413.894 164.93 416.2 167.235 424.27 C 167.235 421.964 169.54 431.187 169.54 427.729 C 169.54 423.117 168.388 421.964 168.388 418.505 C 166.082 398.906 163.777 378.154 164.93 358.554 C 164.93 344.719 163.777 328.579 161.472 313.591 C 160.319 305.52 158.014 298.603 156.861 291.686 C 155.708 284.768 154.556 277.851 155.708 270.933 C 155.708 267.475 156.861 266.322 158.014 262.863 C 159.166 251.334 163.777 236.346 167.235 223.664 C 167.235 223.664 167.235 223.664 167.235 224.817 C 169.54 217.9 171.846 213.288 174.151 206.37 L 174.151 205.218 C 174.151 205.218 175.304 202.912 176.456 198.3 C 177.609 193.688 178.762 187.924 178.762 182.159 C 178.762 170.63 177.609 160.254 177.609 157.948 C 177.609 156.795 177.609 156.795 177.609 155.643 C 176.456 147.572 175.304 139.502 172.998 132.584 C 171.846 129.126 170.693 125.667 168.388 122.208 C 166.082 118.749 166.082 117.597 164.93 114.138 C 163.777 111.832 162.624 109.526 161.472 107.22 C 161.472 104.915 160.319 104.915 160.319 102.609 C 161.472 95.691 161.472 91.08 160.319 95.691 C 160.319 89.927 160.319 83.009 155.708 77.245 L 153.403 74.939 C 152.25 73.786 151.098 72.633 149.945 71.48 C 148.792 70.327 147.64 69.174 147.64 68.022 C 144.182 64.563 145.335 65.716 141.877 61.104 C 141.877 61.104 140.724 59.951 139.571 58.798 C 139.571 58.798 137.266 57.645 137.266 56.492 C 136.113 56.492 136.113 55.34 134.961 55.34 C 131.503 53.034 128.045 53.034 126.892 51.881 L 128.045 51.881 C 121.129 49.575 117.671 47.269 109.602 47.269 C 107.297 47.269 103.839 47.269 102.686 48.422 C 100.381 48.422 100.381 48.422 99.228 48.422 C 98.076 47.269 99.228 48.422 96.923 46.116 C 95.77 43.81 93.465 41.505 91.16 40.352 C 87.702 36.893 83.091 33.434 77.328 32.281 C 73.87 31.129 70.412 31.129 66.954 32.281 C 63.496 33.434 61.191 35.74 60.038 36.893 C 60.038 38.046 62.343 34.587 63.496 34.587 C 61.191 35.74 60.038 36.893 58.885 38.046 L 57.733 38.046 C 56.58 38.046 55.427 38.046 55.427 38.046 L 55.427 36.893 L 56.58 35.74 C 56.58 35.74 56.58 35.74 56.58 34.587 L 56.58 33.434 C 56.58 33.434 56.58 32.281 56.58 31.129 L 57.733 31.129 C 57.733 26.517 58.885 24.211 56.58 19.599 C 56.58 19.599 55.427 17.294 54.275 16.141 C 55.427 14.988 50.817 11.529 50.817 11.529 C 50.817 11.529 49.664 10.376 48.511 10.376 C 47.359 10.376 45.054 8.07 41.596 6.917 C 38.138 5.765 34.68 3.459 33.527 3.459 L 32.374 3.459 C 30.069 2.306 28.916 2.306 30.069 3.459 C 28.916 3.459 28.916 2.306 27.764 2.306 L 27.764 1.153 C 27.764 1.153 26.611 0 27.764 0 C 26.611 0 24.306 0 23.153 0 C 27.764 1.153 32.374 3.459 35.832 5.765 C 34.68 5.765 31.222 3.459 30.069 3.459 C 27.764 2.306 23.153 1.153 19.695 1.153 C 17.39 0 17.39 1.153 15.084 1.153 C 13.932 1.153 12.779 2.306 10.474 2.306 C 12.779 1.153 15.084 0 17.39 0 C 17.39 0 16.237 0 15.084 0 C 13.932 0 11.626 1.153 11.626 1.153 C 10.474 1.153 8.169 3.459 7.016 3.459 C 7.016 2.306 5.863 3.459 4.711 4.612 C 3.558 4.612 3.558 5.765 3.558 5.765 C 3.558 6.917 8.169 3.459 7.016 5.765 C 7.016 5.765 4.711 6.917 3.558 8.07 C 2.405 9.223 1.253 9.223 0.1 9.223 C 0.1 9.223 1.253 9.223 1.253 8.07 C 0.1 9.223 8.169 1.153 7.016 2.306 C 8.169 2.306 -1.053 9.223 0.1 8.07 C 1.253 8.07 0.1 9.223 1.253 8.07 L 2.405 6.917 C 3.558 5.765 4.711 6.917 4.711 6.917 C 2.405 8.07 9.321 1.153 8.169 2.306 L 9.321 2.306 C 8.169 3.459 7.016 4.612 5.863 4.612 L 4.711 5.765 C 3.558 6.917 2.405 6.917 3.558 6.917 C 9.321 3.459 1.253 11.529 7.016 9.223 C 4.711 9.223 7.016 8.07 9.321 6.917 C 9.321 6.917 10.474 6.917 12.779 5.765 C 13.932 4.612 13.932 4.612 13.932 4.612 C 15.084 4.612 16.237 3.459 16.237 3.459 C 17.39 2.306 18.542 2.306 19.695 2.306 C 20.848 2.306 19.695 2.306 20.848 1.153 C 23.153 1.153 26.611 1.153 27.764 1.153 C 28.916 1.153 30.069 2.306 28.916 3.459 C 25.458 3.459 30.069 2.306 26.611 2.306 C 27.764 3.459 23.153 2.306 23.153 3.459 C 24.306 3.459 26.611 3.459 27.764 4.612 C 28.916 4.612 32.374 5.765 33.527 6.917 C 33.527 6.917 33.527 8.07 32.374 6.917 L 34.68 8.07 C 35.832 8.07 36.985 9.223 36.985 9.223 C 36.985 9.223 47.359 13.835 46.206 14.988 C 47.359 16.141 47.359 16.141 48.511 17.294 C 49.664 17.294 35.832 9.223 38.138 10.376 C 38.138 10.376 42.748 12.682 46.206 14.988 C 49.664 17.294 51.969 20.752 51.969 21.905 C 51.969 23.058 53.122 24.211 53.122 24.211 C 53.122 26.517 51.969 24.211 51.969 25.364 L 51.969 26.517 C 51.969 27.67 51.969 29.976 51.969 31.129 C 51.969 33.434 50.817 35.74 50.817 36.893 C 50.817 35.74 49.664 34.587 50.817 32.281 L 50.817 29.976 C 50.817 32.281 49.664 34.587 49.664 36.893 L 49.664 38.046 C 49.664 39.199 49.664 39.199 49.664 38.046 C 48.511 39.199 48.511 42.658 50.817 46.116 C 51.969 47.269 54.275 47.269 55.427 47.269 C 56.58 47.269 55.427 47.269 57.733 47.269 C 62.343 47.269 64.649 47.269 69.259 43.81 C 70.412 42.658 70.412 42.658 68.107 42.658 C 69.259 41.505 70.412 41.505 70.412 40.352 C 69.259 41.505 71.565 41.505 71.565 40.352 C 72.717 40.352 73.87 39.199 72.717 40.352 C 73.87 40.352 73.87 40.352 75.023 39.199 C 75.023 39.199 75.023 38.046 76.175 38.046 C 78.481 39.199 77.328 38.046 78.48 39.199 C 78.48 39.199 78.48 39.199 78.48 40.352 C 80.786 41.505 79.633 41.505 81.938 43.81 C 83.091 44.963 86.549 47.269 86.549 47.269 C 85.396 51.881 85.396 51.881 84.244 51.881 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.971,0.239,-0.239,0.971,218.250,105.985)",
      transformOrigin: "0 0",
      width: 40.666,
      height: 41.505,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40.666,
      height: 41.505,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40.666,
      height: 41.505,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 40.666,
    height: 41.505,
    viewBox: "0 0 40.666 41.505",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40.666,
      height: 41.505,
      color: "rgb(109,46,70)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 34.859 19.387 C 34.859 19.387 36.011 20.54 36.011 21.693 C 36.011 19.387 38.442 16.374 33.831 18.679 C 34.984 16.374 34.984 15.221 33.831 15.221 L 32.679 15.221 C 29.221 15.221 34.58 16.141 33.427 13.835 C 32.274 12.682 29.969 9.223 28.816 8.07 C 28.816 8.07 28.816 8.07 28.816 6.917 C 28.816 6.917 28.816 6.917 28.816 8.07 C 27.664 8.07 26.511 8.07 25.358 8.07 L 25.358 9.223 C 24.206 9.223 24.206 9.223 23.053 9.223 L 23.053 8.07 C 21.9 6.917 20.748 6.917 20.748 5.765 L 19.595 5.765 L 19.595 4.612 C 18.442 4.612 18.442 3.459 17.29 4.612 C 14.985 3.459 12.679 2.306 10.374 1.153 C 9.221 1.153 8.069 1.153 6.916 0 C 5.763 0 4.611 0 3.458 1.153 C 2.305 1.153 2.305 1.153 1.153 1.153 C 1.153 2.306 0 1.153 0 2.306 C 0 3.459 0 2.306 0 3.459 C 1.153 5.765 2.305 8.07 3.458 9.223 C 4.611 9.223 5.763 11.529 6.916 11.529 C 8.069 12.682 10.374 12.682 11.527 13.835 L 11.527 14.988 C 12.679 16.141 13.832 17.294 14.985 17.294 C 16.137 17.294 16.137 18.447 16.137 19.599 C 16.137 20.752 20.748 20.752 20.748 21.905 C 21.9 23.058 21.9 25.364 23.053 26.517 L 24.206 26.517 C 24.206 26.517 24.206 26.517 25.358 26.517 C 24.206 28.823 25.358 27.67 25.358 27.67 C 26.511 27.67 26.511 28.823 26.511 28.823 L 27.664 28.823 C 27.664 28.823 27.664 28.823 27.664 29.976 C 28.816 29.976 27.664 29.976 27.664 31.128 C 27.664 32.281 29.969 31.128 29.969 31.128 L 29.969 33.434 C 31.122 34.587 33.427 35.74 34.58 36.893 C 34.58 36.893 34.58 36.893 34.58 35.74 C 35.732 36.893 35.732 38.046 35.732 38.046 L 35.732 39.199 C 36.885 39.199 35.732 40.352 35.732 40.352 C 35.732 40.352 35.732 40.352 35.732 41.505 L 38.038 40.352 C 38.038 40.352 38.038 39.199 38.038 38.046 L 38.038 39.199 C 38.038 39.199 38.038 39.199 38.038 40.352 C 38.038 40.352 38.038 40.352 38.038 41.505 L 38.038 40.352 C 38.038 40.352 38.038 40.352 38.038 39.199 L 38.038 38.046 L 35.732 39.199 C 35.732 39.199 35.732 39.199 36.885 39.199 C 36.885 39.199 39.19 36.893 39.19 35.74 C 39.19 36.893 38.038 35.74 38.038 35.74 L 38.038 34.587 C 38.038 34.587 38.038 34.587 38.038 33.434 C 38.038 33.434 38.038 33.434 38.038 32.281 C 38.038 32.281 38.038 31.128 39.19 31.128 C 39.19 31.128 38.038 32.281 39.19 32.281 C 39.19 31.128 39.19 32.281 40.343 32.281 C 40.343 32.281 39.19 32.281 40.343 31.128 C 40.343 31.128 38.038 31.128 39.19 31.128 C 39.19 31.128 41.496 31.128 40.343 31.128 L 38.038 31.128 C 38.038 31.128 38.038 31.128 38.038 29.976 C 36.885 29.976 38.038 28.823 36.885 29.976 L 38.038 28.823 C 38.038 28.823 38.038 28.823 36.885 28.823 C 36.885 27.67 35.732 28.823 35.732 27.67 L 35.732 26.517 C 35.732 26.517 35.732 26.517 34.58 27.67 C 35.732 26.517 34.58 26.517 35.732 25.364 C 35.732 25.364 35.732 25.364 34.58 25.364 C 34.58 25.364 34.58 25.364 34.58 24.211 C 34.58 24.211 34.58 24.211 34.58 23.058 C 43.801 25.364 36.011 20.54 34.859 19.387 C 34.859 20.54 34.859 20.54 34.859 19.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.971,0.239,-0.239,0.971,92.239,0)",
      transformOrigin: "0 0",
      width: 151.176,
      height: 147.676,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 151.176,
      height: 147.676,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 151.176,
      height: 147.676,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 151.176,
    height: 147.676,
    viewBox: "0 0 151.176 147.676",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 151.176,
      height: 147.676,
      color: "rgb(109,46,70)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 80.864 3.563 L 78.559 3.563 C 84.322 4.716 91.238 7.021 97.001 9.327 C 91.238 5.868 83.17 2.41 76.254 1.257 C 69.338 -1.049 61.269 0.104 55.506 2.41 C 55.506 1.257 50.895 1.257 47.437 1.257 C 43.979 1.257 39.369 2.41 39.369 3.563 C 37.063 4.716 34.758 7.021 31.3 8.174 C 14.01 19.703 5.942 40.456 1.331 60.055 C 0.178 65.82 -0.974 76.196 1.331 87.725 C 2.484 99.254 8.247 109.63 11.705 115.395 C 12.858 116.548 14.01 118.853 15.163 120.006 C 12.858 117.701 12.858 117.701 11.705 114.242 C 16.315 120.006 22.079 124.618 27.842 128.077 C 26.689 126.924 26.689 126.924 24.384 124.618 L 26.689 126.924 C 30.147 128.077 34.758 131.535 38.216 132.688 C 37.063 132.688 39.369 133.841 41.674 134.994 L 41.674 133.841 C 48.59 137.3 56.658 141.912 63.574 144.217 C 64.727 144.217 64.727 145.37 65.88 145.37 C 68.185 146.523 70.49 146.523 73.948 146.523 C 72.796 147.676 82.017 146.523 77.406 147.676 C 79.712 147.676 83.17 146.523 85.475 144.217 C 90.085 141.912 91.238 134.994 91.238 131.535 C 91.238 122.312 92.391 115.395 94.696 107.324 C 95.849 100.407 100.459 92.337 105.07 86.572 C 108.528 81.96 113.139 77.349 120.054 76.196 C 124.665 73.89 132.734 72.737 135.039 71.584 C 138.497 71.584 140.802 71.584 141.955 71.584 C 144.26 71.584 146.566 71.584 147.718 70.431 L 147.718 69.278 L 147.718 68.125 C 147.718 66.973 147.718 68.126 145.413 66.973 C 138.497 66.973 129.276 64.667 120.054 66.973 C 109.681 70.431 101.612 76.196 94.696 83.113 C 87.78 92.337 82.017 103.866 79.712 116.548 C 78.559 121.159 78.559 125.771 78.559 130.383 C 78.559 134.994 78.559 134.994 77.406 136.147 C 76.254 137.3 73.948 137.3 71.643 137.3 C 69.338 137.3 68.185 136.147 67.032 134.994 C 58.964 131.535 47.437 125.771 39.369 121.159 C 34.758 118.853 32.453 115.395 28.995 111.936 L 27.842 111.936 C 27.842 110.783 22.079 106.171 18.621 99.254 C 14.01 92.337 12.858 84.266 12.858 83.113 C 12.858 81.96 12.858 81.96 12.858 81.96 C 11.705 70.431 16.315 60.055 18.621 49.679 C 18.621 47.373 18.621 46.22 18.621 43.914 C 19.773 42.762 18.621 41.609 19.773 40.456 C 24.384 36.997 24.384 33.538 23.231 35.844 C 25.537 32.385 27.842 28.927 30.147 26.621 C 30.147 24.315 31.3 23.162 32.453 22.009 C 33.605 20.856 34.758 20.856 35.911 20.856 C 38.216 18.55 38.216 19.703 41.674 17.398 C 42.827 17.398 49.743 12.786 50.895 12.786 L 49.743 12.786 C 54.353 11.633 56.658 12.786 61.269 12.786 C 72.796 12.786 86.627 17.398 97.001 22.009 C 98.154 23.162 95.849 23.162 95.849 22.009 C 101.612 24.315 107.375 28.927 111.986 33.538 C 111.986 34.691 113.139 35.844 113.139 36.997 C 115.444 38.15 115.444 36.997 116.597 38.15 L 116.597 39.303 C 118.902 40.456 118.902 42.762 120.054 43.914 C 120.054 43.914 121.207 43.914 121.207 45.067 C 121.207 45.067 123.512 47.373 122.36 47.373 L 123.512 48.526 C 124.665 49.679 131.581 54.291 132.734 54.291 C 133.886 55.444 133.886 55.444 133.886 54.291 L 135.039 55.444 L 136.192 57.749 L 136.192 58.902 C 137.344 58.902 137.344 60.055 138.497 61.208 C 137.344 58.902 135.039 56.596 133.886 54.291 C 135.039 55.444 136.192 56.596 137.344 57.749 C 138.497 58.902 139.65 61.208 140.802 63.514 C 140.802 63.514 141.955 63.514 141.955 64.667 C 141.955 65.82 143.108 65.82 143.108 66.973 C 141.955 65.82 141.955 65.82 140.802 64.667 L 141.955 66.973 C 141.955 66.973 143.108 69.278 144.26 69.278 C 143.108 69.278 144.26 70.431 144.26 70.431 C 145.413 70.431 144.26 69.278 145.413 69.278 L 145.413 70.431 C 145.413 70.431 145.413 70.431 146.566 70.431 C 147.718 70.431 145.413 70.431 144.26 70.431 C 143.108 70.431 141.955 69.278 143.108 69.278 L 144.26 70.431 C 144.26 70.431 146.566 70.431 145.413 70.431 C 144.26 70.431 143.108 69.278 144.26 69.278 L 145.413 70.431 C 145.413 70.431 145.413 70.431 146.566 70.431 C 147.718 70.431 146.566 70.431 147.718 70.431 L 148.871 70.431 C 150.024 70.431 150.024 71.584 151.176 70.431 C 150.024 71.584 151.176 70.431 150.024 68.125 C 150.024 68.125 150.024 66.973 150.024 65.82 C 148.871 64.667 148.871 65.82 148.871 64.667 C 148.871 63.514 147.718 62.361 148.871 62.361 C 147.718 62.361 147.718 61.208 147.718 60.055 C 146.566 58.902 147.718 60.055 146.566 60.055 C 145.413 58.902 144.26 57.749 143.108 56.596 C 143.108 55.444 141.955 54.291 144.26 54.291 C 145.413 56.596 143.108 54.291 144.26 56.596 C 144.26 55.444 145.413 57.749 146.566 57.749 C 146.566 56.596 145.413 55.444 144.26 54.291 C 143.108 53.138 141.955 51.985 140.802 50.832 C 140.802 50.832 140.802 50.832 141.955 50.832 L 140.802 49.679 C 139.65 49.679 139.65 48.526 139.65 48.526 L 132.734 42.762 C 131.581 41.609 131.581 41.609 130.428 40.456 C 130.428 40.456 139.65 47.373 138.497 47.373 C 138.497 46.22 128.123 38.15 126.97 38.15 C 125.818 36.997 125.818 36.997 125.818 36.997 C 124.665 35.844 126.97 36.997 125.818 35.844 L 125.818 34.691 C 123.512 33.538 121.207 30.08 118.902 28.927 C 120.054 28.927 121.207 28.927 122.36 30.08 L 123.512 31.232 C 122.36 30.08 121.207 28.927 120.054 27.774 L 120.054 26.621 C 120.054 25.468 115.444 23.162 113.139 20.856 C 111.986 20.856 113.139 20.856 111.986 20.856 C 107.375 18.55 106.223 17.398 103.917 15.092 C 102.765 15.092 102.765 15.092 103.917 16.245 L 101.612 15.092 C 103.917 15.092 98.154 12.786 100.459 12.786 C 100.459 12.786 98.154 11.633 97.001 11.633 C 97.001 11.633 97.001 11.633 94.696 11.633 C 93.543 9.327 93.543 10.48 92.391 9.327 C 92.391 9.327 92.391 9.327 92.391 8.174 C 88.933 8.174 90.085 7.021 87.78 5.868 C 86.627 5.868 83.17 4.716 82.017 4.716 C 79.712 4.716 79.712 4.716 80.864 3.563 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.971,0.239,-0.239,0.971,428.105,386.373)",
      transformOrigin: "0 0",
      width: 80.686,
      height: 90.439,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 80.686,
      height: 90.439,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 80.686,
      height: 90.439,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 80.686,
    height: 90.439,
    viewBox: "0 0 80.686 90.439",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 80.686,
      height: 90.439,
      color: "rgb(109,46,70)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 43.801 33.947 C 42.648 32.794 41.496 31.641 39.19 29.335 C 41.496 33.947 43.801 39.711 49.564 39.711 C 48.412 42.017 50.717 45.476 50.717 45.476 C 51.87 45.476 53.022 46.629 54.175 46.629 C 54.175 46.629 53.022 45.476 51.869 45.476 C 53.022 45.476 53.022 46.629 54.175 46.629 C 59.938 48.935 66.854 57.005 64.549 57.005 C 63.396 57.005 63.396 58.158 62.243 58.158 C 59.938 60.464 56.48 62.769 55.327 63.922 L 54.175 65.075 C 55.327 65.075 55.327 65.075 56.48 63.922 C 55.327 66.228 54.175 68.534 53.022 69.687 C 53.022 69.687 54.175 69.687 55.327 69.687 L 54.175 70.84 C 54.175 73.146 53.022 73.146 53.022 74.298 C 53.022 73.146 53.022 74.298 51.869 74.298 C 51.869 74.298 50.717 74.298 50.717 75.451 C 49.564 75.451 49.564 74.298 48.412 74.298 L 46.106 73.146 C 46.106 73.146 44.954 71.993 46.106 71.993 C 43.801 71.993 42.648 69.687 40.343 69.687 C 34.58 66.228 28.816 62.769 21.9 60.464 C 19.595 59.311 17.29 59.311 14.985 57.005 C 12.679 57.005 10.374 55.852 8.069 55.852 C 5.763 54.699 4.611 54.699 2.305 53.546 C 2.305 54.699 0 53.546 0 54.699 C 1.153 55.852 1.153 55.852 2.305 57.005 C 6.916 61.617 11.527 65.075 16.137 68.534 C 19.595 70.84 23.053 73.146 26.511 75.451 C 29.969 77.757 34.58 80.063 38.038 82.369 C 39.19 82.369 39.19 83.522 40.343 84.675 C 42.648 85.828 46.106 88.133 48.412 90.439 C 50.717 88.133 53.022 84.675 55.327 82.369 C 56.48 81.216 57.633 80.063 58.785 80.063 C 59.938 80.063 59.938 78.91 61.091 77.757 C 61.091 77.757 63.396 75.451 65.701 73.146 C 66.854 71.993 68.007 70.84 68.007 69.687 C 69.159 68.534 70.312 67.381 70.312 67.381 C 70.312 67.381 70.312 66.228 71.465 66.228 C 73.77 63.922 77.228 61.617 80.686 59.311 C 78.381 57.005 76.075 53.546 73.77 51.24 C 72.617 50.087 70.312 50.087 69.159 48.935 C 69.159 47.782 68.007 48.935 68.007 47.782 C 68.007 45.476 66.854 44.323 66.854 45.476 C 65.701 44.323 64.549 43.17 63.396 42.017 C 63.396 42.017 62.243 40.864 61.091 40.864 C 61.091 40.864 59.938 39.711 61.091 39.711 C 59.938 38.558 59.938 38.558 59.938 37.405 C 59.938 36.253 56.48 35.1 56.48 35.1 C 55.327 33.947 55.327 31.641 54.175 30.488 C 50.717 27.029 46.106 22.418 43.801 18.959 C 43.801 18.959 44.954 20.112 43.801 20.112 C 41.496 17.806 40.343 15.5 39.19 13.194 L 39.19 12.041 C 39.19 10.889 38.038 12.041 38.038 10.889 C 36.885 10.889 38.038 9.736 36.885 8.583 C 36.885 8.583 36.885 8.583 35.732 8.583 C 35.732 8.583 34.58 7.43 35.732 7.43 L 31.122 6.277 L 29.969 6.277 C 29.969 6.277 28.816 6.277 28.816 5.124 C 28.816 6.277 29.969 7.43 29.969 8.583 L 28.816 7.43 C 28.816 6.277 27.664 5.124 27.664 5.124 L 26.511 5.124 C 26.511 5.124 26.511 5.124 26.511 3.971 C 26.511 3.971 27.664 3.971 27.664 5.124 L 27.664 3.971 L 26.511 2.818 C 27.664 2.818 26.511 2.818 26.511 1.665 C 26.511 1.665 27.664 2.818 26.511 2.818 C 26.511 2.818 26.511 1.665 25.358 1.665 C 25.358 1.665 24.206 1.665 24.206 0.512 L 27.664 0.512 C 27.664 0.512 24.206 -0.641 24.206 0.512 C 24.206 0.512 23.053 0.512 24.206 1.665 L 24.206 2.818 C 24.206 1.665 27.664 2.818 26.511 2.818 C 26.511 2.818 25.358 2.818 25.358 1.665 L 24.206 1.665 L 23.053 1.665 C 24.206 2.818 19.595 2.818 20.748 5.124 C 20.748 3.971 21.9 5.124 21.9 5.124 L 21.9 6.277 C 21.9 6.277 21.9 6.277 23.053 6.277 L 23.053 7.43 C 24.206 7.43 23.053 8.583 24.206 8.583 L 25.358 9.736 C 25.358 9.736 25.358 10.889 24.206 10.889 C 23.053 9.736 25.358 10.889 24.206 9.736 C 24.206 10.889 23.053 9.736 23.053 9.736 C 23.053 9.736 23.053 10.889 24.206 10.889 L 25.358 12.041 C 25.358 12.041 25.358 12.041 24.206 12.041 C 24.206 12.041 24.206 12.041 24.206 13.194 L 27.664 14.347 C 27.664 14.347 27.664 15.5 28.816 15.5 L 25.358 13.194 C 25.358 13.194 29.969 15.5 29.969 16.653 L 31.122 16.653 C 31.122 16.653 31.122 16.653 31.122 17.806 L 31.122 18.959 C 32.274 18.959 32.274 20.112 33.427 21.265 C 33.427 21.265 32.274 21.265 31.122 21.265 C 31.122 21.265 31.122 21.265 29.969 21.265 L 31.122 22.418 C 31.122 23.571 33.427 23.571 33.427 24.723 C 33.427 25.876 34.58 27.029 34.58 27.029 C 34.58 27.029 35.732 27.029 35.732 25.876 L 35.732 27.029 C 34.58 27.029 35.732 29.335 34.58 29.335 C 34.58 29.335 34.58 30.488 35.732 30.488 L 36.885 30.488 C 36.885 31.641 36.885 31.641 36.885 31.641 C 36.885 31.641 36.885 31.641 35.732 31.641 C 36.885 31.641 35.732 32.794 36.885 33.947 C 36.885 33.947 38.038 35.1 39.19 35.1 C 43.801 32.794 43.801 32.794 43.801 33.947 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.971,0.239,-0.239,0.971,119.414,34.975)",
      transformOrigin: "0 0",
      width: 77.74,
      height: 97.5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 77.74,
      height: 97.5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 77.74,
      height: 97.5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 77.740,
    height: 97.500,
    viewBox: "0 0 77.740 97.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 77.74,
      height: 97.5,
      color: "rgb(109,46,70)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 44.954 3.782 C 46.106 3.782 48.412 2.629 49.564 2.629 C 44.954 1.476 39.19 2.629 38.038 8.393 C 36.885 6.087 32.274 7.24 32.274 8.393 C 32.274 9.546 31.122 9.546 29.969 10.699 L 31.122 9.546 C 31.122 10.699 29.969 10.699 29.969 10.699 C 26.511 15.311 21.9 18.769 16.137 23.381 C 13.832 25.687 6.916 33.757 4.611 37.216 L 3.458 38.369 C 4.611 37.216 4.611 37.216 4.611 37.216 C 4.611 39.522 3.458 41.827 3.458 44.133 C 3.458 44.133 4.611 44.133 4.611 42.98 C 5.763 44.133 4.611 46.439 4.611 47.592 C 4.611 47.592 3.458 47.592 3.458 48.745 C 3.458 51.051 2.305 53.357 2.305 55.662 C 2.305 55.662 2.305 55.662 2.305 56.815 L 2.305 59.121 C 0 59.121 0 60.274 0 59.121 C 0 61.427 0 62.58 0 64.886 C 0 70.65 0 76.415 1.153 82.179 C 2.305 83.332 3.458 85.638 3.458 87.944 C 4.611 89.097 5.763 91.402 6.916 92.555 C 6.916 94.861 8.069 94.861 9.221 97.167 C 10.374 96.014 10.374 98.32 10.374 97.167 C 11.527 96.014 10.374 96.014 10.374 94.861 C 11.527 87.944 11.527 83.332 11.527 79.873 C 10.374 77.568 11.527 74.109 11.527 70.65 C 11.527 67.191 11.527 63.733 11.527 60.274 C 11.527 59.121 12.679 59.121 12.679 59.121 C 12.679 56.815 13.832 53.357 14.985 49.898 C 14.985 48.745 16.137 47.592 17.29 46.439 C 18.442 46.439 20.748 37.216 20.748 37.216 C 24.206 33.757 27.664 31.451 29.969 30.298 C 29.969 29.145 29.969 29.145 29.969 27.993 C 31.122 27.993 29.969 26.84 31.122 26.84 C 33.427 26.84 33.427 25.687 32.274 25.687 C 33.427 24.534 34.58 23.381 34.58 23.381 L 35.732 22.228 L 36.885 22.228 C 38.038 21.075 38.038 22.228 39.19 21.075 C 39.19 21.075 41.496 18.769 41.496 18.769 C 42.648 17.616 43.801 18.769 44.954 18.769 C 48.412 17.616 51.869 15.311 55.327 14.158 C 55.327 13.005 54.175 14.158 54.175 14.158 C 56.48 14.158 58.785 14.158 61.091 13.005 L 62.243 13.005 C 63.396 13.005 62.243 13.005 63.396 13.005 L 63.396 14.158 C 64.549 13.005 64.549 14.158 65.701 14.158 C 65.701 15.311 66.854 14.158 66.854 14.158 L 69.159 11.852 L 69.159 10.699 C 69.159 10.699 69.159 10.699 69.159 11.852 C 69.159 11.852 69.159 11.852 70.312 11.852 C 71.465 10.699 70.312 9.546 69.159 9.546 L 70.312 9.546 C 70.312 9.546 71.465 10.699 72.617 10.699 C 72.617 10.699 72.617 10.699 73.77 10.699 L 72.617 10.699 C 72.617 11.852 73.77 10.699 73.77 10.699 L 74.923 10.699 C 74.923 11.852 74.923 10.699 74.923 11.852 C 74.923 10.699 73.77 11.852 73.77 10.699 L 74.923 10.699 C 74.923 10.699 74.923 10.699 74.923 9.546 L 76.075 9.546 C 76.075 9.546 73.77 11.852 74.923 11.852 L 77.228 9.546 L 77.228 8.393 L 77.228 7.24 L 76.075 9.546 L 77.228 9.546 C 77.228 9.546 77.228 9.546 77.228 8.393 C 76.075 8.393 78.381 4.934 77.228 4.934 C 78.381 6.087 77.228 6.087 76.075 6.087 C 76.075 6.087 76.075 4.934 74.923 4.934 C 74.923 4.934 73.77 4.934 73.77 3.782 C 73.77 3.782 73.77 3.782 72.617 3.782 L 71.465 3.782 C 71.465 3.782 70.312 2.629 71.465 2.629 C 72.617 2.629 71.465 3.782 72.617 3.782 C 72.617 2.629 73.77 3.782 73.77 2.629 L 72.617 2.629 L 71.465 2.629 C 71.465 2.629 71.465 2.629 71.465 1.476 C 71.465 1.476 71.465 1.476 70.312 1.476 L 68.007 2.629 C 68.007 2.629 68.007 2.629 66.854 2.629 L 70.312 1.476 C 70.312 1.476 65.701 3.782 65.701 2.629 L 65.701 1.476 C 64.549 2.629 63.396 1.476 63.396 2.629 C 63.396 2.629 63.396 1.476 64.549 1.476 C 64.549 1.476 64.549 1.476 64.549 0.323 L 63.396 0.323 C 63.396 -0.83 62.243 1.476 61.091 1.476 C 59.938 1.476 59.938 1.476 58.785 1.476 L 58.785 2.629 L 57.633 2.629 C 57.633 1.476 56.48 1.476 56.48 0.323 L 55.327 0.323 L 55.327 1.476 C 54.175 1.476 54.175 1.476 54.175 1.476 C 54.175 1.476 54.175 1.476 54.175 0.323 C 53.022 1.476 53.022 0.323 51.869 0.323 C 46.106 3.782 46.106 3.782 44.954 3.782 C 44.954 4.934 44.954 4.934 44.954 3.782 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))));
}
Object.assign(__ds_scope, { HandMic });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/illustrations/HandMic.jsx", error: String((e && e.message) || e) }); }

// components/illustrations/HoldingHands.jsx
try { (() => {
// Lado a Lado — "holding hands" hero illustration (hand-drawn black ink).
// Intrinsic art box: 2139.844 x 1372.799. Renders responsively to `width`.
// Recolor via `color` (paths paint with currentColor).
function HoldingHands({
  width = 600,
  color = "var(--lal-preto, #000)",
  style = {}
}) {
  const W = 2139.844,
    H = 1372.799;
  const scale = width / W;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: width,
      height: H * scale,
      color,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: W,
      height: H,
      transform: `scale(${scale})`,
      transformOrigin: "top left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2139.844,
      height: 1372.799,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2139.844,
      height: 1372.799,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2139.844,
      height: 1372.799,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 599.665,
      top: 1.916,
      width: 521.64,
      height: 716.462,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 521.64,
      height: 716.462,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 521.64,
      height: 716.462,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 521.640,
    height: 716.462,
    viewBox: "0 0 521.640 716.462",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 521.64,
      height: 716.462,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 98.879 177.846 L 101.159 180.123 C 94.319 171.016 87.478 159.632 80.638 148.248 C 92.039 173.293 105.719 200.614 126.24 214.275 C 121.68 221.105 135.361 243.873 135.361 243.873 C 139.921 248.427 142.201 252.98 146.762 255.257 C 144.482 252.98 142.201 250.704 139.921 246.15 C 142.201 248.427 144.482 252.98 146.762 255.257 C 169.563 282.579 187.804 314.454 208.325 348.606 C 219.726 366.82 251.648 416.909 263.048 437.4 C 265.328 439.677 265.328 441.954 267.609 446.507 C 265.328 441.954 265.328 441.954 263.048 437.4 C 272.169 448.784 279.009 457.891 285.85 466.999 C 285.85 464.722 285.85 464.722 283.569 460.168 L 285.85 464.722 C 290.41 469.275 297.25 478.383 301.811 482.936 C 299.53 482.936 301.81 487.49 304.091 489.766 L 304.091 487.49 C 313.211 501.15 324.612 514.811 331.452 528.472 C 331.452 530.749 333.732 530.749 333.732 533.025 L 342.853 544.409 C 340.573 544.409 347.413 553.517 342.853 548.963 C 349.693 555.793 354.254 564.9 363.374 571.731 C 383.895 599.052 406.697 628.651 431.778 653.695 C 440.898 662.802 450.019 669.633 461.42 681.017 C 470.54 687.847 484.221 696.954 488.781 696.954 C 497.902 703.785 502.462 706.061 513.863 712.892 C 511.582 710.615 525.263 719.722 520.703 715.169 C 516.143 708.338 513.863 710.615 509.302 703.785 C 497.902 692.401 484.221 683.293 475.1 671.909 C 463.7 660.526 454.579 646.865 443.179 635.481 C 429.498 619.543 415.817 599.052 402.136 580.838 C 386.175 562.624 370.214 542.133 356.534 523.918 C 354.254 519.365 351.973 517.088 349.693 512.534 C 338.293 496.597 324.612 476.106 310.931 457.891 C 304.091 448.784 301.811 439.677 294.97 430.57 L 292.69 428.293 C 292.69 426.016 253.928 375.927 251.648 371.374 L 249.368 369.097 C 237.967 348.606 226.566 325.838 215.166 309.9 C 212.885 307.623 208.325 303.07 206.045 300.793 C 203.765 296.239 203.765 298.516 201.485 293.963 C 199.205 282.579 194.644 278.025 194.644 282.579 C 190.084 275.748 185.524 266.641 180.964 259.811 C 178.684 257.534 176.403 252.98 174.123 250.704 C 171.843 248.427 171.843 246.15 171.843 243.873 C 167.283 237.043 169.563 239.32 165.003 232.489 C 165.003 230.213 151.322 216.552 151.322 214.275 C 146.762 205.168 144.482 198.338 139.921 191.507 C 126.241 168.739 107.999 143.695 94.319 123.204 C 92.039 123.204 96.599 127.757 96.599 130.034 C 87.478 118.65 80.638 104.989 73.798 91.329 C 71.517 89.052 71.517 86.775 71.517 84.498 C 69.237 79.945 69.237 82.221 66.957 79.945 C 62.397 75.391 64.677 73.114 60.117 68.561 L 57.837 66.284 L 55.556 61.73 C 55.556 61.73 55.556 59.454 53.276 59.454 C 50.996 57.177 39.596 45.793 37.315 43.516 C 35.035 41.239 35.035 41.239 35.035 41.239 L 32.755 38.962 L 30.475 36.686 C 28.195 34.409 28.195 34.409 25.915 32.132 C 28.195 36.686 30.475 43.516 32.755 48.07 C 30.475 45.793 30.475 43.516 28.195 41.239 C 28.195 38.962 23.635 32.132 21.355 27.578 C 21.355 27.578 19.074 27.578 19.074 25.302 C 19.074 23.025 16.794 23.025 16.794 20.748 C 19.074 23.025 19.074 25.302 21.355 25.302 C 21.355 25.302 19.074 20.748 19.074 18.471 C 19.074 18.471 16.794 13.918 14.514 11.641 C 16.794 11.641 14.514 9.364 14.514 7.087 C 14.514 4.811 12.234 4.811 12.234 4.811 C 9.954 4.811 16.794 11.641 12.234 9.364 L 9.954 4.811 C 9.954 2.534 7.674 2.534 7.674 0.257 C 7.674 0.257 7.674 0.257 7.674 2.534 C 5.394 0.257 19.074 13.918 16.794 9.364 C 16.794 11.641 5.394 -2.02 5.394 0.257 C 5.394 2.534 3.113 0.257 5.394 2.534 L 7.674 4.811 C 9.954 7.087 7.674 9.364 7.674 7.087 C 5.394 2.534 19.074 13.918 14.514 11.641 L 14.514 13.918 C 12.234 13.918 9.954 9.364 9.954 7.087 L 7.674 4.811 C 5.394 2.534 5.394 2.534 5.394 2.534 C 12.234 11.641 -3.727 0.257 0.833 9.364 C 0.833 4.811 3.113 9.364 5.394 13.918 C 5.394 13.918 5.394 16.195 7.674 18.471 C 9.954 20.748 9.954 18.471 9.954 20.748 C 9.954 23.025 12.234 25.302 9.954 25.302 C 12.234 27.578 12.234 27.578 12.234 29.855 C 14.514 32.132 12.234 29.855 14.514 29.855 C 16.794 32.132 19.074 34.409 21.355 38.962 C 21.355 41.239 21.355 43.516 19.074 41.239 C 16.794 36.686 21.355 41.239 19.074 36.686 C 19.074 38.962 16.794 32.132 14.514 32.132 C 14.514 34.409 16.794 36.686 19.074 38.962 C 21.355 41.239 23.635 45.793 23.635 48.07 C 23.635 48.07 23.635 48.07 21.355 48.07 L 23.635 50.346 C 25.915 50.346 25.915 52.623 25.915 54.9 L 37.315 68.561 C 39.596 70.837 37.315 70.837 39.596 73.114 C 39.596 73.114 23.635 54.9 25.915 57.177 C 25.915 59.454 44.156 77.668 44.156 79.945 C 44.156 82.221 46.436 82.221 46.436 82.221 C 48.716 84.498 44.156 82.221 46.436 84.498 L 46.436 86.775 C 50.996 91.329 53.276 95.882 55.556 100.436 C 53.276 100.436 53.276 98.159 50.996 95.882 L 48.716 93.605 C 50.996 95.882 50.996 98.159 53.276 100.436 L 53.276 102.712 C 53.276 104.989 60.117 111.82 62.397 116.373 C 62.397 118.65 62.397 116.373 64.677 118.65 C 66.957 123.204 69.237 127.757 71.517 132.311 C 73.798 132.311 73.798 132.311 73.798 130.034 L 76.078 134.588 C 71.517 132.311 78.358 143.695 73.798 139.141 C 73.798 141.418 76.078 143.695 78.358 143.695 C 78.358 143.695 80.638 143.695 80.638 145.971 C 87.478 155.079 85.198 152.802 87.478 157.355 C 87.478 157.355 87.478 157.355 85.198 157.355 C 89.758 161.909 87.478 161.909 89.758 166.463 C 92.039 168.739 96.599 175.57 96.599 175.57 C 98.879 177.846 98.879 177.846 98.879 177.846 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 41.204,
      width: 836.296,
      height: 842.283,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 836.296,
      height: 842.283,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 836.296,
      height: 842.283,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 836.296,
    height: 842.283,
    viewBox: "0 0 836.296 842.283",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 836.296,
      height: 842.283,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 675.742 618.961 L 671.182 616.684 C 682.583 628.068 693.983 639.452 707.664 648.559 C 684.863 621.237 655.221 591.639 627.86 580.255 C 627.86 575.702 605.058 548.38 602.778 550.657 C 595.938 546.103 591.378 541.55 584.537 536.996 C 589.097 539.273 591.378 543.827 595.938 546.103 C 591.378 543.827 586.817 539.273 584.537 536.996 C 548.055 507.398 511.573 473.246 475.091 434.541 C 454.57 414.05 399.847 357.13 379.326 336.639 C 377.045 334.362 372.485 329.808 370.205 327.532 C 374.765 332.085 374.765 332.085 379.326 338.916 C 365.645 327.532 351.964 316.148 340.563 307.041 C 342.843 309.317 342.843 309.317 345.124 316.148 L 340.563 309.317 C 333.723 304.764 322.322 293.38 315.482 288.826 C 317.762 288.826 313.202 284.273 308.641 279.719 L 308.641 281.996 C 294.961 266.058 276.72 250.121 263.039 236.46 C 260.759 234.183 260.759 231.907 258.479 231.907 L 251.638 218.246 C 253.918 218.246 242.518 206.862 249.358 211.415 C 237.957 202.308 228.837 193.201 219.716 184.094 C 183.234 154.496 146.752 120.344 112.55 88.469 L 112.55 90.746 C 98.87 79.362 87.469 70.255 73.788 56.594 C 62.387 47.487 46.427 33.826 39.586 31.549 C 28.185 20.165 21.345 15.612 9.944 4.228 C 12.225 8.781 -3.736 -4.879 0.824 1.951 C 7.664 11.058 9.944 11.058 14.505 17.888 C 44.146 49.763 73.788 81.638 105.71 111.237 C 128.511 131.728 149.032 154.496 171.834 174.987 C 196.915 197.755 221.997 220.523 242.518 241.014 C 247.078 245.567 249.358 250.121 253.918 254.674 C 272.159 272.889 294.961 295.657 317.762 316.148 C 329.163 327.532 336.003 336.639 347.404 345.746 L 349.684 348.023 C 349.684 350.299 415.808 407.219 420.368 411.773 L 424.928 414.05 C 447.729 436.818 468.251 461.862 488.772 480.076 C 493.332 484.63 500.172 486.907 502.453 489.184 C 504.733 493.737 507.013 491.46 511.573 496.014 C 520.694 509.675 527.534 514.228 522.974 507.398 C 532.094 516.505 541.215 523.335 548.055 532.443 C 552.615 534.719 554.896 539.273 559.456 541.55 C 561.736 543.827 564.016 546.103 566.296 548.38 C 575.417 555.211 570.856 552.934 579.977 562.041 C 579.977 564.318 602.778 580.255 605.058 582.532 L 602.778 582.532 C 611.899 591.639 616.459 600.746 625.58 607.577 C 650.661 632.621 682.583 659.943 707.664 680.434 C 709.944 680.434 703.104 675.88 703.104 673.603 C 716.785 687.264 730.466 700.925 744.146 716.862 C 746.426 719.139 748.707 723.693 748.707 725.97 C 753.267 730.523 750.987 728.246 755.547 732.8 L 755.547 735.077 C 760.107 739.63 760.107 744.184 764.668 748.738 C 764.668 748.738 766.948 751.014 769.228 753.291 C 769.228 753.291 773.788 757.845 771.508 760.121 L 773.788 762.398 C 776.068 764.675 792.029 780.613 796.589 782.889 C 798.87 785.166 801.15 787.443 798.869 785.166 L 801.15 789.72 L 803.43 794.273 L 803.43 796.55 C 805.71 798.827 807.99 801.104 807.99 803.38 C 805.71 798.827 801.15 789.72 796.589 782.889 C 798.87 785.166 801.15 789.72 803.43 791.996 C 805.71 796.55 807.99 803.38 812.55 807.934 C 812.55 807.934 814.83 807.934 817.11 812.488 C 817.11 814.764 819.391 814.764 819.391 817.041 C 817.111 814.764 817.111 812.488 814.83 810.211 C 814.83 810.211 817.111 817.041 819.391 819.318 C 819.391 819.318 821.671 826.148 823.951 828.425 C 821.671 828.425 823.951 830.702 823.951 832.979 C 823.951 835.255 826.231 835.255 826.231 835.255 C 828.511 835.255 821.671 826.148 826.231 828.425 C 826.231 828.425 828.511 832.979 828.511 835.255 C 828.511 837.532 830.791 839.809 830.791 842.086 L 830.791 839.809 C 833.071 842.086 819.391 823.872 821.671 828.425 C 821.671 826.148 835.352 844.363 833.071 842.086 C 833.071 839.809 835.352 842.086 833.071 839.809 L 830.791 837.532 C 830.791 835.255 830.791 832.979 830.791 832.979 C 833.071 837.532 819.391 821.595 821.671 826.148 L 821.671 823.872 C 823.951 826.148 826.231 830.702 826.231 830.702 C 826.231 830.702 828.511 832.979 828.511 835.255 C 830.791 837.532 830.791 839.809 830.791 837.532 C 826.231 826.148 839.912 842.086 835.352 830.702 C 835.352 835.255 833.071 830.702 830.791 823.872 C 830.791 823.872 830.791 821.595 828.511 817.041 C 826.231 814.764 826.231 814.764 826.231 814.764 C 826.231 812.488 823.951 810.211 823.951 810.211 C 821.671 807.934 821.671 805.657 819.391 803.38 C 817.111 801.104 819.391 803.38 817.11 803.38 C 814.83 798.827 812.55 794.273 810.27 791.996 C 810.27 789.72 807.99 785.166 812.55 787.443 C 817.11 791.996 810.27 787.443 814.83 791.996 C 814.83 787.443 819.391 796.55 819.391 796.55 C 819.391 794.273 817.111 789.72 814.83 787.443 C 812.55 785.166 807.99 780.612 807.99 776.059 C 807.99 776.059 807.99 773.782 810.27 776.059 L 807.99 771.505 C 805.71 769.229 805.71 769.229 803.43 766.952 L 787.469 748.738 C 785.189 746.461 785.189 744.184 782.909 741.907 C 782.909 741.907 787.469 748.737 792.029 753.291 C 796.589 757.845 801.15 764.675 801.15 762.398 C 801.15 760.121 776.068 735.077 776.068 732.8 C 773.788 730.523 771.508 728.246 771.508 730.523 C 769.228 728.246 773.788 730.523 771.508 728.246 L 769.228 725.97 C 764.668 721.416 760.107 714.586 753.267 710.032 C 755.547 710.032 757.827 712.309 760.107 714.586 C 760.107 714.586 762.387 716.862 764.668 716.862 C 762.387 714.586 760.107 710.032 755.547 707.755 L 753.267 705.479 C 753.267 703.202 753.267 703.202 753.267 705.479 C 753.267 703.202 741.866 694.095 737.306 689.541 C 735.026 687.264 737.306 689.541 735.026 687.264 C 730.466 680.434 725.905 678.157 721.345 671.327 C 719.065 671.327 719.065 671.327 721.345 673.603 L 716.785 669.05 C 721.345 671.327 709.944 659.943 716.785 662.22 C 716.785 659.943 712.224 657.666 709.944 655.389 C 709.944 655.389 707.664 655.389 705.384 653.112 C 700.824 648.559 703.104 650.836 698.544 646.282 C 698.544 644.005 698.544 646.282 700.824 646.282 C 693.983 641.728 696.264 641.728 691.703 637.175 C 687.143 634.898 682.583 628.068 680.303 630.345 C 673.462 621.237 673.462 621.237 675.742 618.961 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1404.726,
      top: 6.797,
      width: 735.118,
      height: 902.945,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 735.118,
      height: 902.945,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 735.118,
      height: 902.945,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 735.118,
    height: 902.945,
    viewBox: "0 0 735.118 902.945",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 735.118,
      height: 902.945,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 547.889 188.903 L 545.609 193.457 C 554.73 182.073 566.131 168.412 577.531 157.028 C 550.17 182.073 522.808 211.671 511.407 238.993 C 506.847 238.993 481.766 261.76 481.766 264.037 C 477.205 270.868 472.645 275.421 470.365 282.252 C 472.645 277.698 477.205 275.421 479.486 270.868 C 477.205 275.421 472.645 279.975 470.365 282.252 C 443.003 320.957 408.802 355.109 372.319 393.814 C 351.798 414.305 299.355 471.225 276.554 491.716 C 274.274 493.993 269.714 498.546 267.434 500.823 C 271.994 496.27 271.994 496.27 278.834 491.716 C 267.434 505.377 256.033 519.037 246.912 530.421 C 249.192 528.145 249.192 528.145 256.033 525.868 L 249.192 530.421 C 244.632 537.252 233.231 548.636 228.671 555.466 C 228.671 553.189 224.111 557.743 221.831 562.297 L 224.111 560.02 C 210.43 575.957 194.469 594.172 180.789 607.832 C 178.508 610.109 178.508 610.109 176.228 612.386 L 164.828 626.047 C 164.828 623.77 153.427 637.43 157.987 628.323 C 151.147 639.707 139.746 648.814 132.906 660.198 C 116.945 678.413 100.984 694.35 87.303 714.841 C 73.622 733.056 57.662 753.547 43.981 771.761 L 46.261 771.761 C 37.14 785.422 28.02 799.082 18.899 815.02 C 14.339 828.681 7.499 849.172 9.779 853.725 C 5.219 869.663 5.218 876.493 0.658 892.431 C 2.938 887.877 -1.622 908.368 0.658 901.538 C 5.218 892.431 2.938 890.154 7.499 883.324 C 14.339 862.833 21.179 844.618 30.3 826.404 C 34.86 817.297 39.42 808.19 46.261 801.359 C 53.101 792.252 59.942 785.422 66.782 776.315 C 85.023 753.547 103.264 728.502 123.785 705.734 C 144.306 680.689 167.108 655.645 185.349 632.877 C 189.909 628.323 194.469 626.047 199.03 621.493 C 217.271 601.002 237.792 578.234 256.033 557.743 C 265.153 546.359 274.274 539.529 285.674 528.145 L 287.955 525.868 C 290.235 525.868 344.958 457.564 349.518 455.287 L 351.798 450.734 C 374.6 427.966 399.681 407.475 417.922 386.984 C 420.202 382.43 424.763 375.6 427.043 373.323 C 431.603 371.046 429.323 368.77 433.883 364.216 C 447.564 355.109 452.124 348.278 445.284 352.832 C 454.404 343.725 461.244 334.618 468.085 325.511 C 470.365 320.957 474.925 318.68 477.205 314.127 C 479.486 309.573 481.766 309.573 484.046 307.296 C 490.886 298.189 488.606 302.743 497.727 293.635 C 500.007 291.359 513.688 270.868 518.248 268.591 L 518.248 270.868 C 527.368 261.76 534.209 254.93 543.329 245.823 C 566.131 218.502 591.212 186.626 611.733 161.582 C 611.733 159.305 607.173 168.412 604.893 166.135 C 616.293 152.475 632.254 136.537 643.655 122.876 C 645.935 120.6 650.495 118.323 650.495 116.046 C 655.056 111.492 652.776 113.769 655.056 109.216 L 657.336 109.216 C 661.896 102.385 664.176 102.385 668.736 97.832 C 668.736 97.832 671.016 95.555 671.016 93.278 L 675.577 88.725 L 677.857 86.448 C 680.137 84.171 691.538 63.68 693.818 61.403 C 693.818 52.296 693.818 52.296 693.818 52.296 L 696.098 50.019 L 698.378 47.742 L 700.658 47.742 C 702.938 45.466 702.938 43.189 705.218 40.912 C 698.378 45.466 693.818 52.296 686.977 56.85 C 689.257 52.296 693.818 50.019 693.818 47.742 C 696.098 45.466 702.938 38.635 707.499 36.358 C 707.499 36.358 707.498 34.082 709.779 31.805 C 712.059 31.805 712.059 29.528 714.339 27.251 C 712.059 29.528 709.779 31.805 709.779 34.082 C 712.059 34.082 716.619 27.251 716.619 27.251 C 716.619 27.251 721.179 22.698 723.46 18.144 C 723.46 20.421 725.74 15.867 728.02 15.867 C 730.3 13.591 730.3 11.314 730.3 11.314 C 730.3 9.037 723.459 18.144 725.74 15.867 C 725.74 15.867 730.3 11.314 730.3 9.037 C 732.58 6.76 732.58 4.483 734.86 2.207 C 734.86 2.207 734.86 4.483 732.58 4.483 C 734.86 2.207 723.459 24.975 725.74 20.421 C 723.459 20.421 737.14 -0.07 734.86 2.207 C 732.58 4.483 734.86 -0.07 732.58 2.207 L 732.58 4.483 C 730.3 6.76 728.02 6.76 728.02 6.76 C 732.58 2.207 721.179 22.698 723.46 18.144 L 721.179 20.421 C 721.179 18.144 725.74 13.591 728.02 13.591 C 728.02 13.591 728.02 11.314 730.3 9.037 C 732.58 6.76 732.58 4.483 732.58 4.483 C 723.459 15.867 732.58 -6.901 723.46 2.207 C 728.02 -0.07 723.459 4.483 721.179 9.037 C 721.179 9.037 718.899 11.314 714.339 13.591 C 712.059 15.867 714.339 15.867 714.339 15.867 C 712.059 18.144 709.779 20.421 709.779 18.144 C 709.779 20.421 707.499 20.421 705.218 22.698 C 702.938 24.975 705.218 22.698 705.218 24.975 C 702.938 27.251 698.378 31.805 696.098 36.358 C 693.818 36.358 691.538 38.635 691.538 36.358 C 693.818 29.528 689.258 38.635 693.818 34.082 C 691.538 36.358 698.378 29.528 698.378 27.251 C 696.098 27.251 693.818 31.805 691.538 34.082 C 689.258 36.358 684.697 40.912 682.417 43.189 C 682.417 43.189 680.137 43.189 682.417 40.912 L 680.137 43.189 C 680.137 45.466 677.857 45.466 675.577 47.742 C 675.577 47.742 661.896 68.233 661.896 65.957 C 659.616 68.233 659.616 68.233 657.336 70.51 C 657.336 70.51 675.577 45.466 673.297 47.742 C 671.016 50.019 650.495 77.341 650.495 79.617 C 648.215 84.171 645.935 86.448 648.215 86.448 C 645.935 88.725 648.215 84.171 645.935 86.448 L 643.655 88.725 C 641.375 93.278 634.534 100.109 629.974 106.939 C 629.974 104.662 629.974 102.385 632.254 97.832 L 634.534 93.278 C 632.254 95.555 629.974 97.832 627.694 102.385 L 625.414 106.939 C 623.134 106.939 623.134 106.939 625.414 106.939 C 623.134 106.939 616.293 120.6 611.733 125.153 C 609.453 127.43 611.733 125.153 609.453 127.43 C 604.893 131.984 600.332 136.537 595.772 143.367 C 595.772 145.644 595.772 145.644 598.052 143.367 L 591.212 147.921 C 593.492 143.367 582.091 154.751 584.371 150.198 C 582.091 150.198 579.811 154.751 577.531 157.028 C 577.531 157.028 577.531 159.305 575.251 161.582 C 570.691 166.135 572.971 163.859 568.411 168.412 C 566.13 168.412 568.411 168.412 568.411 166.135 C 563.85 172.966 563.85 170.689 559.29 175.243 C 557.01 179.796 550.17 186.626 552.45 186.626 C 547.89 191.18 547.889 188.903 547.889 188.903 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 725.905,
      top: 0,
      width: 817.385,
      height: 1039.122,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 817.385,
      height: 1039.122,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 817.385,
      height: 1039.122,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 817.385,
    height: 1039.122,
    viewBox: "0 0 817.385 1039.122",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 817.385,
      height: 1039.122,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 168.73 840.03 L 173.29 837.753 C 157.329 849.137 141.368 858.244 123.127 869.628 C 161.889 849.137 205.212 821.816 228.013 799.048 C 232.573 801.325 269.055 787.664 271.336 787.664 C 278.176 783.11 287.296 780.833 294.137 778.557 C 289.577 780.833 282.736 783.11 278.176 785.387 C 285.016 783.11 289.577 780.833 294.137 778.557 C 319.218 767.173 348.86 760.342 376.221 744.405 C 389.902 735.298 403.583 723.914 412.704 712.53 C 421.824 701.146 433.225 687.485 442.345 676.101 C 467.427 648.78 517.59 569.092 538.111 539.494 C 540.391 534.94 544.951 530.387 547.231 525.833 C 542.671 532.664 542.671 532.664 538.111 539.494 C 549.511 521.28 556.352 503.065 565.472 484.851 C 563.192 487.128 563.192 487.128 556.352 493.958 L 560.912 484.851 C 563.192 475.744 574.593 457.53 579.153 450.699 C 579.153 452.976 583.713 446.146 585.993 441.592 L 583.713 443.869 C 597.394 421.101 611.075 396.056 622.475 375.565 C 624.756 373.288 624.756 371.012 627.036 371.012 L 636.156 352.797 C 636.156 355.074 645.277 336.86 642.997 348.244 C 649.837 332.306 658.958 318.645 665.798 304.985 C 693.16 257.172 722.801 204.806 747.883 154.717 C 757.003 136.502 763.844 120.565 775.244 100.074 C 782.085 84.136 793.485 61.368 793.485 54.538 C 802.606 36.324 804.886 29.493 814.006 11.279 C 809.446 15.833 820.847 -6.935 816.286 2.172 C 809.446 6.726 809.446 9.002 802.606 18.109 C 775.244 61.368 750.163 106.904 722.801 152.44 C 706.84 184.315 688.599 216.19 670.358 248.065 C 652.117 282.217 629.316 318.645 615.635 348.244 C 611.075 355.074 608.795 359.628 604.234 366.458 C 588.274 393.779 570.033 427.931 551.792 457.53 C 551.792 457.53 551.792 457.53 551.792 455.253 C 542.671 471.19 533.55 482.574 526.71 498.512 C 526.71 498.512 526.71 500.789 524.43 503.065 C 522.15 505.342 469.707 594.137 467.427 598.69 L 465.147 603.244 C 460.586 610.074 453.746 619.182 449.186 626.012 C 442.345 632.842 437.785 639.673 430.945 646.503 C 419.544 660.164 408.143 673.824 396.743 687.485 C 392.182 694.316 387.622 698.869 385.342 703.423 C 380.782 705.699 380.782 707.976 376.221 712.53 C 360.261 719.36 353.42 723.914 362.541 721.637 C 351.14 728.467 337.459 733.021 326.059 737.574 C 321.498 739.851 314.658 742.128 310.098 744.405 C 305.537 746.682 303.257 746.682 298.697 746.682 C 287.296 751.235 289.577 748.958 275.896 753.512 C 271.336 753.512 243.974 767.173 239.414 769.45 L 241.694 769.45 C 225.733 776.28 214.332 778.557 200.651 787.664 C 164.169 810.432 125.407 837.753 91.205 860.521 C 91.205 862.798 98.046 855.967 100.326 855.967 C 91.205 862.798 77.524 867.351 68.404 881.012 C 63.844 885.566 59.283 892.396 57.003 899.227 C 54.723 903.78 54.723 906.057 54.723 910.61 C 54.723 915.164 54.723 915.164 52.443 917.441 C 50.163 919.718 50.163 924.271 47.883 924.271 C 45.603 928.825 47.883 926.548 45.603 931.101 L 43.323 931.101 C 41.042 933.378 41.042 935.655 38.762 937.932 C 36.482 940.209 34.202 940.209 31.922 944.762 C 31.922 944.762 29.642 947.039 27.362 949.316 C 25.081 949.316 20.521 956.146 20.521 956.146 C 20.521 958.423 18.241 958.423 18.241 960.7 C 18.241 962.977 11.401 969.807 6.84 978.914 C 2.28 985.744 0 992.575 0 997.128 C 0 1001.682 2.28 1006.236 2.28 1006.236 L 2.28 1008.512 C 6.84 1013.066 9.121 1015.343 6.84 1013.066 C 9.121 1015.343 11.401 1017.62 13.681 1017.62 L 20.521 1022.173 C 20.521 1022.173 22.801 1024.45 20.521 1024.45 C 25.081 1026.727 27.362 1026.727 29.642 1029.003 C 25.081 1026.727 22.801 1024.45 15.961 1019.896 C 9.121 1015.343 4.56 1010.789 2.28 1003.959 C 4.56 1008.512 11.401 1015.343 15.961 1017.62 C 22.801 1022.173 29.642 1026.727 38.762 1031.28 C 41.042 1031.28 43.322 1031.28 45.603 1033.557 C 47.883 1035.834 50.163 1035.834 54.723 1035.834 C 50.163 1035.834 45.603 1033.557 43.323 1033.557 C 43.323 1035.834 52.443 1038.11 57.003 1038.11 C 59.283 1038.11 66.124 1038.11 72.964 1038.11 C 70.684 1040.387 77.524 1038.11 79.805 1038.11 C 84.365 1038.11 84.365 1035.834 84.365 1035.834 C 84.365 1033.557 70.684 1038.111 75.244 1035.834 C 77.524 1035.834 82.085 1035.834 86.645 1033.557 C 86.645 1033.557 84.365 1033.557 86.645 1031.28 C 91.205 1031.28 93.485 1029.003 95.765 1029.003 C 95.765 1029.003 93.485 1029.003 91.205 1029.003 C 93.485 1029.003 86.645 1031.28 79.805 1033.557 C 72.964 1035.834 66.124 1035.834 70.684 1035.834 C 68.404 1035.834 100.326 1026.727 95.765 1026.727 C 93.485 1026.727 98.046 1024.45 93.485 1024.45 L 91.205 1026.727 C 86.645 1026.727 84.365 1026.727 86.645 1026.727 C 93.485 1024.45 66.124 1035.834 72.964 1033.557 L 70.684 1033.557 C 72.964 1033.557 79.805 1031.28 84.365 1031.28 C 84.365 1031.28 88.925 1029.003 91.205 1029.003 C 93.485 1029.003 98.046 1026.727 95.765 1026.727 C 77.524 1031.28 104.886 1017.619 88.925 1019.896 C 95.765 1019.896 86.645 1022.173 79.805 1024.45 C 79.805 1024.45 75.244 1024.45 70.684 1024.45 C 66.124 1024.45 68.404 1024.45 66.124 1024.45 C 63.844 1024.45 59.283 1024.45 59.283 1022.173 C 54.723 1022.173 54.723 1019.896 50.163 1019.896 C 45.603 1019.896 50.163 1019.896 47.883 1019.896 C 43.323 1017.619 36.482 1015.343 31.922 1013.066 C 29.642 1010.789 27.362 1008.512 29.642 1008.512 C 36.482 1013.066 25.081 1008.512 34.202 1013.066 C 31.922 1010.789 41.042 1015.343 43.323 1015.343 C 41.042 1013.066 36.482 1010.789 31.922 1010.789 C 27.362 1008.512 20.521 1006.235 18.241 1003.959 C 20.521 1003.959 18.241 1003.959 20.521 1003.959 C 18.241 1003.959 18.241 1001.682 15.961 1001.682 C 13.681 999.405 13.681 997.128 13.681 997.128 C 13.681 997.128 15.961 992.575 18.241 985.744 C 20.521 978.914 25.081 974.36 25.081 974.36 C 27.362 972.084 29.642 972.084 29.642 967.53 C 29.642 967.53 27.362 969.807 27.362 972.084 C 25.081 974.361 22.801 978.914 20.521 983.468 C 15.961 990.298 13.681 997.128 13.681 994.852 C 15.961 992.575 20.521 985.744 25.081 976.637 C 31.922 967.53 38.762 958.423 38.762 958.423 C 47.883 953.869 50.163 951.593 50.163 951.593 C 54.723 947.039 50.163 953.869 52.443 951.593 L 54.723 949.316 C 59.283 942.485 66.124 933.378 66.124 924.271 C 66.124 926.548 66.124 928.825 63.844 935.655 L 61.564 940.209 C 63.844 935.655 66.124 931.102 66.124 926.548 L 68.404 924.271 C 68.404 921.994 68.404 921.994 68.404 924.271 C 70.684 919.718 70.684 906.057 75.244 899.227 C 75.244 896.95 75.244 899.226 77.524 896.95 C 82.085 890.119 86.645 887.843 95.765 883.289 C 98.046 881.012 98.046 881.012 93.485 881.012 L 100.326 876.459 C 95.765 881.012 111.726 869.628 107.166 876.459 C 109.446 876.459 114.007 874.182 116.287 871.905 C 116.287 871.905 116.287 869.628 120.847 867.351 C 127.687 865.075 125.407 865.075 129.967 862.798 C 132.248 862.798 129.967 865.075 129.967 865.075 C 136.808 858.244 136.808 862.798 143.648 858.244 C 148.208 855.968 157.329 849.137 155.049 846.86 C 166.449 837.753 168.73 837.753 168.73 840.03 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 969.879,
      top: 1149.017,
      width: 84.365,
      height: 134.988,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 84.365,
      height: 134.988,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 84.365,
      height: 134.988,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 84.365,
    height: 134.988,
    viewBox: "0 0 84.365 134.988",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 84.365,
      height: 134.988,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.56 39.363 C 4.56 37.086 4.56 34.809 4.56 32.532 C 0 39.363 -2.28 46.193 6.84 50.747 C 2.28 50.747 0 57.577 2.28 57.577 C 2.28 59.854 4.56 59.854 4.56 62.131 C 4.56 62.131 4.56 59.854 2.28 59.854 C 2.28 59.854 2.28 62.131 4.56 62.131 C 9.121 68.961 9.121 78.068 6.84 87.175 C 6.84 91.729 9.12 109.943 13.681 116.773 C 13.681 116.773 13.681 119.05 15.961 119.05 C 15.961 116.773 15.961 116.773 13.681 116.773 C 18.241 119.05 20.521 121.327 25.081 123.604 C 27.362 123.604 29.642 125.881 31.922 125.881 L 31.922 128.157 C 34.202 130.434 41.042 132.711 43.323 132.711 C 45.603 132.711 45.603 132.711 47.883 132.711 C 47.883 134.988 50.163 134.988 47.883 134.988 C 50.163 132.711 54.723 134.988 57.003 132.711 C 66.124 132.711 75.244 125.881 79.805 116.773 C 82.085 114.497 79.805 109.943 84.365 107.666 C 84.365 105.39 84.365 100.836 82.085 98.559 C 82.085 96.282 82.085 94.006 82.085 91.729 C 79.805 91.729 82.085 89.452 79.805 89.452 C 77.524 89.452 79.805 91.729 77.524 91.729 C 72.964 96.282 70.684 98.559 66.124 103.113 C 63.844 105.39 61.563 107.666 59.283 107.666 C 57.003 109.943 52.443 109.943 50.163 109.943 C 50.163 109.943 50.163 109.943 47.883 107.666 C 45.603 107.666 41.042 105.39 38.762 103.113 C 36.482 103.113 36.482 100.836 36.482 98.559 C 36.482 98.559 34.202 96.282 31.922 94.006 C 29.642 91.729 27.362 89.452 27.362 89.452 C 27.362 84.898 29.642 80.345 29.642 75.791 L 27.362 73.514 C 27.362 73.514 27.362 73.514 27.362 71.238 C 31.922 68.961 29.642 66.684 27.362 68.961 C 27.362 66.684 27.362 64.407 27.362 64.407 C 27.362 64.407 27.362 62.131 25.081 62.131 C 25.081 62.131 25.081 62.13 25.081 59.854 C 25.081 57.577 25.081 57.577 25.081 57.577 C 27.362 57.577 22.801 53.023 22.801 53.023 C 22.801 50.747 25.081 48.47 25.081 46.193 C 25.081 39.363 25.081 34.809 25.081 27.979 C 22.801 27.979 25.081 30.255 22.801 30.255 C 22.801 27.979 25.081 23.425 25.081 21.148 C 25.081 21.148 25.081 18.872 27.362 18.872 C 27.362 18.872 27.362 18.872 27.362 16.595 L 29.642 16.595 C 29.642 16.595 31.922 14.318 29.642 14.318 L 25.081 9.764 C 25.081 9.764 25.081 9.764 22.801 9.764 C 22.801 9.764 22.801 9.764 25.081 9.764 C 25.081 9.764 25.081 9.764 25.081 7.488 C 25.081 9.764 22.801 9.764 22.801 12.041 L 22.801 9.764 L 25.081 7.488 C 25.081 7.488 25.081 7.488 25.081 9.764 C 27.362 9.764 25.081 7.488 27.362 7.488 C 27.362 7.488 27.362 7.488 27.362 5.211 C 29.642 5.211 27.362 5.211 29.642 5.211 C 27.362 5.211 29.642 7.488 27.362 5.211 C 27.362 5.211 27.362 5.211 27.362 2.934 C 27.362 2.934 27.362 2.934 25.081 2.934 C 25.081 2.934 25.081 2.934 25.081 0.657 L 29.642 2.934 C 29.642 2.934 25.081 -1.62 25.081 0.657 L 22.801 0.657 L 20.521 0.657 L 25.081 2.934 L 25.081 0.657 C 25.081 0.657 25.081 0.657 22.801 0.657 C 22.801 2.934 15.961 -1.62 15.961 0.657 C 18.241 0.657 18.241 0.657 18.241 2.934 C 18.241 2.934 15.961 2.934 15.961 5.211 C 15.961 5.211 15.961 5.211 13.681 5.211 C 13.681 5.211 13.681 5.211 13.681 7.488 L 13.681 9.764 C 11.401 9.764 13.681 9.764 11.401 7.488 C 11.401 7.488 11.401 7.488 11.401 9.764 L 11.401 12.041 C 11.401 12.041 11.401 12.041 9.121 12.041 L 11.401 16.595 C 11.401 16.595 11.401 16.595 11.401 18.872 L 9.121 14.318 L 11.401 21.148 L 9.121 21.148 C 9.121 21.148 9.121 23.425 9.121 25.702 C 9.121 25.702 6.84 25.702 6.84 23.425 L 6.84 25.702 C 4.56 25.702 9.121 27.979 6.84 30.255 C 6.84 32.532 4.56 32.532 4.56 34.809 L 6.84 34.809 C 4.56 34.809 4.56 37.086 2.28 34.809 C 2.28 34.809 2.28 34.809 2.28 37.086 L 4.56 37.086 C 4.56 37.086 4.56 37.086 4.56 39.363 C 4.56 39.363 4.56 39.363 2.28 39.363 C 2.28 41.639 0 41.639 0 41.639 C 4.56 37.086 4.56 39.363 4.56 39.363 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 903.755,
      top: 842.307,
      width: 100.326,
      height: 334.688,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 100.326,
      height: 334.688,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 100.326,
      height: 334.688,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 100.326,
    height: 334.688,
    viewBox: "0 0 100.326 334.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 100.326,
      height: 334.688,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.961 107.009 C 15.961 102.455 18.241 95.625 18.241 88.795 C 11.401 102.455 6.84 118.393 11.401 129.777 C 6.84 129.777 0 141.161 2.28 143.438 C 2.28 145.714 2.28 150.268 2.28 152.545 C 2.28 163.929 0 175.313 0 186.697 C 0 198.081 0 207.188 2.28 218.572 C 2.28 229.956 4.56 261.831 4.56 273.215 C 4.56 275.491 4.56 277.768 4.56 277.768 C 4.56 275.491 4.56 275.491 4.56 270.938 C 6.84 277.768 9.121 284.599 11.401 291.429 C 11.401 289.152 11.401 289.152 13.681 286.875 L 13.681 291.429 C 15.961 293.706 18.241 302.813 20.521 305.09 C 18.241 305.09 20.521 307.366 22.801 309.643 L 22.801 307.366 C 25.081 311.92 29.642 316.474 31.922 318.75 C 36.482 323.304 36.482 323.304 41.042 327.857 C 43.323 327.857 43.323 330.134 43.323 330.134 C 45.603 332.411 50.163 332.411 54.723 332.411 C 52.443 334.688 63.844 334.688 59.283 334.688 C 68.404 334.688 75.244 332.411 82.085 325.581 C 86.645 321.027 91.205 314.197 91.205 309.643 C 91.205 305.09 93.485 300.536 93.485 295.982 C 95.766 286.875 95.766 275.491 98.046 266.384 C 98.046 259.554 98.046 252.723 100.326 245.893 C 100.326 239.063 100.326 232.232 98.046 227.679 C 98.046 220.848 98.046 218.572 98.046 211.741 C 95.766 214.018 98.046 204.911 95.765 209.465 C 93.485 214.018 95.766 214.018 93.485 216.295 C 86.645 236.786 84.365 252.724 79.805 266.384 C 77.524 277.768 75.244 289.152 72.964 302.813 C 72.964 307.366 72.964 307.366 70.684 307.366 L 68.404 309.643 C 66.124 311.92 63.844 311.92 61.564 311.92 C 59.283 311.92 59.283 309.643 59.283 309.643 C 57.003 307.366 52.443 302.813 47.883 298.259 C 45.603 295.982 43.323 291.429 41.042 286.875 C 38.762 282.322 41.042 277.768 38.762 273.215 C 38.762 273.215 38.762 273.215 38.762 270.938 C 41.042 270.938 31.922 236.786 31.922 234.509 L 31.922 232.232 C 31.922 218.572 34.202 204.911 31.922 193.527 C 29.642 191.25 29.642 188.973 27.362 186.697 C 27.362 184.42 27.362 184.42 27.362 182.143 C 29.642 175.313 29.642 173.036 27.362 175.313 C 27.362 170.759 27.362 166.206 27.362 163.929 C 27.362 161.652 27.362 159.375 27.362 159.375 C 27.362 157.098 27.362 157.098 29.642 157.098 C 29.642 152.545 29.642 154.822 31.922 150.268 C 34.202 150.268 34.202 138.884 34.202 136.607 C 36.482 132.054 38.762 127.5 41.042 122.947 C 45.603 107.009 45.603 91.072 47.883 79.688 C 45.603 79.688 47.883 81.964 45.603 81.964 C 47.883 75.134 50.163 68.304 52.443 61.473 C 52.443 59.197 54.723 59.196 54.723 59.196 C 57.003 56.92 54.723 56.92 54.723 56.92 L 57.003 56.92 C 57.003 54.643 59.283 54.643 59.283 52.366 L 59.283 50.089 C 61.564 50.089 59.283 47.813 61.564 47.813 C 61.564 47.813 61.564 47.813 61.564 45.536 C 61.564 43.259 61.564 34.152 61.564 31.875 C 61.564 29.598 61.564 29.598 61.564 29.598 L 61.564 27.321 L 61.564 25.045 C 61.564 25.045 61.564 25.045 63.844 25.045 C 63.844 22.768 63.844 22.768 63.844 22.768 C 61.564 25.045 59.283 29.598 57.003 31.875 C 57.003 29.598 59.283 29.598 59.283 27.321 C 61.564 25.045 61.564 22.768 63.844 20.491 C 63.844 20.491 61.564 18.214 63.844 18.214 C 66.124 18.214 63.844 15.938 66.124 15.938 C 66.124 18.214 66.124 18.214 66.124 20.491 C 68.404 20.491 68.404 18.214 68.404 15.938 C 68.404 15.938 68.404 13.661 68.404 11.384 C 68.404 11.384 68.404 11.384 70.684 9.107 C 70.684 6.83 70.684 6.83 70.684 6.83 C 68.404 6.83 68.404 11.384 68.404 9.107 C 68.404 9.107 68.404 6.83 68.404 4.554 C 68.404 4.554 68.404 4.554 66.124 4.554 C 66.124 2.277 66.124 2.277 66.124 0 C 66.124 0 66.124 0 66.124 2.277 C 66.124 0 68.404 13.661 68.404 11.384 C 68.404 11.384 66.124 0 66.124 2.277 L 63.844 2.277 L 63.844 4.554 C 63.844 6.83 61.564 6.83 61.564 6.83 C 61.564 4.554 66.124 13.661 63.844 11.384 L 63.844 6.83 L 63.844 4.554 L 63.844 2.277 C 63.844 9.107 57.003 -2.277 57.003 2.277 C 59.283 0 59.283 2.277 59.283 6.83 C 59.283 6.83 57.003 6.83 57.003 9.107 C 57.003 11.384 57.003 9.107 57.003 11.384 L 54.723 13.661 C 54.723 15.937 54.723 15.938 54.723 15.938 C 54.723 18.214 52.443 20.491 52.443 20.491 C 52.443 20.491 50.163 22.768 50.163 20.491 C 50.163 18.214 52.443 22.768 52.443 18.214 C 50.163 18.214 52.443 15.938 52.443 15.938 C 52.443 15.938 50.163 18.214 50.163 20.491 C 50.163 22.768 50.163 25.045 47.883 25.045 L 47.883 27.321 L 47.883 29.598 L 47.883 38.705 C 47.883 40.982 45.603 40.982 45.603 40.982 C 45.603 40.982 47.883 27.321 47.883 29.598 C 47.883 29.598 45.603 45.536 43.323 45.536 L 43.323 47.813 C 43.323 50.089 43.323 47.813 41.042 47.813 L 38.762 47.813 C 38.762 50.089 36.482 54.643 36.482 56.92 C 36.482 56.92 34.202 54.643 34.202 52.366 L 34.202 50.089 C 34.202 52.366 31.922 52.366 34.202 54.643 C 31.922 54.643 34.202 61.473 31.922 63.75 C 31.922 63.75 31.922 63.75 31.922 66.027 C 29.642 68.304 29.642 70.58 29.642 75.134 C 29.642 77.411 29.642 77.411 31.922 75.134 L 31.922 77.411 C 29.642 75.134 29.642 81.964 27.362 79.688 C 27.362 79.688 27.362 81.964 27.362 84.241 C 27.362 84.241 29.642 84.241 27.362 86.518 C 27.362 88.795 27.362 88.795 25.081 91.072 C 25.081 91.072 25.081 91.072 22.801 91.072 C 22.801 93.348 20.521 93.348 20.521 95.625 C 20.521 97.902 20.521 100.179 20.521 100.179 C 18.241 107.009 18.241 107.009 15.961 107.009 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1042.844,
      top: 1138.29,
      width: 123.127,
      height: 183.036,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 123.127,
      height: 183.036,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 123.127,
      height: 183.036,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 123.127,
    height: 183.036,
    viewBox: "0 0 123.127 183.036",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 123.127,
      height: 183.036,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 72.964 154.822 C 75.244 154.822 77.524 154.822 82.085 154.822 C 75.244 152.545 68.404 147.991 61.564 157.098 C 61.564 152.545 57.003 147.991 54.723 150.268 C 52.443 150.268 52.443 150.268 50.163 150.268 C 41.042 150.268 34.202 143.438 34.202 134.33 C 31.922 129.777 31.922 113.839 34.202 109.286 L 34.202 107.009 C 34.202 109.286 34.202 109.286 31.922 109.286 C 31.922 104.732 29.642 102.455 29.642 100.179 C 29.642 100.179 27.362 100.179 27.362 102.455 L 27.362 100.179 C 25.081 97.902 27.362 95.625 27.362 93.348 C 27.362 93.348 29.642 93.348 29.642 91.072 C 31.922 86.518 31.922 81.964 34.202 77.411 C 34.202 77.411 34.202 77.411 36.482 77.411 L 38.762 72.857 C 38.762 72.857 41.042 70.58 41.042 72.857 C 41.042 68.304 43.322 66.027 43.322 63.75 C 47.883 54.643 54.723 43.259 57.003 34.152 C 59.283 29.598 57.003 25.045 61.564 22.768 C 61.564 18.214 63.844 13.661 61.564 11.384 C 63.844 6.83 63.844 4.554 63.844 2.277 C 61.563 2.277 63.844 0 61.564 0 C 59.283 0 59.283 0 59.283 0 C 52.443 6.83 45.603 15.938 38.762 22.768 C 36.482 29.598 31.922 34.152 27.362 40.982 C 22.801 47.813 20.521 54.643 18.241 61.473 C 18.241 63.75 15.961 63.75 13.681 63.75 C 11.401 70.58 6.84 77.411 4.56 86.518 C 4.56 91.072 2.28 93.348 0 97.902 C 0 97.902 0 104.732 0 111.563 C 0 118.393 2.28 122.947 2.28 125.223 C 2.28 125.223 2.28 125.223 2.28 127.5 C 2.28 136.607 2.28 145.714 6.84 154.822 C 9.121 154.822 11.401 157.098 11.401 157.098 C 11.401 159.375 13.681 157.098 13.681 159.375 C 13.681 166.206 18.241 166.206 15.961 163.929 C 18.241 166.206 22.801 168.482 25.081 170.759 C 27.362 170.759 27.362 170.759 29.642 173.036 C 31.922 173.036 31.922 173.036 31.922 175.313 C 34.202 175.313 34.202 177.589 36.482 177.589 C 36.482 179.866 45.603 177.589 45.603 177.589 C 50.163 177.589 50.163 182.143 54.723 182.143 C 63.844 184.42 75.244 182.143 86.645 177.589 C 86.645 175.313 84.365 179.866 84.365 177.589 C 88.925 175.313 98.046 173.036 102.606 166.206 L 104.886 163.929 C 104.886 163.929 104.886 163.929 104.886 161.652 L 107.166 161.652 C 107.166 159.375 109.446 161.652 109.446 159.375 C 109.446 159.375 109.446 159.375 109.446 157.098 C 111.726 157.098 109.446 154.822 111.726 157.098 C 111.726 157.098 111.726 150.268 111.726 147.991 L 111.726 145.714 C 111.726 145.714 111.726 145.714 114.006 145.714 L 114.006 143.438 C 111.726 145.714 109.446 145.714 107.166 145.714 L 109.446 143.438 C 111.726 143.438 111.726 141.161 114.006 141.161 L 114.006 138.884 C 114.006 138.884 114.006 138.884 116.287 138.884 L 116.287 141.161 C 118.567 141.161 118.567 138.884 118.567 138.884 L 118.567 136.607 C 118.567 136.607 118.567 136.607 120.847 136.607 C 120.847 136.607 118.567 138.884 118.567 136.607 C 118.567 136.607 118.567 134.33 120.847 134.33 L 120.847 132.054 C 120.847 132.054 120.847 132.054 118.567 132.054 L 116.287 132.054 C 116.287 129.777 118.567 138.884 118.567 136.607 L 118.567 134.33 C 118.567 134.33 118.567 134.33 118.567 132.054 L 118.567 129.777 C 116.287 132.054 114.006 125.223 111.726 127.5 C 114.006 127.5 114.006 127.5 111.726 129.777 L 109.446 129.777 L 107.166 129.777 C 107.166 129.777 107.166 129.777 104.886 132.054 L 102.606 134.33 C 102.606 134.33 100.326 134.33 100.326 132.054 C 100.326 129.777 102.606 134.33 102.606 132.054 C 100.326 132.054 102.606 129.777 102.606 129.777 C 102.606 129.777 100.326 129.777 100.326 132.054 C 100.326 132.054 100.326 134.33 98.046 134.33 L 98.046 141.161 C 98.046 141.161 95.765 141.161 95.765 143.438 L 98.046 136.607 L 95.765 145.714 L 95.765 147.991 C 95.765 147.991 95.765 147.991 93.485 147.991 C 93.485 150.268 93.485 150.268 91.205 152.545 C 91.205 152.545 91.205 152.545 91.205 154.822 C 91.205 154.822 91.205 152.545 88.925 152.545 C 88.925 152.545 88.925 152.545 88.925 150.268 C 88.925 150.268 88.925 150.268 88.925 152.545 C 86.645 152.545 88.925 154.822 86.645 154.822 C 84.365 154.822 84.365 154.822 82.085 154.822 L 82.085 157.098 L 79.805 157.098 C 79.805 154.822 77.524 154.822 77.524 152.545 C 77.524 152.545 77.524 152.545 75.244 152.545 L 75.244 154.822 C 72.964 154.822 75.244 154.822 72.964 154.822 C 72.964 154.822 72.964 154.822 72.964 152.545 C 70.684 154.822 70.684 150.268 70.684 152.545 C 75.244 157.098 75.244 157.098 72.964 154.822 C 72.964 157.098 72.964 157.098 72.964 154.822 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 789.749,
      top: 933.379,
      width: 210.594,
      height: 398.438,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 210.594,
      height: 398.438,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 210.594,
      height: 398.438,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 210.594,
    height: 398.438,
    viewBox: "0 0 210.594 398.438",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 210.594,
      height: 398.438,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 184.691 336.965 L 184.691 339.241 C 184.691 330.134 184.691 321.027 182.41 311.92 C 182.41 323.304 182.41 334.688 180.13 341.518 C 177.85 350.625 177.85 357.456 175.57 364.286 C 171.01 362.009 157.329 368.84 157.329 371.116 C 155.049 371.116 155.049 373.393 152.769 373.393 C 150.489 373.393 148.208 375.67 148.208 375.67 C 148.208 375.67 152.769 373.393 155.049 373.393 C 152.769 375.67 148.208 375.67 148.208 375.67 C 148.208 375.67 145.928 375.67 143.648 375.67 C 141.368 375.67 136.808 373.393 134.528 373.393 C 127.687 371.116 123.127 366.563 118.567 362.009 C 114.007 357.456 109.446 352.902 107.166 346.072 C 104.886 339.241 100.326 327.857 93.485 321.027 C 88.925 316.474 82.085 311.92 72.964 307.366 C 70.684 307.366 68.404 305.09 66.124 305.09 C 63.844 305.09 63.844 305.09 63.844 302.813 C 61.564 302.813 61.564 300.536 61.564 298.259 C 59.283 295.982 57.003 286.875 57.003 280.045 C 57.003 273.215 54.723 266.384 54.723 261.831 C 54.723 259.554 54.723 257.277 52.443 252.723 C 52.443 257.277 52.443 257.277 52.443 261.831 C 47.883 250.447 45.603 239.063 43.323 232.232 C 43.323 234.509 43.323 234.509 43.323 239.063 L 43.323 234.509 C 41.042 229.956 38.762 220.848 36.482 214.018 C 38.762 214.018 36.482 211.741 36.482 207.188 L 36.482 209.465 C 34.202 202.634 31.922 193.527 29.642 186.697 C 27.362 182.143 25.081 175.313 22.801 170.759 C 22.801 168.482 22.801 168.482 22.801 166.206 C 22.801 163.929 20.521 159.375 20.521 157.098 C 22.801 157.098 20.521 147.991 22.801 152.545 C 20.521 145.714 22.801 136.607 20.521 129.777 C 20.521 122.947 22.801 113.839 25.081 109.286 C 27.362 104.732 29.642 100.179 36.482 95.625 C 38.762 93.348 43.322 91.071 45.603 88.795 L 50.163 86.518 C 52.443 84.241 54.723 84.241 57.003 81.964 C 61.564 77.411 68.404 72.857 72.964 66.027 C 79.805 59.196 86.645 50.089 98.046 43.259 C 104.886 36.429 114.007 27.321 116.287 22.768 C 125.407 15.938 127.687 13.661 134.528 6.83 C 132.248 6.83 134.528 6.83 134.528 4.554 L 136.808 2.277 L 143.648 4.554 C 145.928 4.554 150.489 6.83 145.928 4.554 L 143.648 2.277 L 141.368 0 L 134.528 4.554 C 129.967 6.83 129.967 6.83 125.407 9.107 C 102.606 22.768 77.524 38.705 54.723 54.643 C 50.163 59.196 47.883 61.473 43.323 63.75 C 41.042 66.027 41.042 66.027 41.042 66.027 L 34.202 70.58 C 25.081 75.134 13.681 81.964 6.84 95.625 C 2.28 102.455 2.28 109.286 2.28 113.839 C 2.28 118.393 0 125.223 0 132.054 C 0 143.438 0 154.822 2.28 163.929 C 4.56 168.482 2.28 173.036 4.56 175.313 C 6.84 179.866 6.84 184.42 9.121 188.973 L 11.401 195.804 C 11.401 198.081 13.681 198.081 13.681 200.357 C 15.961 207.188 18.241 216.295 20.521 225.402 C 22.801 234.509 22.801 243.616 25.081 252.723 L 25.081 255 C 25.081 255 27.362 270.938 31.922 284.599 C 34.202 291.429 36.482 298.259 38.762 305.09 C 41.042 311.92 45.603 316.474 45.603 316.474 L 47.883 318.75 C 50.163 321.027 52.443 323.304 57.003 325.581 C 59.283 325.581 61.564 327.857 63.844 327.857 C 68.404 330.134 70.684 332.411 72.964 334.688 C 77.524 339.241 82.085 346.072 84.365 352.902 C 86.645 357.456 91.205 362.009 93.485 364.286 C 95.766 368.84 95.766 366.563 98.046 371.116 C 102.606 382.5 109.446 384.777 104.886 380.224 C 111.726 384.777 118.567 391.608 125.407 393.884 C 127.687 396.161 132.248 396.161 134.528 396.161 C 136.808 396.161 139.088 398.438 141.368 398.438 C 145.928 398.438 148.208 398.438 150.489 398.438 C 152.769 398.438 155.049 398.438 159.609 396.161 C 161.889 398.438 177.85 384.777 180.13 384.777 C 189.251 380.224 196.091 375.67 200.651 366.563 C 209.772 355.179 212.052 339.241 209.772 325.581 C 209.772 311.92 207.492 298.259 202.932 289.152 C 200.651 289.152 205.212 293.706 202.932 295.982 C 198.371 282.322 193.811 268.661 186.971 257.277 C 186.971 255 184.691 252.724 184.691 250.447 C 182.41 245.893 182.41 248.17 180.13 245.893 L 180.13 243.616 C 175.57 241.34 175.57 236.786 171.01 234.509 C 171.01 234.509 168.73 234.509 168.73 232.232 C 168.73 232.232 164.169 229.956 164.169 227.679 C 164.169 227.679 161.889 227.679 161.889 225.402 C 159.609 223.125 141.368 218.572 139.088 218.572 C 136.808 218.572 134.528 218.572 136.808 218.572 L 134.528 218.572 L 132.248 218.572 C 132.248 218.572 132.248 218.572 132.248 216.295 C 129.967 216.295 127.687 216.295 125.407 216.295 C 129.967 218.572 136.808 220.848 141.368 223.125 C 139.088 223.125 134.528 220.848 132.248 220.848 C 129.967 218.572 123.127 216.295 120.847 216.295 C 120.847 216.295 118.567 218.572 116.287 216.295 C 116.287 214.018 114.007 216.295 111.726 214.018 C 114.007 214.018 116.287 214.018 118.567 214.018 C 118.567 211.741 114.007 211.741 111.726 211.741 C 111.726 211.741 107.166 211.741 104.886 211.741 C 107.166 209.465 102.606 211.741 100.326 209.465 C 98.046 209.465 98.046 209.465 98.046 209.465 C 98.046 211.741 104.886 209.465 102.606 211.741 C 102.606 211.741 98.046 211.741 95.765 211.741 C 95.765 211.741 98.046 211.741 95.765 214.018 C 93.485 214.018 91.205 214.018 91.205 214.018 L 93.485 214.018 C 91.205 214.018 107.166 209.465 104.886 209.465 C 104.886 209.465 88.925 214.018 91.205 214.018 C 93.485 214.018 91.205 216.295 91.205 216.295 L 93.485 216.295 C 95.766 216.295 95.765 218.572 95.765 218.572 C 91.205 218.572 107.166 214.018 102.606 214.018 L 104.886 214.018 C 102.606 214.018 100.326 214.018 98.046 214.018 C 98.046 214.018 95.765 214.018 95.765 216.295 C 93.485 216.295 91.205 216.295 93.485 218.572 C 102.606 218.572 88.925 225.402 95.765 225.402 C 91.205 223.125 95.765 223.125 100.326 223.125 C 100.326 223.125 102.606 225.402 104.886 225.402 C 107.166 225.402 107.166 225.402 107.166 225.402 C 109.446 225.402 111.726 225.402 109.446 227.679 C 111.726 227.679 111.726 227.679 114.006 227.679 C 116.287 227.679 114.007 227.679 116.287 227.679 C 118.567 227.679 123.127 229.956 125.407 229.956 C 125.407 229.956 127.687 232.232 125.407 234.509 C 120.847 234.509 127.687 232.232 123.127 232.232 C 125.407 234.509 118.567 232.232 118.567 232.232 C 120.847 232.232 123.127 234.509 125.407 234.509 C 127.687 234.509 132.248 234.509 134.528 236.786 C 134.528 236.786 134.528 236.786 132.248 236.786 L 134.528 236.786 C 136.808 236.786 136.808 236.786 136.808 239.063 C 136.808 239.063 141.368 239.063 143.648 241.34 C 148.209 241.34 150.489 243.616 150.489 243.616 C 152.769 243.616 152.769 245.893 155.049 245.893 C 155.049 245.893 136.808 236.786 139.088 239.063 C 141.368 239.063 161.889 248.17 159.609 250.447 C 161.889 250.447 161.889 252.723 161.889 252.723 C 164.169 255 159.609 252.724 161.889 255 L 161.889 257.277 C 166.45 259.554 168.73 264.107 171.01 268.661 C 168.73 268.661 168.73 266.384 166.45 266.384 L 164.169 264.107 C 166.449 266.384 166.45 268.661 168.73 270.938 L 168.73 273.215 C 168.73 275.491 175.57 282.322 175.57 286.875 C 175.57 286.875 175.57 286.875 177.85 289.152 C 180.13 293.706 180.13 298.259 180.13 302.813 C 182.41 305.09 182.41 305.09 182.41 302.813 L 182.41 307.366 C 180.13 305.09 182.41 314.197 180.13 311.92 C 180.13 314.197 180.13 314.197 180.13 316.474 C 180.13 316.474 182.41 316.474 182.41 318.75 C 182.41 323.304 182.41 321.027 182.41 325.581 C 182.41 325.581 182.41 325.581 180.13 325.581 C 182.41 330.134 180.13 330.134 180.13 334.688 C 180.13 336.965 180.13 341.518 182.41 341.518 C 186.971 339.241 186.971 339.241 184.691 336.965 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1113.528,
      top: 1017.621,
      width: 310.152,
      height: 267.746,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 310.152,
      height: 267.746,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 310.152,
      height: 267.746,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 310.152,
    height: 267.746,
    viewBox: "0 0 310.152 267.746",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 310.152,
      height: 267.746,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 150.489 75.134 L 152.769 77.411 C 143.648 72.857 132.248 68.304 123.127 63.75 C 132.248 70.58 143.648 77.411 155.049 81.964 C 164.169 88.795 173.29 91.072 184.691 91.072 C 184.691 95.625 200.651 111.563 202.932 111.563 C 207.492 113.839 212.052 116.116 216.612 118.393 C 212.052 116.116 209.772 116.116 207.492 113.839 C 209.772 116.116 214.332 116.116 216.612 118.393 C 230.293 125.223 243.974 134.33 257.655 143.438 C 271.335 152.545 282.736 163.929 287.296 175.313 C 289.577 177.589 289.577 184.42 289.577 188.973 C 289.577 193.527 289.576 198.081 285.016 202.634 C 275.896 214.018 262.215 225.402 255.375 229.956 C 253.094 232.232 250.814 232.232 248.534 234.509 C 253.094 232.232 253.094 232.232 255.375 229.956 C 250.814 234.509 246.254 236.786 243.974 239.063 C 241.694 241.34 237.133 241.339 234.853 243.616 C 237.133 243.616 237.133 245.893 239.414 245.893 C 237.133 245.893 237.133 245.893 234.853 245.893 C 232.573 248.17 223.453 248.17 218.893 245.893 C 221.173 245.893 216.612 243.616 214.332 241.34 L 214.332 243.616 C 212.052 241.339 209.772 241.34 207.492 239.063 L 202.932 229.956 C 198.371 225.402 193.811 218.572 189.251 214.018 C 186.971 214.018 186.971 214.018 186.971 211.741 L 177.85 202.634 C 180.13 202.634 171.01 193.527 175.57 198.081 C 168.73 193.527 161.889 184.42 155.049 179.866 C 143.648 168.482 129.967 159.375 114.006 152.545 C 98.046 145.714 82.085 141.161 68.404 134.33 C 59.283 129.777 47.883 127.5 38.762 118.393 C 29.642 113.839 20.521 102.455 15.961 100.179 C 9.121 91.071 6.84 86.518 4.56 75.134 C 2.28 77.411 2.28 63.75 2.28 70.58 C 0 79.688 2.28 79.688 2.28 86.518 C 9.121 120.67 36.482 143.438 63.844 157.098 C 72.964 161.652 82.085 163.929 91.205 168.482 C 100.326 173.036 107.166 177.589 116.287 182.143 C 125.407 186.697 132.248 193.527 141.368 200.357 C 148.208 207.188 157.329 214.018 164.169 220.848 C 166.449 223.125 168.73 227.679 171.01 229.956 C 177.85 236.786 184.69 243.616 189.251 250.447 C 191.531 252.724 193.811 255 196.091 257.277 C 198.371 259.554 200.651 261.831 205.212 261.831 C 212.052 264.107 216.612 266.384 223.453 266.384 C 223.453 266.384 223.453 266.384 221.173 266.384 C 234.853 268.661 243.974 268.661 255.375 261.831 L 257.655 259.554 C 259.935 259.554 271.335 250.447 282.736 239.063 C 294.137 227.679 303.257 214.018 303.257 211.741 C 303.257 209.465 303.257 209.464 305.537 207.188 C 316.938 182.143 305.537 152.545 289.577 138.884 C 285.016 136.607 280.456 134.33 278.176 132.054 C 275.896 129.777 273.616 129.777 271.335 127.5 C 266.775 118.393 259.935 116.116 262.215 120.67 C 255.375 116.116 248.534 111.563 243.974 107.009 C 241.694 104.732 239.414 104.732 234.853 102.455 C 232.573 100.179 230.293 100.179 230.293 97.902 C 223.453 93.348 225.733 95.625 221.173 88.795 C 221.173 86.518 205.212 79.688 202.932 77.411 C 196.091 72.857 193.811 66.027 184.691 61.473 C 161.889 47.812 136.808 38.705 118.567 29.598 C 118.567 31.875 123.127 31.875 123.127 34.152 C 111.726 29.598 100.326 22.768 86.645 15.937 C 84.365 13.661 82.085 13.661 82.085 11.384 C 77.524 9.107 79.805 11.384 77.524 9.107 L 77.524 6.83 C 75.244 6.83 72.964 4.554 72.964 4.554 C 70.684 2.277 68.404 2.277 66.124 2.277 C 66.124 2.277 63.844 2.277 61.564 2.277 C 61.564 0 54.723 2.277 54.723 0 C 52.443 0 52.443 0 50.163 0 C 47.883 0 41.042 2.277 36.482 4.554 C 31.922 6.83 27.362 11.384 25.081 13.661 C 22.801 15.937 22.801 15.937 22.801 15.937 L 20.521 18.214 L 18.241 20.491 L 15.961 20.491 C 13.681 22.768 13.681 25.045 11.401 25.045 C 15.961 20.491 22.801 18.214 27.362 15.937 C 25.081 18.214 22.801 20.491 20.521 20.491 C 18.241 22.768 11.401 25.045 9.121 29.598 C 9.121 29.598 9.121 31.875 6.84 34.152 C 4.56 34.152 4.56 36.429 4.56 38.705 C 4.56 36.429 6.84 34.152 9.121 31.875 C 6.84 31.875 4.56 36.429 4.56 38.705 C 4.56 38.705 2.28 43.259 2.28 47.813 C 2.28 45.536 0 50.089 0 52.366 C 0 54.643 0 56.92 0 54.643 C 0 54.643 2.28 47.812 2.28 50.089 C 2.28 50.089 0 54.643 0 56.92 C 0 56.92 0 54.643 2.28 56.92 C 2.28 59.196 2.28 61.473 2.28 63.75 L 2.28 61.473 C 2.28 63.75 2.28 59.196 0 54.643 C 0 50.089 0 45.536 0 47.813 C 0 47.813 0 66.027 2.28 63.75 C 2.28 61.473 4.56 66.027 4.56 63.75 L 4.56 61.473 C 4.56 59.196 6.84 56.92 6.84 59.196 C 6.84 63.75 4.56 45.536 4.56 50.089 L 4.56 47.813 C 4.56 50.089 4.56 54.643 2.28 54.643 C 2.28 54.643 2.28 56.92 2.28 59.196 C 2.28 61.473 2.28 63.75 2.28 61.473 C 2.28 52.366 9.121 68.304 9.121 59.196 C 6.84 63.75 6.84 56.92 9.121 54.643 C 9.121 54.643 11.401 52.366 11.401 50.089 C 11.401 47.812 11.401 47.813 11.401 47.813 C 11.401 45.536 13.681 43.259 13.681 45.536 C 13.681 43.259 15.961 43.259 15.961 40.982 C 15.961 38.705 15.961 40.982 15.961 38.705 C 18.241 36.429 20.521 31.875 22.801 31.875 C 25.081 31.875 27.362 29.598 27.362 31.875 C 25.081 34.152 27.362 29.598 25.081 31.875 C 27.362 31.875 22.801 36.429 22.801 36.429 C 25.081 36.429 25.081 34.152 27.362 31.875 C 29.642 29.598 31.922 27.321 34.202 27.321 C 34.202 27.321 34.202 27.321 34.202 29.598 L 36.482 27.321 C 36.482 25.045 38.762 25.045 38.762 25.045 C 38.762 25.045 41.042 22.768 45.603 20.491 C 47.883 18.214 52.443 18.214 52.443 18.214 C 54.723 18.214 54.723 18.214 57.003 18.214 C 57.003 18.214 52.443 18.214 47.883 20.491 C 43.323 22.768 41.042 25.045 41.042 25.045 C 41.042 25.045 45.603 20.491 52.443 20.491 C 57.003 18.214 63.844 20.491 63.844 20.491 C 66.124 20.491 66.124 20.491 66.124 20.491 C 68.404 22.768 63.844 20.491 66.124 22.768 L 68.404 25.045 C 72.964 25.045 77.524 29.598 82.085 29.598 C 79.805 29.598 79.805 29.598 75.244 29.598 L 72.964 29.598 C 75.244 31.875 77.524 31.875 79.805 31.875 L 82.085 31.875 C 82.085 34.152 93.485 34.152 95.765 38.705 C 98.046 38.705 95.765 38.705 98.046 38.705 C 102.606 40.982 104.886 43.259 109.446 45.536 C 111.726 45.536 111.726 45.536 109.446 43.259 L 114.006 45.536 C 109.446 45.536 120.847 50.089 116.287 50.089 C 116.287 50.089 118.567 52.366 120.847 52.366 C 120.847 52.366 120.847 52.366 125.407 52.366 C 127.687 54.643 127.687 54.643 129.967 56.92 C 129.967 56.92 129.967 56.92 129.967 59.196 C 134.528 59.196 132.248 61.473 136.808 63.75 C 139.088 63.75 145.928 66.027 145.928 66.027 C 152.769 75.134 150.489 75.134 150.489 75.134 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1149.428,
      top: 937.039,
      width: 328.92,
      height: 235.402,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 328.92,
      height: 235.402,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 328.92,
      height: 235.402,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 328.920,
    height: 235.402,
    viewBox: "0 0 328.920 235.402",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 328.92,
      height: 235.402,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 189.832 157.992 L 187.552 155.715 C 196.672 160.268 205.793 167.099 214.913 173.929 C 196.672 157.992 176.151 139.777 155.63 137.5 C 155.63 132.947 137.389 119.286 135.109 119.286 C 130.548 117.009 125.988 117.009 121.428 114.733 C 123.708 114.733 128.268 117.009 130.548 119.286 C 125.988 117.009 123.708 117.009 121.428 114.733 C 100.907 107.902 89.506 103.349 75.825 98.795 C 71.265 96.518 68.985 96.518 64.425 94.241 L 57.584 91.965 C 55.304 91.965 55.304 91.965 53.024 89.688 C 50.744 87.411 46.184 85.134 41.623 82.858 C 37.063 80.581 34.783 78.304 32.503 76.027 C 27.943 71.474 21.102 62.366 25.662 50.982 C 27.943 39.599 39.343 32.768 46.184 30.491 C 48.464 30.491 50.744 28.215 53.024 28.215 C 50.744 28.215 50.744 28.215 46.184 30.491 C 53.024 25.938 59.864 23.661 68.985 23.661 C 66.705 23.661 66.705 21.384 64.425 21.384 C 66.705 21.384 66.705 21.384 68.985 21.384 C 73.545 19.107 82.666 23.661 87.226 25.938 C 84.946 25.938 89.506 28.215 91.786 30.491 L 89.506 28.215 C 103.187 35.045 116.868 39.599 128.268 46.429 C 130.548 46.429 130.548 48.706 130.548 48.706 L 141.949 53.259 C 139.669 53.259 151.07 57.813 144.229 57.813 C 153.35 60.09 160.19 64.643 169.311 66.92 C 182.991 73.75 201.232 78.304 214.913 80.581 C 228.594 85.134 244.555 91.965 258.236 98.795 C 267.356 103.349 278.757 105.625 287.877 114.733 C 296.998 119.286 306.118 130.67 308.399 132.947 C 312.959 144.331 315.239 148.884 319.799 157.992 C 319.799 155.715 324.359 167.099 324.359 162.545 C 324.359 155.715 322.079 155.715 324.359 148.884 C 324.359 142.054 322.079 132.947 317.519 126.117 C 312.959 119.286 308.399 112.456 303.838 105.625 C 292.438 94.241 278.757 85.134 267.356 78.304 C 249.115 69.197 228.594 60.09 208.073 55.536 C 187.552 50.982 167.031 41.875 148.79 35.045 C 144.229 32.768 141.949 30.491 139.669 28.215 C 130.548 23.661 123.708 21.384 112.307 16.831 L 100.907 12.277 C 96.346 10 91.786 7.724 84.946 5.447 C 73.545 0.893 64.425 -1.384 50.744 0.893 C 50.744 0.893 48.464 0.893 48.464 3.17 C 46.184 3.17 30.223 7.724 16.542 21.384 C 2.861 35.045 0.581 53.259 0.581 55.536 C 0.581 57.813 0.581 57.813 0.581 60.09 C -1.699 71.474 2.861 87.411 11.982 96.518 C 16.542 101.072 21.102 105.625 25.662 110.179 C 30.223 112.456 34.783 114.733 39.343 117.009 C 43.903 119.286 50.744 119.286 53.024 119.286 C 55.304 121.563 57.584 119.286 59.864 121.563 C 66.705 128.393 73.545 128.393 68.985 126.117 C 75.825 128.393 82.666 130.67 89.506 132.947 C 91.786 132.947 96.347 135.224 98.627 135.224 C 100.907 135.224 103.187 137.5 103.187 137.5 C 110.027 139.777 107.747 139.777 114.588 144.331 C 114.588 146.608 132.829 151.161 132.829 153.438 L 130.548 153.438 C 137.389 157.992 141.949 162.545 148.79 167.099 C 167.031 180.759 189.832 194.42 208.073 205.804 C 208.073 205.804 203.513 203.527 203.513 201.251 C 208.073 205.804 214.913 210.358 219.473 212.634 L 221.754 214.911 L 226.314 219.465 C 228.594 221.742 233.154 224.018 235.434 226.295 C 237.715 228.572 242.275 230.849 244.555 230.849 C 251.395 233.126 249.115 230.849 253.675 233.126 L 253.675 235.402 C 260.516 235.402 265.076 235.402 269.636 235.402 C 269.636 235.402 271.917 233.126 274.197 233.126 C 274.197 235.402 278.757 230.849 278.757 233.126 L 281.037 233.126 C 281.037 233.126 287.877 228.572 292.438 224.018 C 294.718 219.465 299.278 217.188 299.278 217.188 C 301.558 214.911 301.558 214.911 299.278 214.911 L 301.558 212.634 L 303.838 210.358 L 306.118 210.358 C 308.399 208.081 308.399 208.081 310.679 205.804 C 306.118 210.358 299.278 212.634 294.718 214.911 C 296.998 212.634 299.278 212.634 301.558 210.358 C 303.838 210.358 308.399 205.804 312.959 201.251 C 312.959 201.251 312.959 198.974 315.239 196.697 C 317.519 196.697 317.519 194.42 319.799 192.143 C 319.799 194.42 317.519 196.697 315.239 198.974 C 317.519 198.974 319.799 194.42 322.079 192.143 C 322.079 192.143 324.359 185.313 326.64 183.036 C 326.64 185.313 328.92 180.759 328.92 178.483 C 328.92 176.206 328.92 173.929 328.92 176.206 C 328.92 176.206 326.64 185.313 326.64 180.759 C 326.64 180.759 328.92 176.206 328.92 173.929 C 328.92 173.929 328.92 176.206 326.64 173.929 C 326.64 171.652 326.64 167.099 326.64 164.822 L 326.64 167.099 C 326.64 164.822 328.92 171.652 328.92 176.206 C 328.92 180.759 328.92 185.313 328.92 183.036 C 328.92 183.036 328.92 178.483 328.92 173.929 C 328.92 167.099 326.64 162.545 326.64 164.822 C 326.64 167.099 324.359 162.545 324.359 164.822 L 324.359 167.099 C 324.359 171.652 322.079 171.652 322.079 171.652 C 322.079 169.376 324.359 173.929 324.359 176.206 C 324.359 180.759 324.359 183.036 324.359 180.759 L 324.359 183.036 C 324.359 180.759 324.359 176.206 326.64 173.929 C 326.64 173.929 326.64 171.652 324.359 169.375 C 324.359 167.099 324.359 164.822 322.079 164.822 C 322.079 171.652 319.799 169.376 319.799 167.099 C 317.519 164.822 315.239 164.822 315.239 169.375 C 315.239 164.822 317.519 171.652 317.519 176.206 C 317.519 176.206 315.239 178.483 315.239 180.759 C 315.239 183.036 315.239 183.036 315.239 183.036 C 315.239 185.313 312.959 187.59 312.959 185.313 C 312.959 187.59 310.679 187.59 310.679 189.867 C 310.679 192.143 310.679 189.867 310.679 192.143 C 308.399 194.42 306.118 196.697 303.838 198.974 C 301.558 198.974 299.278 198.974 299.278 196.697 C 301.558 194.42 299.278 198.974 301.558 196.697 C 299.278 196.697 303.838 194.42 303.838 192.143 C 301.558 192.143 299.278 194.42 299.278 196.697 C 296.998 198.974 294.718 201.251 292.438 201.251 C 292.438 201.251 292.438 201.251 292.438 198.974 L 292.438 196.697 C 292.438 198.974 290.158 198.974 290.158 198.974 C 290.158 198.974 287.877 201.251 283.317 203.527 C 281.037 205.804 276.477 208.081 276.477 208.081 C 274.197 208.081 274.197 208.081 271.916 210.358 C 271.916 210.358 290.158 201.251 285.597 201.251 C 285.597 201.251 281.037 205.804 274.197 208.081 C 269.636 210.358 262.796 212.634 262.796 212.634 C 260.516 212.634 260.516 212.634 260.516 214.911 C 258.236 214.911 260.516 212.634 258.236 212.634 L 255.956 212.634 C 251.395 214.911 246.835 212.634 242.275 210.358 C 244.555 210.358 244.555 210.358 246.835 210.358 L 249.115 210.358 C 246.835 210.358 244.555 208.081 242.275 208.081 C 242.275 205.804 233.154 203.527 230.874 198.974 C 228.594 198.974 230.874 198.974 228.594 198.974 C 224.034 194.42 221.754 192.143 217.193 189.867 C 214.913 189.867 214.913 189.867 217.193 192.143 L 219.473 185.313 C 224.034 185.313 214.913 178.483 219.473 180.759 C 219.473 180.759 217.193 178.483 214.913 178.483 C 214.913 178.483 212.633 178.483 210.353 178.483 C 208.073 176.206 208.073 176.206 205.793 173.929 C 205.793 173.929 205.793 173.929 205.793 171.652 C 201.232 169.376 203.513 167.099 198.952 164.822 C 196.672 162.545 192.112 160.268 189.832 160.268 C 187.552 157.992 189.832 157.992 189.832 157.992 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1250.336,
      top: 883.289,
      width: 253.949,
      height: 155.186,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 253.949,
      height: 155.186,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 253.949,
      height: 155.186,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 253.949,
    height: 155.186,
    viewBox: "0 0 253.949 155.186",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 253.949,
      height: 155.186,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 230.293 88.795 C 230.293 84.241 230.293 79.688 228.013 72.857 C 230.293 88.795 225.733 95.625 225.733 109.286 C 223.453 109.286 218.893 109.286 216.612 111.563 C 214.332 111.563 214.332 113.839 214.332 113.839 L 212.052 113.839 C 209.772 116.116 207.492 118.393 205.212 118.393 C 207.492 118.393 207.492 116.116 209.772 116.116 C 207.492 118.393 207.492 118.393 205.212 118.393 C 198.371 122.947 186.971 125.223 177.85 122.947 L 175.57 122.947 L 171.01 120.67 C 168.73 118.393 166.45 118.393 161.889 116.116 C 157.329 113.839 150.489 111.563 143.648 109.286 C 129.967 102.455 95.765 88.795 82.085 81.964 C 79.805 81.964 77.524 79.688 77.524 79.688 C 79.805 81.964 79.805 81.964 84.365 84.241 C 75.244 81.964 68.404 79.688 59.283 77.411 C 59.283 79.688 59.283 79.688 63.844 81.964 L 59.283 79.688 C 54.723 79.688 47.883 77.411 43.322 77.411 C 45.603 77.411 41.042 75.134 38.762 75.134 C 31.922 70.58 22.801 66.027 22.801 61.473 L 22.801 59.196 C 22.801 56.92 22.801 54.643 22.801 54.643 C 25.081 54.643 25.081 50.089 25.081 52.366 C 25.081 47.813 27.362 43.259 29.642 38.705 C 36.482 31.875 43.322 27.321 54.723 22.768 C 63.844 20.491 75.244 18.214 86.645 18.214 C 95.765 18.214 102.606 15.937 111.726 18.214 C 118.567 15.937 129.967 18.214 132.247 15.938 C 141.368 18.214 143.648 15.937 152.769 18.214 C 150.489 15.937 161.889 18.214 157.329 15.938 C 152.769 11.384 152.769 13.661 148.208 11.384 C 127.687 4.554 104.886 0 82.085 0 C 68.404 0 47.883 0 31.922 9.107 C 22.801 13.661 15.961 20.491 9.121 29.598 C 2.28 38.705 0 47.813 0 59.196 C 0 63.75 0 66.027 0 70.58 C 2.28 79.688 9.121 86.518 18.241 93.348 C 22.801 95.625 27.362 97.902 29.642 100.179 C 31.922 102.455 36.482 102.455 38.762 104.732 C 45.603 107.009 50.163 111.563 57.003 113.839 L 59.283 113.839 C 59.283 116.116 100.326 125.223 102.606 127.5 L 104.886 127.5 C 118.567 134.33 132.248 143.438 145.928 147.991 C 148.208 147.991 152.769 147.991 155.049 147.991 C 157.329 150.268 157.329 147.991 159.609 150.268 C 166.449 157.098 173.29 154.822 168.73 154.822 C 175.57 154.822 182.41 154.822 189.251 154.822 C 191.531 154.822 193.811 152.545 198.371 152.545 C 200.651 152.545 202.932 152.545 202.932 152.545 C 209.772 150.268 207.492 152.545 214.332 150.268 C 214.332 150.268 218.892 147.991 223.453 145.714 C 228.013 143.438 230.293 138.884 230.293 138.884 C 234.853 134.33 241.694 132.054 246.254 125.223 C 253.094 116.116 255.375 102.455 253.094 91.072 C 250.814 79.688 246.254 68.304 241.694 61.473 C 239.414 61.473 243.974 63.75 241.694 66.027 C 239.414 61.473 237.133 56.92 232.573 52.366 C 228.013 47.813 223.453 43.259 218.893 38.705 C 216.612 36.429 214.332 36.429 214.332 34.152 C 212.052 31.875 212.052 34.152 209.772 31.875 L 209.772 29.598 C 205.212 29.598 205.212 25.045 200.651 25.045 L 198.371 25.045 C 198.371 22.768 193.811 22.768 196.091 22.768 L 193.811 22.768 C 191.531 22.768 180.13 22.768 177.85 22.768 C 175.57 22.768 175.57 22.768 175.57 22.768 L 173.29 22.768 L 171.01 22.768 C 171.01 22.768 171.01 22.768 171.01 20.491 C 168.73 20.491 168.73 20.491 166.449 20.491 C 168.73 22.768 173.29 25.045 175.57 27.321 C 173.29 27.321 171.01 25.045 171.01 25.045 C 168.73 22.768 166.45 22.768 161.889 20.491 C 161.889 20.491 159.609 22.768 159.609 20.491 C 159.609 18.214 157.329 20.491 157.329 18.214 C 159.609 18.214 159.609 18.214 161.889 18.214 C 161.889 15.937 159.609 15.938 157.329 15.938 C 157.329 15.938 155.049 15.938 152.769 15.938 C 152.769 15.938 152.769 15.937 150.489 13.661 L 148.208 13.661 C 148.208 13.661 152.769 15.938 150.489 15.938 C 150.489 15.938 148.208 13.661 145.928 13.661 C 145.928 13.661 145.928 13.661 145.928 15.938 C 143.648 15.938 143.648 15.938 143.648 15.938 C 141.368 15.938 152.769 13.661 150.489 13.661 C 150.489 13.661 139.088 13.661 141.368 15.938 C 141.368 15.938 139.088 15.937 141.368 18.214 L 143.648 18.214 C 145.928 18.214 145.928 20.491 143.648 20.491 C 141.368 20.491 152.769 18.214 150.489 18.214 C 150.489 18.214 145.928 18.214 145.928 15.938 L 143.648 15.938 L 141.368 15.938 C 148.208 18.214 134.528 20.491 141.368 22.768 C 139.088 20.491 143.648 20.491 145.928 22.768 C 145.928 22.768 145.928 25.045 148.208 25.045 C 150.489 25.045 148.208 25.045 150.489 25.045 L 152.769 27.321 C 155.049 27.321 155.049 29.598 157.329 29.598 C 159.609 29.598 161.889 31.875 164.169 31.875 C 164.169 31.875 166.449 34.152 164.169 36.429 C 161.889 36.429 166.45 34.152 161.889 34.152 C 161.889 36.429 159.609 34.152 157.329 34.152 C 157.329 34.152 159.609 36.429 161.889 36.429 C 164.169 36.429 166.449 36.429 168.73 38.705 L 171.01 38.705 L 173.29 38.705 C 173.29 38.705 184.691 38.705 184.691 40.982 C 186.971 40.982 186.971 43.259 186.971 43.259 C 186.971 43.259 171.01 40.982 173.29 40.982 C 173.29 40.982 191.531 43.259 191.531 45.536 L 193.811 45.536 C 196.091 45.536 193.811 45.536 193.811 47.813 L 193.811 50.089 C 196.091 50.089 200.651 54.643 202.932 54.643 C 200.651 54.643 200.651 54.643 198.371 54.643 L 196.091 54.643 C 209.772 45.536 209.772 45.536 212.052 45.536 C 212.052 47.813 218.892 47.813 221.173 52.366 C 221.173 52.366 221.173 52.366 223.453 52.366 C 225.733 56.92 225.733 59.196 228.013 61.473 C 230.293 61.473 230.293 61.473 230.293 59.196 L 232.573 61.473 C 230.293 61.473 232.573 66.027 230.293 66.027 C 230.293 66.027 230.293 68.304 232.573 68.304 C 232.573 68.304 234.853 68.304 234.853 70.58 C 234.853 72.857 234.853 72.857 234.853 75.134 C 234.853 75.134 234.853 75.134 232.573 75.134 C 234.853 77.411 232.573 77.411 232.573 79.688 C 230.293 84.241 230.293 86.518 230.293 88.795 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1139.391,
      top: 1171.499,
      width: 193.029,
      height: 201.3,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 193.029,
      height: 201.3,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 193.029,
      height: 201.3,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 193.029,
    height: 201.300,
    viewBox: "0 0 193.029 201.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 193.029,
      height: 201.3,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 56.221 121.613 C 58.501 123.89 63.061 130.72 67.622 135.274 C 60.781 121.613 53.941 105.675 40.26 101.122 C 42.54 96.568 37.98 85.184 37.98 85.184 C 35.7 82.907 33.42 80.631 33.42 78.354 C 33.42 80.631 35.7 80.631 35.7 82.907 C 33.42 80.631 33.42 80.631 33.42 78.354 C 28.859 71.523 26.579 62.416 26.579 53.309 C 26.579 46.479 31.139 39.648 37.98 32.818 C 40.26 30.541 42.54 28.265 47.1 28.265 C 49.38 28.265 51.661 25.988 53.941 25.988 L 56.221 23.711 C 56.221 23.711 56.221 23.711 58.501 23.711 L 60.781 23.711 L 63.061 25.988 C 67.622 28.265 69.902 30.541 72.182 32.818 C 74.462 32.818 74.462 35.095 76.742 35.095 C 74.462 32.818 74.462 32.818 72.182 30.541 C 79.022 32.818 85.863 35.095 90.423 37.372 C 90.423 35.095 90.423 35.095 88.143 32.818 L 90.423 35.095 C 94.983 35.095 99.543 39.648 101.823 41.925 C 99.543 41.925 101.823 44.202 104.104 46.479 C 110.944 53.309 117.784 57.863 124.625 64.693 C 124.625 64.693 124.625 66.97 126.905 66.97 L 133.745 71.523 C 131.465 71.523 136.025 76.077 133.745 73.8 C 138.306 76.077 140.586 82.907 145.146 85.184 C 151.986 92.015 156.547 101.122 163.387 107.952 C 167.947 117.059 172.507 123.89 172.507 132.997 C 172.507 139.827 172.507 146.658 167.947 153.488 C 165.667 160.318 161.107 167.149 158.827 169.425 C 151.986 173.979 151.986 176.256 142.866 180.809 C 145.146 180.809 136.025 185.363 140.586 185.363 C 145.146 185.363 145.146 183.086 151.986 183.086 C 156.547 180.809 161.107 178.533 167.947 176.256 C 172.507 173.979 177.068 169.425 181.628 164.872 C 188.468 155.765 193.029 144.381 193.029 130.72 C 190.749 112.506 181.628 98.845 174.788 87.461 C 165.667 76.077 154.266 62.416 145.146 55.586 C 142.866 53.309 142.866 51.032 140.586 48.756 C 131.465 41.925 122.345 30.541 110.944 23.711 C 106.384 19.157 101.823 14.604 94.983 12.327 C 94.983 12.327 94.983 12.327 92.703 12.327 C 92.703 12.327 83.582 5.497 74.462 3.22 C 69.902 0.943 60.781 -1.334 56.221 0.943 C 51.661 0.943 47.1 3.22 47.1 3.22 C 47.1 3.22 44.82 3.22 44.82 5.497 C 31.139 10.05 15.178 19.157 8.338 32.818 C 8.338 35.095 6.058 39.648 6.058 41.925 C 3.778 44.202 6.058 44.202 3.778 48.756 C -0.782 55.586 -0.782 60.14 1.498 57.863 C 1.498 64.693 1.498 69.247 3.778 76.077 C 3.778 78.354 6.058 80.631 6.058 82.907 C 6.058 85.184 6.058 85.184 6.058 87.461 C 8.338 92.015 6.058 92.015 8.338 96.568 C 8.338 98.845 17.459 107.952 17.459 110.229 C 19.739 114.782 19.739 121.613 24.299 126.166 C 33.42 139.827 44.82 153.488 53.941 164.872 C 53.941 164.872 51.661 162.595 53.941 160.318 C 58.501 167.149 63.061 173.979 69.902 180.809 C 69.902 183.086 72.182 183.086 72.182 185.363 C 74.462 187.64 74.462 185.363 76.742 187.64 L 76.742 189.916 C 81.302 192.193 81.302 194.47 83.582 196.747 L 85.863 196.747 C 85.863 199.024 90.423 199.024 88.143 199.024 L 90.423 199.024 C 92.703 199.024 106.384 199.024 108.664 199.024 C 110.944 199.024 110.944 199.024 110.944 199.024 L 113.224 199.024 L 115.504 199.024 C 115.504 199.024 115.504 199.024 115.504 201.3 C 117.784 201.3 117.784 201.3 120.065 201.3 C 115.504 201.3 110.944 199.024 108.664 196.747 C 110.944 196.747 113.224 196.747 115.504 196.747 C 117.784 196.747 122.345 199.024 124.625 199.024 C 124.625 199.024 124.625 196.747 126.905 196.747 L 129.185 196.747 C 126.905 196.747 126.905 196.747 124.625 196.747 C 124.625 199.024 129.185 196.747 129.185 196.747 C 129.185 196.747 133.745 196.747 133.745 194.47 C 133.745 196.747 136.025 194.47 136.025 194.47 C 138.306 194.47 138.306 194.47 138.306 194.47 C 138.306 192.193 133.745 194.47 133.745 192.193 C 133.745 192.193 136.025 192.193 138.306 192.193 C 138.306 192.193 138.306 192.193 138.306 189.916 C 140.586 189.916 140.586 187.64 142.866 189.916 C 142.866 189.916 142.866 189.916 140.586 189.916 C 142.866 189.916 131.465 196.747 133.745 196.747 L 142.866 189.916 C 140.586 189.916 142.866 187.64 142.866 187.64 L 142.866 189.916 C 140.586 189.916 140.586 189.917 140.586 187.64 C 142.866 187.64 133.745 194.47 136.025 192.193 C 136.025 192.193 138.305 189.916 140.586 189.916 C 140.586 189.916 140.586 187.64 142.866 187.64 C 142.866 187.64 145.146 187.64 145.146 185.363 C 138.306 187.64 147.426 178.533 140.586 178.533 C 142.866 178.533 140.586 180.809 138.306 180.809 C 138.306 180.809 136.025 180.809 133.745 180.809 C 131.465 180.809 133.745 180.809 133.745 183.086 L 131.465 183.086 C 131.465 185.363 129.185 183.086 126.905 183.086 C 124.625 183.086 122.345 183.086 120.065 183.086 C 120.065 183.086 117.784 180.809 120.065 180.809 C 122.345 180.809 120.064 183.086 122.345 183.086 C 120.064 180.809 124.625 183.086 124.625 180.809 C 124.625 180.809 122.345 180.809 120.065 180.809 C 117.784 180.809 115.504 180.809 115.504 180.809 C 115.504 180.809 115.504 180.809 115.504 178.533 L 113.224 178.533 L 110.944 178.533 C 110.944 178.533 99.543 178.533 101.823 178.533 C 99.543 178.533 99.543 176.256 99.543 176.256 C 99.543 176.256 113.224 178.533 110.944 178.533 C 110.944 178.533 94.983 176.256 94.983 173.979 L 92.703 173.979 C 90.423 171.702 92.703 173.979 92.703 171.702 L 92.703 169.425 C 90.423 169.425 88.143 164.872 85.863 164.872 C 85.863 164.872 88.143 164.872 90.423 164.872 L 92.703 164.872 C 92.703 162.595 90.423 162.595 88.143 162.595 C 88.143 160.318 81.302 158.041 81.302 155.765 C 81.302 155.765 81.302 155.765 79.022 155.765 C 76.742 153.488 76.742 151.211 74.462 148.934 C 72.182 148.934 72.182 148.934 72.182 151.211 L 69.902 148.934 C 72.182 148.934 67.621 144.381 72.182 144.381 C 72.182 144.381 72.182 142.104 69.902 142.104 L 67.622 142.104 C 67.622 139.827 67.621 139.827 65.341 137.55 C 65.341 137.55 65.341 137.55 67.622 137.55 C 65.341 135.274 67.621 135.274 65.341 132.997 C 63.061 130.72 60.781 128.443 60.781 130.72 C 53.941 121.613 56.221 121.613 56.221 121.613 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1129.488,
      top: 1285.269,
      width: 70.684,
      height: 72.23,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 70.684,
      height: 72.23,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 70.684,
      height: 72.23,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 70.684,
    height: 72.230,
    viewBox: "0 0 70.684 72.230",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 70.684,
      height: 72.23,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 47.883 44.271 L 50.163 44.271 C 45.603 39.717 45.603 37.441 43.323 46.548 C 43.323 41.994 41.042 39.717 41.042 39.717 L 41.042 41.994 C 38.762 46.548 36.482 41.994 36.482 39.717 C 36.482 37.441 36.482 37.441 36.482 35.164 C 34.202 35.164 34.202 35.164 31.922 35.164 C 31.922 35.164 29.642 35.164 29.642 37.44 C 29.642 35.164 27.362 35.164 27.362 32.887 L 27.362 30.61 C 29.642 30.61 27.362 28.333 29.642 30.61 C 27.362 30.61 29.642 28.333 27.362 28.333 C 27.362 23.78 25.081 21.503 22.801 16.949 C 22.801 14.673 18.241 14.673 20.521 12.396 C 15.961 7.842 13.681 7.842 11.401 5.565 C 11.401 3.289 9.121 3.289 9.121 1.012 C 6.84 1.012 6.84 -1.265 6.84 1.012 C 4.56 1.012 6.84 1.012 4.56 3.289 C 2.28 7.842 0 10.119 0 14.673 C 2.28 16.949 0 21.503 0 23.78 C 0 26.057 2.28 30.61 4.56 32.887 C 4.56 32.887 4.56 35.164 2.28 35.164 C 2.28 37.441 4.56 41.994 4.56 44.271 C 4.56 46.548 4.56 46.548 4.56 48.824 C 4.56 48.824 6.84 51.101 9.121 53.378 C 11.401 55.655 13.681 55.655 13.681 57.932 C 15.961 60.208 15.961 67.039 20.521 69.316 C 20.521 69.316 22.801 69.316 22.801 67.039 C 22.801 67.039 22.801 67.039 25.081 67.039 C 25.081 71.592 27.362 69.316 27.362 69.316 C 29.642 69.316 29.642 69.316 31.922 69.316 L 34.202 69.316 C 34.202 69.316 34.202 69.316 34.202 71.592 C 36.482 71.592 34.202 71.592 36.482 71.592 C 36.482 73.869 38.762 69.316 41.042 69.316 C 43.322 69.316 43.322 71.592 45.603 71.592 C 50.163 71.592 54.723 69.316 57.003 69.316 C 57.003 67.039 57.003 69.316 54.723 67.039 C 54.723 67.039 57.003 67.039 59.283 67.039 L 57.003 67.039 C 59.283 67.039 61.564 67.039 61.564 67.039 L 63.844 67.039 L 63.844 69.316 C 63.844 67.039 66.124 69.316 66.124 69.316 C 66.124 71.592 66.124 69.316 68.404 69.316 C 68.404 69.316 68.404 64.762 68.404 62.485 L 68.404 60.208 C 68.404 60.208 66.124 60.208 63.844 57.932 L 66.124 57.932 C 66.124 57.932 66.124 57.932 68.404 57.932 C 68.404 57.932 68.404 57.932 70.684 57.932 C 70.684 57.932 68.404 57.932 68.404 55.655 C 68.404 55.655 68.404 60.208 70.684 60.208 L 70.684 55.655 C 70.684 55.655 70.684 55.655 70.684 53.378 C 70.684 53.378 68.404 53.378 68.404 51.101 L 70.684 55.655 C 70.684 55.655 70.684 55.655 70.684 53.378 C 70.684 53.378 66.124 46.548 66.124 48.824 C 68.404 48.824 66.124 51.101 66.124 51.101 C 66.124 51.101 66.124 51.101 63.844 51.101 C 63.844 51.101 63.844 51.101 61.564 51.101 C 61.564 51.101 61.563 51.101 59.283 51.101 L 57.003 48.824 C 57.003 48.824 57.003 51.101 59.283 51.101 C 57.003 48.824 59.283 51.101 59.283 48.824 L 59.283 51.101 C 59.283 51.101 61.563 48.824 59.283 48.824 C 59.283 48.824 59.283 53.378 57.003 51.101 L 57.003 48.824 C 57.003 48.824 54.723 48.824 54.723 51.101 L 54.723 48.824 C 54.723 46.548 54.723 51.101 52.443 48.824 L 50.163 48.824 C 50.163 48.824 50.163 48.824 47.883 48.824 L 47.883 51.101 C 47.883 48.824 45.603 48.824 45.603 46.548 L 45.603 48.824 C 45.603 48.824 45.603 48.824 45.603 46.548 C 47.883 46.548 47.883 44.271 47.883 44.271 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))))));
}
Object.assign(__ds_scope, { HoldingHands });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/illustrations/HoldingHands.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Logo.jsx
try { (() => {
// "ladoalado" script wordmark (Fruits Delight). Self-contained inline SVG,
// painted with currentColor — set `color` to ink, cream or bordô.
const PATH = "M 404.262 51.045 C 403.803 50.741 403.345 50.588 402.733 50.741 C 400.898 51.198 398.758 51.503 396.159 51.503 C 393.407 51.503 390.808 51.045 388.514 50.436 C 388.209 49.217 387.597 48.15 386.833 47.388 C 386.068 46.627 385.151 46.169 384.234 46.169 C 383.622 46.169 383.163 46.474 382.705 46.931 C 382.246 47.388 382.093 47.846 382.093 48.455 C 382.093 49.979 382.858 51.35 384.386 52.417 L 384.386 53.331 C 384.386 55.464 383.928 57.902 382.858 60.645 C 381.787 63.388 380.564 65.826 379.188 67.807 C 377.812 69.787 376.436 70.854 375.213 71.006 C 375.06 71.006 374.907 71.006 374.602 70.854 C 374.296 70.702 374.143 70.092 373.837 69.178 C 373.531 68.264 373.531 67.197 373.531 65.978 C 373.531 61.102 374.449 56.531 376.436 52.417 C 378.424 48.303 380.411 45.56 382.552 44.341 L 382.705 44.341 C 382.858 44.341 383.163 44.493 383.469 44.493 C 384.081 44.493 384.539 44.341 384.845 43.884 C 385.304 43.579 385.457 43.122 385.457 42.665 C 385.457 41.903 384.998 41.141 383.928 40.532 C 382.858 39.922 381.634 39.617 380.258 39.617 C 378.883 39.617 377.201 40.227 375.672 41.293 C 373.99 42.36 372.614 43.884 371.238 45.712 C 368.486 49.522 366.957 54.093 366.499 59.121 C 363.899 64.15 361.148 69.026 358.548 73.597 C 354.573 80.454 351.363 84.415 349.222 85.33 C 348.764 85.482 348.458 85.482 348.305 85.177 C 347.846 84.72 347.54 83.501 347.082 81.673 C 346.776 79.692 346.47 77.711 346.47 75.578 C 346.47 72.225 346.929 68.264 347.693 63.692 C 348.458 59.121 349.375 55.007 350.445 51.198 C 351.516 47.388 352.892 42.817 354.573 37.636 C 356.255 32.456 357.631 28.494 358.701 25.751 C 359.772 23.009 360.995 19.504 362.676 15.39 C 362.982 14.628 363.441 13.561 363.9 12.038 C 364.511 10.514 364.817 9.6 365.123 8.99 C 365.428 8.228 365.275 7.466 364.97 6.704 C 364.511 6.095 363.899 5.485 363.288 5.181 C 361.912 4.571 360.842 4.571 360.077 5.485 C 359.924 5.638 359.924 5.638 359.924 5.79 C 359.924 5.79 359.772 5.943 359.772 6.095 C 359.772 6.247 359.619 6.247 359.619 6.4 L 359.619 6.552 C 357.937 9.295 354.115 17.066 348.305 29.865 C 344.788 37.789 342.648 42.208 342.189 43.274 C 341.425 42.36 340.202 41.598 338.826 40.989 C 337.45 40.379 335.921 40.074 334.392 40.074 C 331.946 40.074 329.5 41.141 327.359 43.274 C 325.066 45.408 323.384 48.15 322.008 51.35 C 321.55 52.569 321.244 53.636 320.938 54.855 C 313.752 63.54 308.707 67.807 305.649 67.807 C 303.967 67.807 303.203 66.13 303.203 62.626 C 303.203 58.359 304.12 53.331 305.802 47.541 C 305.955 46.779 305.802 46.017 305.343 45.56 C 304.732 44.646 303.815 44.189 302.591 44.189 L 302.286 44.189 C 300.298 42.055 297.699 40.989 294.488 40.989 C 291.278 40.989 288.373 42.208 285.621 44.493 C 282.869 46.779 280.728 49.826 279.352 53.331 C 278.894 54.245 278.588 55.159 278.282 56.074 C 274.46 61.712 270.485 66.74 266.357 71.006 C 261.159 76.492 257.49 79.235 255.349 79.235 C 254.585 79.235 253.82 78.32 253.056 76.492 C 252.444 74.663 251.986 72.378 251.986 69.635 C 251.986 64.15 252.903 58.207 254.738 51.807 C 259.018 49.979 263.452 46.169 268.039 40.684 C 272.625 35.198 276.295 29.256 279.047 22.856 C 281.952 16.456 283.328 11.123 283.328 6.704 C 283.328 4.724 282.869 3.2 282.104 1.981 C 281.34 0.762 280.27 0.305 278.741 0.305 C 276.6 0.305 273.696 2.438 270.026 6.704 C 266.357 10.971 262.535 16.304 259.018 23.009 C 254.738 30.78 251.374 38.398 249.081 46.169 C 248.622 47.998 248.01 49.674 247.705 51.35 C 244.953 52.874 242.659 54.093 240.366 55.312 C 237.461 56.836 236.085 57.445 234.556 58.055 C 231.499 59.274 229.664 59.883 228.747 60.188 C 226.3 60.95 224.466 61.102 222.784 61.102 C 220.338 61.102 219.42 60.645 218.962 60.34 C 217.892 59.578 217.586 58.359 217.433 57.902 C 216.516 54.398 218.962 49.065 219.268 47.541 C 219.42 46.931 219.268 46.474 218.962 46.169 C 218.503 45.56 217.892 45.255 217.127 45.255 L 216.974 45.255 C 215.598 43.884 213.764 43.122 211.623 43.122 C 209.483 43.122 207.342 43.884 205.508 45.56 C 204.285 46.627 203.214 47.846 202.297 49.369 C 197.252 50.741 190.372 51.807 182.422 51.198 C 179.67 51.045 177.07 50.588 174.777 50.131 C 174.471 48.912 173.86 47.846 173.095 47.084 C 172.331 46.322 171.414 45.865 170.496 45.865 C 169.885 45.865 169.426 46.169 168.967 46.627 C 168.509 47.084 168.356 47.541 168.356 48.15 C 168.356 49.674 169.12 51.045 170.649 52.112 L 170.649 53.179 C 170.649 55.312 170.191 57.75 169.12 60.493 C 168.05 63.235 166.827 65.673 165.451 67.654 C 164.075 69.635 162.699 70.702 161.476 70.854 C 161.323 70.854 161.17 70.854 160.864 70.702 C 160.559 70.549 160.406 69.94 160.1 69.026 C 159.794 68.111 159.794 67.045 159.794 65.826 C 159.794 60.95 160.711 56.378 162.699 52.264 C 164.687 48.15 166.674 45.408 168.815 44.189 L 168.967 44.189 C 169.12 44.189 169.426 44.341 169.732 44.341 C 170.343 44.341 170.802 44.189 171.108 43.731 C 171.567 43.427 171.719 42.97 171.719 42.512 C 171.719 41.751 171.261 40.989 170.191 40.379 C 169.12 39.77 167.897 39.465 166.521 39.465 C 165.145 39.465 163.463 40.074 161.935 41.141 C 160.253 42.208 158.877 43.731 157.501 45.56 C 154.749 49.369 153.22 53.941 152.761 58.969 C 150.162 63.997 147.41 68.873 144.811 73.444 C 140.836 80.301 137.625 84.263 135.485 85.177 C 135.026 85.33 134.721 85.33 134.568 85.025 C 134.109 84.568 133.803 83.349 133.345 81.52 C 133.039 79.539 132.733 77.559 132.733 75.425 C 132.733 72.073 133.192 68.111 133.956 63.54 C 134.721 58.969 135.638 54.855 136.708 51.045 C 137.778 47.236 139.154 42.665 140.836 37.484 C 142.518 32.303 143.894 28.342 144.964 25.599 C 146.034 22.856 147.257 19.352 148.939 15.237 C 149.245 14.476 149.704 13.409 150.162 11.885 C 150.774 10.361 151.08 9.447 151.385 8.838 C 151.691 8.076 151.538 7.314 151.232 6.552 C 150.774 5.943 150.162 5.333 149.551 5.028 C 148.175 4.419 147.104 4.419 146.34 5.333 C 146.187 5.485 146.187 5.485 146.187 5.638 C 146.187 5.638 146.034 5.79 146.034 5.943 C 146.034 6.095 145.576 6.095 145.576 6.095 L 145.576 6.247 C 143.894 8.99 140.072 16.761 134.262 29.561 C 130.745 37.484 128.605 41.903 128.146 42.97 C 127.382 42.055 126.159 41.293 124.783 40.684 C 123.407 40.074 121.878 39.77 120.349 39.77 C 117.903 39.77 115.457 40.836 113.316 42.97 C 111.023 45.103 109.341 47.846 107.965 51.045 C 107.506 52.264 107.201 53.331 106.895 54.55 C 99.709 63.235 94.664 67.502 91.606 67.502 C 89.924 67.502 89.16 65.826 89.16 62.321 C 89.16 58.055 90.077 53.026 91.759 47.236 C 91.912 46.474 91.759 45.712 91.3 45.255 C 90.689 44.341 89.771 43.884 88.548 43.884 L 88.243 43.884 C 86.255 41.751 83.656 40.684 80.445 40.684 C 77.235 40.684 74.33 41.903 71.578 44.189 C 68.826 46.474 66.685 49.522 65.309 53.026 C 64.851 53.941 64.545 54.855 64.239 55.769 C 60.417 61.407 56.442 66.435 52.314 70.702 C 47.116 76.187 43.446 78.93 41.306 78.93 C 40.542 78.93 39.777 78.016 39.013 76.187 C 38.401 74.359 37.943 72.073 37.943 69.33 C 37.943 63.845 38.86 57.902 40.694 51.503 C 44.975 49.674 49.409 45.865 53.996 40.379 C 58.582 34.894 62.252 28.951 65.004 22.551 C 67.909 16.152 69.285 10.819 69.285 6.4 C 69.285 4.419 68.826 2.895 68.061 1.676 C 67.297 0.609 66.074 0 64.698 0 C 62.557 0 59.653 2.133 55.983 6.4 C 52.314 10.666 48.492 15.999 44.975 22.704 C 40.694 30.322 37.331 38.094 35.038 45.712 C 34.579 47.541 33.967 49.217 33.662 50.893 C 31.368 52.264 29.687 53.331 26.323 55.16 C 24.335 56.226 23.265 56.836 21.584 57.445 C 20.36 57.902 17.456 59.121 13.633 60.035 C 13.328 60.035 11.493 60.493 8.894 60.645 C 6.448 60.797 5.53 60.645 4.919 60.035 C 3.237 58.816 3.543 57.445 2.473 56.683 C 1.861 56.226 0.791 56.226 0.332 56.683 C -0.585 57.597 0.485 60.645 2.473 62.321 C 3.849 63.388 5.377 63.692 6.906 63.845 C 9.047 64.15 10.576 63.845 11.34 63.845 C 14.398 63.54 17.914 62.626 23.571 60.493 C 25.711 59.578 27.24 58.816 28.463 58.207 C 29.992 57.445 31.521 56.683 32.744 55.921 C 31.98 59.731 31.674 63.388 31.674 66.892 C 31.674 72.378 32.591 76.34 34.579 78.93 C 36.567 81.52 38.86 82.739 41.612 82.739 C 43.446 82.739 45.587 81.977 47.88 80.454 C 50.174 78.93 52.467 76.949 54.607 74.663 C 56.748 72.378 59.041 69.787 61.181 66.892 C 61.793 65.978 62.557 65.216 63.169 64.302 C 63.169 66.892 63.781 69.026 65.004 70.549 C 66.227 72.225 67.756 72.987 69.437 72.987 C 70.966 72.987 72.648 71.921 74.636 69.635 C 76.623 67.349 79.528 63.54 83.503 57.902 L 83.503 59.121 C 83.503 62.931 84.268 65.978 85.796 68.111 C 87.325 70.245 89.466 71.464 92.065 71.464 C 94.97 71.464 98.486 69.33 102.767 65.216 C 103.837 64.15 104.907 62.931 105.978 61.864 C 106.131 64.759 106.895 67.045 108.118 68.873 C 109.494 71.006 111.482 72.073 113.928 72.073 C 114.998 72.073 116.068 71.616 117.138 70.854 C 118.209 70.092 119.279 69.026 120.196 67.807 C 121.114 66.588 122.184 64.911 123.407 62.931 C 124.63 60.95 125.547 58.969 126.465 57.14 C 127.382 55.312 128.452 53.026 129.675 50.436 C 127.688 59.121 126.617 66.435 126.617 72.225 C 126.617 83.349 129.522 88.987 135.332 88.987 C 137.014 88.987 139.154 87.768 141.448 85.177 C 143.741 82.587 146.187 79.387 148.48 75.425 C 150.162 72.53 151.691 69.787 153.067 67.045 C 153.526 68.721 154.137 70.092 154.902 71.311 C 156.584 73.749 158.724 74.968 161.476 74.968 C 163.769 74.968 165.91 73.749 167.897 71.464 C 169.885 69.178 171.567 66.435 172.79 63.235 C 174.013 60.035 174.624 56.988 174.93 53.941 C 177.529 54.55 180.128 54.855 182.727 54.855 C 186.702 54.855 195.723 54.093 200.462 52.874 C 199.851 54.855 199.392 56.836 199.392 58.816 C 199.392 60.797 199.851 62.321 200.768 63.388 C 201.685 64.454 202.603 65.064 203.826 65.064 C 204.896 65.064 205.966 64.302 207.342 62.778 C 208.718 61.254 210.706 58.664 213.458 54.702 L 213.458 55.617 C 213.305 56.074 212.846 59.426 215.14 61.864 C 216.821 63.692 219.115 64.15 220.338 64.302 C 220.644 64.302 221.867 64.454 225.077 63.997 C 229.052 63.388 232.416 62.473 237.308 60.645 C 239.296 59.883 242.048 58.512 246.634 56.226 C 245.87 60.188 245.564 63.845 245.564 67.349 C 245.564 72.835 246.482 76.797 248.469 79.387 C 250.457 81.977 252.75 83.196 255.502 83.196 C 257.337 83.196 259.477 82.434 261.77 80.911 C 264.064 79.387 266.357 77.406 268.497 75.121 C 270.638 72.835 272.931 70.245 275.072 67.349 C 275.683 66.435 276.448 65.673 277.059 64.759 C 277.059 67.349 277.671 69.483 278.894 71.006 C 280.117 72.683 281.646 73.444 283.328 73.444 C 284.856 73.444 286.538 72.378 288.526 70.092 C 290.513 67.807 293.418 63.997 297.393 58.359 L 297.393 59.578 C 297.393 63.388 298.158 66.435 299.687 68.568 C 301.215 70.702 303.356 71.921 305.955 71.921 C 308.86 71.921 312.376 69.787 316.657 65.673 C 317.727 64.607 318.798 63.388 319.868 62.321 C 320.021 65.216 320.785 67.502 322.008 69.33 C 323.384 71.464 325.372 72.53 327.818 72.53 C 328.888 72.53 329.958 72.073 331.029 71.311 C 332.099 70.549 333.169 69.483 334.086 68.264 C 335.004 67.045 336.074 65.369 337.297 63.388 C 338.52 61.407 339.437 59.426 340.355 57.597 C 341.272 55.769 342.342 53.483 343.565 50.893 C 341.578 59.578 340.508 66.892 340.508 72.683 C 340.508 83.806 343.413 89.444 349.222 89.444 C 350.904 89.444 353.044 88.225 355.338 85.634 C 357.631 83.044 360.077 79.844 362.371 75.882 C 364.052 72.987 365.581 70.245 366.957 67.502 C 367.416 69.178 368.027 70.549 368.792 71.768 C 370.474 74.206 372.614 75.425 375.366 75.425 C 377.659 75.425 379.8 74.206 381.787 71.921 C 383.775 69.635 385.457 66.892 386.68 63.692 C 387.903 60.493 388.514 57.445 388.82 54.398 C 391.419 55.007 394.018 55.312 396.617 55.312 C 402.121 55.312 404.873 54.398 404.873 52.569 C 404.873 51.807 404.721 51.35 404.262 51.045 Z M 53.384 21.637 C 57.971 13.866 61.793 8.533 65.004 5.638 C 65.309 9.142 64.392 13.714 61.946 19.199 C 59.653 24.685 56.595 29.865 52.926 34.741 C 49.256 39.617 45.74 43.427 42.223 46.017 C 45.281 37.484 48.95 29.408 53.384 21.637 Z M 83.809 48.455 C 83.35 49.217 82.892 49.826 82.586 50.131 C 76.012 59.883 71.884 65.521 69.896 67.045 C 70.049 63.692 70.966 60.34 72.495 56.988 C 74.024 53.636 75.859 50.893 77.846 48.912 C 79.834 46.931 81.821 45.865 83.503 45.865 C 84.115 45.865 84.573 46.322 84.726 46.931 C 84.726 47.084 84.42 47.693 83.809 48.455 Z M 113.775 67.654 C 113.622 67.807 113.469 67.807 113.469 67.654 C 113.01 67.197 112.858 65.826 112.858 63.54 C 112.858 60.645 113.469 57.75 114.692 54.702 C 115.915 51.655 117.291 49.217 118.82 47.236 C 120.349 45.408 121.725 44.341 122.948 44.341 C 123.56 44.341 124.018 44.493 124.324 44.798 C 124.783 45.103 125.089 45.408 125.241 45.712 C 125.394 46.017 125.7 46.322 126.006 46.931 C 126.006 46.931 126.006 46.931 126.006 47.084 C 119.89 59.883 115.762 66.74 113.775 67.654 Z M 213.764 48.15 C 213.458 48.607 213.152 49.065 212.999 49.369 C 208.413 56.074 205.508 59.883 204.285 60.95 C 204.437 58.664 205.049 56.378 206.119 54.093 C 207.189 51.807 208.413 49.979 209.789 48.607 C 211.164 47.236 212.54 46.474 213.611 46.474 C 214.069 46.474 214.375 46.779 214.528 47.236 C 214.375 47.236 214.222 47.693 213.764 48.15 Z M 267.274 21.942 C 271.861 14.171 275.683 8.838 278.894 5.943 C 279.2 9.447 278.282 14.018 275.836 19.504 C 273.543 24.989 270.485 30.17 266.816 35.046 C 263.146 39.922 259.63 43.731 256.114 46.322 C 259.018 37.789 262.841 29.713 267.274 21.942 Z M 297.699 48.76 C 297.24 49.522 296.782 50.131 296.476 50.436 C 289.902 60.188 285.621 65.826 283.786 67.349 C 283.939 63.997 284.856 60.645 286.385 57.293 C 287.914 53.941 289.749 51.198 291.736 49.217 C 293.724 47.236 295.711 46.169 297.393 46.169 C 298.005 46.169 298.463 46.627 298.616 47.236 C 298.616 47.388 298.311 47.998 297.699 48.76 Z M 327.512 67.959 C 327.359 68.111 327.206 68.111 327.206 67.959 C 326.748 67.502 326.595 66.13 326.595 63.845 C 326.595 60.95 327.206 58.055 328.429 55.007 C 329.653 51.96 331.029 49.522 332.557 47.541 C 334.086 45.712 335.462 44.646 336.685 44.646 C 337.297 44.646 337.756 44.798 338.061 45.103 C 338.52 45.408 338.826 45.712 338.979 46.017 C 339.132 46.322 339.437 46.627 339.743 47.236 C 339.743 47.236 339.743 47.236 339.743 47.388 C 333.781 60.34 329.653 67.045 327.512 67.959 Z";
function Logo({
  width = 180,
  color = "var(--lal-preto)",
  title = "Lado a Lado",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("svg", {
    role: "img",
    "aria-label": title,
    width: width,
    viewBox: "0 0 404.873 89.444",
    style: {
      display: "block",
      color,
      height: "auto",
      ...style
    }
  }, /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: PATH,
    fill: "currentColor"
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Logo.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
/**
 * Top navigation bar: script logo, centred mono links, and an action.
 * Transparent over the cream hero by default.
 */
function NavBar({
  links = ["Sobre", "Oradores", "Horário", "Reserva"],
  cta = "Inscrição",
  onCta,
  logoColor = "var(--lal-preto)",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "32px",
      padding: "22px var(--container-pad)",
      width: "100%",
      boxSizing: "border-box",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    width: 150,
    color: logoColor
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      gap: "36px",
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: "0.8rem",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      textDecoration: "none",
      color: "var(--text-strong)",
      transition: "color var(--dur-fast) var(--ease-out)"
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--accent)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--text-strong)"
  }, l)))), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "outline",
    onClick: onCta
  }, cta));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/merch/Merch.jsx
try { (() => {
/* Lado a Lado — Merch line recreation.
   Coffee + apparel collection built from the file's slogan compositions. */
const M = window.LadoALadoDesignSystem_313ead;
const {
  Button,
  Eyebrow,
  SectionHeading,
  Tag,
  Card,
  Logo,
  Icon,
  FeatureBand
} = M;

// Slogan "products" — typographic compositions on brand colours, as in the .fig
const PRODUCTS = [{
  slogan: ["Made to love", "and be loved"],
  tag: "T-shirt",
  bg: "var(--lal-bordo)",
  fg: "var(--lal-bege)",
  icon: "Heart",
  price: "19€"
}, {
  slogan: ["Requires", "caffeine &", "perseverance"],
  tag: "Coffee",
  bg: "var(--lal-amarelo)",
  fg: "var(--lal-bordo)",
  icon: "CoffeeSize48",
  price: "9€"
}, {
  slogan: ["Fidelity", "advocate"],
  tag: "Hoodie",
  bg: "var(--lal-vermelho)",
  fg: "var(--lal-bege)",
  icon: "SmileSize48",
  price: "34€"
}, {
  slogan: ["Made", "with love"],
  tag: "Tote",
  bg: "var(--lal-bege)",
  fg: "var(--lal-bordo)",
  icon: "Heart",
  price: "12€"
}, {
  slogan: ["Handle", "with care"],
  tag: "Mug",
  bg: "var(--lal-salmao)",
  fg: "var(--lal-bordo)",
  icon: "SmileyHappyPlus",
  price: "11€"
}, {
  slogan: ["Family", "first"],
  tag: "Cap",
  bg: "var(--lal-castanho)",
  fg: "var(--lal-bege)",
  icon: "SmileSize48",
  price: "16€"
}];
function ProductCard({
  p
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: "var(--radius-card)",
      overflow: "hidden",
      boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)",
      transform: hover ? "translateY(-4px)" : "none",
      transition: "all var(--dur-base) var(--ease-out)",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: p.bg,
      color: p.fg,
      aspectRatio: "1/1",
      padding: 28,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      opacity: .8
    }
  }, "Lado a Lado"), /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 30,
    style: {
      color: p.fg
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(1.6rem,3vw,2.2rem)",
      lineHeight: 1.0,
      textTransform: "uppercase"
    }
  }, p.slogan.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, p.slogan.join(" ")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: ".85rem",
      color: "var(--text-muted)"
    }
  }, p.tag)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      color: "var(--accent)"
    }
  }, p.price)));
}
function Merch() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      minHeight: "100%"
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "22px var(--container-pad)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    width: 150
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "Cole\xE7\xE3o 2024"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary"
  }, "Carrinho \xB7 0"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "50px var(--container-pad) 30px",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Loja",
    size: "l",
    align: "center"
  }, "Veste o que defendes"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "1.05rem",
      color: "var(--text-body)",
      maxWidth: 520,
      margin: "18px auto 0"
    }
  }, "Pe\xE7as com alma para quem acredita no amor verdadeiro, na fidelidade e na fam\xEDlia. Feitas com amor \u2014 e bastante caf\xE9.")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "30px var(--container-pad) 70px",
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 28
    }
  }, PRODUCTS.map((p, i) => /*#__PURE__*/React.createElement(ProductCard, {
    key: i,
    p: p
  })))), /*#__PURE__*/React.createElement(FeatureBand, {
    tone: "bordo",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline-light",
      size: "md"
    }, "Ver tudo")
  }, "True love \xB7 stronger families \xB7 better society"), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-footer)",
      color: "var(--text-on-footer)",
      padding: "36px var(--container-pad)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    width: 140,
    color: "var(--lal-bege)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: ".8rem",
      opacity: .85
    }
  }, "Made with love \xB7 2024")));
}
window.Merch = Merch;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/merch/Merch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Site.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lado a Lado — Conference site recreation ("Viver para amar").
   Composes the design-system components from window.<Namespace>. */
const DS = window.LadoALadoDesignSystem_313ead;
const {
  Button,
  Eyebrow,
  SectionHeading,
  Tag,
  Avatar,
  SpeakerCard,
  ScheduleRow,
  TestimonialCard,
  Card,
  FeatureBand,
  NavBar,
  Logo,
  HoldingHands,
  HandMic
} = DS;
const SPEAKERS = [{
  name: "Francisco Vilhena",
  role: "Médico",
  org: "Sociedade & Família",
  initials: "FV"
}, {
  name: "Mª de Fátima Carioca",
  role: "Professora",
  org: "AESE Business School",
  initials: "FC"
}, {
  name: "Javier Calderón",
  role: "Conferencista",
  org: "Madrid",
  initials: "JC"
}, {
  name: "Vanessa Machado",
  role: "Psicóloga",
  org: "Clínica do Casal",
  initials: "VM"
}, {
  name: "Pe. Bernardo",
  role: "Capelão",
  org: "Universidade Católica",
  initials: "PB"
}, {
  name: "Alexandra Chumbo",
  role: "Coach familiar",
  org: "Lado a Lado",
  initials: "AC"
}];
const AGENDA = [{
  time: "15h00 — 15h30",
  title: "Abertura da conferência",
  subtitle: "Introdução",
  dots: 0
}, {
  time: "15h30 — 15h45",
  title: "Problemas na sociedade",
  subtitle: "Francisco Vilhena da Cunha",
  dots: 1
}, {
  time: "15h45 — 16h00",
  title: "Vocação: amar e ser amado",
  subtitle: "—",
  dots: 1
}, {
  time: "16h00 — 16h30",
  title: "Masculinidade vs feminidade",
  subtitle: "Calderón e Vanessa Machado",
  dots: 2
}, {
  time: "16h30 — 17h00",
  title: "Coffee break",
  subtitle: "",
  dots: 0
}, {
  time: "17h00 — 17h15",
  title: "Do encantamento inicial ao amor",
  subtitle: "Abertura da conferência",
  dots: 1
}, {
  time: "17h15 — 17h30",
  title: "O compromisso ainda faz sentido?",
  subtitle: "Mª de Fátima Carioca",
  dots: 1
}, {
  time: "17h45 — 18h00",
  title: "Mensagem de esperança",
  subtitle: "Fátima Fonseca",
  dots: 2
}];
function Hero({
  onReserve
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "relative",
      background: "var(--surface-page)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    cta: "Inscri\xE7\xE3o",
    onCta: onReserve
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -40,
      right: -60,
      opacity: 0.96,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(HoldingHands, {
    width: 760
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "80px var(--container-pad) 110px",
      maxWidth: 760,
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    align: "start"
  }, "Confer\xEAncia \u2022 3 Mar\xE7o 2024, Lisboa"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(3rem,7vw,6rem)",
      lineHeight: 1.04,
      color: "var(--text-strong)",
      margin: "18px 0 10px"
    }
  }, "Viver para amar"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "1.3rem",
      color: "var(--text-body)",
      margin: "0 0 34px",
      maxWidth: 520
    }
  }, "Um evento sobre o namoro, o casamento e a fam\xEDlia \u2014 para jovens que querem amar de verdade."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: onReserve
  }, "Reserva gr\xE1tis aqui")));
}
function Sobre() {
  const [playing, setPlaying] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "90px var(--container-pad)",
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Sobre",
    align: "center"
  }, "Em que consiste?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "center",
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "1.05rem",
      lineHeight: 1.7,
      color: "var(--text-body)",
      margin: 0
    }
  }, "Durante uma tarde, casais que contam a sua hist\xF3ria e especialistas no tema juntam-se para responder \xE0s tuas perguntas sobre o amor, a fidelidade e a constru\xE7\xE3o de uma fam\xEDlia. N\xE3o nascemos ensinados \u2014 tamb\xE9m temos de aprender a amar, lado a lado."), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPlaying(p => !p),
    style: {
      all: "unset",
      cursor: "pointer",
      aspectRatio: "16/10",
      background: "var(--lal-preto)",
      borderRadius: "var(--radius-card)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 70,
      height: 70,
      borderRadius: "50%",
      background: playing ? "var(--lal-vermelho)" : "rgba(252,249,233,0.95)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background .2s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      color: playing ? "var(--lal-bege)" : "var(--lal-preto)"
    }
  }, playing ? "❚❚" : "▶")))));
}
function Band() {
  return /*#__PURE__*/React.createElement(FeatureBand, {
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "deep",
      size: "md"
    }, "Inscri\xE7\xE3o")
  }, "E viveram ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-script)",
      fontStyle: "normal",
      fontSize: "1.3em"
    }
  }, "lado a lado"), " para sempre");
}
function Oradores() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "90px var(--container-pad)",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Oradores",
    align: "center"
  }, "Quem s\xE3o os oradores?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "36px 40px",
      marginTop: 56
    }
  }, SPEAKERS.map(s => /*#__PURE__*/React.createElement(SpeakerCard, _extends({
    key: s.name
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 20,
      bottom: -30,
      opacity: 0.95,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(HandMic, {
    width: 210
  })));
}
function Horario() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "70px var(--container-pad) 100px",
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Hor\xE1rio",
    align: "center"
  }, "Que programa temos para oferecer?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      margin: "48px 0 4px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    align: "start",
    color: "var(--accent)"
  }, "S\xE1bado, 2 Mar\xE7o"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: ".85rem",
      color: "var(--text-muted)"
    }
  }, "Audit\xF3rio Cat\xF3lica, Lisboa")), AGENDA.map((r, i) => /*#__PURE__*/React.createElement(ScheduleRow, _extends({
    key: i
  }, r))));
}
function Reserva({
  onReserve
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-band)",
      padding: "70px var(--container-pad)",
      textAlign: "center",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20,
      bottom: -20,
      transform: "scaleX(-1)",
      opacity: 0.9
    }
  }, /*#__PURE__*/React.createElement(HandMic, {
    width: 150
  })), /*#__PURE__*/React.createElement(Eyebrow, {
    align: "center",
    color: "var(--lal-bordo)"
  }, "Reserva"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(2.2rem,4vw,3.4rem)",
      color: "var(--lal-bordo)",
      margin: "14px 0 28px"
    }
  }, "Viver para amar"), /*#__PURE__*/React.createElement(Button, {
    variant: "deep",
    size: "lg",
    onClick: onReserve
  }, "Inscri\xE7\xE3o"));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-footer)",
      color: "var(--text-on-footer)",
      padding: "40px var(--container-pad)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    width: 150,
    color: "var(--lal-bege)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: ".85rem",
      opacity: 0.85
    }
  }, "2024"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      fontFamily: "var(--font-mono)",
      fontSize: ".8rem",
      letterSpacing: ".1em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Spotify"), /*#__PURE__*/React.createElement("span", null, "YouTube"), /*#__PURE__*/React.createElement("span", null, "Instagram")));
}
function Modal({
  open,
  onClose
}) {
  if (!open) return null;
  const [done, setDone] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(45,18,30,0.55)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 50,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--surface-raised)",
      borderRadius: "var(--radius-card)",
      padding: 40,
      width: "min(440px,100%)",
      boxShadow: "var(--shadow-lg)"
    }
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Confirmado",
    size: "m",
    align: "center"
  }, "At\xE9 j\xE1!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-ui)",
      color: "var(--text-body)",
      margin: "16px 0 26px"
    }
  }, "Envi\xE1mos os detalhes para o teu email."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onClose
  }, "Fechar")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Inscri\xE7\xE3o gratuita",
    size: "m",
    align: "start"
  }, "Reserva o teu lugar"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      margin: "24px 0"
    }
  }, ["O teu nome", "Email"].map(p => /*#__PURE__*/React.createElement("input", {
    key: p,
    placeholder: p,
    style: {
      font: "inherit",
      fontFamily: "var(--font-ui)",
      padding: "14px 16px",
      border: "1.5px solid var(--border-hairline)",
      borderRadius: "var(--radius-md)",
      background: "var(--surface-card)",
      outline: "none"
    }
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    onClick: () => setDone(true),
    style: {
      width: "100%"
    }
  }, "Confirmar inscri\xE7\xE3o"))));
}
function Site() {
  const [open, setOpen] = React.useState(false);
  const reserve = () => setOpen(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      minHeight: "100%"
    }
  }, /*#__PURE__*/React.createElement(Hero, {
    onReserve: reserve
  }), /*#__PURE__*/React.createElement(Sobre, null), /*#__PURE__*/React.createElement(Band, null), /*#__PURE__*/React.createElement(Oradores, null), /*#__PURE__*/React.createElement(Horario, null), /*#__PURE__*/React.createElement(Reserva, {
    onReserve: reserve
  }), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: () => setOpen(false)
  }));
}
window.Site = Site;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.FeatureBand = __ds_scope.FeatureBand;

__ds_ns.ScheduleRow = __ds_scope.ScheduleRow;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SpeakerCard = __ds_scope.SpeakerCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.HandMic = __ds_scope.HandMic;

__ds_ns.HoldingHands = __ds_scope.HoldingHands;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
