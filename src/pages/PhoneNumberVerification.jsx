import React, { useState } from 'react'
import PhoneNumberVerificationSuccessfullUI from '../molecules/modal/PhoneNumberVerificationSuccessfullUI';

export default function PhoneNumberVerification() {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const handleChange = (element, index) =>{
    if(isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx)=>(idx === index ? element.value : d ))]);

    if(element.nextSibling) {
      element.nextSibling.focus();
    }
  };

const [openModal, setOpenModal] = useState(false)
  
  return (
  <>
    <div className='lg:h-screen flex flex-col lg:flex-row'>
      {/* Div One Start */}
        <div className='lg:bg-primary-50 lg:w-2/5'>
          {/* Logo & Toggle Mobile Start */}
            <div className='flex justify-between px-2 py-5 lg:pt-10'>
              {/* Logo */}
              <img src="logo.svg" alt="techmart" />
              {/* Toggle */}
              <img className='lg:hidden' src="toggle.svg" alt="" />
            </div>
          {/* Logo & Toggle Mobile End */}
          {/* Image & Text Start */}
            <div className='hidden lg:flex flex-col justify-center items-center mt-10 '>
              {/* Image */}
              <img className='hidden lg:flex h-[324px] w-[402px] rounded-[8px] object-cover ' src="PhoneVerificationPageImg.png" alt="" />
              {/* Text */}
              <p className='text-[18px] leading-[30px] text-center text-neutral-600 mt-[48px] lg:w-[366px] mx-auto font-campton '>When you verify email address, your email marketing is more effective, fraud prevention is improved and the ability to protect your sender reputation increases.</p>
            </div>
          {/* Image & Text End */}
        </div>
      {/* Div One End */}

      {/* Div two Start */}
        <div className='lg:w-3/5 flex flex-col justify-center py-5 px-2 md:px-10 lg:px-20'>
          {/* Header Start */}
            <div className='flex flex-col items-center justify-center'>
              <h1 className=' text-[22px] md:text-[30px] leading-[27.2px] font-bold text-center font-cabinetGrotesk'>Phone Number Verification</h1>
              <img className='h-[3.9px] md:h-[6.2px] w-[60px] md:w-[80px] ' src="arrow.png" alt="" />
            </div>
          {/* Header End */}

          {/* Text with Details of Phonenumber sent Start */}
            <div className='my-[24px]'>
              <p className='text-[15px] md:text-[18px] leading-[28px] font-medium text-left font-campton'>We sent a 4-digit code to <span className=' text-secondary-500 '>+234 813********34.</span> Code expires in <span className='font-bold'>10 minutes</span></p>
            </div>
          {/* Text with Details of Phonenumber sent End */}

          {/* Verification Code Input Start */}
            <div className=''>
              <h1 className='text-[16px] leading-[19px] font-medium font-campton'>Verification Code</h1>
              <div className='my-3 w-full flex justify-between'>
                {
                  otp.map( (data, index) => {
                    return <input 
                            className='outline-none text-center  h-[60px] md:h-[60px] w-[72px] md:w-[100px] border-neutral-500 border-[2px] rounded-[8px] ' 
                            type="text" 
                            name="otp" 
                            id="otp" 
                            maxLength="1"
                            key={index}
                            value={data}
                            onChange={e => handleChange(e.target, index)}
                            onFocus={e => e.target.select()}
                          />
                      })
                }
              </div>
            </div>
          {/* Verification Code Input End */}
          {/* code input */}
          <p>{e => otp.join("")}</p>
          {/* Resend Verification Code Button Start */}
            <div className='my-4'>
              <h1 className='text-[14px] md:text-[16px] leading-[24px] font-campton'>Didn’t get a code? <span className='font-bold text-primary-500 '><a href="#">Resend Code</a></span> </h1>
            </div>
          {/* Resend Verification Code Button End */}

          {/* Proceed Start */}
            <div className='mx-5'>
              <button className='bg-primary-500 w-full text-center text-white text-[17px] md:text-[18px] leading-[24px] font-bold rounded-[8px] py-[18px] font-campton'  type="submit"  onClick={() => setOpenModal(true)} >Verify</button>
            </div>
          {/* Proceed End */}

          {/* Already a user Login Start */}
            <div className='mt-10 '>
              <h1 classname='text-[16px] leading-[24px] text-neutral-900 font-medium font-campton'>Already have an account? <span className='text-[18px] text-primary-500 font-bold'><a href="#">Log In</a></span></h1>
            </div>
          {/* Already a user Login End */}

        </div>
      {/* Div Two End */}
    </div>
    {/* Successfull Modal */}
    <PhoneNumberVerificationSuccessfullUI open={openModal} onClose={() => setOpenModal(false)}/>
  </>
  )
}
