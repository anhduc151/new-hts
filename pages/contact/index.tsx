import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import licensing from "../../public/images/contactpage1.png";
import contactcar from "../../public/images/contact-car.png";
import Footer from "@/components/Footer";
import { useEffect } from "react";
// import { animateScroll as scroll, Element } from "react-scroll";
import { TweenMax } from "gsap";
import { useRef } from "react";
import cowboys from "../../public/images/contact-caoboi.png";
import address from "../../public/images/contact-address.png";
import youtube1 from "../../public/images/contact-youtube1.png";
import facebook from "../../public/images/contact-facebook1.png";
import gmail from "../../public/images/contact-gmail.png";
import Link from "next/link";
import { Button, Form, Input, Modal, Select, notification } from "antd";
import emailjs from "emailjs-com";
import validator from "validator";

export interface ContactProps {}

export default function Contact(props: ContactProps) {
  const licensingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const element = licensingRef.current;

      if (element) {
        const elementOffsetTop = element.offsetTop;
        const windowWidth = window.innerWidth;

        if (scrollPosition >= elementOffsetTop && windowWidth > 1300) {
          TweenMax.to(".contact_img1", 0.2, { scale: 1.6 });
        } else {
          TweenMax.to(".contact_img1", 0.2, { scale: 1 });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [form] = Form.useForm();
  const { TextArea } = Input;
  const [isSelected, setIsSelected] = useState("gameplay");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const message = "VICTORY COMPANY";

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < message.length) {
        setText((prevText) => prevText + message[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, message.length]);

  const openNotification = (message: string) => {
    notification.open({
      message: message,
      style: {
        fontSize: "18px",
        top: "140px",
      },
    });
  };

  const replyEmail = (
    title: any,
    to_email: any,
    to_name: any,
    team: any,
    message: any
  ) => {
    emailjs.send(
      "service_e893xdc",
      "template_973yes2",
      {
        title: title,
        to_email: to_email,
        to_name: to_name,
        message: message,
        team: team,
      },
      "gvI3GwRJ28mvTVd-B"
    );
  };

  const handleSendEmail = (
    reply_to: any,
    from_name: any,
    message: any,
    title: any,
    team: any,
    messageReply: any
  ) => {
    emailjs
      .send(
        "service_e893xdc",
        "template_nmugrwg",
        {
          reply_to: reply_to,
          from_name: from_name,
          message: message,
        },
        "gvI3GwRJ28mvTVd-B"
      )
      .then(() => {
        openNotification("Successfully! Please check your email!");
        setIsModalOpen(false);
        //handle reply email user
        replyEmail(title, reply_to, from_name, team, messageReply);
      })
      .catch(() => {
        openNotification("Error sending email!");
        setIsModalOpen(false);
      });
  };

  const onFinish = (value: any) => {
    if (isSelected === "gameplay") {
      //handle for option gameplay//////////////////////
      handleSendEmail(
        value.email,
        value.name,
        value.question,
        "Support of Victory",
        "Victory Support Team",
        "Thank you for reaching out to Victory Support Team!\n\nOur team is committed to providing excellent customer support, and we will make every effort to respond to your inquiry within 24 business hours. Please note that our response time may be slightly longer on weekends and holidays, but we assure you that we will get back to you as soon as possible.\n\nThank you for your support to the game. We look forward to connecting with you soon.\n\nHope you have a great day!"
      );
    } else if (isSelected === "recruitment") {
      //handle for option recruitment//////////////////////
      handleSendEmail(
        value.email,
        value.name,
        value.question,
        "Thank you for contacting Victory HR Department",
        "Victory HR Team",
        "Thank you for reaching out to Victory Human Resources Department. We have received your message and we appreciate your interest in our company.\n\nWe understand that your time is valuable, and our dedicated HR Team is currently reviewing your message and will respond to you within 24 business hours.\n\nPlease note that our response time may be slightly delayed during weekends and public holidays, but rest assured that we are committed to addressing your questions and providing the information you need.\n\nIf you have any additional information or documents related to your message, please feel free to include them in your response.\n\nWe wish you a great day ahead and look forward to connecting with you soon."
      );
    } else {
      //handle for option partner//////////////////////
      handleSendEmail(
        value.email,
        value.name,
        value.content,
        "Victory | Partnership Opportunity",
        "Victory Business Development Team",
        "Thank you for contacting Victory Business Development Team! We appreciate your interest and the opportunity to connect with you.\n\nWe understand the importance of your message and are committed to providing you with a prompt response within 24 business hours. Our response time might be slightly delayed on weekends and public holidays. However, rest assured that we are fully dedicated to exploring potential opportunities.\n\nAt Victory, we deeply value the idea of collaboration and believe that together, we can achieve anything. We are excited to learn more about your requirements and how our partnership can lead to mutual success.\n\nIf you have any additional details or specific preferences you would like to share, please do not hesitate to do so. Your input will help us tailor our response to your unique perspective.\n\nThank you for considering Victory as your potential partner. We look forward to connecting with you."
      );
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Head>
        <title>Gametamin</title>
        <link rel="" href="/images/favicon.ico" />
      </Head>
      <main>
        <Modal
          style={{ top: 200 }}
          title={`Support ${isSelected}!`}
          open={isModalOpen}
          onCancel={handleCancel}
          footer={false}
        >
          <Form form={form} onFinish={onFinish} layout="vertical">
            <Form.Item label="What do you want help with?">
              <Select
                onChange={(value) => setIsSelected(value)}
                defaultValue={"gameplay"}
              >
                <Select.Option value="gameplay">Gameplay</Select.Option>
                <Select.Option value="recruitment">Recruitment</Select.Option>
                <Select.Option value="partner">Partner</Select.Option>
              </Select>
            </Form.Item>

            {isSelected === "partner" ? (
              <>
                <Form.Item
                  name="name"
                  label="Your Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your name!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="content"
                  label="Content"
                  rules={[
                    {
                      required: true,
                      message: "Please input your question!",
                    },
                  ]}
                >
                  <TextArea rows={4} />
                </Form.Item>
              </>
            ) : (
              <>
                <Form.Item
                  name="name"
                  label="Your Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your name!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="question"
                  label="Question"
                  rules={[
                    {
                      required: true,
                      message: "Please input your question!",
                    },
                  ]}
                >
                  <TextArea rows={4} />
                </Form.Item>
              </>
            )}
            <Form.Item>
              <div style={{ textAlign: "center" }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Modal>
        <Navbar />
        <div className="contact-infor-section">
          <div
            className="contact-card aos-init"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <div className="contact-panel">
              <p className="contact-panel-title">Facebook</p>
              <Link href={"https://www.facebook.com/gametaminsg"}>
                <Image src={facebook} alt="facebook"></Image>
              </Link>
            </div>
          </div>
          <div
            className="contact-card aos-init"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <div className="contact-panel">
              <p className="contact-panel-title">Youtube</p>
              <Link
                href={
                  "https://www.youtube.com/channel/UCtqfA-BZLIcD2ouxgPlJPdg"
                }
              >
                <Image src={youtube1} alt="youtube"></Image>
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="500"
            className="contact-card aos-init"
            data-aos-delay="200"
          >
            <div className="contact-panel">
              <p className="contact-panel-title">Address</p>
              <Link
                href={
                  "https://www.google.com/maps/place/Peninsula+Plaza+Singapore/@1.2923461,103.8486939,17z/data=!3m2!4b1!5s0x31da18475cfdd08b:0xbd1bedb2d3c0421f!4m5!3m4!1s0x31da19a1350d10f1:0xe471fd72f9ffcba1!8m2!3d1.2923407!4d103.8508826"
                }
              >
                <Image src={address} alt="Adress"></Image>
              </Link>
            </div>
          </div>
          <div
            className="contact-card clickable-area aos-init"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <div className="contact-panel">
              <p className="contact-panel-title">Email</p>
              <Link href={"https://mail.google.com/mail/u/0/#inbox"}>
                <Image src={gmail} alt="gmail"></Image>
              </Link>
            </div>
          </div>
          <Image className="character" src={cowboys} alt="woman"></Image>
        </div>

        <div ref={licensingRef} className="contact_licensing">
          <Image src={licensing} alt="maps" className="contact_img1" />
          <div className="contact_licensing_infor">
            <h1 className="contact_licensing_infor_h1">Get in touch</h1>
            <h4 className="contact_licensing_infor_h4">Gametamin.com</h4>
          </div>
        </div>

        <div className="contact_form">
          <div
            className="form_contact aos-init aos-animate"
            data-aos="fade-right"
          >
            <div className="form_heading">
              <div className="form_name1">
                <h2
                  className="form_name1_h2 aos-init aos-animate"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  Do you need help with the game?
                </h2>
                <p
                  className="form_name1_p aos-init aos-animate"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>

              <div className="form_image1">
                <Image
                  src={contactcar}
                  alt="red car"
                  className="contact_car aos-init aos-animate"
                  data-aos="fade-right"
                  data-aos-delay="400"
                />
              </div>
            </div>

            <div
              className="form_button aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              {/* <input
                value={email}
                placeholder="Email"
                type="text"
                className="form_button_input"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <button
                className="form_button_btn"
                onClick={(e) => handleSendEmailer(e)}
              >
                Send
              </button> */}

              <button onClick={showModal} className="form_button_supports">
                Support
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
