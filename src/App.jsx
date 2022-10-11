import React from "react";

import { BrowserRouter,Routes, Route} from "react-router-dom";
import PhoneNumberVerificationSuccessUI from "./molecules/modal/PhoneNumberVerificationSuccessUI";




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
          <Route  path="/PhoneNumberVerificationSuccessUI" element={<PhoneNumberVerificationSuccessUI/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
