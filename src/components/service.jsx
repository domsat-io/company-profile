import React from "react";
import Image from "next/image";
import star2 from '../assets/images/v1/star2.png';
import arrowRight from '../assets/images/icon/arrow-right.svg';

const Service = () => {
  return (
    <div className="section aximo-section-padding4">
    <div className="container">
      <div className="aximo-section-title center">
        <h2>
          We provide effective
          <span className="aximo-title-animation">
            design solutions
            <span className="aximo-title-icon">
              <Image src={star2} alt="" width={'58px'} className="w-[58px] h-14"/>
            </span>
          </span>
        </h2>
      </div>
      <div className="aximo-service-wrap">
        <div className="row">
          <div className="col-lg-6">
            <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.1s">
              <div className="aximo-iconbox-icon">
                <i className="icon-design-tools"></i>
              </div>
              <div className="aximo-iconbox-data">
                <h3>UI/UX Design</h3>
                <p>Focusing on user interface (UI) and user experience (UX) design enhance the usability and accessibility of digital products & app.</p>
                <a className="aximo-icon" href="service.html"><Image src={arrowRight} alt=""/></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.2s">
              <div className="aximo-iconbox-icon">
                <i className="icon-branding"></i>
              </div>
              <div className="aximo-iconbox-data">
                <h3>Graphic Design</h3>
                <p>Creating visual elements such as logos, branding materials, page layout techniques, brochures, & other marketing collateral.</p>
                <a className="aximo-icon" href="service.html"><Image src={arrowRight} alt="" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.3s">
              <div className="aximo-iconbox-icon">
                <i className="icon-web"></i>
              </div>
              <div className="aximo-iconbox-data">
                <h3>Web Design</h3>
                <p>Designing and developing websites to ensure they are visually look and appealing, user-friendly, and functional your website.</p>
                <a className="aximo-icon" href="service.html"><Image src={arrowRight} alt=""/></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.4s">
              <div className="aximo-iconbox-icon">
                <i className="icon-design-thinking"></i>
              </div>
              <div className="aximo-iconbox-data">
                <h3>Motion Graphics</h3>
                <p>Creating animate graphics, videos for various purposes, including marketing and entertainment. To help sell a product or service.</p>
                <a className="aximo-icon" href="service.html"><Image src={arrowRight} alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Service;
