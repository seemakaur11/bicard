"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import { Menu } from "./menuData";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Explore Our Popular Courses"
          paragraph="Our Programmes designed with 100% Placement Assistance."
          center
          width="900px"
          mb="80px"
        />
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-10">
                {!!Menu && Menu.map((data,index)=>{
                  const {img, title} = data
                  return (
                    <div key={index} >
                     <Image src={img} width={60} height={60} alt="menu" className="w-[80px] h-[80px]  flex justify-center" />
                      <p className="py-3 text-sm">{title}</p>
                      <button className="py-2 px-3 bg-primary text-sm text-white">Read More</button>
                    </div>
                  )
                })}
                </div >
               
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
