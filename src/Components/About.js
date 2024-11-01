import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";

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
          <a href="https://drive.usercontent.google.com/download?id=1pG58mOZYf178xDTlPhlZ0PkfK_4C2QLy&export=download&authuser=0&confirm=t&uuid=89d86e73-618d-4f82-83a9-6ae26c7a984e&at=AN_67v3MX_wvK3eG84CtRkPCmnP0%3A1729350996245"> <button className="secondary-button">Descargar</button> </a>
          
        </div>
      </div>
    </div>
  );
};

export default About;
