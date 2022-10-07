import React from 'react'
import { useSelector } from 'react-redux';
import Img1 from '../assets/element-4.png'
import Img2 from '../assets/Chat.png';
import Img3 from '../assets/box.png'
import Img4 from '../assets/Vector1.png'
import Img5 from '../assets/_.png'
import Img6 from '../assets/logout.png'
import Img7 from '../assets/notification.png'
import Img8 from '../assets/search-normal.png'
import Img9 from '../assets/avatar.png'
import emptyBox from '../assets/logos_parcel-icon.png'

const ProductDesktop = () => {
    const {isEmpty} = useSelector((state) => state.app)
    const sidebarMenu = [
        {name: 'Dashboard', icon:Img1},
        {name: 'Messages', icon:Img2},
        {name: 'Products', icon:Img3},
        {name: 'Wishlists', icon:Img4},
        {name: 'Help & support', icon:Img5}
    ]


  return (
    <div className=''>
        <div className=' w-[300px] pt-[50px]  pl-[55px] fixed bg-[#E7E9F8] side'>
            <p className='text-[#0F27BD] font-grotesk pb-5 font-[700] text-[30px] '>tech<span className='text-[#F17105]'>mart</span></p>
            <p className='text-[#0F27BD] font-campton font-[700] pb-6 text-[16px] '>Menu</p>
            <div>
                {sidebarMenu.map(item => (
                    <div className='flex items-center mb-10 gap-2 cursor-pointer'>
                        <img src={item.icon} alt="img text" />
                        <p className='text-[16px] font-campton text-[#A1A4B6]'>{item.name}</p>
                    </div>
                ))}
            </div>
            <div className='pt-10 flex items-center gap-2 cursor-pointer'>
                <img src={Img6} alt="" />
                <p className='text-[#D41111] font-campton text-[18px]'>Log out</p>
            </div>
        </div>
        <div className='absolute left-[300px] tab mt-8'>
            <div className='flex justify-between items-center'>
                <div className='ml-6 font-grotesk'>
                    <p className='text-[#252730] space-x-2 sm:text-[20px] text-[16px]'>Hey Nora 👋🏾</p>
                    <p className='text-[#131418] text-[21px] sm:text-[28px] mt-1 font-semibold '>View Your Uploaded Products</p>
                </div>
                <div className='flex gap-3 items-center mr-6'>
                    <div className='relative'>
                        <input type="text" placeholder='Search here' className='w-[200px] p-2 rounded-md outline-neutral-500 h-8 border-2 border-neutral-500 bg-[url(`../assets/search-normal.png`)] bg-no-repeat text-[#717591] bg-[#FAFAFB]'/>
                    </div>
                    <div className='w-[40px] h-[40px] cursor-pointer'><img src={Img7} alt="" /></div>
                    <div className='w-[40px] h-[40px] cursor-pointer'><img src={Img9} alt="" /></div>
                </div>
            </div>
            {isEmpty ? (<div className='flex justify-center items-center flex-col mt-[80px]'>
                    <div className='h-[166px] sm:h-[264px] sm:max-w-[350.18px] max-w-[219px]'><img src={emptyBox} alt="empty cart" /></div>
                    <div className='mt-[16px]'>
                        <p className=' text-neutral-900 text-[20px] text-center font-grotesk font-semibold'>You're yet to upload your products</p>
                        <p className='text-[#717591] font-campton text-center mt-[10px]'>Upload your products</p>
                    </div>
                    <div className='mt-[24px] mb-0 sm:mb-6'>
                        <button className='py-[8px] px-[20px] rounded-[8px] bg-[#0F27BD]'>
                            <p className='text-white flex items-center'><span className='mr-[20px] ml-[16px] text-[24px]'>+</span>Add New Product</p>
                        </button>
                    </div>
                </div>) : 
                (<div>

                </div>
            )}
    </div>
                
</div>
)}

export default ProductDesktop