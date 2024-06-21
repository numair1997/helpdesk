"use client";

import { useState } from "react";
import AnimateHeight from "react-animate-height"
import { PiCaretRight } from "react-icons/pi"
import { faqData } from "../../data/data";

const FAQ = () => {
    const [show, setShow] = useState(0);

    return (
        <section className="stp-20 sbp-30 bg-n20">
            <div className="4xl:large-container max-4xl:container">
                <div className="flex items-center flex-col justify-center">
                    <p className="text-xl font-bold">FAQ's</p>
                    <h2 className="text-4xl font-bold pt-5">Your Questions Answered.</h2>
                </div>
            </div>
            <div className="col-span-6 flex flex-col items-start justify-center gap-6 rounded-3xl p-4 sm:p-10 lg:col-span-7">
                {faqData.map(({ id, question, answer }, idx) => (
                    <div
                        key={id}
                        className={`overflow-hidden rounded-2xl  px-4 py-3 w-full cursor-pointer ${show === idx ? "border border-black" : "border border-n40"}`}
                        onClick={() => setShow(idx === show ? NaN : idx)}
                    >
                        <div className="flex items-center justify-between max-sm:gap-2">
                            <p className=" text-base font-medium sm:text-lg">{question}</p>
                            <div className={`flex items-center justify-center p-2 text-xl !leading-none text-black duration-700 sm:p-3 ${show === idx ? "-rotate-90 " : "rotate-90"}`}>
                                <PiCaretRight />
                            </div>
                        </div>
                        <AnimateHeight height={show === idx ? "auto" : 0}>
                            <p className="pr-8 pt-3 text-n400">{answer}</p>
                        </AnimateHeight>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FAQ
