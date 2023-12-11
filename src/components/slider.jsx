import Image from "next/image";
import star3 from "../assets/images/v1/star3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div className="aximo-auto-slider-section">
      <Swiper
        spaceBetween={0}
        s
        centeredSlides={true}
        speed={6000}
        // autoplay={true}
        autoplay={{
          delay: 0.8,
        }}
        loop={true}
        slidesPerView={2.5}
        allowTouchMove={false}
        disableOnInteraction={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {[...new Array(6)].map((index) => (
          <SwiperSlide key={index}>
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
