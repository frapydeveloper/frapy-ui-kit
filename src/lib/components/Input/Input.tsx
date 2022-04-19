import "./input.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {}

interface IOptionalProps {
  id?: string;
  type?: "text" | "number" | "date" | "color" | "time" | "password" | "email";
  defaultValue?: string | number;
  value?: string | number;
  placeholder?: string;
  labelText?: string;
  hideLabel?: boolean;
  fullWidth?: boolean;
  onChange?: Function | undefined;
  disabled?: boolean;
  error?: boolean;
  showHint?: boolean;
  hint?: string;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function Input({
  id,
  type = "text",
  defaultValue,
  placeholder,
  value,
  labelText,
  hideLabel = false,
  onChange,
  disabled = false,
  fullWidth = false,
  error = false,
  showHint = false,
  hint,
}: IProps): ReactElement {
  return (
    <div
      id={id}
      className={`input-wrapper ${fullWidth && "full-width"} ${
        error && "error"
      } ${disabled && "disabled"} ${showHint && "hint"}`}
    >
      {!hideLabel && <div className={`label-text`}>{labelText}</div>}
      <input
        type={type}
        defaultValue={defaultValue && defaultValue}
        value={value && value}
        onChange={(event) => onChange && onChange(event.target.value)}
        disabled={disabled}
        placeholder={placeholder}
      />
      {showHint && <div className={`hint-text`}>{hint && `${hint}`}</div>}
    </div>
  );
}

export default Input;
