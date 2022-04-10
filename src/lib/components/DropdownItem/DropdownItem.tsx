import "./dropdown-item.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {}

interface IOptionalProps {
  itemToElement?: any;
  onClick?: any;
  itemToString?: any;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function DropdownItem({
  itemToElement,
  onClick,
  itemToString,
}: IProps): ReactElement {
  return (
    <div
      className="dropdown-item-container"
      onClick={() => onClick && onClick(itemToElement)}
    >
      {itemToString({ item: itemToElement })}
    </div>
  );
}

export default DropdownItem;
