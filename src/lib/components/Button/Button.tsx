import "./button.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {}

interface IOptionalProps {
  color?: "primary" | "secondary" | "warning" | "danger" | "success";
  kind?: "normal" | "ghost" | "tertiary" | "link";
  size?: "sm" | "md" | "lg" | "xlg";
  disabled?: boolean;
  fullWidth?: boolean;
  children?: JSX.Element | JSX.Element[] | string;
  onClick?: Function | undefined;
  renderIcon?: any;
  hasIconOnly?: boolean;
  light?: boolean;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function Button({
  color = "primary",
  kind = "normal",
  size = "sm",
  disabled = false,
  fullWidth = false,
  children,
  onClick,
  renderIcon,
  hasIconOnly,
  light,
}: IProps): ReactElement {
  return (
    <div
      className={`button-container ${color} ${kind} ${
        hasIconOnly && "icon-button"
      } ${size} ${disabled && "disabled"} ${fullWidth && "full-width"} ${
        light && "light"
      }`}
      onClick={() => onClick && onClick()}
    >
      <div className="button-wrapper">
        {hasIconOnly ? (
          renderIcon
        ) : (
          <div className="button-content">
            {renderIcon && <div className="icon-wrapper">{renderIcon}</div>}
            <div>{children}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Button;
