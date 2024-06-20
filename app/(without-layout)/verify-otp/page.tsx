import LeftSideSlider from '@/components/authentication/LeftSideSlider'
import OtpVerification from '@/components/verify-otp/otp-verification'
import VerificationCode from '@/components/verify-otp/verification-code'

const VerifyOtpPage = () => {
    return (
        <>
            <section className="relative overflow-hidden">
                <div className="flex h-full items-center justify-start max-lg:justify-center">
                    <LeftSideSlider />
                    <div className="flex h-full w-full max-w-[530px] flex-col items-start justify-start max-lg:px-6 max-lg:pt-40 lg:ml-20 xl:max-w-[380px] xxl:max-w-[530px] 3xl:ml-40">
                        {/* <OtpVerification /> */}
                        <VerificationCode />
                    </div>
                </div>
            </section>
        </>
    )
}

export default VerifyOtpPage
