import { info } from "autoprefixer";
import React, { useState } from "react";

import { UseAppContext } from "./context";

function Delete() {
  const [editId, setId] = useState(null);
  const { value, setValue, show, setShow, alert, setAlert } = UseAppContext();

  const Edit = (id) => {
    const a = setShow(!show);
    setId(id);
    // const newShow = value.map((info) => info.id === editId);
    setValue(
      value.map((info) => {
        if (info.id === id) {
          return { ...info, a };
        } else {
          return info;
        }
      })
    );
  };

  return (
    <div className="w-full md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3  ">
      {value.map((info) => {
        const {
          id,
          image,
          nav,
          discription,
          icon,
          available,
          price,
          category,
        } = info;
        return (
          <div
            key={id}
            className=" relative mb-5 w-full bg-neutral-300 rounded-lg border-neutral-300 border-2 "
          >
            <img
              src={image}
              alt=""
              srcset=""
              className="w-full object-contain "
            />
            <img
              src={nav}
              alt=""
              srcSet=""
              onClick={() => Edit(id)}
              className="absolute top-4 right-6 bg-primary-50 h-10 w-10 object-contain p-2 rounded-full"
            />
            <div
              className={
                " absolute bg-neutral-50 top-16 right-2 p-2 rounded-md text-small text-center leading-5 " +
                (show ? "block" : "hidden")
              }
            >
              <ul>
                <li>Edit Details</li>
                <li>Mark as Available</li>
              </ul>
            </div>
            <div className="flex justify-between items-center bg-white p-5">
              <div>
                <p className="text-button font-semibold text-neutral-700">
                  {discription}
                </p>
                <p>{category}</p>
                <h4 className="text-h4 font-bold text-neutral-900">{price}</h4>
                <p className="text-button font-semibold text-secondary-700">
                  {available}
                </p>
              </div>
              <div>
                <img
                  src={icon}
                  alt=""
                  srcSet=""
                  onClick={() => {
                    setAlert(!alert);
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Delete;