import React from "react";
/**
 * "ladoalado" script wordmark (self-contained SVG).
 * @startingPoint section="Navigation" subtitle="Brand wordmark" viewport="700x160"
 */
export interface LogoProps {
  /** Pixel width; height scales to the wordmark aspect. @default 180 */
  width?: number;
  /** currentColor value — ink, cream or bordô to suit the surface. */
  color?: string;
  title?: string;
  style?: React.CSSProperties;
}
export function Logo(props: LogoProps): JSX.Element;
