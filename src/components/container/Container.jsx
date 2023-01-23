import container from "./container.module.scss";
import Navbar from "../navbar/Navbar";
import React from "react";

function Container() {
  return (
    <div className={container.main}>
      <div className={container.sxColumn}>
        <Navbar />
      </div>
      <div className={container.dxColumn}></div>
    </div>
  );
}

export default Container;
