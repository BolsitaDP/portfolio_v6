import React from "react";
import { useTranslation } from "react-i18next";
import spanishFlag from "../assets/Flags/spanishFlag.png";
import englishFlag from "../assets/Flags/englishFlag.png";

import "../styles/Languaje.css";

const Languaje = () => {
  const { i18n } = useTranslation();

  // Función para alternar entre 'es' y 'en'
  const toggleLanguage = () => {
    const newLanguage = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLanguage); // Cambia el idioma
    localStorage.setItem("language", newLanguage); // Guarda la preferencia
  };

  return (
    <div className="divLanguaje">
      {/* Botón para alternar idiomas */}
      <button className="languajeSwitcher" onClick={toggleLanguage}>
        {i18n.language === "es" ? (
          <img src={spanishFlag} alt="Español" />
        ) : (
          <img src={englishFlag} alt="English" />
        )}
      </button>
    </div>
  );
};

export default Languaje;
