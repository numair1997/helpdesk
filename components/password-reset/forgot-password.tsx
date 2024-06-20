import React from 'react'

const ForgotPassword = () => {
    return (
        <>
            <div>
                <p className="text-4xl font-bold">Forgot Password</p>
                <p className="text-base">Enter your associated email address or mobile number to verify your account</p>
            </div>
            <div className="flex w-full flex-col pt-6">
                <div className="flex flex-col gap-6">
                    <div>
                        <p className="text-base font-medium pb-2">Phone/Email</p>
                        <div className="flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3">
                            <input
                                type="text"
                                placeholder="Enter Your Phone/Email"
                                className="w-full text-sm text-n300 outline-none"
                            />
                        </div>
                    </div>
                    <div>
                        <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-3xl border border-n30 py-3 bg-black text-white">
                            <span className="text-sm font-semibold">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword