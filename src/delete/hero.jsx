import React from "react";
import logo from "../../public/images/logo.png";
import vector from "../../public/images/bar.png";
import ipad from "../../public/images/ipadLogo.png";

import notification from "../../public/images/notification.png";
import rectangle from "../../public/images/person.png";
import search from "../../public/images/search.png";
import success from "../../public/images/success.png";
import { UseAppContext } from "./context";
const Hero = () => {
  const { value, alert } = UseAppContext();
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
          <p className="text-p font-medium font-lato text-neutral-800 mb-2 md:text-mdP">
            Hey Nora👋🏾
          </p>
          <h4 className="text-h4 font-bold text-neutral-900 md:text-mdH4">
            View your Uploaded Products
          </h4>
          <div className="absolute  -translate-y-1/2 md:translate-x-1/2 z-20 top-3 lg:top-8 bg-success-50 rounded-md border-success-500 border">
            {alert.available && (
              <div className="flex justify-between items-center py-2 px-6 gap-4">
                <img src={success} alt="" srcset="" />
                <p>{alert.msg}</p>
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
        <p className="font-medium text-button text-neutral-700">
          {value.length}
          {value.length < 2 ? " item" : " item(s)"}
        </p>
        <button className="text-button text-primary-500 font-bold">
          + Add New Product
        </button>
      </div>
      <hr className="bg-neutral-500 my-5" />
    </div>
  );
};

export default Hero;
