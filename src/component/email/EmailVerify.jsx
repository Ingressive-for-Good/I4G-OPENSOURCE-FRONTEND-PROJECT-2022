import React from "react";
import "./style.css";
import girlSvg from "./girl-photo.svg";
import logo from "./logo.svg";
const EmailVerify = () => {
  return (
    <div className="container w-full h-full">
      <div className="grid w-full h-full grid-cols-2">
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
              effective, fraud prevention is improved and the ability to protect
              your sender reputation increases.
            </p>
          </div>
        </div>
        <div className="w-full">09</div>
      </div>
    </div>
  );
};

export default EmailVerify;
