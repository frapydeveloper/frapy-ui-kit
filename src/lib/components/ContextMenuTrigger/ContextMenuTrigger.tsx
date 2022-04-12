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
  // const clones = React.Children.map(children, (child: any) => {
  //   return React.cloneElement(child, { id });
  // });

  return React.cloneElement(children, { id });
}

export default ContextMenuTrigger;
