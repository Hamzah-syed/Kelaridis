import React, { FC, Fragment } from "react";
// Interafces
import { INumbers } from "../../interfaces/homepage";

interface IProps {
  data: INumbers[];
}

const NumbersSec: FC<IProps> = ({ data }) => {
  return (
    <Fragment>
      <div style={{ position: "relative" }} className="wrapper">
        <div className="numberSecWrapper sectionSpace  sectionPadding">
          {data.map((num, i) => (
            <div key={i} className="numbersCard">
              <h1>{num.number}</h1>
              <p>{num.description}</p>
            </div>
          ))}
        </div>
        <div className="numbersSecSquare1"></div>
        <div className="numbersSecSquare2"></div>
      </div>
    </Fragment>
  );
};

export default NumbersSec;
