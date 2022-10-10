import React from "react";

import All from "./delete/all";
import EmailVerify from "./component/email/EmailVerify";
import AddNewProductPage1 from "./AddNewProduct/pageOne/AddNewProductPage1";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import EmptyWishlistViewProducts from "./pages/EmptyWishlistViewProducts";
import WishlistViewProducts from "./pages/WishlistViewProducts";



import Kyc from "./component/kyc-page/Kyc";


import Home from "./molecules/Home";

function App() {
  return (
    <BrowserRouter>
      <All />
      <Routes>
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
              <Link to="/products">Add new product</Link>


              <Link to="/kyc">Kyc Page</Link>


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
        <Route
          path="/kyc"
          element={
            <>
              <Kyc />
            </>
          }
        />
        
        <Route
        path="/products"
        element={<AddNewProductPage1/>}

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
