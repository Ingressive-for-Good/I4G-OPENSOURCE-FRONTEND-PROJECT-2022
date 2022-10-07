import React from "react";
import { BrowserRouter} from "react-router-dom";
import Routes from "../routes";
import PhoneNumberVerificationSuccessUI from "./molecules/modal/PhoneNumberVerificationSuccessUI";


function App() {
  return (
    <BrowserRouter>
      <PhoneNumberVerificationSuccessUI/>
    </BrowserRouter>
  );
}

export default App;
