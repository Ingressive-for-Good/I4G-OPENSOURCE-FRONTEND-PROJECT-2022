import { useState } from 'react'
import searchIcon from '../icons/Search.svg'
import notificatin from '../icons/notification.svg'
import avatar from '../icons/avatar.svg'
import toggle from '../icons/toggle.svg'

export default function WishlistNavbar(props) {
  return (
    <div className='flex justify-center'>
      <div className='w-[335px] flex-row md:w-[584px] lg:w-[1062px]'>
        <div className='flex flex-row w-full justify-between font-cabinetGrotesk'>
          <div className=''>
            <h1 className='text-[25px] font-[700] text-primary-500 block lg:hidden'>tech<span className='text-secondary-500'>mart</span></h1>
            <h1 className='text-neutral-800 md:text-[20px] lg:mt-0 mt-[20px] text-[16px] font-[500] lg:pb-0 pb-[10px]'>Hey Nora👋🏾</h1>
            <p className='text-[21px] font-bold'>View Items in your Wishlist</p>
          </div>
          <div className='lg:hidden block mt-[10px]'>
            <div className='py-[17.9px] px-[16.9px] border rounded-[12px] border-primary-500 cursor-pointer w-[50px]'>
              <img className='' src={toggle} alt="" />
            </div>
          </div>
          <div className='lg:flex flex-row gap-[24px] hidden'>
            <label className='relative'>
              <input
                className='py-[16px] pl-[40px]  border-[#A1A4B6] border-[1.2px] rounded-[8px] w-[250px]'
                type="text"
                placeholder='Search for gadgets'
              />
              <img className='absolute left-[15px] top-[20px]' src={searchIcon} alt="searchIcon" />
            </label>
            <div className='w-[60px]'>
              <img src={notificatin} alt="notification" />
            </div>
            <div className='w-[60px]'>
              <img src={avatar} alt="avatar" />
            </div>
          </div>
        </div>
        <div className='flex justify-between mt-[45px] border-b-[1.2px] border-neutral-500 pb-2'>
          <h2 className='font-medium text-[14px] text-primary-500 cursor-pointer'>Select All</h2>
          <h2 className='font-semibold text-base text-neutral-800'>Select Items</h2>
          <div onClick={props.deleteItems} className="cursor-pointer flex justify-center items-center">
            <span>
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.86462 5.16479C1.30634 4.42041 1.83747 3.35815 2.76793 3.35815H13.1085C14.039 3.35815 14.5701 4.42041 14.0118 5.16479L13.5179 5.82334C13.1107 6.36626 12.8906 7.0266 12.8906 7.70525V14.0553C12.8906 15.4411 11.7672 16.5645 10.3814 16.5645H5.49505C4.10925 16.5645 2.98584 15.4411 2.98584 14.0553V7.70525C2.98584 7.0266 2.76572 6.36626 2.35854 5.82334L1.86462 5.16479Z" stroke="#A1A4B6" strokeWidth="1.25461" />
                <path d="M9.58899 11.3944L9.58899 6.82666" stroke="#A1A4B6" strokeWidth="1.25461" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.28711 11.3944L6.28711 6.82666" stroke="#A1A4B6" strokeWidth="1.25461" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.2399 3.35803L10.7005 1.7397C10.5297 1.22739 10.0503 0.881836 9.51024 0.881836H6.36639C5.82637 0.881836 5.34693 1.22739 5.17616 1.7397L4.63672 3.35803" stroke="#A1A4B6" strokeWidth="1.25461" strokeLinecap="round" />
              </svg>
            </span>
            <h2 className='font-semibold text-base ml-[15.63px] cursor-pointer'>Delete</h2>
          </div>
        </div>
      </div>
    </div>
  )
}