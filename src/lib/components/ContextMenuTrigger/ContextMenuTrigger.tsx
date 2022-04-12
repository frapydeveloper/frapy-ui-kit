import React, { ReactElement } from "react";

interface IRequiredProps {
  id: string;
}

interface IOptionalProps {
  children: JSX.Element;
}

interface IContextMenuTrigger extends IRequiredProps, IOptionalProps {}

function ContextMenuTrigger({
  id,
  children,
}: IContextMenuTrigger): ReactElement {
  return React.cloneElement(children, { id });
}

export default ContextMenuTrigger;
