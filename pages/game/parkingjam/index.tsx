import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewLetter from "@/components/NewLetter";
import SliderSoliraiteOther from "@/components/SliderSoliraiteOther";
import Slidersoliraite from "@/components/Slidersoliraite";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import parkingjam from "../../../public/images/parkingjam.png";
import soliraite1 from "../../../public/images/parkingjam-icon.png";
import soliraitex from "../../../public/images/solitaire-x.png";
import appstote from "../../../public/images/soliraite-appstore.png";
import chplay from "../../../public/images/solitaire-chplay.png";
import Link from "next/link";

export interface ParkingJamProps {}

export default function ParkingJam(props: ParkingJamProps) {
  return (
    <div>
      <Head>
        <title>Gametamin</title>
        <link rel="" href="/images/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div
          className="solitaire_heading aos-init aos-animate"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <h1
            className="solitaire_h1 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            Parking Jam
          </h1>
          <Image
            src={parkingjam}
            alt="parking jam"
            className="solotaire_heading_imgs"
          />
        </div>

        <div className="recruit_text1">
          <div className="recruit_great">
            <h4
              className="recruit_h4 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Great products are created
            </h4>
          </div>

          <div
            className="recruit_p aos-init aos-animate"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <p className="recruit_lorem">
              The unique Parking Jam 3D game features the best car designs with
              super smooth gameplay and extraordinary sound effects! Just swipe
              and flip the car in a board puzzle. Pick the right car to move and
              create exits to win. Come explore the Parking Jam game and unlock
              new areas, tournaments, and tons of amazing features.
            </p>
          </div>
        </div>

        <div className="solitaire_about_game">
          <div className="solitaire_game_all">
            <div className="solitaire_img">
              <Image
                src={soliraitex}
                alt="solitaire imgs"
                className="solitaire_img1"
              />
            </div>

            <div className="solitaire_game2">
              <div
                className="solitaire_games_img aos-init aos-animate
"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image src={soliraite1} alt="solitaire imgs" />
              </div>

              <div className="solitaire_right">
                <div className="solitaire_rights">
                  <h2 className="solitaire_right_h2">parking jam</h2>
                  <p className="solitaire_right_p">
                    Sharing the same outstanding and fantastic features of the
                    Traffic Jam series.
                  </p>
                </div>

                <div className="solitaire_rights_button">
                  <Link
                    target="blank"
                    href="https://play.google.com/store/apps/details?id=com.gametamin.parkingjam3d"
                  >
                    <Image
                      src={appstote}
                      alt="icons appstore"
                      className="aos-init aos-animate"
                      data-aos="fade-right"
                      data-aos-delay="100"
                    />
                  </Link>
                  <Link
                    target="blank"
                    href="https://play.google.com/store/apps/details?id=com.gametamin.parkingjam3d"
                  >
                    <Image
                      src={chplay}
                      alt="icons chplay"
                      className="aos-init aos-animate"
                      data-aos="fade-right"
                      data-aos-delay="100"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="solitaire_features">
          <div className="features_h1">
            <h1 className="features_h1_name">Features</h1>
          </div>

          <div className="features_slider">
            <Slidersoliraite />
          </div>
        </div>

        <div className="solitaire_other">
          <div className="other-h1">
            <h1 className="other_h1_name">Other games</h1>
          </div>

          <div className="other_slider">
            <SliderSoliraiteOther />
          </div>
        </div>

        <div className="solitaire_letter">
          <NewLetter />
        </div>
        <Footer />
      </main>
    </div>
  );
}
