import "./typography.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {}

interface IOptionalProps {
  id?: string;
  variant?:
    | "primary"
    | "secondary"
    | "warning"
    | "danger"
    | "success"
    | "custom";
  primaryColor?: string;
  colorStyle?: "solid" | "linear" | "radial";
  secondaryColor?: string;
  direction?: string;
  children?: JSX.Element | JSX.Element[] | string;
  textAlign?: "left" | "center" | "right" | "justify";
  type?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "h7"
    | "h8"
    | "h9"
    | "h10"
    | "menu1"
    | "menu2"
    | "body1"
    | "body2"
    | "body3"
    | "body4"
    | "subhead1"
    | "subhead2"
    | "subhead3"
    | "subhead4";
}

interface IProps extends IRequiredProps, IOptionalProps {}

const defaultProps: IOptionalProps = {
  type: "h1",
};

function Typography({
  id,
  variant,
  primaryColor,
  colorStyle,
  secondaryColor,
  direction = "to left top",
  children,
  type,
  textAlign,
}: IProps): ReactElement {
  const setStyle = () => {
    switch (colorStyle) {
      case "solid":
        return {
          color: `${primaryColor}`,
        };

      case "linear":
      case "radial":
        return {
          background: `${`linear-gradient(${direction},${primaryColor}, ${secondaryColor} 100%)`}`,
          WebkitTextFillColor: `transparent`,
        };

      default:
        break;
    }
  };

  switch (type) {
    case "h1":
      return (
        <div id={id} className="typography-container" style={setStyle()}>
          <h1
            className={variant}
            style={{ textAlign: textAlign, color: `${primaryColor}` }}
          >
            {children}
          </h1>
        </div>
      );
    case "h2":
      return (
        <div id={id} className="typography-container" style={setStyle()}>
          <h2
            className={variant}
            style={{ textAlign: textAlign, color: `${primaryColor}` }}
          >
            {children}
          </h2>
        </div>
      );
    case "h3":
      return (
        <div id={id} className="typography-container" style={setStyle()}>
          <h3
            className={variant}
            style={{ textAlign: textAlign, color: `${primaryColor}` }}
          >
            {children}
          </h3>
        </div>
      );
    case "h4":
      return (
        <div id={id} className="typography-container" style={setStyle()}>
          <h4
            className={variant}
            style={{ textAlign: textAlign, color: `${primaryColor}` }}
          >
            {children}
          </h4>
        </div>
      );
    case "h5":
      return (
        <div id={id} className="typography-container" style={setStyle()}>
          <h5
            className={variant}
            style={{ textAlign: textAlign, color: `${primaryColor}` }}
          >
            {children}
          </h5>
        </div>
      );
    case "h6":
      return (
        <div id={id} className="typography-container" style={setStyle()}>
          <h6
            className={variant}
            style={{ textAlign: textAlign, color: `${primaryColor}` }}
          >
            {children}
          </h6>
        </div>
      );
    case "h7":
      return (
        <div id={id} className="typography-container" style={setStyle()}>
          <div
            className={`h7 ${variant}`}
            style={{ textAlign: textAlign, color: `${primaryColor}` }}
          >
            {children}
          </div>
        </div>
      );
    case "h8":
      return (
        <div id={id} className="typography-container" style={setStyle()}>
          <div
            className={`h8 ${variant}`}
            style={{ textAlign: textAlign, color: `${primaryColor}` }}
          >
            {children}
          </div>
        </div>
      );
    case "h9":
      return (
        <div id={id} className="typography-container" style={setStyle()}>
          <div
            className={`h9 ${variant}`}
            style={{ textAlign: textAlign, color: `${primaryColor}` }}
          >
            {children}
          </div>
        </div>
      );
    case "h10":
      return (
        <div id={id} className="typography-container" style={setStyle()}>
          <div
            className={`h10 ${variant}`}
            style={{ textAlign: textAlign, color: `${primaryColor}` }}
          >
            {children}
          </div>
        </div>
      );

    case "menu1":
      return (
        <div id={id} className="typography-container" style={setStyle()}>
          <div
            className={`menu-1 ${variant}`}
            style={{ textAlign: textAlign, color: `${primaryColor}` }}
          >
            {children}
          </div>
        </div>
      );
    case "menu2":
      return (
        <div id={id} className="typography-container" style={setStyle()}>
          <div
            className={`menu-2 ${variant}`}
            style={{ textAlign: textAlign, color: `${primaryColor}` }}
          >
            {children}
          </div>
        </div>
      );

    case "body1":
      return (
        <div id={id} className="typography-container" style={setStyle()}>
          <div
            className={`body-1 ${variant}`}
            style={{ textAlign: textAlign, color: `${primaryColor}` }}
          >
            {children}
          </div>
        </div>
      );
    case "body2":
      return (
        <div id={id} className="typography-container" style={setStyle()}>
          <div
            className={`body-2 ${variant}`}
            style={{ textAlign: textAlign, color: `${primaryColor}` }}
          >
            {children}
          </div>
        </div>
      );
    case "body3":
      return (
        <div id={id} className="typography-container" style={setStyle()}>
          <div
            className={`body-3 ${variant}`}
            style={{ textAlign: textAlign, color: `${primaryColor}` }}
          >
            {children}
          </div>
        </div>
      );
    case "body4":
      return (
        <div id={id} className="typography-container" style={setStyle()}>
          <div
            className={`body-4 ${variant}`}
            style={{ textAlign: textAlign, color: `${primaryColor}` }}
          >
            {children}
          </div>
        </div>
      );

    case "subhead1":
      return (
        <div id={id} className="typography-container" style={setStyle()}>
          <div
            className={`subhead-1 ${variant}`}
            style={{ textAlign: textAlign, color: `${primaryColor}` }}
          >
            {children}
          </div>
        </div>
      );
    case "subhead2":
      return (
        <div id={id} className="typography-container" style={setStyle()}>
          <div
            className={`subhead-2 ${variant}`}
            style={{ textAlign: textAlign, color: `${primaryColor}` }}
          >
            {children}
          </div>
        </div>
      );
    case "subhead3":
      return (
        <div id={id} className="typography-container" style={setStyle()}>
          <div
            className={`subhead-3 ${variant}`}
            style={{ textAlign: textAlign, color: `${primaryColor}` }}
          >
            {children}
          </div>
        </div>
      );
    case "subhead4":
      return (
        <div id={id} className="typography-container" style={setStyle()}>
          <div
            className={`subhead-4 ${variant}`}
            style={{ textAlign: textAlign, color: `${primaryColor}` }}
          >
            {children}
          </div>
        </div>
      );

    default:
      break;
  }
  return <></>;
}

Typography.defaultProps = defaultProps;

export default Typography;
