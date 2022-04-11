import React from "react";
import "../CSS/Navigation.css";
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
        <NavLink
          to="/"
          className="ListText"
          style={({ isActive }) => ({
            color: !isActive ? "" : "#9c3a94",
          })}
        >
          <AiOutlineHome className="Icon" color="white" />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className="ListText"
          style={({ isActive }) => ({
            color: !isActive ? "" : "#9c3a94",
          })}
        >
          <BsPerson className="Icon" />
          About
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/projects"
          className="ListText"
          style={({ isActive }) => ({
            color: !isActive ? "" : "#9c3a94",
          })}
        >
          <FaProjectDiagram className="Icon" />
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/resume"
          className="ListText"
          style={({ isActive }) => ({
            color: !isActive ? "" : "#9c3a94",
          })}
        >
          <RiNewspaperLine className="Icon" />
          Resume
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className="ListText"
          style={({ isActive }) => ({
            color: !isActive ? "" : "#9c3a94",
          })}
        >
          <MdOutlineContactPage className="Icon" />
          Contact
        </NavLink>
      </li>
    </ul>
  );
}
