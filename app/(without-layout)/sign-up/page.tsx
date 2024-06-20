"use client";
import LeftSideSlider from "@/components/authentication/LeftSideSlider";
import SignUpForm from "@/components/sign-up/sign-up-form";
import SignUpOptions from "@/components/sign-up/sign-up-options";

function SignUpPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="flex h-full items-center justify-start max-lg:justify-center">
          <LeftSideSlider />
          <div className="flex mt-20 h-full w-full max-w-[530px] flex-col items-start justify-start max-lg:px-6  lg:ml-20 xl:max-w-[380px] xxl:max-w-[530px] 3xl:ml-20 ">
            <div>
              <p className="text-4xl font-bold">Create your Account</p>
              <p className="text-base">Sign up to enjoy the feature of HelpDesk</p>
            </div>
            <div className="flex w-full flex-col pt-6 pb-10">
              <SignUpOptions />
              {/* <SignUpForm /> */}
              <div className="flex items-center justify-center mt-5 text-sm">
                <p>You have account? <span className="font-bold underline">SignIn</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUpPage;
