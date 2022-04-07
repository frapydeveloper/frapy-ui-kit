import "./card.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {
  padding: [number, number];
}

interface IOptionalProps {
  children?: JSX.Element | JSX.Element[] | string;
  backgroundStyle?: "solid" | "linear" | "radial";
  primaryColor?: string;
  secondaryColor?: string;
  direction?: string;
  fullWidth?: boolean;
}

interface IProps extends IRequiredProps, IOptionalProps {}

const defaultProps: IOptionalProps = {
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
      style={{
        background: setStyle(),
        padding: `${padding[0]}px ${padding[1]}px`,
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = defaultProps;

export default Card;
