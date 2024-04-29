"use client";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { Menu } from "./menuData";

const Video = () => {

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
        <div className="grid gap-10 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {!!Menu &&
            Menu.map((data, index) => {
              const { img, title } = data;
              return (
                <div key={index}>
                  <div className="flex justify-center">
                    <Image
                      src={img}
                      width={60}
                      height={60}
                      alt="menu"
                      className="h-[80px] w-[80px]"
                    />
                  </div>
                  <p className="pt-3 text-center text-[12px]">{title}</p>
                  <div className="flex justify-center pt-5">
                    <button className="bg-primary px-2 py-1 text-[12px] text-white">
                      View More
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        
      </div>
    </section>
  );
};

export default Video;
