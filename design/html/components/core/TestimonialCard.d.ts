import React from "react";
/**
 * Serif quote card with attributed person.
 * @startingPoint section="Core" subtitle="Testimonial / quote card" viewport="700x320"
 */
export interface TestimonialCardProps {
  quote: React.ReactNode;
  name: string;
  role?: string;
  src?: string;
  initials?: string;
  style?: React.CSSProperties;
}
export function TestimonialCard(props: TestimonialCardProps): JSX.Element;
