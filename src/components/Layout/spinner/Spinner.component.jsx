import React from "react";
import logo from "./spinner.gif";
import { SpinnerContainer } from "./Spinner.styles";

const Spinner = () => {
  return (
    <SpinnerContainer>
      <img src={logo} alt='Loading...' />
    </SpinnerContainer>
  );
};

export default Spinner;
