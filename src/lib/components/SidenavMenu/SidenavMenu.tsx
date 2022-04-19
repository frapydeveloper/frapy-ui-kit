import "./sidenav-menu.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {}

interface IOptionalProps {
  id?: string;
  children?: JSX.Element | JSX.Element[] | string;
  labelText?: string;
  hideLabel?: boolean;
  menuItems?: any;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function SidenavMenu({
  id,
  children,
  labelText = "Menu Title",
  hideLabel = false,
}: IProps): ReactElement {
  return (
    <div id={id} className="sidenav-menu-wrapper">
      {!hideLabel && <div className="sidenav-menu-title">{labelText}</div>}
      <div className="sidenav-menu-items">{children}</div>
    </div>
  );
}

export default SidenavMenu;
