import licomponent from "./licomponent.module.scss";
import React from "react";

function Licomponent({ label, icon, setRoute, routeUrl }) {
  return (
    <li className={licomponent.main} onClick={() => setRoute(routeUrl)}>
      <div className={licomponent.icon}>{icon}</div>
      <div className={licomponent.label}>{label}</div>
    </li>
  );
}

export default Licomponent;
