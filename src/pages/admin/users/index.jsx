import UserNavMsg from '../../../components/atoms/UserNavMsg';
import AdminUsersSummary from '../../../components/molecules/AdminUsersSummary';
import Navbar from '../../../components/molecules/Navbar';

export default function Users() {
  return (
    <div className="pt-[50px] px-[10px] pb-[30px] w-full">
      <Navbar NavMsg={UserNavMsg} />
      <AdminUsersSummary />
    </div>
  );
}
