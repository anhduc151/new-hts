import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/images/logo.png";
import hiring from "../../public/images/cruit.png";
import Sliderabout from "@/components/Sliderabout";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button, Form, Input, Modal } from "antd";
import emailjs from "emailjs-com";
import { notification } from "antd";

export interface RecruitProps {}

export default function Recruit(props: RecruitProps) {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const [isSelected, setIsSelected] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openNotification = (message: string) => {
    notification.open({
      message: message,
      style: {
        fontSize: "18px",
        top: "140px",
      },
    });
  };

  const onFinish = (value: any) => {
    emailjs
      .send(
        "service_e893xdc",
        "template_nmugrwg",
        {
          reply_to: value.email,
          from_name: value.name,
          message: value.question,
        },
        "gvI3GwRJ28mvTVd-B"
      )
      .then(() => {
        openNotification("Successfully! Please check your email!");
        setIsModalOpen(false);
        //reply email user
        emailjs.send(
          "service_e893xdc",
          "template_973yes2",
          {
            title: "Thank you for contacting Victory HR Department",
            team: "Victory HR Team",
            to_email: value.email,
            to_name: value.name,
            message:
              "Thank you for reaching out to Victory Human Resources Department. We have received your message and we appreciate your interest in our company.\n\nWe understand that your time is valuable, and our dedicated HR Team is currently reviewing your message and will respond to you within 24 business hours.\n\nPlease note that our response time may be slightly delayed during weekends and public holidays, but rest assured that we are committed to addressing your questions and providing the information you need.\n\nIf you have any additional information or documents related to your message, please feel free to include them in your response.\n\nWe wish you a great day ahead and look forward to connecting with you soon.",
          },
          "gvI3GwRJ28mvTVd-B"
        );
      })
      .catch(() => {
        openNotification("Error sending email!");
        setIsModalOpen(false);
      });
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
          title="Please ask your question!"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={false}
        >
          <Form form={form} onFinish={onFinish} layout="vertical">
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
        <div className="header_home">
          <div className="header_name1">
            <h1 className="header_achieve">Achieve</h1>
          </div>
          <div className="header_name1">
            <h1 className="header_together">
              T
              <Image
                src={logo}
                alt="logo gametamin"
                className="header_image"
              ></Image>
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

        <div className="recruit_hiring">
          <div
            className="recruit_hiring_img aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Image src={hiring} alt="car" className="recruit_hiring_imgs" />
          </div>

          <div
            className="recruit_hiring_slider aos-init aos-animate"
            data-aos="zoom-in"
          >
            <Sliderabout />
          </div>
        </div>

        <div className="recruit_text1">
          <div
            className="recruit_great aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <h4 className="recruit_h4">
              Passionate Teams Create Incredible Products
            </h4>
          </div>

          <div
            className="recruit_p aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <p className="recruit_lorem">
              Gametamin – vitamin for relaxing life. With a deep love for games
              and a constant desire to conquer intriguing and challenging
              levels, Gametamin was born. We understand the needs of the users
              and set out to fulfill them through the world of games. The teams
              at Gametamin embrace challenges with a courageous spirit, and we
              are always ready to overcome them. Join us on this journey of
              discovery and let your passion shine as we continue to craft
              incredible products that bring joy to players worldwide.
            </p>
          </div>
        </div>

        <div className="recruit_form_help">
          <div
            className="recruit_form aos-init aos-animate"
            data-aos="fade-right"
            data-aos-duration="1100"
          >
            <div className="recruit_form_h1">
              <h1 className="recruit_doyou">
                Do you need any help with our vacancies ?
              </h1>
            </div>

            <div className="recruit_form_p">
              <p className="recruit_form_lorem1">
                If you have any questions, please contact us. We will reply to
                you as soon as possible.
              </p>
            </div>

            <div className="recruit_form_butotn">
              <button onClick={showModal} className="recruit_button_support">
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
