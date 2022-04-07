import "./sidenav-menu.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {}

interface IOptionalProps {
  children?: JSX.Element | JSX.Element[] | string;
  labelText?: string;
  hideLabel?: boolean;
  menuItems?: any;
}

interface IProps extends IRequiredProps, IOptionalProps {}

const defaultProps: IOptionalProps = {
  labelText: "Menu Title",
  hideLabel: false,
};

function SidenavMenu({ children, labelText, hideLabel }: IProps): ReactElement {
  return (
    <div className="sidenav-menu-wrapper">
      {!hideLabel && <div className="sidenav-menu-title">{labelText}</div>}
      <div className="sidenav-menu-items">{children}</div>
    </div>
  );
}

SidenavMenu.defaultProps = defaultProps;

export default SidenavMenu;
