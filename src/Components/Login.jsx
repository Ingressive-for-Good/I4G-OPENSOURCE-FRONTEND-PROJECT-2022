import React from "react";

import loginImage from "../assets/LoginImage.png";
import webLogo from "../assets/web-logo.png";
import Arrow from "../assets/Arrow 1.png";
import PrimaryButton from "./UI/PrimaryButton";
import Facebook from "../assets/logos_facebook.png";
import Google from "../assets/icons_google.png";
import iPadLogo from "../assets/iPad-logo.png";
import Frame from "../assets/Frame 1.png";
import MobileLogo from "../assets/mobile-logo.png";
import HidePassword from "../assets/Hide Password.png";
import ShowPassword from "../assets/Show Passsword.png";
import SecondaryButton from "./UI/SecondaryButton";

const Login = () => {
  return (
    <section className="h-screen">
      <div className="w-full flex">
        <div className="hidden lg:block lg:w-[40%] bg-primary-50 min-h-screen h-full lg:px-[7%]">
          <img className="pt-[5%] pl-[5%]" src={webLogo} alt="" />
          <div>
            <img className="mt-16" src={loginImage} alt="" />
          </div>
          <p className="text-neutral-600 text-center leading-8 lg:mt-8">
            When you verify email address, your email marketing is more
            effective, fraud prevention is improved and the ability to protect
            your sender reputation increases.
          </p>
        </div>
        <div className="bg-white w-full lg:w-[60%] md:py-[3%] md:px-[8%] px-[5%] py-[5%]">
          <div className="lg:hidden md:flex justify-between items-center hidden">
            <img className="max-w-full" src={iPadLogo} alt="" />
            <img src={Frame} alt="" />
          </div>
          <div className="sm:hidden flex justify-between items-center">
            <img src={MobileLogo} alt="" />
            <img src={Frame} alt="" />
          </div>
          <div className="text-center mt-12 sm:mt-8 lg:mt-0">
            <h4>Log In</h4>
            <img className="mx-auto" src={Arrow} alt="" />
          </div>
          <p className="font-medium text-neutral-900 lg:mt-2 my-4 lg:mb-0">
            Nice to see you again! Log In with details you entered during
            registration.
          </p>
          <div className="py-4 lg:w-[90%]">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col">
                <label
                  className="text-neutral-900 font-medium mb-1"
                  htmlFor="Email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="Email"
                  placeholder="Enter your Email Address"
                />
              </div>
              <div className="relative flex flex-col">
                <label
                  className="text-neutral-900 font-medium mb-1"
                  htmlFor="Password"
                >
                  Password
                </label>
                <input type="password" id="Email" placeholder="Password" />
                <img
                  className="w-6 absolute right-4 cursor-pointer translate-y-[170%]"
                  src={HidePassword}
                  alt=""
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-1 items-center justify-center">
                  <input
                    className="flex items-center"
                    type="checkbox"
                    id="Remember"
                  />
                  <label
                    className="font-medium text-[16px] text-neutral-900"
                    htmlFor="Remember"
                  >
                    Remember me
                  </label>
                </div>
                <a className="text-neutral-900 font-bold text-[16px]" href="#">
                  Forgot Password?
                </a>
              </div>
              <div className="my-6">
                <PrimaryButton>Log In</PrimaryButton>
              </div>
            </form>
            <div className="my-6 flex items-center justify-between">
              <hr className="border w-[45%] border-b-neutral-500" />
              <span className="relative px-2">OR</span>
              <hr className="border w-[45%] border-b-neutral-500" />
            </div>
            <div className="flex gap-4 sm:gap-8 items-center md:flex-row flex-col">
              <SecondaryButton>
                <span className="flex items-center justify-center gap-2 text-center">
                  <img src={Google} alt="" />
                  Log in with Google
                </span>
              </SecondaryButton>
              <SecondaryButton>
                <span className="flex items-center justify-center gap-2 ">
                  <img src={Facebook} alt="" />
                  Log in with Facebook
                </span>
              </SecondaryButton>
            </div>
          </div>
          <div className="md:fixed text-center my-4 sm:my-0 lg:mx-[10%] md:mx-[25%] lg:bottom-4 md:bottom-16">
            <span>
              Don't have an account?
              <a href="#" className="text-primary-500 font-bold">
                {" "}
                Create an account
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
