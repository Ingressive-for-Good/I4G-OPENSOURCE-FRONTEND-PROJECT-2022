import React from "react";
import { UseAppContext } from "../../../utils/context";
import chat from "../../assets/icons/Chat.png";

export const Chat = () => {
  return (
    <div>
      <img
        src={chat}
        alt=""
        srcset=""
        className="absolute top-4 right-2 h-10 w-10 object-contain p-2 rounded-full"
      />
    </div>
  );
};

const DashboardProduct = () => {
  const { dashboard } = UseAppContext();
  return (
    <div className="w-full md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3  ">
      {dashboard.map((data) => {
        const { price, name, image, id, icon } = data;
        return (
          <div
            key={id}
            className=" relative mb-5 w-full bg-neutral-300 rounded-lg border-neutral-300 border-2 "
          >
            <img
              src={image}
              alt=""
              srcset=""
              className="w-full object-scale-down "
            />
            <Chat />
            <div className="flex justify-between items-center bg-white p-5">
              <div>
                <p className="text-button font-semibold text-neutral-700 font-campton">
                  {name}
                </p>
                <h4 className="text-h4 font-bold text-neutral-900 font-cabinet">
                  {price}
                </h4>
              </div>
              <div>
                <img src={icon} alt="" srcset="" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardProduct;
