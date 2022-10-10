import { useState } from 'react'
import AddNewProductSucessPopUp from '../components/AddNewProductSucessPopUp'
import Input from '../components/Input'
import Navbar from '../components/Navbar'
import Overlay from '../components/Overlay'
import SideBar from '../components/SideBar'
export default function AddNewProductPage1() {
  // This state controls the success pop up
  const [popUp, setPopUp] = useState(false)
  const handleClick = () =>{
    popUp ? setPopUp(false) : setPopUp(true)
  }
  return (
    <div className='relative pt-[50px]  lg:pl-[270px] sm:px-[40px] px-[10px] pb-[30px]'>
      <SideBar/>
      <Navbar/>
      <Input handleClick={handleClick}/>
      {popUp &&
      <>
      <AddNewProductSucessPopUp handleClick={handleClick}/>
      <Overlay/>
      </>
      }
    </div>
  )
}