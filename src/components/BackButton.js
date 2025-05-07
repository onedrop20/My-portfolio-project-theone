import { useEffect, useRef } from 'react';
import "./BackButton.css";

function BackButton() {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;  // Bail out if not rendered

    const SCROLL_THRESHOLD = 50;
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        btn.classList.add('scrolled');
      } else {
        btn.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run immediately in case already scrolled

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <button
        ref={btnRef}
        onClick={() => window.history.back()}
        className="projects-btn"
      >
        <i className="fas fa-arrow-left"></i>
      </button>
    </div>
  );
}

export default BackButton;