import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Más Sobre VoSabes</p>
        <h1 className="primary-heading">
          Mitos y Leyendas
        </h1>
        <p className="primary-text">
          A través de esta aplicación podras aprender y conocer mas sobre nuestros mitos y leyendas
        </p>
        <p className="primary-text">
          Aprende divirtiendote
        </p>
        <div className="about-buttons-container">
          <a href=""> <button className="secondary-button">Descargar</button> </a>
          
        </div>
      </div>
    </div>
  );
};

export default About;
