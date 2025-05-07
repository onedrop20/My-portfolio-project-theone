import React from "react";

import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-dark text-white text-center py-5"
      style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", marginTop: "80px" }}
    >
      <div className="container">
        {/* Footer Sections */}
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-uppercase">About Me</h5>
            <p style={{ fontSize: "14px", opacity: "0.9" }}>
              I specialize in web development, UI/UX design, and digital solutions. 
              Let's build something great together!
            </p>
          </div>

          {/* Collaboration & Discord Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-uppercase">Collaboration</h5>
            <p 
              className="text-muted" 
              style={{ fontSize: "14px", fontStyle: "italic" }}
            >
              Open to collaborations! Contact me on Discord if you're interested.
            </p>
            <div 
              className="d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#5865F2",
                padding: "8px 15px",
                borderRadius: "8px",
                display: "inline-flex",
              }}
            >
              <i className="fab fa-discord fa-lg text-white me-2"></i>
              <span className="fw-bold" style={{ color: "#fff", fontSize: "16px" }}>
                onedrop123
              </span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4 mb-4 text-center">
                <h5 className="fw-bold text-uppercase mb-3">Follow Me</h5>
          <div className="d-flex justify-content-center gap-3">
                <a href="https://www.facebook.com/share/1Cc5DEaVei/?mibextid=wwXIfr" className="text-white" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook fa-lg social-icon"></i>
                </a>
                <a href="https://x.com/onedrop45?s=21" className="text-white" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-x-twitter fa-lg social-icon"></i>
                </a>
                <a href="https://www.instagram.com/onedrop42" className="text-white" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram fa-lg social-icon"></i>
                </a>
                <a href="https://www.linkedin.com/in/omamerhi-esemekivwaro-861837274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-white" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-lg social-icon"></i>
                </a>
                <a href="https://www.reddit.com/u/OneDrop66/s/83V8uqIUjF" className="text-white" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-reddit-alien fa-lg social-icon"></i>
                </a>
                </div>
                </div>

          </div>





        {/* Copyright Section */}
        <div className="mt-4">
          <p 
            className="mb-0 small"
            style={{ fontSize: "12px", letterSpacing: "1px", marginTop: "130px" }}
          >
            &copy; {currentYear} Esemekivwaro Omamerhi, AKA OneDrop. All rights reserved.
          </p>
        </div>
        {/* Quick Links Section */}
        <div className="footer-links">
        <div className="quick-links">
       <div className="">
         <h5 className="fw-bold text-uppercase quick-links">Quick Links</h5>
       <div className="quick-links d-flex flex-column align-items-center">
        <a href="/" className="mb-2">Home</a>
        <a href="/about" className="mb-2">About</a>
        <a href="/services" className="mb-2">Services</a>
        <a href="/contact" className="mb-2">Contact</a>
       </div>
       </div>
       </div>
       </div>
{/* Newsletter Signup */}
<div className="stay-updated">
  <h5 className="fw-bold text-uppercase">Stay Updated</h5>
  <p style={{ fontSize: "14px", opacity: "0.9" }}>
    Get the latest on projects and collabs!
  </p>
</div>

      </div>

      <div className="">
  <h5 className="fw-bold text-uppercase">Stay Updated</h5>
  <p style={{ fontSize: "14px", opacity: "0.9" }}>
    Newsletter coming soon—stay tuned for updates!
  </p>
  <div className="newsletter d-flex justify-content-center">
    <input type="email" placeholder="Your Email" disabled />
    <button disabled>Sign Up</button>
  </div>
</div>
    </footer>
  );
};

export default Footer;