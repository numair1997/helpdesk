"use client";

import reviewImg from "@/public/images/safe_guard_review_img.png";
import secureGuardImg from "@/public/images/safe_guard_section_img.png";
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
    <section className={`stp-30 sbp-30 ${isBgGray && "bg-n20"}`}>
      <div className="container grid grid-cols-12 max-lg:gap-6">
        <div className="col-span-12 lg:col-span-6">
          <h5 className="heading-5 text-r300">Secure Guard</h5>
          <h2 className="heading-2 max-w-[550px] pt-4">
            Trust and safety features for your protection
          </h2>
          <ul className="flex flex-col gap-8 pt-6 lg:pt-10">
            <li className="relative flex items-start justify-start gap-4">
              <div className="flex items-center justify-center rounded-full bg-b300 p-3 text-2xl !leading-none text-white">
                <PiCurrencyDollarSimple />
                <div className="linear_gradient_one absolute bottom-3 rtl:right-6 ltr:left-6 h-[50px] w-[2px]"></div>
              </div>
              <div className="">
                <h5 className="heading-5">Secure payments</h5>
                <p className="max-w-[500px] py-3 text-n500">
                  Only release payment when the task is completed to your
                  satisfaction
                </p>
                <Link href="" className="font-bold text-b300">
                  Read More
                </Link>
              </div>
            </li>
            <li className="relative flex items-start justify-start gap-4">
              <div className="flex items-center justify-center rounded-full bg-b300 p-3 text-2xl !leading-none text-white">
                <PiStar />
                <div className="linear_gradient_one absolute bottom-3 rtl:right-6 ltr:left-6 h-[50px] w-[2px]"></div>
              </div>
              <div className="">
                <h5 className="heading-5">Trusted ratings and reviews</h5>
                <p className="max-w-[500px] py-3 text-n500">
                  Pick the right person for the task based on real ratings and
                  reviews from other users
                </p>
                <Link href="" className="font-bold text-b300">
                  Read More
                </Link>
              </div>
            </li>
            <li className="relative flex items-start justify-start gap-4">
              <div className="flex items-center justify-center rounded-full bg-b300 p-3 text-2xl !leading-none text-white">
                <PiShieldCheck />
                <div className="linear_gradient_one absolute bottom-3 rtl:right-6 ltr:left-6 h-[50px] w-[2px]"></div>
              </div>
              <div className="">
                <h5 className="heading-5">Insurance for peace of mind</h5>
                <p className="max-w-[500px] py-3 text-n500">
                  Only release payment when the task is completed to your
                  satisfaction
                </p>
                <Link href="" className="font-bold text-b300">
                  Read More
                </Link>
              </div>
            </li>
          </ul>
          <div className="flex justify-start pt-10">
            <LinkButton link="/post-task" text="Post your task for free" />
          </div>
        </div>

        <div className="relative col-span-12 items-end justify-center lg:col-span-5 lg:col-start-8 lg:flex">
          <div className="overflow-hidden pb-4 pr-4">
            <Image
              src={secureGuardImg}
              alt=""
              className="relative z-10 h-full w-full overflow-hidden rounded-2xl"
            />
          </div>
          <div className="absolute bottom-0 right-0 h-[250px] w-[200px] rounded-2xl bg-n900 sm:h-[300px] lg:w-[300px] xl:h-[500px]"></div>

          <div className="box-shadow-2 absolute right-0 top-4 z-10 flex items-center justify-start gap-2 rounded-xl border border-b50 bg-white px-3 py-2 sm:top-12 sm:gap-3 sm:px-8 sm:py-6 3xl:-right-32">
            <div className="rounded-full bg-b100 p-0.5">
              <Image src={reviewImg} alt="" className="rounded-full" />
            </div>

            <div className="">
              <div className="flex items-center justify-start gap-3">
                <span className="heading-3">4.5</span>
                <PiStarFill className="text-xl !leading-none text-y600" />
              </div>
              <p className="font-medium text-n500">Over all Rating</p>
            </div>
          </div>

          <div className="box-shadow-2 absolute -left-2 bottom-20 z-10 flex items-center justify-start gap-2 rounded-xl border border-b50 bg-white px-3 py-2 font-medium sm:bottom-40 sm:gap-3 sm:px-8 sm:py-6 lg:-left-20">
            <PiThumbsUp className="text-xl !leading-none " />

            <p>Job Completed</p>
            <span className="text-n300">2m ago</span>
          </div>
          <div className="box-shadow-2 absolute -left-2 bottom-8 z-10 flex items-center justify-start gap-2 rounded-xl border border-b50 bg-white px-3 py-2 font-medium sm:bottom-16 sm:gap-3 sm:px-8 sm:py-6 lg:-left-20">
            <span className="text-xl !leading-none ">
              <PiCheckCircle />
            </span>

            <p>Payment released</p>
            <span className="text-n300">2m ago</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecureGuard;
