import { useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sliderhome from "@/components/Sliderhome";
import Earth from "@/components/Earth";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import numeral from "numeral";
import logo from "../public/images/logo.png";
import besidefooter from "../public/images/beside-footer.png";
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

export default function Home() {
  const inforGamesRef = useRef<HTMLHeadingElement>(null);
  const inforLanguagesRef = useRef<HTMLHeadingElement>(null);
  const [text, setText] = useState("");

  useEffect(() => {
    let isMounted = true;
    let currentIndex = 0;
    const words = ["by great teams"];
    const animateText = () => {
      if (isMounted) {
        const word = words[currentIndex];
        let currentWord = "";

        const typingInterval = setInterval(() => {
          if (currentWord.length === word.length) {
            clearInterval(typingInterval);
            setTimeout(() => {
              if (isMounted) {
                const deletingInterval = setInterval(() => {
                  if (currentWord.length === 0) {
                    clearInterval(deletingInterval);
                    currentIndex = (currentIndex + 1) % words.length;
                    animateText();
                  } else {
                    currentWord = currentWord.slice(0, -1);
                    setText(currentWord);
                  }
                }, 50);
              }
            }, 1000);
          } else {
            currentWord = word.slice(0, currentWord.length + 1);
            setText(currentWord);
          }
        }, 50);
      }
    };

    animateText();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const inforGamesElement = inforGamesRef.current;
    const inforLanguagesElement = inforLanguagesRef.current;

    let startGames = 0;
    let startLanguages = 0;
    const endGames = 5;
    const endLanguages = 104;
    const duration = 1500;

    const animateValue = (
      element: HTMLHeadingElement,
      start: number,
      end: number,
      duration: number
    ) => {
      let current = start;
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration / range)) / 1;

      const timer = setInterval(() => {
        current += increment;
        element.textContent = numeral(current).format("0,0");

        if (current === end) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (inforGamesElement) {
            animateValue(inforGamesElement, startGames, endGames, duration);
          }
          if (inforLanguagesElement) {
            animateValue(
              inforLanguagesElement,
              startLanguages,
              endLanguages,
              duration
            );
          }
        }
      },
      { threshold: 0.5 }
    );

    if (inforGamesElement) {
      observer.observe(inforGamesElement);
    }
    if (inforLanguagesElement) {
      observer.observe(inforLanguagesElement);
    }

    return () => {
      if (inforGamesElement) {
        observer.unobserve(inforGamesElement);
      }
      if (inforLanguagesElement) {
        observer.unobserve(inforLanguagesElement);
      }
    };
  }, []);
  return (
    <div>
      <Head>
        <title>Gametamin</title>
        <link rel="" href="/images/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className="header_home">
          <div className="header_name1">
            <h1 className="header_achieve">Achieve</h1>
          </div>
          <div className="header_name1">
            <h1 className="header_together">
              T<Image src={logo} alt="logo text" className="header_image" />
              gether
            </h1>
          </div>
          <div className="header_create">
            <h2 className="header_greate">great products are created</h2>
            <br />
            <h2 className="header_by">by great teams</h2>
          </div>
          <div className="header_button">
            <Link target="blank" href="https://gametamin.com/">
              <button className="header_joinus">Join Us</button>
            </Link>
          </div>
        </div>

        <div className="photos_fall aos-init aos-animate">
          <div className="photos_great">
            <h1 className="photos_name1">Great products</h1>
          </div>
          <div className="photos_are">
            <h1 className="photos_name2">are created</h1>
          </div>
          <div className="photos_by">
            <h1 className="photos_name3">{text}</h1>
          </div>
          <div className="photos_button">
            <Link href="/game">
              <button className="photos_game">All game</button>
            </Link>
          </div>
        </div>

        <div className="infor">
          <div className="infor_number">
            <div className="infor_games">
              <h2 className="infor_games_h2" ref={inforGamesRef}></h2>
              <p className="infor_games_p">GAMES</p>
            </div>

            <div className="infor_languages">
              <h2 className="infor_languages_h2" ref={inforLanguagesRef}></h2>
              <p className="infor_languages_p">LANGUAGES</p>
            </div>
          </div>

          <div className="earth">
            <Earth />
          </div>

          <div className="infor_outgames">
            <div
              className="infor_outgames_coloumn1 aos-init aos-animate"
              data-aos="zoom-out"
              data-aos-delay="200"
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

            <div className="infor_outgames_coloumn2">
              <div className="infor_column1_box2">
                <div
                  className="infor_box2_child1 aos-init aos-animate"
                  data-aos="zoom-out"
                  data-aos-delay="300"
                >
                  <div className="infor_box2_header">
                    <h4 className="infor_box2_child1_h4">24-hours</h4>
                    <h5 className="infor_box2_child1_h5">OPERATOR ACCESS</h5>
                  </div>

                  <div className="infor_box2_p">
                    <p>
                      24/7 access ensures operators businesses runs smoothly all
                      year long.
                    </p>
                  </div>
                </div>

                <div
                  className="infor_box2_child2 aos-init aos-animate"
                  data-aos="zoom-out"
                  data-aos-delay="400"
                >
                  <div className="infor_box2_child2_header">
                    <h5 className="infor_box2_header_h5">5</h5>
                    <h4 className="infor_box2_header_h4">
                      PLATFORM OPTIMIZED AND SUPPORTED
                    </h4>
                  </div>

                  <div className="infor_box2_images">
                    <Link href="/game/trafficbasic">
                      <Image
                        src={box2child2img1}
                        alt="trafficbasic"
                        className="infor_box2_child2_img"
                      />
                    </Link>
                    <Link href="/game/trafficnew">
                      <Image
                        src={box2child2img2}
                        alt="trafficnew"
                        className="infor_box2_child2_img"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="infor_outgames_coloumn3">
              <div
                className="infor_column1_box3 aos-init aos-animate"
                data-aos="zoom-out"
                data-aos-delay="500"
              >
                <div className="infor_box3_header">
                  <h5 className="infor_box3_header_h5">500K</h5>
                  <h4 className="infor_box3_header_h4">
                    CUSTOMERS AROUND THE WORLD
                  </h4>
                </div>

                <div className="infor_box3_circle1">
                  <Image
                    src={box3img1}
                    alt="earth"
                    className="infor_box3_images"
                  />
                </div>

                <div className="infor_box3_child1">
                  <div className="child1_yellow">
                    <div className="infor_box3_color">
                      <Image
                        src={box3yellow}
                        alt="yellow color"
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
                        alt="blue color"
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
                        alt="purple color"
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
                        alt="oranges color"
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
                        alt="pink color"
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

        <div className="home_slider_icon">
          <div className="home_slider_header">
            <h2 className="home_slider_h2">FEATURE POSITION</h2>
            <h4 className="home_slider_h4">
              Find the right people in the right positions for the best products
            </h4>
          </div>
          <Sliderhome />
        </div>

        <div className="beside_footer">
          <Image
            src={besidefooter}
            alt="three pig funny"
            className="beside_images aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          />
        </div>

        <Footer />
      </main>
    </div>
  );
}
