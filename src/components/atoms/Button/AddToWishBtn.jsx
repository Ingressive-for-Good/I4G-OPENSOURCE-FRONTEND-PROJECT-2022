import React from "react";

function AddToWishButton() {
  return (
    <div className="flex border-2 border-blue-700 rounded-md w-48 px-4 py-2 text-center gap-2 justify-center items-center">
        <img src="../src/assets/images/wishlist-icon.png" alt="" />
        <p className="text-blue-800 font-semibold">Add To Wishlist</p>
    </div>
  )
}

export default AddToWishButton;