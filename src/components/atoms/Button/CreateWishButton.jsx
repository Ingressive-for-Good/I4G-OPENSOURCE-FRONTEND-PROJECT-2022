import React from "react";

function CreateWishButton() {
  return (
    <div className="flex bg-primary-500 rounded-md w-48 p-4 text-center text-white gap-2 justify-center items-center">
        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6.50024V0.500244H8V6.50024H14V8.50024H8V14.5002H6V8.50024H0V6.50024H6Z" fill="white"/>
        </svg>
        <p>Create New Wish</p>
    </div>
  )
}

export default CreateWishButton;