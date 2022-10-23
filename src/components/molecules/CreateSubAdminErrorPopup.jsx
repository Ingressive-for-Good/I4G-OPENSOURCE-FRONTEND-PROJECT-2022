import React from 'react';
import Button from '../atoms/PrimaryButton';
import errorAvatar from '../../assets/icons/SadFace.png';

function CreateSubAdminErrorPopup() {
  return (
    <div>
      <div className="fixed bg-white top-[20%] md:right-[30%] max-w-md align-middle text-center border rounded-lg z-20 shadow-lg p-4 m-4">
        <p className="font-cabinetGrotesk font-bold text-[22px] text-red-600">
          Account Creation Failed
        </p>
        <img
          className="mx-auto"
          src={errorAvatar}
          alt="laptop-woman"
          width={120}
        />
        <p className="font-campton px-6">
          Please check your internet connection and try again.
        </p>
        <div className="p-6 gap-4 flex items-center">
          <Button children="Back to sub admin profile" />
        </div>
      </div>
    </div>
  );
}

export default CreateSubAdminErrorPopup;
