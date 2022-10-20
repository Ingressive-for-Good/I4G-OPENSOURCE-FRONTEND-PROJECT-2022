import chatIcon from '../../assets/icons/Chat.svg'
import helpIcon from '../../assets/icons/help.svg'
import wishlistIcon from '../../assets/icons/wishlistIcon.svg'
import productIcon from '../../assets/icons/box.svg'
import logoutIcon from '../../assets/icons/logout.svg'
import { Link, NavLink } from 'react-router-dom'

export default function SideBar({ navData = [] }) {
  return (
    // If the sidebar is not fixed, it will move as you scroll. Give a padding left(270px) to your component that will be making use of the sidebar.
    <aside className=" fixed font-campton top-0 left-0 h-screen bg-primary-50 w-[230px] pt-[50px] hidden lg:block">
      <h1 className="font-cabinetGrotesk text-[32px] font-[700]  pl-[50px] pb-[38px] text-primary-500">
        tech<span className="text-secondary-500">mart</span>
      </h1>
      <div className="flex flex-col justify-between h-[80%]">
        <ul className="flex flex-col w-full">
          <h2 className="pl-[50px] pb-[15px] text-primary-500">MENU</h2>
          {
            navData.map(({ id, icon, text, link}) => (
            <li key={ id } className="pl-[50px] py-[19.5px]">
              <NavLink className="flex flex-row gap-[10px]" to={ link }>
                <img src={ icon } alt="" />
                <span className=' text-gray-400'>{ text }</span>
              </NavLink>
            </li>
            ))
          }
          
        </ul>
        <div className="pl-[50px]">
          <Link className="flex flex-row gap-[10px]" to="#">
            <img src={logoutIcon} alt="logouticon" />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
