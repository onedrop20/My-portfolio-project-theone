import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import WhatsAppButton from "./components/WhatsAppButton";
import "./pages/style.css";
import ScrollToTop from "./ScrollToTop";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // Redirect invalid routes to "/" on initial load
    const validRoutes = [
      "/",
      "/home",
      "/about",
      "/services",
      "/projects",
      "/blog",
      "/contact",
    ];
    if (!validRoutes.includes(location.pathname)) {
      navigate("/", { replace: true });
    }
    setIsReady(true);
  }, []); // Empty array: runs only on mount
    if (!isReady) {
      return null;
    }
  return (
    <div className="page">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}