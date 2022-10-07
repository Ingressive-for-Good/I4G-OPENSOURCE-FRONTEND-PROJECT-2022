import React from "react";
import { Route, Routes as Switch, Link } from "react-router-dom";
import Help from "./src/molecules/Help";
import AddNewProductPage1 from "./src/AddNewProduct/pageOne/AddNewProductPage1";
import PhoneNumberVerification from "./src/pages/PhoneNumberVerification";
import Login from "./src/Components/Login";

// Routes Component Containing Routes For All Base Pages.

function Routes() {
  return (
    <Switch>
      <Route
        path="/dashboard"
        element={<h1 className="text-3xl font-bold text-red-600">Dashboard</h1>}
      />
      <Route
        path="/messages"
        element={<h1 className="text-3xl font-bold text-red-600">Messages</h1>}
      />
      <Route path="/products" element={<AddNewProductPage1 />} />
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
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <div className="flex flex-col gap-[30px]">
            {/* Add the link to your page here */}
            <h1 className="text-3xl font-bold text-red-600">Home</h1>
            <Link to="/support">Help and Support</Link>
            <Link to="/products">Add new product</Link>
            <Link to="/verification">Phone number verification</Link>
            <Link to="/login">Login</Link>
          </div>
        }
      />
    </Switch>
  );
}

export default Routes;
