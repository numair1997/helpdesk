"use client";
import LeftSideSlider from "@/components/authentication/LeftSideSlider";
import SignInForm from "@/components/sign-in/sign-in-form";
import SignInOptions from "@/components/sign-in/sign-in-options";

function SignInPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="flex h-full items-center justify-start max-lg:justify-center">
          <LeftSideSlider />
          <div className="flex h-full w-full max-w-[530px] flex-col items-start justify-start max-lg:px-6 max-lg:pt-40 lg:ml-20 xl:max-w-[380px] xxl:max-w-[530px] 3xl:ml-40">
            <div className="">
              <p className="text-4xl font-bold">Sign In</p>
              <p className="text-base">Please login to continue to your account.</p>
            </div>
            <div className="flex w-full flex-col pt-6">
              {/* <SignInOptions /> */}
              <SignInForm />
              <div className="flex items-center justify-center mt-5 text-sm">
                <p>Don’t have account? &nbsp;<span className="font-bold underline">Create Account</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignInPage;
