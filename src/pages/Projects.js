import React, { useState, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import BackButton from "../components/BackButton";
import image1 from "../assets/images/e-commerce-website.jpg";
import image2 from "../assets/images/business-website.jpg";
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
import image20 from "../assets/images/agency-portfolio.jpg";
import image21 from "../assets/images/analistic dashboard.jpg";
import image22 from "../assets/images/blog-platform.jpg";

const extraProjects = [
  { id: 101, image: image1, title: "Modern E-commerce Store",
     description: "A fully responsive online shopping platform with a clean UI, smooth navigation, and product filtering. Designed for small businesses and large brands.", 
     slug: "ecommerce", 
     head: "E-Commerce Website Overview",
     details: "This e-commerce website is a modern, user-friendly platform built to deliver a seamless shopping experience for both customers and administrators. It combines a clean design, robust functionality, and mobile responsiveness to ensure the store works smoothly on all devices.",
     secondhead: "Design & Layout",
     seconddetails: "The layout is minimalist yet effective. The homepage highlights featured products, promotional banners, and key categories, making it easy for visitors to navigate and discover what they’re looking for. Each product page includes high-resolution images, clear pricing, concise descriptions, and user-friendly “Add to Cart” buttons.",
     thirdhead: "User Experience",
     thirddetails: "Customer experience was a top priority in development. Shoppers can create accounts, manage their profiles, track orders, and save favorites. The checkout process is fast and simple, offering options for both registered users and guests. It supports multiple payment gateways like Paystack, Flutterwave, or others depending on the region, with secure, encrypted transactions.",
     fourthhead: "Admin Dashboard",
     fourthdetails: "The site includes an intuitive admin panel for store owners. From here, products can be added, edited, or deleted, and inventory can be tracked in real-time. Administrators can also view and manage orders, adjust homepage content, and update categories — all without touching the code.",
     fifthhead: "Features",
     fifhdetails: "•	Mobile Responsive: Fully optimized for phones and tablets.",
     fifthone: "•	Secure Payments: Integrated with trusted payment gateways.",
     fifthtwo: "•	Fast Loading: Assets are optimized, and images are lazy-loaded for performance.",
     fifththree: "•	SEO Friendly: Clean URLs, meta tags, and structured data help with search engine rankings.",
     fifthfour: "•	Email Notifications: Customers receive order confirmations and shipping updates automatically.",
     fifthfive: "•	Dark Mode Ready: Optional theme toggles for user preference.",
     sixthhead: "Hosting & Deployment",
     sixthdetails: "This platform can be hosted on services like Netlify, Vercel, or traditional servers depending on the tech stack. It supports both static and dynamic content, making it easy to scale as your business grows.",
    
    },

  { id: 102, image: image2, title: "Corporate Business Website",
     description: "A professional, high-converting landing page for businesses, featuring a sleek hero section, service highlights, and a contact form.",
     slug: "business-site",
     head: "Corporate Business Website Overview",
     details: "This corporate business website was designed to establish a strong digital presence for a professional brand. It’s clean, modern, and tailored to reflect credibility, trust, and industry authority. Built with scalability and user experience in mind, the site functions as a central hub for showcasing the company’s services, values, and impact.",
     secondhead: "Design & Branding",
     seconddetails: "The visual identity of the website is carefully aligned with the company’s brand. It features a consistent color scheme, professional typography, and intuitive layouts that guide users naturally through the content. The homepage includes a hero section with a bold statement, a short intro about the company, and key CTAs (Calls to Action) to encourage interaction.",
     thirdhead: "Navigation & Structure",
     thirddetails: "The site structure is simple yet effective, allowing users to find what they need without confusion. Key sections include About Us, Services, Portfolio/Case Studies, Team, Careers, and Contact. Each page is designed to tell a story — from the company’s mission to its real-world impact and client success stories.",
     fourthhead: "Backend & CMS",
     fourthdetails: "Depending on your tech stack, the website may be powered by a simple CMS (like WordPress, Sanity, or a custom admin panel) to allow non-developers to update content easily. This means you can regularly update text, images, or news articles without editing any code.",
     fifthhead: "Core Features",
     fifhdetails: "•	Responsive Design: Optimized to look great on desktops, tablets, and mobile devices.",
     fifthone: "•	SEO Optimization: Built with semantic HTML, meta tags, and fast-loading pages to enhance visibility on search engines.",
     fifthtwo: "•	Service Listings: Each service has a dedicated page with detailed descriptions, benefits, and visuals.",
     fifththree: "•	Team Section: Professionally presented team bios with photos, roles, and LinkedIn links to build trust.",
     fifthfour: "•	Contact Form: Includes a dynamic contact form with validation and email integration, alongside Google Maps for physical office locations.     ",
     fifthfive: "•	Blog or News Page: An optional blog for company updates, press releases, or insights to boost engagement and SEO.",
     sixthhead: "Performance & Hosting",
     sixthdetails: "The website is lightweight, well-optimized, and hosted on reliable platforms such as Vercel, Netlify, or traditional VPS hosting. It uses caching and content delivery networks (CDNs) to ensure fast global loading speeds.",
     seventhhead: "Security & Compliance",
     seventhdetails: "SSL encryption, form protection, and GDPR compliance features are included to meet modern security standards. The site is built with best practices to ensure data protection and safe browsing for all users.",

    },


  { id: 103, image: image20, title: "Personal/Agency Portfolio",
     description: "A visually appealing portfolio site designed to showcase projects, testimonials, and services for freelancers and agencies.",
     slug: "portfolio",
     head: "Portfolio Website Overview",
     details: "The personal/agency portfolio website was built to serve as a bold, modern representation of individual creativity and professional skill. Whether for a freelancer, designer, developer, or creative agency, the site is crafted to leave a lasting impression on visitors and potential clients. It blends strong visuals, intuitive navigation, and strategic storytelling to showcase work, talent, and professionalism.",
     secondhead: "Tech Stack",
     seconddetails: "Built using modern tools such as React, Next.js, or Vue, with styling handled through Tailwind CSS, SCSS, or styled-components. Hosting is handled via platforms like Vercel, Netlify, or GitHub Pages for fast and secure delivery.",
     thirdhead: "Design Philosophy",
     thirddetails: "Simplicity meets elegance. The layout is minimal yet visually engaging, allowing the work to speak for itself. Smooth animations, a dark/light mode toggle (optional), and bold use of white space help highlight key projects and skills. Every section is optimized for readability and clarity, with a strong focus on UX and UI.",
     fifthhead: "Key Sections",
     fifhdetails: "•	Hero Section: A powerful intro that includes a name or agency title, a brief tagline, and a strong call to action. It’s the first visual handshake and sets the tone for the rest of the site.",
     fifthone: "•	About Section: A concise but engaging overview of the person or team — including background, experience, philosophy, and personality. It’s more than just a resume; it tells a story.",
     fifthtwo: "•	Skills or Services: Clearly outlined areas of expertise, with icons or short descriptions to make them easily scannable.",
     fifththree: "•	Portfolio or Case Studies: This is the centerpiece of the website. Each project is presented with visuals, context, tools used, and the impact/outcome. Clicking into a project reveals deeper insights and processes.",
     fifthfour: "•	Testimonials: If available, this section includes real feedback from past clients or collaborators to build credibility.     ",
     fifthfive: "•	Blog or Articles (Optional): A section for sharing thoughts, tutorials, or industry insights. Great for SEO and positioning yourself as an authority.",
     sixthfive: "•	Contact Section: A clean contact form, social media links, and (if applicable) downloadable resume or media kit.",
     sixthhead: "Features & Functionality",
     sixthdetails: "•	Responsive Design: Fully optimized for all screen sizes and devices.",
     seventhone: "•	Performance Optimized: Fast load times, lazy loading for images, and clean code ensure top performance.",
     seventhtwo: "•	SEO Friendly: Meta tags, proper heading structure, and alt text are all in place to support discoverability.",
     sevenththree: "•	Interactive Elements: Smooth hover effects, animated transitions, and possibly a dark/light mode switch to enhance user interaction.",
     seventhfour: "•	CMS Integration (Optional): If needed, a simple CMS or headless setup (like Sanity or Strapi) allows easy updates to portfolio items or blog posts without touching the code.",
     seventhhead: "Final Touch",
     seventhdetails: "Whether the goal is to attract clients, land a dream job, or just share work with the world, this portfolio website acts as a personal billboard — clean, confident, and customizable. It’s not just a site; it’s a digital identity.",
    
    },

  { id: 104, image: image21, title: "Analytics Dashboard",
     description: "Web-based dashboard with data visualization, charts, and reports for tracking business performance and analytics.",
      slug: "dashboard",
       head: "Project Overview",
       details: "The analytics dashboard was designed and built as a powerful yet user-friendly interface for tracking and visualizing key performance data. Whether it’s used for website traffic, sales, marketing campaigns, or user behavior, the dashboard serves as a centralized hub that presents complex data in a way that’s easy to understand and take action on.",
       secondhead: "Purpose & Use Case",
       seconddetails: "This dashboard is built for decision-makers—managers, marketers, business analysts, or developers—who need real-time insights to monitor progress and performance. It supports various metrics like sales trends, customer engagement, revenue growth, conversion rates, and more, depending on the specific needs of the platform it’s integrated into.",
       thirdhead: "Design & User Experience",
       thirddetails: "The UI is clean and responsive, balancing clarity with aesthetics. A modern layout with a sidebar navigation ensures that users can switch between views without confusion. The color scheme is thoughtfully chosen to distinguish different data categories while maintaining visual harmony. Charts, tables, and summary cards are presented with just the right amount of padding and hierarchy to avoid overwhelming users.",
       fifthhead: "Key Features",
       fifhdetails: "•	Real-Time Data Sync: The dashboard fetches and updates data automatically or on demand, ensuring users are always looking at the latest numbers.",
       fifthone: "•	Dynamic Charts & Graphs: Includes line charts, bar graphs, pie charts, and donut charts using libraries like Chart.js, Recharts, or ApexCharts for powerful visualizations.",
       fifthtwo: "•	Customizable Date Ranges: Users can filter metrics by today, yesterday, last 7 days, last month, or custom ranges to dive deeper into specific periods.",
       fifththree: "•	KPIs & Summary Cards: Key Performance Indicators are presented at the top of each section, offering quick insights such as total revenue, user count, bounce rate, or conversions.",
       fifthfour: "•	Filter & Search: Allows users to apply filters to drill down by product, category, region, user type, or other dimensions.",
       fifthfive: "•	Dark/Light Mode (Optional): A toggle for switching between themes to reduce eye strain and match user preferences.",
       fifthsix: "•	Export Options: Users can download reports or export chart data as CSV, PDF, or image files for presentations and documentation.",
       sixthhead: "Tech Stack",
       sixthdetails: "This analytics dashboard is developed using React or Vue.js for the frontend, powered by state management tools like Redux, Context API, or Pinia. Data is pulled from APIs—either mocked, RESTful, or GraphQL—and displayed using advanced charting libraries. Backend support (if any) might include Node.js, Express, or integration with cloud services and databases like Firebase, MongoDB, or Supabase.",
       seventhhead: "Security & Performance",
       seventhdetails: "Security is enforced through secure API handling, role-based access (if applicable), and sanitization of user inputs. Performance is a top priority—lazy loading, pagination, and data caching ensure smooth operation even with large datasets.",
       eighthead: "Final Thoughts",
       eightdetails: "This analytics dashboard isn’t just a tool—it’s a digital control room. Designed for clarity and built for performance, it empowers users with the information they need, when they need it, in a format they can trust. Whether used internally by a team or offered as a feature in a SaaS product, this dashboard is built to scale, evolve, and deliver impact.",
      },

  { id: 105, image: image22, title: "Minimalist Blog Platform",
     description: "A simple, modern blog UI with a focus on readability, featuring article previews, categories, and a dark mode toggle.",
      slug: "blog",
      head: "Project Overview",
      details: "The Minimalist Blog Platform was built with a content-first philosophy, focusing on simplicity, speed, and readability. It offers writers, developers, and thought leaders a distraction-free space to publish and manage blog content without unnecessary clutter or overwhelming features. The platform is designed to be lightweight and elegant, delivering a seamless reading experience across all devices.",
      secondhead: "Purpose & Vision",
      seconddetails: "The primary goal of this blog platform is to provide a digital space where content truly shines. It avoids flashy UI elements and instead emphasizes typography, spacing, and layout consistency. Whether you’re a solo blogger or a developer writing technical articles, the platform is designed to keep things intuitive and minimal while still powerful under the hood.",
      thirdhead: "User Interface & Design",
      thirddetails: "The UI follows a clean, modern aesthetic with a monochromatic or neutral color palette to enhance readability. The layout is intentionally spacious, allowing text and images to breathe. Navigation is straightforward—typically featuring just a home page, post archive, tags/categories, and an about page. Dark mode support is also available for comfort during nighttime reading.",
      fifthhead: "Core Features",
      fifhdetails: "•	Markdown-Based Writing: Users can write posts in Markdown, keeping content creation fast and simple, with support for headings, code blocks, images, and links.",
      fifthone: "•	Tags & Categories: Blog posts can be organized and filtered by tags and categories for better content discovery.",
      fifthtwo: "•	Responsive Layout: The design is mobile-first, ensuring content looks great on phones, tablets, and desktops.",
      fifththree: "•	Fast Loading: Built with performance in mind, the platform loads quickly thanks to optimized assets and a static or semi-static architecture.",
      fifthfour: "•	SEO-Friendly: Clean semantic HTML, fast load times, and proper meta tagging make the platform easy to index and rank well in search engines.",
      fifthfive: "•	No Bloat: No unnecessary plugins, pop-ups, or flashy components—just the essentials for a focused reading experience.",
      fifthsix: "•	RSS Feed Support: Readers can subscribe via RSS, making it easy to keep up with new posts.",
      sixthhead: "Tech Stack",
      sixthdetails: "The platform is typically built with technologies like Next.js, React, or a static site generator like Eleventy or Hugo, depending on the preferred deployment strategy. Content is either managed in flat Markdown files or through a headless CMS like Sanity, Contentful, or Strapi. Deployment is handled via Netlify, Vercel, or GitHub Pages for speed and simplicity.",
      seventhhead: "Security & Maintenance",
      seventhdetails: "Security is straightforward due to its static or decoupled nature—minimal attack surfaces and no traditional backend to maintain. Regular updates to dependencies and frameworks ensure long-term reliability and safety.",
      eighthead: "Final Thoughts",
      eightdetails: "This Minimalist Blog Platform proves that less can truly be more. By removing distractions and emphasizing high-quality content, it creates an environment where readers stay engaged and writers can focus purely on what matters—sharing their thoughts and ideas. It’s the ideal platform for those who value simplicity, performance, and clean design in their digital publishing experience.",
      },

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
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleDetails = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

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


     //Na for the back button scrolling abi na scaling
     

  return (
    <div>
    <BackButton />
    <div className="container portfolio py-5 my-5">

      

      {/* Title */}
      <div className="container mb-3 d-flex justify-content-center">
        <h3 className="heading-shadow ">
        <b>My Latest Projects</b>
        </h3>
      </div>

      
   <section>
     <div className="latest-projects-intro">
      <h3>Discover My Craft</h3>
      <p>Welcome to a showcase of my <strong>finest work</strong>, where every project tells a story of innovation and dedication. From <em>responsive e-commerce platforms</em> to sleek business sites, I pour my heart into creating digital experiences that captivate and convert.</p>
      <h4>Why My Projects Stand Out</h4>
      <p>My designs prioritize <strong>user engagement</strong> and seamless functionality, built with tools like React and Node.js. Each project is crafted to meet client needs, ensuring <em>fast load times</em>, intuitive navigation, and stunning visuals that leave a lasting impression.</p>
      <h5>Explore the Possibilities</h5>
      <p>Dive into my portfolio to see how I transform ideas into reality. Whether it’s a <strong>dynamic dashboard</strong> or a minimalist blog, my work blends creativity with precision. Let’s collaborate to bring <em>your vision</em> to life with a custom solution!</p>
     </div>
   </section>

      <div className="extra-projects">
        <h2>Projects</h2>
        <p className="time-travel-stuff">Welcome to my project showcase, where creativity meets functionality. Each project here is a testament to my passion for building responsive, user-friendly web solutions that make an impact. From sleek e-commerce platforms to dynamic portfolios and data-driven dashboards, I craft experiences that blend modern design with cutting-edge tech. My work is tailored to empower businesses and individuals, ensuring seamless navigation and engaging visuals. Dive in to explore how I bring ideas to life with tools like React, Node.js, and more. Let’s create something extraordinary together!</p>
        <div className="projects-grid">
          {extraProjects.map((project) => (
            <div key={`${project.id}-${project.slug}`} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button
                onClick={() => toggleDetails(project.id)}
                className="btn btn-outline-dark btn-sm mt-2"
              >
                {expandedProject === project.id ? "Hide Details" : "View More"}
              </button>
              {expandedProject === project.id && (
                <div className="project-details transition">
                <h6>{project.head}</h6>
                  <p>{project.details}</p>

                  <h6>{project.secondhead}</h6>
                  <p>{project.seconddetails}</p>

                  <h6>{project.thirdhead}</h6>
                  <p>{project.thirddetails}</p>

                  <h6>{project.fourthhead}</h6>
                  <p>{project.fourthdetails}</p>

                  <h6>{project.fifthhead}</h6>
                  <p>{project.fifhdetails}</p>
                  <p>{project.fifthone}</p>
                  <p>{project.fifthtwo}</p>
                  <p>{project.fifththree}</p>
                  <p>{project.fifthfour}</p>
                  <p>{project.fifthfive}</p>
                  <p>{project.fifthsix}</p>

                  <h6>{project.sixthhead}</h6>
                  <p>{project.sixthdetails}</p>
                  <p>{project.seventhdetails}</p>
                  <p>{project.seventhone}</p>
                  <p>{project.seventhtwo}</p>
                  <p>{project.sevenththree}</p>
                  <p>{project.seventhfour}</p>
                  <p>{project.seventhfive}</p>

                  <h6>{project.seventhhead}</h6>
                  <p>{project.seventhdetails}</p>

                  <h6>{project.eighthead}</h6>
                  <p>{project.eightdetails}</p>
                  

                  <Link
                    to={`/contact?project=${project.slug}`}
                    className="btn btn-outline-dark btn-sm"
                  >
                    Get This Project
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Filter Buttons */}
      <section className="filters-section">
      <div className="filters  text-center">
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
      </section>

      {/* Projects Grid */}
      <div className="grid">
        {displayProjects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>

      {/* Back Button */}
      
    </div>
    <button onClick={() => window.history.back()} className=" btn-secondary">
        ← Back
      </button>
    </div>
  );
};

export default Projects;