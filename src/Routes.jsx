import React from "react";
import { Route, Routes as Switch, Link } from "react-router-dom";
import AddNewProductPage1 from "./pages/AddNewProductPage1";
import PhoneNumberVerification from "./pages/PhoneNumberVerification";
import Login from "./pages/Login";
import Help from "./pages/Help";
import DashboardPage from "./pages/DashboardPage";
import Kyc from "./pages/Kyc";
import EmailVerify from "./pages/EmailVerify";
import Home from "./pages/Home";
import EmptyWishlistViewProducts from "./pages/EmptyWishlistViewProducts";
import WishlistViewProducts from "./pages/WishlistViewProducts";
import CreateAccount from "./pages/CreateAccount";
import DeleteProduct from "./components/molecules/deleteProduct";
import ResetPasswordPage from "./pages/PasswordResetPage";
import * as RoutePaths from "../utils/routeConstants";

// Routes Component Containing Routes For All Base Pages.
function Routes() {
  return (
    <Switch>
      <Route path={RoutePaths.HOME} element={<Home />} />
      <Route path={RoutePaths.PRODUCTS} element={<AddNewProductPage1 />} />
      <Route path={RoutePaths.LOGIN} element={<Login />} />
      <Route path={RoutePaths.CREATE_ACCOUNT} element={<CreateAccount />} />
      <Route path={RoutePaths.EMAIL_VERIFICATION} element={<EmailVerify />} />
      <Route path={RoutePaths.PRODUCTS} element={<AddNewProductPage1 />} />

      {/* Protected Pages */}
      <Route path={RoutePaths.DASHBOARD} element={<DashboardPage />} />
      <Route path={RoutePaths.KYC} element={<Kyc />} />
      <Route path={RoutePaths.PRODUCTS} element={<AddNewProductPage1/>} />
      <Route path={RoutePaths.DELETE_PRODUCT} element={<DeleteProduct />} />
      <Route path={RoutePaths.WISHLIST} element={<WishlistViewProducts />} />
      <Route path={RoutePaths.ADD_TO_WISHLIST} element={<EmptyWishlistViewProducts />} />
      <Route path={RoutePaths.RESET_PASSWORD} element={<ResetPasswordPage />} />
      <Route path={RoutePaths.SUPPORT} element={<Help />} />
      <Route path={RoutePaths.MESSAGES} element={<h1 className="text-3xl font-bold text-red-600">Messages</h1>} />
      <Route path={RoutePaths.WISHLIST} element={<h1 className="text-3xl font-bold text-red-600">Wishlist</h1>} />
      <Route path={RoutePaths.NOTIFICATIONS} element={<h1 className="text-3xl font-bold text-red-600">Notifications</h1>} />
      <Route path={RoutePaths.PROFILE} element={<h1 className="text-3xl font-bold text-red-600">Profile</h1>} />
    </Switch>
  );
}

export default Routes;
