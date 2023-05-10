import React, { useState } from "react";
import "./Gallery.css";
import { data } from "../../utils/data";

const Gallery = () => {
  const { gallery } = data;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className="gallery_container">
        <h1 className="text">Glimpse of Our Trainee</h1>
        <div
          className="image_container"
          style={{ backgroundImage: `url(${gallery[0].url})` }}
        ></div>
      </div>
    </>
  );
};

export default Gallery;
