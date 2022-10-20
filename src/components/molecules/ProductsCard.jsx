import React from 'react';
import Delete from '../../assets/icons/delete.png'
import Edit from '../../assets/icons/edit.png'
import { useNavigate } from 'react-router-dom';
import {setOpenEdit, setAvailability} from '../../../utils/services/appSlice'
import { useDispatch } from 'react-redux';


const ProductsCard = ({products}) => {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const ToggleEdit = () => {
    if(products.openEdit){
      return 'w-[145px] rounded-xl absolute cursor-pointer top-16 right-8 h-24 bg-neutral-300 gap-2 flex justify-center flex-col items-center'
    }else{
      return 'hidden'
    }
  }

  return (
    <div className='mb-12 max-w-[340px] min-h-[380px] border-2 border-neutral-300 rounded-lg'>
      <div className='max-w-[340px] relative h-[220px] bg-neutral-300 '>
        <img src={products.productImg} alt="" className='h-[220px] object-cover grid place-items-center'/>
        <p onClick={() =>{
          dispatch(setOpenEdit(products.id))
          console.log(openEdit)
        }} className='absolute top-3 right-2 cursor-pointer'><img src={Edit} alt="" /></p>
        <div className={ToggleEdit()}>
          <p onClick={() => navigate('/edit-product')}>Edit Details</p>
          <p onClick={() => dispatch(setAvailability(products.id))}>Mark as Available</p>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='ml-6 my-3'>
          <p className='font-campton text-lg text-[#4B4E61]  pb-1'>{products.productName}</p>
          <p className='font-campton text-[#717591] pb-1'>{products.description}</p>
          <p className='font-grotesk text-[#131418] text-xl pb-1 font-bold'>{products.price}</p>
          <p className='font-campton text-[#AB5004] pb-1'>{products.availability ? 'Available' : 'Unavailable'}</p>
        </div>
        <div className='mr-8 cursor-pointer'><button><img src={Delete} alt="" /></button></div>
      </div>

    </div>
  )
}

export default ProductsCard