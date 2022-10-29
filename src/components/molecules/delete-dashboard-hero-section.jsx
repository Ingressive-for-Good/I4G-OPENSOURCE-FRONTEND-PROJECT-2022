import React from "react";
import logo from "../../assets/icons/web.png";
import vector from "../../assets/icons/bar.png";

import notification from "../../assets/icons/notification.png";
import rectangle from "../../assets/icons/person.png";
import search from "../../assets/icons/search.png";

import { UseAppContext } from "../../../utils/context";

const Hero = () => {
  const { dashboard } = UseAppContext();

  return (
    <div>
      <div className="logo-container flex justify-between items-center mb-4 lg:py-4">
        <img src={logo} alt="" srcset="" className="lg:hidden" />

        <button className=" border border-solid border-primary-500 p-2 rounded-md lg:hidden">
          <img src={vector} alt="" srcset="" />
        </button>
      </div>

      <div className="block lg:flex justify-between items-center mb-4 relative ">
        <div className="lg:w-1/2">
          <p className="text-p font-medium font-cabinet text-neutral-800 mb-2 md:text-mdP">
            Hey Nora👋🏾
          </p>
          <h4 className="text-h4 font-bold font-cabinet text-neutral-900 md:text-mdH4 md:py-2">
            Explore Tech Gadgets
          </h4>
        </div>
        <div className=" gap-4 items-center relative block lg:flex my-3 lg:my-0 lg:w-1/2">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for gadgets"
            className="border-2 border-neutral-500 rounded-md p-2 md:py-3 px-8 md:px-14 lg:px-8 lg:py-2 placeholder:text-neutral-500 placeholder:text-small w-full lg:w-9/12"
          />
          <img
            src={search}
            alt=""
            srcset=""
            className="absolute left-2 top-2 md:top-4 md:left-8 lg:left-2 lg:top-4"
          />
          <div className="hidden lg:flex gap-2">
            <img src={notification} alt="" srcset="" />
            <img src={rectangle} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="add-container flex justify-between">
        <p className="font-medium text-base text-neutral-900 font-cabinet md:text-2xl">
          {dashboard.length}
          {dashboard.length < 2 ? " item" : " item(s)"}
        </p>
        <div>
          <label
            htmlFor="sort"
            className="font-campton, font-medium text-neutral-700 text-sm md:text-lg"
          >
            Sort by:
          </label>
          <select
            name="sort"
            id="sort"
            className="font-campton font-medium text-primary-500 text-sm md:text-lg"
          >
            <option value="latest">Latest</option>
          </select>
        </div>
      </div>
      <hr className="bg-neutral-500 my-5" />
    </div>
  );
};

export default Hero;
