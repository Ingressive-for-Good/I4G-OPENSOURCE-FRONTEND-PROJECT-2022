import React from "react";
import ViewProducts from "./products-view/Products";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 className="text-3xl font-bold text-red-600">Home</h1>
              <Link to="/support">Help and Support</Link>
              <br />
              <Link to="/email-verification">Visit Email Verification Page</Link>
              <br />
              <Link to="/products">Add new product</Link><br />
              <Link to="/view-products">View products</Link>

            </>
          }
        />
        <Route
          path="/view-products"
          element={
            <>
              <ViewProducts />
            </>
          }
        />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
