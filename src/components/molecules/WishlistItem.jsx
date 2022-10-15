import React, { useState } from "react";
import ItemDescription from "../atoms/ItemDescription";
import ItemImage from "../atoms/ItemImage";
import ItemName from "../atoms/ItemName";
import ItemPrice from "../atoms/ItemPrice";

function WishlistItem(props) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <div className="" id={props.id}>
      <div
        className={
          (clicked ? "border-primary-500 " : "border-neutral-300 ") +
          "flex justify-center items-start pt-[24px] w-[333px] h-[366px] border-[1.5px] rounded-lg md:w-[583px] md:h-[224px] md:flex md:justify-start mt-[24px] lg:w-[505px] lg:h-[216px]"
        }
      >
        <span className="mr-[16px] md:ml-[16px] md:mr-[16.5px]">
          <input
            onClick={handleClick}
            type="checkbox"
            className="default:ring-neutral-600 checked:bg-primary-500 w-[20px] h-[20px] rounded-lg "
          />
        </span>
        <div className="md:flex">
          <span className="md:mr-[17px]">
            <ItemImage src={props.imageLink} alt={props.imageText} />
          </span>
          <div className="mt-[17px]">
            <ItemName name={props.ItemName} />
            <ItemPrice price={props.ItemPrice} />
            <ItemDescription description={props.ItemDescription} />
            <a
              href="#"
              className="text-primary-500 font-cabinetGrotesk font-bold text-lg underline"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistItem;
