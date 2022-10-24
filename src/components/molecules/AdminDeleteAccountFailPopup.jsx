import React from 'react';

export default function AdminDeleteAccountFailPopup() {
  return (
    <div className="absolute inset-0 bg-black/25 w-screen h-screen flex items-center justify-center">
      <div className="bg-neutral-50 w-[300px] h-[537px] md:h-[513px] md:w-[590px] mx-auto flex flex-col items-center justify-center px-2 md:px-10 rounded-[8px]">
        {/* text */}
        <h1 className="text-[19px] md:text-[30px] leading-[25px] md:leading-[37.2px] text-error-500 font-bold font- font-cabinetGrotesk ">
          Account Deletion Unsuccessful
        </h1>
        {/* Emoji */}
        <img
          className="w-[161px] md:w-[188px] h-[160px] md:h-[186px] my-[16px]"
          src="images/33.png"
          alt=""
        />
        {/* Text */}
        <p className="text-neutral-700 md:text-neutral-800 text-[16px] md:text-[18px] text-center leading-[31px] font-normal font-campton ">
          Check to see if the user account is suspended or reconnect to your
          internet and try again.
        </p>
        {/* buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-between ">
          <button className=" px-[15px] py-[18px] rounded-[8px] mt-[24px] text-[18px] leading-[24px] font-campton font-bold text-primary-500 border-[2px] border-primary-500">
            Go to user list
          </button>
          <button
            className=" bg-primary-500 px-[31px] py-[18px] rounded-[8px] mt-[24px] text-[18px] leading-[24px] font-campton font-bold text-white"
            type="submit"
          >
            Go back to profile
          </button>
        </div>
      </div>
    </div>
  );
}
