import "./button.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {}

interface IOptionalProps {
  children?: JSX.Element | JSX.Element[] | string;
  padding?: [number, number];
  paddingUnit?: "px" | "rem" | "em";
  margin?: [number, number];
  marginUnit?: "px" | "rem" | "em";
  rowGap?: number;
  rowGapUnit?: "px" | "rem" | "em";
  columnGap?: number;
  columnGapUnit?: "px" | "rem" | "em";
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  styles?: any;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function Stack({
  children,
  padding,
  paddingUnit = "px",
  margin,
  marginUnit = "px",
  rowGap,
  rowGapUnit = "px",
  columnGap,
  columnGapUnit = "px",
  direction = "column",
  styles,
}: IProps): ReactElement {
  return (
    <div
      className="stack-container"
      style={{
        padding: `${padding ? padding[0] : 0}${paddingUnit} ${
          padding ? padding[1] : 0
        }${paddingUnit}`,
        margin: `${margin ? margin[0] : 0}${marginUnit} ${
          margin ? margin[1] : 0
        }${marginUnit}`,
        display: "flex",
        flexDirection: direction,
        columnGap: `${columnGap}${columnGapUnit}`,
        rowGap: `${rowGap}${rowGapUnit}`,
        ...styles,
      }}
    >
      {children}
    </div>
  );
}

export default Stack;
