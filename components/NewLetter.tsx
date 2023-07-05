import React, { useState } from "react";
import { notification } from "antd";
import emailjs from "emailjs-com";
import validator from "validator";

export interface NewLetterProps {}

export default function NewLetter(props: NewLetterProps) {
  const key = "updatable";
  const [email, setEmail] = useState("");

  const openNotification = (message: string) => {
    setTimeout(() => {
      notification.open({
        key,
        message: message,
        style: {
          background: "Pink",
          fontSize: "16px",
          top: "100px",
        },
      });
    }, 1000);
  };

  const handleSendEmailer = (e: any) => {
    e.preventDefault();
    if (!validator.isEmail(email)) {
      openNotification("Email invalidate!!");
    } else {
      // Gửi email bằng emailjs-com
      emailjs
        .send(
          "service_e893xdc",
          "template_973yes2",
          {
            to_email: email,
          },
          "gvI3GwRJ28mvTVd-B"
        )
        .then((response) => {
          openNotification("Successfully! Please check your email!");
        })
        .catch((error) => {
          openNotification("Error sending email!");
        });
      setEmail("");
    }
  };
  return (
    <div className="all_letter">
      <div className="all_letter_left">
        <h1 className="all_letter_h1">Newsletter</h1>
        <div className="all_letter_div_p">
          <p className="all_letter_p">
            Subscribe here for all the news that is fit to fly - delivered
            straight to your inbox! You can opt out anytime.
          </p>
        </div>
        <div className="all_letter_div_p">
          <p className="all_letter_p">
            By subscribing, you agree to receive emails from us. Please review
            our privacy policy for more information. You can unsubscribe at any
            time
          </p>
        </div>
      </div>
      <div className="all_letter_right">
        <input
          value={email}
          type="text"
          placeholder="Email Address"
          className="all_letter_input"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button
          className="all_letter_submit"
          onClick={(e) => handleSendEmailer(e)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
