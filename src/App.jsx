import React from "react";
import EmailVerify from "./component/email/EmailVerify";
import Home from "./molecules/Home";
import EmptyWishlistViewProducts from "./pages/EmptyWishlistViewProducts";
import WishlistViewProducts from "./pages/WishlistViewProducts";
import CreateAccount from "./pages/create-account/CreateAccount";
import AddNewProductPage1 from './AddNewProduct/pageOne/AddNewProductPage1'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Link to="/support">Help and Support</Link>
              <br />
              <Link to="/email-verification">Visit Email Verification Page</Link>
              <br />
              <Link to="/products">Add new product</Link>
              <br />
              <Link to="/create-account">Create Account</Link>

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
              <p>/create-account (Create Account UI)</p>
              </div>
          } exact></Route>
          <Route path="/wishlist" element={<WishlistViewProducts />}></Route>
          <Route  path="/add-to-wishlist" element={<EmptyWishlistViewProducts />}></Route>
          <Route  path="/create-account" element={<CreateAccount />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
