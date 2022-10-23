import React from 'react'
export default function AdminSuspendAccountPopup() {
  return (
    <div className='absolute inset-0 bg-black/25 w-screen h-screen flex items-center justify-center'>
        <div className='bg-neutral-50 w-[300px] md:w-[590px] mx-auto flex flex-col items-center px-2 md:px-10 py-[40px] rounded-[8px]'>
            {/* text */}
            <h1 className='text-[20px] md:text-[30px] leading-[24px] md:leading-[37.2px] text-secondary-500 font-bold font- font-cabinetGrotesk '>Suspend Account Temporarily?</h1>
            {/* Emoji */}
            <img className='w-[161px] md:w-[188px] h-[160px] md:h-[186px] my-[16px]' src="images/33.png" alt="" />
            {/* Text */}
            <p className='text-neutral-700 md:text-neutral-800 text-[16px] md:text-[18px] text-center leading-[31px] font-normal font-campton '>Are you sure you want to suspend this account? This action can be undone.</p>
            {/* buttons */}
            <div className='flex flex-col md:flex-row gap-4 justify-between '>
                <button className=' px-[15px] py-[18px] rounded-[8px] mt-[24px] text-[18px] leading-[24px] font-campton font-bold text-primary-500 border-[2px] border-primary-500'>Yes, suspend account </button>
                <button className=' bg-primary-500 px-[31px] py-[18px] rounded-[8px] mt-[24px] text-[18px] leading-[24px] font-campton font-bold text-white' type="submit">No Keep Account</button>
            </div>
        </div>
    </div>
  )
}
