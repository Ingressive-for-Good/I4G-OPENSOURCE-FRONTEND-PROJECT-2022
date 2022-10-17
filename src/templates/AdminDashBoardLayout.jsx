import { Outlet } from 'react-router-dom';
import { adminNav } from '../assets/data/data';
import SideBar from '../components/molecules/SideBar';

const AdminDashBoardLayout = () => {
  return (
    <div className="grid grid-cols-[230px_auto]">
      <SideBar navData={adminNav} />
      <main className="px-4 md:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashBoardLayout;
