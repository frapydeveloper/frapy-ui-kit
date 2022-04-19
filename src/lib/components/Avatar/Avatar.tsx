import "./avatar.scss";

import React, { ReactElement } from "react";
import { stringToColour } from "@frapy/utils";

interface IRequiredProps {
  name: string;
}

interface IOptionalProps {
  type?: "compact" | "full";
  size?: "sm" | "md" | "lg" | "xlg";
  avatar?: string;
  onClick?: Function;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function Avatar({
  name,
  type = "compact",
  size = "sm",
  avatar,
  onClick,
}: IProps): ReactElement {
  return (
    <div
      className={`avatar-container ${type} ${size}`}
      onClick={() => onClick && onClick()}
    >
      {avatar ? (
        <div className={`icon-wrapper`}>
          <img src={avatar} alt="avatar-img" />
        </div>
      ) : (
        <div
          className={`icon-wrapper`}
          style={{ backgroundColor: stringToColour(name) }}
        >
          {name?.split(" ")[0]?.substring(0, 1)}
          {name?.split(" ")[1]?.substring(0, 1)}
        </div>
      )}
      {type === "full" && <div className="name-wrapper">{name}</div>}
    </div>
  );
}

export default Avatar;
