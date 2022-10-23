import React, { useState } from "react";
import NavbarDashboard from "../components/molecules/NavbarDashboard";
import ProductDetailsPopup from "../components/molecules/ProductDetailsPopup";
import SidebarDashboard from "../components/molecules/SidebarDashboard";
import bannerImage from "../assets/images/dashboard-banner.png";
import userAvatar from "../assets/icons/avatar.png";
import wishlistIcon from "../assets/icons/wishlist.png";

function DashboardPage() {
  // the below handles the product details popup on click of the submit button
  const [showProductDetails, setShowProductDetails] = useState(false);

  let productDetails;
  let popupMask;

  if (showProductDetails) {
    productDetails = <ProductDetailsPopup />;

    // popupMask adds a transparent dark background once the sidenav on mobile is open.
    popupMask = (
      <div
        onClick={() => setShowProductDetails(false)}
        className="fixed top-0 left-0 bg-black-t-50 w-screen h-full"
      ></div>
    );
  }

  return (
    <div className=" md:bg-gray-50 overflow-x-hidden">
      <NavbarDashboard />
      {/* sidebar */}
      <div className="hidden md:block">
        <SidebarDashboard />
      </div>
      <div className="flex px-6 justify-between md:relative bottom-4">
        {/* Intro text */}
        <div className="font-cabinetGrotesk md:ml-64">
          <p className="font-medium text-[20px]">Hey Nora👋🏾</p>
          <h1 className="font-bold text-[28px]">Explore Tech Gadgets</h1>
        </div>
        <div className="hidden gap-4 items-center md:flex">
          {/* search bar */}
          <div className="hidden gap-2 h-10 p-2 border rounded-md items-center md:flex">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.17502 16.6833C13.3218 16.6833 16.6834 13.3217 16.6834 9.17496C16.6834 5.02822 13.3218 1.66663 9.17502 1.66663C5.02828 1.66663 1.66669 5.02822 1.66669 9.17496C1.66669 13.3217 5.02828 16.6833 9.17502 16.6833Z"
                fill="#717591"
              />
              <path
                d="M18.325 15.7917C18.05 15.2833 17.4667 15 16.6834 15C16.0917 15 15.5834 15.2417 15.2834 15.6583C14.9834 16.075 14.9167 16.6333 15.1 17.1917C15.4584 18.275 16.0834 18.5167 16.425 18.5583C16.475 18.5667 16.525 18.5667 16.5834 18.5667C16.95 18.5667 17.5167 18.4083 18.0667 17.5833C18.5084 16.9417 18.5917 16.3 18.325 15.7917Z"
                fill="#717591"
              />
            </svg>
            <form action="">
              <input
                className=" bg-gray-50 font-cabinetGrotesk p-1"
                type="text"
                placeholder="Search for gadgets"
              />
            </form>
          </div>
          {/* notification icon */}
          <div className=" bg-gray-300 rounded-full p-3">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.9516 15.6975L19.8683 13.8991C19.6408 13.4983 19.435 12.74 19.435 12.2958V9.55496C19.435 7.00912 17.94 4.80996 15.7841 3.78079C15.2208 2.78413 14.1808 2.16663 12.9891 2.16663C11.8083 2.16663 10.7466 2.80579 10.1833 3.81329C8.07081 4.86413 6.60831 7.04163 6.60831 9.55496V12.2958C6.60831 12.74 6.40248 13.4983 6.17498 13.8883L5.08081 15.6975C4.64748 16.4233 4.54998 17.225 4.82081 17.9616C5.08081 18.6875 5.69831 19.2508 6.49998 19.5216C8.60165 20.2366 10.8116 20.5833 13.0216 20.5833C15.2316 20.5833 17.4416 20.2366 19.5433 19.5325C20.3016 19.2833 20.8866 18.7091 21.1683 17.9616C21.45 17.2141 21.3741 16.3908 20.9516 15.6975Z"
                fill="#717591"
              />
              <path
                d="M16.0658 21.6775C15.6108 22.9341 14.4083 23.8333 13 23.8333C12.1442 23.8333 11.2992 23.4866 10.7033 22.8691C10.3567 22.5441 10.0967 22.1108 9.94501 21.6666C10.0858 21.6883 10.2267 21.6991 10.3783 21.7208C10.6275 21.7533 10.8875 21.7858 11.1475 21.8075C11.765 21.8616 12.3933 21.8941 13.0217 21.8941C13.6392 21.8941 14.2567 21.8616 14.8633 21.8075C15.0908 21.7858 15.3183 21.775 15.535 21.7425C15.7083 21.7208 15.8817 21.6991 16.0658 21.6775Z"
                fill="#717591"
              />
            </svg>
          </div>
          {/* User Image */}
          <img src={userAvatar} alt="user avatar" width={50} />
        </div>
      </div>

      {/* main content */}
      <div className="md:ml-64">
        <div className="flex px-6 gap-8">
          <img src={bannerImage} alt="banner" />
          <div className="hidden md:flex bg-[url('../src/assets/images/Rectangle-14GamePad.png')] bg-contain bg-no-repeat">
            <div className="flex flex-col w-[340px] text-white">
              <p className="relative rounded-r-md left-[245px] bg-orange-500 p-2 max-w-max font-campton">
                <small>HOT DEAL</small>
              </p>
              <div className="flex items-center justify-between font-cabinetGrotesk p-6 mt-28 leading-8">
                <div>
                  <p className=" font-semibold">Gaming Controller</p>
                  <p className="">₦25,000.00</p>
                </div>
                <div className=" bg-gray-200 rounded-full p-2 w-[36px] mr-4">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 10.015C0 4.74712 4.21 0 10.02 0C15.7 0 20 4.65699 20 9.98498C20 16.1642 14.96 20 10 20C8.36 20 6.54 19.5593 5.08 18.698C4.57 18.3876 4.14 18.1572 3.59 18.3375L1.57 18.9384C1.06 19.0986 0.6 18.698 0.75 18.1572L1.42 15.9139C1.53 15.6034 1.51 15.2729 1.35 15.0125C0.49 13.4301 0 11.6975 0 10.015ZM8.7 10.015C8.7 10.7261 9.27 11.2969 9.98 11.307C10.69 11.307 11.26 10.7261 11.26 10.025C11.26 9.31397 10.69 8.74311 9.98 8.74311C9.28 8.7331 8.7 9.31397 8.7 10.015ZM13.31 10.025C13.31 10.7261 13.88 11.307 14.59 11.307C15.3 11.307 15.87 10.7261 15.87 10.025C15.87 9.31397 15.3 8.74311 14.59 8.74311C13.88 8.74311 13.31 9.31397 13.31 10.025ZM5.37 11.307C4.67 11.307 4.09 10.7261 4.09 10.025C4.09 9.31397 4.66 8.74311 5.37 8.74311C6.08 8.74311 6.65 9.31397 6.65 10.025C6.65 10.7261 6.08 11.2969 5.37 11.307Z"
                      fill="#717591"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:hidden m-6 gap-2 h-10 p-4 border-2 rounded-md items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.17502 16.6833C13.3218 16.6833 16.6834 13.3217 16.6834 9.17496C16.6834 5.02822 13.3218 1.66663 9.17502 1.66663C5.02828 1.66663 1.66669 5.02822 1.66669 9.17496C1.66669 13.3217 5.02828 16.6833 9.17502 16.6833Z"
              fill="#717591"
            />
            <path
              d="M18.325 15.7917C18.05 15.2833 17.4667 15 16.6834 15C16.0917 15 15.5834 15.2417 15.2834 15.6583C14.9834 16.075 14.9167 16.6333 15.1 17.1917C15.4584 18.275 16.0834 18.5167 16.425 18.5583C16.475 18.5667 16.525 18.5667 16.5834 18.5667C16.95 18.5667 17.5167 18.4083 18.0667 17.5833C18.5084 16.9417 18.5917 16.3 18.325 15.7917Z"
              fill="#717591"
            />
          </svg>
          <form action="">
            <input
              className="font-cabinetGrotesk p-1"
              type="text"
              placeholder="Search for gadgets"
            />
          </form>
        </div>
        <div className="flex justify-between px-6 pt-6 pb-3 items-center">
          <p className=" font-cabinetGrotesk font-semibold text-[20px]">
            Categories
          </p>
          <p>
            <small className="flex gap-4">
              See all
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 1L8.5 8L1.5 15"
                  stroke="#131418"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </small>
          </p>
        </div>
        {/* Categories */}
        <div className="flex gap-4 px-6 font-campton">
          <p className="flex flex-nowrap border-2 rounded-md px-6 py-3 items-center min-w-max bg-primary-500 text-white">
            All
          </p>
          <p className="flex flex-nowrap border-2 rounded-md px-6 py-3 items-center min-w-max">
            Laptops
          </p>
          <p className="flex flex-nowrap border-2 rounded-md px-6 py-3 items-center min-w-max">
            Phones
          </p>
          <p className="flex flex-nowrap border-2 rounded-md px-6 py-3 items-center min-w-max">
            Workspace Equipments
          </p>
          <p className="flex flex-nowrap border-2 rounded-md px-6 py-3 items-center min-w-max">
            AR Equipments
          </p>
          <p className="flex flex-nowrap border-2 rounded-md px-6 py-3 items-center min-w-max">
            Merch
          </p>
          <p className="flex flex-nowrap border-2 rounded-md px-6 py-3 items-center min-w-max">
            VR Equipments
          </p>
        </div>
        {/* Products */}
        <div className="flex flex-wrap gap-12 px-6 py-6">
          {/* Product 1 */}
          <div
            onClick={() => setShowProductDetails(!showProductDetails)}
            className="border rounded-md"
          >
            <div className=" bg-[url('../src/assets/images/product-keyboard.png')] bg-contain bg-no-repeat h-full w-[300px]">
              <div className=" bg-gray-200 rounded-full p-2 w-[36px] relative left-[240px] top-[18px]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10.015C0 4.74712 4.21 0 10.02 0C15.7 0 20 4.65699 20 9.98498C20 16.1642 14.96 20 10 20C8.36 20 6.54 19.5593 5.08 18.698C4.57 18.3876 4.14 18.1572 3.59 18.3375L1.57 18.9384C1.06 19.0986 0.6 18.698 0.75 18.1572L1.42 15.9139C1.53 15.6034 1.51 15.2729 1.35 15.0125C0.49 13.4301 0 11.6975 0 10.015ZM8.7 10.015C8.7 10.7261 9.27 11.2969 9.98 11.307C10.69 11.307 11.26 10.7261 11.26 10.025C11.26 9.31397 10.69 8.74311 9.98 8.74311C9.28 8.7331 8.7 9.31397 8.7 10.015ZM13.31 10.025C13.31 10.7261 13.88 11.307 14.59 11.307C15.3 11.307 15.87 10.7261 15.87 10.025C15.87 9.31397 15.3 8.74311 14.59 8.74311C13.88 8.74311 13.31 9.31397 13.31 10.025ZM5.37 11.307C4.67 11.307 4.09 10.7261 4.09 10.025C4.09 9.31397 4.66 8.74311 5.37 8.74311C6.08 8.74311 6.65 9.31397 6.65 10.025C6.65 10.7261 6.08 11.2969 5.37 11.307Z"
                    fill="#717591"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between p-6 mt-36">
                <div className="font-cabinetGrotesk leading-[40px]">
                  <h1 className="font-semibold text-[16px]">
                    Workspace Equipment
                  </h1>
                  <p className="font-bold text-[18px]  md:text-[21px]">
                    ₦25,000.00
                  </p>
                </div>
                <div>
                  <img src={wishlistIcon} alt="icon" />
                </div>
              </div>
            </div>
          </div>
          {/* Product 2 */}
          <div
            onClick={() => setShowProductDetails(!showProductDetails)}
            className="border rounded-md"
          >
            <div className=" bg-[url('../src/assets/images/product-controller.png')] bg-contain bg-no-repeat h-full w-[300px]">
              <div className=" bg-gray-200 rounded-full p-2 w-[36px] relative left-[240px] top-[18px]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10.015C0 4.74712 4.21 0 10.02 0C15.7 0 20 4.65699 20 9.98498C20 16.1642 14.96 20 10 20C8.36 20 6.54 19.5593 5.08 18.698C4.57 18.3876 4.14 18.1572 3.59 18.3375L1.57 18.9384C1.06 19.0986 0.6 18.698 0.75 18.1572L1.42 15.9139C1.53 15.6034 1.51 15.2729 1.35 15.0125C0.49 13.4301 0 11.6975 0 10.015ZM8.7 10.015C8.7 10.7261 9.27 11.2969 9.98 11.307C10.69 11.307 11.26 10.7261 11.26 10.025C11.26 9.31397 10.69 8.74311 9.98 8.74311C9.28 8.7331 8.7 9.31397 8.7 10.015ZM13.31 10.025C13.31 10.7261 13.88 11.307 14.59 11.307C15.3 11.307 15.87 10.7261 15.87 10.025C15.87 9.31397 15.3 8.74311 14.59 8.74311C13.88 8.74311 13.31 9.31397 13.31 10.025ZM5.37 11.307C4.67 11.307 4.09 10.7261 4.09 10.025C4.09 9.31397 4.66 8.74311 5.37 8.74311C6.08 8.74311 6.65 9.31397 6.65 10.025C6.65 10.7261 6.08 11.2969 5.37 11.307Z"
                    fill="#717591"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between p-6 mt-36">
                <div className="font-cabinetGrotesk leading-[40px]">
                  <h1 className="font-semibold text-[16px]">
                    Workspace Equipment
                  </h1>
                  <p className="font-bold text-[18px]  md:text-[21px]">
                    ₦100,000.00
                  </p>
                </div>
                <div>
                  <img src={wishlistIcon} alt="icon" />
                </div>
              </div>
            </div>
          </div>
          {/* Product 3 */}
          <div
            onClick={() => setShowProductDetails(!showProductDetails)}
            className="border rounded-md"
          >
            <div className=" bg-[url('../src/assets/images/image-2macbook.png')] bg-contain bg-no-repeat h-full w-[300px]">
              <div className=" bg-gray-200 rounded-full p-2 w-[36px] relative left-[240px] top-[18px]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10.015C0 4.74712 4.21 0 10.02 0C15.7 0 20 4.65699 20 9.98498C20 16.1642 14.96 20 10 20C8.36 20 6.54 19.5593 5.08 18.698C4.57 18.3876 4.14 18.1572 3.59 18.3375L1.57 18.9384C1.06 19.0986 0.6 18.698 0.75 18.1572L1.42 15.9139C1.53 15.6034 1.51 15.2729 1.35 15.0125C0.49 13.4301 0 11.6975 0 10.015ZM8.7 10.015C8.7 10.7261 9.27 11.2969 9.98 11.307C10.69 11.307 11.26 10.7261 11.26 10.025C11.26 9.31397 10.69 8.74311 9.98 8.74311C9.28 8.7331 8.7 9.31397 8.7 10.015ZM13.31 10.025C13.31 10.7261 13.88 11.307 14.59 11.307C15.3 11.307 15.87 10.7261 15.87 10.025C15.87 9.31397 15.3 8.74311 14.59 8.74311C13.88 8.74311 13.31 9.31397 13.31 10.025ZM5.37 11.307C4.67 11.307 4.09 10.7261 4.09 10.025C4.09 9.31397 4.66 8.74311 5.37 8.74311C6.08 8.74311 6.65 9.31397 6.65 10.025C6.65 10.7261 6.08 11.2969 5.37 11.307Z"
                    fill="#717591"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between p-6 mt-36">
                <div className="font-cabinetGrotesk leading-[40px]">
                  <h1 className="font-semibold text-[16px]">
                    Workspace Equipment
                  </h1>
                  <p className="font-bold text-[18px]  md:text-[21px]">
                    ₦1,550,000.00
                  </p>
                </div>
                <div>
                  <img src={wishlistIcon} alt="icon" />
                </div>
              </div>
            </div>
          </div>
          {/* Product 4 */}
          <div className="border rounded-md">
            <div className=" bg-[url('../src/assets/images/product-controller.png')] bg-contain bg-no-repeat h-full w-[300px]">
              <div className=" bg-gray-200 rounded-full p-2 w-[36px] relative left-[240px] top-[18px]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10.015C0 4.74712 4.21 0 10.02 0C15.7 0 20 4.65699 20 9.98498C20 16.1642 14.96 20 10 20C8.36 20 6.54 19.5593 5.08 18.698C4.57 18.3876 4.14 18.1572 3.59 18.3375L1.57 18.9384C1.06 19.0986 0.6 18.698 0.75 18.1572L1.42 15.9139C1.53 15.6034 1.51 15.2729 1.35 15.0125C0.49 13.4301 0 11.6975 0 10.015ZM8.7 10.015C8.7 10.7261 9.27 11.2969 9.98 11.307C10.69 11.307 11.26 10.7261 11.26 10.025C11.26 9.31397 10.69 8.74311 9.98 8.74311C9.28 8.7331 8.7 9.31397 8.7 10.015ZM13.31 10.025C13.31 10.7261 13.88 11.307 14.59 11.307C15.3 11.307 15.87 10.7261 15.87 10.025C15.87 9.31397 15.3 8.74311 14.59 8.74311C13.88 8.74311 13.31 9.31397 13.31 10.025ZM5.37 11.307C4.67 11.307 4.09 10.7261 4.09 10.025C4.09 9.31397 4.66 8.74311 5.37 8.74311C6.08 8.74311 6.65 9.31397 6.65 10.025C6.65 10.7261 6.08 11.2969 5.37 11.307Z"
                    fill="#717591"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between p-6 mt-36">
                <div className="font-cabinetGrotesk leading-[40px]">
                  <h1 className="font-semibold text-[16px]">
                    Workspace Equipment
                  </h1>
                  <p className="font-bold text-[18px]  md:text-[21px]">
                    ₦25,000.00
                  </p>
                </div>
                <div>
                  <img src={wishlistIcon} alt="icon" />
                </div>
              </div>
            </div>
          </div>
          {/* Product 5 */}
          <div className="border rounded-md">
            <div className=" bg-[url('../src/assets/images/product-controller.png')] bg-contain bg-no-repeat h-full w-[300px]">
              <div className=" bg-gray-200 rounded-full p-2 w-[36px] relative left-[240px] top-[18px]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10.015C0 4.74712 4.21 0 10.02 0C15.7 0 20 4.65699 20 9.98498C20 16.1642 14.96 20 10 20C8.36 20 6.54 19.5593 5.08 18.698C4.57 18.3876 4.14 18.1572 3.59 18.3375L1.57 18.9384C1.06 19.0986 0.6 18.698 0.75 18.1572L1.42 15.9139C1.53 15.6034 1.51 15.2729 1.35 15.0125C0.49 13.4301 0 11.6975 0 10.015ZM8.7 10.015C8.7 10.7261 9.27 11.2969 9.98 11.307C10.69 11.307 11.26 10.7261 11.26 10.025C11.26 9.31397 10.69 8.74311 9.98 8.74311C9.28 8.7331 8.7 9.31397 8.7 10.015ZM13.31 10.025C13.31 10.7261 13.88 11.307 14.59 11.307C15.3 11.307 15.87 10.7261 15.87 10.025C15.87 9.31397 15.3 8.74311 14.59 8.74311C13.88 8.74311 13.31 9.31397 13.31 10.025ZM5.37 11.307C4.67 11.307 4.09 10.7261 4.09 10.025C4.09 9.31397 4.66 8.74311 5.37 8.74311C6.08 8.74311 6.65 9.31397 6.65 10.025C6.65 10.7261 6.08 11.2969 5.37 11.307Z"
                    fill="#717591"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between p-6 mt-36">
                <div className="font-cabinetGrotesk leading-[40px]">
                  <h1 className="font-semibold text-[16px]">
                    Workspace Equipment
                  </h1>
                  <p className="font-bold text-[18px]  md:text-[21px]">
                    ₦25,000.00
                  </p>
                </div>
                <div>
                  <img src={wishlistIcon} alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {popupMask}
          {productDetails}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
