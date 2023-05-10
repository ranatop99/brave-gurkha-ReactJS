import React from "react";
import "./Contact.css";
import { data } from "../../utils/data";

const Contact = () => {
  const { email, phone, address, paragraph } = data;
  return (
    <>
      <div className="contact_section">
        <div className="contact_container">
          <div className="company_description">
            <h3 className="title">BRAVEGURKHA</h3>
            <div className="paragraph_container">
              <p className="paragraph">{paragraph}</p>
              <p className="paragraph">{paragraph}</p>
            </div>
          </div>
          <div className="category_soldier">
            <h3 className="title">Classes</h3>
            <ul className="links_list">
              <li>
                <a href="/" className="paragraph">
                  British Gurkha Army
                </a>
              </li>
              <li>
                <a href="/" className="paragraph">
                  Singapore Police Force
                </a>
              </li>
              <li>
                <a href="/" className="paragraph">
                  Indian Gurkha Army
                </a>
              </li>
              <li>
                <a href="/" className="paragraph">
                  Nepal Army
                </a>
              </li>
              <li>
                <a href="/" className="paragraph">
                  Nepal Police Force
                </a>
              </li>
            </ul>
          </div>
          <div className="contact_details">
            <h3 className="title">Contact</h3>
            <div className="contact_conatiner">
              <div className="office_address">
                <h4 className="heading">Office Address</h4>
                <p className="paragraph"> {email}</p>
              </div>
              <div className="training_location">
                <h4 className="heading">Training Hall</h4>
                <p className="paragraph">{address}</p>
              </div>
              <div className="contact_details">
                <h4 className="heading">Phone no</h4>
                <p className="paragraph">{phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
