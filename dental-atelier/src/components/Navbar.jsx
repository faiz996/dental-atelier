import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

import logo from "../assets/images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="atelier-navbar">

      <div className="navbar-container">

        {/* LOGO */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="The Dental Atelier"
          />
        </a>


        {/* DESKTOP / MOBILE NAVIGATION */}
        <nav
          className={`navbar-navigation ${
            menuOpen ? "mobile-open" : ""
          }`}
        >

          <a
            href="#home"
            className="nav-link active"
            onClick={closeMenu}
          >
            <span className="nav-dot"></span>
            HOME
          </a>

          <a
            href="#about"
            className="nav-link"
            onClick={closeMenu}
          >
            ABOUT US
          </a>

          <a
            href="#services"
            className="nav-link"
            onClick={closeMenu}
          >
            SERVICE &amp; FACILITIES
          </a>

          <a
            href="#gallery"
            className="nav-link"
            onClick={closeMenu}
          >
            GALLERY
          </a>

          <a
            href="#contact"
            className="nav-link"
            onClick={closeMenu}
          >
            CONTACT
          </a>

        </nav>


        {/* MOBILE MENU */}
        <button
          type="button"
          className="navbar-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X
              size={23}
              strokeWidth={1.5}
            />
          ) : (
            <Menu
              size={23}
              strokeWidth={1.5}
            />
          )}
        </button>

      </div>

    </header>
  );
}

export default Navbar;