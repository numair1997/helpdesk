"use client";
import SearchBox from "../ui/SearchBox";
// Import Swiper styles
import "swiper/css";
// Import Swiper React components
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import sliderImg1 from "@/public/images/home_four_hero1.png";
import sliderImg2 from "@/public/images/home_four_hero2.png";
import sliderImg3 from "@/public/images/home_four_hero3.png";
import sliderImg4 from "@/public/images/home_four_hero4.png";
import HeroImage from "@/public/images/home-page.png"
import Image from "next/image";

import FadeDown from "../animation/FadeDown";
import FadeRight from "../animation/FadeRight";
import FadeTop from "../animation/FadeTop";

const sliderImages = [
  sliderImg1,
  sliderImg2,
  sliderImg3,
  sliderImg4,
  sliderImg1,
  sliderImg2,
  sliderImg3,
  sliderImg4,
];

function HeroSection() {
  return (
    <section>
      <div className="bg relative z-10 h-[650px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
        <div className="absolute inset-0 z-20 bg-black"></div>
        {/* <Swiper
          modules={[FreeMode, Autoplay]}
          loop={true}
          direction={"vertical"}
          slidesPerView={4}
          speed={10000}
          autoplay={{
            delay: 1,
          }}
          breakpoints={{
            0: {
              slidesPerView: 13,
              spaceBetween: 10,
            },
            350: {
              slidesPerView: 11,
              spaceBetween: 10,
            },

            400: {
              slidesPerView: 9,
              spaceBetween: 10,
            },
            500: {
              slidesPerView: 8,
              spaceBetween: 10,
            },
            620: {
              slidesPerView: 7,
              spaceBetween: 10,
            },

            880: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1150: {
              slidesPerView: 5,
              spaceBetween: 24,
              centeredSlides: true,
            },
            1500: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="smooth !absolute !inset-0 w-fit mx-auto"
        >
          {sliderImages.map((item, idx) => (
            <SwiperSlide className="swiper-slide" key={idx}>
              <Image src={item} alt="" />
            </SwiperSlide>
          ))}
        </Swiper> */}

        <div className="relative z-30 mx-auto flex h-full max-w-[950px] flex-col items-center justify-center text-center text-white max-xxl:overflow-hidden">
          <FadeDown>
            <h5 className="heading-5 pb-3 text-center">Your Solution Hub</h5>
          </FadeDown>
          <FadeRight>
            <h1 className="display-2 pb-6 font-extrabold text-5xl">
              Find the Right Talent for Any Task
            </h1>
          </FadeRight>
          <FadeTop>
            <p className="pb-10 text-small">
              Connect with experts across various professions via call, video call, or screen sharing.
            </p>
          </FadeTop>
          <div className="">
            <img
              src={'/images/home-page.png'}
              alt={"hero-image"}
              width={500}
            />
          </div>

          {/* <ul className="flex flex-wrap items-center justify-start gap-2 pl-2 pt-8 font-medium text-n900 max-sm:text-sm sm:gap-3">
            <li className="heading-5 text-white">Popular:</li>
            <li className="rounded-lg bg-b50 px-2 py-2 sm:px-4">Handyman</li>
            <li className="rounded-lg bg-bg2 px-2 py-2 sm:px-4">Babysitting</li>
            <li className="rounded-lg bg-eb50 px-2 py-2 sm:px-4">
              Photography
            </li>
            <li className="rounded-lg bg-bg1 px-2 py-2 sm:px-4">Renovation</li>
          </ul> */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
