import "./app-selector.scss";

import React, { ReactElement, useRef, useState } from "react";
import Logo from "../Logo";
import { ArrowDropDown } from "@frapy/icons";
import { onClickOutside } from "@frapy/utils";

interface IRequiredProps {}

export interface IOptionalProps {
  light?: boolean;
  onClick?: Function | undefined;
}

export interface IProps extends IRequiredProps, IOptionalProps {}

const defaultProps: IOptionalProps = {
  light: false,
};

const AppSelector = ({ onClick, light }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const target = useRef(null);
  onClickOutside({ target, callback: setIsOpen });

  return (
    <div className={`app-selector-container ${light && "light"}`} ref={target}>
      <div className="app-selector-wrapper" onClick={() => setIsOpen(!isOpen)}>
        <Logo application="frapy" type="full" />
        <ArrowDropDown />
      </div>
      {isOpen && (
        <div className="apps-wrapper">
          <div
            className="app-wrapper"
            onClick={() => {
              setIsOpen(false);
              onClick && onClick({ selectedApp: "frapy" });
            }}
          >
            <Logo application="frapy" type="full" />
          </div>
          <div
            className="app-wrapper disabled"
            // onClick={() => {
            //   setIsOpen(false);
            //   onClick && onClick({ selectedApp: "frapy-market" });
            // }}
          >
            <Logo application="frapy-market" type="full" />
            <div className="coming-soon-wrapper">(Coming soon)</div>
          </div>
        </div>
      )}
    </div>
  );
};

AppSelector.defaultProps = defaultProps;

export default AppSelector;
