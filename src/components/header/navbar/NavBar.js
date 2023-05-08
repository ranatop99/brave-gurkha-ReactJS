import React from "react";
import "./Navbar.css";
const NavBar = () => {
  return (
    <>
      <div className="navBar_section">
        <div className="logo_section">
          <h2>BRAVEGURKHA</h2>
        </div>
        <div className="nav_menus">
          <ul className="nav_menu_list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Courses</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
