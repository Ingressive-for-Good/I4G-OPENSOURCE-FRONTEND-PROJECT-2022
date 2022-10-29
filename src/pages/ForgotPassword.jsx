import girlSvg from '../assets/icons/girl-photo.svg';
import lineSvg from '../assets/icons/line.svg';
import headAvatar from '../assets/icons/head-avatar.svg';
import AuthSide from '../components/atoms/AuthSide';
import PrimaryButton from '../components/atoms/PrimaryButton';
import { useState } from 'react';
import Overlay from '../components/molecules/Overlay';
import { Link } from 'react-router-dom';
import NavHome from '../components/molecules/NavHome';

import './style.css';

export default function ForgotPassword() {
  const [popUp, setPopUp] = useState(false);
  const handleClick = () => {
    popUp ? setPopUp(false) : setPopUp(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPopUp(true);
  };
  return (
    <div className=" relative font-campton" id="body">
      {popUp && (
        <>
          <div className=" flex items-center fixed bg-none top-0 left-0 h-full w-screen z-50 overflow-hidden ">
            <div className="bg-white opacity-[1] w-[90%] sm:w-[80%] lg:w-[70%] max-w-[590px] p-[30px] sm:p-[47px] mx-auto font-campton rounded-[8px]">
              <div className="flex flex-col items-center justify-center text-center ">
                <h1 className="font-cabinetGrotesk sm:text-[30px] text-[25px] font-[700] text-secondary-500">
                  Check your Email!
                </h1>
                <img src={headAvatar} alt="" />
                <p className="font-[500px] max-w-[350px] mt-[32px]">
                  {' '}
                  A link to reset your password has been sent to your email
                  address.
                </p>
                <div className="flex sm:flex-row flex-col justify-center w-full mt-[32px] gap-[15px]">
                  <button
                    onClick={handleClick}
                    className=" border-primary-500 py-[18px] border-[2px] w-[100%] sm:w-[45%] text-center rounded-[8px] font-[700] text-white bg-primary-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Overlay />
        </>
      )}
      <div className="absolute top-0 md:left-[55px] w-full">
        <NavHome />
      </div>
      <div className="w-full flex">
        <AuthSide Main={girlSvg} />
        <div className="bg-white w-full lg:w-[60%] md:pb-[3%] px-[5%] md:mt-[16px] mt-[70px] pb-[30px]">
          <div className="verify-container p-0">
            <div className=" text-center mt-12 sm:mt-8 mb-[41px]">
              <h2 className="text-center font-bold text-3xl">
                Forgot Password?
              </h2>
              <div className="img-box mb-12">
                <img src={lineSvg} className="img" alt="curve-line" />
              </div>
              <p className="lg:font-normal typo">
                Enter the email address you signed up with and we’ll send you a
                link to reset your password.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="">
              <input
                className="w-full border-2 mt-2 mb-6 md:mb-5 rounded-lg py-5 px-4 border-neutral-500 placeholder:text-neutral-800 placeholder:leading-5"
                type="email"
                placeholder="Enter your email address"
                required
              />
              <PrimaryButton>Submit</PrimaryButton>
            </form>
          </div>
          <footer className="footer lg:mt-[200px]">
            <p className="text-center">
              Already have an account?{' '}
              <Link to="/login" className="resend">
                Login In
              </Link>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
