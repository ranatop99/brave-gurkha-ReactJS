import React from "react";
import "./Services.css";
import { data } from "../../utils/data";

const Services = () => {
  const { services } = data;
  return (
    <>
      <div className="service_section">
        <h3 className="logo_title">BRAVEGURKHA</h3>
        <p className="motto_line">Our Services</p>
        <div className="underline"></div>
        <div className="main_container">
          {services.map((service, index) => {
            const { imageUrl, title, history, btnLink } = service;
            return (
              <div className="service_container">
                <div className="img_section">
                  <img src={imageUrl} alt="soldier" className="img_soldier" />
                </div>
                <div className="description_section">
                  <h4 className="army_origin">{title}</h4>
                  <p className="history_description">{history}</p>
                  <button className="button">{btnLink}</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
