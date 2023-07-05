import Image from "next/image";
import React from "react";
import image3 from "../public/images/home-image3.png";

export interface Slider3Props {}

export default function Slider3(props: Slider3Props) {
  return (
    <div>
      <div
        className="slider_left aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="slider-images aos-init aos-animate">
          <Image
            src={image3}
            alt=""
            className="slider-image aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          ></Image>
        </div>
        <h2 className="slider_about">About us</h2>
        <p className="slider_p">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          cumque sunt temporibus.
        </p>
        <h3 className="slider_learnmore">learn more</h3>
      </div>
    </div>
  );
}
