import React from "react";

import DeleteProduct from "./delete/deleteProduct";
import EmailVerify from "./component/email/EmailVerify";
import ForgotPassword from "./component/forgotPasswordPage/ForgotPassword";

import AddNewProductPage1 from "./AddNewProduct/pageOne/AddNewProductPage1";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import EmptyWishlistViewProducts from "./pages/EmptyWishlistViewProducts";
import WishlistViewProducts from "./pages/WishlistViewProducts";
import CreateAccount from "./pages/create-account/CreateAccount";
import Kyc from "./component/kyc-page/Kyc";
import Home from "./molecules/Home";
import ViewProducts from "./products-view/Products";
import Help from "./pages/Help";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/"
          element={
            <>
              <h1 className="text-3xl font-bold text-red-600">Home</h1>
              <Link to="/support">Help and Support</Link>
              <br />
              <Link to="/email-verification">
                Visit Email Verification Page
              </Link>
              <br />
              <Link to="/products">Add new product</Link><br />
              <br />
              <Link to="/create-account">Create Account</Link>
              <br />
              <Link to="/kyc">Kyc Page</Link><br />
              <Link to="/view-products">View products</Link><br/>
            <Link to="/delete-product">Delete uploaded product</Link>
            </>
          }
        />
        <Route
          path="/email-verification"
          element={
            <>
              <EmailVerify />
            </>
          }
        />
        <Route path="/products" element={<AddNewProductPage1 />} />
        <Route
          path="/"
          element={
            <>
              <Home />
              <Link to="/support">Help and Support</Link>
              <br />
              <Link to="/email-verification">
                Visit Email Verification Page
              </Link>
              <br />
              <Link to="/products">Add new product</Link>
            </>
          }
        />

        <Route path="/products" element={<AddNewProductPage1 />} />
        <Route
          path="/kyc"
          element={
            <>
              <Kyc />
            </>
          }
        />
        <Route
          path="/account-recovery"
          element={
            <>
              <ForgotPassword />
            </>
          }
        />

        <Route path="/products" element={<AddNewProductPage1 />} />

        <Route
          path="/account-recovery"
          element={
            <>
              <ForgotPassword />
            </>
          }
        />
        <Route
        path="/view-products"
        element={<ViewProducts/>}
        />
        <Route 
          path="/"
          element={
            <div className="p-6">

              <h1 className="text-3xl font-bold text-red-600">Hello world!</h1>
              <p>/wishlist (view products in wishlist)</p>
              <p>/add-to-wishlist (add products to wishlist)</p>
            </div>
          }
          exact
        ></Route>
        <Route path="/wishlist" element={<WishlistViewProducts />}></Route>
        <Route
          path="/add-to-wishlist"
          element={<EmptyWishlistViewProducts />}
        ></Route>
        <Route
          path="/delete-product"
          element={
            <>
              <DeleteProduct />
            </>
          }
        />

        <Route path="/create-account" element={<CreateAccount />}></Route>
         <Route path="/support" element= {<Help />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
