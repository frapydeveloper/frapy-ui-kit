import "./divider.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {}

interface IOptionalProps {}

interface IProps extends IRequiredProps, IOptionalProps {}

const defaultProps: IOptionalProps = {};

function Divider({}: IProps): ReactElement {
  return <div className="divider-wrapper" />;
}

Divider.defaultProps = defaultProps;

export default Divider;
