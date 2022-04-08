import "./project.scss";

import React, { ReactElement } from "react";
import { LinearScale } from "@frapy/icons";

interface IRequiredProps {
  labelText: string;
  createdAt: string;
}

interface IOptionalProps {
  onClick?: Function | undefined;
  fullWidth?: boolean;
  icon?: any;
  color?: string;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function Project({
  labelText,
  createdAt,
  onClick,
  fullWidth,
  icon,
  color,
}: IProps): ReactElement {
  return (
    <div
      className={`project-container ${fullWidth && "full-width"}`}
      onClick={() => onClick && onClick()}
    >
      <div className="project-wrapper">
        <div
          className="icon-wrapper"
          style={{ borderColor: color, backgroundColor: `${color}25` }}
        >
          {icon}
        </div>
        <div className="project-details">
          <div className="name">{labelText}</div>
          <div className="created-at">Created at {createdAt}</div>
        </div>
      </div>
    </div>
  );
}

export default Project;
