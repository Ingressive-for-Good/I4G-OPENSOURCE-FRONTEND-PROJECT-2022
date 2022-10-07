import React from "react";
import { Route, Routes as Switch, Link } from "react-router-dom";
import Help from "./molecules/Help";
import LandingPage from "./pages/LandingPage";
import EmailVerify from "./component/email/EmailVerify";
// Routes Component Containing Routes For All Base Pages.
function Routes() {
  return (
    <Switch>
      <Route
        path="/dashboard"
        element={<h1 className="text-3xl font-bold text-red-600">Dashboard</h1>}
      />
      <Route
      path="/email-verification"
      element={<EmailVerify />}
      />
      <Route
        path="/messages"
        element={<h1 className="text-3xl font-bold text-red-600">Messages</h1>}
      />
      <Route
        path="/products"
        element={<h1 className="text-3xl font-bold text-red-600">Products</h1>}
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
      <Route
        path="/"
        element={<LandingPage />}
      />
    </Switch>
  );
}

export default Routes;
