import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Reviews.css";
import person1 from "../assets/images/review-america-female1.jpg";
import person2 from "../assets/images/review-arab-female1.jpg";
import person3 from "../assets/images/review-arab-female2.jpg";
import person4 from "../assets/images/review-arab-male1.jpg";
import person5 from "../assets/images/review-arab-male3.jpg";
import person6 from "../assets/images/review-asian-femail1.jpg";
import person7 from "../assets/images/review-black-female1.jpg";
import person8 from "../assets/images/review-black-male1.jpg";
import person9 from "../assets/images/review-black-male2.jpg";
import person10 from "../assets/images/review-kenya-female1.jpg";



const reviews = [
  {
    name: "Jada Thompson",
    text: "Amazing service! Highly recommended. I was really impressed with the attention to detail and how professional the team was throughout the entire process. They made everything seamless, and the quality of work exceeded my expectations. I'll definitely be coming back for more services in the future.",
    image: person1,
  },
  {
    name: "Jane Smith",
    text: "Outstanding service! From start to finish, everything was handled with professionalism and care. The team was attentive to my needs, and the final result was beyond my expectations. I’ll definitely be using this service again!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Jamal Carter",
    text: "I was hesitant at first, but I’m so glad I gave it a try. The quality of work, the attention to detail, and the customer service were all top-notch. Everything was smooth, and I felt valued as a customer.",
    image: person4,
  },
  {
    name: "Amina Roberts",
    text: "Truly a five-star experience! The process was seamless, and communication was excellent throughout. I especially appreciated how quickly my concerns were addressed. Highly recommend!",
    image: person7,
  },
  {
    name: "Mariam Saleh",
    text: "I rarely leave reviews, but I had to this time. The experience was nothing short of amazing! Everything was done on time, with great precision, and the results were exactly what I had hoped for. Will definitely return!",
    image: person2,
  },
  {
    name: "Nadia Omar",
    text: "Great service with a personal touch! I felt like my needs were really understood, and I wasn’t just another customer. The team went above and beyond, and I couldn’t be happier with the outcome.",
    image: person3,
  },
  {
    name: "Jacobs Femi",
    text: "At first, I wasn’t sure what to expect, but this exceeded all my expectations. The service was efficient, reliable, and handled with great care. I have already recommended it to a few friends!",
    image: person8,
  },
  {
    name: "Zayd Mitchell",
    text: "Absolutely worth it! The process was easy, and the quality of the final result was amazing. The staff was friendly and responsive, which made the entire experience even better. No regrets at all!",
    image: person5,
  },
  {
    name: "Aya Anderson",
    text: "What a great experience! Everything was handled with professionalism, and I felt well taken care of. The results were exactly what I wanted, and I will definitely be coming back for more in the future.",
    image: person6,
  },
  {
    name: "Lewis Harris",
    text: "I love how seamless everything was. The process was stress-free, and I was kept informed every step of the way. The final result was even better than I had imagined. I highly recommend this service!",
    image: person9,
  },
  {
    name: "Amani Taylor",
    text: "Exceptional service! The team was knowledgeable, friendly, and efficient. I was impressed with how they handled my request and delivered top-quality results. Definitely coming back!",
    image: person10,
  }

  
];

const ReviewCarousel = () => {
  const [index, setIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardWidth, setCardWidth] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null); // Store interval reference

  // Clone first & last items for infinite scrolling
  const clonedReviews = React.useMemo(() => [
    reviews[reviews.length - 1], // Last item (prepended)
    ...reviews,
    reviews[0], // First item (appended)
  ], []);

  // Get card width dynamically
  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        const card = carouselRef.current.querySelector(".review-card");
        if (card) {
          setCardWidth(card.offsetWidth + 20); // Adjust for margin
        }
      }
    };

    updateWidth(); // Set initial width
    window.addEventListener("resize", updateWidth); // Update on resize

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const nextReview = () => {
    setIsTransitioning(true);
    setIndex((prevIndex) => prevIndex + 1);
  };

  const prevReview = () => {
    setIsTransitioning(true);
    setIndex((prevIndex) => prevIndex - 1);
  };

  // Function to start auto-scroll
  const startAutoScroll = useCallback(() => {
    intervalRef.current = setInterval(() => {
      nextReview();
    }, 5000);
  }, []); // ✅ No dependencies, so it stays the same on re-renders
  
  const stopAutoScroll = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []); // ✅ No dependencies, so it stays the same on re-renders

  // Auto-scroll every 5 seconds (pause on hover/touch)
  useEffect(() => {
    startAutoScroll(); // Start auto-scroll initially
  
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("mouseenter", stopAutoScroll);
      carousel.addEventListener("mouseleave", startAutoScroll);
      carousel.addEventListener("touchstart", stopAutoScroll);
      carousel.addEventListener("touchend", startAutoScroll);
    }
  
    return () => {
      stopAutoScroll();
      if (carousel) {
        carousel.removeEventListener("mouseenter", stopAutoScroll);
        carousel.removeEventListener("mouseleave", startAutoScroll);
        carousel.removeEventListener("touchstart", stopAutoScroll);
        carousel.removeEventListener("touchend", startAutoScroll);
      }
    };
  }, [startAutoScroll, stopAutoScroll]); // ✅ Now these don’t change every render

  // Handle infinite loop reset
  useEffect(() => {
    if (index === clonedReviews.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(1);
      }, 800);
    }
    if (index === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(clonedReviews.length - 2);
      }, 800);
    }
  }, [index, clonedReviews.length]);

  return (
    <div className="review-carousel">
      <button className="prev-btn" onClick={prevReview}>❮</button>

      <div className="review-wrapper">
        <div
          className="review-list"
          ref={carouselRef}
          style={{
            transform: `translateX(calc(-${index * cardWidth}px + 50% - ${cardWidth / 2}px))`,
            transition: isTransitioning ? "transform 0.8s ease-in-out" : "none",
          }}
        >
          {clonedReviews.map((review, i) => (
            <div className="review-card" key={i}>
              <img src={review.image} alt={review.name} />
              <h3>{review.name}</h3>
              <p>{review.text}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="next-btn" onClick={nextReview}>❯</button>
    </div>
  );
};

export default ReviewCarousel;