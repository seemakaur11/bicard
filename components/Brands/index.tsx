"use client";
import Image from "next/image";
import { useState, useEffect } from 'react';
import brandsData from "./brandsData";
import SectionTitle from "../Common/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay } from "swiper/modules";

const Brands = () => {
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1); // Show 1 item on smaller screens
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2); // Show 2 items on medium screens
      } else if (window.innerWidth < 1280) {
        setSlidesPerView(3); // Show 3 items on large screens
      } else {
        setSlidesPerView(4); // Show 4 items on extra-large screens
      }
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
              data-wow-delay=".1s"
            >
              <SectionTitle
                title="Placement Partners."
                paragraph="Bicard is a placement partner of more than 100+ most reputed IT industries globally. We are one of the most preferred choices of the top IT industries in India. Bicard feel extremely privileged to provide the much needed skilled IT workforce to the industry. Our placement partners are an integral part of our training system and it is their invaluable feedbacks on curriculum that helps us improve our course structure as per industry requirements."
                mb="44px"
              />
              <Swiper
                spaceBetween={50}
                slidesPerView={slidesPerView}
                className="mySwiper"
                loop={true}
                autoplay={{ delay: 2000 }}
                modules={[EffectFade, Autoplay]}
              >
                {!!brandsData &&
                  brandsData.map((slide, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <Image
                          src={slide.image}
                          className=" w-full  rounded-lg border border-dashed"
                          width={130}
                          height={100}
                          alt="slide"
                        />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
