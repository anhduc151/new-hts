import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Slidersoliraite from "@/components/Slidersoliraite";
import SliderSoliraiteOther from "@/components/SliderSoliraiteOther";
import NewLetter from "@/components/NewLetter";
import Footer from "@/components/Footer";
import trafficnew from "../../../public/images/trafficnew.png";
import soliraitex from "../../../public/images/solitaire-x.png";
import traficnew1 from "../../../public/images/trafficnew1.png";
import appstote from "../../../public/images/soliraite-appstore.png";
import chplay from "../../../public/images/solitaire-chplay.png";

export interface TrafficNewProps {}

export default function TrafficNew(props: TrafficNewProps) {
  return (
    <div>
      <Head>
        <title>Gametamin</title>
        <link rel="" href="/images/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className="solitaire_heading">
          <h1 className="solitaire_h1">Traffic New</h1>
          <Image
            src={trafficnew}
            alt="trafficnew imgs"
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
              Traffic Jam Car Puzzle Match 3 - The best traffic puzzle game
              ever! Help police officers to unblock cars from the traffic game
              in rush hour - Match 3 cars in a row and watch the magic happen!
              You will enjoy this traffic puzzle game with plenty of vehicles
              such as Police Car, Rainbow Bus, Town Truck, Ambulance,
              Helicopter, Train and Spaceship. Collect amazing boosters and
              daily rewards and play infinity levels!
            </p>
          </div>
        </div>

        <div className="solitaire_about_game">
          <div className="solitaire_game_all">
            <div className="solitaire_img">
              <Image
                src={soliraitex}
                alt="solitaire 1"
                className="solitaire_img1"
              />
            </div>

            <div className="solitaire_game2">
              <div
                className="solitaire_games_img aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image src={traficnew1} alt="solitaire 2" />
              </div>

              <div className="solitaire_right">
                <div className="solitaire_rights">
                  <h2 className="trafficnew_right_h2">
                    Traffic Jam Car Puzzle Legend
                  </h2>
                  <p className="solitaire_right_p">
                    Sharing the same outstanding and fantastic features of the
                    Traffic Jam series.
                  </p>
                </div>

                <div className="solitaire_rights_button">
                  <Link
                    target="blank"
                    href="https://apps.apple.com/vn/app/traffic-jam-car-puzzle-match-3/id1585412442"
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
                    href="https://play.google.com/store/apps/details?id=com.gametamin.trafficpuzzlegame"
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
