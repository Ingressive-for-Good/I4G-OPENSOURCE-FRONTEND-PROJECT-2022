import React, { useState } from 'react';
import SadFace from '../icons/SadFace.png';
import ProceedButton from '../../Wishlist-SD/components/atoms/Button/Proceed';
import DeclineButton from '../../Wishlist-SD/components/atoms/Button/Decline';

function DeleteConfirmation(props) {
  // const [declined, setDeclined] = useState(false)

  // function cancelDisplay() {
  //     setDeclined(true);
  // }

  return (
    <div className="fixed bg-neutral-900 bg-opacity-10 w-screen h-screen flex justify-center items-center">
      <div className="w-[335px] h-[597px] bg-neutral-50 rounded-lg flex-col text-center pt-10 md:w-[590px] md:h-[513px]">
        <h2 className="font-bold text-[22px] text-secondary-500 md:mt[41px] md:mb-[17px]">
          Delete Product from Wishlist?
        </h2>
        <span className="flex justify-center">
          <img
            className="w-[152px] h-[152px] md:w-[186px] md:h-[186px]"
            src={SadFace}
          />
        </span>
        <p className="font-campton font-normal text-[16px] w-[290px] h-[124px] m-auto md:w-[421px] md:h-[93px] md:font-medium md:text-[18px] md:leading-8">
          Are you sure you want to delete this product from your wishlist? We
          will miss you and this action cannot be undone.
        </p>
        <span onClick={props.deleted}>
          <ProceedButton />
        </span>
        <span onClick={props.cancel} className="">
          <DeclineButton />
        </span>
      </div>
    </div>
  );
}

export default DeleteConfirmation;
