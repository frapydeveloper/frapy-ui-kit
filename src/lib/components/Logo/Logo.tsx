import "./logo.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {
  application: "frapy" | "frapy-market";
  type: "small" | "full";
}

interface IOptionalProps {
  size?: number;
  variant?: "light" | "dark";
}

interface IProps extends IRequiredProps, IOptionalProps {}

const defaultProps: IOptionalProps = {
  size: 32,
  variant: "dark",
};

function Logo({ application, type, size, variant }: IProps): ReactElement {
  switch (type) {
    case "small":
      return (
        <img
          src={"https://static.frapy.co/assets/logo/frapy-logo.svg"}
          alt="frapy-logo"
          height={size}
        />
      );

    case "full":
      switch (application) {
        case "frapy":
          switch (variant) {
            case "light":
              return (
                <img
                  src={
                    "https://static.frapy.co/assets/logo/frapy-full-logo-light.svg"
                  }
                  alt="frapy-full-logo"
                  height={size}
                />
              );

            case "dark":
              return (
                <img
                  src={
                    "https://static.frapy.co/assets/logo/frapy-full-logo-dark.svg"
                  }
                  alt="frapy-full-logo"
                  height={size}
                />
              );

            default:
              break;
          }

        case "frapy-market":
          switch (variant) {
            case "light":
              return (
                <img
                  src={
                    "https://static.frapy.co/assets/logo/frapy-market-logo-light.svg"
                  }
                  alt="frapy-full-logo"
                  height={size}
                />
              );

            case "dark":
              return (
                <img
                  src={
                    "https://static.frapy.co/assets/logo/frapy-market-logo-dark.svg"
                  }
                  alt="frapy-full-logo"
                  height={size}
                />
              );

            default:
              break;
          }

        default:
          break;
      }

    default:
      break;
  }

  return <></>;
}

Logo.defaultProps = defaultProps;

export default Logo;
