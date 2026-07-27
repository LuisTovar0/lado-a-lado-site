import React from "react";

/**
 * Monospace, uppercase, letter-tracked label — the brand's signature
 * "eyebrow" that sits above section headings ("SOBRE", "ORADORES",
 * "CONFERÊNCIA • 3 MARÇO 2024"). Red by default.
 */
export function Eyebrow({ children, color, align = "start", as = "span", style = {}, ...rest }) {
  const Tag = as;
  return (
    <Tag
      style={{
        display: "block",
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        fontSize: "var(--text-eyebrow)",
        letterSpacing: "var(--eyebrow-tracking)",
        textTransform: "uppercase",
        color: color || "var(--text-eyebrow)",
        textAlign: align,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
