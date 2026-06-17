import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home";
import About from "./Components/Aboutus/About";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Cart from "./Components/Cart/Cart";

import Iphone from "./Components/Store/Iphone";
import Airpods from "./Components/Store/Airpods";
import Macbook from "./Components/Store/Macbook";
import Watch from "./Components/Store/Watch";

import Storemain from "./Components/Store/Storemain/Storemain";

import MacAccessories from "./Components/Accessories/Mac/MacAccessories";
import IPhoneAccessories from "./Components/Accessories/IPhone/IPhoneAccessories";
import WatchAccessories from "./Components/Accessories/Watch/WatchAccessories";
import AirpodAccessories from "./Components/Accessories/Airpod/AirpodAccessories";

import { CartProvider } from "./Components/Cart/CartContext";

import CheckoutPage from "./Components/Checkout/CheckoutPage";

import PaymentSuccess from "./Components/Checkout/PaymentSuccess/PaymentSuccess";

const App = () => {
  return (
    <CartProvider>
      <div>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />

            {/* Store  */}
            <Route path="/Store" element={<Storemain />} />
            <Route path="/mac" element={<MacAccessories />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/iphone" element={<Iphone />} />
            <Route path="/airpods" element={<Airpods />} />
            <Route path="/macbook" element={<Macbook />} />

            {/* Accessories  */}
            <Route path="/accessories" element={<MacAccessories />} />
            <Route path="/macaccessories" element={<MacAccessories />} />
            <Route path="/iphoneaccessories" element={<IPhoneAccessories />} />
            <Route path="/watchaccessories" element={<WatchAccessories />} />
            <Route path="/airpodaccessories" element={<AirpodAccessories />} />

            {/* Checkout Page  */}
            <Route path="/Checkout" element={<CheckoutPage />} />

            {/* PaymentSucess Page  */}
            <Route path="/payment-success" element={<PaymentSuccess />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
};

export default App;
