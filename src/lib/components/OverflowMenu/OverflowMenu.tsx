import "./overflow-menu.scss";

import React, { ReactElement, useEffect, useRef, useState } from "react";
import { onClickOutside } from "@frapy/utils";

interface IRequiredProps {
  invokeItem: JSX.Element;
}

interface IOptionalProps {
  id?: string;
  children?: React.ReactChild | React.ReactChild[];
  isVisible?: Function;
  flipped?: boolean;
  light?: boolean;
}

interface IProps extends IRequiredProps, IOptionalProps {}

function OverflowMenu({
  invokeItem,
  id,
  children,
  isVisible,
  flipped = false,
  light = false,
}: IProps): ReactElement {
  const [showOverflow, setShowOverflow] = useState<boolean>(false);

  const target = useRef<any>(null);
  onClickOutside({ target, callback: setShowOverflow });

  useEffect(() => {
    isVisible && isVisible(showOverflow);
  }, [showOverflow]);

  return (
    <div
      id={id}
      className={`overflow-menu-container ${light && "light"}`}
      ref={target}
    >
      {React.cloneElement(invokeItem, {
        onClick: () => setShowOverflow(!showOverflow),
      })}
      {showOverflow && (
        <div
          className="overflow-menu-wrapper"
          style={flipped ? { right: 0 } : { left: 0 }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default OverflowMenu;
