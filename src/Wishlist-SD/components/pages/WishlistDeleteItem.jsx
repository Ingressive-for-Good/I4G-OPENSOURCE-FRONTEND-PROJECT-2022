import React from "react";
import SideBar from "../molecules/SideBar";
import Navbar from "../molecules/Navbar";
import WishlistItem from "../molecules/WishlistItem";


function WishlistDeleteItem() {
    return (
        <div className='relative pt-[50px]  lg:pl-[270px] sm:px-[40px] px-[10px] pb-[30px]'>
            <Navbar />
            <SideBar />
            <WishlistItem />
        </div>
    );
}

export default WishlistDeleteItem;
