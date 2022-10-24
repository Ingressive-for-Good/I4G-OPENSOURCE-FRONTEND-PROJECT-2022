import React from 'react';
import classes from './index.module.css';

export default function ProductDetails({ product, open, close }) {
  console.log(product);
  return (
    <div
      className={`${open ? '' : 'hidden'} ${
        classes.ProductModal
      } z-[200] overflow-y-auto bg-[rgba(19,20,24,0.7)] overflow-x-hidden fixed  flex justify-center items-center w-full md:inset-0 h-modal md:h-full`}
    >
      <div className="relative font-campton bg-white rounded-lg px-6 xl:px-12 py-4 xl:py-8 w-full max-w-lg xl:max-w-3xl h-auto">
        <div className="flex   justify-between w-full items-center">
          <p className=" text-neutral-800 text-xl ">Product Details</p>
          <button onClick={() => close(false)}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="5" y="5" width="40" height="40" rx="8" fill="#0F27BD" />
              <path
                d="M32 18L18 32"
                stroke="#FAFAFB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 18L32 32"
                stroke="#FAFAFB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className=" mt-3 xl:mt-6 py-6 xl:py-12 bg-neutral-100 w-full flex justify-center items-center">
          <img
            src="https://randompicturegenerator.com/img/car-generator/gc435ee26c2e5dec954dcea18e0514989db75a8fb49ba278b3949b044c55178712f1df259d75795859c8e006213de0d9c_640.jpg "
            alt="product image"
            className="w-[252px] h-[162px]"
          />
        </div>
        <p className="font-medium text-xl mt-4 xl:mt-6 text-neutral-800">
          {product.map((item) => item.productName)}
        </p>
        <div className="flex justify-between my-2">
          <p className="font-medium text-neutral-600">
            {product.map((item) => item.description)}
          </p>
          <p className="font-medium text-neutral-900 font-cabinetGrotesk text-xl">
            {product.map((item) => item.price)}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="font-medium text-neutral-600"> Status</p>
          <p className="font-medium font-campton  text-secondary-700">
            {product.availability ? 'Available' : 'Not Available'}
          </p>
        </div>
        <div>
          <p className="font-cabinetGrotesk text-neutral-900 font-medium text-lg mt-3 pb-2 border-b border-neutral-400">
            Seller's Details
          </p>
          <p className="my-3">
            <span className="text-neutral-900 font-medium">Name of User: </span>
            <span className="text-neutral-800">Ayomide Gadgets</span>
          </p>
          <p>
            <span className="text-neutral-900 font-medium">Email: </span>
            <span className="text-neutral-800">AyomideGadgets@gmail.com</span>
          </p>
          <p className="my-3">
            <span className="text-neutral-900 font-medium">Phone Number: </span>
            <span className="text-neutral-800">+234 812 345 6789</span>
          </p>
        </div>
      </div>
      <style>
        {`
      `}
      </style>
    </div>
  );
}
