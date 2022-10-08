import { info } from "autoprefixer";
import React from "react";

import Hero from "./hero";
import Delete from "./delete";
import Sidebar from "./sidebar";
import Modal from "./modal";
import EmailVerify from "./component/email/EmailVerify";
import AddNewProductPage1 from "./AddNewProduct/pageOne/AddNewProductPage1";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import EmptyWishlistViewProducts from "./pages/EmptyWishlistViewProducts";
import WishlistViewProducts from "./pages/WishlistViewProducts";

function App() {
  return (
    <div className="relative h-screen">
      <Modal />
      <div className="py-8 px-5 w-screen md:py-10 md:px-14 lg:flex lg:gap-8 relative lg:pl-0 lg:pt-0 lg:pr-10">
        <Sidebar />
        <div>
          <Hero />
          <Delete />
        </div>
      </div>
      <BrowserRouter>
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
              <div className="p-6">
                <h1 className="text-3xl font-bold text-red-600">
                  Hello world!
                </h1>
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
    </div>
  );
}

export default App;
