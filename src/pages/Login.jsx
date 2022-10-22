import React, { useState } from "react";
import Arrow from "../assets/icons/arrow.png";
import Main from '../assets/icons/Main.svg'
import PrimaryButton from "../components/atoms/PrimaryButton";
import SecondaryButton from "../components/atoms/SecondaryButton";
import Facebook from "../assets/icons/logos_facebook.png";
import Google from "../assets/icons/icons_google.png";
import HidePassword from "../assets/icons/Hide.png";
import ShowPassword from "../assets/icons/show-password.png";
import { Link } from "react-router-dom";
import AuthSide from "../components/atoms/AuthSide";
import NavHome from "../components/molecules/NavHome";


const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

  const togglePasswordType = () => {
    if (passwordType == "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const enteredEmailIsValid = enteredEmail.includes("@");
  const enteredPasswordIsValid = PASSWORD_REGEX.test(enteredPassword);

  const emailValid = enteredEmailIsValid && enteredEmailTouched;
  const emailInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const passwordValid = enteredPasswordIsValid && enteredPasswordTouched;
  const passwordInvalid = !enteredPasswordIsValid && enteredPasswordTouched;

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const emailChangeBlur = () => {
    setEnteredEmailTouched(true);
  };

  const passwordChangeBlur = () => {
    setEnteredPasswordTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredEmailTouched(true);
    setEnteredPasswordTouched(true);

    if (!enteredEmailIsValid && !enteredPasswordIsValid) {
      return;
    }

    setEnteredEmail("");
    setEnteredPassword("");

    setEnteredEmailTouched(false);
    setEnteredPasswordTouched(false);
  };

  return (
    <section className="h-screen font-campton font-[500px] " id='body'>
      <div className="absolute top-0 md:left-[55px] w-full">
        <NavHome/>
      </div>
      <div className="w-full flex">
        <AuthSide Main={Main}/>
        <div className="bg-white w-full md:pb-[3%] px-[5%] pb-[5%] md:mt-[16px] mt-[70px] pb-[30px]">
          <div className="text-center mt-12 sm:mt-8 lg:mt-0 mb-[41px]">
            <h4 className="text-[30px] text-neutral-900 font-[700]">Log In</h4>
            <img className="mx-auto" src={Arrow} alt="" />
          </div>
          <p className="font-medium text-neutral-700 lg:mt-2 my-4 lg:mb-0 text-[14px]">
            Nice to see you again! Log In with your details
          </p>
          <div className="py-4">
            <form onSubmit={formSubmissionHandler}>
              <div className="flex flex-col">
                <label
                  className="text-neutral-900 font-medium mb-1"
                  htmlFor="Email"
                >
                  Email Address
                </label>
                <input
                  className={`${
                    emailInvalid && "border-error-500 bg-error-50"
                  } ${emailValid && "border-success-500 bg-success-50"} w-full border-2 mt-2 mb-6 md:mb-5 rounded-lg py-5 px-4 border-neutral-500 bg-neutral-50 placeholder:text-neutral-800 placeholder:leading-5`}
                  type="email"
                  id="Email"
                  placeholder="Enter your Email Address"
                  onChange={emailChangeHandler}
                  onBlur={emailChangeBlur}
                  value={enteredEmail}
                />
              </div>
              <div className="relative flex flex-col">
                <label
                  className="text-neutral-900 font-medium mb-1"
                  htmlFor="Password"
                >
                  Password
                </label>
                <input
                  className={`${
                    passwordInvalid && "border-error-500 bg-error-50"
                  } ${passwordValid && "border-success-500 bg-success-50"} w-full border-2 mt-2 mb-6 md:mb-5 rounded-lg py-5 px-4 border-neutral-500 bg-neutral-50 placeholder:text-neutral-800 placeholder:leading-5`}
                  type={passwordType}
                  id="Email"
                  placeholder="Password"
                  onChange={passwordChangeHandler}
                  onBlur={passwordChangeBlur}
                  value={enteredPassword}
                />
                <img
                  className="w-6 absolute right-4 cursor-pointer translate-y-[240%]"
                  src={
                    passwordType === "password" ? HidePassword : ShowPassword
                  }
                  alt=""
                  onClick={togglePasswordType}
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center justify-center">
                  <input
                    className="flex items-center"
                    type="checkbox"
                    id="Remember"
                  />
                  <label htmlFor="Remember">Remember me</label>
                </div>

                <Link className="text-neutral-900 font-bold text-[16px]" to='/forgotpassword'>
                  Forgot Password?
                </Link>
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
            <div className="flex gap-4 lg:gap-8 items-center md:flex-row flex-col">
              <SecondaryButton>
                <span className="flex items-center justify-center gap-2 ">
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
          <div className="text-center mt-[100px] lg:mx-[10%] md:mx-[25%]">
            <span>
              Don't have an account?

              <Link to='/create-account' className="text-primary-500 font-bold">
                {" "}
                Create an account
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
