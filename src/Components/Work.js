import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Somos Eficientes",
      text: " ",
    },
    {
      image: ChooseMeals,
      title: "Somos Eficaces",
      text: " ",
    },
    {
      image: DeliveryMeals,
      title: "Somos lo que necesitas",
      text: " ",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Tecno Mo</p>
        <h1 className="primary-heading">Algo sobre nosotros</h1>
        <p className="primary-text">
          Somos un equipo de jovenes apasionados por la tegnologia, creando software a tu medida y llevando la innovacion a otro nivel
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
