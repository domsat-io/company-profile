import { useEffect, useState } from "react";
import Image from "next/image";
import star2 from "../assets/images/v1/star2.png";
import vidio_bg from "../assets/images/v1/video-bg.png";
import play_btn from "../assets/images/v1/play-btn.svg";
// import { useSpring, animated } from "react-spring";

const Work = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  function number(n) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.span>{number}</animated.span>;
  }

  useEffect(() => {
    const aximoCounter = document.getElementById("aximo-counter");

    if (aximoCounter) {
      const handleScroll = () => {
        const oTop = aximoCounter.offsetTop - window.innerHeight;

        if (!animationTriggered && window.scrollY > oTop) {
          const counters = document.querySelectorAll(".aximo-counter");

          counters.forEach((counter) => {
            const countTo = counter.getAttribute("data-percentage");
            const countNum = parseInt(counter.innerText, 10);

            // counter.innerHTML = number(countNum);
          });

          setAnimationTriggered(true);
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [animationTriggered]);

  return (
    <div className="section aximo-section-padding" id="work">
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
              <a
                className="aximo-video-popup play-btn1 video-init"
                href="https://www.youtube.com/watch?v=Vx2aLNgGoAE"
              >
                <Image src={play_btn} alt="" />
              </a>
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
    </div>
  );
};

export default Work;
