import React from "react";
import Hero from "./hero";
import Delete from "./delete";
import Sidebar from "./sidebar";
import Modal from "./modal";
const DeleteProduct = () => {
  return (
    <div className="relative h-screen">
      <Modal />
      <div className="py-8 px-5 w-screen md:py-10 md:px-14 lg:flex lg:gap-8 relative lg:pl-0 lg:pt-0 lg:pr-10">
        <Sidebar />
        <div>
          <Hero />
          <Delete />
        </div>
      </div>
    </div>
  );
};

export default DeleteProduct;
