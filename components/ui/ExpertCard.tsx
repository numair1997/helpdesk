"use client";
import badge from "@/public/images/verify-badge.png";
import {
  PiCaretLeft,
  PiCaretRight,
  PiHeart,
  PiPaperPlaneTilt,
} from "react-icons/pi";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import settingsIcon from "@/public/images/settings_icon.png";
import tapIcon from "@/public/images/tap_icon.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import "swiper/css";

function ExpertCard({
  img,
  expertName,
  location,
  sliderImg,
}: {
  img: string;
  expertName: string;
  location: string;
  sliderImg: StaticImageData[];
}) {
  return (
    <div className=" flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 ">
      <div className="flex items-center justify-start gap-3 px-3 sm:px-6">
        <div className="relative max-md:overflow-hidden">
          <div className="hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]">
            <div className="absolute -top-[20px] left-[5px]">
              <div className="hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]">
                <div className="absolute -top-[19px] left-[4px] z-20">
                  <div className="hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]">
                    <div className="r-hex3 absolute -left-0.5 -top-[19px] z-30 inline-block w-[86px] overflow-hidden">
                      <div className="r-hex-inner3">
                        <div
                          className={`${img} r-hex-inner-3 before:h-[86px] before:bg-cover`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-3 right-1 z-30">
            <Image src={badge} alt="" className="" />
          </div>
        </div>
        <div className="max-[350px]:max-w-20">
          <div className="flex items-center justify-start gap-3">
            <h5 className="heading-5">{expertName}</h5>
            <p className="rounded-full bg-y300 px-2 py-1 text-xs font-medium">
              PRO
            </p>
          </div>
          <p className="pt-2 text-n500">{location}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 px-6 text-[13px]">
        <p className="rounded-full bg-r50 px-2 py-1 font-medium text-r300">
          $75 - $100/hr
        </p>
        <p className="rounded-full bg-g50 px-2 py-1 font-medium text-g400">
          TOP INDEPENDENT
        </p>
        <p className="rounded-full bg-v50 px-2 py-1 font-medium text-v300">
          AVAILABLE
        </p>
      </div>

      <div className="flex flex-wrap gap-2 px-6 text-n400">
        <p className="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium">
          <Image src={settingsIcon} alt="" />
          <span>Handyman</span>
        </p>
        <p className="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium">
          <Image src={tapIcon} alt="" />
          <span>Plumber </span>
        </p>
        <p className="rounded-xl bg-b50 px-3 py-2 font-medium">+3</p>
      </div>

      <div className="relative">
        <Swiper
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={12}
          navigation={{
            nextEl: ".ara-next",
            prevEl: ".ara-prev",
          }}
          modules={[FreeMode, Navigation]}
          className="swiper expert-slider-carousel group"
        >
          {sliderImg.map((item, i) => (
            <SwiperSlide className="swiper-wrapper" key={i}>
              <Image src={item} alt="" className="w-full" />
            </SwiperSlide>
          ))}
          <div className="absolute left-2 right-2 top-28 z-10">
            <div className="flex w-full items-center justify-between">
              <button className="ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100">
                <PiCaretLeft />
              </button>
              <button className="ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100">
                <PiCaretRight />
              </button>
            </div>
          </div>
        </Swiper>
      </div>

      <div className="flex items-center justify-start gap-2 px-6">
        <Link
          href={`/find-workers/${expertName
            .toLowerCase()
            .replaceAll(" ", "-")}`}
          className="relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
        >
          <div className="relative z-20 flex items-center justify-center gap-3">
            <PiPaperPlaneTilt className="text-xl !leading-none" />
            <span>Get in touch</span>
          </div>
        </Link>
        <button className="relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300">
          <PiHeart />
        </button>
      </div>
    </div>
  );
}

export default ExpertCard;
