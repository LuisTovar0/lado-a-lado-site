import React from "react";
export interface TagProps {
  children?: React.ReactNode;
  /** @default "red" */
  tone?: "red" | "bordo" | "yellow" | "cream" | "outline";
  style?: React.CSSProperties;
  [key: string]: any;
}
/** Small uppercase mono chip / label. */
export function Tag(props: TagProps): JSX.Element;
