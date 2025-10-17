import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'

export const HeroPortfolio = () => {
  const slidesRef = useRef([]);
  const headingRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimated, setIsAnimated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCard = localStorage.getItem("selectedCard");
    if (storedCard) {
      const parsed = JSON.parse(storedCard);
      setSelectedCard(parsed);
      if (parsed?.projects) {
        const imgs = parsed.projects.map((p) => p.P_Banner || p.P_Gif || "");
        setImages(imgs);
      }
    }

    // 👇 2 second loader
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // loop function (infinite scroll)
  const getLoopIndex = (i, length) => (i + length) % length;

  useEffect(() => {
    if (images.length > 0) {
      positionSlides(activeIndex);
      // ✅ AutoPlay every 4s
      const interval = setInterval(() => {
        setActiveIndex((prev) => getLoopIndex(prev + 1, images.length));
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [activeIndex, images]);

  const positionSlides = (centerIndex) => {
    const total = images.length;
    if (total === 0) return; // 🛑 agar images empty hain to exit

    const screenWidth = window.innerWidth;
    let baseWidth, baseHeight;

    if (screenWidth <= 375) {
      baseWidth = 295;
      baseHeight = 35;
    } else if (screenWidth <= 640) {
      baseWidth = 350;
      baseHeight = 45;
    } else if (screenWidth <= 768) {
      baseWidth = 450;
      baseHeight = 50;
    } else if (screenWidth <= 1024) {
      baseWidth = 600;
      baseHeight = 55;
    } else if (screenWidth <= 1280) {
      baseWidth = 750;
      baseHeight = 60;
    } else {
      baseWidth = 1400;
      baseHeight = 75;
    }

    slidesRef.current.forEach((slide, i) => {
      if (!slide) return;

      const offset = i - centerIndex;
      let realOffset =
        Math.abs(offset) > total / 2
          ? offset > 0
            ? offset - total
            : offset + total
          : offset;

      let absOffset = Math.abs(realOffset);

      if (absOffset > 3) {
        gsap.to(slide, { opacity: 0, duration: 0.5 });
        return;
      }

      let height = baseHeight - absOffset * 5;
      if (height < 30) height = 30;
      let width = absOffset === 0 ? baseWidth : baseWidth * 0.4;
      let zIndex = 10 - absOffset;

      gsap.to(slide, {
        x: realOffset * (baseWidth * 0.4),
        width: `${width}px`,
        height: `${height}vh`,
        zIndex,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      });
    });
  };


  // 🌀 Animate Section Heading
  useEffect(() => {
    if (!headingRef.current || isAnimated || !selectedCard?.title) return;

    const text = selectedCard.title.trim();
    const heading = headingRef.current;
    heading.innerHTML = ""; // clear existing text

    // Split text into <em> elements
    text.split("").forEach((char, i) => {
      const span = document.createElement("em");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.animationDelay = `${i * 0.07}s`;
      heading.appendChild(span);
    });

    setIsAnimated(true);
  }, [selectedCard, isAnimated]);
  

  return (
    <section className="">
      <h1 ref={headingRef}
        className="hero-text text-white text-center xs:text-2xl lg:text-5xl font-bold mt-6">
      {selectedCard?.title || ""}
    </h1>
      <div className="relative w-full xs:h-[40vh] md:h-[60vh] lg:h-[70vh] xl:h-[85vh] flex justify-center items-center overflow-hidden">
         <div className="relative flex justify-center items-center w-full">
          <div className="relative  w-[100%] h-[80vh] p-1">
            
      {isLoading && (
         <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#020312] w-full h-full z-20">
              {/* Animated Loader */}
              <div className="relative w-16 h-16 mb-4">
                <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-white animate-spin-slow"></div>
                <div className="absolute inset-2 rounded-full border-4 border-b-transparent border-gray-500 animate-spin-reverse"></div>
              </div>

              {/* Loading Text */}
              <p className="text-white text-lg 
              
              
              tracking-wider animate-pulse">
                Loading...
              </p>
            </div>
      )}
      </div>

      {images.map((src, i) => (
        <div
          key={i}
          ref={(el) => (slidesRef.current[i] = el)}
          className="absolute cursor-pointer lg:border border-gray-500 lg:shadow-xl shadow-gray-900 rounded-lg "
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: window.innerWidth <= 768 ? "contain" : "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => {
            if (i === activeIndex) {
              localStorage.setItem(
                "selectedProject",
                JSON.stringify(selectedCard.projects[i])
              );
              navigate("/preview");
            } else {
              setActiveIndex(i);
            }
          }}
        >
         {/* 👇 Image Title on Top Center */}
    <div
      className="absolute top-3 left-3
                 text-white text-left font-semibold 
                 xs:text-sm sm:text-base md:text-lg 
                 bg-black/50 px-3 py-1 rounded-lg shadow-lg"
    >
      <h1 className="">
      {selectedCard?.projects?.[i]?.P_Heading || `Project ${i + 1}`}
      </h1>
      <h3 className="xs:text-sm sm:text-base">
        {selectedCard?.projects?.[i]?.P_SubHeading || ``}
        </h3>
    </div>
        </div>
        
      ))}
    </div>
          {/* <h1 className="text-white absolute bottom-20 z-10">Click here</h1> */}
      </div>
    </section>
  );
};
