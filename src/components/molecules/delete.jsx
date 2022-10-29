import { info } from "autoprefixer";
import React, { useState } from "react";
import HandleButton from "./handleButton";
import { UseAppContext } from "../../../utils/context";
import Modal from "./modal";

function Delete() {
  const [alertDelete, setAlertDelete] = useState(false);

  const { value, setValue, alert, setDeletePopUp, setMessage } =
    UseAppContext();
  const removeItem = (id) => {
    const newValue = value.filter((info) => info.id !== id);
    setValue(newValue);
    setAlertDelete(false);
    setDeletePopUp({
      show: true,
      msg: " Item has been deleted from your uploaded products",
    });
  };

  return (
    <div className="w-full md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3  ">
      {value.map((info) => {
        const {
          id,
          image,

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

            <HandleButton />

            <div className="flex justify-between items-center bg-white p-5">
              <div>
                <p className="text-button font-semibold text-neutral-700 font-campton">
                  {discription}
                </p>
                <p className="font-campton">{category}</p>
                <h4 className="text-h4 font-bold text-neutral-900 font-cabinet">
                  {price}
                </h4>
                <p className="text-button font-semibold text-secondary-700 font-campton">
                  {alert ? "available" : `${available}`}
                </p>
              </div>
              <div>
                <img
                  src={icon}
                  alt=""
                  srcSet=""
                  onClick={() => {
                    setAlertDelete(!alertDelete);
                  }}
                />
              </div>
              {alertDelete && <Modal removeItem={removeItem} {...info} />}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Delete;
