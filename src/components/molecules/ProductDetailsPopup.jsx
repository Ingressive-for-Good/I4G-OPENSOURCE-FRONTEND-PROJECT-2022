import React from "react";
import AddToWishButton from "../atoms/Button/AddToWishBtn";
import MessageSellerButton from "../atoms/Button/MessageSellerButton";

function ProductDetailsPopup() {
    return(
        <div className="fixed top-[6%] right-[2%] md:right-[28%] bg-gray-100 border p-6 m-6 font-cabinetGrotesk max-w-[500px]">
            <div className="bg-gray-50 border-2 rounded-md">
                <img className="mx-auto p-10" src="../src/assets/images/image-2macbook.png" alt="product-image"/>
            </div>
            <div className="flex justify-between pt-6">
                <div>
                    <p className="font-semibold text-[18px]">Product Name</p>
                    <small className="text-[15px] font-semibold text-gray-400">Category</small>
                </div>
                <div className="text-right">
                    <p className="font-semibold text-[18px]">₦₦₦Product Price</p>
                    <p className="font-semibold text-orange-600">Available</p>
                </div>
            </div>
            <div className="pt-6">
                <div className="flex gap-6 font-semibold">
                    <p>Product Description</p>
                    <p className="text-gray-400">Seller's Details</p>
                </div>
                <hr />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Deleniti laborum nobis laboriosam rerum harum placeat sequi, 
                    autem cumque? Rem, ipsa sequi possimus consectetur voluptatum 
                    distinctio doloribus perspiciatis suscipit mollitia impedit. 
                    Corrupti labore dolor nulla quidem tempora molestiae placeat 
                     impedit?</p>
            </div>
            <div className="flex justify-around pt-6">
                <MessageSellerButton/>
                <AddToWishButton/>
            </div>
        </div>
    )
}

export default ProductDetailsPopup;