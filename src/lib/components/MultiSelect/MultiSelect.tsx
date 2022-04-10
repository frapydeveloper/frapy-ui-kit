import "./multi-select.scss";

import React, { ReactElement, useEffect, useRef, useState } from "react";
import { onClickOutside } from "@frapy/utils";
import { ArrowDropDown } from "@frapy/icons";
import MultiSelectItem from "../MultiSelectItem";

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
  selectionKey?: string;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function MultiSelect({
  items,
  titleText,
  onChange,
  itemToString,
  initialSelectedItem,
  direction = "bottom",
  size = "sm",
  fullWidth = false,
  disabled = false,
  selectionKey,
}: IProps): ReactElement {
  const [selected, setSelected] = useState<any[]>([]);
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);

  const target = useRef(null);
  onClickOutside({ target, callback: setIsDropdownActive });

  const addSelection = (item: any) => {
    let array = selected;

    const index = array.findIndex((element: any) => element === item);

    if (index < 0) {
      array.push(item);

      onChange && onChange({ selectedItems: array });

      setSelected([...array]);
    }
  };

  const removeSelection = (item: any) => {
    let array = selected;

    const index = array.findIndex((element: any) => element === item);

    array.splice(index, 1);

    onChange && onChange({ selectedItems: array });

    setSelected([...array]);
  };

  const clearSelection = () => {
    onChange && onChange({ selectedItems: [] });

    setSelected([]);
  };

  return (
    <div
      className={`multi-select-container ${fullWidth && "full-width"}`}
      ref={target}
    >
      <div
        className={`dropdown-input-wrapper ${size} ${
          isDropdownActive && "active"
        } ${selected?.length > 0 && "has-selection"} ${disabled && "disabled"}`}
        onClick={() =>
          !disabled &&
          selected?.length === 0 &&
          setIsDropdownActive(!isDropdownActive)
        }
      >
        <div className="selections">
          {selected?.length > 0 ? (
            <>
              {selected?.map(
                (item: any, index: number) =>
                  index === 0 && (
                    <div
                      className="selection"
                      onClick={() => removeSelection(item)}
                    >
                      {itemToString &&
                        itemToString({
                          item,
                        })}
                    </div>
                  )
              )}
              {selected?.length > 1 && (
                <div className="selection merged">+{selected?.length - 1}</div>
              )}
            </>
          ) : (
            <div className="title-text">{titleText}</div>
          )}
        </div>
        <div
          className={`icon-wrapper ${selected?.length > 0 && "has-selection"}`}
          onClick={() =>
            !disabled &&
            selected?.length > 0 &&
            setIsDropdownActive(!isDropdownActive)
          }
        >
          <ArrowDropDown />
        </div>
      </div>
      {/* {selected?.length > 0 && (
        <div className="clear-selection" onClick={() => clearSelection()}>
          Clear
        </div>
      )} */}
      {isDropdownActive && (
        <div className={`dropdown-wrapper ${"direction-" + direction} `}>
          {items?.map((item: any, index: number) => (
            <MultiSelectItem
              itemToString={({ item }: any) =>
                itemToString && itemToString({ item: item?.props?.children })
              }
              itemToElement={<div>{item}</div>}
              onClick={(event: any) => {
                selected.find((element: any) => element === item)
                  ? removeSelection(item)
                  : addSelection(item);
              }}
              selected={selected.find((element: any) => element === item)}
              disabled={item?.disabled}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MultiSelect;
