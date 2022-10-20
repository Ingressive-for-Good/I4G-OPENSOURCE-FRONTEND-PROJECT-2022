import React, { useState } from "react";
import userAvatar from "../assets/icons/avatar.png";
import backArrow from "../assets/icons/arrowLeft.svg"
import SubAdminPersonalInfoForm from "../components/molecules/PersonalInfoForm";
import SubAdminCreatePassword from "../components/molecules/SubAdminCreatePasswordForm";
import Button from "../components/atoms/PrimaryButton";
import WarningButton from "../components/atoms/Button/WarningButton";
import NavbarAdmin from "../components/molecules/NavbarAdmin";
import CreateSubAdminSuccessPopup from "../components/molecules/CreateSubAdminSuccessPopup";
import CreateSubAdminErrorPopup from "../components/molecules/CreateSubAdminErrorPopup";
import userIconBlue from "../assets/icons/userIconBlue.svg"

export default function CreateSubAdmin() {

    const [showCreationSuccess, setShowCreationSuccess] = useState(false) // state for account creation successful popup
    const [showError, setShowError] = useState(false) // state for error popup

    let success
    let error
    let popupMask

    // This logic handels the error popup message on click of the cancel button
    if(showError){
        error= <CreateSubAdminErrorPopup/>

        // popupMask adds a transparent dark background once the sidenav on mobile is open.
        popupMask = <div onClick={() => setShowError(false)} className="fixed z-10 top-0 left-0 bg-black-t-50 w-screen h-full"></div>
    }

    // This logic handles the account creation success popup message on click of the create account button
    if(showCreationSuccess){
        success = <CreateSubAdminSuccessPopup/>

        // popupMask adds a transparent dark background once the sidenav on mobile is open.
        popupMask = <div onClick={() => setShowCreationSuccess(false)} className="fixed z-10 top-0 left-0 bg-black-t-50 w-screen h-full"></div>
    }

    return (
        <div className="md:ml-[230px]">
            <NavbarAdmin/>
            <div className="flex justify-between md:mt-12 items-center">
                <div className="px-6 md:px-0">
                    {/* opening text */}
                    <div className="font-cabinetGrotesk ">
                        <p className="font-medium text-[20px]">Welcome Back, Admin👋🏾</p>
                        <h1 className="font-bold text-[28px]">Create sub admin</h1>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-4">
                    {/* search bar */}
                    <div className="hidden gap-2 h-10 p-2 border rounded-md items-center md:flex">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.17502 16.6833C13.3218 16.6833 16.6834 13.3217 16.6834 9.17496C16.6834 5.02822 13.3218 1.66663 9.17502 1.66663C5.02828 1.66663 1.66669 5.02822 1.66669 9.17496C1.66669 13.3217 5.02828 16.6833 9.17502 16.6833Z" fill="#717591"/>
                            <path d="M18.325 15.7917C18.05 15.2833 17.4667 15 16.6834 15C16.0917 15 15.5834 15.2417 15.2834 15.6583C14.9834 16.075 14.9167 16.6333 15.1 17.1917C15.4584 18.275 16.0834 18.5167 16.425 18.5583C16.475 18.5667 16.525 18.5667 16.5834 18.5667C16.95 18.5667 17.5167 18.4083 18.0667 17.5833C18.5084 16.9417 18.5917 16.3 18.325 15.7917Z" fill="#717591"/>
                        </svg>
                        <form action="">
                            <input className="font-cabinetGrotesk p-1" type="text" placeholder="Search for gadgets" />
                        </form>
                    </div>
                    <div className=" bg-gray-300 rounded-full p-3">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.9516 15.6975L19.8683 13.8991C19.6408 13.4983 19.435 12.74 19.435 12.2958V9.55496C19.435 7.00912 17.94 4.80996 15.7841 3.78079C15.2208 2.78413 14.1808 2.16663 12.9891 2.16663C11.8083 2.16663 10.7466 2.80579 10.1833 3.81329C8.07081 4.86413 6.60831 7.04163 6.60831 9.55496V12.2958C6.60831 12.74 6.40248 13.4983 6.17498 13.8883L5.08081 15.6975C4.64748 16.4233 4.54998 17.225 4.82081 17.9616C5.08081 18.6875 5.69831 19.2508 6.49998 19.5216C8.60165 20.2366 10.8116 20.5833 13.0216 20.5833C15.2316 20.5833 17.4416 20.2366 19.5433 19.5325C20.3016 19.2833 20.8866 18.7091 21.1683 17.9616C21.45 17.2141 21.3741 16.3908 20.9516 15.6975Z" fill="#717591"/>
                            <path d="M16.0658 21.6775C15.6108 22.9341 14.4083 23.8333 13 23.8333C12.1442 23.8333 11.2992 23.4866 10.7033 22.8691C10.3567 22.5441 10.0967 22.1108 9.94501 21.6666C10.0858 21.6883 10.2267 21.6991 10.3783 21.7208C10.6275 21.7533 10.8875 21.7858 11.1475 21.8075C11.765 21.8616 12.3933 21.8941 13.0217 21.8941C13.6392 21.8941 14.2567 21.8616 14.8633 21.8075C15.0908 21.7858 15.3183 21.775 15.535 21.7425C15.7083 21.7208 15.8817 21.6991 16.0658 21.6775Z" fill="#717591"/>
                        </svg>
                    </div>
                    <img src={userAvatar} alt="user avatar" width={50}/>
                </div>
            </div>
            <div className="hidden md:flex gap-4 py-4 font-campton">
                <img src={backArrow} alt="" />
                <p>Return to previous page</p>
            </div>
            <div className="p-6 md:p-0">
                <SubAdminPersonalInfoForm/>
            </div>
            <div className="p-6 md:p-0 md:pt-12">
                <SubAdminCreatePassword/>
            </div>
            <div className="px-6 gap-4 mt-6 mb-12 md:flex items-center md:px-0 md:w-[60%] md:float-right">
                <div onClick={() => setShowError(!showError)} className="w-full">
                    <WarningButton children="Cancel"/>
                </div>
                <div onClick={() => setShowCreationSuccess(!showCreationSuccess)} className="mt-4 md:mt-0 w-full">
                    <Button  children="Create Account"/>
                </div>
            </div>
            { popupMask }
            { success }
            { error }
            <div className="hidden fixed top-[365px] left-0 md:flex gap-3 bg-white p-4 items-center w-[230px]">
                <img className="ml-9" src={userIconBlue} alt="icon" />
                <p className=" font-cabinetGrotesk text-blue-700 font-semibold text-[18px]">Users</p>
            </div>
        </div>
    )
}