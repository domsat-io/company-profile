import Image from "next/image";
import star3 from "../assets/images/v1/star3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div className="aximo-auto-slider-section">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        speed={6000}
        autoplay={{
          delay: 0,
        }}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          400: {
            slidesPerView: 1,
          },
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
        allowTouchMove={false}
        disableOnInteraction={true}
        modules={[Autoplay]}
        className="swiper aximo-auto-slider"
      >
        {[...new Array(4)].map((index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="aximo-auto-slider-item">
              <h3>Let&apos;s create new experiences</h3>
              <Image src={star3} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
