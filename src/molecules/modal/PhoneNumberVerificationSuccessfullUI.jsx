import React from 'react'

export default function PhoneNumberVerificationSuccessfullUI({open, onClose}) {
  if(!open) return null
  return (
    <div className='absolute inset-0 bg-black/25 w-screen h-screen flex items-center justify-center'>
    <div className='bg-neutral-50 mx-[20px] md:mx-[77px] lg:mx-[425px] flex flex-col items-center px-2 md:px-10 py-[40px] rounded-[8px]'>
      {/* text */}
      <h1 className='text-[22px] md:text-[30px] leading-[27.28px] md:leading-[37.2px] text-success-500 font-bold font- font-cabinetGrotesk '>Verification Successful!!!</h1>
      {/* Emoji */}
      <img className='w-[144px] md:w-[188px] h-[142px] md:h-[186px] my-[24px]' src="images/45.png" alt="" />
      {/* Text */}
      <p className='text-neutral-700 md:text-neutral-800 text-[16px] md:text-[18px] text-center leading-[31px] font-normal font-campton '><span className='font-bold'>Congratulations!</span> The KYC and verification process was successful. You can now buy and sell your items.</p>
      {/* button */}
      <button className='bg-primary-500 px-[31px] py-[18px] rounded-[8px] mt-[24px] text-[18px] leading-[24px] font-campton font-bold text-white' onClick={onClose} type="submit">Proceed to Dashboard</button>
    </div>
  </div>
    )
}
