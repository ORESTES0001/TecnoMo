import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Te presentamos VoSabes?
          </h1>
          <p className="primary-text">
          VoSabes es una aplicación interactiva que ofrece información sobre la cultura, mitos, leyendas, historia y jerga de Nicaragua, dirigida a estudiantes, profesores y cualquier persona interesada en aprender sobre el país de manera accesible y divertida.
          </p>
          <a href="https://drive.google.com/file/d/1WgfFfoIrW4rSiPhM8DK5SqTgXiiLv1Hb/view?usp=sharing"> <button className="secondary-button"> Descarga aquí <FiArrowRight />{" "}
          </button></a>
            
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
