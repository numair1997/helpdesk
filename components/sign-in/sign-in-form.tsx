
const SignInForm = () => {
    return (
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
                <p className="text-base font-medium pb-2">Password</p>
                <div className="flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3">
                    <input
                        type="password"
                        placeholder="*******"
                        className="w-full text-sm text-n300 outline-none"
                    />
                </div>
            </div>
            <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Remember me</p>
                <p className="text-sm font-semibold">Forgot your password?</p>
            </div>
            <div>
                <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-3xl border border-n30 py-3 bg-black text-white">
                    <span className="text-sm font-semibold">Sign In</span>
                </button>
            </div>
        </div>
    )
}

export default SignInForm
