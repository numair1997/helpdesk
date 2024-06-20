"use client";
// Import Swiper styles
import "swiper/css";
// Import Swiper React components

import LeftSideSlider from "@/components/authentication/LeftSideSlider";
import facebook from "@/public/images/facebook_icon.png";
import google from "@/public/images/google_icon.png";
import MicrosoftLogo from "@/public/images/microsoft-logo.png";
import AppleLogo from "@/public/images/apple-logo.png";
import FacebookLogo from "@/public/images/facebook-logo.png";
import Image from "next/image";
import Link from "next/link";
import { PiEnvelopeSimple, PiLock } from "react-icons/pi";

function SignInPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        {/* <div className="absolute -bottom-40 rtl:-right-20 ltr:-left-20 size-[550px] rounded-full bg-eb100/20 max-lg:hidden"></div> */}

        {/* <div className="absolute -top-40 rtl:right-32 ltr:left-32 h-[600px] w-[550px] rounded-full bg-r50/30 max-lg:hidden"></div>
        <div className="absolute -bottom-60 rtl:-left-40 ltr:-right-40 -z-10 size-[500px] rounded-full bg-eb50/20 max-lg:hidden"></div> */}

        <div className="flex h-full items-center justify-start max-lg:justify-center">
          <LeftSideSlider />
          <div className="flex h-full w-full max-w-[530px] flex-col items-start justify-start max-lg:px-6 max-lg:pt-40 lg:ml-20 xl:max-w-[380px] xxl:max-w-[530px] 3xl:ml-40">
            <div className="">
              <p className="text-4xl font-bold">Sign In</p>
              <p className="text-base">Please login to continue to your account.</p>
            </div>
            <form className="flex w-full flex-col pt-6">
              {/* <div className="flex flex-col gap-6">
                <div className="flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3">
                  <span className=" text-2xl !leading-none">
                    <PiEnvelopeSimple />
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="w-full text-sm text-n300 outline-none"
                  />
                </div>
                <div className="flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3">
                  <span className=" text-2xl !leading-none">
                    <PiLock />
                  </span>
                  <input
                    type="password"
                    placeholder="*******"
                    className="w-full text-sm text-n300 outline-none"
                  />
                </div>
              </div> */}
              <div className="w-full">
                {/* <Link
                  href="/contact"
                  className="block py-3 text-end text-sm font-medium text-n300"
                >
                  Forgot Password?
                </Link>
                <Link
                  href={"/"}
                  className="relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-b300 px-4 py-3 font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] sm:px-8"
                >
                  <span className="relative z-10">Sign In</span>
                </Link>
                <div className="flex items-center justify-center gap-2 py-3 text-sm font-medium">
                  <p className="text-n300">Don’t have an account?</p>
                  <Link href="/sign-up" className="text-b300 underline">
                    Sign Up with Email
                  </Link>
                </div> */}

                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-n30 py-3">
                  <Image src={MicrosoftLogo} alt="" />
                  <span className="text-sm font-medium text-[#555555]">Sign In with Microsoft</span>
                </button>
                <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-n30 py-3 bg-black text-white">
                  <Image src={AppleLogo} alt="" />
                  <span className="text-sm font-medium">Sign In with Apple</span>
                </button>
                <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-n30 py-3">
                  <Image src={google} alt="" />
                  <span className="text-sm font-medium text-[#555555]">Sign In with Google</span>
                </button>
                <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-n30 py-3 bg-[#0866FF] text-white">
                  <Image src={FacebookLogo} alt="" />
                  <span className="text-sm font-medium">Sign In with Facebook</span>
                </button>
              </div>
              <div className="flex items-center mt-5 mb-5">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="px-3 text-gray-500 font-medium text-[#555555]">
                  or
                </span>
                <hr className="flex-grow border-t border-gray-300" />
              </div>
              <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-n30 py-3 bg-black text-white">
                <span className="text-sm font-medium">Sign In With Phone Or Email</span>
              </button>
              <div className="flex items-center justify-center mt-5 text-sm">
                <p>Don’t have account? &nbsp;<span className="font-bold underline">Create Account</span></p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignInPage;
