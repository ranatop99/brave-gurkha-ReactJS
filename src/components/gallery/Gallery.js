import React from "react";
import "./Gallery.css";
import ImageSlider from "./ImageSlider";
import { data } from "../../utils/data";

const Gallery = () => {
  const { gallery } = data;

  return (
    <>
      <div className="gallery_container">
        <ImageSlider gallery={gallery} />
      </div>
    </>
  );
};

export default Gallery;
