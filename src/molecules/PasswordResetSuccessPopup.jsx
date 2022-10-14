import React from "react";
import ProceedToLoginButton from "../atoms/Button/ProceedToLoginButton";

function PasswordResetSuccessPopup() {
    return (
        <div>
            <div className="absolute bg-white top-50 text-center border rounded-lg shadow-lg p-4 m-4">
                <p className="font-cabinetGrotesk font-bold text-[22px] text-green-600">Password Reset Successful!</p>
                <img src="" alt="" />
                <p className="font-campton"><b>Congratulations!</b> Your password has been reset successfully. Try not to forget it anymore.</p>
                <ProceedToLoginButton />
            </div>
        </div>
    )
}

export default PasswordResetSuccessPopup;