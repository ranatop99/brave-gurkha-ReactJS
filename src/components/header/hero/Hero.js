import React from "react";
import { data } from "../../../utils/data";
import "./Hero.css";
import heroImage from "../../../resources/britisharmy.png";

const Hero = () => {
  const { heroTitle, heroMoto } = data;
  return (
    <>
      <div className="hero_section">
        <div className="hero_container">
          <div className="hero_left_section">
            <h2 className="hero_title">{heroTitle}</h2>
            <p className="hero_motto">{heroMoto}</p>
            <div className="navigation_button">
              <button className="nav_btn1"> View Program</button>
              <button className="nav_btn2"> Learn More...</button>
            </div>
          </div>
          <div className="hero_right_section">
            <img
              src={heroImage}
              alt="a young british fellow soldier"
              className="hero_img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
