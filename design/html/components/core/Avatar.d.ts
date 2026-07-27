import React from "react";
export interface AvatarProps {
  src?: string;
  alt?: string;
  /** Fallback initials shown on the solid disc. */
  initials?: string;
  /** Pixel diameter. @default 72 */
  size?: number;
  /** @default "red" */
  tone?: "red" | "bordo" | "yellow";
  style?: React.CSSProperties;
}
/** Circular avatar — image or solid coral disc. */
export function Avatar(props: AvatarProps): JSX.Element;
