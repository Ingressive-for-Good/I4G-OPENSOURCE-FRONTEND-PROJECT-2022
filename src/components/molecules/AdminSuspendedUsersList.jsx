import { UserListData } from "../../assets/data/data"
import infoIcon from '../../assets/icons/infoIcon.svg'
import nextIcon from '../../assets/icons/next.svg'
import prevIcon from '../../assets/icons/prev.svg'
import ArrowLeft from '../../assets/icons/arrow-left.svg'
import { Link } from "react-router-dom"

export default function AdminSuspendedUsersList() {
  return (
    <div className="flex flex-col mt-[50px]">
      <Link to='/admin/users' className=" flex gap-[10px] mb-[30px]">
        <img src={ArrowLeft} alt="" />
        <span>Return to previous page</span>
      </Link>
      <div className="flex flex-col w-full  font-cabinetGrotesk border border-neutral-500 rounded-[8px]">
        <div className='flex flex-row justify-between items-center p-[20px] bg-primary-50'>
          <span className='font-[700] text-[20px]'>Suspended account(s) (24)</span>
        </div>
        <div>
            <div className="border-b border-neutral-500 flex flex-row font-[700]  py-[16px] ">
              <span className="lg:w-[25%] md:w-[33%] w-[50%] pl-[20px]">Name</span>
              <span className="lg:w-[25%] md:w-[33%] w-[50%]">Email Adress</span>
              <span className="hidden md:inline lg:w-[25%] md:w-[33%] w-[50%]">Phone Number</span>
              <span className="hidden lg:inline lg:w-[25%] md:w-[33%] w-[50%]">Date Registered</span>
            </div>
            {UserListData && UserListData.map(user =>(
              <div className="relative text-left border-b border-neutral-500 font-campton text-[14px] sm:text-[16px] flex flex-row items-center py-[8px] " key={user.id}>
                <div className="flex flex-row items-center gap-[16px] pl-[10px] font-cabinetGrotesk lg:w-[25%] md:w-[33%] w-[50%]">
                  <img src={user.avatar} alt="avatar" />
                  <span>{user.userName}</span>
                </div>
                <span className="lg:w-[25%] md:w-[33%] w-[50%]">{user.Email}</span>
                <span className="hidden md:inline lg:w-[25%] md:w-[33%] w-[50%]">{user.Phone}</span>
                <span className="hidden lg:inline lg:w-[25%] md:w-[33%] w-[50%]">
                    {user.DateReg}
                </span>
                <img className="absolute top-[30%] right-[20px]" src={infoIcon} alt="infoicon" />
              </div>
            ))}
          </div>
      </div>
      <div className="font-capmton font-[500] flex flex-row justify-between mt-[50px]">
        <div>
          <span>Showing 8 of 24 User(s)</span>
        </div>
        <div className="flex gap-[10px]">
          <img src={prevIcon} alt="previcon" />
          <span className="p-[10px] bg-primary-500 text-neutral-50">01</span>
          <img src={nextIcon} alt="nexticon" />
        </div>
      </div>
    </div>
  )
}