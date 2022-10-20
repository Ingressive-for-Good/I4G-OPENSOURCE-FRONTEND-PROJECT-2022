import React from 'react'
import Navbar from './Navbar'
import Input from '../atoms/Input'
import useScreensizeHook from './ScreensizeHook'
import UserSidebar from './UserSidebar'
import AddNewProductPage1 from '../../pages/AddNewProductPage1'

const EditProductDetails = () => {
  const mobileText = useScreensizeHook();

  return (
    <div className=' pb-[30px]'>
      {!mobileText && <UserSidebar/>}
      <div className='lg:absolute left-0 flex flex-col lg:left-[300px] mx-6 mt-8'>
        <Navbar text='Edit Details of Uploaded Products'/>
        <Input buttonText='Save Changes'/>
        {/* {popUp &&
        <>
        <AddNewProductSucessPopUp handleClick={handleClick}/>
        <Overlay/>
        </>
        } */}
      </div>
    </div>
  )
}

export default EditProductDetails