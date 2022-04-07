import "./card.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {}

interface IOptionalProps {
  children?: JSX.Element | JSX.Element[] | string;
  padding?: "sm" | "md" | "lg";
  backgroundStyle?: "solid" | "linear" | "radial";
  primaryColor?: string;
  secondaryColor?: string;
  direction?: string;
  fullWidth?: boolean;
}

interface IProps extends IRequiredProps, IOptionalProps {}

const defaultProps: IOptionalProps = {
  padding: "sm",
  backgroundStyle: "solid",
  primaryColor: "#ffffff",
  secondaryColor: "#000000",
  direction: "to right bottom",
};

function Card({
  children,
  padding,
  backgroundStyle,
  primaryColor,
  secondaryColor,
  direction,
  fullWidth,
}: IProps): ReactElement {
  const setStyle = () => {
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
      className={`card-wrapper ${padding} ${fullWidth && "full-width"}`}
      style={{ background: setStyle() }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = defaultProps;

export default Card;
