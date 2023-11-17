import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useScroll, motion, useTransform, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "../../Styles/navbar.css";

function Navbar() {


  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const showNavbar = () => {
    setIsOpen(!isOpen); // Toggle the isOpen state
  };

  return (
    <>
    
        <header>
          <a href={"/"}>
            <h3>Camara Anna</h3>
          </a>
          <nav className={isOpen ? "responsive_nav" : ""} ref={navRef}>
            <ScrollLink style={{ cursor: "pointer" }} id="ScrollLink" smooth="true" to="About">
              About
            </ScrollLink>
            <ScrollLink style={{ cursor: "pointer" }} id="ScrollLink" smooth="true" to="Technologies">
              Technologies
            </ScrollLink>
            <ScrollLink style={{ cursor: "pointer" }} id="ScrollLink" smooth="true" to="Projects">
              Projects
            </ScrollLink>
            <ScrollLink style={{ cursor: "pointer" }} id="ScrollLink" smooth="true" to="Footer">
              Contact
            </ScrollLink>

            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn " onClick={showNavbar}>
            <FaBars />
          </button>
        </header>
    
    </>
  );
}

export default Navbar;
