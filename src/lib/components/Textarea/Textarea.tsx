import "./textarea.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {}

interface IOptionalProps {
  id?: string;
  resize?: "vertical" | "horizontal" | "both";
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
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

function Textarea({
  id,
  resize = "vertical",
  minWidth = "100%",
  maxWidth = "100%",
  minHeight = "100px",
  maxHeight = "100px",
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
      className={`textarea-wrapper ${fullWidth && "full-width"} ${
        error && "error"
      } ${disabled && "disabled"} ${showHint && "hint"}`}
    >
      {!hideLabel && <div className={`label-text`}>{labelText}</div>}
      <textarea
        defaultValue={defaultValue && defaultValue}
        value={value && value}
        onChange={(event) => onChange && onChange(event.target.value)}
        disabled={disabled}
        placeholder={placeholder}
        style={{
          resize,
          minWidth: `${minWidth}`,
          maxWidth: `${maxWidth}`,
          minHeight: `${minHeight}`,
          maxHeight: `${maxHeight}`,
        }}
      />
      {showHint && <div className={`hint-text`}>{hint && `${hint}`}</div>}
    </div>
  );
}

export default Textarea;
