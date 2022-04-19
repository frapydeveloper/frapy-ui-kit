import React, { ReactElement } from "react";

interface IRequiredProps {
  children: React.ReactChild | React.ReactChild[] | string | string[];
}

interface IOptionalProps {
  id?: string;
  onClick?: any;
  light?: boolean;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function OverflowMenuItem({
  children,
  id,
  onClick,
  light = false,
}: IProps): ReactElement {
  return (
    <div
      id={id}
      className={`overflow-menu-item-container ${light && "light"}`}
      onClick={() => onClick && onClick()}
    >
      {children}
    </div>
  );
}

export default OverflowMenuItem;
