import "./multi-select-item.scss";

import React, { ReactElement } from "react";
import { Add } from "@frapy/icons";

interface IRequiredProps {}

interface IOptionalProps {
  itemToElement?: any;
  onClick?: any;
  itemToString?: any;
  disabled?: boolean;
  selected?: boolean;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function MultiSelectItem({
  itemToElement,
  onClick,
  itemToString,
  disabled,
  selected,
}: IProps): ReactElement {
  return (
    <div
      className={`multi-select-item-container ${disabled && "disabled"} ${
        selected && "selected"
      }`}
      onClick={() => !disabled && onClick && onClick(itemToElement)}
    >
      {selected && <Add size={16} />}
      <div>{itemToString({ item: itemToElement })}</div>
    </div>
  );
}

export default MultiSelectItem;
