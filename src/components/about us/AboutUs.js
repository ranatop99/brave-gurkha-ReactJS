import React from "react";
import { data } from "../../utils/data";
import "./About.css";
import aboutImage from "../../resources/gurkhaholdingkhukuri.jpg";

const AboutUs = () => {
  const { aboutSection1, aboutSection2 } = data;
  return (
    <>
      <div className="aboutus_section">
        <h2 className="aboutus_question">Why Brave Gurkha?</h2>
        <div className="about_container">
          <img src={aboutImage} alt="an old person" className="about_img" />
          <p className="aboutUs_description"> {aboutSection1}</p>
          <p className="aboutUs_description">{aboutSection2}</p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
