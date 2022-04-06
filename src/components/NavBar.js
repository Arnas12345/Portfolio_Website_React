import React from "react";
import "../CSS/NavBar.css";
import "react-pro-sidebar/dist/css/styles.css";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";
import NavigationBurger from "./NavigationBurger";

export default function NavBar() {
  return (
    <div className="NavBar">
      <NavLink to="/">
        <img src={require("../Images/Logo.png")} className="Logo" alt="Logo" />
      </NavLink>
      <div className="Navigation-bar">
        <Navigation />
      </div>
      <div className="Navigation-burger">
        <NavigationBurger />
      </div>
    </div>
  );
}
