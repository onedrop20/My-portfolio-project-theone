import React, { useState, useLayoutEffect, useRef } from "react";
import image1 from "../assets/images/web-image-1.jpg";
import image2 from "../assets/images/design-image-2.jpg";
import image3 from "../assets/images/design-image-3.jpg";
import image4 from "../assets/images/web-image-4.jpg";
import image5 from "../assets/images/web-image-5.jpg";
import image6 from "../assets/images/web-image-6.jpg";
import image7 from "../assets/images/ui-image-7.jpg";
import image8 from "../assets/images/image-1.jpg";
import image9 from "../assets/images/image-2.jpg";
import image10 from "../assets/images/image-3.jpg";
import image11 from "../assets/images/image-4.jpg";
import image12 from "../assets/images/image-5.jpg";
import image13 from "../assets/images/web-image0.jpg";
import image14 from "../assets/images/image-7.jpg";
import image15 from "../assets/images/image-8.jpg";
import image16 from "../assets/images/image-9.jpg";
import image17 from "../assets/images/image-10.jpg";
import image18 from "../assets/images/design.jpg";
import image19 from "../assets/images/designimage.jpg";

const extraProjects = [
  { id: 101, image: image1, title: "Modern E-commerce Store", description: "A fully responsive online shopping platform with a clean UI, smooth navigation, and product filtering. Designed for small businesses and large brands." },
  { id: 102, image: image2, title: "Corporate Business Website", description: "CA professional, high-converting landing page for businesses, featuring a sleek hero section, service highlights, and a contact form." },
  { id: 103, image: image1, title: "Personal/Agency Portfolio", description: "A visually appealing portfolio site designed to showcase projects, testimonials, and services for freelancers and agencies." },
  { id: 104, image: image1, title: "Analytics Dashboard", description: "-based dashboard with data visualization, charts, and reports for tracking business performance and analytics." },
  { id: 103, image: image1, title: "Minimalist Blog Platform", description: "A simple, modern blog UI with a focus on readability, featuring article previews, categories, and a dark mode toggle." },
];

const projectsData = [
  { id: 1, category: "app", image: image1 },
  { id: 2, category: "web", image: image2 },
  { id: 3, category: "app ui", image: image3 },
  { id: 4, category: "web ui", image: image4 },
  { id: 5, category: "ui", image: image5 },
  { id: 6, category: "app", image: image6 },
  { id: 7, category: "web", image: image7 },
  { id: 8, category: "web", image: image5 },
  { id: 9, category: "app", image: image1 },
  { id: 10, category: "ui", image: image2 },
  { id: 11, category: "app", image: image8 },
  { id: 12, category: "web", image: image9 },
  { id: 13, category: "ui", image: image10 },
  { id: 14, category: "web", image: image11 },
  { id: 15, category: "app", image: image12 },
  { id: 16, category: "app ui", image: image13 },
  { id: 17, category: "ui", image: image14 },
  { id: 18, category: "app", image: image15 },
  { id: 19, category: "web", image: image16 },
  { id: 20, category: "web", image: image17 },
  { id: 21, category: "web app ui", image: image18 },
  { id: 22, category: "web app", image: image19 },
];

// FLIP Animation
const ProjectItem = ({ project }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const newRect = node.getBoundingClientRect();

    if (node.__prevRect) {
      const deltaX = node.__prevRect.left - newRect.left;
      const deltaY = node.__prevRect.top - newRect.top;

      if (deltaX || deltaY) {
        node.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        node.style.transition = "transform 0s";

        requestAnimationFrame(() => {
          node.style.transform = "";
          node.style.transition = "transform 0.3s ease";
        });
      }
    }

    node.__prevRect = newRect;
  });

  return (
    <div ref={ref} className="grid-item">
      <img src={project.image} alt={`Project ${project.id}`} />
    </div>
  );
};

const Projects = () => {
  const [filterKey, setFilterKey] = useState("*");

  // Set how many images to show per category
  const imagesPerCategory = {
    web: 15, // Change this number to anything you want
    app: 10, // Change this number to anything you want
    ui: 17,  // Change this number to anything you want
  };

  // Filtered project list
  const filteredProjects =
  filterKey === "*"
    ? projectsData
    : projectsData.filter((project) => project.category.includes(filterKey));

// Apply category-based limits
const displayProjects =
  filterKey === "*"
    ? filteredProjects
    : filteredProjects.slice(0, imagesPerCategory[filterKey] || filteredProjects.length);

  return (
    <div className="container portfolio py-5 my-5">
      {/* Title */}
      <div className="container mb-3 d-flex justify-content-center">
        <h3 className="heading-shadow fs-2 mb-5">
          <b>My Latest Projects</b>
        </h3>
      </div>

      <div className="extra-projects">
  <h2>Projects</h2>
  <div className="projects-grid">
    {extraProjects.map((project) => (
      <div key={project.id} className="project-card">
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    ))}
  </div>
</div>


      {/* Filter Buttons */}
      <div className="filters col mb-5 text-center">
        <span
          onClick={() => setFilterKey("*")}
          className={filterKey === "*" ? "fw-bold" : ""}
        >
          All Projects
        </span>
        <span
          onClick={() => setFilterKey("web")}
          className={filterKey === "web" ? "fw-bold" : ""}
        >
          Web Design
        </span>
        <span
          onClick={() => setFilterKey("app")}
          className={filterKey === "app" ? "fw-bold" : ""}
        >
          App Design
        </span>
        <span
          onClick={() => setFilterKey("ui")}
          className={filterKey === "ui" ? "fw-bold" : ""}
        >
          UI Design
        </span>
      </div>

      {/* Projects Grid */}
      <div className="grid">
      {displayProjects.map((project) => (
    <ProjectItem key={project.id} project={project} />
        ))}
      </div>

      
     

      {/* Back Button */}
      <button onClick={() => window.history.back()} className="btn btn-primary mt-4">
        Go Back
      </button>
    </div>
  );
};

export default Projects;