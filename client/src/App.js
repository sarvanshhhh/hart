import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { Home } from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Offerings from "./components/Pages/Offerings/Offerings";
import Contact from "./components/Pages/Contact/Contact";
import Career from "./components/Pages/Career/Career";
import Media from "./components/Pages/Media/Media";









function App() {
  return (
    <div>
      {/* Background circles & overlay */}
      <div className="overlay"></div>
      <div className="circle circle1 blue"></div>
      <div className="circle circle2 red"></div>
      <div className="circle circle3 blue"></div>
      <div className="circle circle4 red"></div>
      <div className="circle circle5 red"></div>
      <div className="circle circle6 red"></div>
      <div className="circle circle7 blue"></div>
      <div className="circle circle8 blue"></div>
      <div className="circle circle9 red"></div>
      <div className="circle circle10 red"></div>
      <div className="circle circle11 blue"></div>

      {/* Router */}
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Home />} />
      

          {/* Other Pages */}
          <Route path="about" element={<About />} />
          <Route path="offering" element={<Offerings />} />
          <Route path="contact" element={<Contact />} />
          <Route path="career" element={<Career />} />
          <Route path="media" element={<Media />} />

          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
