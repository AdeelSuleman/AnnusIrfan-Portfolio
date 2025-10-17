import React, { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import gsap from "gsap";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const btnRef = useRef(null);

  // scroll listener
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // GSAP animation when visible changes
  useEffect(() => {
    if (isVisible) {
      gsap.to(btnRef.current, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        pointerEvents: "auto",
        ease: "power3.out",
      });
    } else {
      gsap.to(btnRef.current, {
        duration: 0.5,
        opacity: 0,
        y: 50,
        pointerEvents: "none",
        ease: "power3.in",
      });
    }
  }, [isVisible]);

  // scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      ref={btnRef}
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-button text-white p-4 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform z-50"
      style={{ opacity: 0, transform: "translateY(50px)" }}
    >
      <FaArrowUp className="text-2xl" />
    </button>
  );
};

export default ScrollToTop;
