import React from "react";

import EmailVerify from "./component/email/EmailVerify";
import Home from "./molecules/Home";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
