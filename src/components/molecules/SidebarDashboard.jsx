import React from "react";
import LogoutButton from "../atoms/Button/LogoutButton";

// The function below displays the side navigation on wide screens.
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.0999 6.94C20.0999 7.48 19.8099 7.97 19.3499 8.22L17.6099 9.16L16.1299 9.95L13.0599 11.61C12.7299 11.79 12.3699 11.88 11.9999 11.88C11.6299 11.88 11.2699 11.79 10.9399 11.61L4.6499 8.22C4.1899 7.97 3.8999 7.48 3.8999 6.94C3.8999 6.4 4.1899 5.91 4.6499 5.66L6.6199 4.6L8.1899 3.75L10.9399 2.27C11.5999 1.91 12.3999 1.91 13.0599 2.27L19.3499 5.66C19.8099 5.91 20.0999 6.4 20.0999 6.94Z" fill="#A1A4B6"/>
                <path d="M9.90021 12.79L4.05022 9.87002C3.60021 9.64002 3.08021 9.67002 2.65021 9.93002C2.22021 10.19 1.97021 10.65 1.97021 11.15V16.68C1.97021 17.64 2.50021 18.5 3.36021 18.93L9.21021 21.85C9.41021 21.95 9.63022 22 9.85021 22C10.1102 22 10.3702 21.93 10.6002 21.78C11.0302 21.52 11.2802 21.06 11.2802 20.56V15.03C11.2902 14.08 10.7602 13.22 9.90021 12.79Z" fill="#A1A4B6"/>
                <path d="M22.03 11.15V16.68C22.03 17.63 21.5 18.49 20.64 18.92L14.79 21.85C14.59 21.95 14.37 22 14.15 22C13.89 22 13.63 21.93 13.39 21.78C12.97 21.52 12.71 21.06 12.71 20.56V15.04C12.71 14.08 13.24 13.22 14.1 12.79L16.25 11.72L17.75 10.97L19.95 9.87C20.4 9.64 20.92 9.66 21.35 9.93C21.77 10.19 22.03 10.65 22.03 11.15Z" fill="#A1A4B6"/>
                <path d="M17.6101 9.16L16.1301 9.95L6.62012 4.6L8.19012 3.75L17.3701 8.93C17.4701 8.99 17.5501 9.07 17.6101 9.16Z" fill="#A1A4B6"/>
                <path d="M17.75 10.97V13.24C17.75 13.65 17.41 13.99 17 13.99C16.59 13.99 16.25 13.65 16.25 13.24V11.72L17.75 10.97Z" fill="#A1A4B6"/>
                </svg>
                Products
            </li>
            <li className="flex font-medium text-[17px] w-56 pl-11 p-4 bg-gray-200 gap-2 items-center">
                <img src="/wishlistIcon.png" alt="" />
                Wishlist
            </li>
            <li className="flex font-medium text-[17px] w-56 pl-11 p-4 bg-gray-200 gap-2 items-center">
                <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="13.5" cy="13" r="12" fill="#A1A4B6" stroke="#A1A4B6" stroke-width="2"/>
                <path d="M14.067 15.048V14.668C14.067 12.312 17.639 12.198 17.639 9.291C17.639 7.125 16.1 6.08 13.668 6.08C10.818 6.08 8.861 7.828 9.108 10.241L10.913 11.533C10.628 9.215 11.825 8.113 13.516 8.113C14.77 8.113 15.34 8.664 15.34 9.5C15.34 11.419 12.053 11.609 12.053 14.497V15.048H14.067ZM14.257 19V16.302H11.825V19H14.257Z" fill="#FAFAFB"/>
                </svg>
                Help & Support
            </li>
            <li className=""><LogoutButton /></li>
        </ul>
    </div>
  )
}

export default SidebarDashboard;