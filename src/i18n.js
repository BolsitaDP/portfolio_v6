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
      about_title: "About me",
      about_description:
        "I am a web developer with over 2 years of experience in building robust and scalable web applications. I am passionate about learning new technologies and solving complex problems through code.",
      about_experience:
        "I have worked on challenging projects for clients across various industries, including the development of production management systems, supplier solutions, and internal tools for companies. My goal is always to deliver quality products that enhance the user experience.",
      about_primaryBtn: "Contact",
      about_secondaryBtn: "My projects",
      projects_title: "My Projects",
      projects_description:
        "Here are some of the projects I have worked on. You can click on the links to learn more or see the projects in action.",
      project1_title: "Production Management - ICA Brewery",
      project1_description:
        "I developed an application to manage the beer production process, optimizing resource allocation and production traceability.",
      project2_title: "Supplier Management System - Genfar",
      project2_description:
        "I redesigned the supplier system for greater efficiency in inventory management and order traceability.",
      project3_title: "Internal Control Application - BPMco",
      project3_description:
        "I developed an internal solution to automate and manage the company's administrative and operational processes.",
      project4_title: "BPMco Website",
      project4_description:
        "I redesigned BPMco's website from scratch using cutting-edge technologies, focusing on its future maintenance and continuous updates.",
      projects_viewProject: "View Project",
      projects_alert: "I can't show you the code :(",
      contact_title: "Contact",
      contact_description:
        "Thank you for visiting my portfolio! If you'd like to get in touch with me, here is my contact information.",
      contact_socialMedia: "Social Media",
      contact_email: "E-mail",
      contact_location: "Location",
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
      about_title: "Sobre mí",
      about_description:
        "Soy un desarrollador web con más de 2 años de experiencia en la creación de aplicaciones web robustas y escalables. Me apasiona aprender nuevas tecnologías y resolver problemas complejos a través del código.",
      about_experience:
        "He trabajado en proyectos desafiantes para clientes en diversas industrias, incluyendo el desarrollo de sistemas de gestión de producción, soluciones de proveedores y herramientas internas para empresas. Mi objetivo es siempre entregar productos de calidad que mejoren la experiencia del usuario.",
      about_primaryBtn: "Contacto",
      about_secondaryBtn: "Mis proyectos",
      projects_title: "Mis Proyectos",
      projects_description:
        "A continuación se encuentran algunos de los proyectos en los que he trabajado. Puedes hacer clic en los enlaces para obtener más información o ver los proyectos en acción.",
      project1_title: "Gestión de Producción - Cervecería ICA",
      project1_description:
        "Desarrollé una aplicación para gestionar el proceso de producción de cerveza, optimizando la asignación de recursos y la trazabilidad de la producción.",
      project2_title: "Sistema de Gestión de Proveedores - Genfar",
      project2_description:
        "Rediseñé el sistema de proveedores para una mayor eficiencia en la gestión de inventarios y la trazabilidad de pedidos.",
      project3_title: "Aplicación de Control Interno - BPMco",
      project3_description:
        "Desarrollé una solución interna para automatizar y gestionar los procesos administrativos y operativos de la empresa.",
      project4_title: "Página web de BPMco",
      project4_description:
        "Rediseñé desde 0 la página web de BPMco usando tecnologías a la vanguardia pensando en su futuro manteimiento y constante actualización",
      projects_viewProject: "Ver Proyecto",
      projects_alert: "No puedo mostrarte el código :(",
      contact_title: "Contacto",
      contact_description:
        "¡Gracias por visitar mi portfolio! Si deseas ponerte en contacto conmigo, aquí tienes mis datos de contacto.",
      contact_socialMedia: "Redes sociales",
      contact_email: "Correo electrónico",
      contact_location: "Ubicación",
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
