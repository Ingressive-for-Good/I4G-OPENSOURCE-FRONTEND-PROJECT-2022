import React from "react";
import { Route, Routes as Switch } from "react-router-dom";

import Home from "/src/molecules/Home";

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
      <Route
        path="/products"
        element={<h1 className="text-3xl font-bold text-red-600">Products</h1>}
      />
      <Route
        path="/wishlist"
        element={<h1 className="text-3xl font-bold text-red-600">Wishlist</h1>}
      />
      <Route
        path="/support"
        element={
          <h1 className="text-3xl font-bold text-red-600">Help & Support</h1>
        }
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
      <Route
        path="/"
        element={<Home />}
      />
    </Switch>
  );
}

export default Routes;
