import React from 'react';
import image from '../../assets/icons/SadFace.png';

const Modal = ({ removeItem, id }) => {
  return (
    <div className=" flex flex-col items-center fixed bg-neutral-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center w-11/12  md:w-9/12 lg:w-3/6 p-10 rounded-md ">
      <h2 className="text-h4 font-bold text-secondary-500  lg:px-20 font-cabinet ">
        Delete Product Permanently?
      </h2>
      <img src={image} alt="" srcset="" className="" />
      <p className=" lg:px-20 font-campton text-neutral-900">
        Are you sure you want to delete this product? We will miss you and this
        action cannot be undone.
      </p>
      <div className="lg:flex gap-4 font-campton">
        <button
          onClick={() => removeItem(id)}
          className="border-2 border-primary-500 text-primary-500 rounded-md py-3 px-10 mt-5"
        >
          Yes, delete product
        </button>
        <button className="bg-primary-500 text-neutral-50 rounded-md py-3 px-10 mt-5 lg:px-3">
          No, mark as Unavailable
        </button>
      </div>
    </div>
  );
};

export default Modal;
