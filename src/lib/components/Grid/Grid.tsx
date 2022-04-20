import "./grid.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {}

interface IOptionalProps {
  children?: JSX.Element | JSX.Element[];
  columns?: number;
  gridTemplate?: [string, string];
  gridTemplateRepeatType: "auto-fit" | "auto-fill";
  customColumns?: string;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function Grid({
  children,
  columns,
  gridTemplate,
  gridTemplateRepeatType = "auto-fill",
  customColumns,
}: IProps): ReactElement {
  const setStyle = () => {
    let style: React.CSSProperties = {};

    if (columns) {
      let _stringStyle = "";

      for (let index = 0; index < columns - 1; index++) {
        _stringStyle = _stringStyle + ` 1fr`;
      }

      style = { gridTemplateColumns: _stringStyle };
    }
    if (gridTemplate) {
      style = {
        gridTemplateColumns: `repeat(${gridTemplateRepeatType}, minmax(${gridTemplate[0]}, ${gridTemplate[1]}))`,
      };
    }
    if (customColumns) {
      style = {
        gridTemplateColumns: customColumns,
      };
    }

    return style;
  };

  return (
    <div className="grid-container" style={setStyle()}>
      {children}
    </div>
  );
}

export default Grid;
