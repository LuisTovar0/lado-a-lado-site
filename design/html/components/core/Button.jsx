import React from "react";

/**
 * Lado a Lado primary action. A fully-rounded pill with an uppercase
 * Overpass Mono label. Filled (solid red/bordô) or outline (heavy ring).
 */
export function Button({
  children,
  variant = "primary",   // "primary" | "deep" | "outline" | "outline-light" | "ghost"
  size = "md",           // "sm" | "md" | "lg"
  as = "button",
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: "10px 22px", fontSize: "12px" },
    md: { padding: "15px 34px", fontSize: "14px" },
    lg: { padding: "20px 46px", fontSize: "16px" },
  };
  const variants = {
    primary: { background: "var(--accent)", color: "var(--text-on-accent)", boxShadow: "none", border: "var(--border-width-strong) solid var(--accent)" },
    deep:    { background: "var(--accent-deep)", color: "var(--text-on-footer)", border: "var(--border-width-strong) solid var(--accent-deep)" },
    outline: { background: "transparent", color: "var(--accent)", border: "var(--border-width-strong) solid var(--accent)" },
    "outline-light": { background: "transparent", color: "var(--lal-bege)", border: "var(--border-width-strong) solid var(--lal-bege)" },
    ghost:   { background: "transparent", color: "var(--accent)", border: "var(--border-width-strong) solid transparent" },
  };
  // On hover, transparent variants fill in so it's obvious the cursor is over them.
  const hovers = {
    primary: { background: "var(--accent-hover)", color: "var(--text-on-accent)" },
    deep:    { background: "var(--accent-deep)", color: "var(--text-on-footer)", filter: "brightness(0.9)" },
    outline: { background: "var(--accent)", color: "var(--text-on-accent)" },
    "outline-light": { background: "var(--lal-bege)", color: "var(--accent-deep)" },
    ghost:   { background: "var(--accent)", color: "var(--text-on-accent)" },
  };
  const base = variants[variant];
  const hover = hovers[variant] || {};
  const applyHover = (el) => {
    el.style.background = hover.background ?? base.background;
    if (hover.color) el.style.color = hover.color;
    el.style.filter = hover.filter ?? "none";
  };
  const clearHover = (el) => {
    el.style.background = base.background;
    el.style.color = base.color;
    el.style.filter = "none";
    el.style.transform = "scale(1)";
  };
  const Tag = as;
  return (
    <Tag
      disabled={as === "button" ? disabled : undefined}
      style={{
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
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = "scale(0.97)"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      onMouseEnter={(e) => { if (!disabled) applyHover(e.currentTarget); }}
      onMouseLeave={(e) => { clearHover(e.currentTarget); }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
