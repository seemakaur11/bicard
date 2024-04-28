import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title:
    "Bicard Embedded systems Course Training Institute in Pune with placement assistance-Embedded System Course coaching centre in Pune",
  description: "Bicard",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Bicard, best embbedded systems course training institute in Pune. Embedded course offline or online classes in pune. Embedded systems placements institute in Pune. Embedded Training Pune, Embedded Systems Training Institute in Pune,Best institute in pune for Embeddeed Systems Design Course, Embedded Systems Online Course,Embedded Systems Training in Pune Maharashtra"
        />
        <meta
          name="keywords"
          content="best embedded systems training institute in pune, embedded system course training, bicard embedded systems training institute, embedded classes pune, embedded systems design course, IOT course training in pune,
          embedded courses in pune with placement,
          best embedded training institute in pune,
          embedded systems course fees in pune,
          embedded systems course near me,
          embedded jobs in pune,
          automotive embedded systems course in pune,
          embedded training pune bicard,
          embedded system course bicard"
        />
      </Head>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      <Pricing />
      <Blog />
      {/* <Contact /> */}
    </>
  );
}
