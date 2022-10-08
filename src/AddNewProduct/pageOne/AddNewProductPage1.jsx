import Input from '../components/Input'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
export default function AddNewProductPage1() {
  return (
    <div className='relative pt-[50px]  lg:pl-[270px] sm:px-[40px] px-[10px] pb-[30px]'>
      <SideBar/>
      <Navbar/>
      <Input/>
    </div>
  )
}