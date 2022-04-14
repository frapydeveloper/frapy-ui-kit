import React, { ReactElement } from "react";

interface IRequiredProps {
  children: React.ReactChild | React.ReactChild[] | string | string[];
}

interface IOptionalProps {
  onClick?: any;
  light?: boolean;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function OverflowMenuItem({
  children,
  onClick,
  light = false,
}: IProps): ReactElement {
  return (
    <div
      className={`overflow-menu-item-container ${light && "light"}`}
      onClick={() => onClick && onClick()}
    >
      {children}
    </div>
  );
}

export default OverflowMenuItem;
