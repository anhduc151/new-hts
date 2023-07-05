import type { AppProps } from "next/app";
import AOS, { AosOptions } from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "@/styles/globals.css";
import "../styles/navbar.css";
import "../styles/home.css";
import "../styles/sliderhome.css";
import "../styles/footer.css";
import "../styles/sliderabout.css";
import "../styles/about.css";
import "../styles/boxicons.css";
import "../styles/contact.css";
import "../styles/game.css";
import "../styles/recruit.css";
import "../styles/solitaire.css";
import "../styles/slidersoliraite-features.css";
import "../styles/newsletter.css";
import "../styles/slider-solitaire-others.css";
import "../styles/trafficnew.css";
import "../styles/earth.css";
import "../styles/terms.css";
import "../styles/privacy.css";
import "../styles/trafficbasic.css";

export default function App({ Component, pageProps }: AppProps) {
  setTimeout(function () {
    AOS.refresh();
  }, 100);

  useEffect(() => {
    // Khởi tạo AOS khi ứng dụng được khởi chạy
    initAOS({
      duration: 800,
      easing: "ease-out",
      once: false,
      delay: 100,
      startEvent: "DOMContentLoaded",
    });
  }, []);

  function initAOS(options?: AosOptions) {
    AOS.init(options);
    AOS.refreshHard();
  }
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
