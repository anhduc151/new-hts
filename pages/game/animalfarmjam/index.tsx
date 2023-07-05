import Navbar from "@/components/Navbar";
import Slidersoliraite from "@/components/Slidersoliraite";
import NewLetter from "@/components/NewLetter";
import SliderSoliraiteOther from "@/components/SliderSoliraiteOther";
import Footer from "@/components/Footer";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import animalfarmjam from "../../../public/images/animalfarmjam.png";
import animalfarmjam1 from "../../../public/images/animalfarmjam1.png";
import soliraitex from "../../../public/images/solitaire-x.png";
import appstote from "../../../public/images/soliraite-appstore.png";
import chplay from "../../../public/images/solitaire-chplay.png";

export interface AnimalFarmJamProps {}

export default function AnimalFarmJam(props: AnimalFarmJamProps) {
  return (
    <div>
      <Head>
        <title>Gametamin</title>
        <link rel="" href="/images/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className="solitaire_heading">
          <h1 className="solitaire_h1">Animal Farm Jam</h1>
          <Image
            src={animalfarmjam}
            alt="Animal farm jam"
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
              Animal Farm Jam is an innovative animal parking 3d game. Immerse
              in the colorful countryside artworks with vibrant graphics and
              cute piggies. There are tons of levels and addictive challenges to
              keep you entertained. Swipe and move the animals out of the fences
              and watch the fascinating show happen. Enjoy the funniest and
              craziest animal game ever!
            </p>
          </div>
        </div>

        <div className="solitaire_about_game">
          <div className="solitaire_game_all">
            <div className="solitaire_img">
              <Image
                src={soliraitex}
                alt="solitaire"
                className="solitaire_img1"
              />
            </div>

            <div className="solitaire_game2">
              <div
                className="solitaire_games_img aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image src={animalfarmjam1} alt="animal farm jam" />
              </div>

              <div className="solitaire_right">
                <div className="solitaire_rights">
                  <h2 className="solitaire_right_h2">animal farm jam </h2>
                  <p className="solitaire_right_p">
                    Sharing the same outstanding and fantastic features of the
                    Traffic Jam series.
                  </p>
                </div>

                <div className="solitaire_rights_button">
                  <Link
                    target="blank"
                    href="https://apps.apple.com/app/id6446186498"
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
                    href="https://play.google.com/store/apps/details?id=com.vjctory.farmjam.animalfarm"
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
