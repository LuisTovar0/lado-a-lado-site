import React from "react";
export interface HandMicProps {
  /** Rendered width in px. @default 300 */
  width?: number;
  /** currentColor. @default bordô */
  color?: string;
  style?: React.CSSProperties;
}
/** Hand-drawn "hand holding microphone" illustration (speakers section). */
export function HandMic(props: HandMicProps): JSX.Element;
