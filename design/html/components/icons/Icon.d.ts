import * as React from 'react';
export type IconName =
  | "CoffeeSize16"
  | "CoffeeSize20"
  | "CoffeeSize24"
  | "CoffeeSize32"
  | "CoffeeSize40"
  | "CoffeeSize48"
  | "Heart"
  | "SmileSize16"
  | "SmileSize20"
  | "SmileSize24"
  | "SmileSize32"
  | "SmileSize40"
  | "SmileSize48"
  | "SmileyHappyPlus";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
