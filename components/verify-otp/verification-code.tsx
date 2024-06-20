import React from 'react'

const VerificationCode = () => {
    return (
        <>
            <div>
                <p className="text-4xl font-bold">Verification Code</p>
                <p className="text-base">Enter the 6-digit code sent to example@hotmail.com</p>
            </div>
            <div className="flex w-full flex-col pt-6">
                <div className="flex flex-col gap-6">
                    <div>
                        <p className="text-base font-medium pb-2">Code</p>
                        <div className="flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3">
                            <input
                                type="text"
                                placeholder="Enter Your Verification Code"
                                className="w-full text-sm text-n300 outline-none"
                            />
                        </div>
                    </div>
                    <div>
                        <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-3xl border border-n30 py-3 bg-black text-white">
                            <span className="text-sm font-semibold">Verify</span>
                        </button>
                    </div>
                    <div className="flex items-center justify-center mt-5 text-sm">
                        <p>Haven’t received a code?&nbsp;<span className="font-bold underline">Resend</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VerificationCode
