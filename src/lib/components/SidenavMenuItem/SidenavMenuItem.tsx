import "./sidenav-menu-item.scss";

import React, {
  ReactChild,
  ReactChildren,
  ReactElement,
  useState,
} from "react";

interface IRequiredProps {}

interface IOptionalProps {
  children?: JSX.Element | JSX.Element[] | string;
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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  switch (labelText ? true : false) {
    case true:
      return (
        <div className="sidenav-sub-menu-wrapper">
          <div
            className="sidenav-sub-menu-title"
            onClick={() => setIsOpen(!isOpen)}
          >
            + {labelText}
          </div>
          {isOpen && <div className="sidenav-sub-menu-items">{children}</div>}
        </div>
      );

    case false:
      return (
        <div className={`sidenav-menu-item-wrapper ${active && "active"}`}>
          {children}
        </div>
      );

    default:
      return <></>;
  }
}

SidenavMenuItem.defaultProps = defaultProps;

export default SidenavMenuItem;
