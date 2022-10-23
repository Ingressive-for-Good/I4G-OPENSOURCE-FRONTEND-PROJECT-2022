import closeMenuIcon from '../../assets/icons/close-icon.png';

import menuIcon from '../../assets/icons/menu-icon.svg';

import { Link } from 'react-router-dom';
import '../../pages/home.css';
export default function NavHome() {
  const toggleMenu = () => {
    const nav = document.getElementById('nav');
    const body = document.getElementById('body');
    // var navItems = document.querySelectorAll("nav a")
    body.style.overflowY = 'hidden';
    nav.classList.toggle('hidden');
  };
  return (
    <header
      id="hero"
      className="relative px-8 py-9 flex items-center justify-between z-10"
    >
      <h1 className="font-cabinetGrotesk text-primary-500 font-bold text-2xl">
        tech
        <span className="text-secondary-500">mart</span>
      </h1>
      <div className="border-primary-500 border rounded-xl p-3 md:hidden">
        <img
          className=""
          onClick={toggleMenu}
          id="hamburger"
          src={menuIcon}
          alt=""
        />
      </div>
      <nav
        id="nav"
        className="h-screen lg:h-fit w-screen lg:w-fit flex hidden absolute lg:relative z-100 top-0 lg:top-unset left-0 lg:left-unset bg-white lg:bg-transparent lg:flex flex-col lg:flex-row space-y-8 lg:space-y-0 justify-center items-center lg:space-x-5 text-neutral-700"
      >
        <img
          className="lg:hidden absolute top-12 right-16"
          onClick={toggleMenu}
          id="hamburger"
          src={closeMenuIcon}
          alt=""
        />
        <Link className="lg:hidden block" to="/">
          Home
        </Link>
        <a className="lg:hidden block" href="#howitworks">
          How it Works
        </a>
        <a className="lg:hidden block" href="#marketplace">
          Market Place
        </a>
        <a className="lg:hidden block" href="#contactUs">
          Contact Us
        </a>
        <div className="mx-4 space-x-4 lg:hidden block">
          <Link className="text-primary-500 font-medium" to="/login">
            Log In
          </Link>
          <Link
            className="text-white text-sm rounded-lg px-5 py-3 bg-primary-500"
            to="/create-account"
          >
            Create an account
          </Link>
        </div>
      </nav>
    </header>
  );
}
