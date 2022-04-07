import "./sidenav-menu-item.scss";

import React, { ReactElement, useState } from "react";
import { KeyboardArrowRight } from "@frapy/icons";

interface IRequiredProps {}

interface IOptionalProps {
  children?: any;
  labelText?: string;
  hideLabel?: boolean;
  active?: boolean;
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
}: IProps): ReactElement {
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  return labelText ? (
    <div className="sidenav-sub-menu-wrapper">
      <div
        className="sidenav-sub-menu-title"
        // onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`icon-wrapper 
  
        `}
        >
          <KeyboardArrowRight size={24} />
        </div>
        <span>{labelText}</span>
      </div>
      {<div className="sidenav-sub-menu-items">{children}</div>}
    </div>
  ) : (
    <div className={`sidenav-menu-item-wrapper ${active && "active"}`}>
      {children}
    </div>
  );
}

SidenavMenuItem.defaultProps = defaultProps;

export default SidenavMenuItem;
