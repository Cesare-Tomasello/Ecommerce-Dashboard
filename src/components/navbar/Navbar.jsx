import navbar from "./navbar.module.scss";
import { navBarLinks } from "../../constants/navbar";
import Licomponent from "../licomponent/Licomponent";
import React from "react";

function Navbar({ setRoute }) {
  return (
    <ul className={navbar.main}>
      {navBarLinks.map((item, index) => (
        <Licomponent
          routeUrl={item.route}
          setRoute={setRoute}
          icon={item.icon}
          label={item.label}
          key={item.id}
        />
      ))}
    </ul>
  );
}

export default Navbar;
