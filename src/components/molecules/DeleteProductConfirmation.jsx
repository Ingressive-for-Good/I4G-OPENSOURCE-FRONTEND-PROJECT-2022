import React from "react";
import Button from "../atoms/PrimaryButton";
import errorAvatar from "../../assets/icons/SadFace.png";

function DeleteProductConfirmation() {
    return(
        <div className="flex justify-center w-[90%]">
            <div className="fixed bg-white top-[20%] right-[2%] md:right-[30%] max-w-md align-middle text-center border rounded-lg z-20 shadow-lg p-4 m-4">
                <p className="font-cabinetGrotesk font-bold text-[22px] text-orange-500">Delete Product Permanently?</p>
                <img className="mx-auto" src={errorAvatar} alt="laptop-woman" width={120} />
                <p className="font-campton px-6">Are you sure you want to delete this product? This action cannot be reversed.</p>
                <div className="flex flex-col md:flex-row">
                    <div className="p-6 gap-4 flex items-center md:w-[300px]">
                        <Button  children="Yes, delete product"/>
                    </div>
                    <div className="px-6 gap-4 flex items-center md:w-[300px]">
                        <Button  children="Cancel"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteProductConfirmation;