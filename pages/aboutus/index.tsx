import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sliderabout from "@/components/Sliderabout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import aboutus from "../../public/images/aboutus.webp";
import logoabout from "../../public/images/logo.png";
import aboutredcar from "../../public/images/aboutus-redcar.png";
import aboutmousse from "../../public/images/abutus-mousse.png";
import aboutpolicece from "../../public/images/aboutus-policece.png";
import aboutpoliceman from "../../public/images/aboutus-piliceman.png";
import Link from "next/link";

export interface AboutUsProps {}

export default function AboutUs(props: AboutUsProps) {
  return (
    <div>
      <Head>
        <title>Gametamin</title>
        <link rel="" href="/images/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className="about_pages">
          <div className="about_heasding">
            <div className="about_heasding_img">
              <Image
                src={aboutus}
                alt="gametamin office full staff"
                className="about_heasding_images"
              />
            </div>
            <p className="about_heasing_p">
              Our mission is to bring the best value to users of all ages with
              different styles, at any time, and anywhere. Convenience,
              flexibility, and fun are what we aim for.
            </p>
            <p className="about_heasing_p">
              Our aim is to become a globally integrated enterprise with
              sustainable development in the gaming industry. In the next 5
              years, the main goal is to reach the top 30 largest mobile gaming
              companies in the world.
            </p>
          </div>

          <div className="about_header">
            <div
              className="about_head aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="about_h2">About Us</h2>
            </div>

            <div className="about_righter1 aos-init" data-aos="fade-left">
              <Sliderabout />
            </div>
          </div>

          <div className="timeline pad-side-20">
            <div data-aos="fade-up" className="milestone-container aos-init">
              <div data-aos="flip-left" className="milestone-content aos-init">
                <p className="time">In 2016</p>
                <p className="event">Gametamin was born</p>
              </div>
              <div className="milestone-image">
                <Image src={logoabout} alt="logo gametamin in 2016"></Image>
              </div>
              <div className="dot"></div>
            </div>
            <div
              data-aos="fade-up"
              className="milestone-container aos-init aos-animate"
            >
              <div
                data-aos="flip-right"
                className="milestone-content aos-init aos-animate"
              >
                <p className="time">In 2020</p>
                <p className="event">
                  Right in the year 2020 after the worldwide release, the game
                  has reached 500,000 thousand downloads. It took a flight to
                  the top 100 Grossing Casual Puzzle Game in 58 countries.
                </p>
              </div>
              <div className="milestone-image">
                <Image src={aboutredcar} alt="red car"></Image>
              </div>
              <div className="dot"></div>
            </div>
            <div data-aos="fade-up" className="milestone-container aos-init">
              <div data-aos="flip-left" className="milestone-content aos-init">
                <div className="time">August - September 2021</div>
                <p className="event">
                  This is an unforgettable milestone, remarking the position of
                  Gametamin in Vietnam mobile gaming industry.
                </p>
              </div>
              <div className="milestone-image">
                <Image src={aboutmousse} alt="August - September 2021"></Image>
              </div>
              <div className="dot"></div>
            </div>
            <div data-aos="fade-up" className="milestone-container aos-init">
              <div data-aos="flip-right" className="milestone-content aos-init">
                <p className="time">In November 2021</p>
                <p className="event">
                  Delivering a recreation of the original Traffic Jam Cars
                  Puzzle game - including levels, minigames, events, and some
                  extras as well!
                </p>
              </div>
              <div className="milestone-image">
                <Image src={aboutpolicece} alt="In November 2021"></Image>
              </div>
              <div className="dot"></div>
            </div>
            <div data-aos="fade-up" className="milestone-container aos-init">
              <div data-aos="flip-left" className="milestone-content aos-init">
                <p className="time">Next</p>
                <p className="event"></p>
              </div>
              <div className="milestone-image">
                <Image src={aboutpoliceman} alt="Next"></Image>
              </div>
              <div className="dot"></div>
            </div>
          </div>

          <div className="about_banding">
            <div
              className="about_banding_box aos-init aos-animate"
              data-aos="zoom-in"
            >
              <div className="about_banding_h2">
                <h2 className="about_banding-contact">Contact</h2>
              </div>

              <div className="about_box_child">
                <Link
                  target="blank"
                  href="https://www.instagram.com/trafficjampuzzle/"
                  className="box_child1"
                >
                  <div className="box_name">
                    <h4 className="box_child1_name">Instagram</h4>
                  </div>
                  <div className="about_icons">
                    <i className="bx bxl-instagram-alt"></i>
                  </div>
                </Link>

                <Link
                  target="blank"
                  href="https://twitter.com/traffic_puzzle"
                  className="box_child1"
                >
                  <div className="box_name">
                    <h4 className="box_child1_name">Twitter</h4>
                  </div>
                  <div className="about_icons">
                    <i className="bx bxl-twitter"></i>
                  </div>
                </Link>

                <Link
                  target="blank"
                  href="https://www.facebook.com/gametaminsg"
                  className="box_child1"
                >
                  <div className="box_name">
                    <h4 className="box_child1_name">facebook</h4>
                  </div>
                  <div className="about_icons">
                    <i className="bx bxl-facebook"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
