import React from "react";
import { useEffect } from "react";
import AOS from "aos";
// import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TitleComponent from "./components/TitleComponent/TitleComponent";
import BookComponent from "./components/BookComponent/BookComponent";
import PopularBooksSec from "./components/PopularBooksSec/PopularBooksSec";
import NewArrivalsSec from "./components/NewArrivalsSec/NewArrivalsSec";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup/Signup";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      {/* <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer /> */}
    </>
  );
}

export default App;
