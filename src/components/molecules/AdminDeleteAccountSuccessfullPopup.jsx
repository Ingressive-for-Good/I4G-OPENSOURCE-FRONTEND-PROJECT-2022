import React from 'react';

export default function AdminDeleteAccountSuccessfullPopup() {
  return (
    <div className="absolute inset-0 bg-black/25 w-screen h-screen flex items-center justify-center">
      <div className="bg-neutral-50 h-[537px] md:h-[513px] w-[300px] md:w-[590px] my-auto mx-auto flex flex-col items-center justify-center  rounded-[8px]">
        {/* text */}
        <h1 className="text-[20px] md:text-[30px] leading-[24px] md:leading-[37.2px] md:my-[41px]  text-success-500 font-bold font-cabinetGrotesk ">
          Account Deletion Successful
        </h1>
        {/* Emoji */}
        <img
          className="w-[161px] md:w-[188px] h-[160px] md:h-[186px] my-[41px] md:my-0"
          src="images/45.png"
          alt=""
        />
        {/* Text */}
        <p className="text-neutral-700 md:w-[412px] md:text-neutral-800 text-[16px] md:text-[18px] text-center leading-[31px] font-normal font-campton my-[15px] ">
          <span className="font-bold">Congratulations! </span> Account has been
          deleted permanently😊
        </p>
        {/* buttons */}
        <button
          className=" bg-primary-500 px-[31px] py-[18px] rounded-[8px] mt-[24px] text-[18px] leading-[24px] font-campton font-bold text-white"
          type="submit"
        >
          Back to user’s list
        </button>
      </div>
    </div>
  );
}
