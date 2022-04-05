import "./icon.scss";

import React, { ReactElement } from "react";

interface IRequiredProps {}

interface IOptionalProps {
  size?: number;
}

interface IProps extends IRequiredProps, IOptionalProps {}

const defaultProps: IOptionalProps = {
  size: 16,
};

export function Add({ size }: IProps): ReactElement {
  return (
    <img
      src={`https://static.frapy.co/assets/icons/add.svg`}
      width={size}
      height={size}
    />
  );
}

Add.defaultProps = defaultProps;

export function History({ size }: IProps): ReactElement {
  return (
    <img
      src={`https://static.frapy.co/assets/icons/history.svg`}
      width={size}
      height={size}
    />
  );
}

History.defaultProps = defaultProps;
