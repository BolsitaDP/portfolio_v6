import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import ToggleDarkMode from "./ToggleDarkMode";
import Languaje from "./Languaje";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const { t } = useTranslation();

  const navigationLinks = [
    {
      name: "navbar_home",
      section: "#home",
    },
    {
      name: "navbar_about",
      section: "#about",
    },
    {
      name: "navbar_projects",
      section: "#projects",
    },
    {
      name: "navbar_contact",
      section: "#contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <ul className="nav-links">
        {navigationLinks.map((link, index) => {
          return (
            <li key={index}>
              <a href={link.section}>{t(`${link.name}`)}</a>
            </li>
          );
        })}
        {!scrolled && <ToggleDarkMode />}
        {!scrolled && <Languaje />}
      </ul>
    </nav>
  );
};

export default Navbar;
