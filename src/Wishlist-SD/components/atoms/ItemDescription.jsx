import React from "react";

function ItemDescription(props) {
    return(
        <div>
            <h3 className="font-medium font-campton text-base text-neutral-600">{props.description}</h3>
        </div>
    );
}

export default ItemDescription;
