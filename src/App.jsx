import React from "react";
import EmailVerify from "./component/molecules/email/EmailVerify";
import Home from "./component/molecules/Home";
import EmptyWishlistViewProducts from "./pages/EmptyWishlistViewProducts";
import WishlistViewProducts from "./pages/WishlistViewProducts";
import AddNewProductPage1 from './component/molecules/AddNewProduct/pageOne/AddNewProductPage1'
import Kyc from "./component/kyc-page/Kyc";
import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
  );
}

export default App;
