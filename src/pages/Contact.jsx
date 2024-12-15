import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <header className="contact-header">
        <h1 className="contact-title">Contacto</h1>
        <p className="contact-description">
          ¡Gracias por visitar mi portfolio! Si deseas ponerte en contacto
          conmigo, aquí tienes mis datos de contacto.
        </p>
      </header>

      <div className="contact-info">
        <div className="info-item">
          <h2>Redes Sociales</h2>
          <ul>
            <li>
              <a
                href="https://github.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/tuusuario"
                target="_blank"
                rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:tuemail@dominio.com"
                target="_blank"
                rel="noopener noreferrer">
                Correo Electrónico
              </a>
            </li>
            {/* Agrega más redes si lo deseas */}
            <li>
              <a
                href="https://twitter.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className="info-item">
          <h2>Información Personal</h2>
          <p>
            ¡Hola! Soy un desarrollador web con base en Manizales, Colombia. Me
            apasiona la tecnología y el desarrollo de software.
          </p>
        </div>
      </div>

      <footer className="contact-footer">
        <h2>Ubicación</h2>
        <p>Manizales, Colombia</p>
      </footer>
    </div>
  );
};

export default Contact;
