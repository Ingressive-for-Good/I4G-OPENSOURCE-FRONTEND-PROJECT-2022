import Navbar from "../components/molecules/Navbar";
import SuspendedUserNavMsg from '../components/atoms/SuspendedUserNavMsg'
import AdminSuspendedUsersList from "../components/molecules/AdminSuspendedUsersList";
export default function SuspendedUsersList() {
  return (
    <div className="pt-[50px] px-[10px] pb-[30px] w-full lg:pl-[270px]">
      <Navbar NavMsg={SuspendedUserNavMsg}/>
      <AdminSuspendedUsersList/>
  </div>
  )
}