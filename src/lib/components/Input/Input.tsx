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
  error?: boolean;
  showHint?: boolean;
  hint?: string;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function Input({
  type = "text",
  placeholder,
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
      className={`input-wrapper ${fullWidth && "full-width"} ${
        error && "error"
      } ${disabled && "disabled"} ${showHint && "hint"}`}
    >
      {!hideLabel && <div className={`label-text`}>{labelText}</div>}
      <input
        type={type}
        onChange={(event) => onChange && onChange(event.target.value)}
        disabled={disabled}
        placeholder={placeholder}
      />
      {showHint && <div className={`hint-text`}>{hint && `${hint}`}</div>}
    </div>
  );
}

export default Input;
