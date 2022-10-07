import React from "react";
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
  );
}

export default App;
