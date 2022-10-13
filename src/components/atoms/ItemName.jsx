import React from "react";


function ItemName(props) {
    return(
        <div>
            <h2 className="font-medium text-[18px] text-neutral-800 font-campton  mb-[10px]">{props.name}</h2>
        </div>
    );
}

export default ItemName;
