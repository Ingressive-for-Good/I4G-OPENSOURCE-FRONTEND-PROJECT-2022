import React, { useState } from "react";
import NavHome from "../components/molecules/NavHome";
import PasswordResetForm from "../components/molecules/PasswordResetForm"
import PasswordResetSuccessPopup from "../components/molecules/PasswordResetSuccessPopup"
import SubmitButton from "../components/atoms/Button/SubmitButton";
import laptopWoman from "../assets/images/laptop-woman.png";
import arrowIcon from "../assets/icons/arrow.png";

function ResetPasswordPage() {
  // the below handles the popup success message on click of the submit button
  const [showSuccess, setShowSuccess] = useState(false)

  let success
  let popupMask

  if(showSuccess){
    success = <PasswordResetSuccessPopup />

    // popupMask adds a transparent dark background once the sidenav on mobile is open.
    popupMask = <div onClick={() => setShowSuccess(false)} className="absolute top-0 left-0 bg-black-t-50 w-screen h-full"></div>
  }

  return (
    <div id='body'>
      <div className="absolute top-0 md:left-[55px] w-full">
        <NavHome/>
      </div>
      <div className="flex">
        <div className="hidden md:block relative px-24 pt-40 w-[550px] bg-primary-50 content-center h-[110vh]">
          <img src={laptopWoman} alt="laptop-woman" width={350} />
          <p className="font-campton text-neutral-600 text-[15px] font-normal text-center py-5 pb-20">When you verify email address, your email marketing is 
            more effective, fraud prevention is improved and the 
            ability to protect your sender reputation increases.</p>
        </div>
        <div className=" mx-auto md:mt-[16px] mt-[70px] pb-[30px]">
          <div className="pt-4 text-center items-center content-center leading-5">
            <h1 className="font-cabinetGrotesk text-[30px] font-bold">Reset Password</h1>
            <img src={arrowIcon} alt="" width={80} className="mx-auto"/>
          </div>
          <p className="px-6 pt-8 font-campton text-[15px] font-normal">Your new password should be different from the previously used passwords.</p>
          <PasswordResetForm />
          <div onClick={() => setShowSuccess(!showSuccess)} className="px-6">
            <SubmitButton />
          </div>
          <p className="text-center font-campton pt-16 mt-[150px]">Already have an account? <span className=" text-blue-800 font-semibold"><a href=""> Log In </a></span></p>
        </div>
      </div>
      { popupMask }
      { success }
    </div>
    )
}

export default ResetPasswordPage;