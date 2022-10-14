import React from "react";
import NavbarDashboard from "../molecules/NavbarDashboard";
import PasswordResetForm from "../molecules/PasswordResetForm"

function ResetPasswordPage() {
  return (
    <div>
      <div className="md:px-14 md:pt-4 md:w-[550px]">
        <NavbarDashboard />
      </div>
      <div className="flex">
        <div className="hidden md:block relative -top-28 px-24 pt-40 w-[550px] bg-primary-50 content-center h-[110vh]">
          <img src="/laptop-woman.png" alt="laptop-woman" width={350} />
          <p className="font-campton text-neutral-600 text-[15px] font-normal text-center py-5 pb-20">When you verify email address, your email marketing is 
            more effective, fraud prevention is improved and the 
            ability to protect your sender reputation increases.</p>
        </div>
        <div className=" mx-auto">
          <div className="pt-4 text-center items-center content-center leading-5">
            <h1 className="font-cabinetGrotesk text-[30px] font-bold">Reset Password</h1>
            <img src="/arrow.png" alt="" width={80} className="mx-auto"/>
          </div>
          <p className="px-6 pt-8 font-campton text-[15px] font-normal">Your new password should be different from the previously used passwords.</p>
          <PasswordResetForm />
          <p className="text-center font-campton pt-16">Already have an account? <span className=" text-blue-800 font-semibold"><a href=""> Log In </a></span></p>
        </div>
      </div>
        <PasswordResetSuccessPopup />
    </div>
    )
}

export default ResetPasswordPage;