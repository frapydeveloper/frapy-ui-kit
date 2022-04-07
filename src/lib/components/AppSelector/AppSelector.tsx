import "./app-selector.scss";

import React, { ReactElement, useState } from "react";
import Logo from "../Logo";
import { ArrowDropDown } from "@frapy/icons";

interface IRequiredProps {}

interface IOptionalProps {
  light?: boolean;
  onClick?: Function | undefined;
}

interface IProps extends IRequiredProps, IOptionalProps {}

const defaultProps: IOptionalProps = {
  light: false,
};

function AppSelector({ onClick, light }: IProps): ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={`app-selector-container ${light && "light"}`}>
      <div className="app-selector-wrapper" onClick={() => setIsOpen(!isOpen)}>
        <Logo type="full" />
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
            <Logo type="full" />
          </div>
          <div
            className="app-wrapper disabled"
            // onClick={() => {
            //   setIsOpen(false);
            //   onClick && onClick({ selectedApp: "frapy-market" });
            // }}
          >
            <Logo type="full" />
            <div className="coming-soon-wrapper">(Coming soon)</div>
          </div>
        </div>
      )}
    </div>
  );
}

AppSelector.defaultProps = defaultProps;

export default AppSelector;
