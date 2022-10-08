import React from "react";
<<<<<<< HEAD:routes.jsx
import { Route, Routes as Switch, Link } from "react-router-dom";
import Help from "./src/molecules/Help";
import AddNewProductPage1 from "./src/AddNewProduct/pageOne/AddNewProductPage1";
import PhoneNumberVerification from "./src/pages/PhoneNumberVerification";
import Login from "./src/Components/Login";
=======
import { Route, Routes as Switch } from "react-router-dom";
import Help from "./molecules/Help";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import EmailVerify from "./component/email/EmailVerify";
import PhoneNumberVerification from './pages/PhoneNumberVerification';
import AddNewProductPage1 from './AddNewProduct/pageOne/AddNewProductPage1';
>>>>>>> 5eae52f6b0095879487128286edc095e555d3120:src/Routes.jsx

// Routes Component Containing Routes For All Base Pages.
function Routes() {
  return (
    <Switch>
      <Route
        path="/dashboard"
        element={<DashboardPage />}
      />
      <Route
      path="/email-verification"
      element={<EmailVerify />}
      />
<<<<<<< HEAD:routes.jsx
      <Route path="/products" element={<AddNewProductPage1 />} />
=======
      <Route
        path="/phone-verification"
        element={<PhoneNumberVerification/>}
      />
      <Route
        path="/messages"
        element={<h1 className="text-3xl font-bold text-red-600">Messages</h1>}
      />
>>>>>>> 5eae52f6b0095879487128286edc095e555d3120:src/Routes.jsx
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
<<<<<<< HEAD:routes.jsx
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
=======
        element={<LandingPage />}
      />  
      <Route
      path="/products"
      element={<AddNewProductPage1/>}
>>>>>>> 5eae52f6b0095879487128286edc095e555d3120:src/Routes.jsx
      />
    </Switch>
  );
}

export default Routes;
