import "./checkbox.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {}

interface IOptionalProps {
  id?: string;
  size?: "sm" | "md" | "lg" | "xlg";
  labelText?: string;
  hideLabel?: boolean;
  disabled?: boolean;
  onChange?: Function;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function Checkbox({
  id,
  size = "sm",
  labelText,
  hideLabel = false,
  disabled = false,
  onChange,
}: IProps): ReactElement {
  return (
    <label
      id={id}
      className={`checkbox-container ${disabled && "disabled"} ${size}`}
    >
      <input
        type="checkbox"
        onChange={(event: React.FormEvent<HTMLInputElement>) =>
          onChange && onChange(event.currentTarget.checked)
        }
        disabled={disabled}
      />
      {!hideLabel && labelText}
      <span className="checkmark" />
    </label>
  );
}

export default Checkbox;
