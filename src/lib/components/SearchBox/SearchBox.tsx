import "./search-box.scss";

import React, { ReactElement } from "react";
import { Add, ArrowDropDown } from "@frapy/icons";

interface IRequiredProps {}

interface IOptionalProps {
  onChange?: Function | undefined;
  placeholder?: string;
}

interface IProps extends IRequiredProps, IOptionalProps {}

const defaultProps: IOptionalProps = {};

function SearchBox({ onChange, placeholder }: IProps): ReactElement {
  return (
    <div className="search-box-container">
      <div className="icon-wrapper">
        <Add size={20} />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(event: React.FormEvent<HTMLInputElement>) =>
          onChange && onChange(event.currentTarget.value)
        }
      />
    </div>
  );
}

SearchBox.defaultProps = defaultProps;

export default SearchBox;
