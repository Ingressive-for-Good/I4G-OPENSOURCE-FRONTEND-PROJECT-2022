import React from "react";

import EmailVerify from "./component/email/EmailVerify";

function App() {
  return <EmailVerify />;

import { BrowserRouter} from "react-router-dom";
import Routes from "../routes";
import PhoneNumberVerification from "./pages/PhoneNumberVerification";


function App() {
  return (
    <BrowserRouter>
      <PhoneNumberVerification />
    </BrowserRouter>
  );

}

export default App;
