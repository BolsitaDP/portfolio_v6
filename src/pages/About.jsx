import React from "react";
import "../styles//About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <header className="about-header">
        <div className="about-text">
          <h1 className="about-title">Sobre mí</h1>
          <p className="about-description">
            Soy un desarrollador web con más de 2 años de experiencia en la
            creación de aplicaciones web robustas y escalables. Me apasiona
            aprender nuevas tecnologías y resolver problemas complejos a través
            del código.
          </p>
          <p className="about-info">
            He trabajado en proyectos desafiantes para clientes en diversas
            industrias, incluyendo el desarrollo de sistemas de gestión de
            producción, soluciones de proveedores y herramientas internas para
            empresas. Mi objetivo es siempre entregar productos de calidad que
            mejoren la experiencia del usuario.
          </p>
          <div className="about-buttons">
            <a href="#contact" className="btn btn-primary">
              Contacto
            </a>
            <a href="#projects" className="btn btn-secondary">
              Ver Proyectos
            </a>
          </div>
        </div>
        <div className="about-image">
          <img
            src="https://source.unsplash.com/1600x900/?developer,programming"
            alt="Desarrollador"
          />
        </div>
      </header>
    </div>
  );
};

export default About;
