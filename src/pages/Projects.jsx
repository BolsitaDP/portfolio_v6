import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Gestión de Producción - Cervecería ICA",
      description:
        "Desarrollé una aplicación para gestionar el proceso de producción de cerveza, optimizando la asignación de recursos y la trazabilidad de la producción.",
      link: "https://enlace-a-tu-proyecto.com",
      image: "https://source.unsplash.com/1600x900/?beer,production",
    },
    {
      title: "Sistema de Gestión de Proveedores - Genfar",
      description:
        "Rediseñé el sistema de proveedores para una mayor eficiencia en la gestión de inventarios y la trazabilidad de pedidos.",
      link: "https://enlace-a-tu-proyecto.com",
      image: "https://source.unsplash.com/1600x900/?business,inventory",
    },
    {
      title: "Aplicación de Control Interno - BPMco",
      description:
        "Desarrollé una solución interna para automatizar y gestionar los procesos administrativos y operativos de la empresa.",
      link: "https://enlace-a-tu-proyecto.com",
      image: "https://source.unsplash.com/1600x900/?office,control",
    },
    {
      title: "Aplicación de Control Interno - BPMco",
      description:
        "Desarrollé una solución interna para automatizar y gestionar los procesos administrativos y operativos de la empresa.",
      link: "https://enlace-a-tu-proyecto.com",
      image: "https://source.unsplash.com/1600x900/?office,control",
    },
    // Agrega más proyectos aquí
  ];

  return (
    <div className="projects" id="projects">
      <header className="projects-header">
        <h1 className="projects-title">Mis Proyectos</h1>
        <p className="projects-description">
          A continuación se encuentran algunos de los proyectos en los que he
          trabajado. Puedes hacer clic en los enlaces para obtener más
          información o ver los proyectos en acción.
        </p>
      </header>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary">
                Ver Proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
