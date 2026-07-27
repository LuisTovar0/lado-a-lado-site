import React from "react";

/**
 * Generic content surface. `tone` switches between the white card,
 * cream raised surface, yellow band, and dark wine footer panel.
 * `edge` toggles the playful hard ink offset shadow.
 */
export function Card({ children, tone = "card", edge = false, padding = "28px", style = {}, ...rest }) {
  const tones = {
    card:   { background: "var(--surface-card)",  color: "var(--text-body)" },
    cream:  { background: "var(--surface-raised)", color: "var(--text-body)" },
    band:   { background: "var(--surface-band)",  color: "var(--text-on-band)" },
    footer: { background: "var(--surface-footer)", color: "var(--text-on-footer)" },
    ink:    { background: "var(--surface-ink)",   color: "var(--lal-bege)" },
  };
  return (
    <div
      style={{
        borderRadius: "var(--radius-card)",
        padding,
        boxShadow: edge ? "var(--shadow-ink)" : "var(--shadow-sm)",
        border: edge ? "2px solid var(--lal-preto)" : "none",
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
