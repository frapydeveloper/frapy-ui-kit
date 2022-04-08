import "./loading.scss";

import React, { ReactElement } from "react";
import Logo from "../Logo";

interface IRequiredProps {}

interface IOptionalProps {}

interface IProps extends IRequiredProps, IOptionalProps {}

function Loading({}: IProps): ReactElement {
  return (
    <div className="loading-container">
      <div className="loading-wrapper">
        <Logo application="frapy" type="full" size={32} />
        <div className="loading-bar">
          <div className="status-indicator" />
        </div>
      </div>
    </div>
  );
}

export default Loading;
