import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import game1 from "../../public/images/game1.png";
import game2 from "../../public/images/game2.png";
import game3 from "../../public/images/game3.png";
import game4 from "../../public/images/game4.png";
import game5 from "../../public/images/game5.png";
import gamehader from "../../public/images/game-background.png";
import gamesappstore from "../../public/images/soliraite-appstore.png";
import chplayappstore from "../../public/images/solitaire-chplay.png";

export interface GameProps {}

export default function Game(props: GameProps) {
  const [showHeader, setShowHeader] = useState(false);
  useEffect(() => {
    setShowHeader(true);
  }, []);
  return (
    <div>
      <Head>
        <title>Gametamin</title>
        <link rel="" href="/images/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className={`game_header ${showHeader ? "show" : ""}`}>
          <Image
            src={gamehader}
            alt="game header"
            className="game_header_imgs"
          />
        </div>

        <div className="game_content1">
          <div className="top1">
            <div
              className="game1 flex1 aos-init aos-animate"
              data-aos="fade-left"
            >
              <h2 className="game_h2">traffic jam car puzzle match 3</h2>
              <p className="game_p">
                Innovative puzzle game with bright colors & cute characters.
              </p>
              <div className="games_buttons_downloards">
                <Link
                  target="blank"
                  href="https://apps.apple.com/vn/app/traffic-jam-car-puzzle-match-3/id1585412442"
                >
                  <Image
                    src={gamesappstore}
                    alt="icons appstore"
                    className="games_dowloards_btn"
                  />
                </Link>
                <Link
                  target="blank"
                  href="https://play.google.com/store/apps/details?id=com.gametamin.trafficpuzzlegame"
                >
                  <Image
                    src={chplayappstore}
                    alt="icons chplay"
                    className="games_dowloards_btn"
                  />
                </Link>
              </div>
              <button className="game_button">
                <Link href="/game/trafficnew">View more</Link>
              </button>
            </div>

            <div className="game2 flex2">
              <Link href="/game/trafficnew">
                <Image
                  src={game1}
                  alt="traffic jam car puzzle match 3"
                  className="game2_images aos-init aos-animate"
                  data-aos="zoom-in-down"
                />
              </Link>
            </div>
          </div>

          <div className="top1">
            <div className="game2">
              <Link href="/game/trafficbasic">
                <Image
                  src={game2}
                  alt="trafficjam car puzzle"
                  className="game2_images aos-init aos-animate"
                  data-aos="zoom-in-down"
                />
              </Link>
            </div>

            <div className="game1 aos-init aos-animate" data-aos="fade-right">
              <h2 className="game_h2">trafficjam car puzzle</h2>
              <p className="game_p">
                The unique puzzle game features vivid cartoon designs and
                exciting sound effects.
              </p>
              <div className="games_buttons_downloards">
                <Link
                  target="blank"
                  href="https://apps.apple.com/vn/app/traffic-jam-cars-puzzle-2022/id1600852359"
                >
                  <Image
                    src={gamesappstore}
                    alt="icons appstore"
                    className="games_dowloards_btn"
                  />
                </Link>
                <Link
                  target="blank"
                  href="https://play.google.com/store/apps/details?id=com.gametamin.trafficjamcarspuzzle"
                >
                  <Image
                    src={chplayappstore}
                    alt="icons chplay"
                    className="games_dowloards_btn"
                  />
                </Link>
              </div>
              <button className="game_button">
                <Link href="/game/trafficbasic">View more</Link>
              </button>
            </div>
          </div>

          <div className="top1">
            <div
              className="game1 flex1 aos-init aos-animate"
              data-aos="fade-left"
            >
              <h2 className="game_h2">Parking Jam </h2>
              <p className="game_p">
                The fantastic 3d world with endless fun and car parking
                challenges.
              </p>
              <div className="games_buttons_downloards">
                <Link
                  target="blank"
                  href="https://play.google.com/store/apps/details?id=com.gametamin.parkingjam3d"
                >
                  <Image
                    src={gamesappstore}
                    alt="icons appstore"
                    className="games_dowloards_btn"
                  />
                </Link>
                <Link
                  target="blank"
                  href="https://play.google.com/store/apps/details?id=com.gametamin.parkingjam3d"
                >
                  <Image
                    src={chplayappstore}
                    alt="icons chplay"
                    className="games_dowloards_btn"
                  />
                </Link>
              </div>
              <button className="game_button">
                <Link href="/game/parkingjam">View more</Link>
              </button>
            </div>

            <div className="game2 flex2">
              <Link href="/game/parkingjam">
                <Image
                  src={game3}
                  alt="parking jam"
                  className="game2_images aos-init aos-animate"
                  data-aos="zoom-in-down"
                />
              </Link>
            </div>
          </div>

          <div className="top1">
            <div className="game2">
              <Link href="/game/solitaire">
                <Image
                  src={game4}
                  alt="solitaire"
                  className="game2_images aos-init aos-animate"
                  data-aos="zoom-in-down"
                />
              </Link>
            </div>

            <div className="game1 aos-init aos-animate" data-aos="fade-right">
              <h2 className="game_h2">Solitaire Journey of Harvest</h2>
              <p className="game_p">
                The super addictive and relaxing harvest solitaire game.
              </p>
              <div className="games_buttons_downloards">
                <Link
                  target="blank"
                  href="https://apps.apple.com/vn/app/solitaire-journey-of-harvest/id1638054336"
                >
                  <Image
                    src={gamesappstore}
                    alt="icons appstore"
                    className="games_dowloards_btn"
                  />
                </Link>
                <Link
                  target="blank"
                  href="https://play.google.com/store/apps/details?id=com.gametamin.solitaire.harvest.tripeaks.farm"
                >
                  <Image
                    src={chplayappstore}
                    alt="icons chplay"
                    className="games_dowloards_btn"
                  />
                </Link>
              </div>
              <button className="game_button">
                <Link href="/game/solitaire">View more</Link>
              </button>
            </div>
          </div>

          <div className="top1">
            <div
              className="game1 flex1 aos-init aos-animate"
              data-aos="fade-left"
            >
              <h2 className="game_h2">animal farm jam </h2>
              <p className="game_p">
                A wonderful game that combines the puzzle of traffic jams with
                adorable animals.
              </p>
              <div className="games_buttons_downloards">
                <Link
                  target="blank"
                  href="https://apps.apple.com/app/id6446186498"
                >
                  <Image
                    src={gamesappstore}
                    alt="icons appstore"
                    className="games_dowloards_btn"
                  />
                </Link>
                <Link
                  target="blank"
                  href="https://play.google.com/store/apps/details?id=com.vjctory.farmjam.animalfarm"
                >
                  <Image
                    src={chplayappstore}
                    alt="icons chplay"
                    className="games_dowloards_btn"
                  />
                </Link>
              </div>
              <button className="game_button">
                <Link href="/game/animalfarmjam">View more</Link>
              </button>
            </div>

            <div className="game2 flex2">
              <Link href="/game/animalfarmjam">
                <Image
                  src={game5}
                  alt="animal farm jam"
                  className="game2_images aos-init aos-animate"
                  data-aos="zoom-in-down"
                />
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
