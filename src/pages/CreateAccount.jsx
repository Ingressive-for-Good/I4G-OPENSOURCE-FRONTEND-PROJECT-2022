import { Link } from "react-router-dom";

import React, { useState } from "react";
import Main from "../assets/images/main.svg";
import Line from "../assets/icons/line.svg";
import Hide from "../assets/icons/Hide.svg";
import Google from "../assets/icons/Google.svg";
import Facebook from "../assets/icons/Facebook.svg";
import AuthSide from "../components/atoms/AuthSide";
import NavHome from "../components/molecules/NavHome";

function CreateAccount() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [password, setPassword] = useState("");

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }
    if (name === "") {
      setNameError(true);
    }
  };
  return (
    <div className="bg-neutral-50  text-neutral-900 font-campton" id="body">
      <div className="absolute top-0 md:left-[55px] w-full">
        <NavHome />
      </div>
      <main className="flex">
        <AuthSide Main={Main} />
        <section className=" w-full md:pb-[3%] px-[5%] pb-[5%] md:mt-[16px] mt-[70px] pb-[30px]">
          <div className="">
            <h2 className="font-cabinetGrotesk font-bold text-center text-xl md:text-3xl text-center mt-12 sm:mt-8 mb-[41px]">
              Create An Account
            </h2>
            <img
              src={Line}
              alt="Line Icon"
              className="mx-auto w-12 md:w-auto"
            />
            <p className="text-neutral-700 font-medium mt-6 md:text-lg md:text-neutral-900 md:leading-5 md:mt-10 lg:text-neutral-700">
              Fill in the correct details below to create an Account.
            </p>

            <form onSubmit={formSubmissionHandler} className="pt-6">
              <label htmlFor="fullName" className="font-medium leading-5">
                Full Name
              </label>
              <br />

              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                className={`${
                  nameError && "border-error-500 bg-error-50"
                } w-full border-2 mt-2 mb-6 md:mb-5 rounded-lg py-5 px-4 border-neutral-500 bg-neutral-50 placeholder:text-neutral-800 placeholder:leading-5`}
              />
              <br />

              <label htmlFor="email" className="font-medium leading-5">
                Email Address
              </label>
              <br />

              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                id="email"
                placeholder="Enter your email address"
                className={`${
                  emailError && "border-error-500 bg-error-50"
                } mt-2 mb-6 md:mb-5 bg-neutral-50 border-2 rounded-lg py-5 px-4 w-full border-neutral-500 placeholder:text-neutral-800 placeholder:leading-5`}
              />
              <br />

              <label htmlFor="password" className="font-medium leading-5">
                Password
              </label>
              <br />

              <div className="relative w-full ">
                <div
                  onClick={() => (show ? setShow(false) : setShow(true))}
                  className="absolute right-0 pr-4 pt-7"
                >
                  <img src={Hide} alt="Hide Logo" />
                </div>

                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={show ? "text" : "password"}
                  id="password"
                  placeholder="Set a 8-character password"
                  className={`${
                    passwordError && "border-error-500 bg-error-50"
                  } w-full border-2 mt-2 mb-6 md:mb-5 rounded-lg py-5 px-4 border-neutral-500 bg-neutral-50 placeholder:text-neutral-800 placeholder:leading-5`}
                />
              </div>

              <div className="flex w-full items-center mb-8">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-5 h-5 bg-neutral-50 border-2 border-neutral-500 rounded"
                />

                <label htmlFor="terms" className="ml-2.5 font-medium">
                  I agree to the company’s{" "}
                  <a
                    href="#"
                    className="font-semibold md:font-bold lg:font-semibold text-secondary-500"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="font-semibold md:font-bold lg:font-semibold text-secondary-500"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="text-center w-full bg-primary-500 rounded-lg py-5 text-white font-bold text-lg leading-6 mb-6 md:mb-4 border-2 border-transparent hover:bg-primary-400 focus:border-2 focus:border-primary-500 focus:bg-transparent focus:text-primary-500"
              >
                Proceed
              </button>

              <div className="flex w-full items-center mb-6 md:mb-4">
                <hr className="w-5/12 border border-neutral-500" />
                <p className="w-2/12 uppercase text-center font-medium text-neutral-500">
                  or
                </p>
                <hr className="w-5/12 border border-neutral-500" />
              </div>

              <div className="flex flex-col md:flex-row md:justify-between lg:justify-around xl:justify-between gap-4 lg:gap-8">
                <button className="flex w-full font-medium md:font-semibold font-neutral-800 md:font-neutral-900 py-5 border-2 border-primary-300 rounded-lg justify-center lg:px-3">
                  <img
                    src={Google}
                    alt="Google Icon"
                    className="mr-2.5 lg:mr-0 xl:mr-2.5"
                  />
                  Continue with Google
                </button>

                <button className="flex w-full mt-6 md:mt-0  font-medium md:font-semibold font-neutral-800 md:font-neutral-900 py-5 border-2 border-primary-300 rounded-lg justify-center lg:px-3">
                  <img
                    src={Facebook}
                    alt="Facebook Icon"
                    className="mr-2 lg:mr-0 xl:mr-2"
                  />
                  Continue with Facebook
                </button>
              </div>

              <p className="font-medium mt-[100px] leading-6 text-sm text-center">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-base font-bold text-primary-500"
                >
                  Log In
                </Link>
              </p>
            </form>
          </div>

          <input
            type="password"
            id="password"
            placeholder="Set a 8-character password"
            className="w-full border-2 mt-2 mb-6 md:mb-5 rounded-lg py-5 px-4 border-neutral-500 bg-neutral-50 placeholder:text-neutral-800 placeholder:leading-5"
          />
          {/* </div> */}

          <div className="flex w-full items-center mb-8">
            <input
              type="checkbox"
              id="terms"
              className="w-5 h-5 bg-neutral-50 border-2 border-neutral-500 rounded"
            />
            <label for="terms" className="ml-2.5 font-medium">
              I agree to the company’s{" "}
              <a
                href="#"
                className="font-semibold md:font-bold lg:font-semibold text-secondary-500"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="font-semibold md:font-bold lg:font-semibold text-secondary-500"
              >
                Privacy Policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="text-center w-full bg-primary-500 rounded-lg py-5 text-white font-bold text-lg leading-6 mb-6 md:mb-4"
          >
            Proceed
          </button>

          <div className="flex w-full items-center mb-6 md:mb-4">
            <hr className="w-5/12 border border-neutral-500" />
            <p className="w-2/12 uppercase text-center font-medium text-neutral-500">
              or
            </p>
            <hr className="w-5/12 border border-neutral-500" />
          </div>

          <div className="flex flex-col md:flex-row md:justify-between lg:justify-around xl:justify-between">
            <button className="flex w-full font-medium md:font-semibold font-neutral-800 md:font-neutral-900 py-5 border-2 border-primary-300 rounded-lg md:w-5/12 justify-center lg:px-3">
              <img
                src={Google}
                alt="Google Icon"
                className="mr-2.5 lg:mr-0 xl:mr-2.5"
              />
              Continue with Google
            </button>

            <button className="flex w-full mt-6 md:mt-0  font-medium md:font-semibold font-neutral-800 md:font-neutral-900 py-5 border-2 border-primary-300 rounded-lg md:w-5/12 justify-center lg:px-3">
              <img
                src={Facebook}
                alt="Facebook Icon"
                className="mr-2 lg:mr-0 xl:mr-2"
              />
              Continue with Facebook
            </button>
          </div>

          <p className="font-medium mt-10 md:mt-14 leading-6 text-sm text-center">
            Already have an account?{" "}
            <a href="#" className="text-base font-bold text-primary-500">
              Log In
            </a>
          </p>
          {/* </form> */}
          {/* </div> */}
        </section>
      </main>
    </div>
  );
}

export default CreateAccount;
