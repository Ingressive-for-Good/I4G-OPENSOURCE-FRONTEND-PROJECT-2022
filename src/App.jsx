import React from "react";
import Login from "./Components/Login";

import EmailVerify from "./component/email/EmailVerify";

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
              <Link to="/email-verification">
                Visit Email Verification Page
              </Link>
              <br />
              <Link to="/login">Login</Link>
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/email-verification"
          element={
            <>
              <EmailVerify />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
