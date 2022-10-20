import React from "react";
import Button from "../atoms/PrimaryButton";
import successAvatar from "../../assets/images/success-avatar.png"

function SubAdminDetailsSentSuccessPopup() {
    return (
        <div>
            <div className="fixed bg-white top-[20%] md:right-[30%] max-w-md z-30 align-middle text-center border rounded-lg shadow-lg p-4 m-4">
                <p className="font-cabinetGrotesk font-bold text-[22px] text-green-600">Account Details Sent Successfuly</p>
                <img className="mx-auto" src={successAvatar} alt="laptop-woman" width={120} />
                <p className="font-campton px-6"><b>Congratulations!</b> Sub-admin account details has been sent successfully 😊</p>
                <div className="p-6 gap-4 flex items-center">
                    <Button  children="Back to sub admin profile"/>
                </div>
            </div>
        </div>
    )
}

export default SubAdminDetailsSentSuccessPopup;