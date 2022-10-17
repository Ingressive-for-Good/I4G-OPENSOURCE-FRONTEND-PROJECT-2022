import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ProductsCard from './ProductsCard';
import Img1 from '../../assets/icons/element-4.png'
import Img2 from '../../assets/icons/Chat.png';
import Img3 from '../../assets/icons/box.png'
import Img4 from '../../assets/icons/Vector1.png'
import Img5 from '../../assets/icons/_.png'
import Img6 from '../../assets/icons/logout.png'
import Img7 from '../../assets/icons/notification.png'
import Img8 from '../../assets/icons/search-normal.png'
import Img9 from '../../assets/icons/avatar.png'
import emptyBox from '../../assets/icons/logos_parcel-icon.png'

const ProductDesktop = () => {
    const {isEmpty, uploadedProducts} = useSelector((state) => state.app)
    const sidebarMenu = [
        {name: 'Dashboard', icon:Img1, linkName: '/dashboard'},
        {name: 'Messages', icon:Img2, linkName: '/messages'},
        {name: 'Products', icon:Img3, linkName: '/view-products'},
        {name: 'Wishlists', icon:Img4, linkName: '/wishlists'},
        {name: 'Help & support', icon:Img5, linkName: '/support'}
    ]

    const ActiveBackground = 'white'
    const ActiveLink = '';
    const normalLink = ''

  return (
    <div className=''>
        <div className=' w-[300px] pt-[25px]  fixed bg-[#E7E9F8] side'>
            <p className='text-[#0F27BD] pl-[55px] font-cabinet pb-5 font-[700] text-[30px] '>tech<span className='text-[#F17105]'>mart</span></p>
            <p className='text-[#0F27BD] pl-[55px] font-campton font-[700] pb-6 text-[16px] '>Menu</p>
            <div className='' >
                {sidebarMenu.map(item => (
                    <NavLink key={item.name} style={({isActive}) => ({backgroundColor: isActive ? ActiveBackground : ''})} to={item.linkName} className='flex pl-[55px] gap-2 py-4 rounded-[-120px] items-center mb-6 cursor-pointer'>
                        <img src={item.icon} alt="img text" />
                        <p className='text-[16px] font-campton text-[#A1A4B6]'>{item.name}</p>
                    </NavLink>
                ))}
            </div>
            <div className=' pl-[55px] pt-8 flex items-center gap-2 cursor-pointer'>
                <img src={Img6} alt="" />
                <p className='text-[#D41111] font-campton text-[18px]'>Log out</p>
            </div>
        </div>
        <div className='absolute left-[300px] tab mt-8'>
            <div className='flex justify-between items-center'>
                <div className='ml-6 font-cabinet'>
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
                        <p className=' text-neutral-900 text-[20px] text-center font-cabinet font-semibold'>You're yet to upload your products</p>
                        <p className='text-[#717591] font-campton text-center mt-[10px]'>Upload your products</p>
                    </div>
                    <div className='mt-[24px] mb-0 sm:mb-6'>
                        <button className='py-[8px] px-[20px] rounded-[8px] bg-[#0F27BD]'>
                            <p className='text-white flex items-center'><span className='mr-[20px] ml-[16px] text-[24px]'>+</span>Add New Product</p>
                        </button>
                    </div>
                </div>) : 
                (<div>
                    <div className='mt-8'>
            <div className='flex justify-between pb-2 mx-4'>
                <p className='text-[#4B4E61] font-campton'>{`${uploadedProducts.length} ${uploadedProducts.length > 1 ? 'Item(s)' : 'Item'} `}</p>
                <button className='text-[#0F27BD] font-semibold'><span>+</span>Add New Product</button>
            </div>
            <hr color='gray'/>
            <div className='flex justify-center'>
                <div className='mt-8 grid grid-cols-3 gap-1'>{uploadedProducts.map(products => (
                <ProductsCard products={products}/>
                )
                )}
                </div>
            </div>
        </div>
                </div>
            )}
    </div>
                
</div>
)}

export default ProductDesktop