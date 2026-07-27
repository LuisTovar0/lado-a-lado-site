import React from "react";
import { Avatar } from "./Avatar.jsx";

/**
 * Testimonial / quote card — soft cream card with a serif quote and an
 * attributed person row.
 */
export function TestimonialCard({ quote, name, role, src, initials, style = {} }) {
  return (
    <figure style={{
      margin: 0,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-sm)",
      padding: "32px 30px",
      display: "flex",
      flexDirection: "column",
      gap: "22px",
      ...style,
    }}>
      <blockquote style={{
        margin: 0,
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: "1.4rem",
        lineHeight: 1.32,
        color: "var(--text-strong)",
      }}>
        <span style={{ color: "var(--lal-vermelho)" }}>“</span>{quote}<span style={{ color: "var(--lal-vermelho)" }}>”</span>
      </blockquote>
      <figcaption style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <Avatar src={src} initials={initials} size={48} alt={name} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.98rem", color: "var(--text-strong)" }}>{name}</span>
          {role && <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.88rem", color: "var(--text-muted)" }}>{role}</span>}
        </div>
      </figcaption>
    </figure>
  );
}
