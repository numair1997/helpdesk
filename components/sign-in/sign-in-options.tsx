import Image from "next/image";
import google from "@/public/images/google_icon.png";
import MicrosoftLogo from "@/public/images/microsoft-logo.png";
import AppleLogo from "@/public/images/apple-logo.png";
import FacebookLogo from "@/public/images/facebook-logo.png";

const SignInOptions = () => {
    return (
        <>
            <div className="w-full">
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
        </>
    )
}

export default SignInOptions
