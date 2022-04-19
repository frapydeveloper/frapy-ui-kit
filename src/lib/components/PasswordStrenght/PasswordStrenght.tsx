import "./password-strenght.scss";

import React, { ReactElement, useEffect, useState } from "react";

interface IRequiredProps {
  value: string;
}

interface IOptionalProps {
  fullWidth?: boolean;
  showHint?: boolean;
  onChange?: Function;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function PasswordStrenght({
  value = "",
  fullWidth = false,
  showHint = true,
  onChange,
}: IProps): ReactElement {
  const [percent, setPercent] = useState<number>();

  const [color, setColor] = useState<string>();

  const [req1, setReq1] = useState<boolean>(false);
  const [req2, setReq2] = useState<boolean>(false);
  const [req3, setReq3] = useState<boolean>(false);
  const [req4, setReq4] = useState<boolean>(false);
  const [req5, setReq5] = useState<boolean>(false);

  const updateColor = (strength: number) => {
    if (strength > 0) {
      setColor("#fc236a");
    }

    if (strength > 25) {
      setColor("#ff7707");
    }

    if (strength > 50) {
      setColor("#ffc542");
    }

    if (strength > 75) {
      setColor("#04bb4d");
    }
  };

  const checkStrength = () => {
    let _strength: number = 0;
    let _req1: boolean = false;
    let _req2: boolean = false;
    let _req3: boolean = false;
    let _req4: boolean = false;
    let _req5: boolean = false;

    if (value.length >= 12) {
      _strength += 10;
      _req1 = true;
    } else {
      _req1 = false;
    }

    if (value.match(/[a-z]+/)) {
      _strength += 10;
      _req2 = true;
    } else {
      _req2 = false;
    }

    if (value.match(/(.*[a-z]){2,}/i)) {
      _strength += 5;
    }
    if (value.match(/[A-Z]+/)) {
      _strength += 10;
      _req3 = true;
    } else {
      _req3 = false;
    }

    if (value.match(/(.*[A-Z]){2,}/i)) {
      _strength += 5;
    }
    if (value.match(/[0-9]+/)) {
      _strength += 10;
      _req4 = true;
    } else {
      _req4 = false;
    }

    if (value.match(/(.*[0-9]){2,}/i)) {
      _strength += 10;
    }
    if (value.match(/[$@#&!*]+/)) {
      _strength += 20;
      _req5 = true;
    } else {
      _req5 = false;
    }

    if (value.match(/(.*[$@#&!*]){2,}/i)) {
      _strength += 20;
    }

    setReq1(_req1);
    setReq2(_req2);
    setReq3(_req3);
    setReq4(_req4);
    setReq5(_req5);

    if (_req1 && _req2 && _req3 && _req4 && _req5) {
      onChange && onChange({ conditions: true, strength: _strength });
    } else {
      onChange && onChange({ conditions: false, strength: _strength });
    }

    updateColor(_strength);
    setPercent(_strength);
  };

  useEffect(() => {
    checkStrength();
  }, [value]);

  return (
    <div className={`password-strenght-container ${fullWidth && "full-width"}`}>
      <div className="password-strenght-wrapper">
        <div className="progress-bar">
          <div
            className="value"
            style={{ width: `${percent}%`, backgroundColor: color }}
          />
          <div className="marker-1" />
          <div className="marker-2" />
          <div className="marker-3" />
        </div>
        {showHint && (
          <div className="hint-wrapper">
            <ul>
              <li style={{ color: req1 ? "#04bb4d" : "#fc236a" }}>
                Minimum 12 characters
              </li>
              <li style={{ color: req2 ? "#04bb4d" : "#fc236a" }}>
                One or more lowercase letter
              </li>
              <li style={{ color: req3 ? "#04bb4d" : "#fc236a" }}>
                One or more uppercase letter
              </li>
              <li style={{ color: req4 ? "#04bb4d" : "#fc236a" }}>
                One or more number
              </li>
              <li style={{ color: req5 ? "#04bb4d" : "#fc236a" }}>
                One or more special character
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default PasswordStrenght;
