import React from "react";

import EmailVerify from "./component/email/EmailVerify";

import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/email-verification" element={<EmailVerify />} />
    </Routes>
</BrowserRouter >
  
)}

export default App;
