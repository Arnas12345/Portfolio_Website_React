import React, { useState } from "react";
import "../CSS/NavigationBurger.css";
import "react-pro-sidebar/dist/css/styles.css";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FaProjectDiagram } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";
import { MdOutlineContactPage } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

export default function NavigationBurger() {
  const [style, setStyle] = useState("Menu");
  const [burgerIcon, setStyle2] = useState("BurgerIcon");

  function showMenu() {
    setStyle("MenuDisplayed");
    setStyle2("BurgerIconHidden");
  }

  function hideMenu() {
    setStyle("Menu");
    setStyle2("BurgerIcon");
  }

  return (
    <div className="Burger">
      <div className={burgerIcon}>
        <GiHamburgerMenu
          onClick={() => {
            showMenu();
          }}
        />
      </div>
      <div className={style}>
        <div className="Cross">
          <ImCross
            className="CrossIcon"
            onClick={() => {
              hideMenu();
            }}
          />
        </div>
        <ul className="BurgerList">
          <li className="ListItem">
            <NavLink
              to="/"
              className="ListText"
              onClick={() => {
                hideMenu();
              }}
            >
              <AiOutlineHome className="Icon" />
              Home
            </NavLink>
          </li>
          <li className="ListItem">
            <NavLink
              to="/about"
              className="ListText"
              onClick={() => {
                hideMenu();
              }}
            >
              <BsPerson className="Icon" />
              About
            </NavLink>
          </li>

          <li className="ListItem">
            <NavLink
              to="/projects"
              className="ListText"
              onClick={() => {
                hideMenu();
              }}
            >
              <FaProjectDiagram className="Icon" />
              Projects
            </NavLink>
          </li>
          <li className="ListItem">
            <NavLink
              to="/resume"
              className="ListText"
              onClick={() => {
                hideMenu();
              }}
            >
              <RiNewspaperLine className="Icon" />
              Resume
            </NavLink>
          </li>
          <li className="ListItem">
            <NavLink
              to="/contact"
              className="ListText"
              onClick={() => {
                hideMenu();
              }}
            >
              <MdOutlineContactPage className="Icon" />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
