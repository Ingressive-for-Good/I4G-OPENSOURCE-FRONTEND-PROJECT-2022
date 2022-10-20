import React from 'react'
import { useSelector } from 'react-redux';
import UserSidebar from './UserSidebar';
import ProductsCard from './ProductsCard';
import Img7 from '../../assets/icons/notification.png'
import Img9 from '../../assets/icons/avatar.png'
import emptyBox from '../../assets/icons/logos_parcel-icon.png'

const ProductDesktop = () => {
    const {isEmpty, uploadedProducts} = useSelector((state) => state.app)

  return (
    <div className=''>
        <UserSidebar/>
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