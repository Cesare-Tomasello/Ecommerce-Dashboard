import navbar from "./navbar.module.scss";
import { navBarLinks } from "../../constants/navbar";
import React from "react";

function Navbar() {
  return (
    <ul className={navbar.main}>
      {navBarLinks.map((item, index) => (
        <li className={navbar.listItem} key={item.id}>
          <div className={navbar.icon}>{item.icon}</div>
          <div className={navbar.label}>{item.label}</div>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
