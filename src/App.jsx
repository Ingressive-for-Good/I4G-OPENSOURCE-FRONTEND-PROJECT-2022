import React from "react";
import EmptyWishlistViewProducts from "./pages/EmptyWishlistViewProducts";
import WishlistViewProducts from "./pages/WishlistViewProducts";
import MessageEmpty from "./pages/MessageEmpty";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/"
                    element={
                        <>
                            <Link to="/Messages">Message Page</Link>
                        </>
                    }
                />
                <Route 
                    path="/Messages"
                    element={
                        <>
                            <MessageEmpty />
                        </>
                    }
                />
                <Route 
                    path="/" 
                    element={
                    <div className="p-6">
                    <h1 className="text-3xl font-bold text-red-600">Hello world!</h1>
                    <p>/wishlist (view products in wishlist)</p>
                    <p>/add-to-wishlist (add products to wishlist)</p>
                    <p>/Messages (Read & Send messages)</p>
                    </div>
                } exact></Route>
                <Route path="/wishlist" element={<WishlistViewProducts />}></Route>
                <Route  path="/add-to-wishlist" element={<EmptyWishlistViewProducts />}></Route>
                <Route  path="/Messages" element={<MessageEmpty />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
