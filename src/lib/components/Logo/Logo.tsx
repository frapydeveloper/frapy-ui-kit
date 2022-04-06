import "./logo.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {}

interface IOptionalProps {
  type?: "small" | "full";
  size?: number;
  variant?: "light" | "dark";
}

interface IProps extends IRequiredProps, IOptionalProps {}

const defaultProps: IOptionalProps = {
  type: "small",
  size: 32,
  variant: "dark",
};

function Logo({ type, size, variant }: IProps): ReactElement {
  return (
    <div className="logo-wrapper">
      {variant === "light" ? (
        <React.Fragment>
          {type === "small" && (
            <img
              src={"https://static.frapy.co/assets/logo/frapy-logo.svg"}
              alt="frapy-logo"
              height={size}
            />
          )}
          {type === "full" && (
            <img
              src={
                "https://static.frapy.co/assets/logo/frapy-full-logo-dark.svg"
              }
              alt="frapy-full-logo"
              height={size}
            />
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {type === "small" && (
            <img
              src={"https://static.frapy.co/assets/logo/frapy-logo.svg"}
              alt="frapy-logo"
              height={size}
            />
          )}
          {type === "full" && (
            <img
              src={
                "https://static.frapy.co/assets/logo/frapy-full-logo-light.svg"
              }
              alt="frapy-full-logo"
              height={size}
            />
          )}
        </React.Fragment>
      )}
    </div>
  );
}

Logo.defaultProps = defaultProps;

export default Logo;
