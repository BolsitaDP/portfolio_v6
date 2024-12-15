import React from "react";
import "../styles/Projects.css";
import { useTranslation } from "react-i18next";

import genfarImg from "../assets/projects/Genfar.png";
import cerveceriaImg from "../assets/projects/Cerveceria.jpg";
import BPMcoWebImg from "../assets/projects/BPMco_website.jpg";
import processImg from "../assets/projects/Process.jpg";

const Projects = () => {
  const { t } = useTranslation();
  const projects = [
    {
      title: "project1_title",
      description: "project1_description",
      link: "",
      image: cerveceriaImg,
    },
    {
      title: "project2_title",
      description: "project2_description",
      link: "",
      image: genfarImg,
    },
    {
      title: "project3_title",
      description: "project3_description",
      link: "",
      image: processImg,
    },
    {
      title: "project4_title",
      description: "project4_description",
      link: "https://bpmco.co",
      image: BPMcoWebImg,
    },
  ];

  return (
    <div className="projects" id="projects">
      <header className="projects-header">
        <h1 className="projects-title">{t("projects_title")}</h1>
        <p className="projects-description">{t("projects_description")}</p>
      </header>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={t(`${project.title}`)} />
            </div>
            <div className="project-content">
              <h2 className="project-title">{t(`${project.title}`)}</h2>
              <p className="project-description">
                {t(`${project.description}`)}
              </p>
              {project.link !== "" ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary">
                  {t("projects_viewProject")}
                </a>
              ) : (
                <span className="spanAlert"> {t("projects_alert")} </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
