import messages from "../images/messages.svg";
import help from "../images/help.svg";
import products from "../images/products.svg";
import wishlist from "../images/wishlist.svg";
import dashboard from "../images/dashboard.svg"
import techmart from "../images/techmart.svg";
import logOut from "../images/logOut.svg";

function Icon ({img, bg, text, textColor, imgStyle}){
    return(
        <div className={`flex py-4 pr-8 pl-12 my-4 gap-2 text-neutral-500 items-center bg-${bg}`} >
            <img src={img} style={imgStyle} className={"w-6"} />
            <h2 className={`{"font-medium font-poppins  text-${textColor}`}>{text}</h2>
        </div>
    )
}

function SideNav() {
    return (
      <aside className=" hidden  lg:block items-start bg-primary-50 pt-14 h-4/6 ">
        <div className=" block">
          <img src={techmart} alt="techmart logo" className="w-134 pl-12 pt-2" />
          <h2 className="pt-12 pl-12 font-semibold font-poppins text-primary-500">MENU</h2>
        </div>

        <Icon img={dashboard} text="Dashboard" />
        <Icon img={messages} text="Messages" />
        <Icon img={products} text="Products" />
        <Icon img={wishlist} text="Wishlist" />
        <Icon img={help} text="Help and Support" bg="white" textColor="primary-500" />

        <div className="flex py-4 my-4 mt-28 gap-2 pl-12 pr-8 items-center" >
            <img src={logOut} className={"w-6"} />
            <h2 className="font-medium font-poppins text-error-500" >Log Out</h2>
        </div>
      </aside>
    );
  }

export default SideNav;