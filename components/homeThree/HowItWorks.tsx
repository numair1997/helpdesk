"use client";

import React, { useState } from "react";
import {
  PiBookOpenText,
  PiCalendarPlus,
  PiSortDescending,
} from "react-icons/pi";
import LinkButtonTwo from "../ui/LinkButtonTwo";
import illus1 from "@/public/images/step_one_illus.png";
import illus3 from "@/public/images/step_three_illus.png";
import illus2 from "@/public/images/step_two_illus.png";
import Image from "next/image";

const tabButton = [
  { id: 101, name: "Step_01", icon: React.createElement(PiSortDescending) },
  { id: 102, name: "Step_02", icon: React.createElement(PiCalendarPlus) },
  { id: 103, name: "Step_03", icon: React.createElement(PiBookOpenText) },
];

function HowItWorks() {
  const [activeTab, setActiveTab] = useState(101);
  return (
    <section className="stp-30 sbp-30">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h2 className="heading-2 font-bold text-n900">
            How It <span className="text-b300 underline">Works</span>
          </h2>
          <p className="pt-4 font-medium text-n500">
            What steps do I need to take to join?
          </p>
        </div>

        <ul className="stp-15 flex w-full items-center justify-center max-[480px]:flex-col max-[480px]:gap-4">
          {tabButton.map(({ id, name, icon }) => (
            <li
              key={id}
              className={`flex w-full items-center justify-center pb-4 sm:pb-6 ${
                id === activeTab
                  ? "border-b-4 border-r300"
                  : "border-b-2 border-n30"
              }`}
              onClick={() => setActiveTab(id)}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center justify-center rounded-xl bg-n30 p-3 text-2xl !leading-none sm:p-[14px] sm:text-3xl">
                  {icon}
                </span>
                <button className="text-lg font-semibold">{name}</button>
              </div>
            </li>
          ))}
        </ul>

        <div className="stp-15">
          <div className={`${activeTab === 101 ? "activeTab" : "hiddenTab"}`}>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 flex flex-col items-start justify-center md:col-span-5 lg:col-span-4">
                <h3 className="heading-3">Tasker Evaluation</h3>
                <p className="pt-3 text-n500">
                  Select a Tasker based on affordability, expertise, and
                  customer feedback, ensuring you find the perfect fit for your
                  needs.
                </p>
                <div className="pt-6 sm:pt-10">
                  <LinkButtonTwo link="/sign-up" text="Sign up now" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-7 lg:col-start-6">
                <Image src={illus1} alt="" />
              </div>
            </div>
          </div>
          <div className={`${activeTab === 102 ? "activeTab" : "hiddenTab"}`}>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 flex flex-col items-start justify-center md:col-span-5 lg:col-span-4">
                <h3 className="heading-3">Book Now</h3>
                <p className="pt-3 text-n500">
                  Secure your spot at the event of your choice by booking your
                  tickets now through our convenient online booking platform.
                </p>
                <div className="pt-6 sm:pt-10">
                  <LinkButtonTwo link="/sign-up" text="Sign up now" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-7 lg:col-start-6">
                <Image src={illus2} alt="" />
              </div>
            </div>
          </div>
          <div className={`${activeTab === 103 ? "activeTab" : "hiddenTab"}`}>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 flex flex-col items-start justify-center md:col-span-5 lg:col-span-4">
                <h3 className="heading-3">ChatTip Hub</h3>
                <p className="pt-3 text-n500">
                  Your Ultimate Destination for Chat-based Tips, Advice, and
                  Insights on a Variety of Topics and Interests.
                </p>
                <div className="pt-6 sm:pt-10">
                  <LinkButtonTwo link="/sign-up" text="Sign up now" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-7 lg:col-start-6">
                <Image src={illus3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
