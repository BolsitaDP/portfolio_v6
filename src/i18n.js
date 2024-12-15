import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      navbar_home: "Home",
      navbar_about: "About me",
      navbar_projects: "Projects",
      navbar_contact: "Contact",
      home_title: "Hey, I'm Santiago!",
      home_subtitle:
        "And I am a web developer passionate about creating innovative solutions.",
      home_primaryBtn: "My projects",
      home_secondaryBtn: "About me",
      about: "About me",
    },
  },
  es: {
    translation: {
      navbar_home: "Inicio",
      navbar_about: "Acerca de mí",
      navbar_projects: "Proyectos",
      navbar_contact: "Contacto",
      home_title: "¡Hola, soy Santiago!",
      home_subtitle:
        "Y soy un desarrollador web apasionado por crear soluciones innovadoras.",
      home_primaryBtn: "Mis proyectos",
      home_secondaryBtn: "Acerca de mí",
      about: "Sobre mí",
    },
  },
};

i18n
  .use(LanguageDetector) // Detecta el idioma automáticamente
  .use(initReactI18next) // Conecta con React
  .init({
    resources,
    fallbackLng: localStorage.getItem("language") || "en", // Usa el idioma guardado o inglés por defecto
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
