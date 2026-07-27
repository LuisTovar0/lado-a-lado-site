import React from "react";
import { Avatar } from "./Avatar.jsx";

/**
 * Speaker / person row: avatar beside name, role and organisation.
 * Layout matches the website's "Quem são os oradores?" grid.
 */
export function SpeakerCard({ name, role, org, src, initials, size = 80, style = {} }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "18px", ...style }}>
      <Avatar src={src} initials={initials} size={size} alt={name} />
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1.05rem", color: "var(--text-strong)" }}>{name}</span>
        {role && <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.95rem", color: "var(--text-body)" }}>{role}</span>}
        {org && <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.95rem", color: "var(--text-muted)" }}>{org}</span>}
      </div>
    </div>
  );
}
