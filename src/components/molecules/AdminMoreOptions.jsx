import React, { useState } from "react";
import DeleteProductConfirmation from "./DeleteProductConfirmation";
import ProductDetailsPopup from "../molecules/ProductDetailsPopup";

function AdminMoreOptions() {

    const [showError, setShowError] = useState(false) // state for error popup
    const [showDetails, setShowDetails] = useState(false) // state for product details popup

    let error
    let popupMask, popupMask2
    let productDetails
    
    if(showError){
        error= <DeleteProductConfirmation/>

        // popupMask adds a transparent dark background once the component is open.
        popupMask = <div onClick={() => setShowError(false)} className="fixed z-10 top-0 left-0 bg-black-t-50 w-screen h-full"></div>
    }

    if(showDetails){
        productDetails = <ProductDetailsPopup />

        // popupMask adds a transparent dark background once the component is open.
        popupMask2 = <div onClick={() => setShowDetails(false)} className="fixed -z-0 top-0 left-0 bg-black-t-50 w-screen h-full"></div>
    }

    return(
        <div>
            <div className=" bg-white border-2 rounded-md text-left p-2">
                <p onClick={() => setShowDetails(!showDetails)} className="border-b p-2 cursor-pointer">View Details</p>
                <p className="border-b p-2">Make Unavailable</p>
                <p onClick={() => setShowError(!showError)} className="p-2 text-[16px] font-semibold text-red-600 cursor-pointer">Delete</p>
            </div>
            {popupMask}
            {error}
            {popupMask2}
            {productDetails}
        </div>
    )
}

export default AdminMoreOptions;