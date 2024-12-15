import React from "react";
import "../styles/Contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="contact" id="contact">
      <header className="contact-header">
        <h1 className="contact-title">{t("contact_title")}</h1>
        <p className="contact-description">{t("contact_description")}</p>
      </header>

      <div className="contact-info">
        <div className="info-item">
          <h2>{t("contact_socialMedia")}</h2>
          <ul>
            <li>
              <a
                href="https://github.com/BolsitaDP"
                target="_blank"
                rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/santiago-giraldo-dev/"
                target="_blank"
                rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:sgiraldo118@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                {t("contact_email")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <footer className="contact-footer">
        <h2>{t("contact_location")}</h2>
        <p>Manizales, Colombia</p>
      </footer>
    </div>
  );
};

export default Contact;
