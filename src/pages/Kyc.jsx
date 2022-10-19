import React from "react";
import "./kyc.css";
import kycImg from "../assets/icons/kyc-img.svg";
import logo from "../assets/icons/logo.svg";
import lineSvg from "../assets/icons/line.svg";
import ham from "../assets/icons/hamburger.svg";
import PrimaryButton from "../components/atoms/PrimaryButton";

const Kyc = () => {
  return (
    <div className="container h-full w-full">
      <div className="lg:grid h-full w-full grid-cols-2 ipad-full">
        <div className="">
          <div className="logo flex justify-between px-8 lg:hidden mt-2 w-full ipad-ham">
            <img src={logo} alt="logo" className="w-20 logo-img" />
            <img src={ham} alt="" className="hambuger w-9 " />
          </div>
          <div className="w-606px p-12 pl-20 bg-accent1 h-full">
            <div className="logo mt-2 mb-28">
              <img src={logo} alt="logo" />
            </div>
            <div className="girl-img flex justify-center">
              <img className="w-96" src={kycImg} alt="" />
            </div>
            <div className="typography">
            </div>
          </div>
        </div>{" "}
        <div className="w-full lg:max-w-full lg:mx-16 lg:mt-18 vm">
          <div className="verify-container">
            <div className="typography mb-6">
              <h2 className="text-center font-bold text-3xl responsive">
                Know Your Customer (KYC) Form
              </h2>
              <div className="img-box mb-12">
                <img src={lineSvg} className="img" alt="curve-line" />
              </div>
              <p className="lg:font-normal typo">
                Ensure that you are filling{" "}
                <strong className="text-email">correct</strong> and{" "}
                <strong className="text-email">up-to-date</strong> information
              </p>
            </div>
            <div className="w-full">
              <form className="w-full">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    Phone Number <span className="required">*</span>
                  </label>
                  <div className="flex w-full h-fit items-center justify-between">
                    <input
                      type="number"
                      className="w-[20%] border-2 mt-2 mb-6 md:mb-5 rounded-lg py-5 px-4 border-neutral-500 placeholder:text-neutral-800 placeholder:leading-5"
                      placeholder="+234"
                    />
                    <input
                      className="w-[75%] border-2 mt-2 mb-6 md:mb-5 rounded-lg py-5 px-4 border-neutral-500 placeholder:text-neutral-800 placeholder:leading-5"
                      // id="number"
                      type="text"
                      placeholder="Enter your 11-digit phone number"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                  >
                    ID Type <span className="required">*</span>
                  </label>
                  <div className="relative">
                    <select className="w-full border-2 mt-2 mb-6 md:mb-5 rounded-lg py-5 px-4 border-neutral-500 placeholder:text-neutral-800 placeholder:leading-5">
                      <option>Select the ID type</option>
                      <option>Passport</option>
                      <option>Driving License</option>
                      <option>National ID</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                  >
                    Upload a copy of ID Type <span className="required">*</span>
                  </label>
                  <div className="relative flex w-full justify-between w-full border-2 mt-2 mb-6 md:mb-5 rounded-lg py-5 px-4 border-neutral-500 placeholder:text-neutral-800 placeholder:leading-5">
                    <label className="block text-gray-400 text-sm sm-devices font-bold">
                      Upload a copy of your ID
                    </label>
                    <input
                      type="file"
                      id="file-upload"
                      className=" hidden "
                    />
                    <label
                      htmlFor="file-upload"
                      className="text-[#0F27BD] sm-devices"
                    >
                      Select File
                    </label>
                  </div>
                </div>
                <PrimaryButton>Proceed</PrimaryButton>
              </form>
            </div>
          </div>
          <footer className="footer lg:mt-24">
            <p className="text-center">
              Already have an account?{" "}
              <strong className="resend">Login In</strong>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Kyc;
