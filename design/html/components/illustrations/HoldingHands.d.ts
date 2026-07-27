import React from "react";
/**
 * Hand-drawn "holding hands" hero illustration (the signature brand image).
 * @startingPoint section="Brand" subtitle="Holding-hands hero illustration" viewport="700x460"
 */
export interface HoldingHandsProps {
  /** Rendered width in px; height scales to the art. @default 600 */
  width?: number;
  /** currentColor for the ink line art. @default brand black */
  color?: string;
  style?: React.CSSProperties;
}
export function HoldingHands(props: HoldingHandsProps): JSX.Element;
