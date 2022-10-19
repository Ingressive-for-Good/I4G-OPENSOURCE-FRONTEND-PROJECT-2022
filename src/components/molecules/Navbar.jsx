import searchIcon from '../../assets/icons/Search.svg'
import notificatin from '../../assets/icons/notification.svg'
import avatar from '../../assets/icons/avatar.svg'
import toggle from '../../assets/icons/toggle.svg'

export default function Navbar({text}) {
  return (
    <div className="flex flex-row w-full justify-between font-cabinetGrotesk">
      <div className="">
        <h1 className="text-[25px] font-[700] text-primary-500 block lg:hidden">
          tech<span className="text-secondary-500">mart</span>
        </h1>
        <h1 className="text-neutral-800 md:text-[20px] lg:mt-0 mt-[20px] text-[16px] font-[500] lg:pb-0 pb-[10px]">
          Hey Nora👋🏾
        </h1>
        <p className="text-neutral-900 md:text-[28px] font-[500] ">
          {text}
        </p>
        <p className="md:text-[18px] text-[16px] font-[500]">
          Ensure that you are filling the{" "}
          <span className="text-secondary-500">correct</span> and{" "}
          <span className="text-secondary-500 mt-[24px]">up-to-date</span>{" "}
          information.
        </p>
      </div>
      <div className="lg:hidden block mt-[10px]">
        <div className="py-[17.9px] px-[16.9px] border rounded-[12px] border-primary-500 cursor-pointer w-[50px]">
          <img className="" src={toggle} alt="" />
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
