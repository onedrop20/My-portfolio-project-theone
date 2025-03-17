import React from "react";

const Services = () => {
  return (
    <main style={{ fontFamily: "'Trebuchet MS', sans-serif", padding: "20px" }}>
      <h1>Our Services</h1>
      <p>We offer high-quality services tailored to your needs.</p>

      <ul>
        <li>Service 1 - Description of service 1</li>
        <li>Service 2 - Description of service 2</li>
        <li>Service 3 - Description of service 3</li>
      </ul>

      {/* Last Projects */}
  <div className="container portfolio py-5 my-5">
    <div className="container mb-3 d-flex justify-content-center">
      <h3 className="heading-shadow fs-2 mb-5"><b>My Latest Projects</b></h3>
    </div>
    <div className="filters col mb-5 text-center">
      <span data-filter="*" className="me-4 fw-bold fs-5">All Projects</span>
      <span data-filter=".web" className="mx-4 fs-5">Web Design</span>
      <span data-filter=".app" className="mx-4 fs-5">App Design</span>
      <span data-filter=".ui" className="ms-4 fs-5">UI Design</span>
    </div>
    {/* Images */}
    <div className="row grid">
      <div className="col-4 mb-4 grid-item app">
        <img src="/images/portfolio/project1.png" className="shadow" alt="Project cover" />
      </div>
      <div className="col-4 mb-4 grid-item web">
        <img src="/images/portfolio/project2.png" className="shadow" alt="Project cover" />
      </div>
      <div className="col-4 mb-4 grid-item app ui">
        <img src="/images/portfolio/project3.png" className="shadow" alt="Project cover" />
      </div>
      <div className="col-4 mb-4 grid-item web ui">
        <img src="/images/portfolio/project4.png" className="shadow" alt="Project cover" />
      </div>
      <div className="col-4 mb-4 grid-item ui">
        <img src="/images/portfolio/project5.png" className="shadow" alt="Project cover" />
      </div>
      <div className="col-4 mb-4 grid-item app">
        <img src="/images/portfolio/project6.png" className="shadow" alt="Project cover" />
      </div>
      <div className="col-4 mb-4 grid-item web">
        <img src="/images/portfolio/project7.png" className="shadow" alt="Project cover" />
      </div>
    </div>
  </div>

      <button onClick={() => window.history.back()} className="btn btn-secondary">
        ← Back
      </button>
    </main>
  );
};

export default Services;