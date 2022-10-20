import React from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import closeMenuIcon from '../assets/icons/close-icon.png';

import menuIcon from '../assets/icons/menu-icon.svg';
import './home.css';
import wavyArrow from '../assets/icons/landingpage__wavy-arrow.svg';
import wavyUnderline from '../assets/icons/landingpage__wavy-underline.svg';
import bestQuality from '../assets/icons/landingpage__best-quality.svg';
import meetnconnect from '../assets/icons/landingpage__meetnconnect.svg';
import support from '../assets/icons/landingpage__support.svg';
import wavyDashed from '../assets/icons/landingpage__wavy-dashed.svg';
import keyboard from '../assets/images/product-keyboard.png';
import controller from '../assets/images/product-controller.png';
import cartIcon from '../assets/icons/cart-icon.svg';
import profileImg from '../assets/images/landingpage__client-profile-img.svg';
import p2p from '../assets/icons/landingpage__p2p.svg';
import heroClipArtLeft from '../assets/images/landingpage-hero-clipart-left.svg';
import heroClipArtRight from '../assets/images/landingpage-hero-clipart-right.svg';
import logo from '../assets/icons/logo.svg';
import facebook from '../assets/icons/footer-fb.svg';
import twitter from '../assets/icons/twitter.svg';
import instagram from '../assets/icons/instagram.svg';
import linkedin from '../assets/icons/linkedin.svg';
import upArrow from '../assets/icons/up-arrow.svg';

