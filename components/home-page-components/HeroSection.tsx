"use client";
import FadeDown from "../animation/FadeDown";
import FadeRight from "../animation/FadeRight";
import FadeTop from "../animation/FadeTop";

function HeroSection() {
  
  return (
    <section>
      <div className="bg relative z-10 h-[650px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
        <div className="absolute inset-0 z-20 bg-black"></div>
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
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
