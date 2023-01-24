import header from "./header.module.scss";

import React from "react";

function Header() {
  return (
    <div className={header.main}>
      <h1 className={header.logo}>E-Commerce Dashboard</h1>
      <button className={header.headerBtn}></button>
    </div>
  );
}

export default Header;
