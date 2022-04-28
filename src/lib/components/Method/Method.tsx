import "./method.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {
  type: "post" | "get" | "put" | "delete" | "patch";
}

interface IOptionalProps {}

interface IProps extends IRequiredProps, IOptionalProps {}

function Method({ type }: IProps): ReactElement {
  return <div className={`method-container ${type}`}>{type}</div>;
}

export default Method;
