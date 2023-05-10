import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const ImageSlider = ({ gallery }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? gallery.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === gallery.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="slider_styles">
      <div className="arrow_left">
        <BsChevronCompactLeft onClick={goToPrevious} />
      </div>
      <div className="arrow_right">
        <BsChevronCompactRight onClick={goToNext} />
      </div>
      <div
        className="image_container"
        style={{ backgroundImage: `url(${gallery[currentIndex].url})` }}
      ></div>
      <div className="dots_container">
        {gallery.map((slide, slideIndex) => {
          return (
            <div
              key={slideIndex}
              className="dots_style"
              onClick={() => goToSlide(slideIndex)}
            >
              .
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
