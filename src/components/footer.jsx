import React, { useState } from "react";
import Image from "next/image";
import logoWhite from "../assets/images/logo/logo-white.svg";
import star2 from "../assets/images/v1/star2.png";
import shape1 from "../assets/images/v1/shape1.png";
import arrowRight3 from "../assets/images/icon/arrow-right3.svg";
import Link from "next/link";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/send_email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });
      const json = await res.json();
      if (!res.ok) throw Error(json.message);
      alert("Message Sent");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (e) {
      throw Error(e.message);
    }
  };

  const socialMedia = [
    {
      name: "Twitter",
      link: "https://twitter.com/",
      icon: "icon-twitter",
    },
    {
      name: "Facebook",
      link: "https://facebook.com/",
      icon: "icon-facebook",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/",
      icon: "icon-instagram",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/",
      icon: "icon-linkedin",
    },
  ];
  return (
    <footer className="aximo-footer-section dark-bg" id="contact">
      <div className="container">
        <div className="aximo-footer-top aximo-section-padding">
          <div className="row">
            <div className="col-lg-7">
              <div className="aximo-default-content light position-relative">
                <h2>
                  <span className="aximo-title-animation">
                    Let&apos;s start a
                    <span className="aximo-title-icon">
                      <Image src={star2} alt="" />
                    </span>
                  </span>
                  project together
                </h2>
                <p>
                  We work closely with our clients to understand their
                  objectives, target audience, and unique needs. We use our
                  creative skills to translate these requirements and practical
                  design solutions.
                </p>
                <div className="aximo-info-wrap">
                  <div className="aximo-info">
                    <ul>
                      <li>Give us a call:</li>
                      <li>
                        <Link href="">(123) 456-7890</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="aximo-info">
                    <ul>
                      <li>Send us an email:</li>
                      <li>
                        <Link href="">info@mthemeus.com</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="aximo-social-icon social-large">
                  <ul>
                    {socialMedia.map((item, index) => (
                      <li key={index}>
                        <Link href={item.link} target="_blank">
                          <i className={item.icon}></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="aximo-hero-shape aximo-footer-shape">
                  <Image src={shape1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="aximo-form-wrap">
                <h4>Send us a message</h4>
                <form onSubmit={handleSubmit}>
                  <div className="aximo-form-field">
                    <input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="aximo-form-field">
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="aximo-form-field">
                    <input
                      type="text"
                      placeholder="+088-234-6849"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="aximo-form-field">
                    <textarea
                      name="textarea"
                      placeholder="Write your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <button id="aximo-submit-btn" type="submit">
                    Send message{" "}
                    <span>
                      <Image src={arrowRight3} alt="" />
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="aximo-footer-bottom">
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-footer-logo">
                <Link href="">
                  <Image src={logoWhite} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aximo-copywright one">
                <p> &copy; Copyright 2023, All Rights Reserved by Domsat.io</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
