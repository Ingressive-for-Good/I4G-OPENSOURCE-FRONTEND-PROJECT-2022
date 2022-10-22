import React from "react";
import "./kyc.css";
import kycImg from "../assets/icons/kyc-img.svg";
import logo from "../assets/icons/logo.svg";
import lineSvg from "../assets/icons/line.svg";
import ham from "../assets/icons/hamburger.svg";
import PrimaryButton from "../components/atoms/PrimaryButton";
import { Link } from "react-router-dom";
import AuthSide from "../components/atoms/AuthSide";
import NavHome from "../components/molecules/NavHome";

const Kyc = () => {
  return (
    <div className="h-full w-full relative" id='body'>
      <div className="absolute top-0 md:left-[55px] w-full">
        <NavHome/>
      </div>
      <div className="flex flex-row ">
        <AuthSide Main={kycImg}/>
        <div className="md:w-[60%] w-full md:mt-[16px] mt-[70px] pb-[30px]">
          <div className="verify-container">
            <div className="typography mb-6">
              <h2 className="text-center font-bold text-3xl">
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
          <div className="mt-[150px]">
            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="resend">Login In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kyc;
