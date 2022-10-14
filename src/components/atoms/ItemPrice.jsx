import React from "react";


function ItemPrice(props) {
    return (
        <div>
            <span className="font-bold text-[21px] font-cabinet text-neutral-900  mb-[8px]">{props.price}</span>
        </div>
    );
}

export default ItemPrice;
