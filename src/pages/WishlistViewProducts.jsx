import React, { useState } from "react";
import NavbarDashboard from "../components/molecules/NavbarDashboard";
import DashboardSelect from "../components/molecules/DashboardSelect";
import SidebarWishlist from "../components/molecules/SidebarWishlist";

function WishlistViewProducts() {
    const [showSelect, setShowSelect] = useState(false)

    let select

    if(showSelect){
        select = <DashboardSelect />
    }

  return (
    <div className="md:bg-gray-50">
        <NavbarDashboard />
        {/* Sidebar */}
        <div className="hidden md:block">
            <SidebarWishlist/>
        </div>
        <div className="flex px-6 justify-between md:relative bottom-4">
            {/* Intro text */}
            <div className="font-cabinetGrotesk md:ml-64">
                <p className="font-medium text-[20px]">Hey Nora👋🏾</p>
                <h1 className="font-bold text-[28px]">View Items in your Wishlist</h1>
            </div>
            <div className="hidden gap-4 items-center md:flex">
                {/* search bar */}
            <div className="hidden gap-2 h-10 p-2 border rounded-md items-center md:flex">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.17502 16.6833C13.3218 16.6833 16.6834 13.3217 16.6834 9.17496C16.6834 5.02822 13.3218 1.66663 9.17502 1.66663C5.02828 1.66663 1.66669 5.02822 1.66669 9.17496C1.66669 13.3217 5.02828 16.6833 9.17502 16.6833Z" fill="#717591"/>
                    <path d="M18.325 15.7917C18.05 15.2833 17.4667 15 16.6834 15C16.0917 15 15.5834 15.2417 15.2834 15.6583C14.9834 16.075 14.9167 16.6333 15.1 17.1917C15.4584 18.275 16.0834 18.5167 16.425 18.5583C16.475 18.5667 16.525 18.5667 16.5834 18.5667C16.95 18.5667 17.5167 18.4083 18.0667 17.5833C18.5084 16.9417 18.5917 16.3 18.325 15.7917Z" fill="#717591"/>
                </svg>
                <form action="">
                    <input className=" bg-gray-50 font-cabinetGrotesk p-1" type="text" placeholder="Search for gadgets" />
                </form>
            </div>
            {/* notification icon */}
            <div className=" bg-gray-300 rounded-full p-3">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9516 15.6975L19.8683 13.8991C19.6408 13.4983 19.435 12.74 19.435 12.2958V9.55496C19.435 7.00912 17.94 4.80996 15.7841 3.78079C15.2208 2.78413 14.1808 2.16663 12.9891 2.16663C11.8083 2.16663 10.7466 2.80579 10.1833 3.81329C8.07081 4.86413 6.60831 7.04163 6.60831 9.55496V12.2958C6.60831 12.74 6.40248 13.4983 6.17498 13.8883L5.08081 15.6975C4.64748 16.4233 4.54998 17.225 4.82081 17.9616C5.08081 18.6875 5.69831 19.2508 6.49998 19.5216C8.60165 20.2366 10.8116 20.5833 13.0216 20.5833C15.2316 20.5833 17.4416 20.2366 19.5433 19.5325C20.3016 19.2833 20.8866 18.7091 21.1683 17.9616C21.45 17.2141 21.3741 16.3908 20.9516 15.6975Z" fill="#717591"/>
                    <path d="M16.0658 21.6775C15.6108 22.9341 14.4083 23.8333 13 23.8333C12.1442 23.8333 11.2992 23.4866 10.7033 22.8691C10.3567 22.5441 10.0967 22.1108 9.94501 21.6666C10.0858 21.6883 10.2267 21.6991 10.3783 21.7208C10.6275 21.7533 10.8875 21.7858 11.1475 21.8075C11.765 21.8616 12.3933 21.8941 13.0217 21.8941C13.6392 21.8941 14.2567 21.8616 14.8633 21.8075C15.0908 21.7858 15.3183 21.775 15.535 21.7425C15.7083 21.7208 15.8817 21.6991 16.0658 21.6775Z" fill="#717591"/>
                </svg>
            </div>
            {/* User Image */}
            <img src="/src/assets/icons/avatar.png" alt="user avatar" width={50}/>
            </div>
        </div>
        {/* main content */}
        <div className="flex px-6 pb-3 pt-6 justify-between md:ml-64 leading-tight">
            <p className="font-campton">3 item(s)</p>
            {/* options svg */}
            <button onClick={() => setShowSelect(!showSelect)} >
                <svg className="mr-4" width="4" height="20" viewBox="0 0 4 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.09091 3.18182C2.6934 3.18182 3.18182 2.6934 3.18182 2.09091C3.18182 1.48842 2.6934 1 2.09091 1C1.48842 1 1 1.48842 1 2.09091C1 2.6934 1.48842 3.18182 2.09091 3.18182Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.09091 11.1818C2.6934 11.1818 3.18182 10.6934 3.18182 10.0909C3.18182 9.48842 2.6934 9 2.09091 9C1.48842 9 1 9.48842 1 10.0909C1 10.6934 1.48842 11.1818 2.09091 11.1818Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.09091 19.1818C2.6934 19.1818 3.18182 18.6934 3.18182 18.0909C3.18182 17.4884 2.6934 17 2.09091 17C1.48842 17 1 17.4884 1 18.0909C1 18.6934 1.48842 19.1818 2.09091 19.1818Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        <div>
            { select }
        </div>
        <hr className="mx-6 border-black md:relative md:left-10  md:ml-60 md:mr-20"/>
        {/* Products */}
        <div className="flex flex-wrap md:ml-64">
            {/* Product 1 */}
            <div className=" gap-4 border-2 rounded-md m-6 p-6 bg-gray-50 w-[490px] sm:flex md:bg-none">
                <div>
                    <img src="/src/assets/images/Rectangle 12dell.png" alt="product-image" width={230}/>
                </div>
                <div className="font-cabinetGrotesk leading-[40px]">
                    <p className="font-semibold text-[16px]">Dell Keyboard & Mouse.</p>
                    <h1 className="font-bold text-[18px]  md:text-[21px]">₦25,000.00</h1>
                    <p className="font-campton font-medium text-[15px] md:text-[16px] text-gray-500">Workspace Equipment.</p>
                    <a className="underline text-primary-500 font-bold text-[16px] md:text-[18px]" href="#"><p>View Details</p></a>
                </div>
            </div>
            {/* Product 2 */}
            <div className=" gap-4 border-2 rounded-md m-6 p-6 bg-gray-50 w-[490px] sm:flex md:bg-none">
                <div>
                    <img src="/src/assets/images/Rectangle 14GamePad.png" alt="product-image" width={230}/>
                </div>
                <div className="font-cabinetGrotesk leading-[40px]">
                    <p className=" font-semibold text-[16px]">Game Controller.</p>
                    <h1 className="font-bold text-[18px]  md:text-[21px]">₦25,000.00</h1>
                    <p className="font-campton font-medium text-[15px] md:text-[16px] text-gray-500">Games.</p>
                    <a className="underline text-primary-500 font-bold text-[16px] md:text-[18px]" href="#"><p>View Details</p></a>
                </div>
            </div>
            {/* Product 3 */}
            <div className=" gap-4 border-2 rounded-md m-6 p-6 bg-gray-50 w-[490px] sm:flex md:bg-none">
                <div>
                    <img src="/src/assets/images/image 2macbook.png" alt="product-image" width={230}/>
                </div>
                <div className="font-cabinetGrotesk leading-[40px]">
                    <p className="font-semibold text-[16px]">MacBook Pro 14” M1 Chip.</p>
                    <h1 className="font-bold text-[18px]  md:text-[21px]">₦25,000.00</h1>
                    <p className="font-campton font-medium text-[15px] md:text-[16px] text-gray-500">Laptop.</p>
                    <a className="underline text-primary-500 font-bold text-[16px] md:text-[18px]" href="#"><p>View Details</p></a>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default WishlistViewProducts;