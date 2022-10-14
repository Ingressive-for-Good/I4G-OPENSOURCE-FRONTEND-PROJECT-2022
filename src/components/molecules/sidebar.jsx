import React from "react";
import web from "../../assets/icons/web.png";
import { UseAppContext } from "react";

const Sidebar = () => {
  const { nav } = UseAppContext();
  return (
    <div className="bg-primary-50 w-72 h-screen px-8 py-10 sticky top-0 left-0 z-10 hidden lg:block">
      <img src={web} alt="" srcSet="" className="hidden lg:block pb-8" />
      <p className="mb-8 text-primary-500">MENU</p>

      {nav.map((main) => {
        const { id, image, name } = main;
        return (
          <div
            key={id}
            className="flex gap-2 mb-8 hover:bg-white hover:-mx-8 hover:px-8 hover:py-2 relative last:absolute last:bottom-8 last:text-error-500"
          >
            <img src={image} alt="" srcset="" />

            <p className=" text-neutral-500 ">{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
