import React from 'react';
import sadFace from '../../../assets/icons/SadFace.png';
import classes from './index.module.css';

export default function MakeProductUnavailable({ open, close }) {
  return (
    <div
      className={`${open ? '' : 'hidden'} ${
        classes.ProductModal
      }  z-[200] overflow-y-auto bg-[rgba(19,20,24,0.7)] overflow-x-hidden fixed  flex justify-center items-center w-full md:inset-0 h-modal md:h-full`}
    >
      <div className="relative bg-white rounded-lg px-4 py-8 w-full max-w-xl h-full md:h-auto flex flex-col items-center">
        <h2 className="text-2xl font-bold font-cabinetGrotesk text-secondary-500">
          Make product unavailable?
        </h2>
        <img src={sadFace} />
        <p className="  font-campton font-medium  text-neutral-700 w-[70%] text-center">
          Are you sure you want to set product to become unavailable?
        </p>
        <div className="space-x-4 font-campton mt-8">
          <button className="w-[260px] h-[60px]  text-lg text-primary-500 hover:text-primary-400 hover:border-primary-400 active:text-primary-700 active:border-primary-700 font-campton border-2 border-primary-500 rounded-lg mb-6 md:w-[204px] md:h-[60px]">
            Yes
          </button>
          <button
            onClick={() => close(false)}
            className="w-[260px] h-[60px] text-lg text-white hover:bg-primary-400 hover:text-neutral-50 hover:border-primary-400 font-campton  bg-primary-500 border-2 border-primary-500 rounded-lg md:w-[204px] md:h-[60px]"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
