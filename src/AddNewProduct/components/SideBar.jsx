import dashboardIcon from '../icons/dashboard.svg'
import chatIcon from '../icons/Chat.svg'
import helpIcon from '../icons/help.svg'
import wishlistIcon from '../icons/wishlistIcon.svg'
import productIcon from '../icons/box.svg'
import logoutIcon from '../icons/logout.svg'
import { Link, NavLink } from 'react-router-dom'

export default function SideBar() {
  return (
    <aside className='font-campton fixed top-0 left-0 h-screen bg-primary-50 w-[230px] pt-[50px] hidden lg:block'>
      <h1 className='font-cabinetGrotesk text-[32px] text-primary-500 pl-[50px] pb-[38px] text-primary-500'>tech<span className='text-secondary-500'>mart</span></h1>
      <div className='flex flex-col justify-between h-[80%]'>
        <ul className='flex flex-col w-full'>
          <h2 className='pl-[50px] pb-[15px] text-primary-500'>MENU</h2>
          <li className='pl-[50px] py-[19.5px]'>
            <NavLink className='flex flex-row gap-[10px]' to='#'>
              <img src={dashboardIcon} alt="" />
              <span>
                Dashboard
              </span>
            </NavLink>
          </li>
          <li className='pl-[50px] py-[19.5px]'>
            <NavLink className='flex flex-row gap-[10px]' to='#'>
              <img src={chatIcon} alt="" />
              <span>
                Messages
              </span>
            </NavLink>
          </li>
          <li className='pl-[50px] py-[19.5px] bg-white'>
            <NavLink className='flex flex-row gap-[10px]' to='#'>
              <img src={productIcon} alt="" />
              <span className='text-primary-500'>
                Products
              </span>
            </NavLink>
          </li>
          <li className='pl-[50px] py-[19.5px]'>
            <NavLink className='flex flex-row gap-[10px]' to='#'>
              <img src={wishlistIcon} alt="" />
              <span>
                Wishlist
              </span>
            </NavLink>
          </li>
          <li className='pl-[50px] py-[19.5px]'>
            <NavLink className='flex flex-row gap-[10px]' to='#'>
              <img src={helpIcon} alt="" />
              <span>
                Help & Support
              </span>
              </NavLink>
          </li>
        </ul>
        <div className='pl-[50px]'>
          <Link className='flex flex-row gap-[10px]' to='#'>
            <img src={logoutIcon} alt="logouticon" />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </aside>
  )
}