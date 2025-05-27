import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Import page components
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blognews from "./pages/Blognews.jsx";
import OurProducts from "./pages/OurProducts.jsx";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Shipping from "./pages/Shipping";
import Refund from "./pages/Refund";
import Login from './pages/Login'; 
import SignUp from './pages/SignUp'; 
import Wishlist from './pages/Wishlist'; 
import CartDrawer from './pages/CartDrawer.jsx'; 
import Faq from "./pages/Faq.jsx";
import About from "./pages/About.jsx";
import Checkout from "./pages/Checkout.jsx";
import Viewcart from "./pages/Viewcart.jsx";
import Brilliant from "./pages/Brilliant.jsx";
import Blossom from "./pages/Blossom.jsx";
import Diamond from "./pages/Diamond.jsx";
import Eternal from "./pages/Eternal.jsx";
import Fancy from "./pages/Fancy.jsx";
import Delicate from "./pages/Delicate.jsx";
import Gem from "./pages/Gem.jsx";
import Gemstone from "./pages/Gemstone.jsx";
import Blogread1 from "./pages/Blogread1.jsx";





// Layout wrapper to control Header/Footer visibility
const LayoutWrapper = () => {
  const location = useLocation();
  const hideLayout = location.pathname === "/checkout";

  return (
    <>
      {!hideLayout && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<OurProducts />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cartdrawer" element={<CartDrawer />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
        <Route path="/blognews" element={<Blognews />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/viewcart" element={<Viewcart />} />
        <Route path="/brilliant" element={<Brilliant />} />
        <Route path="/blossom" element={<Blossom />} />
        <Route path="/delicate" element={<Delicate />} />
        <Route path="/diamond" element={<Diamond />} />
        <Route path="/fancy" element={<Fancy />} />
        <Route path="/gem" element={<Gem />} />
        <Route path="/gemstone" element={<Gemstone />} />
        <Route path="/eternal" element={<Eternal />} />
        <Route path="/blogread1" element={<Blogread1 />} />




      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
};

export default App;
