import React from "react";
import "../App.css";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { NavLink } from "react-router-dom";

export default function SideNavBar() {
  return (
    <div className="NavBar">
      <ProSidebar className="NavBar">
        <Menu iconShape="square">
          <MenuItem>
            <div>
              <NavLink to="/">Home</NavLink>
            </div>
          </MenuItem>
          <MenuItem>
            <div>
              <NavLink to="/about">About</NavLink>
            </div>
          </MenuItem>
          {/* <SubMenu title="Components">
            <MenuItem>
              About<NavLink to="./about">About</NavLink>
            </MenuItem>
            <MenuItem><Link to="/about">Projects</Link></MenuItem>
          </SubMenu> */}
        </Menu>
      </ProSidebar>
    </div>
  );
}
