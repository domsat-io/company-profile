import React from "react";
import Image from "next/image";
import star2 from "../assets/images/v1/star2.png";
import arrowRight from "../assets/images/icon/arrow-right.svg";
import Link from "next/link";

const Service = () => {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Focusing on user interface (UI) and user experience (UX) design enhance the usability and accessibility of digital products & app.",
      icon: "icon-design-tools",
    },
    {
      title: "Graphic Design",
      description:
        "Creating visual elements such as logos, branding materials, page layout techniques, brochures, & other marketing collateral.",
      icon: "icon-branding",
    },
    {
      title: "Web Design",
      description:
        "Designing and developing websites to ensure they are visually look and appealing, user-friendly, and functional your website.",
      icon: "icon-web",
    },
    {
      title: "Motion Graphics",
      description:
        "Creating animate graphics, videos for various purposes, including marketing and entertainment. To help sell a product or service.",
      icon: "icon-design-thinking",
    },
  ];

  return (
    <div className="section aximo-section-padding4" id="service">
      <div className="container">
        <div className="aximo-section-title center">
          <h2>
            We provide effective
            <span className="aximo-title-animation">
              design solutions
              <span className="aximo-title-icon">
                <Image src={star2} alt="" />
              </span>
            </span>
          </h2>
        </div>
        <div className="aximo-service-wrap">
          <div className="row">
            {services.map((service, index) => (
              <div className="col-lg-6" key={index}>
                <div
                  className="aximo-iconbox-wrap wow fadeInUpX"
                  data-wow-delay="0.1s"
                >
                  <div className="aximo-iconbox-icon">
                    <i className={service.icon}></i>
                  </div>
                  <div className="aximo-iconbox-data">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link className="aximo-icon" href="service.html">
                      <Image src={arrowRight} alt={arrowRight} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
