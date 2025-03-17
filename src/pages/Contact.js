import React from "react";

const Contact = () => {
  return (
    <main style={{ fontFamily: "'Trebuchet MS', sans-serif", padding: "20px" }}>
      <h1>Contact Us</h1>
      <p>Reach out to us for any inquiries or assistance.</p>

      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Your Email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>

      <button onClick={() => window.history.back()} className="btn btn-secondary mt-3">
        ← Back
      </button>
    </main>
  );
};

export default Contact;