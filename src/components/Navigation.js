import React from "react";
import "../CSS/Navigation.css";
import "react-pro-sidebar/dist/css/styles.css";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FaProjectDiagram } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";
import { MdOutlineContactPage } from "react-icons/md";

export default function Navigation() {
  return (
    <ul className="List">
      <li>
        <NavLink to="/" className="ListText">
          <AiOutlineHome className="Icon" />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="ListText">
          <BsPerson className="Icon" />
          About
        </NavLink>
      </li>

      <li>
        <NavLink to="/about" className="ListText">
          <FaProjectDiagram className="Icon" />
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="ListText">
          <RiNewspaperLine className="Icon" />
          Resume
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="ListText">
          <MdOutlineContactPage className="Icon" />
          Contact
        </NavLink>
      </li>
    </ul>
  );
}
