import "./card.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {}

interface IOptionalProps {
  children?: JSX.Element | JSX.Element[] | string;
  backgroundStyle?: "solid" | "linear" | "radial";
  primaryColor?: string;
  secondaryColor?: string;
  direction?: string;
  width?: number;
  height?: number;
  fullWidth?: boolean;
  fullHeight?: boolean;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function Card({
  children,
  backgroundStyle = "solid",
  primaryColor = "#ffffff",
  secondaryColor = "#000000",
  direction = "to right bottom",
  width,
  height,
  fullWidth = false,
  fullHeight = false,
}: IProps): ReactElement {
  const setBackground = () => {
    switch (backgroundStyle) {
      case "solid":
        return primaryColor;
      case "linear":
        return `linear-gradient(${direction}, ${primaryColor}, ${secondaryColor})`;
      case "radial":
        return `radial-gradient(${direction}, ${primaryColor}, ${secondaryColor})`;
      default:
        break;
    }
  };

  return (
    <div
      className={`card-wrapper ${fullWidth && "full-width"} ${
        fullHeight && "full-height"
      }`}
      style={{
        background: setBackground(),
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {children}
    </div>
  );
}

export default Card;
