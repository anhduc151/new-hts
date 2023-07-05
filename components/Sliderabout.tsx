import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import slider2 from "../public/images/sliderabout2.webp";
import slider5 from "../public/images/sliderabout5.webp";
import slider7 from "../public/images/sliderabout7.webp";
export interface SlideraboutProps {}

export default function Sliderabout(props: SlideraboutProps) {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="slider1">
          <Image src={slider2} alt="" className="sliderabout_image" />
        </div>

        {/* <div className="slider1">
            <Image src={slider3} alt="" className='sliderabout_image'/>
         </div> */}

        <div className="slider1">
          <Image src={slider5} alt="" className="sliderabout_image" />
        </div>

        <div className="slider1">
          <Image src={slider7} alt="" className="sliderabout_image" />
        </div>
      </Slider>
    </div>
  );
}
