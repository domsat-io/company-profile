import React from "react";
import Image from "next/image";
import star from "../assets/images/v1/star.png";
import user1 from "../assets/images/v1/user1.png";
import user2 from "../assets/images/v1/user2.png";
import user3 from "../assets/images/v1/user3.png";
import heroThumb from "../assets/images/v1/hero-thumb.png";
import shape1 from "../assets/images/v1/shape1.png";

const Hero = () => {
  return (
    <div className="aximo-hero-section dark-bg" id="hero">
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-8">
            <div className="aximo-hero-content">
              <h1 className="text-5xl md:text-[70px] flex flex-wrap">
                <span className="aximo-title-animation">
                  A creative <Image src={star} alt="" />
                </span>
                <span>design studio</span>
              </h1>
              <p>
                We&apos;re a creative design studio specializing in meeting the
                needs of the new generation. We offer innovative and
                cutting-edge design solutions to help our clients stand out in
                today&apos;s fast-paced.
              </p>
              <div className="aximo-hero-user-wrap">
                <div className="aximo-hero-user-thumb">
                  {[...new Array(3)].map((index) => (
                    <div
                      className="aximo-hero-user-thumb-item wow fadeInUpX"
                      data-wow-delay="0s"
                      key={index}
                    >
                      <Image src={user1} alt="" />
                    </div>
                  ))}
                </div>
                <div className="aximo-hero-user-data">
                  <p>Believed by more than a thousand people</p>
                </div>
              </div>
              <a className="aximo-call-btn" href="contact-us.html">
                Book a free consultation <i className="icon-call"></i>
              </a>
              {/* <div className="aximo-hero-shape">
                <Image src={shape1} alt="" />
              </div> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="aximo-hero-thumb wow fadeInRight"
              data-wow-delay="0s"
            >
              <Image src={heroThumb} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
