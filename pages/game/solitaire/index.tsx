import Navbar from "@/components/Navbar";
import NewLetter from "@/components/NewLetter";
import Slidersoliraite from "@/components/Slidersoliraite";
import SliderSoliraiteOther from "@/components/SliderSoliraiteOther";
import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import solitaire from "../../../public/images/solitaire-img1.png";
import soliraite1 from "../../../public/images/solitaire-animalfamjam.png";
import soliraitex from "../../../public/images/solitaire-x.png";
import appstote from "../../../public/images/soliraite-appstore.png";
import chplay from "../../../public/images/solitaire-chplay.png";

export interface SlitarineProps {}

export default function Slitarine(props: SlitarineProps) {
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
            Solitaire
          </h1>
          <Image
            src={solitaire}
            alt="solitaire imgs"
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
              Welcome to Solitaire Journey of Harvest - The excellent TriPeaks
              card game! A relaxing harvest solitaire game with exciting
              adventures. Explore the game with vivid graphics and cute
              companions! The solitaire game features fantastic gameplay: A
              delightful TriPeaks world that is full of daily harvest surprises!
              Blow up your childhood memories with beautiful sceneries of the
              countryside. Play the captivating and wonderful farm game with
              your family and enjoy!
            </p>
          </div>
        </div>

        <div className="solitaire_about_game">
          <div className="solitaire_game_all">
            <div className="solitaire_img">
              <Image
                src={soliraitex}
                alt="solitaire line"
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
                <Image src={soliraite1} alt="solitaire line 2" />
              </div>

              <div className="solitaire_right">
                <div className="solitaire_rights">
                  <h2 className="solitaire_right_h2">Solitaire</h2>
                  <p className="solitaire_right_p">
                    Sharing the same outstanding and fantastic features of the
                    Traffic Jam series.
                  </p>
                </div>

                <div className="solitaire_rights_button">
                  <Link
                    target="blank"
                    href="https://apps.apple.com/vn/app/solitaire-journey-of-harvest/id1638054336"
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
                    href="https://play.google.com/store/apps/details?id=com.gametamin.solitaire.harvest.tripeaks.farm"
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
