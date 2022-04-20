import "./grid.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {}

interface IOptionalProps {
  children?: JSX.Element | JSX.Element[];
  columnGap?: number;
  rowGap?: number;
  gapUnit?: "px" | "%" | "rem" | "em";
  columns?: number;
  gridTemplate?: [string, string];
  gridTemplateRepeatType?: "auto-fit" | "auto-fill";
  customColumns?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function Grid({
  children,
  columns,
  columnGap,
  rowGap,
  gapUnit = "px",
  gridTemplate,
  gridTemplateRepeatType = "auto-fill",
  customColumns,
  fullWidth = true,
  fullHeight = true,
}: IProps): ReactElement {
  const setStyle = () => {
    let style: React.CSSProperties = {};

    style = {
      columnGap: `${columnGap}${gapUnit}`,
      rowGap: `${rowGap}${gapUnit}`,
    };

    if (columns) {
      let _stringStyle = "";

      for (let index = 0; index < columns - 1; index++) {
        _stringStyle = _stringStyle + ` 1fr`;
      }

      style = { ...style, gridTemplateColumns: _stringStyle };
    }

    if (gridTemplate) {
      style = {
        ...style,
        gridTemplateColumns: `repeat(${gridTemplateRepeatType}, minmax(${gridTemplate[0]}, ${gridTemplate[1]}))`,
      };
    }

    if (customColumns) {
      style = {
        ...style,
        gridTemplateColumns: customColumns,
      };
    }

    return style;
  };

  return (
    <div
      className={`grid-container ${fullWidth && "full-width"} ${
        fullHeight && "full-height"
      }`}
      style={setStyle()}
    >
      {children}
    </div>
  );
}

export default Grid;
