import React from "react";

type Props = { value: string };

function Badge({ value }: Props) {
  return <div>{value}</div>;
}

export default Badge;
