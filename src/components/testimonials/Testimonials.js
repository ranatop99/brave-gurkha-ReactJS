import React from "react";
import "./Testimonial.css";
import { data } from "../../utils/data";

const Testimonials = () => {
  const { testimonials } = data;
  return (
    <>
      <div className="testimonial_section">
        <h3 className="logo_title">What our Trainee Says</h3>
        <p className="motto_line">Testimonials</p>
        <div className="container_main">
          {testimonials.map((testimonial, index) => {
            const { imageLink, statement, name, position } = testimonial;
            return (
              <div key={index} className="testimonial_container">
                <div className="image_section">
                  <img
                    src={imageLink}
                    alt="trainee photos"
                    className="picture_of_trainee"
                  />
                </div>
                <div className="image_description_section">
                  <div className="statement_section">
                    <p>{statement}</p>
                  </div>
                  <div className="trainee_details">
                    <h4>{name}</h4>
                    <p>{position}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
