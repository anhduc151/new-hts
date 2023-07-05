import Image from "next/image";
import React from "react";
import Link from "next/link";
import logofooter from "../public/images/logo6.png";
import facebook from "../public/images/facebook-icon.png";
import messenger from "../public/images/messenger-icons.png";
import zalo from "../public/images/zalo-icons.png";
import telegram from "../public/images/telegram-icons.png";
import youtube from "../public/images/youtube-icons.png";

export interface FooterProps {}

export default function Footer(props: FooterProps) {
  return (
    <div className="footer">
      <div className="footer_one">
        <div className="footer_one_child">
          <Link href="/">
            <Image
              src={logofooter}
              alt="logo gametamin"
              className="footer_image_logo"
            />
          </Link>
          <div className="footer_p_pad">
            <p className="footer_p">
              Gametamin is a Singapore based company - a game maker studio
              specializing in designing and producing mobile games.
            </p>
          </div>
        </div>
      </div>

      <div className="footer_two">
        <div className="footer_two_child">
          <h4 className="footer_child_review">Company</h4>
          <p className="footer_child1">
            <Link href="/contact">Contact</Link>
          </p>
          <p className="footer_child1">
            <Link href="/terms">Term</Link>
          </p>
          <p className="footer_child1">
            <Link href="/privacy">Privacy</Link>
          </p>
        </div>
      </div>

      <div className="footer_four">
        <h4 className="Footer_contact">Contact: </h4>
        <div className="Footer_four_icons">
          <Link target="blank" href="https://www.facebook.com/gametaminsg">
            <Image
              src={facebook}
              alt="facebook"
              className="Footer-image-contact"
            />
          </Link>

          <Link target="blank" href="https://www.facebook.com/gametaminsg">
            <Image
              src={messenger}
              alt="messenger"
              className="Footer-image-contact"
            />
          </Link>

          <Link target="blank" href="https://www.youtube.com/@gametamin">
            <Image
              src={youtube}
              alt="youtube"
              className="Footer-image-contact"
            />
          </Link>

          <Image
            src={telegram}
            alt="telegram"
            className="Footer-image-contact"
          />
          <Image src={zalo} alt="zalo" className="Footer-image-contact" />
        </div>
      </div>
    </div>
  );
}
