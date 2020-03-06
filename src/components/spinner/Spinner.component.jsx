import React from "react";
import logo from "./spinner.gif";

const Spinner = () => {
  return (
    <div>
      <img src={logo} alt='Loading...' />{" "}
    </div>
  );
};

export default Spinner;
