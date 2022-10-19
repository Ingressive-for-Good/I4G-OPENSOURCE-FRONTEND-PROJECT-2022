import React from 'react';
import { Route, Routes as Switch, Link } from 'react-router-dom';
import AddNewProductPage1 from './pages/AddNewProductPage1';
import PhoneNumberVerification from './pages/PhoneNumberVerification';
import Login from './pages/Login';
import Help from './pages/Help';
import DashboardPage from './pages/DashboardPage';
import Kyc from './pages/Kyc';
import EmailVerify from './pages/EmailVerify';
import Home from './pages/Home';
import ViewProducts from './components/molecules/Products';
import EmptyWishlistViewProducts from './pages/EmptyWishlistViewProducts';
import WishlistViewProducts from './pages/WishlistViewProducts';
import CreateAccount from './pages/CreateAccount';
import DeleteProduct from './components/molecules/deleteProduct';
import ResetPasswordPage from './pages/PasswordResetPage';
import Users from './pages/Users';

import AdminDashBoardLayout from './templates/AdminDashBoardLayout';
import EditProductDetails from "./components/molecules/EditProductDetails";

import UserList from './pages/UserList.jsx';
import SubAdminList from './pages/SubAdminList';
import SuspendedUsersList from './pages/SuspendedUsersList';
import AdminUsersProfile from './pages/AdminUsersProfile';

import MessagesEmpty from "./pages/MessagesEmpty";
import MessagesStart from "./pages/MessagesStart";

// Routes Component Containing Routes For All Base Pages.
function Routes() {
    return (
        <Switch>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<AddNewProductPage1 />} />
            <Route path='/login' element={<Login />} />
            <Route path='/create-account' element={<CreateAccount />} />
            <Route
                path='/view-products'
                element={
                    <>
                        <ViewProducts />
                    </>
                }
            />
            <Route path='/email-verification' element={<EmailVerify />} />
            <Route
                path='/phone-verification'
                element={<PhoneNumberVerification />}
            />

            {/* Protected Pages */}
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route element={<AdminDashBoardLayout />}>
                <Route
                    path='/admin/dashboard'
                    element={<h1> create dashboard</h1>}
                />
                <Route
                    path='/admin/products'
                    element={<h1> Admin producet </h1>}
                />
                <Route path="/admin/messages" element={<MessagesEmpty />} />
                    <Route path="/admin/messages/start" element={<MessagesStart />} />


                <Route path='/admin/users' element={<Users />} />
                <Route path='/admin/users/userlist' element={<UserList />} />
                <Route
                    path='/admin/users/subadminlist'
                    element={<SubAdminList />}
                />
                <Route
                    path='/admin/users/suspendedusers'
                    element={<SuspendedUsersList />}
                />
                <Route
                    path='/admin/users/profile'
                    element={<AdminUsersProfile />}
                />


                <Route path='/admin/profile' element={<h2> profile </h2>} />
            </Route>
            <Route path='/kyc' element={<Kyc />} />
            <Route path='/products' element={<AddNewProductPage1 />} />
            <Route path='/delete-product' element={<DeleteProduct />} />
            {/* <Route path="/view-products" element={<ViewProduct />} /> */}
            <Route path='/wishlist' element={<WishlistViewProducts />} />
            <Route
                path='/add-to-wishlist'
                element={<EmptyWishlistViewProducts />}
            />
            <Route path='/reset-password' element={<ResetPasswordPage />} />
            <Route path='/support' element={<Help />} />
            {/* <Route path="/account-recovery" element={<ForgotPassword />}/> */}
            <Route
                path='/messages'
                element={
                    <h1 className='text-3xl font-bold text-red-600'>
                        Messages
                    </h1>
                }
            />
            <Route
                path='/wishlist'
                element={
                    <h1 className='text-3xl font-bold text-red-600'>
                        Wishlist
                    </h1>
                }
            />
            <Route
                path='/notifications'
                element={
                    <h1 className='text-3xl font-bold text-red-600'>
                        Notifications
                    </h1>
                }
            />
            <Route
                path='/profile'
                element={
                    <h1 className='text-3xl font-bold text-red-600'>Profile</h1>
                }
            />
        </Switch>
    );
}

export default Routes;
