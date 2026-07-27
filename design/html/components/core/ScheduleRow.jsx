import React from "react";

/**
 * Agenda / schedule line — time range, title + subtitle, and optional
 * coral "dots" marker. Mirrors the website's "Que programa temos para
 * oferecer?" timetable, with a hairline divider above each row.
 */
export function ScheduleRow({ time, title, subtitle, dots = 0, style = {} }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "minmax(140px, 200px) 1fr auto",
      alignItems: "center",
      gap: "24px",
      padding: "20px 4px",
      borderTop: "1.5px solid var(--border-hairline)",
      ...style,
    }}>
      <span style={{ fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: "0.95rem", letterSpacing: "0.02em", color: "var(--text-body)" }}>
        {time}
      </span>
      <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
        <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1.05rem", color: "var(--text-strong)" }}>{title}</span>
        {subtitle && <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.92rem", color: "var(--text-muted)" }}>{subtitle}</span>}
      </div>
      <div style={{ display: "flex", gap: "6px", justifySelf: "end" }}>
        {Array.from({ length: dots }).map((_, i) => (
          <span key={i} style={{ width: 16, height: 16, borderRadius: "var(--radius-full)", background: "var(--lal-vermelho)" }} />
        ))}
      </div>
    </div>
  );
}
