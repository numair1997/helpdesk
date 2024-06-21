"use client";

import reviewImg from "@/public/images/safe_guard_review_img.png";
import secureGuardImg from "@/public/images/secure-guard.png";
import Image from "next/image";
import Link from "next/link";
import {
  PiCheckCircle,
  PiCurrencyDollarSimple,
  PiShieldCheck,
  PiStar,
  PiStarFill,
  PiThumbsUp,
} from "react-icons/pi";
import LinkButton from "../ui/LinkButton";

function SecureGuard({ isBgGray }: { isBgGray?: boolean }) {
  return (
    <section className={`stp-20 sbp-30 ${isBgGray && "bg-n20"}`}>
      <div className="container grid grid-cols-12 max-lg:gap-6">
        <div className="col-span-12 lg:col-span-6">
          <h5 className="heading-5 text-black">Secure Guard</h5>
          <h2 className="heading-2 max-w-[550px] pt-4">
            Trust and safety features for your protection
          </h2>
          <p className="pt-5 pb-5">
            Say goodbye to uncertainty and hello to clarity with our fixed-price services. Whether it's education, legal matters, finances, home maintenance.
          </p>
          <ul className="flex flex-col gap-8 pt-6 lg:pt-10">
            <li className="relative flex items-start justify-start gap-4">
              <div className="flex items-center justify-center rounded-full p-3 text-2xl !leading-none text-black border border-black">
                <PiCurrencyDollarSimple />
                <div className="linear_gradient_one absolute bottom-3 rtl:right-6 ltr:left-6 h-[50px] w-[2px]"></div>
              </div>
              <div className="">
                <h5 className="heading-5">Secure payments</h5>
                <p className="max-w-[500px] py-6 text-n500">
                  Only release payment when the task is completed to your
                  satisfaction
                </p>
              </div>
            </li>
            <li className="relative flex items-start justify-start gap-4">
              <div className="flex items-center justify-center rounded-full p-3 text-2xl !leading-none text-black border border-black">
                <PiStar />
                <div className="linear_gradient_one absolute bottom-3 rtl:right-6 ltr:left-6 h-[50px] w-[2px]"></div>
              </div>
              <div className="">
                <h5 className="heading-5">Trusted ratings and reviews</h5>
                <p className="max-w-[500px] py-6 text-n500">
                  Pick the right person for the task based on real ratings and
                  reviews from other users
                </p>
              </div>
            </li>
            <li className="relative flex items-start justify-start gap-4">
              <div className="flex items-center justify-center rounded-full p-3 text-2xl !leading-none text-black border border-black">
                <PiShieldCheck />
                <div className="linear_gradient_one absolute bottom-3 rtl:right-6 ltr:left-6 h-[50px] w-[2px]"></div>
              </div>
              <div className="">
                <h5 className="heading-5">Insurance for peace of mind</h5>
                <p className="max-w-[500px] py-6 text-n500">
                  Only release payment when the task is completed to your
                  satisfaction
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="relative col-span-12 items-end justify-center lg:col-span-5 lg:col-start-8 lg:flex">
          <div className="overflow-hidden pb-4 pr-4">
            <Image
              src={secureGuardImg}
              alt=""
              className="relative z-10 h-full w-full overflow-hidden rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecureGuard;
