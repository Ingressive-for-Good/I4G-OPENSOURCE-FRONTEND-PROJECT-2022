import React from "react";

import loginImage from "../assets/LoginImage.png";
import webLogo from "../assets/web-logo.png";
import Arrow from "../assets/Arrow 1.png";

const Login = () => {
  return (
    <section className="h-screen">
      <div className="w-full flex">
        <div className="w-[40%] bg-primary-50 min-h-screen h-full px-[7%]">
          <img className="pt-[5%] pl-[5%]" src={webLogo} alt="" />
          <div>
            <img className="mt-16" src={loginImage} alt="" />
          </div>
          <p className="text-neutral-600 text-center leading-8 mt-8">
            When you verify email address, your email marketing is more
            effective, fraud prevention is improved and the ability to protect
            your sender reputation increases.
          </p>
        </div>
        <div className="w-[60%]">
          <div className="relative text-center">
            <h2>Log In</h2>
            <img className="absolute" src={Arrow} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
