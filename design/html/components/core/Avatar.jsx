import React from "react";

/**
 * Circular avatar. Shows an image when `src` is given, otherwise a
 * solid coral-red disc with optional initials — matching the website's
 * speaker placeholders.
 */
export function Avatar({ src, alt = "", initials, size = 72, tone = "red", style = {} }) {
  const tones = {
    red:   "var(--lal-vermelho)",
    bordo: "var(--lal-bordo)",
    yellow:"var(--lal-amarelo)",
  };
  return (
    <div
      style={{
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
        ...style,
      }}
    >
      {src
        ? <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        : (initials || null)}
    </div>
  );
}
