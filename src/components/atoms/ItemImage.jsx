import React from "react";

function ItemImage(props) {
  return (
    <div>
      <img
        src={props.src}
        alt={props.alt}
        className="w-[248px] h-[176px] rounded-lg lg:w-[208px] lg:h-[168px]"
      />
    </div>
  );
}

export default ItemImage;
