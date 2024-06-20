import LeftSideSlider from '@/components/authentication/LeftSideSlider'
import ForgotPassword from '@/components/password-reset/forgot-password'
import ResetPassword from '@/components/password-reset/reset-password'
import VerificationCode from '@/components/password-reset/verification-code'

const ForgotPasswordPage = () => {
    return (
        <>
            <section className="relative overflow-hidden">
                <div className="flex h-full items-center justify-start max-lg:justify-center">
                    <LeftSideSlider />
                    <div className="flex h-full w-full max-w-[530px] flex-col items-start justify-start max-lg:px-6 max-lg:pt-40 lg:ml-20 xl:max-w-[380px] xxl:max-w-[530px] 3xl:ml-40">
                        {/* <ForgotPassword />
                        <VerificationCode /> */}
                        <ResetPassword />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ForgotPasswordPage
