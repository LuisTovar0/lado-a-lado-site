import React from "react";
import { Logo } from "./Logo.jsx";
import { Button } from "../core/Button.jsx";

/**
 * Top navigation bar: script logo, centred mono links, and an action.
 * Transparent over the cream hero by default.
 */
export function NavBar({ links = ["Sobre", "Oradores", "Horário", "Reserva"], cta = "Inscrição", onCta, logoColor = "var(--lal-preto)", style = {} }) {
  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "32px",
      padding: "22px var(--container-pad)",
      width: "100%",
      boxSizing: "border-box",
      ...style,
    }}>
      <Logo width={150} color={logoColor} />
      <ul style={{ display: "flex", gap: "36px", listStyle: "none", margin: 0, padding: 0 }}>
        {links.map((l) => (
          <li key={l}>
            <a href="#" style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "var(--text-strong)",
              transition: "color var(--dur-fast) var(--ease-out)",
            }}
            onMouseEnter={(e)=>e.currentTarget.style.color="var(--accent)"}
            onMouseLeave={(e)=>e.currentTarget.style.color="var(--text-strong)"}>
              {l}
            </a>
          </li>
        ))}
      </ul>
      {cta && <Button size="sm" variant="outline" onClick={onCta}>{cta}</Button>}
    </nav>
  );
}
