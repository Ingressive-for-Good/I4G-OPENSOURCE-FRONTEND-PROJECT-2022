import React from 'react';

import { Route, Routes as Switch } from 'react-router-dom';
import AddNewProductPage1 from './pages/AddNewProductPage1';
import PhoneNumberVerification from './pages/PhoneNumberVerification';
import Login from './pages/Login';
import Help from './pages/HelpandSupport';
import DashboardPage from './pages/DashboardPage';
import Kyc from './pages/Kyc';
import EmailVerify from './pages/EmailVerify';
import Home from './pages/Home';
import ViewProducts from './components/molecules/Products';
import EmptyWishlistViewProducts from './pages/EmptyWishlistViewProducts';
import WishlistViewProducts from './pages/WishlistViewProducts';
import CreateAccount from './pages/CreateAccount';
import DeleteProduct from './pages/deleteProduct';
import ResetPasswordPage from './pages/PasswordResetPage';
import Users from './pages/admin/users';
import PageNotFound from './pages/404';
import AdminDashBoardLayout from './templates/AdminDashBoardLayout';
import CreateSubAdmin from './pages/admin/users/CreateSubAdmin';
import SubAdminProfilePage from './pages/admin/users/SubAdminProfile';
import ForgotPassword from './pages/ForgotPassword';
import UserList from './pages/admin/users/UserList.jsx';
import SubAdminList from './pages/admin/users/SubAdminList';
import SuspendedUsersList from './pages/admin/users/SuspendedUsersList';
import AdminUsersProfile from './pages/admin/users/AdminUsersProfile';
import MessagesEmpty from './pages/admin/messages/MessagesEmpty';
import MessagesStart from './pages/admin/messages/MessagesStart';
import MessagesChat from './pages/admin/messages/MessagesChat';
import AdminUsersProfileWithProducts from './pages/admin/users/AdminUsersProfileWithProducts';
import ProductPage from './pages/admin/product';
import TermsOfSevice from './pages/TermsOfSevice';
import Policy from './pages/Policy';


// Routes Component Containing Routes For All Base Pages.
function Routes() {
  return (
    <Switch>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<AddNewProductPage1 />} />
      <Route path='/terms' element={<TermsOfSevice/>} />
      <Route path='/policy' element={<Policy/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route
        path="/view-products"
        element={
          <>
            <ViewProducts />
          </>
        }
      />
      <Route path="/email-verification" element={<EmailVerify />} />
      <Route path="/phone-verification" element={<PhoneNumberVerification />} />

      {/* Protected Pages */}
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route element={<AdminDashBoardLayout />}>
        <Route path="/admin/dashboard" element={<h1> create dashboard</h1>} />
        <Route path="/admin/products" element={<ProductPage />} />

        <Route path="/admin/messages" element={<MessagesEmpty />} />
        <Route path="/admin/messages/start" element={<MessagesStart />} />
        <Route path="/admin/messages/chat" element={<MessagesChat />} />

        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/users/userlist" element={<UserList />} />
        <Route path="/admin/users/subadminlist" element={<SubAdminList />} />
        <Route
          path="/admin/users/suspendedusers"
          element={<SuspendedUsersList />}
        />
        <Route path="/admin/users/profile" element={<AdminUsersProfile />} />

        <Route
          path="/admin/users/profile-with-products"
          element={<AdminUsersProfileWithProducts />}
        />
        <Route path="/admin/create-sub-admin" element={<CreateSubAdmin />} />
        <Route
          path="/admin/sub-admin-profile"
          element={<SubAdminProfilePage />}
        />

        <Route path="/admin/profile" element={<h2> profile </h2>} />
      </Route>
      <Route path="/kyc" element={<Kyc />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/products" element={<AddNewProductPage1 />} />
      <Route path="/delete-product" element={<DeleteProduct />} />
      {/* <Route path="/view-products" element={<ViewProduct />} /> */}
      <Route path="/wishlist" element={<WishlistViewProducts />} />
      <Route path="/add-to-wishlist" element={<EmptyWishlistViewProducts />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/support" element={<Help />} />
      {/* <Route path="/account-recovery" element={<ForgotPassword />}/> */}
      <Route
        path="/messages"
        element={<h1 className="text-3xl font-bold text-red-600">Messages</h1>}
      />
      <Route
        path="/wishlist"
        element={<h1 className="text-3xl font-bold text-red-600">Wishlist</h1>}
      />
      <Route
        path="/notifications"
        element={
          <h1 className="text-3xl font-bold text-red-600">Notifications</h1>
        }
      />
      <Route
        path="/profile"
        element={<h1 className="text-3xl font-bold text-red-600">Profile</h1>}
      />
    </Switch>
  );
}

export default Routes;
