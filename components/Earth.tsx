/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import box1img1 from "../public/images/infor-box1-img1.png";
import box1img2 from "../public/images/infor-box1-img2.png";
import box1img3 from "../public/images/infor-box1-img3.png";
import box1img4 from "../public/images/infor-box1-img41.png";
import box1img5 from "../public/images/infor-box1-img5.png";
import box3img1 from "../public/images/box3-img1.webp";
import box3yellow from "../public/images/box3-yellow.png";
import box3blue from "../public/images/box3-blue.webp";
import box3purple from "../public/images/box3-purple.webp";
import box3orange from "../public/images/box3-orange.webp";
import box3pink from "../public/images/box3-pink.webp";
import box2child2img1 from "../public/images/box2-child2-img1.png";
import box2child2img2 from "../public/images/box2-child2-img2.png";
import Link from "next/link";

export interface EarthProps {}

export default function Earth(props: EarthProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoUrl = "/images/20230605-092306.mp4";

  useEffect(() => {
    const handleResize = () => {
      if (videoRef.current) {
        if (window.innerWidth > 768) {
          videoRef.current.addEventListener("loadeddata", handleVideoLoaded);
          videoRef.current.play();
        } else {
          videoRef.current.removeEventListener("loadeddata", handleVideoLoaded);
          videoRef.current.play();
        }
      }
    };

    handleResize(); // Xử lý khi lần đầu render

    window.addEventListener("resize", handleResize); // Đăng ký sự kiện resize

    return () => {
      window.removeEventListener("resize", handleResize); // Hủy đăng ký sự kiện resize
    };
  }, []);

  const handleVideoLoaded = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const renderFlyingTags = () => {
    return (
      <div className="flying-tags">
        <div className="tag tag-1">
          <div
            className="infor_outgames_coloumn1 box1 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="infor_column1_box1">
              <div className="infor-box1-header">
                <h5 className="infor_box1_header_h5">5</h5>
                <h4 className="infor_box1_header_h4">OUR GAMES</h4>
              </div>

              <div className="infor_box1-images">
                <div className="infor_box1_images_left">
                  <Link href="/game/trafficbasic">
                    <Image
                      src={box1img1}
                      alt="trafficbasic"
                      className="infor_box1_imgs"
                    />
                  </Link>
                  <Link href="/game/trafficnew">
                    <Image
                      src={box1img2}
                      alt="trafficnew"
                      className="infor_box1_imgs"
                    />
                  </Link>
                  <Link href="/game/solitaire">
                    <Image
                      src={box1img3}
                      alt="solitaire"
                      className="infor_box1_imgs"
                    />
                  </Link>
                </div>

                <div className="infor_box1_images_right">
                  <Link href="/game/parkingjam">
                    <Image
                      src={box1img4}
                      alt="parkingjam"
                      className="infor_box1_imgs"
                    />
                  </Link>
                  <Link href="/game/animalfarmjam">
                    <Image
                      src={box1img5}
                      alt="animal farm jam"
                      className="infor_box1_imgs"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tag tag-2">
          <div
            className="infor_box2_child1 box2 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="infor_box2_header">
              <h4 className="infor_box2_child1_h4">24-hours</h4>
              <h5 className="infor_box2_child1_h5">OPERATOR ACCESS</h5>
            </div>

            <div className="infor_box2_p">
              <p>
                24/7 access ensures operators businesses runs smoothly all year
                long.
              </p>
            </div>
          </div>
        </div>

        <div className="tag tag-3">
          <div
            className="infor_box2_child2 box3 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="infor_box2_child2_header">
              <h5 className="infor_box2_header_h5">5</h5>
              <h4 className="infor_box2_header_h4">
                PLATFORM OPTIMIZED AND SUPPORTED
              </h4>
            </div>

            <div className="infor_box2_images">
              <Image
                src={box2child2img1}
                alt=""
                className="infor_box2_child2_img"
              />
              <Image
                src={box2child2img2}
                alt=""
                className="infor_box2_child2_img"
              />
            </div>
          </div>
        </div>

        <div className="tag tag-4">
          <div className="infor_outgames_coloumn3">
            <div
              className="infor_column1_box3 box4 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="infor_box3_header">
                <h5 className="infor_box3_header_h5">500K</h5>
                <h4 className="infor_box3_header_h4">
                  CUSTOMERS AROUND THE WORLD
                </h4>
              </div>

              <div className="infor_box3_circle1">
                <Image src={box3img1} alt="" className="infor_box3_images" />
              </div>

              <div className="infor_box3_child1">
                <div className="child1_yellow">
                  <div className="infor_box3_color">
                    <Image
                      src={box3yellow}
                      alt=""
                      className="infor_box3_child1_img"
                    />
                    <p className="infor_box3_child1_p">JAPAN</p>
                  </div>
                  <p className="infor_box3_child1_phantram">25%</p>
                </div>

                <div className="child_blue">
                  <div className="infor_box3_color">
                    <Image
                      src={box3blue}
                      alt=""
                      className="infor_box3_child1_img"
                    />
                    <p className="infor_box3_child1_p">KOREA</p>
                  </div>
                  <p className="infor_box3_child1_phantram">15%</p>
                </div>

                <div className="child_purple">
                  <div className="infor_box3_color">
                    <Image
                      src={box3purple}
                      alt=""
                      className="infor_box3_child1_img"
                    />
                    <p className="infor_box3_child1_p">INDONESIA</p>
                  </div>
                  <p className="infor_box3_child1_phantram">10%</p>
                </div>

                <div className="child_oranges">
                  <div className="infor_box3_color">
                    <Image
                      src={box3orange}
                      alt=""
                      className="infor_box3_child1_img"
                    />
                    <p className="infor_box3_child1_p">THAILAND</p>
                  </div>
                  <p className="infor_box3_child1_phantram">25%</p>
                </div>

                <div className="child_pink">
                  <div className="infor_box3_color">
                    <Image
                      src={box3pink}
                      alt=""
                      className="infor_box3_child1_img"
                    />
                    <p className="infor_box3_child1_p">VIETNAM</p>
                  </div>
                  <p className="infor_box3_child1_phantram">30%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="earth_all">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="video_earth aos-init aos-animate"
        data-aos="zoom-out"
        data-aos-delay="400"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      {renderFlyingTags()}
    </div>
  );
}
