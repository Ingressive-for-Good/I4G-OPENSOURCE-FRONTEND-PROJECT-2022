import React, { useState } from 'react';
import MobileNav from '../components/atoms/MobileNav';
import Search from '../assets/icons/search-icon.svg';
import Notification from '../assets/icons/notification.svg';
import Avatar from '../assets/icons/avatar.svg';
import MobileBanner from '../assets/images/mobile-user-profile-banner.svg';
import IpadBanner from '../assets/images/ipad-user-profile-banner.svg';
import Banner from '../assets/images/user-profile-banner.svg';
import Img1 from '../assets/images/product-keyboard.png';
import Img2 from '../assets/images/product-controller.png';
import Img3 from '../assets/images/image-2macbook.png';
import Img4 from '../assets/images/setup.png';
import Edit from '../assets/icons/edit.png';
import Delete from '../assets/icons/delete.png';

function AdminUsersProfileWithProducts() {
    const [show, setShow] = useState('hidden');
    const [show2, setShow2] = useState('hidden');
    const [show3, setShow3] = useState('hidden');
    const [show4, setShow4] = useState('hidden');

    return (
        <div className='px-5 pt-11 pb-9 md:px-20 md:pt-12 lg:py-11 lg:pr-11 lg:pl-56 xl:pl-72 xl:pr-16 xl-py-14'>
            <div className='w-full flex lg:hidden justify-between items-center'>
                <h1 className='font-cabinetGrotesk text-2xl font-bold text-primary-500 '>
                    tech<span className='text-secondary-500'>mart</span>
                </h1>

                <MobileNav />
            </div>

            <div className='flex justify-between items-center w-full font-cabinetGrotesk pt-4 pb-8 md:pt-7 lg:pt-0 lg:pb-10'>
                <div className=''>
                    <p className='font-medium text-neutral-800 md:text-xl'>
                        Welcome Back, Admin👋🏾
                    </p>
                    <p className='mt-2 font-bold text-neutral-900 text-xl md:text-3xl'>
                        User Profile
                    </p>
                </div>

                <div className='hidden lg:flex justify-end items-center w-2/5'>
                    <div className='relative'>
                        <img
                            src={Search}
                            alt=''
                            className='absolute bottom-5 left-4'
                        />
                        <input
                            className='border border-neutral-500 mr-4 rounded-lg py-4 pl-11 w-80 placeholder:font-medium placeholder:font-campton placeholder:text-sm placeholder:text-neutral-600'
                            type='text'
                            placeholder='Search for users, sub-admins'
                        />
                    </div>

                    <img src={Notification} alt='' className='mr-4' />

                    <img src={Avatar} alt='' />
                </div>
            </div>

            <div className='relative'>
                <img src={MobileBanner} alt='' className='w-full md:hidden' />
                <img
                    src={IpadBanner}
                    alt=''
                    className='hidden w-full md:block lg:hidden'
                />
                <img src={Banner} alt='' className='hidden w-full lg:block' />
                <img
                    src={Avatar}
                    alt=''
                    className='absolute w-24 h-24 md:w-40 md:h-40 lg:w-36 lg:h-36 xl:w-48 xl:h-48 -bottom-1/4 md:-bottom-1/2 left-4 xl:left-6'
                />
            </div>

            <div className='pt-24 pb-8 md:pt-36 md:pb-16 lg:pt-40 lg:pb-14 font-campton'>
                <div>
                    <p className='text-primary-600 font-semibold text-xl'>
                        Personal Information
                    </p>
                    <div className='md:flex justify-between pt-4 pb-10'>
                        <div className='md:w-3/5'>
                            <p className='font-medium text-neutral-900 lg:text-lg'>
                                Name
                            </p>
                            <p className='text-neutral-800 pt-2'>
                                Nora Eboesomi
                            </p>
                            <p className='font-medium text-neutral-900 pt-4 lg:text-lg'>
                                Email Address
                            </p>
                            <p className='text-neutral-800 pt-2'>
                                noraeboesomi@gmail.com
                            </p>
                        </div>

                        <div className='md:w-2/5 pt-4 md:p-0'>
                            <p className='font-medium text-neutral-900 lg:text-lg'>
                                Phone Number
                            </p>
                            <p className='text-neutral-800 pt-2'>
                                +2348149084656
                            </p>
                            <p className='font-medium text-neutral-900 pt-4 lg:text-lg'>
                                Location
                            </p>
                            <p className='text-neutral-800 pt-2'>
                                Lagos, Nigeria
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-primary-600 font-semibold text-xl'>
                        Account Details
                    </p>
                    <div className='md:flex justify-between pt-4 pb-6 md:pb-8 lg:pb-9'>
                        <div className='md:w-3/5'>
                            <p className='font-medium text-neutral-900 lg:text-lg'>
                                Account Number
                            </p>
                            <p className='text-neutral-800 pt-2'>
                                000-000-0000
                            </p>
                            <p className='font-medium text-neutral-900 pt-4 lg:text-lg'>
                                Account Name
                            </p>
                            <p className='text-neutral-800 pt-2'>
                                Nora Eboesomi
                            </p>
                        </div>

                        <div className='md:w-2/5 pt-4 md:p-0'>
                            <p className='font-medium text-neutral-900 lg:text-lg'>
                                Bank
                            </p>
                            <p className='text-neutral-800 pt-2'>
                                Central Bank of Nigeria
                            </p>
                        </div>
                    </div>
                </div>
                <div className='text-neutral-900'>
                    <p className='font-cabinetGrotesk font-bold text-xl md:text-3xl'>
                        User’s Products
                    </p>

                    <div className='pt-4 md:flex justify-between flex-wrap	'>
                        <div className='bg-neutral-50 w-full md:w-[47%] lg:w-[32%] border-2 rounded-lg border-neutral-300'>
                            <div className='relative'>
                                <img
                                    src={Img1}
                                    alt=''
                                    className='object-cover w-full'
                                />
                                <button
                                    className='absolute left-[82%] md:left-[80%] bottom-[72%] md:bottom-[70%]'
                                    onClick={(e) => {
                                        if (show === 'hidden') {
                                            setShow('block');
                                        } else {
                                            setShow('hidden');
                                        }
                                    }}>
                                    <img
                                        src={Edit}
                                        alt=''
                                        className='relative'
                                    />
                                    <div className={show}>
                                        <div className='w-[170px] md:w-[209px] absolute right-[0%] py-5 rounded-lg bg-neutral-50 border-2 border-neutral-500 font-campton  font-semibold text-neutral-900 text-sm md:text-lg'>
                                            Mark As Unavailable
                                        </div>
                                    </div>
                                </button>
                            </div>

                            <div className='relative p-6 font-campton bg-neutral-50 rounded-b-lg'>
                                <button>
                                    <img
                                        src={Delete}
                                        alt=''
                                        className='absolute left-[85%] md:left-[82%] top-[40%]'
                                    />
                                </button>
                                <p className='font-semibold text-neutral-700 text-lg'>
                                    Workspace Equipment
                                </p>
                                <p className='mt-2.5 lg:hidden font-medium text-neutral-600 text-lg'>
                                    Product Category
                                </p>
                                <p className='mt-2.5 font-cabinetGrotesk font-bold text-neutral-900 text-xl'>
                                    ₦25,000.00
                                </p>
                                <p className='mt-2.5 font-medium text-secondary-700 text-lg'>
                                    Unavailable
                                </p>
                            </div>
                        </div>

                        <div className='bg-neutral-50 mt-6 md:m-0 md:w-[47%] lg:w-[32%] w-full border-2 rounded-lg border-neutral-300'>
                            <div className='relative'>
                                <img
                                    src={Img2}
                                    alt=''
                                    className='object-cover w-full'
                                />
                                <button
                                    className='absolute left-[82%] md:left-[80%] bottom-[72%] md:bottom-[70%]'
                                    onClick={() => {
                                        if (show2 === 'hidden') {
                                            setShow2('block');
                                        } else {
                                            setShow2('hidden');
                                        }
                                    }}>
                                    <img
                                        src={Edit}
                                        alt=''
                                        className='relative'
                                    />
                                    <div className={show2}>
                                        <div className='w-[170px] md:w-[209px] absolute right-[0%] py-5 rounded-lg bg-neutral-50 border-2 border-neutral-500 font-campton  font-semibold text-neutral-900 text-sm md:text-lg'>
                                            Mark As Unavailable
                                        </div>
                                    </div>
                                </button>
                            </div>

                            <div className='relative p-6 font-campton bg-neutral-50 rounded-b-lg'>
                                <button>
                                    <img
                                        src={Delete}
                                        alt=''
                                        className='absolute left-[85%] md:left-[82%] top-[40%]'
                                    />
                                </button>
                                <p className='font-semibold text-neutral-700 text-lg'>
                                    Gaming Pad
                                </p>
                                <p className='mt-2.5 lg:hidden font-medium text-neutral-600 text-lg'>
                                    Product Category
                                </p>
                                <p className='mt-2.5 font-cabinetGrotesk font-bold text-neutral-900 text-xl'>
                                    ₦100,000.00
                                </p>
                                <p className='mt-2.5 font-medium text-success-600 text-lg'>
                                    Available
                                </p>
                            </div>
                        </div>

                        <div className=' mt-6 lg:m-0 md:w-[47%] lg:w-[32%] bg-neutral-50 w-full border-2 rounded-lg border-neutral-300'>
                            <div className='relative p-11  bg-neutral-100 rounded-t-lg'>
                                <img src={Img3} alt='' className='mx-auto' />
                                <button
                                    className='absolute left-[82%] md:left-[80%] bottom-[72%] md:bottom-[70%]'
                                    onClick={() => {
                                        if (show3 === 'hidden') {
                                            setShow3('block');
                                        } else {
                                            setShow3('hidden');
                                        }
                                    }}>
                                    <img
                                        src={Edit}
                                        alt=''
                                        className='relative'
                                    />
                                    <div className={show3}>
                                        <div className='w-[170px] md:w-[209px] absolute right-[0%] py-5 rounded-lg bg-neutral-50 border-2 border-neutral-500 font-campton  font-semibold text-neutral-900 text-sm md:text-lg'>
                                            Mark As Unavailable
                                        </div>
                                    </div>
                                </button>
                            </div>

                            <div className='relative p-6 font-campton bg-neutral-50 rounded-b-lg'>
                                <button>
                                    <img
                                        src={Delete}
                                        alt=''
                                        className='absolute left-[85%] md:left-[82%] top-[40%]'
                                    />
                                </button>
                                <p className='font-semibold text-neutral-700 text-lg'>
                                    MacBook Pro 14” M1 Chip
                                </p>
                                <p className='mt-2.5 lg:hidden font-medium text-neutral-600 text-lg'>
                                    Product Category
                                </p>
                                <p className='mt-2.5 font-cabinetGrotesk font-bold text-neutral-900 text-xl'>
                                    ₦1,550,000.00
                                </p>
                                <p className='mt-2.5 font-medium text-success-600 text-lg'>
                                    Available
                                </p>
                            </div>
                        </div>

                        <div className='bg-neutral-50 lg:hidden mt-6 md:w-[47%] w-full border-2 rounded-lg border-neutral-300'>
                            <div className='relative'>
                                <img
                                    src={Img4}
                                    alt=''
                                    className='object-cover w-full'
                                />
                                <button
                                    className='absolute left-[82%] md:left-[80%] bottom-[72%] md:bottom-[70%]'
                                    onClick={() => {
                                        if (show4 === 'hidden') {
                                            setShow4('block');
                                        } else {
                                            setShow4('hidden');
                                        }
                                    }}>
                                    <img
                                        src={Edit}
                                        alt=''
                                        className='relative'
                                    />
                                    <div className={show4}>
                                        <div className='w-[170px] md:w-[209px] absolute right-[0%] py-5 rounded-lg bg-neutral-50 border-2 border-neutral-500 font-campton  font-semibold text-neutral-900 text-sm md:text-lg'>
                                            Mark As Unavailable
                                        </div>
                                    </div>
                                </button>
                            </div>

                            <div className='relative p-6 font-campton bg-neutral-50 rounded-b-lg'>
                                <button>
                                    <img
                                        src={Delete}
                                        alt=''
                                        className='absolute left-[85%] md:left-[82%] top-[40%]'
                                    />
                                </button>
                                <p className='font-semibold text-neutral-700 text-lg'>
                                    HP Notebook 16
                                </p>
                                <p className='mt-2.5 lg:hidden font-medium text-neutral-600 text-lg'>
                                    Product Category
                                </p>
                                <p className='mt-2.5 font-cabinetGrotesk font-bold text-neutral-900 text-xl'>
                                    ₦25,000.00
                                </p>
                                <p className='mt-2.5 font-medium text-success-600 text-lg'>
                                    Available
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:flex justify-end font-campton text-center font-semibold lg:text-lg'>
                <button className='block w-full lg:w-1/4 lg:mr-16 text-error-500 border-2 rounded-lg border-error-500 py-4 md:py-5 lg:py-4'>
                    Delete Account
                </button>
                <button className='block w-full lg:w-1/4 mt-4 lg:m-0 rounded-lg bg-primary-500 text-neutral-50 py-4 md:py-5 lg:py-4'>
                    Suspend Account
                </button>
            </div>
        </div>
    );
}

export default AdminUsersProfileWithProducts;
