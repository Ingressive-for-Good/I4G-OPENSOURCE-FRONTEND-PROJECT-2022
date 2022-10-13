import {useState} from "react";
import menu from "../../assets/icons/menu.svg";
import messages from "../../assets/icons/messages.svg";
import help from "../../assets/icons/help.svg";
import products from "../../assets/icons/products.svg";
import wishlist from "../../assets/icons/wishlist.svg";
import dashboard from "../../assets/icons/dashboard.svg";
import techmart from "../../assets/icons/techmart.svg";
import logOut from "../../assets/icons/logOut.svg";
import x from "../../assets/icons/x-circle.svg";
import profile from "../../assets/icons/profile.svg";

function Icon({ img, bg, text, textColor, imgStyle }) {
  return (
    <div
      className={`flex py-2 pr-8 pl-8 my-4 gap-2 text-neutral-500 items-center bg-${bg}`}
    >
      <img src={img} className={"w-6"} />
      <h2 className={`{"font-medium font-campton  text-${textColor}`}>
        {text}
      </h2>
    </div>
  );
}

function SlideInNav({onClick}) {
  return (
    <>
    <aside className="items-start fixed top-0 left-0 bg-primary-50 pt-8 z-10 h-screen ">
      <div className="flex justify-between pr-4">
        <img src={techmart} alt="techmart logo" className="w-20 ml-8 pt-2" />
        <img src={x} onClick={onClick} className="w-6" />
        </div>
        <h2 className="pt-6 pl-8 font-semibold font-campton text-primary-500">
          MENU
        </h2>
      

      <Icon img={dashboard} text="Dashboard" />
      <Icon img={messages} text="Messages" />
      <Icon img={products} text="Products" />
      <Icon img={wishlist} text="Wishlist" />
      <Icon img={profile} text="My Profile" />
      <Icon img={profile} text="Notifications" />
      <Icon img={help} text="Help and Support" />

      <div className="flex py-4 my-4 mt-8 gap-2 pl-8 pr-8 items-center">
        <img src={logOut} className={"w-6"} />
        <h2 className="font-medium font-campton text-error-500">Log Out</h2>
      </div>
    </aside>
    <div className="w-screen h-screen fixed right-0 top-0 bg-neutral-900 opacity-40" onClick={onClick}></div>
    </>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick (){
    setIsOpen(!isOpen)
  }

  return (
    <>
    <button type="button" className="cursor-pointer" onClick={handleClick}>
      <img src={menu} alt="menu icon" />
    </button>
    {isOpen && <SlideInNav onClick={handleClick} />}
    </>
  );
}

export default MobileNav;
