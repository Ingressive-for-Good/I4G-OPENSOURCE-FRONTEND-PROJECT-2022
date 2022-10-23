import AdminSubAdminList from '../../../components/molecules/AdminSubAdminList';
import Navbar from '../../../components/molecules/Navbar';
import SubAdminNavMsg from '../../../components/atoms/SubAdminNavMsg';
export default function SubAdminList() {
  return (
    <div className="pt-[50px] px-[10px] pb-[30px] w-full">
      <Navbar NavMsg={SubAdminNavMsg} />
      <AdminSubAdminList />
    </div>
  );
}
