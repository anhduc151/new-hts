import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import slider1 from "../public/images/soliraite-features-img1.png";
import slider2 from "../public/images/soliraite-features-img2.png";
import slider3 from "../public/images/soliraite-features-img3.png";
import { useEffect, useState } from "react";

export interface SlidersoliraiteProps {}

export default function Slidersoliraite(props: SlidersoliraiteProps) {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  
  return (
    <div>
      <Slider {...settings} className="slider-soliraite-features1">
        <div
          className="slider_soliraite_features aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Image src={slider1} alt="" className="slider_solitaireimgs"/>
          {/* <h2 className="solirate_features_h2">animal farm jam </h2>
          <p className="soliraite_features_p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p> */}
        </div>

        <div
          className="slider_soliraite_features aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Image src={slider2} alt="" className="slider_solitaireimgs"/>
          {/* <h2 className="solirate_features_h2">animal farm jam </h2>
          <p className="soliraite_features_p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p> */}
        </div>

        <div
          className="slider_soliraite_features aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Image src={slider3} alt="" className="slider_solitaireimgs"/>
          {/* <h2 className="solirate_features_h2">animal farm jam </h2>
          <p className="soliraite_features_p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p> */}
        </div>
      </Slider>
    </div>
  );
}
