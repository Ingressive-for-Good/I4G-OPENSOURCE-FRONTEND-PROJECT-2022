import React, { useState } from "react";
import SideBar from "../molecules/SideBar";
import Navbar from "../molecules/Navbar";
import WishlistItem from "../molecules/WishlistItem";
import DeleteConfirmation from "../molecules/DeleteConfirmation";
import DeleteNotification from "../molecules/DeleteNotification";


function WishlistDeleteItem() {
    const [clickedDelete, setClickedDelete] = useState(false);
    const [deleteStats, setDeleteStats] = useState(false);

    function deleteItems() {
        setClickedDelete(!clickedDelete);
    }

    function deleteSuccess() {
        setDeleteStats(true);
        setClickedDelete(!clickedDelete);
        setTimeout(() => {
            setDeleteStats(false)}, 2000);
    }

    return (
        <div className='relative pt-[50px]  lg:pl-[270px] sm:px-[40px] px-[10px] pb-[30px]'>
            <Navbar deleteItems={deleteItems} />
            <SideBar />

            {clickedDelete ? <span className="absolute top-0 bottom-0 left-0 right-0">
                <DeleteConfirmation cancel={deleteItems} deleted={deleteSuccess} />
            </span> : null}

            {deleteStats ? <span className="absolute top-[124px] left-4 right-[15px] md:top-[143px] md:left-[162px] md:right-[124px] lg:top-[63px] lg:left-[551px] lg:right-[299px]">
                <DeleteNotification />
            </span> : null}

            <div className="flex flex-col justify-center items-center lg:w-[1062px] lg:flex-row lg:flex-wrap lg:justify-start lg:gap-x-[32px] lg:gap-y-2">
                <WishlistItem
                    id = {1}
                    imageLink="src\Wishlist-SD\images\Rectangle 12dell.png"
                    imageText="Dell Keyboard & Mouse"
                    ItemName="Dell Keyboard & Mouse"
                    ItemPrice="#25,000"
                    ItemDescription="Working equipment"
                />
                <WishlistItem
                    id = {2}
                    imageLink="src\Wishlist-SD\images\Rectangle 14GamePad.png"
                    imageText="Gaming Pad"
                    ItemName="Gaming Pad"
                    ItemPrice="#25,000"
                    ItemDescription="Games"
                />
                <WishlistItem
                    id = {3}
                    imageLink="src\Wishlist-SD\images\Rectangle 14GamePad.png"
                    imageText="Gaming Pad"
                    ItemName="Gaming Pad"
                    ItemPrice="#25,000"
                    ItemDescription="Games"
                />
            </div>
        </div>
    );
}

export default WishlistDeleteItem;
