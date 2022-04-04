import "./input.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {}

interface IOptionalProps {
  type?: "text" | "number" | "date" | "color" | "time";
  placeholder?: string;
  labelText?: string;
  hideLabel?: boolean;
  fullWidth?: boolean;
  onChange?: Function | undefined;
  disabled?: boolean;
}

interface IProps extends IRequiredProps, IOptionalProps {}

const defaultProps: IOptionalProps = {
  type: "text",
  hideLabel: false,
  fullWidth: false,
  disabled: false,
};

function Input({
  type,
  placeholder,
  labelText,
  hideLabel,
  onChange,
  disabled,
  fullWidth,
}: IProps): ReactElement {
  return (
    <div className={`input-wrapper ${fullWidth && "full-width"}`}>
      {!hideLabel && (
        <div className={`label-text ${disabled && "disabled"}`}>
          {labelText}
        </div>
      )}
      <input
        type={type}
        onChange={(event) => onChange && onChange(event.target.value)}
        disabled={disabled}
        placeholder={placeholder}
      />
    </div>
  );
}

Input.defaultProps = defaultProps;

export default Input;
