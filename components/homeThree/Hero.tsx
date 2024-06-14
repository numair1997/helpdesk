import { PiStarFill, PiStarHalfFill } from "react-icons/pi";
import FadeDown from "../animation/FadeDown";
import FadeRight from "../animation/FadeRight";
import FadeTop from "../animation/FadeTop";
import SearchBox from "../ui/SearchBox";
import brandLogo1 from "@/public/images/brand_logo_1.png";
import brandLogo2 from "@/public/images/brand_logo_2.png";
import brandLogo3 from "@/public/images/brand_logo_3.png";
import brandLogo4 from "@/public/images/brand_logo_4.png";
import heroImg from "@/public/images/home_three_hero_img.png";
import heroShape from "@/public/images/home3_hero_shape.png";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative bg-r50/30">
      <Image
        src={heroShape}
        alt=""
        className="absolute bottom-0 right-0 max-sm:hidden"
      />
      <div className="4xl:large-container sbp-30 relative overflow-hidden pt-[180px] max-4xl:container md:pt-[225px]">
        <div className="flex items-start justify-between max-md:flex-col max-md:gap-12 xxl:items-center">
          <div className="w-full md:w-[45%] lg:w-[40%]">
            <div className=" max-xl:overflow-hidden">
              <FadeDown>
                <h5 className="heading-5">Your Solution Hub</h5>
              </FadeDown>
              <FadeRight>
                <h1 className="display-3 pt-3 !font-extrabold">
                  Find the Right <span className="text-b300">Talent</span> for
                  Any Task
                </h1>
              </FadeRight>
              <FadeTop>
                <p className="sbp-15 pt-6 text-lg text-n300">
                  Access assistance from a vast network of reliable local
                  experts, spanning home repairs to beauty services.
                </p>
              </FadeTop>

              <div className="relative z-20 w-full rounded-3xl bg-white text-start md:w-[650px] lg:w-[800px] xl:w-[963px]">
                <SearchBox />
              </div>

              <ul className="flex items-center justify-start gap-2 pt-8 font-medium max-md:flex-wrap max-sm:text-sm sm:gap-3">
                <li className="heading-5">Popular:</li>
                <li className="rounded-lg bg-b50 px-2 py-2 sm:px-4">
                  Handyman
                </li>
                <li className="rounded-lg bg-bg2 px-2 py-2 sm:px-4">
                  Babysitting
                </li>
                <li className="rounded-lg bg-eb50 px-2 py-2 sm:px-4">
                  Photography
                </li>
                <li className="rounded-lg bg-bg1 px-2 py-2 sm:px-4">
                  Renovation
                </li>
              </ul>

              <div className="stp-15 flex items-center justify-start gap-6">
                <p className="display-4 font-[800] text-n900">4.7</p>
                <div className="">
                  <p className="font-medium text-n900">
                    Based on 10,000+ review on
                  </p>
                  <div className="text-xl text-y600 flex">
                    <PiStarFill />
                    <PiStarFill />
                    <PiStarFill />
                    <PiStarFill />
                    <PiStarHalfFill />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-start gap-4 pt-6 max-sm:flex-wrap">
                <Image src={brandLogo1} alt="" />
                <Image src={brandLogo2} alt="" />
                <Image src={brandLogo3} alt="" />
                <Image src={brandLogo4} alt="" />
              </div>
            </div>
          </div>
          <div className="h-full w-full md:w-[50%]">
            <Image src={heroImg} alt="" className="self-stretch" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
