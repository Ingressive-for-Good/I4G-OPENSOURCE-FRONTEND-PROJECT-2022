import React from "react";
import "./style.css";
import facebook from "./facebook.png";
import twitter from "./twitter.png";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";

const Footer = () => {
  return (
    <footer className="relative flex items-center bg-neutral-900 text-white">
      <div>
        <p className="brandname text-primary-500 font-cabinetGrotesk text-[32px] text-[700] mb-[28px]">
          mart<span className="text-secondary-500">Z</span>
        </p>

        {/* the first section */}
        <div className="section1">
          <p className="copyright font-campton text-[18] text-neutral-50 text-[500] mb-[28px]">
            © Enterprise martZ Limited
          </p>

          {/* media links under the first section */}
          <div className="flex space-x-[24px]">
            <div className="bg-neutral-50 w-[48px] h-[48px] grid place-items-center rounded-full">
              <img
                className="text-primary-500 "
                src={facebook}
                alt="facebook"
              />
            </div>
            <div className="bg-neutral-50 w-[48px] h-[48px] grid place-items-center rounded-full">
              <img className="text-primary-500 " src={twitter} alt="rwitter" />
            </div>
            <div className="bg-neutral-50 w-[48px] h-[48px] grid place-items-center rounded-full">
              <img
                className="text-primary-500 "
                src={instagram}
                alt="instagram"
              />
            </div>
            <div className="bg-neutral-50 w-[48px] h-[48px] grid place-items-center rounded-full">
              <img
                className="text-primary-500 "
                src={linkedin}
                alt="linkedin"
              />
            </div>
          </div>
        </div>
      </div>

      {/* links section */}
      <div className="links">
        <div>
          <p className="bold">About Us</p>
          <a href="#">FAQs</a>
          <a href="#">Careers</a>
          <a href="#">BLog</a>
        </div>

        <div>
          <p className="bold">Products</p>
          <a href="#">For shopper</a>
          <a href="#">For vendors</a>
        </div>

        <div>
          <p className="bold">Legal</p>
          <a href="#">Privacy Policies</a>
          <a href="#">Terms of Service</a>
          <a href="#">FAQs</a>
        </div>

        <div>
          <p className="bold">Contact Us</p>
          <a href="#">support@martz.com</a>
          <a href="#">Lagos, Nigeria.</a>
          <a href="#">08123456789</a>
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
