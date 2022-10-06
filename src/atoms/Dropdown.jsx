import menu from "../images/menu.svg";

// function MobileNav (){
//   return<></>
// }

function DropDown() {
  return (
    <button type="button" className="cursor-pointer">
      <img src={menu} alt="menu icon" />
    </button>
  );
}

export default DropDown;
