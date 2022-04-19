import "./project.scss";

import React, { ReactElement } from "react";
import { LinearScale } from "@frapy/icons";

interface IRequiredProps {
  labelText: string;
  createdAt: string;
}

interface IOptionalProps {
  id?: string;
  onClick?: Function;
  onDoubleClick?: Function;
  fullWidth?: boolean;
  icon?: any;
  color?: string;
  selected?: boolean;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function Project({
  id,
  labelText,
  createdAt,
  onClick,
  onDoubleClick,
  fullWidth,
  icon,
  color,
  selected,
}: IProps): ReactElement {
  return (
    <div
      id={id}
      className={`project-container ${fullWidth && "full-width"} ${
        selected && "selected"
      }`}
      onClick={() => onClick && onClick()}
      onDoubleClick={() => onDoubleClick && onDoubleClick()}
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
