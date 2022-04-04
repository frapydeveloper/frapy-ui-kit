import "./input.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {
  type: "text" | "number" | "date" | "color" | "time";
}

interface IOptionalProps {
  labelText?: string;
  hideLabel?: boolean;
  fullWidth?: boolean;
  onChange?: Function | undefined;
  disabled?: boolean;
}

interface IProps extends IRequiredProps, IOptionalProps {}

const defaultProps: IOptionalProps = {
  hideLabel: false,
  fullWidth: false,
  disabled: false,
};

function Input({
  type,
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
      />
    </div>
  );
}

Input.defaultProps = defaultProps;

export default Input;
