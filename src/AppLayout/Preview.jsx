import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../App.css";

const Preview = () => {
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomStyle, setZoomStyle] = useState({});
  const [isAnimated, setIsAnimated] = useState(false);

  // ✨ Heading ref for animation
  const headingRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem("selectedProject");
    if (stored) {
      setProject(JSON.parse(stored));
    }
  }, []);

  // 🎬 Animate heading once on load
  useEffect(() => {
    if (!headingRef.current || isAnimated || !project?.P_Name) return;

    const text = project.P_Name.trim();
    const heading = headingRef.current;
    heading.innerHTML = "";

    // Split text into <em> letters
    text.split("").forEach((char, i) => {
      const span = document.createElement("em");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.animationDelay = `${i * 0.07}s`;
      heading.appendChild(span);
    });

    setIsAnimated(true);
  }, [project, isAnimated]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2)",
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transform: "scale(1)",
      transformOrigin: "center center",
    });
  };

  if (!project) {
    return <p className="text-center text-white mt-10">No project selected</p>;
  }

  return (
    <div className="w-full h-full bg-themebg overflow-x-hidden">
      <nav className="mt-16">
        <Navbar />
      </nav>

      {/* ✅ Category Based Conditional Rendering */}
      {project.P_Category === "Development" ? (
        // 💻 Website Preview Section
        <section
          className="mx-auto justify-between items-center gap-10 text-white
            xs:w-[90%] xs:py-16
            md:w-[80vw]
            lg:w-[95vw]
            xl:w-[85%]"
        >
          {/* 👇 Animated heading */}
          <div className="mb-10">
            <h1
              ref={headingRef}
              className="hero-text text-5xl font-bold capitalize text-white"
            >
              {project.P_Heading || "Untitled"}
            </h1>

            {project.P_SubHeading && (
              <h1
                ref={headingRef}
                className="hero-text text-lg font-bold mt-3 capitalize text-white"
              >
                {project.P_SubHeading}
              </h1>
            )}
          </div>

          <div className="lg:flex justify-between items-center mt-10">
            {/* Laptop Mockup */}
            <div className="w-full lg:w-[60%] xl:w-[70%]">
              <div
                className="relative mx-auto border-gray-700 bg-gray-950 border-[10px] rounded-t-xl 
                xs:h-[172px] xs:max-w-[301px] 
                md:h-[300px] md:max-w-[540px]
                lg:h-[300px] lg:max-w-[500px]
                xl:h-[540px] xl:max-w-[1000px]"
              >
                <div className="overflow-hidden h-[156px] md:h-[278px] xl:h-[523px]">
                  <img
                    src={project.P_Gif}
                    alt={project.P_Name}
                    className="object-cover
                      h-[156px] md:h-[278px] xl:h-[565px] w-[100%]"
                  />
                </div>
              </div>

              <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px] xl:max-w-[1100px] xl:h-[25px]">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
              </div>
            </div>

            {/* Mobile Mockup */}
            <div className="w-full lg:w-[40%] xl:w-[30%] flex justify-center xs:mt-10 lg:mt-0">
              <div
                className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem]
      h-[650px] w-[325px] xl:w-[400px] xl:h-[700px]"
              >
                {/* 🔁 Loader (only for iframe) */}
                {isLoading && project.P_Url && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 rounded-[2rem] z-10">
                    <div className="relative w-16 h-16 mb-4">
                      <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-white animate-spin-slow"></div>
                      <div className="absolute inset-2 rounded-full border-4 border-b-transparent border-gray-500 animate-spin-reverse"></div>
                    </div>
                    <p className="text-white text-lg tracking-wider animate-pulse">
                      Loading...
                    </p>
                  </div>
                )}

                <div className="rounded-[2rem] overflow-hidden w-[300px] h-[622px] xl:w-[370px] xl:h-[670px] cursor-all-scroll">
                  {/* ✅ Condition 1: Show iframe if P_Url exists */}
                  {project.P_Url ? (
                    <iframe
                      src={project.P_Url}
                      title={project.P_Heading}
                      style={{
                        width: "calc(100% + 20px)",
                        height: "100%",
                        transform: "translateX(-5px)",
                        display: "block",
                        border: "0",
                      }}
                      loading="lazy"
                      onLoad={() => {
                        // Show loader for 2–3 seconds only
                        setTimeout(() => setIsLoading(false), 2500);
                      }}
                      onError={() => setIsLoading(true)}
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    />
                  ) : project.P_Mobile_GIF ? (
                    // ✅ Condition 2: If GIF available but no URL
                    <img
                      src={project.P_Mobile_GIF}
                      alt={project.P_Heading}
                      className=" w-[380px] h-full rounded-[2rem]"
                    />
                  ) : (
                    // ✅ Condition 3: If neither URL nor GIF
                    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-900 text-white text-center">
                      <p className="text-lg font-semibold mb-2">
                        No Live Preview Available
                      </p>
                      <img
                        src={project.P_Banner}
                        alt={project.P_Name}
                        className="object-contain w-[80%] rounded-lg"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : project.P_Category === "Automation" ? (
        // ⚙️ Automation Preview Section
        <div
          className="p-2 mx-auto text-white
            xs:w-[90%] xs:py-16
            md:w-[80vw]
            lg:w-[95vw]
            xl:w-[85%]"
        >
          <div className="mb-10">
            <h1
              ref={headingRef}
              className="hero-text text-5xl font-bold capitalize text-white"
            >
              {project.P_Heading || "Untitled"}
            </h1>

            {project.P_SubHeading && (
              <h1
                ref={headingRef}
                className="hero-text text-lg font-bold mt-3 capitalize text-white"
              >
                {project.P_SubHeading}
              </h1>
            )}
          </div>

          <section
            className={`grid justify-between items-start gap-10 text-white 
    grid-cols-1 
    ${
      project.P_Images && project.P_Images.length > 0
        ? "lg:grid-cols-2"
        : "lg:grid-cols-1"
    }`}
          >
            {/* Left Side */}
            <div
              className={`${
                project.P_Video.length > 1
                  ? "grid xs:grid-cols-1 lg:grid-cols-2 gap-6"
                  : "block"
              }`}
            >
              {project.P_Video.map((videos, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden"
                  onContextMenu={(e) => e.preventDefault()} // ✅ disable right click
                >
                  <video
                    src={videos}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    controlsList="nodownload noplaybackrate" // ✅ disable download option
                    disablePictureInPicture // ✅ disable PiP mode
                    className="rounded-lg object-cover w-full select-none pointer-events-auto"
                  />
                  <div className="absolute inset-0 bg-transparent pointer-events-none"></div>
                </div>
              ))}
            </div>

            {/* Right Side (Only show if images exist) */}
            {project.P_Images && project.P_Images.length > 0 && (
              <>
                <div className="grid gap-4 xs:grid-cols-2 lg:grid-cols-3">
                  {project.P_Images.map((image, index) => (
                    <div
                      key={index}
                      className="cursor-pointer overflow-hidden rounded-xl"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image}
                        alt={`Automation ${index + 1}`}
                        className="rounded-lg w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>

                {/* 🧩 Modal Preview */}
                {selectedImage && (
                  <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                  >
                    <div className="relative w-[90%] h-auto overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src={selectedImage}
                        alt="Zoom Preview"
                        className="w-full h-full object-cover transition-transform duration-200 cursor-zoom-out"
                        style={zoomStyle}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      />
                      <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 text-lg"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </section>
        </div>
      ) : (
        // 🕳️ Default Fallback
        <p className="text-white text-center py-20">Unknown Project Type</p>
      )}

      <Footer />
    </div>
  );
};

export default Preview;
