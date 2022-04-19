import "./sidenav-menu-item.scss";

import React, { ReactElement, useState } from "react";
import { KeyboardArrowRight } from "@frapy/icons";

interface IRequiredProps {}

interface IOptionalProps {
  id?: string;
  children?: any;
  labelText?: string;
  hideLabel?: boolean;
  active?: boolean;
  onClick?: Function | undefined;
  icon?: any;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function SidenavMenuItem({
  id,
  children,
  labelText,
  hideLabel = false,
  active = false,
  onClick,
  icon,
}: IProps): ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return labelText ? (
    <div id={id} className="sidenav-sub-menu-wrapper">
      <div
        className="sidenav-sub-menu-title"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`icon-wrapper 
  
        `}
        >
          <KeyboardArrowRight size={24} />
        </div>
        <span>{labelText}</span>
      </div>
      {isOpen && (
        <div
          className="sidenav-sub-menu-items"
          onClick={() => onClick && onClick()}
        >
          {children}
        </div>
      )}
    </div>
  ) : (
    <div
      id={id}
      className={`sidenav-menu-item-wrapper ${active && "active"}`}
      onClick={() => onClick && onClick()}
    >
      {icon && <div className="icon-wrapper">{icon}</div>}
      <div className="title">{children}</div>
    </div>
  );
}

export default SidenavMenuItem;
