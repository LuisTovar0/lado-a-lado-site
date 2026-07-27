import React from "react";

/**
 * Pill action button with an uppercase Overpass Mono label.
 * @startingPoint section="Core" subtitle="Pill button — filled & outline" viewport="700x180"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "deep" | "outline" | "outline-light" | "ghost";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Render as a different element, e.g. "a". @default "button" */
  as?: any;
  disabled?: boolean;
  style?: React.CSSProperties;
  [key: string]: any;
}

/**
 * Pill action button with an uppercase Overpass Mono label.
 */
export function Button(props: ButtonProps): JSX.Element;
