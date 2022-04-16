import "./pin-input.scss";

import React, { ReactElement, useState } from "react";

interface IRequiredProps {
  digits: number;
}

interface IOptionalProps {
  id?: string;
  onFilled?: Function;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function PinInput({ digits = 6, id, onFilled }: IProps): ReactElement {
  const [pin, setPin] = useState<string>("");

  const replaceCharacterAt = (index: number, replacement: string) => {
    return (
      pin.substring(0, index) +
      replacement +
      pin.substring(index + replacement.length)
    );
  };

  const handleChange = (e: any) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    let _pin: string;

    _pin = replaceCharacterAt(fieldIndex, value);

    setPin(_pin);

    let fieldIntIndex = parseInt(fieldIndex, 10);

    if (_pin?.length < digits) {
      if (value.length >= maxLength) {
        if (fieldIntIndex < digits) {
          const nextField = document.querySelector(
            `input[name=field-${fieldIntIndex + 1}]`
          ) as HTMLElement | null;

          if (nextField !== null) {
            nextField.focus();
          }
        }
      }
    } else {
      onFilled && onFilled({ pin: _pin });
    }
  };

  const onDeleteKeyDown = (e: any) => {
    if (e.keyCode === 8) {
      const { maxLength, value, name } = e.target;
      const [fieldName, fieldIndex] = name.split("-");

      let fieldIntIndex = parseInt(fieldIndex, 10);

      if (fieldIntIndex < digits) {
        const currentField = document.querySelector(
          `input[name=field-${fieldIntIndex}]`
        ) as HTMLInputElement;

        if (fieldIntIndex < pin.length) {
          for (let i = fieldIntIndex; i < pin.length; i++) {
            const inputField = document.querySelector(
              `input[name=field-${i}]`
            ) as HTMLInputElement;

            inputField.value = "";
          }
        }

        currentField.value = "";

        const nextField = document.querySelector(
          `input[name=field-${fieldIntIndex - 1}]`
        ) as HTMLElement | null;

        if (nextField !== null) {
          nextField.focus();
        }
      }
    }
  };

  return (
    <div className="pin-input-container">
      <div className="pin-input-wrapper">
        {[...Array(digits)]?.map((_: any, index: number) => (
          <input
            id={`id-${index}`}
            type="text"
            name={`field-${index}`}
            maxLength={1}
            onChange={handleChange}
            onKeyDown={onDeleteKeyDown}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default PinInput;
