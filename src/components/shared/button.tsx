import React, { Fragment, FC } from "react";

interface IProps {
  text: string;
  variant?: "sm" | "medium" | "large";
  marginTop?: string;
}
const Button: FC<IProps> = ({ text, marginTop }) => {
  return (
    <Fragment>
      <button style={{ marginTop }} className="buttonPrimary">
        {text}
      </button>
    </Fragment>
  );
};

export default Button;
