"use client";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import Map from "./Map";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5">
              <div className="text-white">
                <Link href="/" className="mb-5 inline-block">
                  <Image
                    src="/images/logo/bicard-logo2.png"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/bicard-logo2.png"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="mb-9 text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                  BICARD is headquartered in Pune has been in prominence since
                  its early days. We are advancing rapidly in the field of
                  embedded system design services, PCB design services,
                  conceptualizing design of systems and other software
                  development services. We are recognized as one of the most
                  trusted companies in the region.
                </p>
              </div>
              <div>
                <h1 className="mb-4 text-xl font-bold text-primary">COURSES</h1>
                <div className="mb-2.5 flex">
                  <div>
                    <FaChevronRight className="mt-1 text-sm text-primary " />
                  </div>
                  <p className="ml-1 text-sm text-body-color dark:text-body-color-dark">
                    P.G Diploma in Embedded Systems Design
                  </p>
                </div>
                <div className="mb-2.5 flex">
                  <FaChevronRight className="text-sm text-primary" />
                  <p className="ml-2 text-sm text-body-color dark:text-body-color-dark">
                    P.G Dip in Internet of Things (IOT)
                  </p>
                </div>
                <div className="mb-2.5 ml-4 flex">
                  {" "}
                  <p className="ml-2 text-sm text-body-color dark:text-body-color-dark">
                    Data Science And Machine Learning Course
                  </p>
                </div>
                <div className="mb-2.5 flex">
                  <FaChevronRight className="mt-1 text-sm text-primary" />
                  <p className="ml-2 text-sm text-body-color dark:text-body-color-dark">
                    Masters in Artificial Intelligence & Robotics
                  </p>
                </div>
                <div className="mb-2.5 flex">
                  <FaChevronRight className="mt-1 text-sm text-primary" />
                  <p className="ml-2 text-sm text-body-color dark:text-body-color-dark">
                    Masters in Embedded Systems Design
                  </p>
                </div>
              </div>
              <div className="">
                <h1 className="mb-4 text-xl font-bold text-primary">
                  CONTACT DETAILS
                </h1>
                <div className="mb-2.5 flex">
                  <div>
                    <MdLocationOn className="mt-1 text-2xl text-primary " />
                  </div>
                  <p className="ml-1 text-sm  font-semibold text-body-color dark:text-body-color-dark">
                    Office No.54,55, 3rd Floor, &apos;C&apos; Wing, Shrinath Plaza, FC
                    Road, Pune, Maharashtra.
                  </p>
                </div>
                <div className="mb-2.5 flex">
                  <BsTelephoneFill className="text-lg text-primary" />
                  <p className="ml-2 text-sm font-semibold text-body-color dark:text-body-color-dark">
                    + 91 7276606655,
                  </p>
                </div>
                <div className="mb-2.5 ml-4 flex">
                  {" "}
                  <p className="ml-2 text-sm font-semibold text-body-color dark:text-body-color-dark">
                    +91 9595605544
                  </p>
                </div>
                <div className="mb-2.5 flex">
                  <MdMail className="mt-1 text-lg text-primary" />
                  <p className="ml-2 text-sm font-semibold text-body-color dark:text-body-color-dark">
                    training@bicard.org
                  </p>
                  
                </div>
                <div className="flex pt-5">
                    <FaFacebookF className="border-2-white  px-2.8 mr-5 cursor-pointer rounded-full border py-2 text-4xl text-primary" />
                    <FaTwitter className="border-2-white px-2.8 mr-5 cursor-pointer rounded-full border py-2 text-4xl text-primary" />
                    <FaInstagram className="border-2-white px-2.8 mr-5 cursor-pointer rounded-full border py-2 text-4xl text-primary" />
                    <FaLinkedinIn className="border-2-white px-2.8 mr-5 cursor-pointer rounded-full border py-2 text-4xl text-primary" />
                  </div>
              </div>
              <div>
                <Map />
              </div>
            </div>

          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
          <p className='text-body-color dark:text-body-color-dark text-center my-2' >Disclaimer & Cookie Policy</p>
        <p className='text-body-color dark:text-body-color-dark text-center'>Copyright @ 2024 All Rights Reserved.<Link href="https://www.stmdevelopments.com/" className="text-primary"> Design by STM Developments</Link></p>
          </div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#4A6CF7"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
