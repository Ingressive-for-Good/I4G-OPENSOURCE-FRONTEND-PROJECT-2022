import React from 'react';
import MobileNav from '../../../components/atoms/MobileNav';
import Search from '../../../assets/icons/search-icon.svg';
import Notification from '../../../assets/icons/notification.svg';
import Avatar from '../../../assets/icons/avatar.svg';
import MobileBanner from '../../../assets/images/mobile-user-profile-banner.svg';
import IpadBanner from '../../../assets/images/ipad-user-profile-banner.svg';
import Banner from '../../../assets/images/user-profile-banner.svg';

function AdminUsersProfile() {
  return (
    <div className="pt-11 pb-9 md:pt-12 lg:py-11 lg:pr-11 xl:pr-16">
      <div className="w-full flex lg:hidden justify-between items-center">
        <h1 className="font-cabinetGrotesk text-2xl font-bold text-primary-500 ">
          tech<span className="text-secondary-500">mart</span>
        </h1>

        <MobileNav />
      </div>

      <div className="flex justify-between items-center w-full font-cabinetGrotesk pt-4 pb-8 md:pt-7 lg:pt-0 lg:pb-10">
        <div className="">
          <p className="font-medium text-neutral-800 md:text-xl">
            Welcome Back, Admin👋🏾
          </p>
          <p className="mt-2 font-bold text-neutral-900 text-xl md:text-3xl">
            User Profile
          </p>
        </div>

        <div className="hidden lg:flex justify-end items-center w-2/5">
          <div className="relative">
            <img src={Search} alt="" className="absolute bottom-5 left-4" />
            <input
              className="border border-neutral-500 mr-4 rounded-lg py-4 pl-11 w-80 placeholder:font-medium placeholder:font-campton placeholder:text-sm placeholder:text-neutral-600"
              type="text"
              placeholder="Search for users, sub-admins"
            />
          </div>

          <img src={Notification} alt="" className="mr-4" />

          <img src={Avatar} alt="" />
        </div>
      </div>

      <div className="relative">
        <img src={MobileBanner} alt="" className="w-full md:hidden" />
        <img
          src={IpadBanner}
          alt=""
          className="hidden w-full md:block lg:hidden"
        />
        <img src={Banner} alt="" className="hidden w-full lg:block" />
        <img
          src={Avatar}
          alt=""
          className="absolute w-24 h-24 md:w-40 md:h-40 lg:w-36 lg:h-36 xl:w-48 xl:h-48 -bottom-1/4 md:-bottom-1/2 left-4 xl:left-6"
        />
      </div>

      <div className="pt-24 pb-8 md:pt-36 md:pb-14 lg:pt-40 lg:pb-16 font-campton">
        <div>
          <p className="text-primary-600 font-semibold text-xl">
            Personal Information
          </p>
          <div className="md:flex justify-between pt-4 pb-10">
            <div className="md:w-3/5">
              <p className="font-medium text-neutral-900 lg:text-lg">Name</p>
              <p className="text-neutral-800 pt-2">Nora Eboesomi</p>
              <p className="font-medium text-neutral-900 pt-4 lg:text-lg">
                Email Address
              </p>
              <p className="text-neutral-800 pt-2">noraeboesomi@gmail.com</p>
            </div>

            <div className="md:w-2/5 pt-4 md:p-0">
              <p className="font-medium text-neutral-900 lg:text-lg">
                Phone Number
              </p>
              <p className="text-neutral-800 pt-2">+2348149084656</p>
              <p className="font-medium text-neutral-900 pt-4 lg:text-lg">
                Location
              </p>
              <p className="text-neutral-800 pt-2">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-primary-600 font-semibold text-xl">
            Account Details
          </p>
          <div className="md:flex justify-between pt-4 pb-6 md:pb-8 lg:pb-9">
            <div className="md:w-3/5">
              <p className="font-medium text-neutral-900 lg:text-lg">
                Account Number
              </p>
              <p className="text-neutral-800 pt-2">000-000-0000</p>
              <p className="font-medium text-neutral-900 pt-4 lg:text-lg">
                Account Name
              </p>
              <p className="text-neutral-800 pt-2">Nora Eboesomi</p>
            </div>

            <div className="md:w-2/5 pt-4 md:p-0">
              <p className="font-medium text-neutral-900 lg:text-lg">Bank</p>
              <p className="text-neutral-800 pt-2">Central Bank of Nigeria</p>
            </div>
          </div>
        </div>
        <div className="text-neutral-900">
          <p className="font-cabinetGrotesk font-bold text-xl md:text-3xl">
            User’s Products
          </p>
          <p className="pt-4 md:text-lg">No products available</p>
        </div>
      </div>

      <div className="lg:flex justify-end font-campton text-center font-semibold lg:text-lg">
        <button className="block w-full lg:w-1/4 lg:mr-16 text-error-500 border-2 rounded-lg border-error-500 py-4 md:py-5 lg:py-4">
          Delete Account
        </button>
        <button className="block w-full lg:w-1/4 mt-4 lg:m-0 rounded-lg bg-primary-500 text-neutral-50 py-4 md:py-5 lg:py-4">
          Suspend Account
        </button>
      </div>
    </div>
  );
}

export default AdminUsersProfile;
