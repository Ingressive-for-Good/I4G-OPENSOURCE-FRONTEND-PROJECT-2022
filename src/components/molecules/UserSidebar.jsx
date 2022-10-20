import React from 'react'
import { sideNav } from '../../assets/data/data'
import { NavLink } from 'react-router-dom';
import Img6 from '../../assets/icons/logout.png'

const UserSidebar = () => {
    const ActiveBackground = 'white'

  return (
    <>
        <div className=' w-[300px] pt-[25px]  fixed bg-[#E7E9F8] side'>
            <p className='text-[#0F27BD] pl-[55px] font-cabinet pb-5 font-[700] text-[30px] '>tech<span className='text-[#F17105]'>mart</span></p>
            <p className='text-[#0F27BD] pl-[55px] font-campton font-[700] pb-6 text-[16px] '>Menu</p>
            <div className='' >
                {sideNav.map(item => (
                    <NavLink key={item.id} style={({isActive}) => ({backgroundColor: isActive ? ActiveBackground : ''})} to={item.linkName} className='flex pl-[55px] gap-2 py-4 rounded-[-120px] items-center mb-6 cursor-pointer'>
                        <img src={item.icon} alt="img text" />
                        <p className='text-[16px] font-campton text-[#A1A4B6]'>{item.text}</p>
                    </NavLink>
                ))}
            </div>
            <div className=' pl-[55px] pt-8 flex items-center gap-2 cursor-pointer'>
                <img src={Img6} alt="" />
                <p className='text-[#D41111] font-campton text-[18px]'>Log out</p>
            </div>
        </div>
    </>
  )
}

export default UserSidebar