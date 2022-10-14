import React, { useState } from "react";
import NavbarDashboard from "../components/molecules/NavbarDashboard";
import PasswordResetForm from "../components/molecules/PasswordResetForm"
import PasswordResetSuccessPopup from "../components/molecules/PasswordResetSuccessPopup"
import SubmitButton from "../components/atoms/Button/SubmitButton";


function ResetPasswordPage() {

  // the below handles the popup success message on click of the submit button
  const [showSuccess, setShowSuccess] = useState(false)

  let success
  let menumask

  if(showSuccess){
    success = <PasswordResetSuccessPopup />

    // menumask adds a transparent dark background once the sidenav on mobile is open.
    menumask = <div onClick={() => setShowSuccess(false)} className="absolute top-0 left-0 bg-black-t-50 w-screen h-full"></div>
  }

  return (
    <div>
      <div className="md:px-14 md:pt-4 md:w-[550px]">
        <NavbarDashboard />

      </div>
      <div className="flex">
        <div className="hidden md:block relative -top-28 px-24 pt-40 w-[550px] bg-primary-50 content-center h-[110vh]">
          <img src="../src/assets/images/laptop-woman.png" alt="laptop-woman" width={350} />
          <p className="font-campton text-neutral-600 text-[15px] font-normal text-center py-5 pb-20">When you verify email address, your email marketing is 
            more effective, fraud prevention is improved and the 
            ability to protect your sender reputation increases.</p>
        </div>
        <div className=" mx-auto">
          <div className="pt-4 text-center items-center content-center leading-5">
            <h1 className="font-cabinetGrotesk text-[30px] font-bold">Reset Password</h1>
            <img src="../src/assets/icons/arrow.png" alt="" width={80} className="mx-auto"/>
          </div>
          <p className="px-6 pt-8 font-campton text-[15px] font-normal">Your new password should be different from the previously used passwords.</p>
          <PasswordResetForm />
          <div onClick={() => setShowSuccess(!showSuccess)} className="px-6">
            <SubmitButton />
          </div>
          <p className="text-center font-campton pt-16">Already have an account? <span className=" text-blue-800 font-semibold"><a href=""> Log In </a></span></p>
        </div>
      </div>
      { menumask }
      { success }
    </div>
    )
}

export default ResetPasswordPage;