import React from "react";
import hideIcon from "../../assets/images/HideIcon.png";
import { useState } from "react";

function PasswordResetForm() {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const togglePasswordType = () => {
    if (passwordType == "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const toggleConfirmPasswordType = () => {
    if (confirmPasswordType == "password") {
      setConfirmPasswordType("text");
      return;
    }
    setConfirmPasswordType("password");
  };
  return (
    <div className="px-6 pt-6">
      <form action="">
        <small className="font-campton">New Password</small>
        <br />
        <div className="flex w-full border-2 rounded-md items-center justify-between">
          <input
            type={passwordType}
            placeholder="Set an 8-character password"
            className="p-3 w-full"
          />
          <br />
          <img
            onClick={() => togglePasswordType()}
            src={hideIcon}
            alt=""
            className=" pr-2 cursor-pointer"
          />
        </div>
        <small className="font-campton">Confirm Password</small>
        <br />
        <div className="flex w-full border-2 rounded-md items-center justify-between">
          <input
            type={confirmPasswordType}
            placeholder="Enter the password again"
            className="p-3 w-full"
          />
          <br />
          <img
            onClick={() => toggleConfirmPasswordType()}
            src={hideIcon}
            alt=""
            className=" pr-2 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}

export default PasswordResetForm;
