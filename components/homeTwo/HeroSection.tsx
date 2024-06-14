import { PiBroom, PiShieldChevron } from "react-icons/pi";
import FadeDown from "../animation/FadeDown";
import FadeTop from "../animation/FadeTop";
import LinkButton from "../ui/LinkButton";
import heroImg from "@/public/images/home_two_hero_img.png";
import Image from "next/image";

function HeroSection() {
  return (
    <section>
      <div className="4xl:large-container relative mt-28 flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-b900 text-white max-4xl:container">
        <FadeTop>
          <h1 className="pt-8 text-[40px] font-extrabold sm:text-[60px] md:text-[100px] lg:text-[140px] xl:text-[170px] xxl:text-[200px] min-[1650px]:text-[250px]">
            Expert Hub
          </h1>
        </FadeTop>

        {/* absolute Items Start  */}

        <div className="max-sm:items-start-start items-center justify-center gap-4 max-xl:flex max-xl:pt-4 max-sm:flex-col max-sm:items-start">
          <div className="right-10 top-80 flex items-center justify-start gap-3 xl:absolute 3xl:right-[15%]">
            <div className="flex items-center justify-center rounded-full bg-bg1 p-2 text-xl !leading-none text-n900 sm:p-3">
              <PiShieldChevron />
            </div>
            <p className="font-semibold max-sm:text-sm">
              Multiple payment options.
            </p>
          </div>

          <div className="left-2 top-80 flex items-center justify-start gap-3 xl:absolute 3xl:left-40">
            <div className="flex items-center justify-center rounded-full bg-y300 p-2 text-xl !leading-none text-n900 sm:p-3">
              <PiBroom />
            </div>
            <p className="font-semibold max-sm:text-sm">
              Simple Booking Process
            </p>
          </div>
        </div>

        <div className="bottom-20 left-20 max-w-[400px] xl:absolute">
          <p className="relative px-4 py-3 font-medium after:absolute after:bottom-0 after:left-0 after:top-0 after:w-px after:bg-white max-xl:mt-4 max-sm:text-center max-sm:after:hidden">
            Post any task. Pick the best person. Get it done.
          </p>
        </div>

        <div className="bottom-32 right-16 text-n900 xl:absolute">
          <LinkButton link="/find-workers" text="Explore Now" />
        </div>
        {/* absolute Items End */}
        <FadeDown>
          <div className="relative z-10 max-xl:pt-8 max-lg:px-2 xl:-mt-32 min-[1650px]:-mt-52">
            <Image src={heroImg} alt="" className="" />
          </div>
        </FadeDown>
      </div>
    </section>
  );
}

export default HeroSection;
