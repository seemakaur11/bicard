"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination,Autoplay } from "swiper/modules";

const Hero = () => {
  const images = [
    { img: '/images/hero/home1.png'},
    { img: '/images/hero/home2.png'},
    { img: '/images/hero/home3.png'},
  ];
  
  return (
    <>
      <Swiper
      spaceBetween={50}
      lazy={true}
      style={{
        "--swiper-navigation-color": "#4a6cf7",
        "--swiper-navigation-size": "22px",
        "--swiper-pagination-color": "#fff",
      }}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
      loop={true}
      autoplay={{ delay: 2000 }}
      modules={[EffectFade, Navigation, Pagination,Autoplay]}
    >
      {!!images &&
        images.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                src={slide.img}
                className="pt-[70px] w-full lg:h-[600px] md:h-[500px]"
                width={1000}
                height={600}
                alt="slide"
              />
            </SwiperSlide>
          );
        })}
    </Swiper>

    </>
  );
};

export default Hero;
