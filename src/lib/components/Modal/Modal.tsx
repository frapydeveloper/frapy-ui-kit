import "./modal.scss";

import React, { ReactElement, useRef } from "react";
import Button from "../Button";
import { Close } from "@frapy/icons";
import { onClickOutside } from "@frapy/utils";

interface IRequiredProps {
  modalHeading: string;
  onModalClose: Function;
}

interface IOptionalProps {
  size?: "sm" | "md" | "lg" | "xlg";
  children?: JSX.Element | JSX.Element[];
  footer?: JSX.Element | JSX.Element[];
}

interface IProps extends IRequiredProps, IOptionalProps {}

function Modal({
  modalHeading,
  onModalClose,
  size = "sm",
  children,
  footer,
}: IProps): ReactElement {
  const target = useRef(null);
  onClickOutside({ target, callback: () => onModalClose() });

  return (
    <div className="modal-container">
      <div className={`modal-wrapper ${size}`} ref={target}>
        <div className="modal-header-wrapper">
          <div className="title">{modalHeading}</div>
          <Button
            color="secondary"
            kind="tertiary"
            renderIcon={<Close size={16} color={"#121212"} />}
            hasIconOnly
            onClick={() => onModalClose()}
          />
        </div>
        <div className="modal-content-wrapper">{children}</div>
        {footer && <div className="modal-footer-wrapper">{footer}</div>}
      </div>
    </div>
  );
}

export default Modal;
