import React from "react";
/**
 * Full-bleed yellow feature / divider band.
 * @startingPoint section="Core" subtitle="Yellow feature band" viewport="1280x180"
 */
export interface FeatureBandProps {
  children?: React.ReactNode;
  /** Optional right-aligned action (e.g. a Button). */
  action?: React.ReactNode;
  /** @default "yellow" */
  tone?: "yellow" | "bordo";
  /** @default "center" */
  align?: "center" | "start";
  style?: React.CSSProperties;
}
export function FeatureBand(props: FeatureBandProps): JSX.Element;
