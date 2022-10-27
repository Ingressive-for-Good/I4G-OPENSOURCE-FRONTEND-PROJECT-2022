import React, { useState } from "react";
import { UseAppContext } from "../../../utils/context";
import chat from "../../assets/icons/Chat.png";
import left from "../../assets/icons/left.png";
import right from "../../assets/icons/right.png";
import noItem from "../../assets/icons/noItem.png";

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
export const NoItem = () => {
  const { dashboard } = UseAppContext();
  if (dashboard.length === 0) {
    return (
      <div className="flex justify-center items-center flex-col text-center">
        <img src={noItem} alt="" srcset="" />
        <h3 className="font-cabinet font-bold text-xl md:text-2xl">
          No items found
        </h3>
        <p className="font-medium font-campton text-base md:text-xls">
          We couldn’t find what you searched for Try a different keyword
        </p>
      </div>
    );
  }
};

const DashboardProduct = () => {
  const { dashboard } = UseAppContext();
  const [count, setCount] = useState(1);
  const [start, setstart] = useState(0);
  const [end, setEnd] = useState(6);
  const startEl = start;
  const endEl = end;
  const increase = () => {
    if (end < dashboard.length - 1) {
      setstart(start + 6);
      setEnd(end + 6);
      setCount(count + 1);
    } else {
      setEnd(end);
    }
  };
  const decrease = () => {
    if (start > 0) {
      setstart(start - 6);
      setEnd(end - 6);
      setCount(count - 1);
    } else {
      setstart(start);
    }
  };
  return (
    <div>
      <div className="w-full md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3  ">
        {dashboard.slice(startEl, endEl).map((data) => {
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
      {dashboard.length > 1 && (
        <div className="flex justify-between items-center w-full">
          <p className="text-neutral-700 font-normal md:text-sm">
            Showing {end} of {dashboard.length}{" "}
            {dashboard.length < 2 ? "result" : "result(s)"}
          </p>
          <div className="flex justify-center items-center gap-3">
            <img src={left} alt="" srcSet="" onClick={decrease} />
            <p className="text-neutral-50 bg-primary-500 text-sText p-1 rounded-sm md:text-sm md:px-2 md:rounded">
              {count}
            </p>
            <img src={right} alt="" srcSet="" onClick={increase} />
          </div>
        </div>
      )}

      <NoItem />
    </div>
  );
};

export default DashboardProduct;
