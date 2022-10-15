import UserNavMsg from "../components/atoms/UserNavMsg";
import AdminSideBar from "../components/molecules/AdminSideBar";
import AdminUsersSummary from "../components/molecules/AdminUsersSummary";
import Navbar from "../components/molecules/Navbar";

export default function Users() {
  return (
    <div className="pt-[50px]  lg:pl-[270px] sm:px-[40px] px-[10px] pb-[30px]">
      <Navbar NavMsg={UserNavMsg}/>
      <AdminSideBar/>
      <AdminUsersSummary/>
    </div>
  )
}