import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Help from "./src/molecules/Help";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import EmailVerify from "./src/component/email/EmailVerify";
import PhoneNumberVerification from "./src/pages/PhoneNumberVerification";
import AddNewProductPage1 from "./src/AddNewProduct/pageOne/AddNewProductPage1";

// Routes Component Containing Routes For All Base Pages.
function Routes() {
  return (
    <Switch>
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/email-verification" element={<EmailVerify />} />
      <Route path="/phone-verification" element={<PhoneNumberVerification />} />
      <Route
        path="/messages"
        element={<h1 className="text-3xl font-bold text-red-600">Messages</h1>}
      />
      <Route
        path="/wishlist"
        element={<h1 className="text-3xl font-bold text-red-600">Wishlist</h1>}
      />
      <Route path="/support" element={<Help />} />

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
      <Route path="/verification" element={<PhoneNumberVerification />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<AddNewProductPage1 />} />
    </Switch>
  );
}

export default Routes;
