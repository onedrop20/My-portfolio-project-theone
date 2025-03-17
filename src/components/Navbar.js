import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/images/onedroplogo.PNG"; // Adjust the path if necessary

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get the current path

  return (
    <nav>
      <img src={Logo} alt="One Drop Logo" className="logo" />

      {/* Open (Hamburger) Icon */}
      {!menuOpen && (
        <i className="fa-solid fa-bars" onClick={() => setMenuOpen(true)}></i>
      )}

      {/* Side Menu */}
      <ul className={`sidemenu ${menuOpen ? "open" : ""}`}>
        {/* Close (X) Icon */}
        <i className="fa-solid fa-xmark" onClick={() => setMenuOpen(false)}></i>

        <li>
          <Link 
            to="/" 
            className={location.pathname === "/" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            <i className="fa-solid fa-house"></i>
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className={location.pathname === "/about" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/services" 
            className={location.pathname === "/services" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
        </li>
        <li>
          <Link 
            to="/projects" 
            className={location.pathname === "/projects" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className={location.pathname === "/contact" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;