import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/images/onedroplogo.PNG"; // Adjust path if needed

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Shrink on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={isScrolled ? "scrolled" : ""}>
      <img src={Logo} alt="One Drop Logo" className="logo" />

      {/* Hamburger Icon */}
      {!menuOpen && (
        <i className="fa-solid fa-bars" onClick={() => setMenuOpen(true)}></i>
      )}

      {/* Overlay for click-outside-to-close and darkening */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}

      {/* Side Menu */}
      <ul className={`sidemenu ${menuOpen ? "open" : ""}`}>
        {/* Close Icon */}
        <i className="fa-solid fa-xmark" onClick={() => setMenuOpen(false)}></i>

        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            <i className="fa-solid fa-house"></i> Home
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
            to="/blog"
            className={location.pathname === "/blog" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Blog
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