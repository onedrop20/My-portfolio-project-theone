import React, { useState } from "react";
import Logo from "../assets/images/onedroplogo.PNG";
import resumeImage from "../assets/images/my-resume.PNG";
import { Link } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {
  const [showLightbox, setShowLightbox] = useState(false);
  return (
    <main style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>
      {/* Header Section */}
      <header>
      
          

        {/* Hero Section */}
      <section className="container text-center my-5">
        <h1>Welcome to My Business</h1>
        <p>Your one-stop solution for amazing services.</p>
        
      </section>
      {/* Added Content */}
<div className="row">
  {/* Header Picture */}
  <div className="col">
  <img 
  src="https://i.postimg.cc/x8PQnB2W/IMG-3024.jpg" 
  alt="Victory's profile header" 
/>
  </div>
  
  {/* Header Text */}
  <div className="col pt-5 mt-5">
    <p className="display-6"><b>Hi!</b></p>
    <h1 className="display-4"><b>My name is Victory.</b></h1>
    <h4 className="welcome">Welcome to my website.</h4>
    
    {/* Abilities */}
    <div className="abilities mt-4">
      <span className="ability-item">Programmer</span>
      <span className="divider mx-2">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16"
          fill="currentColor" 
          className="bi bi-diamond-half" 
          viewBox="0 0 16 16"
        >
          <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 .989c.127 0 .253.049.35.145l6.516 6.516a.495.495 0 0 1 0 .7L8.35 14.866a.493.493 0 0 1-.35.145V.989z" />
        </svg>
      </span>
      <span className="ability-item">Web Designer</span>
      <span className="divider mx-2">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16"
          fill="currentColor" 
          className="bi bi-diamond-half" 
          viewBox="0 0 16 16"
        >
          <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 .989c.127 0 .253.049.35.145l6.516 6.516a.495.495 0 0 1 0 .7L8.35 14.866a.493.493 0 0 1-.35.145V.989z" />
        </svg>
      </span>
      <span className="ability-item">Project Manager</span>
    </div>
  </div>
</div>

{/* Social Links */}
<div className="social-links d-flex">
  {/* Instagram */}
  <span className="social-item me-3">
    <i className="fab fa-instagram fa-2x"></i>
  </span>

  {/* Facebook */}
  <span className="social-item mx-3">
    <i className="fab fa-facebook fa-2x"></i>
  </span>

  {/* Twitter */}
  <span className="social-item mx-3">
    <i className="fab fa-twitter fa-2x"></i>
  </span>

  {/* GitHub */}
  <span className="social-item mx-3">
    <i className="fab fa-github fa-2x"></i>
  </span>

  {/* LinkedIn */}
  <span className="social-item ms-3">
    <i className="fab fa-linkedin fa-2x"></i>
  </span>
</div>
      </header>


{/* Info Section */}
<div className="container py-5 my-5">
        <div className="row align-items-center">
          {/* User Bio */}
          <div className="col-8">
            <h3 className="heading-shadow mb-5 fs-2">
              <b>About Me</b>
            </h3>

            {/* Bio Text */}
            <div className="content mb-4 pe-5">
              <p>
                <strong>Helping Your Business Grow Online</strong>
                <br />
                We specialize in creating modern and professional websites that help businesses establish a strong online presence. Our services include:
              </p>
              <ul>
                <li>
                  <strong>Website Design</strong> – Custom, responsive websites tailored to your brand.
                </li>
                <li>
                  <strong>Social Media Marketing</strong> – Boost your business visibility and engagement.
                </li>
                <li>
                  <strong>SEO Optimization</strong> – Rank higher on search engines and attract more customers.
                </li>
              </ul>
              <p>
                <strong>Let’s take your business to the next level!</strong>
              </p>

              <p>
                <strong>Your Success, Our Priority!</strong>
                <br />
                We are committed to delivering high-quality digital solutions that help businesses thrive. Whether you need a website, better online visibility, or branding strategies, we’ve got you covered. Our team ensures professional and reliable services tailored to your needs.
              </p>

              <p>
                <strong>Transforming Ideas into Reality</strong>
                <br />
                We specialize in creating innovative solutions to help businesses grow. From website design to digital marketing, our services are designed to give you a competitive edge. Let’s bring your vision to life with expertise and creativity.
              </p>
            </div>
          </div>
        </div>
      </div>
    

  {/* My Resume Button */}
  <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      {/* Button to show the resume */}
      <button
        className="btn btn-outline-dark btn-lg rounded-0 w-25 my-4 border border-dark border-3"
        style={{ top: "-100px" }}
        onClick={() => setShowLightbox(true)}
      >
        My Resume
      </button>

      {/* Lightbox container */}
      {showLightbox && (
        <div id="lightbox" style={styles.lightbox}>
          <button id="close-btn" style={styles.closeBtn} onClick={() => setShowLightbox(false)}>
            ✖
          </button>
          <img id="resume-image" src={resumeImage} alt="My Resume" style={styles.image} />
        </div>
      )}
    

  {/* Hire Me Button */}
  <button 
  className="btn btn-dark btn-lg rounded-0 w-25 border border-dark border-3 ms-3" 
  style={{ top: "-100px" }}
  onClick={() => window.open("https://wa.me/2348154219951", "_blank")}
>
  Hire Me!
</button>
</div>

{/* progress */ }
<div className="row">
  <div className="col">
    <div>
      <span>Online Marketing</span>
      <span className="float-end pe-5 me-3">80%</span>
    </div>
    <div className="progress">
      <div className="progress-bar bg-dark" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <br />
    <div>
      <span>Web Design</span>
      <span className="float-end pe-5 me-3">65%</span>
    </div>
    <div className="progress">
      <div className="progress-bar bg-dark" role="progressbar" style={{ width: "65%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>

  <div className="col">
    <div>
      <span>Content Creation</span>
      <span className="float-end pe-5 me-3">50%</span>
    </div>
    <div className="progress">
      <div className="progress-bar bg-dark" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <br />
    <div>
      <span>Project Management</span>
      <span className="float-end pe-5 me-3">40%</span>
    </div>
    <div className="progress">
      <div className="progress-bar bg-dark" role="progressbar" style={{ width: "40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</div>

{/* Service Section */}
<div className="container pt-5 mt-5 d-flex justify-content-center bg-light">
        <h3 className="heading-shadow fs-2 mb-5"><b>My Services</b></h3>
      </div>

      {/* Cards */}
      <div className="container bg-light">
        <div className="row pb-5 d-flex justify-content-center">
          {/* Card 1 - Project Management */}
          <div className="card border-0 card-hover mx-3 mt-3 mb-4" style={{ width: "18rem" }}>
            <div className="card-content text-center">
              <i className="fas fa-users fa-3x"></i>
              <p className="h4 font-weight-normal mt-3">Project Management</p>
              <p className="description mt-2">
                We specialize in efficient project management, ensuring smooth workflows, clear communication, and timely delivery. From planning to execution, we handle every step professionally to achieve the best results for your business.
              </p>
            </div>
          </div>

          {/* Card 2 - Content Creation */}
          <div className="card border-0 card-hover mx-3 mt-3 mb-4" style={{ width: "18rem" }}>
            <div className="card-content text-center">
              <i className="fas fa-file-alt fa-3x"></i>
              <p className="h4 font-weight-normal mt-3">Content Creation</p>
              <p className="description mt-2">
                We create high-quality content that engages your audience and strengthens your brand. From compelling copywriting to eye-catching visuals and videos, we craft content tailored to your business needs, helping you attract and retain customers.
              </p>
            </div>
          </div>

          {/* Card 3 - UI/UX Design */}
          <div className="card border-0 card-hover mx-3 mt-3 mb-4" style={{ width: "18rem" }}>
            <div className="card-content text-center">
              <i className="fas fa-layer-group fa-3x"></i>
              <p className="h4 font-weight-normal mt-3">UI/UX Design</p>
              <p className="description mt-2">
                We design user-friendly and visually appealing interfaces that enhance user experience. Our goal is to create intuitive, responsive, and engaging designs that make navigation seamless and enjoyable for your customers.
              </p>
            </div>
          </div>

          {/* Card 4 - Web Design */}
          <div className="card border-0 card-hover mx-3 mt-3 mb-4" style={{ width: "18rem" }}>
            <div className="card-content text-center">
              <i className="fas fa-globe fa-3x"></i>
              <p className="h4 font-weight-normal mt-3">Web Design</p>
              <p className="description mt-2">
                We design modern, responsive, and user-friendly websites tailored to your business needs. Whether it’s a landing page, portfolio, or e-commerce store, we ensure your site is visually appealing, functional, and optimized for all devices.
              </p>
            </div>
          </div>
        </div>
      </div>
{/* resume experiences */}

<div className="container pt-5 mt-5 d-flex justify-content-center bg-light">
  <h3 className="heading-shadow fs-2 mb-5">Resume & Experiences</h3>
</div>

{/* Cards */}
<div className="container resume bg-light">
  <div className="row p-5">
    {/* Col 1 (Education) */}
    <div className="col-md-6 col-12">
      <div className="header mb-4">
        <h4 className="fw-normal">
          <i className="fas fa-graduation-cap me-2 mb-1"></i>
          <span>Educational Background</span>
        </h4>
      </div>

      {/* Card 1 */}
      <div className="card shadow border-0 my-4 mx-auto card-hover" style={{ maxWidth: "100%" }}>
        <div className="card-body">
          <span className="text-muted">2020 - Present</span>
          <h4 className="my-4 fw-bold">Computer Science Studies</h4>
          <p className="text-muted">
          I have gained experience in computer science through secondary school education, online courses, and continuous self-learning. My focus has been on web development, UI/UX design, and content creation.
          </p>
          <p className="text-muted fs-5 fw-bold">Delta State, Nigeria</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card shadow border-0 my-4 mx-auto card-hover" style={{ maxWidth: "100%" }}>
        <div className="card-body">
          <span className="text-muted">2020 - Present</span>
          <h4 className="my-4 fw-bold">Web Development</h4>
          <p className="text-muted">
          Gaining expertise in computer science through secondary school education, online learning, and university studies. 
          Focused on programming, web development, and digital solutions.
          </p>
          <p className="text-muted fs-5 fw-bold">Delta State, Nigeria</p>
        </div>
      </div>

      {/* card 3 */}
      <div className="card shadow border-0 my-4 mx-auto card-hover" style={{ maxWidth: "100%" }}>
        <div className="card-body">
          <span className="text-muted">2021 - Present</span>
          <h4 className="my-4 fw-bold">Computer Science Studies</h4>
          <p className="text-muted">
          Studied computer science in secondary school, continued learning through online courses, and currently a student at the university.
          </p>
          <p className="text-muted fs-5 fw-bold">Delta State, Nigeria</p>
        </div>
      </div>
    </div>

    {/* Col 2 (Work Experience) */}
    <div className="col-md-6 col-12">
      <div className="header mb-4">
        <h4 className="fw-normal">
          <i className="fas fa-briefcase me-2 mb-1"></i>
          <span>Work Experience</span>
        </h4>
      </div>

      {/* Card 1 */}
      <div className="card shadow border-0 my-4 mx-auto card-hover" style={{ maxWidth: "100%" }}>
        <div className="card-body">
          <span className="text-muted">2021 - Present</span>
          <img src={Logo} alt="logo" style={{ width: " 35px" }} />
          <div className="d-flex align-items-center my-4">
           <i className="fa-solid fa-laptop-code" style={{ fontSize: "30px", marginRight: "30px" }}></i>
           <h4 className="fw-bold mb-0">Freelance & Projects</h4>
          </div>
          <p className="text-muted">
          I have experience in web development, UI/UX design, content creation, and social media management. 
          I’ve worked on various projects, building websites, managing online presence, and designing user-friendly interfaces.
          </p>
          <p className="text-muted fs-5 fw-bold">Web Developer</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card shadow border-0 my-4 mx-auto card-hover" style={{ maxWidth: "100%" }}>
        <div className="card-body">
          <span className="text-muted">2021 - Present</span>
          <div className="d-flex align-items-center my-4">
          <i className="fa-solid fa-palette" style={{ fontSize: "30px", marginRight: "20px" }}></i>
          <h4 className="fw-bold mb-0">Website Development & Design</h4>
          </div>
          <p className="text-muted">
          Specializing in creating professional, responsive, and user-friendly websites for businesses and individuals.  
          I focus on clean designs, functionality, and optimizing user experience to ensure a strong online presence.
          </p>
          <p className="text-muted fs-5 fw-bold">UI Designer</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card shadow border-0 my-4 mx-auto card-hover" style={{ maxWidth: "100%" }}>
        <div className="card-body">
          <span className="text-muted">2021 - Present</span>
          <div className="d-flex align-items-center my-4">
            <i className="fa-solid fa-server fa-lg text-primary" style={{ fontSize: "30px", marginRight: "30px" }}></i>
            <h4 className="fw-bold mb-0">Backend Development</h4>
          </div>
          <p className="text-muted">
            Specializing in building fast, secure, and scalable backend systems for websites and applications.  
            Our expertise ensures seamless data management, API integration, and reliable server performance
          </p>
          <p className="text-muted fs-5 fw-bold">Server Programmer</p>
        </div>
      </div>

    </div>
  </div>
</div>

<section>
  <p style={{ marginLeft: "10px" }}>We are dedicated to delivering high-quality services tailored to your needs. Whether you’re looking for web development, social media management, or digital solutions, we ensure every project is handled with expertise and attention to detail. Let’s collaborate and bring your vision to life!</p>
<p style={{ fontSize: "-30px", marginLeft: "20px" }}>Thank you for considering our services. We look forward to working with you and helping you achieve your goals!</p>
<p style={{ fontSize: "18px", fontWeight: "500", marginBottom: "10px", marginLeft: "10px" }}>
Ready to take your project to the next level? Let's make it happen together!
</p>
</section>
<footer>
  <Link to="/about">
  <button className="btn2 btn-primary"
  style={{ marginTop: "50px",
  backgroundColor: "none",
  marginLeft: "250px",
  border: "none",
  outline: "none",
  boxShadow: "none",
   }}
  >
    Learn More
    </button>
  </Link>
</footer>
</main>
  );
};



const styles = {
  lightbox: {
    display: "flex",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  closeBtn: {
    position: "absolute",
    top: "20px",
    right: "20px",
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "24px",
    cursor: "pointer",
  },
  image: {
    maxWidth: "90%",
    maxHeight: "90%",
    borderRadius: "8px",
  },
};

export default Home;