import React from "react";
export interface ScheduleRowProps {
  /** e.g. "15h00 — 15h30" */
  time: string;
  title: string;
  subtitle?: string;
  /** Number of coral dot markers on the right. @default 0 */
  dots?: number;
  style?: React.CSSProperties;
}
/** Agenda timetable row with hairline divider and coral dot markers. */
export function ScheduleRow(props: ScheduleRowProps): JSX.Element;
