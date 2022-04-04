import "./typography.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {}

interface IOptionalProps {
  children?: JSX.Element | JSX.Element[] | string;
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

function Typography({ children, type }: IProps): ReactElement {
  switch (type) {
    case "h1":
      return <h1>{children}</h1>;
    case "h2":
      return <h2>{children}</h2>;
    case "h3":
      return <h3>{children}</h3>;
    case "h4":
      return <h4>{children}</h4>;
    case "h5":
      return <h5>{children}</h5>;
    case "h6":
      return <h6>{children}</h6>;
    case "h7":
      return <div className="h7">{children}</div>;
    case "h8":
      return <div className="h8">{children}</div>;
    case "h9":
      return <div className="h9">{children}</div>;
    case "h10":
      return <div className="h10">{children}</div>;

    case "menu1":
      return <div className="menu-1">{children}</div>;
    case "menu2":
      return <div className="menu-2">{children}</div>;

    case "body1":
      return <div className="body-1">{children}</div>;
    case "body2":
      return <div className="body-2">{children}</div>;
    case "body3":
      return <div className="body-3">{children}</div>;
    case "body4":
      return <div className="body-4">{children}</div>;

    case "subhead1":
      return <div className="subhead-1">{children}</div>;
    case "subhead2":
      return <div className="subhead-2">{children}</div>;
    case "subhead3":
      return <div className="subhead-3">{children}</div>;
    case "subhead4":
      return <div className="subhead-4">{children}</div>;

    default:
      break;
  }
  return <></>;
}

Typography.defaultProps = defaultProps;

export default Typography;
