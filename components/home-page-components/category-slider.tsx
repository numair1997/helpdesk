"use client";
import { PiCaretRight, PiCaretLeft } from "react-icons/pi";
import { testimonialData } from "../../data/data";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import DriveCategory from "@/public/images/trusted-partner.png";
import PhonesCategory from "@/public/images/trusted-partner.png";
import StudyCategory from "@/public/images/trusted-partner.png";
import TabletCategory from "@/public/images/trusted-partner.png";
import TechnologyCategory from "@/public/category-images/technology-category.png";
import TelevisionCategory from "@/public/images/trusted-partner.png";
import TranslationCategory from "@/public/images/trusted-partner.png";

const CategorySlider = () => {
    
    return (
        <section className="stp-30 sbp-30 bg-n20">

            <div className="container">
                <div className="mb-20 flex justify-between">
                    <div>
                        <p className="text-xl font-bold">Our Services</p>
                        <h1 className="text-4xl font-bold pt-2">Discover Expert Helpers</h1>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="relative mt-16 max-w-[120px] rounded-full bg-white px-2 pt-0.5"></div>
                        <div className="flex items-center justify-end gap-3 pt-6 text-lg !leading-none text-black lg:pt-10">
                            <button className=" ara-prev flex items-center justify-center rounded-full border border-black p-3 lg:p-4">
                                <PiCaretLeft />
                            </button>
                            <button className=" ara-next flex items-center justify-center rounded-full border border-black p-3 lg:p-4">
                                <PiCaretRight />
                            </button>
                        </div>
                    </div>
                </div>
                <Swiper
                    modules={[FreeMode, Navigation, Pagination]}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                    }}
                    spaceBetween={24}
                    slidesPerView={"auto"}
                    navigation={{
                        nextEl: ".ara-next",
                        prevEl: ".ara-prev",
                    }}
                    //   pagination={{
                    //     el: ".swiper-pagination",
                    //     clickable: true,
                    //   }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 24,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 2,
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 100,
                        },
                    }}
                    className="home3-testimonial-carousel"
                >

                    <div className="swiper-wrapper">
                        {testimonialData
                            .filter((_, idx) => idx % 2 === 0)
                            .map(({ id }) => (
                                <SwiperSlide
                                    className=" flex flex-col items-start justify-start"
                                    key={id}
                                >
                                    <div className="flex items-center justify-center flex-col">
                                        <Image src={TechnologyCategory} alt="" className="" />
                                        <div className="pt-5">
                                            <p className="text-xl font-bold text-black">Technology</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </div>
                </Swiper>
            </div>
        </section>
    );
}

export default CategorySlider
