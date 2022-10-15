import { useState } from 'react'
import Input from '../components/atoms/Input'
import AddNewProductSucessPopUp from '../components/molecules/AddNewProductSucessPopUp'
import Navbar from '../components/molecules/Navbar'
import Overlay from '../components/molecules/Overlay'
import SideBar from '../components/molecules/SideBar'
import { sideNav } from '../assets/data/data'

export default function AddNewProductPage1() {
  // This state controls the success pop up
  const [popUp, setPopUp] = useState(false)
  const handleClick = () =>{
    popUp ? setPopUp(false) : setPopUp(true)
  }
  return (
    <div className='relative pt-[50px]  lg:pl-[270px] sm:px-[40px] px-[10px] pb-[30px]'>
      <SideBar navData={sideNav}/>
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
