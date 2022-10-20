import React, {useState} from "react";
import WarningButton from "../atoms/Button/WarningButton";
import Button from "../atoms/PrimaryButton";
import SubAdminDetailsSentSuccessPopup from "./SubAdminDetailsSentSuccess";

function CreateSubAdminSuccessPopup() {

    const [showSuccess, setShowSuccess] = useState(false) // state for success popup

    let success
    let popupMask

    // This logic handles the success popup message
    if(showSuccess){
        success = <SubAdminDetailsSentSuccessPopup/>

        // popupMask adds a transparent dark background once the sidenav on mobile is open.
        popupMask = <div onClick={() => setShowError(false)} className="fixed top-0 left-0 bg-black-t-50 w-screen h-full"></div>
    }

    return (
        <div>
            <div className="fixed bg-white top-[20%] right-[2%] md:right-[30%] max-w-md align-middle justify-center text-center border rounded-lg z-20 shadow-lg p-4 m-4">
                <p className="font-cabinetGrotesk font-bold text-[22px] text-green-600">Account Creation Successful!</p>
                <p className="font-cabinetGrotesk">Send sub-admin account details to email</p>
                <form action="" className="p-5 text-left font-cabinetGrotesk">
                    <p>Email</p>
                    <input type="email" placeholder="Enter email address" className="border-2 rounded-md p-4 w-full"/>
                </form>
                <p className="font-campton px-6">The reciever of this email will be a sub-admin, and will have access to Techmart database. <br /> Do you wish to continue?</p>
                <div className="p-6 gap-4 flex items-center">
                    <div className="w-full">
                        <WarningButton children="Cancel"/>
                    </div>
                    <div onClick={() => setShowSuccess(!showSuccess)} className="w-full">
                        <Button  children="Send Details"/>
                    </div>
                </div>
            </div>
            {popupMask}
            {success}
        </div>
    )
}

export default CreateSubAdminSuccessPopup;