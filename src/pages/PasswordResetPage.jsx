import React from "react";
import PasswordResetForm from "../molecules/PasswordResetForm"

function ResetPasswordPage() {
  return (
    <div>
        <header className="px-24 pt-10 w-[550px] bg-primary-50"><img src="/logo.svg" alt="logo" /></header>
        <div>
          <div className="hidden px-24 pt-20 w-[550px] bg-primary-50 content-center h-screen">
            <img src="/laptop-woman.png" alt="laptop-woman" width={350} />
            <p className="font-campton text-neutral-600 text-[15px] font-normal text-center py-5 ">When you verify email address, your email marketing is 
              more effective, fraud prevention is improved and the 
              ability to protect your sender reputation increases.</p>
          </div>
          <div>
            <div className="pt-10 text-center items-center content-center">
              <h1 className="font-cabinetGrotesk text-[30px] font-bold">Reset Password</h1>
              <img src="/arrow.png" alt="" width={80} className="mx-auto"/>
            </div>
            <p className="p-6 font-campton text-[15px] font-normal">Your new password must be different from the previously used passwords.</p>
            <PasswordResetForm />
          </div>
        </div>
        
    </div>
    )
}

export default ResetPasswordPage;