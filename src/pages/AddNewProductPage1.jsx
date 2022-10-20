import { useState } from 'react'
import Input from '../components/atoms/Input'
import AddNewProductSucessPopUp from '../components/molecules/AddNewProductSucessPopUp'
import UserSidebar from '../components/molecules/UserSidebar'
import useScreensizeHook from '../components/molecules/ScreensizeHook'
import Navbar from '../components/molecules/Navbar'
import Overlay from '../components/molecules/Overlay'



export default function AddNewProductPage1() {
  // This state controls the success pop up
  const [popUp, setPopUp] = useState(false)
  const handleClick = () =>{
    popUp ? setPopUp(false) : setPopUp(true)
  }
  const mobileText = useScreensizeHook()

  return (
    <div className=' pb-[30px]'>
      {!mobileText && <UserSidebar/>}
      <div className='lg:absolute left-0 flex flex-col lg:left-[300px] mx-6 mt-8'>
        <Navbar text='Add a New Product'/>
        <Input handleClick={handleClick} buttonText='Upload Now'/>
        {popUp &&
        <>
        <AddNewProductSucessPopUp handleClick={handleClick}/>
        <Overlay/>
        </>
        }
      </div>

    </div>
  )
}