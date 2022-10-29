import { Outlet } from 'react-router-dom';
import { adminNav } from '../assets/data/data';
import SideBar from '../components/molecules/SideBar';

const AdminDashBoardLayout = () => {
  return (
    <div className="grid grid-cols-3">
      <SideBar navData={adminNav} />
      <main className="col-span-5 md:col-span-3">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashBoardLayout;
