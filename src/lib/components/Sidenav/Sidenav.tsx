import "./sidenav.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {}

interface IOptionalProps {
  id?: string;
  children?: JSX.Element | JSX.Element[] | string;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function Sidenav({ id, children }: IProps): ReactElement {
  return (
    <div id={id} className="sidenav-wrapper">
      {children}
    </div>
  );
}

export default Sidenav;
