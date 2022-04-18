import "./sidenav.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {}

interface IOptionalProps {
  children?: JSX.Element | JSX.Element[] | string;
}

interface IProps extends IRequiredProps, IOptionalProps {}

const defaultProps: IOptionalProps = {};

function Sidenav({ children }: IProps): ReactElement {
  return <div className="sidenav-wrapper">{children}</div>;
}

Sidenav.defaultProps = defaultProps;

export default Sidenav;
