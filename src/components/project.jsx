"use client";
import Image from "next/image";
import star2 from "../assets/images/v1/star2.png";
import project1 from "../assets/images/v1/project1.png";
import project2 from "../assets/images/v1/project2.png";
import project3 from "../assets/images/v1/project3.png";
import project4 from "../assets/images/v1/project4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel, Pagination } from "swiper/modules";

const Project = () => {
  const data_projects = [
    {
      img: project1,
      title: "Product Design",
      description:
        "Developing the look and feel of physical products, aesthetics, and functionality.",
    },
    {
      img: project2,
      title: "Logo and Branding",
      description:
        "Creating or refreshing a company's logo and developing a cohesive visual identity.",
    },
    {
      img: project3,
      title: "App UI/UX Design",
      description:
        "Designing the UI/UXe for mobile apps and web applications to ensure usability & engagement.",
    },
    {
      img: project4,
      title: "Packaging Design",
      description:
        "Creating packaging solutions for products that not only protect attract customers on store.",
    },
    {
      img: project1,
      title: "Product Design",
      description:
        "Developing the look and feel of physical products, aesthetics, and functionality.",
    },
    {
      img: project2,
      title: "Logo and Branding",
      description:
        "Creating or refreshing a company's logo and developing a cohesive visual identity.",
    },
  ];
  return (
    <div className="section dark-bg aximo-section-padding">
      <div className="container">
        <div className="aximo-section-title center light">
          <h2>
            Have a wide range of
            <span className="aximo-title-animation">
              creative projects
              <span className="aximo-title-icon">
                <Image src={star2} alt="" className="w-[58px] h-14" />
              </span>
            </span>
          </h2>
        </div>
      </div>
      <div className="w-full max-h-max aximo-testimonial-slider">
        <Swiper
          direction={"horizontal"}
          slidesPerView={1}
          spaceBetween={25}
          mousewheel={{
            releaseOnEdges: true,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            900: {
              slidesPerView: 2,
            },
            1600: {
              slidesPerView: 2,
            },
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          {data_projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="aximo-project-thumb">
                <Image
                  src={project.img}
                  alt={project.img}
                  className="w-full h-[80px]"
                />
                <div className="aximo-project-wrap">
                  <div className="aximo-project-data">
                    <a href="single-portfolio.html">
                      <h3>{project.title}</h3>
                    </a>
                    <p>{project.description}</p>
                  </div>
                  <a
                    className="aximo-project-icon"
                    href="single-portfolio.html"
                  >
                    <svg
                      width="34"
                      height="28"
                      viewBox="0 0 34 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                        stroke="#FDFDE1"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div class="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Project;
