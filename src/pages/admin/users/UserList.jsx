import AdminUsersList from '../../../components/molecules/AdminUsersList';
import Navbar from '../../../components/molecules/Navbar';
import UserListNavMsg from '../../../components/atoms/UserListNavMsg';

export default function UserList() {
  return (
    <div className="pt-[50px] px-[10px] pb-[30px] w-full">
      <Navbar NavMsg={UserListNavMsg} />
      <AdminUsersList />
    </div>
  );
}
