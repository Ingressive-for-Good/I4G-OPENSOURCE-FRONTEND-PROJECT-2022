import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import AddNewProductPage1 from './pages/AddNewProductPage1';
import PhoneNumberVerification from './pages/PhoneNumberVerification';
import Login from './pages/Login';
import Help from './pages/Help';
import DashboardPage from './pages/DashboardPage';
import Kyc from './pages/Kyc';
import EmailVerify from './pages/EmailVerify';
import Home from './pages/Home';
import EmptyWishlistViewProducts from './pages/EmptyWishlistViewProducts';
import WishlistViewProducts from './pages/WishlistViewProducts';
import CreateAccount from './pages/CreateAccount';
import DeleteProduct from './components/molecules/deleteProduct';
import ResetPasswordPage from './pages/PasswordResetPage';

import {
  ADDTOWISHLIST,
  CREATEACCOUNT,
  DASHBOARD,
  DELETEPRODUCT,
  EMAILVERIFICATION,
  KYC,
  LOGIN,
  MESSAGES,
  NOTIFICATIONS,
  PHONEVERIFICATION,
  PRODUCTS,
  PROFILE,
  RESETPASSWORD,
  SUPPORT,
  WISHLIST,
  ADMIN,
  USERS,
  USERLIST,
  SUBADMINLIST,
  SUSPENDEDUSERLIST,
  START,
} from './helpers/routeConstants';

import Users from './pages/Users';

import AdminDashBoardLayout from './templates/AdminDashBoardLayout';

import UserList from './pages/UserList';
import SubAdminList from './pages/SubAdminList';
import SuspendedUsersList from './pages/SuspendedUsersList';
import AdminUsersProfile from './pages/AdminUsersProfile';

import MessagesEmpty from './pages/MessagesEmpty';
import MessagesStart from './pages/MessagesStart';

// Routes Component Containing Routes For All Base Pages.
function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path={`/${PRODUCTS}`} element={<AddNewProductPage1 />} />
      <Route path={`/${LOGIN}`} element={<Login />} />
      <Route path={`/${CREATEACCOUNT}`} element={<CreateAccount />} />
      <Route path={`/${EMAILVERIFICATION}`} element={<EmailVerify />} />
      <Route
        path={`/${PHONEVERIFICATION}`}
        element={<PhoneNumberVerification />}
      />

      {/* Protected Pages */}

      <Route path={`/${DASHBOARD}`} element={<DashboardPage />} />
      <Route element={<AdminDashBoardLayout />}>
        <Route
          path={`/${ADMIN}/${DASHBOARD}`}
          element={<h1> create dashboard</h1>}
        />
        <Route
          path={`/${ADMIN}/${PRODUCTS}`}
          element={<h1> Admin producet </h1>}
        />
        <Route path={`/${ADMIN}/${MESSAGES}`} element={<MessagesEmpty />} />
        <Route
          path={`/${ADMIN}/${MESSAGES}/${START}`}
          element={<MessagesStart />}
        />
        <Route path={`/${ADMIN}/${USERS}`} element={<Users />} />
        <Route path={`/${ADMIN}/${USERS}/${USERLIST}`} element={<UserList />} />
        <Route
          path={`/${ADMIN}/${USERS}/${SUBADMINLIST}`}
          element={<SubAdminList />}
        />
        <Route
          path={`/${ADMIN}/${USERS}/${SUSPENDEDUSERLIST}`}
          element={<SuspendedUsersList />}
        />
        <Route
          path={`/${ADMIN}/${USERS}/${PROFILE}`}
          element={<AdminUsersProfile />}
        />
        <Route path={`/${ADMIN}/${PROFILE}`} element={<h2> profile </h2>} />
      </Route>
      <Route path={`/${KYC}`} element={<Kyc />} />
      <Route path={`/${PRODUCTS}`} element={<AddNewProductPage1 />} />
      <Route path={`/${DELETEPRODUCT}`} element={<DeleteProduct />} />
      <Route path={`/${WISHLIST}`} element={<WishlistViewProducts />} />
      <Route
        path={`/${ADDTOWISHLIST}`}
        element={<EmptyWishlistViewProducts />}
      />
      <Route path={`/${RESETPASSWORD}`} element={<ResetPasswordPage />} />
      <Route path={`/${SUPPORT}`} element={<Help />} />
      <Route
        path={`/${MESSAGES}`}
        element={<h1 className="text-3xl font-bold text-red-600">Messages</h1>}
      />
      <Route
        path={`/${NOTIFICATIONS}`}
        element={
          <h1 className="text-3xl font-bold text-red-600">Notifications</h1>
        }
      />
      <Route
        path={`/${PROFILE}`}
        element={<h1 className="text-3xl font-bold text-red-600">Profile</h1>}
      />
    </Switch>
  );
}

export default Routes;
