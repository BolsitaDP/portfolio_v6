import React from "react";
import imgPersonal from "../assets/home/ImgPersonal.png";
import "../styles/Home.css";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home" id="home">
      <header className="home-header">
        <div className="home-text">
          <h1 className="home-title">{t("home_title")}</h1>
          <p className="home-subtitle">{t("home_subtitle")}</p>
          <div className="home-buttons">
            <a href="#projects" className="btn btn-primary">
              {t("home_primaryBtn")}
            </a>
            <a href="#about" className="btn btn-secondary">
              {t("home_secondaryBtn")}
            </a>
          </div>
        </div>
        <div className="home-image">
          <img src={imgPersonal} alt="Programación" />
        </div>
      </header>
    </div>
  );
};

export default Home;
