import React, { useRef, useState } from 'react';
import './Contact.css';
import BackButton from '../components/BackButton';

const Contact = () => {
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyuZht384GtjZ4xY-rDhXnMq5b56LEGkuw0U6lo7_xnrgMk5y8Uw5k_e3wj8krToYfPug/exec';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(formRef.current)
    })
      .then(response => {
        if (!response.ok) throw new Error(`Server error: ${response.status}`);
        return response.text();
      })
      .then(text => {
        console.log("Response:", text);
        setSuccess(true);
        formRef.current.reset();
        setTimeout(() => setSuccess(false), 3000);
      })
      .catch(error => {
        console.error('Error!', error.message);
        setError(true);
      });
  };



  //Na for the back button scrolling abi na scaling
  

  return (
    <main className="contact-main" style={{ fontFamily: "'Trebuchet MS', sans-serif", padding: "20px" }}>
      <BackButton />

      <div className="contact-right">

      

        <form name="submit-to-google-sheet" ref={formRef} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="budget" placeholder="Your Budget" required />
          <textarea name="description" rows="6" placeholder="Project Description" />
          <button type="submit" className="btn3 btn4">Submit</button>
          {success && (
            <span className="success-message">Message Sent!</span>
          )}
          {error && (
            <span className="error-message">Failed to send—try again!</span>
          )}
        </form>
      </div>

      <div className="socials-connect">
        <h3 className="connect-title">Connect With Me</h3>
        <div className="socials-links">
          <a href="https://x.com/onedrop45?s=21" target="_blank" rel="noopener noreferrer" className="socials-icons twitter">
            <span><i className="fab fa-twitter social-icon"></i> onedrop45</span>
          </a>
          <a href="https://www.instagram.com/onedrop42" target="_blank" rel="noopener noreferrer" className="socials-icons instagram">
            <span><i className="fab fa-instagram social-icon"></i> onedrop42</span>
          </a>
          <a href="https://www.facebook.com/share/1Cc5DEaVei/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="socials-icons facebook">
            <span><i className="fab fa-facebook fa-lg social-icon"></i>justclick</span>
          </a>
          <a href="https://www.linkedin.com/in/onedrop7274" target="_blank" rel="noopener noreferrer" className="socials-icons linkedin">
            <span><i className="fab fa-linkedin social-icon"></i>onedrop7274</span>
          </a>
        </div>
      </div>

      <div className="contacts">
        <div className="contact-info phones">
          <a href="tel:+12348154219951" className="contact-item phone" onClick={() => console.log("Phone clicked")}>
            <span><i className="fas fa-phone"></i> +1 (234) 815-421-9951</span>
          </a>
        </div>
        <div className="contact-info emails">
          <a href="mailto:esemekivwarovictory@gmail.com" className="contact-item email" onClick={() => console.log("Email clicked")}>
            <span><i className="fas fa-envelope"></i> esemekivwarovictory@gmail.com</span>
          </a>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright © 2025 Victory Esemekivwaro. All rights reserved.</p>
      </div>

      <button onClick={() => window.history.back()} className="btn btn-secondary mt-3">
        ← Back
      </button>
    </main>
  );
};

export default Contact;