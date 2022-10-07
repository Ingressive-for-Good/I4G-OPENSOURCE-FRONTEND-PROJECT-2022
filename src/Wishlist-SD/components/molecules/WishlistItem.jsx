import React from "react";
import ItemDescription from "../atoms/ItemDescription";
import ItemImage from "../atoms/ItemImage";
import ItemName from "../atoms/ItemName";
import ItemPrice from "../atoms/ItemPrice";


function WishlistItem() {
    return(
        <div className="mt-[24px]">
            <span>
                <input 
                type="checkbox" 
                className="default:ring-neutral-600 checked:bg-primary-500 w-[20px] h-[20px] rounded-lg" 
                />
            </span>
            <div>
                <span>
                    <ItemImage src="" alt="" />
                </span>
                <div>
                    <ItemName name="Dell Keyboard & Mouse" />
                    <ItemPrice price="#25,000" />
                    <ItemDescription description="Workspace Equipment" />
                </div>
            </div>
        </div>
    );
}

export default WishlistItem;
