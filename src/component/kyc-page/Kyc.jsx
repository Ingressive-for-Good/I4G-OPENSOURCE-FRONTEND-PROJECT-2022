import React from "react";
import "./kyc.css";
import kycImg from "./assets/kyc-img.svg";
import logo from "./assets/logo.svg";
import lineSvg from "./assets/line.svg";
import ham from "./assets/hamburger.svg";
import downArrow from "./assets/downArrow.svg";
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
              <p className="text-lg font-normal leading-8 text-center mt-6 txt-color">
                When you verify email address, your email marketing is more
                effective, fraud prevention is improved and the ability to
                protect your sender reputation increases.
              </p>
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
                      className="country-code-input"
                      placeholder="+234"
                    />
                    <input
                      className="form-control-v2"
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
                    <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline ">
                      <option>Select the ID type</option>
                      <option>Passport</option>
                      <option>Driving License</option>
                      <option>National ID</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <img src={downArrow} alt="" className="w-4" />
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                  >
                    Upload a copy of ID Type <span className="required">*</span>
                  </label>
                  <div className="relative flex w-full justify-between form-control-v2">
                    <label className="block text-gray-400 text-sm sm-devices font-bold">
                      Upload a copy of your ID
                    </label>
                    <input
                      type="file"
                      id="file-upload"
                      className="form-control-v2 hidden"
                    />
                    <label
                      htmlFor="file-upload"
                      className="text-[#0F27BD] sm-devices"
                    >
                      Select File
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="bg-blue-700 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center"
                    type="button"
                  >
                    Proceed
                  </button>
                </div>
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
