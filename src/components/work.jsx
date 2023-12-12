'use client';
import {useState } from "react";
import Image from "next/image";
import star2 from "../assets/images/v1/star2.png";
import vidio_bg from "../assets/images/v1/video-bg.png";
import play_btn from "../assets/images/v1/play-btn.svg";
import ReactPlayer from "react-player/lazy";
const Work = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="section aximo-section-padding">
      <div id="aximo-counter"></div>
      <div className="container">
        <div className="aximo-section-title">
          <div className="row">
            <div className="col-lg-7">
              <h2>
                <span className="aximo-title-animation">
                  We make your
                  <span className="aximo-title-icon">
                    <Image src={star2} alt="" />
                  </span>
                </span>
                business stand out
              </h2>
            </div>
            <div className="col-lg-4 offset-lg-1 d-flex align-items-center">
              <p>
                We work closely with our clients to know their objectives,
                target audience, unique needs, and practical design solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="aximo-video-wrap wow fadeInUpX" data-wow-delay="0s">
              <Image src={vidio_bg} alt="" />
              <button className="aximo-video-popup play-btn1 video-init" onClick={() => setShowModal(prev => !prev)}>
                <Image src={play_btn} alt="" />
              </button>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="aximo-counter-wrap">
              <div className="aximo-counter-data">
                <h2 className="aximo-counter-number">
                  <span data-percentage="15" className="aximo-counter"></span>+
                </h2>
                <p>Years of experience</p>
              </div>
              <div className="aximo-counter-data">
                <h2 className="aximo-counter-number">
                  <span data-percentage="120" className="aximo-counter"></span>k
                </h2>
                <p>Successful projects</p>
              </div>
              <div className="aximo-counter-data">
                <h2 className="aximo-counter-number">
                  <span data-percentage="100" className="aximo-counter"></span>%
                </h2>
                <p>Client satisfaction rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && <Modal isModal={showModal} onClick={setShowModal} />}
    </div>
  );
};

const Modal = ({ isModal, onClick }) => {
  const handleToggleModal = (param) => {
    onClick(param);
  };

  return (
    <div
      className={`fixed top-0 w-full min-h-screen flex flex-col justify-center items-center ${
        isModal ? "block z-50" : "hidden"
      }`}
    >
      <div className="w-full flex justify-center items-center">
        <div className="w-full bg-black md:w-3/4">
        <div className="w-full flex justify-between items-center h-16 px-5 box-border text-white">
          <h1 className="font-bold text-base lg:text-xl text-white">Play Trailer</h1>
          <button
            className="text-3xl"
            onClick={() => handleToggleModal(false)}
          >
            &times;
          </button>
        </div>
        <div className="w-full h-96 bg-white md:h-[550px]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=Vx2aLNgGoAE`}
              controls={true}
              loop={false}
              playing={false}
              width="100.02%"
              height="100%"
            />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
