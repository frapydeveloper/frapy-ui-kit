import React from "react";

interface IRequiredProps {}

interface IOptionalProps {
  children?: JSX.Element | JSX.Element[] | string;
  onClick?: Function;
}

interface IContextMenuItem extends IRequiredProps, IOptionalProps {}

function ContextMenuItem({ children, onClick }: IContextMenuItem) {
  return (
    <li className="context-menu-item" onClick={() => onClick && onClick()}>
      {children}
    </li>
  );
}

export default ContextMenuItem;
