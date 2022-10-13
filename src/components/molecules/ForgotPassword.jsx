import React from "react";
import "./forgotPass.css";
import girlSvg from "./girl-photo.svg";
import logo from "./logo.svg";
import lineSvg from "./line.svg";
import ham from "./hamburger.svg";
const ForgotPassword = () => {
  return (
    <div className="container h-full w-full relative">
      <div className={`lg:grid h-full w-full grid-cols-2 ipad-full`}>
        <div className="">
          <div className="logo flex justify-between px-8 lg:hidden mt-2 w-full ipad-ham">
            <img src={logo} alt="logo" className="w-20 logo-img" />
            <img src={ham} alt="" className="hambuger w-9 " />
          </div>
          <div className="w-606px p-12 pl-20 bg-accent1">
            <div className="logo mt-2 mb-28">
              <img src={logo} alt="logo" />
            </div>
            <div className="girl-img">
              <img className="w-96" src={girlSvg} alt="" />
            </div>
            <div className="typography">
              <p className="text-lg font-normal leading-8 text-center mt-6 txt-color">
                When you verify email address, your email marketing is more
                effective, fraud prevention is improved and the ability to
                protect your sender reputation increases.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:max-w-full lg:mx-16 lg:mt-24 vm">
          <div className="verify-container">
            <div className="typography mb-6">
              <h2 className="text-center font-bold text-3xl responsive">
                Forgot Password?
              </h2>
              <div className="img-box mb-12">
                <img src={lineSvg} className="img" alt="curve-line" />
              </div>

              <p className="font-normal typo">
                Enter the email address you signed up with and we’ll send you a
                link to reset your password.
              </p>
            </div>
            <form className="form-container">
              <p className="verify-p">Email Address</p>
              <div className="w-full">
                <input
                  type="text"
                  className="form-control-v3 w-full"
                  placeholder="Enter Your Email Address"
                />
              </div>

              <div className="form-btn w-full my-8 rounded-lg">
                <button className="btn w-full">Submit</button>
              </div>
            </form>
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

export default ForgotPassword;
