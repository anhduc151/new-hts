import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import image1 from "../public/images/home-image1.png";
import image2 from "../public/images/home-image2.png";
import image3 from "../public/images/home-image3.png";

interface Slide {
  image: StaticImageData;
  about: string;
  description: string;
}

const Sliderhome: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides: Slide[] = [
    {
      image: image1,
      about: "About us 1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus cumque sunt temporibus.",
    },
    {
      image: image2,
      about: "About us 2",
      description:
        "ipsum dolor sit amet consectetur, adipisicing elit. Repellendus cumque sunt temporibus.",
    },
    {
      image: image3,
      about: "About us 3",
      description:
        "dolor sit amet consectetur, adipisicing elit. Repellendus cumque sunt temporibus.",
    },
  ];

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const handlePreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
  
    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  return (
    <div className="slider">
      <div
        className="slider_left aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div
          className="slider-images aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Image
            src={slides[currentIndex].image}
            alt=""
            className="slider-image aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="150"
          />
        </div>
        <h2
          className="slider_about aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {slides[currentIndex].about}
        </h2>
        <p
          className="slider_p aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {slides[currentIndex].description}
        </p>
        <h3
          className="slider_learnmore aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          learn more
        </h3>
      </div>
      <div className="slider_buttons">
        <div onClick={handlePreviousSlide}>
          <i className="bx bxs-chevron-left"></i>
        </div>
        <div onClick={handleNextSlide}>
          <i className="bx bxs-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Sliderhome;
