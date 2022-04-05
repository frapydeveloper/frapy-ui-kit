import "./navbar.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {}

interface IOptionalProps {
  type?: "dark" | "light" | "fluid";
  leftItems?: JSX.Element | JSX.Element[];
  middleItems?: JSX.Element | JSX.Element[];
  rightItems?: JSX.Element | JSX.Element[];
}

interface IProps extends IRequiredProps, IOptionalProps {}

const defaultProps: IOptionalProps = {
  type: "dark",
};

function Navbar({
  type,
  leftItems,
  middleItems,
  rightItems,
}: IProps): ReactElement {
  return (
    <div className={`navbar-container ${type}`}>
      <div className="navbar-wrapper">
        <div className="left-wrapper">{leftItems}</div>
        <div className="right-wrapper">{rightItems}</div>
      </div>
      <div className="middle-wrapper">{middleItems}</div>
    </div>
  );
}

Navbar.defaultProps = defaultProps;

export default Navbar;
