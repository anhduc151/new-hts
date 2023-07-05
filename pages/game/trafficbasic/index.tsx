import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Slidersoliraite from "@/components/Slidersoliraite";
import SliderSoliraiteOther from "@/components/SliderSoliraiteOther";
import NewLetter from "@/components/NewLetter";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import soliraitex from "../../../public/images/solitaire-x.png";
import appstote from "../../../public/images/soliraite-appstore.png";
import chplay from "../../../public/images/solitaire-chplay.png";
import trafficbasic from "../../../public/images/trafficbasic.png";
import trafficbasic1 from "../../../public/images/trafficbasic1.png";

export interface TrafficBasicProps {}

export default function TrafficBasic(props: TrafficBasicProps) {
  return (
    <div>
      <Head>
        <title>Gametamin</title>
        <link rel="" href="/images/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className="solitaire_heading">
          <h1 className="solitaire_h1">Traffic Basic</h1>
          <Image
            src={trafficbasic}
            alt="trafficbasic imgs"
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
              Discover Traffic Jam Cars Puzzle, the addictive and challenging
              match 3 puzzle game! With innovative gameplay and a wide array of
              interesting items, the game offers a fresh and engaging
              experience. With over 6000 levels to explore, is a game that never
              runs out of challenges. Traffic Jam Cars Puzzle achieved
              impressive rankings in the casual puzzle genre: #80 in the US, #50
              in Japan, #150 in Great Britain and Germany, and #200 in Korea.
              Join millions of players worldwide and experience the joy of the
              Traffic Jam Cars Puzzle today!
            </p>
          </div>
        </div>

        <div className="solitaire_about_game">
          <div className="solitaire_game_all">
            <div className="solitaire_img">
              <Image
                src={soliraitex}
                alt="soliatire 1"
                className="solitaire_img1"
              />
            </div>

            <div className="solitaire_game2">
              <div
                className="solitaire_games_img aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image src={trafficbasic1} alt="solitaire 2" />
              </div>

              <div className="solitaire_right">
                <div className="solitaire_rights">
                  <h2 className="solitaire_right_h2">TRAFFICJAM CAR PUZZLE</h2>
                  <p className="solitaire_right_p">
                    Sharing the same outstanding and fantastic features of the
                    Traffic Jam series.
                  </p>
                </div>

                <div className="solitaire_rights_button">
                  <Link
                    target="blank"
                    href="https://apps.apple.com/vn/app/traffic-jam-cars-puzzle-2022/id1600852359"
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
                    href="https://play.google.com/store/apps/details?id=com.gametamin.trafficjamcarspuzzle"
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
