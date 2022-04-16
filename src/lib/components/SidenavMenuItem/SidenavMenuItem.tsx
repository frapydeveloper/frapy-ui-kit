import "./sidenav-menu-item.scss";

import React, { ReactElement, useState } from "react";
import { KeyboardArrowRight } from "@frapy/icons";

interface IRequiredProps {}

interface IOptionalProps {
  children?: any;
  labelText?: string;
  hideLabel?: boolean;
  active?: boolean;
  onClick?: Function | undefined;
  icon?: any;
}

interface IProps extends IRequiredProps, IOptionalProps {}

const defaultProps: IOptionalProps = {
  hideLabel: false,
  active: false,
};

function SidenavMenuItem({
  children,
  labelText,
  active,
  onClick,
  icon,
}: IProps): ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return labelText ? (
    <div className="sidenav-sub-menu-wrapper">
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
      className={`sidenav-menu-item-wrapper ${active && "active"}`}
      onClick={() => onClick && onClick()}
    >
      {icon && <div className="icon-wrapper">{icon}</div>}
      <div className="title">{children}</div>
    </div>
  );
}

SidenavMenuItem.defaultProps = defaultProps;

export default SidenavMenuItem;
