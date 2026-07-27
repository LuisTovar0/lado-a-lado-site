import React from "react";

export interface EyebrowProps {
  children?: React.ReactNode;
  /** Override colour (default brand red). */
  color?: string;
  /** @default "start" */
  align?: "start" | "center" | "end";
  as?: any;
  style?: React.CSSProperties;
  [key: string]: any;
}

/** Monospace uppercase label that sits above headings. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
