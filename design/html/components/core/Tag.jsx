import React from "react";

/**
 * Small rounded label/chip. Used for categories, dates, statuses.
 */
export function Tag({ children, tone = "red", style = {}, ...rest }) {
  const tones = {
    red:    { background: "var(--lal-vermelho)", color: "var(--lal-bege)" },
    bordo:  { background: "var(--lal-bordo)",    color: "var(--lal-bege)" },
    yellow: { background: "var(--lal-amarelo)",  color: "var(--lal-bordo)" },
    cream:  { background: "var(--lal-bege)",     color: "var(--lal-bordo)", boxShadow: "inset 0 0 0 1.5px var(--border-hairline)" },
    outline:{ background: "transparent",         color: "var(--lal-vermelho)", boxShadow: "inset 0 0 0 1.5px var(--lal-vermelho)" },
  };
  return (
    <span
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
