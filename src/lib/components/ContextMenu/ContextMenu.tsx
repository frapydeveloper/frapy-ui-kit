import "./context-menu.scss";

import React from "react";

import { useContextMenu } from "@frapy/utils";

interface IRequiredProps {
  id: string;
}

interface IOptionalProps {
  children?: JSX.Element | JSX.Element[] | string;
}

interface IContextMenu extends IRequiredProps, IOptionalProps {}

function ContextMenu({ id, children }: IContextMenu) {
  const { anchorPoint, show } = useContextMenu({ id });

  if (show) {
    return (
      <ul className="menu" style={{ top: anchorPoint.y, left: anchorPoint.x }}>
        {children}
      </ul>
    );
  }
  return <></>;
}

export default ContextMenu;
