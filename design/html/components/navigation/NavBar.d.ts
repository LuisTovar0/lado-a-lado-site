import React from "react";
/**
 * Brand top navigation: logo, mono links, action button.
 * @startingPoint section="Navigation" subtitle="Top navigation bar" viewport="1280x96"
 */
export interface NavBarProps {
  links?: string[];
  cta?: string;
  onCta?: () => void;
  logoColor?: string;
  style?: React.CSSProperties;
}
export function NavBar(props: NavBarProps): JSX.Element;
