import React from 'react';
import sadFace from '../../../assets/icons/SadFace.png';
import ProceedButton from '../../../components/atoms/Button/Proceed';
import DeclineButton from '../../../components/atoms/Button/Decline';
import classes from './index.module.css';

export default function DeleteProductModal({ open, close }) {
  return (
    <div
      className={`${open ? '' : 'hidden'} ${
        classes.ProductModal
      }  z-[200] overflow-y-auto bg-[rgba(19,20,24,0.7)] overflow-x-hidden fixed  flex justify-center items-center w-full md:inset-0 h-modal md:h-full`}
    >
      <div className="relative bg-white rounded-lg px-4 py-8 w-full max-w-xl h-full md:h-auto flex flex-col items-center">
        <h2 className="text-2xl font-bold font-cabinetGrotesk text-secondary-500">
          Delete Product Permanently?
        </h2>
        <img src={sadFace} />
        <p className="  font-campton font-medium  text-neutral-700 w-[70%] text-center">
          Are you sure you want to delete this product? This action cannot be
          reversed
        </p>
        <div className="space-x-4 font-campton ">
          <span>
            <ProceedButton />
          </span>
          <span onClick={() => close(false)}>
            <DeclineButton />
          </span>
        </div>
      </div>
    </div>
  );
}
