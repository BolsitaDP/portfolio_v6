import React from "react";
import "../styles//About.css";
import hotdogImg from "../assets/about/HotdogImg.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about" id="about">
      <header className="about-header">
        <div className="about-text">
          <h1 className="about-title">{t("about_title")}</h1>
          <p className="about-description">{t("about_description")}</p>
          <p className="about-info">{t("about_experience")}</p>
          <div className="about-buttons">
            <a href="#contact" className="btn btn-primary">
              {t("about_primaryBtn")}
            </a>
            <a href="#projects" className="btn btn-secondary">
              {t("about_secondaryBtn")}
            </a>
          </div>
        </div>
        <div className="about-image">
          <img src={hotdogImg} alt="Desarrollador" />
        </div>
      </header>
    </div>
  );
};

export default About;
