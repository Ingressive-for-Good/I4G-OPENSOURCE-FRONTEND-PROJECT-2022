import { Link } from 'react-router-dom';


import closeMenuIcon from '../../assets/icons/close-icon.png';
import menuIcon from '../../assets/icons/menu-icon.svg';

export default function MainNav() {
  const toggleMenu = () => {
    const nav = document.getElementById('nav');
    const body = document.getElementById('body');
    // var navItems = document.querySelectorAll("nav a")
    body.style.overflowY = 'hidden';
    nav.classList.toggle('hidden');
};
  return (
    <header
          id='hero'
          className='relative bg-primary-50 px-8 py-9 flex items-center justify-between z-10'>
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
              <Link onClick={toggleMenu} to='/' className='hover:text-secondary-500'>Home</Link>
              <a onClick={toggleMenu} href='#howitworks' className='hover:text-primary-500'>How it Works</a>
              <a onClick={toggleMenu} href='#marketplace' className='hover:text-primary-500'>Market Place</a>
              <a onClick={toggleMenu} href='#contactUs' className='hover:text-primary-500'>Contact Us</a>
              <div className='mx-4 space-x-4'>
                  <Link
                      className='text-primary-500 font-medium hover:text-secondary-500'
                      to='/login'>
                      Log In
                  </Link>
                  <Link
                      className='text-white text-sm rounded-lg px-5 py-3 bg-primary-500 border-2 border-transparent hover:bg-primary-400 focus:border-2 focus:border-primary-500 focus:bg-transparent focus:text-primary-500'
                      to='/create-account'>
                      Create an account
                  </Link>
              </div>
          </nav>
      </header>
  )
}