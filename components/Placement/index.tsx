import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import Data from "./data";
import reviewData from "./reviewData";
import courseData from "./courseData";


const Placements = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-2">
          <div>
            <h1 className="mb-8 lg:text-3xl font-bold text-black dark:text-white sm:text-2xl">
              Placement Support Companies
            </h1>
            <div>
              <Image
                src="/images/hero/company.png"
                alt="company"
                className="lg:w-[90%] md:w-full h-auto"
                width={1000}
                height={600}
              />
            </div>
          </div>

          <div className="">
            <div className="mb-5">
            <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
             Placement Benefits
            </h3>
           {!!Data && Data.map((item)=>{
            return (
                <div key={item.id} className="flex py-1"><FaCheck className="mr-3 text-lg text-primary" /><p className="text-sm text-black dark:text-white">{item.para}</p>
                </div>
            )
           })}
            </div>
            <div>
            <h3 className="mb-8 text-xl font-bold text-black dark:text-white sm:text-2xl">
             Our Reviews
            </h3>
            {!!reviewData && reviewData.map((item)=>{
            return (
                <div key={item.id} className="">
                    <h3 className="text-black dark:text-white">{item.name}</h3>
                    <Image src="/images/hero/icon1.png" className="py-3 w-[100px]" width={100} height={40} alt="icon"/>
                <p className="text-sm mb-6 leading-relaxed text-body-color dark:text-body-color-dark">{item.para}</p>
                </div>
            )
           })}
            </div>

            <div className="mb-5">
            <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
            Our Courses
            </h3>
           {!!courseData && courseData.map((item)=>{
            return (
                <div key={item.id} className="flex py-1"><FaCheck className="mr-3 text-lg text-primary" /><p className="text-sm text-black dark:text-white">{item.para}</p>
                </div>
            )
           })}
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Placements;
