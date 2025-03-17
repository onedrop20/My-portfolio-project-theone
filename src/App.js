import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";
import "./pages/style.css";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <Navbar />
      <div className='page'>
      <Routes>
  
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />  
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
