import Link from "next/link";
import React from "react";
import Image from "next/image";
import logoWhite from "../assets/images/logo/logo-white.svg";
import star2 from "../assets/images/v1/star2.png";
import shape1 from "../assets/images/v1/shape1.png";
import arrowRight3 from "../assets/images/icon/arrow-right3.svg";

const Footer = () => {
  return (
    <footer class="aximo-footer-section dark-bg" id="contact">
      <div class="container">
        <div class="aximo-footer-top aximo-section-padding">
          <div class="row">
            <div class="col-lg-7">
              <div class="aximo-default-content light position-relative">
                <h2>
                  <span class="aximo-title-animation">
                    Let&apos;s start a
                    <span class="aximo-title-icon">
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
                <div class="aximo-info-wrap">
                  <div class="aximo-info">
                    <ul>
                      <li>Give us a call:</li>
                      <li>
                        <a href="">(123) 456-7890</a>
                      </li>
                    </ul>
                  </div>
                  <div class="aximo-info">
                    <ul>
                      <li>Send us an email:</li>
                      <li>
                        <a href="">info@mthemeus.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="aximo-social-icon social-large">
                  <ul>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i class="icon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com/" target="_blank">
                        <i class="icon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i class="icon-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i class="icon-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="aximo-hero-shape aximo-footer-shape">
                  <Image src={shape1} alt="" />
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="aximo-form-wrap">
                <h4>Send us a message</h4>
                <form action="#">
                  <div class="aximo-form-field">
                    <input type="text" placeholder="Your name" />
                  </div>
                  <div class="aximo-form-field">
                    <input type="email" placeholder="Your email address" />
                  </div>
                  <div class="aximo-form-field">
                    <input type="text" placeholder="+088-234-6849" />
                  </div>
                  <div class="aximo-form-field">
                    <textarea
                      name="textarea"
                      placeholder="Write your message here..."
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
        <div class="aximo-footer-bottom">
          <div class="row">
            <div class="col-lg-6">
              <div class="aximo-footer-logo">
                <a href="">
                  <Image src={logoWhite} alt="" />
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="aximo-copywright one">
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
