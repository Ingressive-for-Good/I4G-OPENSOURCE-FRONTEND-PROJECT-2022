import React from "react";
import LogoutButton from "../atoms/Button/LogoutButton";
import { dashboard, products, wishlist, help } from '../images';

function SidebarDashboard() {
  
  return (
    <div className=" absolute top-0 flex font-normal pb-28 pt-20  text-gray-400 text-sm w-56 p-4 justify-center">
        <ul className="font-campton bg-gray-200">
            <li className=" absolute top-0 pt-24  text-[16px] font-semibold w-56 pl-11 p-4 text-blue-800 bg-gray-200">Menu</li>

            <li className="flex font-medium text-[18px] w-56 pl-11 p-4 bg-gray-200 gap-2 items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5 10.9V4.1C21.5 2.6 20.86 2 19.27 2H15.23C13.64 2 13 2.6 13 4.1V10.9C13 12.4 13.64 13 15.23 13H19.27C20.86 13 21.5 12.4 21.5 10.9Z" fill="#A1A4B6"/>
                <path d="M11 13.1V19.9C11 21.4 10.36 22 8.77 22H4.73C3.14 22 2.5 21.4 2.5 19.9V13.1C2.5 11.6 3.14 11 4.73 11H8.77C10.36 11 11 11.6 11 13.1Z" fill="#A1A4B6"/>
                <path d="M21.5 19.9V17.1C21.5 15.6 20.86 15 19.27 15H15.23C13.64 15 13 15.6 13 17.1V19.9C13 21.4 13.64 22 15.23 22H19.27C20.86 22 21.5 21.4 21.5 19.9Z" fill="#A1A4B6"/>
                <path d="M11 6.9V4.1C11 2.6 10.36 2 8.77 2H4.73C3.14 2 2.5 2.6 2.5 4.1V6.9C2.5 8.4 3.14 9 4.73 9H8.77C10.36 9 11 8.4 11 6.9Z" fill="#A1A4B6"/>
                </svg>
            </li>

            <li className="flex font-medium text-[17px] w-56 pl-11 p-4 bg-gray-200 gap-2 items-center">
                <img src={dashboard} alt="" className="" />
                Dashboard
            </li>
            <li className="flex font-medium text-[17px] w-56 p-4 pl-11 bg-gray-50 gap-2 items-center text-blue-700">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 12.015C2.5 6.74712 6.71 2 12.52 2C18.2 2 22.5 6.65699 22.5 11.985C22.5 18.1642 17.46 22 12.5 22C10.86 22 9.04 21.5593 7.58 20.698C7.07 20.3876 6.64 20.1572 6.09 20.3375L4.07 20.9384C3.56 21.0986 3.1 20.698 3.25 20.1572L3.92 17.9139C4.03 17.6034 4.01 17.2729 3.85 17.0125C2.99 15.4301 2.5 13.6975 2.5 12.015ZM11.2 12.015C11.2 12.7261 11.77 13.2969 12.48 13.307C13.19 13.307 13.76 12.7261 13.76 12.025C13.76 11.314 13.19 10.7431 12.48 10.7431C11.78 10.7331 11.2 11.314 11.2 12.015ZM15.81 12.025C15.81 12.7261 16.38 13.307 17.09 13.307C17.8 13.307 18.37 12.7261 18.37 12.025C18.37 11.314 17.8 10.7431 17.09 10.7431C16.38 10.7431 15.81 11.314 15.81 12.025ZM7.87 13.307C7.17 13.307 6.59 12.7261 6.59 12.025C6.59 11.314 7.16 10.7431 7.87 10.7431C8.58 10.7431 9.15 11.314 9.15 12.025C9.15 12.7261 8.58 13.2969 7.87 13.307Z" fill="#0F27BD"/>
                </svg>
                Messages
            </li>
            <li className="flex font-medium text-[17px] w-56 pl-11 p-4 bg-gray-200 gap-2 items-center">
                <img src={products} alt="" className="" />
                Products
            </li>
            <li className="flex font-medium text-[17px] w-56 pl-11 p-4 bg-gray-200 gap-2 items-center">
                <img src={wishlist} alt="" className="" />
                Wishlist
            </li>
            <li className="flex font-medium text-[17px] w-56 pl-11 p-4 bg-gray-200 gap-2 items-center">
                <img src={help} alt="" className="" />
                Help & Support
            </li>
            <li className=""><LogoutButton /></li>
        </ul>
    </div>
  )
}

export default SidebarDashboard;