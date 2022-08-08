import {
  Error as ErrorIcon,
} from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";

import { COLOR } from "../constant";

export const iconTypes = ["error"] as const;

export type IconType = typeof iconTypes[number];

const typeToIconMap: Record<IconType, OverridableComponent<SvgIconTypeMap>> = {
  error: ErrorIcon,
};
interface IconProps {
  type: IconType;
  color?: string;
}

const Icon = ({ color, type }: IconProps) => {
  const IconFromMap = typeToIconMap[type];

  return (
    <IconFromMap style={{ fill: color ? color : COLOR.GRAYSCALE_MEDIUM }} />
  );
};

export { Icon };
