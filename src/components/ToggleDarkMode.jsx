// Componente ToggleDarkMode.js
import React, { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import "../styles/ToggleDarkMode.css";

const ToggleDarkMode = () => {
  // Recuperamos el estado guardado en localStorage al cargar la página
  const storedMode = localStorage.getItem("darkMode");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDarkMode, setIsDarkMode] = useState(
    storedMode === null ? prefersDark : JSON.parse(storedMode)
  );

  useEffect(() => {
    // Guardamos la preferencia del usuario en localStorage
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));

    // Cambiar los estilos globales
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty("--background", "#2b2b2b");
      root.style.setProperty("--contrast", "#e3e3e3");
      root.style.setProperty("--theme", "#CF6567");
      root.style.setProperty("--subtheme", "#CF7765");
      root.style.setProperty("--white", "#e3e3e3");
      root.style.setProperty("--black", "#2b2b2b");
    } else {
      root.style.setProperty("--background", "#e3e3e3");
      root.style.setProperty("--contrast", "#2b2b2b");
      root.style.setProperty("--theme", "#A165CF");
      root.style.setProperty("--subtheme", "#C370CF");
      root.style.setProperty("--black", "#2b2b2b");
      root.style.setProperty("--white", "#e3e3e3");
    }
  }, [isDarkMode]); // Se ejecuta cada vez que el estado cambia

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode); // Alternar el modo
  };

  return (
    <button
      className={`btnDarkMode ${isDarkMode && "dark"}`}
      onClick={toggleMode}
      aria-label="Toggle dark mode">
      {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
};

export default ToggleDarkMode;
