import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import FlipCard from "../components/FlipCards";
import ReviewCarousel from "../components/ReviewCarousel";
import './Services.css';
import BackButton from "../components/BackButton";


const Services = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".fade-in").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.classList.add("visible");
        } else {
          el.classList.remove("visible"); // This makes it fade out when scrolling up
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Dynamic SEO text rotation
  const seoTexts = [
    { title: "SEO Optimization", text: "Boost your website ranking on search engines." },
    { title: "Keyword Research", text: "Find the best keywords to rank higher and attract more visitors." },
    { title: "Technical SEO", text: "Optimize your site's performance and structure for search engines." },
    { title: "Content Strategy", text: "Create high-quality, optimized content to drive traffic." }
  ];

  const [seoIndex, setSeoIndex] = useState(0);
  const [ fade, setFade ] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out effect
      setTimeout(() => {
        setSeoIndex((prevIndex) => (prevIndex + 1) % seoTexts.length);
        setFade(true); // Start fade-in effect
      }, 500); // Matches CSS transition time
    }, 4000); // Change text every 4 seconds
  
    return () => clearInterval(interval);
  }, [seoTexts.length]); // Ensure dependency is correct
  

  return (
    <main>
      <BackButton />
      <div className="service-wrapp">

        
        { /* fade in's */}
        <div className="fade-container">
         <div className={`fade-in ${fade ? "fade-in-active" : "fade-out-active"}`}>
         <div className="fade-title">
           <h6>{seoTexts[seoIndex].title}</h6>
          </div>
           <p>{seoTexts[seoIndex].text}</p> 
         </div>
        </div>



        <div className="spacer"></div>
        
        <div className="first-row">
        <section>
        <div className="services-container">
          <h2>Introduction</h2>
          </div>
        
        <div className="p-section">
          <p>As a dedicated and skilled web developer, I pride myself on delivering high-quality, results-driven solutions that are carefully tailored to meet the unique goals and needs of each client I work with. Whether you’re looking to build a responsive website from the ground up, revamp an existing web application, or create a seamless user interface that brings your vision to life, I approach every project with precision, creativity, and a strong attention to detail.
          </p>

          <p>I understand that every business or personal brand is different, which is why I take the time to understand your exact requirements, target audience, and long-term vision before crafting a solution that fits you perfectly. From frontend design using modern tools like React and Tailwind CSS, to backend functionality and API integration, I focus not just on making things look great—but also ensuring your site or application performs efficiently across all devices.
          </p>

          <p>More than just writing code, I offer professionalism, clear communication, and a commitment to excellence. You can expect clean, maintainable code, responsive layouts, intuitive navigation, and scalable architecture that grows with you. My goal is not just to meet your expectations—but to exceed them by providing smart, modern, and effective web solutions that truly represent your brand and support your success online.
          </p>

          <p>If you’re looking for a developer who combines technical skill with genuine care for your project’s success, I’m here to help bring your ideas to life.</p>
          </div>
          
          </section>

        <div className="services-container">
          <h2>My Services</h2>
        </div>

          {/* first row */}
          
          <div className="flip-card-grid">
            <FlipCard 
              title="Web Design" 
              description="I create visually stunning and user-friendly websites that engage visitors and drive conversions. my designs are modern, responsive, and tailored to your brand’s identity." 
              icon={<i className="fas fa-paint-brush"></i>} 
            />

            <FlipCard 
              title="SEO Optimization" 
              description="Improve your website's visibility on search engines with keyword research, technical SEO, and high-quality content strategies." 
              icon={<i className="fas fa-search"></i>}
            />

            <FlipCard 
              title="App Development" 
              description="Turn your ideas into powerful mobile and web applications. I specialize in creating user-friendly, high-performance apps tailored to your business needs, ensuring seamless functionality across all devices." 
              icon={<i className="fas fa-mobile-alt"></i>}
            />

            <FlipCard 
              title="Digital Marketing" 
              description="Reach the right audience with powerful marketing strategies tailored to grow your brand and boost sales. my digital marketing services include search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, and more." 
              icon={<i class="fas fa-bullhorn"></i>}
            />
           
           <FlipCard 
              title="Content Creation" 
              description="Engaging content that speaks your brand’s voice — from blogs to social media and beyond. I'm an expert writer and very creative I will craft compelling content that resonates with your target audience. Whether you need blog posts, social media updates, or video scripts, I've got you covered." 
              icon={<i class="fas fa-pen-nib"></i>}
            />

            <FlipCard 
              title="UI/UX Design" 
              description="Beautiful, intuitive designs that keep users coming back. Because first impressions matter. My UI/UX designers will create stunning, user-friendly interfaces that make your website or app a joy to use. I Will ensure that your design is both aesthetically pleasing and functional." 
              icon={<i class="fas fa-drafting-compass"></i>}
            />

             <FlipCard 
              title="Brand Identity" 
              description="Logo, colors, fonts, and vibe — I also craft a full brand experience that sticks in people’s minds. I will work with you to develop a unique brand identity that reflects your values and personality. From logo design to brand guidelines, I will help you establish a consistent visual brand." 
              icon={<i class="fas fa-palette"></i>}
            />

             <FlipCard 
              title=" E-commerce Solutions" 
              description="Sell online with confidence. I build fast, secure, and easy-to-manage online stores. My e-commerce solutions include custom website design, payment gateway integration, and inventory management. I will help you create a seamless online shopping experience that drives sales and grows your business." 
              icon={<i class="fas fa-shopping-cart"></i>}
            />


          </div>
        </div>
        {/* second row - SEO Text Rotating */}

        {/* third row - Accordion */}
        <section className="accordion-section">
      <div className="accordion">
        {[
          {
            title: "Digital Marketing",
            content:
              "Unlock the power of online marketing to grow your brand and reach the right audience. From social media management to SEO and paid advertising, my digital marketing solutions are designed to increase your online presence and boost conversions. I craft targeted strategies that ensure your business stands out in the crowded digital space.",
          },
          {
            title: "SEO Optimization",
            content:
              "Improve your website’s visibility on search engines with effective SEO strategies. From keyword research to on-page and technical SEO, I will ensure your content ranks higher and reaches the right audience.",
          },
          {
            title: "Social Media Management",
            content:
              "Take your social media presence to the next level with strategic planning and execution. I handle everything from content creation and post scheduling to community engagement and analytics, ensuring your brand maintains a strong and active online presence.",
          },
          {
            title: "App Development",
            content:
              "Transform your ideas into powerful mobile and web applications. From user-friendly designs to seamless functionality, I build apps that enhance user experience and drive engagement. Whether for business, entertainment, or productivity, I ensure top performance across all platforms.",
          },
          {
            title: "Web Development",
            content:
              "Building fast, secure, and visually stunning websites tailored to your needs. Whether you need a personal blog, a corporate website, or an e-commerce platform, I specialize in creating user-friendly, mobile-optimized websites that enhance your brand’s credibility and drive engagement.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`accordion-item ${activeIndex === index ? "active" : ""}`}
          >
            <button className="accordion-btn" onClick={() => toggleAccordion(index)}>
              {service.title}
            </button>
            <div
              className="accordion-content"
              style={{ maxHeight: activeIndex === index ? "200px" : "0" }} // Upped to 200px for more content room
            >
              <p>{service.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
        {/* written content */}
        <section className="written-contents">
          <h6>MY Digital Services</h6>
          <p>At One Drop, I specialize in providing top-notch online solutions that help businesses and individuals establish a strong digital presence. With a passion for innovation and efficiency, I focus on delivering high-quality services tailored to your unique needs.
          </p>
          <h6>Web Development & Design</h6>
          <p>A well-crafted website is the foundation of any successful online presence. I design and develop <strong>custom websites</strong> that are visually stunning, fully responsive, and optimized for performance. Whether you need a business website, an eCommerce platform, or a personal portfolio, I ensure a smooth and engaging user experience.
          </p>
          <h6>Digital Marketing & SEO Optimization
          </h6>
          <p>Reaching the right audience is key to growing any online business. I offer <strong>comprehensive digital marketing services</strong>, including:
          </p>
          <p><strong>•  SEO optimization</strong> to improve your website’s ranking on Google and drive organic traffic.
          </p>
          <p><strong>•  Social media marketing</strong> to build engagement and boost brand visibility.
          </p>
          <p><strong>•	Content marketing</strong> that delivers valuable and engaging content to attract potential customers.
          </p>
          <p><strong>•	Paid advertising (PPC & social ads)</strong> for targeted audience reach and high conversion rates.</p>
          <h6>App Development
          </h6>
          <p>I develop modern and user-friendly mobile applications that bring ideas to life. Whether it’s an Android or iOS app, I focus on creating apps that are fast, secure, and intuitive. My goal is to provide seamless functionality while ensuring a sleek and appealing design.
          </p>
          <h6>Social Media Management
          </h6>
          <p>Managing a brand’s online presence can be overwhelming. I help businesses grow by handling their social media accounts, creating engaging content, and building strong customer relationships. With a data-driven approach, I ensure consistency, audience interaction, and brand loyalty across platforms like Facebook, Instagram, Twitter, and LinkedIn.
          </p>
          <h6>Graphic Design & Branding
          </h6>
          <p>A strong brand identity starts with professional and creative designs. I offer logo design, business branding, and promotional materials that reflect your brand’s message and vision. My goal is to make your brand stand out in the crowded digital space.
          </p>
          <p><strong>Why Choose Me?</strong></p>
          <p><strong>•	Customized Solutions</strong> – Every project is unique, and I tailor my services to meet your exact needs.
          </p>
          <p><strong>•	Results-Driven Approach</strong> – I focus on achieving measurable results, whether it’s more traffic, better engagement, or higher sales.
          </p>
          <p><strong>•	Affordable & Reliable</strong> – High-quality services at competitive prices, ensuring you get the best value for your investment.
          </p>
          <p>Whether you’re starting from scratch or looking to improve your existing online presence, I'm here to help. Let’s build something great <em className="em">together!</em></p>
        </section>

        { /* review section */ }
        <section className="revs">
        <div>
         <h3>What My Clients Say</h3>
         <ReviewCarousel />
       </div>
       </section>

       <section className="contact-cta container text-center py-5 my-5">
  <p className="cta-text">
    Ready to elevate your business with a stunning website, killer content, or seamless project management? I’m Victory, your go-to guy for turning ideas into digital reality with creativity and precision. Don’t wait—let’s chat about your vision and make it happen today!
  </p>
  <Link to="/contact" className="btn btn-cta btn-lg mt-3">
    Get in Touch
  </Link>
</section>
       </div>


       

      <button onClick={() => window.history.back()} className="btn btn-secondary">
        ← Back
      </button>
      
    </main>
  );
};

export default Services;