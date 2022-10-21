import { Link } from "react-router-dom";
import arrowRight from "../../assets/icons/arrowRight.svg";
export default function AdminUsersSummary() {
  return (
    <div className="flex flex-col gap-[36px] w-full mt-[50px] font-cabinetGrotesk">
      <Link
        to="/admin/users/subadminlist"
        className="flex flex-row justify-between items-center p-[20px] bg-primary-50 rounded-[8px]"
      >
        <span className="font-[700] text-[20px]">Sub-admin(s) (2)</span>
        <img src={arrowRight} alt="arrow-right" />
      </Link>
      <Link
        to="/admin/users/userlist"
        className="flex flex-row justify-between items-center p-[20px] bg-primary-50 rounded-[8px]"
      >
        <span className="font-[700] text-[20px]">User(s) (542)</span>
        <img src={arrowRight} alt="arrow-right" />
      </Link>
      <Link
        to="/admin/users/suspendedusers"
        className="flex flex-row justify-between items-center p-[20px] bg-primary-50 rounded-[8px]"
      >
        <span className="font-[700] text-[20px]">
          Suspended account(s) (24)
        </span>
        <img src={arrowRight} alt="arrow-right" />
      </Link>
    </div>
  );
}
