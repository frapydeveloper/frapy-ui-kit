import "./variable.scss";

import React, { ReactElement } from "react";

import { TVariant, variant } from "./variant";

interface IRequiredProps {
  type: "string" | "int" | "float" | "boolean";
}

interface IOptionalProps {
  kind?: "compact" | "normal";
  //   color?: "primary" | "secondary" | "warning" | "danger" | "success";
  //   kind?: "normal" | "ghost" | "tertiary";
  //   size?: "sm" | "md" | "lg" | "xlg";
  //   disabled?: boolean;
  //   fullWidth?: boolean;
  //   children?: JSX.Element | JSX.Element[] | string;
  //   onClick?: Function | undefined;
  //   renderIcon?: any;
  //   hasIconOnly?: boolean;
}

interface IProps extends IRequiredProps, IOptionalProps {}

const defaultProps: IOptionalProps = {
  kind: "compact",
  //   type: { name: "String", color: "007bff" },
  //   color: "primary",
  //   kind: "normal",
  //   size: "sm",
  //   disabled: false,
  //   fullWidth: false,
};

function Variable({ type, kind }: IProps): ReactElement {
  return (
    <div
      className={`variable-container ${kind}`}
      style={{
        color: `#${
          variant[variant.findIndex((item: TVariant) => item.name === type)]
            .color
        }`,
        backgroundColor: `#${
          variant[variant.findIndex((item: TVariant) => item.name === type)]
            .color
        }50`,
        borderColor: `#${
          variant[variant.findIndex((item: TVariant) => item.name === type)]
            .color
        }`,
      }}
    >
      {kind === "compact" && type}
      {kind === "normal" && type?.substring(0, 2)}
    </div>
  );
}

Variable.defaultProps = defaultProps;

export default Variable;
