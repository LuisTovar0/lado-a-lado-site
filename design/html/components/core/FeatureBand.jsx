import React from "react";

/**
 * Full-bleed yellow feature band — the brand's recurring divider that
 * carries a short script/serif statement ("E viveram lado a lado para
 * sempre") and an optional action. Defaults to the signature yellow.
 */
export function FeatureBand({ children, action, tone = "yellow", align = "center", style = {} }) {
  const tones = {
    yellow: { background: "var(--surface-band)", color: "var(--text-on-band)" },
    bordo:  { background: "var(--surface-footer)", color: "var(--text-on-footer)" },
  };
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: align === "center" ? "center" : "space-between",
      gap: "32px",
      flexWrap: "wrap",
      padding: "40px var(--container-pad)",
      width: "100%",
      boxSizing: "border-box",
      ...tones[tone],
      ...style,
    }}>
      <div style={{
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontStyle: "italic",
        fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
        lineHeight: 1.1,
        textAlign: align,
      }}>
        {children}
      </div>
      {action}
    </div>
  );
}
