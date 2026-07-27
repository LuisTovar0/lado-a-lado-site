import React from "react";
export interface CardProps {
  children?: React.ReactNode;
  /** @default "card" */
  tone?: "card" | "cream" | "band" | "footer" | "ink";
  /** Hard ink offset shadow + black border. @default false */
  edge?: boolean;
  padding?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}
/** Generic content surface in brand tones. */
export function Card(props: CardProps): JSX.Element;
