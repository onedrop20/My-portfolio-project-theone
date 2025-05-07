import React from 'react';
import './Blog.css';
import BackButton from '../components/BackButton';
import profilePic from "../assets/images/onedroplogo.PNG";
import coverPhoto from "../assets/images/web-image-4.jpg";

const Blog = () => {
  return (
   <div>
    <BackButton />

    <div className="blog-page">
      <div className="blog-header">
        <img src={coverPhoto} alt="Cover" className="cover-photo" />
        <div className="profile-info">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <h1>Esemekivwaro Victory (One Drop)</h1>
          <p className="bio">Web Developer from Nigeria | Building dope websites with React & passion</p>
          <div className="social-links">
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
      <div className="blog-container">
        <div className="blog-post" style={{ '--post-index': 0 }}>
          <div className="post-author">
            <img src={profilePic} alt="Author" className="post-profile-pic" />
            <span className="author-name">Esemekivwaro Victory</span> {/* Remove this line if no name */}
          </div>
          <div className="post-content">
            <h2>Why Responsive Design Is Non-Negotiable in 2025</h2>
            <p className="post-date">April 15, 2025</p>
            <p>
              In today’s digital landscape, users access websites from phones, tablets, laptops, and even smartwatches. As a web developer, I’ve seen firsthand how responsive design can make or break a project. It’s not just about resizing elements—it’s about crafting an experience that feels intuitive on any device. For my Modern E-commerce Store project, I prioritized mobile-first design, ensuring seamless navigation and fast load times for users on the go. By using CSS media queries and flexible layouts, I created a platform that adapts to any screen size without sacrificing functionality. Studies show that 53% of users abandon sites that take over 3 seconds to load on mobile, so I optimized images and leveraged lazy-loading to keep performance tight. Responsive design also boosts SEO, as Google prioritizes mobile-friendly sites in its rankings. For businesses, this means higher visibility and more conversions. Whether you’re a small startup or a large brand, investing in responsive design is a must to stay competitive. My approach combines clean code, user-centric design, and performance optimization to deliver websites that shine across devices. Ready to make your site responsive? Let’s connect and build something users will love.
            </p>
          </div>
        </div>
        <div className="blog-post" style={{ '--post-index': 1 }}>
          <div className="post-author">
            <img src={profilePic} alt="Author" className="post-profile-pic" />
            <span className="author-name">Esemekivwaro Victory</span> {/* Remove this line if no name */}
          </div>
          <div className="post-content">
            <h2>The Power of Static Sites for Bloggers and Creators</h2>
            <p className="post-date">April 20, 2025</p>
            <p>
              When I built my Minimalist Blog Platform, I chose a static site generator to keep things fast, secure, and simple. Static sites, like those powered by Eleventy or Gatsby, are game-changers for bloggers and creators who want to focus on content without managing complex backends. Unlike traditional platforms like WordPress, static sites have no database, which means fewer security risks and lightning-fast load times. For my blog platform, I used markdown for posts, making it easy to write and publish without a clunky editor. Hosting on Netlify, I achieved near-instant deployments with zero server maintenance. The result? A clean, responsive blog that loads in under a second, even on slow networks. Static sites also play nice with SEO, thanks to clean HTML and fast performance. I added RSS feeds and meta tags to ensure discoverability, helping bloggers reach their audience. For creators, this approach saves time and money while delivering a professional look. My Minimalist Blog Platform is proof that you don’t need bells and whistles to stand out—just a focus on content and user experience. Want a blog that’s simple yet powerful? Let’s talk about building your dream platform.
            </p>
          </div>
        </div>
        <div className="blog-post" style={{ '--post-index': 2 }}>
          <div className="post-author">
            <img src={profilePic} alt="Author" className="post-profile-pic" />
            <span className="author-name">Esemekivwaro Victory</span> {/* Remove this line if no name */}
          </div>
          <div className="post-content">
            <h2>How I Built a Real-Time Analytics Dashboard with React and Chart.js</h2>
            <p className="post-date">April 25, 2025</p>
            <p>
              Data is the backbone of modern businesses, but raw numbers mean nothing without clear visuals. For my Analytics Dashboard project, I used React and Chart.js to create a web-based tool that turns data into actionable insights. The dashboard pulls live data via WebSockets, updating charts in real time—no refreshing needed. Users can customize chart types (bar, line, pie) and filter data by date or category, making it versatile for tracking KPIs or user behavior. I focused on a clean, responsive UI with a dark mode option, ensuring metrics pop on any device. Accessibility was key, so I added keyboard navigation and screen reader support. To handle large datasets, I optimized with lazy-loaded components and memoized data, keeping performance smooth. Security-wise, user authentication and role-based access ensure only authorized users see sensitive info. This project showcases my ability to blend front-end flair with backend efficiency, using Node.js and MongoDB for scalable data management. Whether you’re a startup or an enterprise, a custom dashboard can transform how you make decisions. Curious about bringing your data to life? Let’s collaborate to create a solution tailored to your needs.
            </p>
          </div>
        </div>
        <div className="blog-cta">
          <a href="/contact" className="btn btn-outline-dark btn-lg">
            Hire Me
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Blog;