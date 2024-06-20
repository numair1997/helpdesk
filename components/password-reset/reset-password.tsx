
const ResetPassword = () => {
    return (
        <>
            <div>
                <p className="text-4xl font-bold">Reset Your Password</p>
                <p className="text-base">Set unique and strong password</p>
            </div>
            <div className="flex w-full flex-col pt-6">
                <div className="flex flex-col gap-6">
                    <div>
                        <p className="text-base font-medium pb-2">New Password</p>
                        <div className="flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3">
                            <input
                                type="password"
                                placeholder="*******"
                                className="w-full text-sm text-n300 outline-none"
                            />
                        </div>
                    </div>
                    <div>
                        <p className="text-base font-medium pb-2">Confirm Password</p>
                        <div className="flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3">
                            <input
                                type="password"
                                placeholder="*******"
                                className="w-full text-sm text-n300 outline-none"
                            />
                        </div>
                    </div>
                    <div>
                        <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-3xl border border-n30 py-3 bg-black text-white">
                            <span className="text-sm font-semibold">Save</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPassword
