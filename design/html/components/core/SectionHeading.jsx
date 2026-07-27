import React from "react";
import { Eyebrow } from "./Eyebrow.jsx";

/**
 * Section header: optional mono eyebrow + serif display title (Abhaya Libre).
 * Mirrors the website's "SOBRE / Em que consiste?" pattern.
 */
export function SectionHeading({
  eyebrow,
  children,
  align = "center",
  size = "m",            // "m" | "l" | "xl"
  color,
  eyebrowColor,
  style = {},
}) {
  const sizes = {
    m: "var(--text-display-m)",
    l: "var(--text-display-l)",
    xl: "var(--text-display-xl)",
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "14px", textAlign: align, alignItems: align === "center" ? "center" : (align === "end" ? "flex-end" : "flex-start"), ...style }}>
      {eyebrow && <Eyebrow align={align} color={eyebrowColor}>{eyebrow}</Eyebrow>}
      <h2 style={{
        margin: 0,
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: sizes[size],
        lineHeight: "var(--lh-snug)",
        color: color || "var(--text-strong)",
        textWrap: "balance",
      }}>
        {children}
      </h2>
    </div>
  );
}
