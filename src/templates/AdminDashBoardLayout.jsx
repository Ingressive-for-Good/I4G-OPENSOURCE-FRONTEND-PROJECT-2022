import { Outlet } from "react-router-dom";
import { adminNav } from "../assets/data/data";
import SideBar from "../components/molecules/SideBar";

const AdminDashBoardLayout =  () => { 
    return (
        <div className="grid grid-cols-5 gap-16">
            <SideBar navData={adminNav} />
            <main className="col-span-5 md:col-span-4">
            <Outlet>
                <p> hello </p>
            </Outlet>
            </main>
        </div>
    )
};

export default AdminDashBoardLayout;