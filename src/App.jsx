import React from "react";
<<<<<<< HEAD
import EmailVerify from "./component/email/EmailVerify";
import Home from "./molecules/Home";
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
      </Routes>
    </BrowserRouter>
=======
import EmptyWishlistViewProducts from "./pages/EmptyWishlistViewProducts";
import WishlistViewProducts from "./pages/WishlistViewProducts";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <>
        <Router>
          <Routes>
          <Route 
            path="/" 
            element={
              <div className="p-6">
              <h1 className="text-3xl font-bold text-red-600">Hello world!</h1>
              <p>/wishlist (view products in wishlist)</p>
              <p>/add-to-wishlist (add products to wishlist)</p>
              </div>
          } exact></Route>
          <Route path="/wishlist" element={<WishlistViewProducts />}></Route>
          <Route  path="/add-to-wishlist" element={<EmptyWishlistViewProducts />}></Route>
          </Routes>
        </Router>
      </>
    </div>
>>>>>>> 5eae52f6b0095879487128286edc095e555d3120
  );
}

export default App;
