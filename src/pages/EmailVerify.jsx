import React from "react";
import "./style.css";
import girlSvg from "../assets/icons/girl-photo.svg";
import lineSvg from "../assets/icons/line.svg";
import headAvatar from "../assets/icons/head-avatar.svg";
import AuthSide from "../components/atoms/AuthSide";
import PrimaryButton from "../components/atoms/PrimaryButton";
import { useState } from "react";
import Overlay from "../components/molecules/Overlay";
import { Link } from "react-router-dom";
import NavHome from "../components/molecules/NavHome";


const EmailVerify = () => {
  const [popUp, setPopUp] = useState(false)
  const handleClick = () =>{
    popUp ? setPopUp(false) : setPopUp(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPopUp(true)
  }
  return (
    <div className=" relative font-campton" id='body'>
      {popUp && <><div className=' flex items-center fixed bg-none top-0 left-0 h-full w-screen z-50 overflow-hidden '>
      <div className="bg-white opacity-[1] w-[90%] sm:w-[80%] lg:w-[70%] max-w-[590px] mx-auto p-[30px] sm:p-[47px] mx-auto font-campton rounded-[8px]">
        <div className='flex flex-col items-center justify-center text-center '>
          <h1 className='font-cabinetGrotesk sm:text-[30px] text-[25px] font-[700] text-success-500'>Verification Successful!!!</h1>
          <img src={headAvatar} alt="" />
          <p className='font-[500px] max-w-[350px] mt-[32px]'>  You can now fill in your details in the Know Your Customer (KYC) form.</p>
          <div className='flex sm:flex-row flex-col justify-center w-full mt-[32px] gap-[15px]'>
          <button onClick={handleClick} className='border border-primary-500 py-[18px] border-[2px] w-[100%] sm:w-[45%] text-center rounded-[8px] font-[700] text-white bg-primary-500'>Proceed</button>
          </div>
        </div>
      </div>
    </div><Overlay/></>}
      <div className="absolute top-0 md:left-[55px] w-full">
        <NavHome/>
      </div>
      <div
        className='w-full flex'
      >
        <AuthSide Main={girlSvg}/>
        <div className="bg-white w-full lg:w-[60%] md:py-[3%] md:px-[8%] px-[5%] py-[5%] md:mt-[16px] mt-[70px] pb-[30px]">
          <div className="verify-container p-0">
            <div className="mt-12 sm:mt-8 lg:mt-0 mb-[41px]">
              <div className="flex flex-col pt-4 text-center items-center content-center leading-5 mb-[40px]">
                <h1 className="font-cabinetGrotesk text-center font-bold text-3xl">Verify Your Email</h1>
                <img src={lineSvg} className="img" alt="curve-line" />
              </div>
              <p className="lg:font-normal typo">
                We sent a 4-digit code to{" "}
                <strong className="text-email">nebo*****@gmail.com</strong>{" "}
              </p>
              <p className="font-normal typo">
                Code expires in <strong>10 minutes</strong>
              </p>
            </div>
            <form onSubmit={handleSubmit} className="">
              <p className="verify-p">Verification Code</p>
              <div className="input-box flex lg:w-full sm:gap-[10%] gap-[3%] h-[60px] mt-[10px]">
                <input type="text" className="w-[25%] m-0 border border-neutral-500 border-[2px] rounded-[8px] p-[10px]" />
                <input type="text" className="w-[25%] m-0 border border-neutral-500 border-[2px] rounded-[8px] p-[10px]" />
                <input type="text" className="w-[25%] m-0 border border-neutral-500 border-[2px] rounded-[8px] p-[10px]" />
                <input type="text" className="w-[25%] m-0 border border-neutral-500 border-[2px] rounded-[8px] p-[10px]" />
              </div>
              <p className="font-normal typo my-[24px]">
                Didn’t get a code?{" "}
                <button className="resend">Resend Code</button>
              </p>
              <PrimaryButton>Verify</PrimaryButton>
            </form>
          </div>
          <footer className="footer lg:mt-[200px]">
            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="resend">Login In</Link>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default EmailVerify;
