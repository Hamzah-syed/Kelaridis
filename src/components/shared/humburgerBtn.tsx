import React, { FC, Fragment } from "react";

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const HumburgerBtn: FC<IProps> = ({ setIsOpen }) => {
  return (
    <Fragment>
      <div onClick={() => setIsOpen(true)} className="humburgerBtn">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Fragment>
  );
};

export default HumburgerBtn;
