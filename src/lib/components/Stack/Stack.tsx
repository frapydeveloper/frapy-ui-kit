import "./stack.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {}

interface IOptionalProps {
  children?: JSX.Element | JSX.Element[] | string;
  padding?: [number] | [number, number] | [number, number, number, number];
  paddingUnit?: "px" | "rem" | "em";
  margin?: [number] | [number, number] | [number, number, number, number];
  marginUnit?: "px" | "rem" | "em";
  rowGap?: number;
  rowGapUnit?: "px" | "rem" | "em";
  columnGap?: number;
  columnGapUnit?: "px" | "rem" | "em";
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  alignItem?: "flex-start" | "center" | "flex-end" | "space-between";
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
  fullWidth?: boolean;
  styles?: any;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function Stack({
  children,
  padding = [0],
  paddingUnit = "px",
  margin = [0],
  marginUnit = "px",
  rowGap,
  rowGapUnit = "px",
  columnGap,
  columnGapUnit = "px",
  direction = "column",
  alignItem = "flex-start",
  justifyContent = "flex-start",
  fullWidth = true,
  styles,
}: IProps): ReactElement {
  const setPadding = () => {
    switch (padding?.length) {
      case 1:
        return `${padding[0]}${paddingUnit}`;
      case 2:
        return `${padding[0]}${paddingUnit} ${padding[1]}${paddingUnit}`;
      case 4:
        return `${padding[0]}${paddingUnit} ${padding[1]}${paddingUnit} ${padding[2]}${paddingUnit} ${padding[3]}${paddingUnit}`;

      default:
        break;
    }
  };

  const setMargin = () => {
    switch (margin?.length) {
      case 1:
        return `${margin[0]}${marginUnit}`;
      case 2:
        return `${margin[0]}${marginUnit} ${margin[1]}${marginUnit}`;
      case 4:
        return `${margin[0]}${marginUnit} ${margin[1]}${marginUnit} ${margin[2]}${marginUnit} ${margin[3]}${marginUnit}`;

      default:
        break;
    }
  };

  return (
    <div
      className={`stack-container ${fullWidth && "full-width"}`}
      style={{
        padding: setPadding(),
        margin: setMargin(),
        display: "flex",
        flexDirection: direction,
        columnGap: `${columnGap}${columnGapUnit}`,
        rowGap: `${rowGap}${rowGapUnit}`,
        alignItems: alignItem,
        justifyContent: justifyContent,
        ...styles,
      }}
    >
      {children}
    </div>
  );
}

export default Stack;
