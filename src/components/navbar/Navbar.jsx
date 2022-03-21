import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./mobileNav.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="short__navbar">
      <div className="short__navbar-links">
        <div className="short__navbar-links_logo">
          <img src={logo} alt="navbar" />
        </div>
        <div className="short__navbar-links_container">
          <a href="#feature">Feature</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
        </div>
      </div>

      <div className="short__navbar-sign">
        <a href="#login">Login</a>
        <a href="#signup">Sign Up</a>
      </div>

      <div className="short__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="short__navbar-menu_container rotate-in-diag-2">
            <div className="short__navbar-menu_container-links">
              <p>
                <a href="#feature">feature</a>
              </p>
              <p>
                <a href="#pricing">Pricing</a>
              </p>
              <p>
                <a href="#resources">Resources</a>
              </p>
            </div>
            <div className="short__navbar-menu_container-links-sign">
              <p>
                <a href="#login">Login</a>
              </p>
              <p>
                <a href="#signup">Sign Up</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