function App() {
    const toggleMenu = () => {
        const nav = document.getElementById('nav');
        const body = document.getElementById('body');
        // var navItems = document.querySelectorAll("nav a")
        body.style.overflowY = 'hidden';
        nav.classList.toggle('hidden');
    };
    return (
        <>
            <div
                id='body'
                className='text-neutral-900 font-campton scroll-smooth'>
                {/* header and navigation */}
                <header
                    id='hero'
                    className='relative bg-primary-50 px-8 py-9 flex items-center justify-between'>
                    <h1 className='font-cabinetGrotesk text-primary-500 font-bold text-2xl'>
                        tech
                        <span className='text-secondary-500'>mart</span>
                    </h1>
                    <div className='border-primary-500 border rounded-xl p-3 lg:hidden'>
                        <img
                            className=''
                            onClick={toggleMenu}
                            id='hamburger'
                            src={menuIcon}
                            alt=''
                        />
                    </div>
                    <nav
                        id='nav'
                        className='h-screen lg:h-fit w-screen lg:w-fit flex hidden absolute lg:relative z-100 top-0 lg:top-unset left-0 lg:left-unset bg-white lg:bg-transparent lg:flex flex-col lg:flex-row space-y-8 lg:space-y-0 justify-center items-center lg:space-x-5 text-neutral-700'>
                        <img
                            className='lg:hidden absolute top-12 right-16'
                            onClick={toggleMenu}
                            id='hamburger'
                            src={closeMenuIcon}
                            alt=''
                        />
                        <a href=''>Home</a>
                        <a href='#howitworks'>How it Works</a>
                        <a href='#marketplace'>Market Place</a>
                        <a href='#contactUs'>Contact Us</a>
                        <div className='mx-4 space-x-4'>
                            <Link
                                className='text-primary-500 font-medium'
                                to='/login'>
                                Log In
                            </Link>
                            <Link
                                className='text-white text-sm rounded-lg px-5 py-3 bg-primary-500'
                                to='/create-account'>
                                Create an account
                            </Link>
                        </div>
                    </nav>
                </header>
                <main>
                    {/* hero section */}
                    <section className='px-[10%] py-4 text-center flex items-center justify-between bg-primary-50'>
                        <div className='clipart-left'>
                            <img
                                src={heroClipArtLeft}
                                alt=''
                                className='w-[350px] lg:w-[180px] -rotate-12 hidden lg:block md:block md:w-[150px] lg:mt-6'
                            />
                        </div>
                        <div className='main-txt'>
                            <h1 className='font-cabinetGrotesk font-bold text-xl sm:text-4xl lg:text-[2.5rem] lg:leading-[1.2] my-3 sm:max-w-md md:max-w-lg sm:mx-auto'>
                                <span className='text-secondary-500'>
                                    {' '}
                                    One-stop shop
                                </span>{' '}
                                for all things tech - buy, Sell & Swap Quality
                                Items.
                            </h1>
                            <p className='text-neutral-700 font-campton my-5 md:max-w-xl mx-auto'>
                                An online marketplace for techies to buy, sell,
                                and swap items they don't use, as well as
                                connect with other creatives around the world.
                            </p>
                            <div className='sm:w-fit sm:mx-auto sm:flex sm:justify-center sm:items-center md:my-8'>
                                <Link
                                    to='/create-account'
                                    className='font-cabinetGrotesk bg-primary-500 text-white px-5 py-4 rounded-lg sm:h-fit'>
                                    Create an account
                                </Link>
                                <div className='w-fit ml-[5rem] lg:ml-2 md:ml-2 text-center ml-20 px-6 py-3 rounded-lg my-2 hover:bg-primary-100 ml-4 transition-all'>
                                    <a
                                        href=''
                                        className='font-cabinetGrotesk text-primary-500 font-semibold'>
                                        Learn More
                                    </a>
                                    <img
                                        className='mx-auto'
                                        src={wavyArrow}
                                        alt=''
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='clipart-right'>
                            <img
                                src={heroClipArtRight}
                                alt=''
                                className='w-[150px] hidden lg:block md:block rotate-12 lg:w-[180px] md:w-[150px] lg:mt-6'
                            />
                        </div>
                    </section>

                    {/* why choose us? */}
                    <section className='w-fit mx-auto px-6 py-3 rounded-lg my-5 text-center'>
                        <h1 className='font-cabinetGrotesk text-2xl font-semibold'>
                            Why Choose Us?
                        </h1>
                        <img
                            className='mx-auto mb-8'
                            src={wavyUnderline}
                            alt=''
                        />
                        <p className='text-neutral-700'>
                            Take control of all your ecommerce transactions
                        </p>

                        {/* reasons to choose us */}
                        <div className='space-y-4 sm:space-y-0 my-8 sm:grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:w-5/6 lg:mx-auto'>
                            <div className='bg-primary-50 rounded-lg p-6 max-w-xs mx-auto'>
                                <img
                                    className='mx-auto'
                                    src={bestQuality}
                                    alt=''
                                />
                                <h4 className='font-cabinetGrotesk font-semibold text-xl my-2'>
                                    Best Quality
                                </h4>
                                <p className='text-neutral-700 text-sm'>
                                    We offer affordable & reliable products with
                                    the best quality.
                                </p>
                            </div>
                            <div className='bg-primary-50 rounded-lg p-6 max-w-xs mx-auto'>
                                <img
                                    className='mx-auto'
                                    src={meetnconnect}
                                    alt=''
                                />
                                <h4 className='font-cabinetGrotesk font-semibold text-xl my-2'>
                                    Meet & Connect
                                </h4>
                                <p className='text-neutral-700 text-sm'>
                                    Connect with over 20k people on our platform
                                    and make sales.
                                </p>
                            </div>
                            <div className='bg-primary-50 rounded-lg p-6 max-w-xs mx-auto'>
                                <img className='mx-auto' src={p2p} alt='' />
                                <h4 className='font-cabinetGrotesk font-semibold text-xl my-2'>
                                    P2P Payment
                                </h4>
                                <p className='text-neutral-700 text-sm'>
                                    P2P payments are convenient, fast, secured
                                    and easy-to-use.
                                </p>
                            </div>
                            <div className='bg-primary-50 rounded-lg p-6 max-w-xs mx-auto w-full'>
                                <img className='mx-auto' src={support} alt='' />
                                <h4 className='font-cabinetGrotesk font-semibold text-xl my-2'>
                                    24/7 Support
                                </h4>
                                <p className='text-neutral-700 text-sm'>
                                    Do you have a complaint? <br />
                                    Fill this <a href=''> form </a>
                                    to get answers ASAP
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* buy an item */}
                    <section
                        id='howitworks'
                        className='w-fit mx-auto px-6 py-3 rounded-lg my-5 text-center'>
                        <h1 className='font-cabinetGrotesk text-2xl font-semibold'>
                            <span className='text-secondary-500'>
                                Buy Items
                            </span>{' '}
                            in 3 Easy Steps
                        </h1>
                        <p className='text-neutral-700 my-2'>
                            Complete the folowing steps to start selling and
                            earning on our platform.
                        </p>

                        {/* steps to buy item */}
                        <div className='space-y-4 my-8 mx-auto lg:flex lg:justify-between lg:items-center lg:w-5/6'>
                            <div className=' max-w-xs mx-auto lg:mr-8'>
                                <h4 className='font-cabinetGrotesk text-primary-500 font-semibold text-xl my-2'>
                                    01. Create an Account
                                </h4>
                                <p className='text-neutral-700 text-sm'>
                                    Create an account by completing the
                                    registration process
                                </p>
                            </div>
                            <img
                                className='lg:rotate-90 mx-auto'
                                src={wavyDashed}
                                alt=''
                            />
                            <div className='max-w-xs mx-auto lg:mx-8'>
                                <h4 className='font-cabinetGrotesk text-primary-500 font-semibold text-xl my-2'>
                                    02. View Products
                                </h4>
                                <p className='text-neutral-700 text-sm'>
                                    View correct details of the products you
                                    want to buy
                                </p>
                            </div>
                            <img
                                className='lg:rotate-90 mx-auto'
                                src={wavyDashed}
                                alt=''
                            />
                            <div className='max-w-xs mx-auto lg:ml-8'>
                                <h4 className='font-cabinetGrotesk text-primary-500 font-semibold text-xl my-2'>
                                    03. Contact Seller
                                </h4>
                                <p className='text-neutral-700 text-sm'>
                                    Contact seller, agree on a price and get
                                    your products
                                </p>
                            </div>
                        </div>
                        <button className='bg-primary-500 text-white font-medium text-lg px-6 py-5 rounded-lg'>
                            Buy an item now
                        </button>
                    </section>

                    {/* list an item */}
                    <section className='w-fit mx-auto px-6 py-3 rounded-lg my-5 lg:my-12 text-center'>
                        <h1 className='font-cabinetGrotesk text-2xl font-semibold'>
                            <span className='text-secondary-500'>
                                List Items
                            </span>{' '}
                            in 3 Easy Steps
                        </h1>
                        <p className='text-neutral-700 my-2'>
                            Complete the folowing steps to start selling and
                            earning on our platform.
                        </p>

                        {/* steps to list item */}
                        <div className='space-y-4 my-8 lg:flex lg:justify-between lg:items-center lg:w-5/6 mx-auto'>
                            <div className=' max-w-xs mx-auto'>
                                <h4 className='font-cabinetGrotesk text-primary-500 font-semibold text-xl my-2'>
                                    01. Create an Account
                                </h4>
                                <p className='text-neutral-700 text-sm'>
                                    Create an account by completing the
                                    registration process
                                </p>
                            </div>
                            <img
                                className='lg:rotate-90 mx-auto lg:mr-8'
                                src={wavyDashed}
                                alt=''
                            />
                            <div className='max-w-xs mx-auto'>
                                <h4 className='font-cabinetGrotesk text-primary-500 font-semibold text-xl my-2'>
                                    02. List Your Products
                                </h4>
                                <p className='text-neutral-700 text-sm'>
                                    Upload correct details of your products you
                                    want to sell.
                                </p>
                            </div>
                            <img
                                className='lg:rotate-90 mx-auto lg:mx-8'
                                src={wavyDashed}
                                alt=''
                            />
                            <div className='max-w-xs mx-auto'>
                                <h4 className='font-cabinetGrotesk text-primary-500 font-semibold text-xl my-2'>
                                    03. Get Notified
                                </h4>
                                <p className='text-neutral-700 text-sm'>
                                    Get notified when a buyer views and wants to
                                    buy your products
                                </p>
                            </div>
                        </div>
                        <button className='bg-primary-500 text-white font-medium text-lg px-6 py-5 rounded-lg'>
                            List an item now
                        </button>
                    </section>

                    {/* products */}
                    <section id='marketplace' className='w-5/6 mx-auto'>
                        <h1 className='text-center text-xl font-semibold font-cabinetGrotesk'>
                            Popular Products
                        </h1>
                        <img
                            className='mx-auto mb-4'
                            src={wavyUnderline}
                            alt=''
                        />
                        <p className='text-neutral-700 text-center my-5'>
                            View a few products from our techies
                        </p>

                        {/* product list */}
                        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                            <div className=' bg-neutral-50 w-fit mx-auto'>
                                <img src={keyboard} alt='' />
                                <div className='border-x-2 border-b-2 border-neutral-300 rounded-b-lg flex flex-row justify-between items-center px-6 py-5'>
                                    <div>
                                        <h5 className='text-neutral-700 font-medium'>
                                            Workspace Equipment
                                        </h5>
                                        <h3 className='font-cabinetGrotesk font-semibold text-xl'>
                                            &#8358;25,000.00
                                        </h3>
                                    </div>
                                    <img src={cartIcon} alt='' />
                                </div>
                            </div>
                            <div className='bg-neutral-50 w-fit mx-auto'>
                                <img src={controller} alt='' />
                                <div className='border-x-2 border-b-2 border-neutral-300 rounded-b-lg flex flex-row justify-between items-center px-6 py-5'>
                                    <div>
                                        <h5 className='text-neutral-700 font-medium'>
                                            Workspace Equipment
                                        </h5>
                                        <h3 className='font-cabinetGrotesk font-semibold text-xl'>
                                            &#8358;100,000.00
                                        </h3>
                                    </div>
                                    <img src={cartIcon} alt='' />
                                </div>
                            </div>
                            <div className='bg-neutral-50 w-fit mx-auto'>
                                <img src={controller} alt='' />
                                <div className='border-x-2 border-b-2 border-neutral-300 rounded-b-lg flex flex-row justify-between items-center px-6 py-5'>
                                    <div>
                                        <h5 className='text-neutral-700 font-medium'>
                                            Workspace Equipment
                                        </h5>
                                        <h3 className='font-cabinetGrotesk font-semibold text-xl'>
                                            &#8358;100,000.00
                                        </h3>
                                    </div>
                                    <img src={cartIcon} alt='' />
                                </div>
                            </div>
                            <div className='bg-neutral-50 w-fit mx-auto'>
                                <img src={keyboard} alt='' />
                                <div className='border-x-2 border-b-2 border-neutral-300 rounded-b-lg flex flex-row justify-between items-center px-6 py-5'>
                                    <div>
                                        <h5 className='text-neutral-700 font-medium'>
                                            Workspace Equipment
                                        </h5>
                                        <h3 className='font-cabinetGrotesk font-semibold text-xl'>
                                            &#8358;25,000.00
                                        </h3>
                                    </div>
                                    <img src={cartIcon} alt='' />
                                </div>
                            </div>
                        </div>
                        <button className='flex my-6 bg-primary-500 rounded-lg px-6 py-4 font-semibold text-white mx-auto w-fit'>
                            See More
                        </button>
                    </section>

                    {/* newsletter subscription*/}
                    <section
                        id='contactUs'
                        className='bg-primary-500 p-6 w-5/6 mx-auto my-16 rounded-lg'>
                        <h1 className='text-center text-white text-3xl font-semibold font-cabinetGrotesk'>
                            Subscribe for Updates
                        </h1>
                        <img
                            className='mx-auto mb-4'
                            src={wavyUnderline}
                            alt=''
                        />
                        <p className='text-white text-center my-5'>
                            Subscribe to our newsletter to get the latest
                            updates on our platform
                        </p>
                        <form className='space-y-4 flex flex-col justify-center md:max-w-sm mx-auto'>
                            <input
                                className='w-full active:border-2 active:border-neutral-300 rounded-lg px-6 py-4'
                                type='text'
                                placeholder='Enter your full name'
                                required
                            />
                            <input
                                className='w-full active:border-2 active:border-neutral-300 rounded-lg px-6 py-4'
                                type='email'
                                placeholder='Enter your email address'
                                required
                            />
                            <button className='bg-secondary-500 text-white font-medium text-lg px-6 py-4 rounded-lg mx-auto'>
                                Subscribe
                            </button>
                        </form>
                    </section>

                    {/* client reviews */}
                    <section className='w-5/6 mx-auto mb-12 md:mb-8'>
                        <h1 className='text-center text-3xl font-cabinetGrotesk font-medium'>
                            Client Reviews
                        </h1>
                        <img className='mx-auto' src={wavyUnderline} alt='' />
                        <p className='text-center my-3'>
                            We serve hundreds of thousands of customers and this
                            is what people are saying about us.
                        </p>

                        {/* review grid */}

                        <Swiper
                            slidesPerView={1}
                            spaceBetween={100}
                            slidesPerGroup={1}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            centeredSlides={true}
                            centeredSlidesBounds={true}
                            modules={[Pagination, Navigation]}
                            className='mySwiper h-1/4  w-full p-12'
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                    slidesPerGroup: 2,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                    slidesPerGroup: 2,
                                },
                                1445: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                    slidesPerGroup: 3,
                                },
                                1536: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                    slidesPerGroup: 4,
                                },
                            }}>
                            <SwiperSlide>
                                <div className='bg-primary-50 rounded-lg p-7 w-[18rem]'>
                                    <img
                                        className='mx-auto my-4'
                                        src={profileImg}
                                        alt=''
                                    />
                                    <p className='text-neutral-900 text-center leading-relaxed'>
                                        "techmart is unarguably the best
                                        eccomerce platform - a great
                                        transforation to Africa"
                                    </p>
                                    <h5 className='text-xl font-semibold text-center mt-5'>
                                        Aisha Issa
                                    </h5>
                                    <p className='text-center w-fit mx-auto'>
                                        techmart Vendor
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='bg-primary-50 rounded-lg p-7 w-[18rem] '>
                                    <img
                                        className='mx-auto my-4'
                                        src={profileImg}
                                        alt=''
                                    />
                                    <p className='text-neutral-900 text-center leading-relaxed'>
                                        "techmart is unarguably the best
                                        eccomerce platform - a great
                                        transforation to Africa"
                                    </p>
                                    <h5 className='text-xl font-semibold text-center mt-5'>
                                        Aisha Issa
                                    </h5>
                                    <p className='text-center w-fit mx-auto'>
                                        techmart Vendor
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='bg-primary-50 rounded-lg p-7 w-[18rem] '>
                                    <img
                                        className='mx-auto my-4'
                                        src={profileImg}
                                        alt=''
                                    />
                                    <p className='text-neutral-900 text-center leading-relaxed'>
                                        "techmart is unarguably the best
                                        eccomerce platform - a great
                                        transforation to Africa"
                                    </p>
                                    <h5 className='text-xl font-semibold text-center mt-5'>
                                        Aisha Issa
                                    </h5>
                                    <p className='text-center w-fit mx-auto'>
                                        techmart Vendor
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='bg-primary-50 rounded-lg p-7 w-[18rem] '>
                                    <img
                                        className='mx-auto my-4'
                                        src={profileImg}
                                        alt=''
                                    />
                                    <p className='text-neutral-900 text-center leading-relaxed'>
                                        "techmart is unarguably the best
                                        eccomerce platform - a great
                                        transforation to Africa"
                                    </p>
                                    <h5 className='text-xl font-semibold text-center mt-5'>
                                        Aisha Issa
                                    </h5>
                                    <p className='text-center w-fit mx-auto'>
                                        techmart Vendor
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='bg-primary-50 rounded-lg p-7 w-[18rem] '>
                                    <img
                                        className='mx-auto my-4'
                                        src={profileImg}
                                        alt=''
                                    />
                                    <p className='text-neutral-900 text-center leading-relaxed'>
                                        "techmart is unarguably the best
                                        eccomerce platform - a great
                                        transforation to Africa"
                                    </p>
                                    <h5 className='text-xl font-semibold text-center mt-5'>
                                        Aisha Issa
                                    </h5>
                                    <p className='text-center w-fit mx-auto'>
                                        techmart Vendor
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='bg-primary-50 rounded-lg p-7 w-[18rem] '>
                                    <img
                                        className='mx-auto my-4'
                                        src={profileImg}
                                        alt=''
                                    />
                                    <p className='text-neutral-900 text-center leading-relaxed'>
                                        "techmart is unarguably the best
                                        eccomerce platform - a great
                                        transforation to Africa"
                                    </p>
                                    <h5 className='text-xl font-semibold text-center mt-5'>
                                        Aisha Issa
                                    </h5>
                                    <p className='text-center w-fit mx-auto'>
                                        techmart Vendor
                                    </p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </section>
                </main>

                {/* footer */}
                <footer className='bg-[#131418] p-12 lg:flex lg:justify-around relative w-full '>
                    <div className='mb-4 lg:mr-8 md:mr-8 lg:items-center'>
                        <div className='logo-md'>
                            <img src={logo} alt='' />
                        </div>
                        <div className='my-8 med-devices'>
                            <p className='my-10 text-xl font-semibold lg:text-center text-white'>
                                © Enterprise martZ Limited
                            </p>
                            <div className='flex'>
                                <a href='#' className='mr-4'>
                                    <img
                                        src={facebook}
                                        alt=''
                                        className='w-[39px] md:w-[60px]'
                                    />
                                </a>
                                <a href='#' className='mr-4'>
                                    <img
                                        src={twitter}
                                        alt=''
                                        className='w-[39px] md:w-[60px]'
                                    />
                                </a>
                                <a href='#' className='mr-4'>
                                    <img
                                        src={instagram}
                                        alt=''
                                        className='w-[39px] md:w-[60px]'
                                    />
                                </a>
                                <a href='#'>
                                    <img
                                        src={linkedin}
                                        alt=''
                                        className='w-[39px] md:w-[60px]'
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='footer-items md:flex relative lg:flex lg:justify-evenly lg:items-center'>
                        <div className='about  mb-4 w-fit px-12'>
                            <h5 className='text-white font-bold'>About Us</h5>
                            <ul className=' text-[#FAFAFB]'>
                                <li className='mb-6'>
                                    <a
                                        href='#'
                                        className=' font-light text-[#FAFAFB]'>
                                        FAQs
                                    </a>
                                </li>
                                <li className='mb-6'>
                                    <a
                                        href='#'
                                        className=' font-light text-[#FAFAFB]'>
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='#'
                                        className=' font-light text-[#FAFAFB]'>
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='products  mb-4  lg:mt-0 px-12 pb-8 '>
                            <h5 className='text-white lg:text-x font-bold'>
                                Products
                            </h5>
                            <ul className=' text-[#FAFAFB]'>
                                <li className='mb-6'>
                                    <a
                                        href='#'
                                        className=' font-light text-[#FAFAFB]'>
                                        For Shopper
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='#'
                                        className=' font-light text-[#FAFAFB]'>
                                        For Vendors
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='legal  mb-4  px-12'>
                            {' '}
                            <h5 className='text-white font-bold'>Legal</h5>
                            <ul className=' text-[#FAFAFB]'>
                                <li className='mb-6'>
                                    <a
                                        href='#'
                                        className=' font-light text-[#FAFAFB]'>
                                        Privacy Policy
                                    </a>
                                </li>
                                <li className='mb-6'>
                                    <a
                                        href='#'
                                        className=' font-light text-[#FAFAFB]'>
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='#'
                                        className=' font-light text-[#FAFAFB]'>
                                        FAQs
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='contact lg:w-fit lg:px-12'>
                            {' '}
                            <h5 className='text-white font-bold'>Contact Us</h5>
                            <ul className=' text-[#FAFAFB]'>
                                <li className='mb-6'>
                                    <a
                                        href='#'
                                        className=' font-light text-[#FAFAFB]'>
                                        support@mortz.com
                                    </a>
                                </li>
                                <li className='mb-6'>
                                    <a
                                        href='#'
                                        className=' font-light text-[#FAFAFB]'>
                                        Lagos, Nigeria
                                    </a>
                                </li>
                                <li className='mb-6'>
                                    <a
                                        href='#'
                                        className=' font-light text-[#FAFAFB]'>
                                        08123456789
                                    </a>
                                </li>
                                <li className='flex'>
                                    <a
                                        href='#hero'
                                        className=' font-light text-[#FAFAFB] mr-2'>
                                        <img
                                            src={upArrow}
                                            alt='up arrow'
                                            className='w-[16px]'
                                        />
                                    </a>
                                    <span>back to top</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default App;
