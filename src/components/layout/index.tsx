import React, { Fragment } from "react";
// Components
import Nav from "./nav";

const Index = ({ children }) => {
  return (
    <Fragment>
      <Nav />
      {children}
    </Fragment>
  );
};

export default Index;
