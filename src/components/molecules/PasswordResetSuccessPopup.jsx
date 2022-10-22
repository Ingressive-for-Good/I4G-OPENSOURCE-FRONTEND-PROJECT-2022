import React from "react";
import ProceedToLoginButton from "../atoms/Button/ProceedToLoginButton";

function PasswordResetSuccessPopup() {
    return (
        <div>
            <div className="absolute bg-white top-[20%] right-[2%] md:right-[30%] max-w-md text-center border rounded-lg shadow-lg py-4 px-[50px] m-4">
                <p className="font-cabinetGrotesk font-bold text-[22px] text-green-600">Password Reset Successful!</p>
                <img className="mx-auto" src="../src/assets/images/success-avatar.png" alt="laptop-woman" width={120} />
                <p className="font-campton"><b>Congratulations!</b> Your password has been reset successfully. Try not to forget it anymore 😊</p>
                <ProceedToLoginButton />
            </div>
        </div>
    )
}

export default PasswordResetSuccessPopup;