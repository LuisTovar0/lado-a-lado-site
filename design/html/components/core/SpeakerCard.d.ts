import React from "react";
/**
 * Avatar + name / role / organisation row.
 * @startingPoint section="Core" subtitle="Speaker / person card" viewport="700x140"
 */
export interface SpeakerCardProps {
  name: string;
  role?: string;
  org?: string;
  src?: string;
  initials?: string;
  /** Avatar diameter. @default 80 */
  size?: number;
  style?: React.CSSProperties;
}
export function SpeakerCard(props: SpeakerCardProps): JSX.Element;
