import React from "react";

/**
 * Eyebrow + serif display title block.
 * @startingPoint section="Core" subtitle="Eyebrow + serif section title" viewport="700x220"
 */
export interface SectionHeadingProps {
  /** Optional mono eyebrow above the title. */
  eyebrow?: React.ReactNode;
  children?: React.ReactNode;
  /** @default "center" */
  align?: "start" | "center" | "end";
  /** @default "m" */
  size?: "m" | "l" | "xl";
  color?: string;
  eyebrowColor?: string;
  style?: React.CSSProperties;
}

export function SectionHeading(props: SectionHeadingProps): JSX.Element;
