import "./dropdown.scss";

import React, { ReactElement, useEffect, useRef, useState } from "react";
import { onClickOutside } from "@frapy/utils";
import { ArrowDropDown } from "@frapy/icons";
import DropdownItem from "../DropdownItem";

interface IRequiredProps {
  items: any[];
}

interface IOptionalProps {
  onChange?: any;
  initialSelectedItem?: number;
  labelText?: string;
  hideLabel?: boolean;
  titleText?: string;
  itemToString?: Function;
  itemToElement?: Function;
  direction?: "bottom" | "top";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function Dropdown({
  items,
  titleText,
  onChange,
  itemToString,
  initialSelectedItem,
  direction = "bottom",
  size = "sm",
  fullWidth = false,
  disabled = false,
}: IProps): ReactElement {
  const [selected, setSelected] = useState<number>();
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);

  const target = useRef(null);
  onClickOutside({ target, callback: setIsDropdownActive });

  useEffect(() => {
    if (initialSelectedItem) {
      setSelected(items[initialSelectedItem]);
    }
  }, []);

  return (
    <div
      className={`dropdown-container ${fullWidth && "full-width"}`}
      ref={target}
    >
      <div
        className={`dropdown-input-wrapper ${size} ${
          isDropdownActive && "active"
        } ${disabled && "disabled"}`}
        onClick={() => !disabled && setIsDropdownActive(!isDropdownActive)}
      >
        {selected ? (
          <div className="selected-item">
            {itemToString && itemToString({ item: selected })}
          </div>
        ) : (
          <div className="title-text">{titleText}</div>
        )}
        <ArrowDropDown />
      </div>
      {isDropdownActive && (
        <div className={`dropdown-wrapper ${"direction-" + direction} `}>
          {items?.map((item: any, index: number) => (
            <DropdownItem
              itemToString={({ item }: any) =>
                itemToString && itemToString({ item: item?.props?.children })
              }
              itemToElement={<div>{item}</div>}
              onClick={(event: any) => {
                onChange && onChange({ selectedItem: items[index] });
                setSelected(items[index]);
                setIsDropdownActive(false);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
