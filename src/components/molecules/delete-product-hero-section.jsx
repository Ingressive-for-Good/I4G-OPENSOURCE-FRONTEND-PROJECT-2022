import React from "react";
import logo from "../../assets/icons/logo.png";
import vector from "../../assets/icons/bar.png";
import ipad from "../../assets/icons/ipadLogo.png";
import notification from "../../assets/icons/notification.png";
import rectangle from "../../assets/icons/person.png";
import search from "../../assets/icons/search.png";
import success from "../../assets/icons/success.png";
import error from "../../assets/icons/error.png";
import { UseAppContext } from "../../../utils/context";

const Hero = () => {
  const { value, alert, message, popUp, deletePopUp } = UseAppContext();

  return (
    <div>
      <div className="logo-container flex justify-between items-center mb-4 lg:py-4">
        <img src={logo} alt="" srcset="" className="block md:hidden" />
        <img
          src={ipad}
          alt=""
          srcset=""
          className="hidden md:block lg:hidden"
        />

        <button className=" border border-solid border-primary-500 p-2 rounded-md lg:hidden">
          <img src={vector} alt="" srcset="" />
        </button>
      </div>

      <div className="flex justify-between items-center mb-4 relative ">
        <div>
          <p className="text-p font-medium font-cabinet text-neutral-800 mb-2 md:text-mdP">
            Hey Nora👋🏾
          </p>
          <h4 className="text-h4 font-bold font-cabinet text-neutral-900 md:text-mdH4">
            View your Uploaded Products
          </h4>
          <div>
            {popUp && alert && (
              <div className=" absolute  -translate-y-1/2 md:translate-x-1/2 z-20 top-3 lg:top-8 bg-success-50 rounded-md border-success-500 border flex px-4 py-2 gap-4 justify-center items-center text-neutral-800 font-500">
                <img src={success} alt="" srcSet="" />
                <p>{message}</p>
              </div>
            )}
          </div>
          <div>
            {deletePopUp.show && (
              <div className=" absolute  -translate-y-1/2 md:translate-x-1/2 z-20 top-3 lg:top-8 bg-primary-50 rounded-md border-primary-500 border flex px-4 py-2 gap-4 justify-center items-center text-neutral-800 font-500">
                <img src={error} alt="" srcSet="" />
                <p>{deletePopUp.msg}</p>
              </div>
            )}
          </div>
        </div>
        <div className=" gap-4 items-center relative hidden lg:flex">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for gadgets"
            className="border-2 border-neutral-500 rounded-md py-2 px-8 placeholder:text-neutral-500 placeholder:text-small"
          />
          <img src={search} alt="" srcset="" className="absolute left-2" />
          <img src={notification} alt="" srcset="" />
          <img src={rectangle} alt="" srcset="" />
        </div>
      </div>
      <div className="add-container flex justify-between">
        <p className="font-medium text-button text-neutral-700 font-campton">
          {value.length}
          {value.length < 2 ? " item" : " item(s)"}
        </p>
        <button className="text-button text-primary-500 font-bold font-lato">
          + Add New Product
        </button>
      </div>
      <hr className="bg-neutral-500 my-5" />
    </div>
  );
};

export default Hero;
