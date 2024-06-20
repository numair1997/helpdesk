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
import SignUpOptions from "@/components/sign-up/sign-up-options";
import SignUpForm from "@/components/sign-up/sign-up-form";

function SignUpPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="flex h-full items-center justify-start max-lg:justify-center">
          <LeftSideSlider />
          <div className="flex h-full w-full max-w-[530px] flex-col items-start justify-start max-lg:px-6 max-lg:pt-40 lg:ml-20 xl:max-w-[380px] xxl:max-w-[530px] 3xl:ml-40">
            <div className="">
              <p className="text-4xl font-bold">Create your Account</p>
              <p className="text-base">Sign up to enjoy the feature of HelpDesk</p>
            </div>
            <div className="flex w-full flex-col pt-6">
              {/* <SignUpOptions /> */}
              <SignUpForm />
              <div className="flex items-center justify-center mt-5 text-sm">
                <p>You have account? <span className="font-bold underline">SignIn</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUpPage;
