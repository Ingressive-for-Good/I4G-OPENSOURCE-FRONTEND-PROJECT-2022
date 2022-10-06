import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import PhoneNumberVerification from "./pages/PhoneNumberVerification";
import AddNewProductPage1 from './AddNewProduct/pageOne/AddNewProductPage1'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/addproduct" element={<AddNewProductPage1/>}/>
      <Route path="/" element={<PhoneNumberVerification />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
