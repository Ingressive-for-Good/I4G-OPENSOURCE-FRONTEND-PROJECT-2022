import { Outlet } from 'react-router-dom';
import { adminNav } from '../assets/data/data';
import SideBar from '../components/molecules/SideBar';

const AdminDashBoardLayout = () => (
  <div className="flex flex-row">
    <SideBar navData={adminNav} />
    <main className="w-full lg:px-[35px] px-[10px]">
      <Outlet>
        <p> hello </p>
      </Outlet>
    </main>
  </div>
);

export default AdminDashBoardLayout;
