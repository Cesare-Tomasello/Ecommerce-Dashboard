import container from "./container.module.scss";
import Navbar from "../navbar/Navbar";
import React, { useState } from "react";
import Home from "../home/Home";
import Categories from "../categories/Categories";
import Products from "../products/Products";
import Orders from "../orders/Orders";
import User from "../user/User";

function Container() {
  const [route, setRoute] = useState("home");

  return (
    <div className={container.main}>
      <div className={container.sxColumn}>
        <Navbar setRoute={setRoute} />
      </div>
      <div className={container.dxColumn}>
        {route === "home" && <Home setRoute={setRoute} />}
        {route === "categories" && <Categories />}
        {route === "products" && <Products />}
        {route === "orders" && <Orders />}
        {route === "user" && <User />}
      </div>
    </div>
  );
}

export default Container;
