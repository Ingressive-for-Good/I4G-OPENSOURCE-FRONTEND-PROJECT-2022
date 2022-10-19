import searchIcon from "../../assets/icons/Search.svg";
import notificatin from "../../assets/icons/notification.svg";
import avatar from "../../assets/icons/avatar.svg";
import toggle from "../../assets/icons/toggle.svg";

export default function Navbar({NavMsg}) {
  return (
    <div>
      <div className="flex flex-row w-full justify-between font-cabinetGrotesk">
        <div className="">
          <h1 className="text-[25px] font-[700] text-primary-500 block lg:hidden">
            tech<span className="text-secondary-500">mart</span>
          </h1>
          <NavMsg/>
        </div>
        <div className="lg:hidden block mt-[10px]">
          <div className="py-[17.9px] px-[16.9px] border rounded-[12px] border-primary-500 cursor-pointer w-[50px]">
            <img className="" src={toggle} alt="" />
          </div>
        </div>
        <div className="lg:flex flex-row gap-[24px] hidden">
          <label className="relative">
            <input
              className="py-[16px] pl-[40px]  border-[#A1A4B6] border-[1.2px] rounded-[8px] w-[250px]"
              type="text"
              placeholder="Search for gadgets"
            />
            <img
              className="absolute left-[15px] top-[20px]"
              src={searchIcon}
              alt="searchIcon"
            />
          </label>
          <div className="w-[60px]">
            <img src={notificatin} alt="notification" />
          </div>
          <div className="w-[60px]">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
      <div>
        <label className="relative block lg:hidden">
          <input
            className="py-[14px] pl-[40px]  border-[#A1A4B6] border-[1.2px] rounded-[8px] w-full"
            type="text"
            placeholder="Search for gadgets"
          />
          <img
            className="absolute left-[15px] top-[20px]"
            src={searchIcon}
            alt="searchIcon"
          />
        </label>
      </div>
    </div>
  );
}
