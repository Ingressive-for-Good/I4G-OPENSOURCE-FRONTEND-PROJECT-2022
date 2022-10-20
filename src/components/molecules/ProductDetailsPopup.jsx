import React from "react";
import AddToWishButton from "../atoms/Button/AddToWishBtn";
import MessageSellerButton from "../atoms/Button/MessageSellerButton";
import productImg from "../../assets/images/image-2macbook.png"

function ProductDetailsPopup() {
    return(
        <div className="fixed top-[8%] md:top-[5%]  md:right-[28%] bg-gray-100 border p-6 m-6 font-cabinetGrotesk md:w-[500px] align-middle">
            <img className="absolute top-2 right-4 md:right-2 m-2 md:left-[410px] pb-2" src="../src/assets/icons/CloseSquare.svg" alt="" width={30}/>
            <div className="bg-gray-50 border-2 rounded-md flex items-center p-3 mt-8">
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 2L1.5 9L8.5 16" stroke="#6877D5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <img className="mx-auto p-10" src={productImg} alt="product-image"/>
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1L8.5 8L1.5 15" stroke="#6877D5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            
            <div className="flex justify-between pt-6">
                <div>
                    <p className="font-semibold md:text-[18px]">Product Name</p>
                    <small className="text-[15px] font-semibold text-gray-400">Category</small>
                </div>
                <div className="text-right">
                    <p className="font-semibold md:text-[18px]">₦₦₦Product Price</p>
                    <p className="font-semibold text-orange-600">Available</p>
                </div>
            </div>
            <div className="pt-6">
                <div className="flex gap-5 font-semibold text-[14px] md:text-[16px]">
                    <p>Product Description</p>
                    <p className="text-gray-400">Seller's Details</p>
                </div>
                <hr />
                <p className="text-[14px] md:text-[16px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Deleniti laborum nobis laboriosam rerum harum placeat sequi, 
                    autem cumque? Rem, ipsa sequi possimus consectetur voluptatum 
                     impedit?
                </p>
            </div>
            <div className="md:flex justify-around pt-3">
                <MessageSellerButton/>
                <AddToWishButton/>
            </div>
        </div>
    )
}

export default ProductDetailsPopup;