import React from 'react';
import ProductsCard from './ProductsCard'
import navImg from '../../assets/icons/Vector2.png'
import emptyBox from '../../assets/icons/logos_parcel-icon.png'
import { useSelector } from 'react-redux';

const ProductMobile = ({mobileText}) => {
    const {isEmpty, uploadedProducts} = useSelector((state) => state.app);


  return (
    <div className='mx-6 sm:mx-8'>
        <div className='flex justify-between items-center pt-10'>
            <div className='font-grotesk'>
                {mobileText ? <p className='text-[#0F27BD] text-[27px] font-[700]'>mart<span className='text-[#F17105] '>Z</span></p> : <p className='text-[#0F27BD] font-[700] text-[30px] '>tech<span className='text-[#F17105]'>mart</span></p>}
            </div>
            <div>
                <span>
                    <img src={navImg} alt="nav image" className='border-[0.916667px] opacity-6 border-[#0F27BD] p-[12px] rounded-[12.8333px]'/>
                </span>
            </div>
        </div>
        <div className='mt-4 font-grotesk'>
            <p className='text-[#252730] space-x-2 sm:text-[20px] text-[16px]'>Hey Nora 👋🏾</p>
            <p className='text-[#131418] text-[21px] sm:text-[28px] mt-1 font-semibold '>View Your Uploaded Products</p>
        </div>
        {isEmpty ? (
        <div className='flex justify-center items-center flex-col mt-[94px]'>
            <div className='h-[166px] sm:h-[264px] sm:max-w-[350.18px] max-w-[219px]'><img src={emptyBox} alt="empty cart" /></div>
            <div className='mt-[16px]'>
                <p className=' text-neutral-900 text-[20px] text-center font-semibold'>You're yet to upload your <br/> products</p>
                <p className='text-[#717591] text-center mt-[10px]'>Upload your products</p>
            </div>
            <div className='mt-[24px] mb-0 sm:mb-6'>
                <button className='py-[8px] px-[20px] rounded-[8px] bg-[#0F27BD]'>
                    <p className='text-white flex items-center'><span className='mr-[20px] ml-[16px] text-[24px]'>+</span>Add New Product</p>
                </button>
            </div>
        </div>
        ) : (
        <div className='mt-8'>
            <div className='flex justify-between pb-2'>
                <p className='text-[#4B4E61] font-campton'>{`${uploadedProducts.length} ${uploadedProducts.length > 1 ? 'Item(s)' : 'Item'} `}</p>
                <button className='text-[#0F27BD] font-semibold'><span>+</span>Add New Product</button>
            </div>
            <hr color='gray'/>
            <div className='flex justify-center'>
                <div className='mt-8 flex items-center sm:gap-8 sm:grid sm:grid-cols-2 flex-col'>{uploadedProducts.map(products => (
                <ProductsCard key={products.id} products={products}/>
                )
                )}
                </div>
            </div>
        </div>
        )}
    </div>
  )
}

export default ProductMobile