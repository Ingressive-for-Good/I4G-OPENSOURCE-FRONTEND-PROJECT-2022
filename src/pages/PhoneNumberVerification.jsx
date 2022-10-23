import React, { useState } from 'react'
import girlSvg from "../assets/icons/girl-photo.svg";
import Arrow from "../assets/icons/arrow.png";
import Overlay from "../components/molecules/Overlay";
import headAvatar from "../assets/icons/head-avatar.svg";
import { Link } from 'react-router-dom';
import NavHome from '../components/molecules/NavHome';
import AuthSide from '../components/atoms/AuthSide';




export default function PhoneNumberVerification() {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [popUp, setPopUp] = useState(false)
  const handleChange = (element, index) =>{
    if(isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx)=>(idx === index ? element.value : d ))]);

    if(element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleClick = () =>{
    popUp ? setPopUp(false) : setPopUp(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPopUp(true)
  }
  
  return (
    <section className='relative'id='body'>
      {popUp && <><div className=' flex items-center fixed bg-none top-0 left-0 h-full w-screen z-50 overflow-hidden '>
      <div className="bg-white opacity-[1] w-[90%] sm:w-[80%] lg:w-[70%] max-w-[590px] mx-auto p-[30px] sm:p-[47px] mx-auto font-campton rounded-[8px]">
        <div className='flex flex-col items-center justify-center text-center '>
          <h1 className='font-cabinetGrotesk sm:text-[30px] text-[25px] font-[700] text-success-500'>Verification Successful!!!</h1>
          <img src={headAvatar} alt="" />
          <p className='font-[500px] max-w-[350px] mt-[32px]'>You’re fully covered! 
              You can now buy and sell tech gadgets.</p>
          <div className='flex sm:flex-row flex-col justify-center w-full mt-[32px] gap-[15px]'>
          <button onClick={handleClick} className='border border-primary-500 py-[18px] border-[2px] w-[100%] sm:w-[45%] text-center rounded-[8px] font-[700] text-white bg-primary-500'>Proceed to Dashboard</button>
          </div>
        </div>
      </div>
      
    </div><Overlay/></>}
    
      <div className="absolute top-0 md:left-[55px] w-full">
        <NavHome/>
      </div>
      <div className='flex'>
        {/* Inserted the Generic sideview */}
          <AuthSide Main={girlSvg}/>
        {/* Div two Start */}
          <form onSubmit={handleSubmit} className='md:w-[60%] w-full flex flex-col py-5 px-10 lg:px-20 md:mt-[16px] mt-[70px] pb-[30px]'>
            {/* Header Start */}
              <div className='flex flex-col items-center justify-center'>
                <h1 className=' text-[22px] md:text-[30px] leading-[27.2px] font-bold text-center font-cabinetGrotesk mt-12 sm:mt-8 lg:mt-0 mb-[41px]'>Phone Number Verification</h1>
                <img className='h-[3.9px] md:h-[6.2px] w-[60px] md:w-[80px] ' src={Arrow} alt="" />
              </div>
            {/* Header End */}

            {/* Text with Details of Phonenumber sent Start */}
              <div className='my-[24px]'>
                <p className='text-[15px] md:text-[18px] leading-[28px] font-medium text-left font-campton'>We sent a 4-digit code to <span className=' text-secondary-500 '>+234 813********34.<br></br></span> Code expires in <span className='font-bold'>10 minutes</span></p>
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

            {/* Resend Verification Code Button Start */}
              <div className='my-4'>
                <h1 className='text-[14px] md:text-[16px] leading-[24px] font-campton'>Didn’t get a code? <span className='font-bold text-primary-500 '><Link to="/login" >Resend Code</Link></span> </h1>
              </div>
            {/* Resend Verification Code Button End */}

            {/* Proceed Start */}
              <div className=''>
                <button className='bg-primary-500 w-full text-center text-white text-[17px] md:text-[18px] leading-[24px] font-bold rounded-[8px] py-[18px] font-campton'  type="submit" onClick={e => otp.join("")} >Verify</button>
              </div>
            {/* Proceed End */}

            {/* Already a user Login Start */}
              <div className='mt-[200px] w-full flex justify-center'>
                <h1 className='text-[16px] leading-[24px] text-neutral-900 font-medium font-campton text-center'>Already have an account? <span className='text-[18px] text-primary-500 font-bold'><Link to="/login">Log In</Link></span></h1>
              </div>
            {/* Already a user Login End */}
          </form>
        {/* Div Two End */}
      </div>
    </section>
  )
}
