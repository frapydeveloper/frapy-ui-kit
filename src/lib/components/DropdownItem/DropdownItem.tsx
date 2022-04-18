import "./dropdown-item.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {}

interface IOptionalProps {
  itemToElement?: any;
  onClick?: any;
  itemToString?: any;
  disabled?: boolean;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function DropdownItem({
  itemToElement,
  onClick,
  itemToString,
  disabled,
}: IProps): ReactElement {
  return (
    <div
      className={`dropdown-item-container ${disabled && "disabled"}`}
      onClick={() => !disabled && onClick && onClick(itemToElement)}
    >
      {itemToString({ item: itemToElement })}
    </div>
  );
}

export default DropdownItem;
