import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import image1 from "../assets/WorkProcess/marketingStrategy.jpg";
import image2 from "../assets/WorkProcess/concept.jpg";
import { FaSearchPlus } from "react-icons/fa";
import { RiLinksLine } from "react-icons/ri";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MyPortfolio = () => {
  // Section Heading Animation
  const headingRef = useRef(null);
  const splitRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    // 👇 Split the text into characters
    splitRef.current = new SplitText(headingRef.current, {
      type: "chars",
      charsClass: "char",
    });

    // 👇 Create ScrollTrigger animation
    ScrollTrigger.create({
      trigger: headingRef.current,
      start: "top 90%", // when heading hits 80% of viewport
      // markers: true,
      onEnter: () => {
        // Kill old animation if exists
        animationRef.current?.revert();

        // New GSAP animation
        animationRef.current = gsap.from(splitRef.current.chars, {
          x: 150,
          opacity: 0,
          duration: 0.7,
          ease: "power4",
          stagger: 0.04,
        });
      },
    });

    return () => {
      // Cleanup on unmount
      animationRef.current?.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // section text animtion
  const textRef = useRef(null);

  useEffect(() => {
    let split = new SplitText(textRef.current, { type: "lines" });

    let animation = gsap.from(split.lines, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%", // jab text viewport me 80% per aye
        end: "bottom 20%", // optional
        toggleActions: "play none none reverse", // play on enter, reverse on leave
        markers: false, // true karke markers check kar sakte ho
      },
      rotationX: -40,
      transformOrigin: "50% 50% -160px",
      opacity: 0,
      duration: 0.8,
      ease: "power3",
      stagger: 0.25,
    });

    // cleanup jab component unmount ho
    return () => {
      animation && animation.revert();
      split && split.revert();
    };
  }, []);

  return (
    <section id="portfolio" className=" py-24  xl:py-32">
      <div
        className="mx-auto 
        xs:w-[90%]
        md:w-[80vw]
        xl:w-[1260px]"
      >
        <h1
          ref={headingRef}
          className="text-center font-medium font-Manrope text-button
    xs:text-Heading6
    lg:text-Heading4
    xl:text-Heading1"
        >
          <span className="text-colortext">Look at My</span> Portfolio
        </h1>

        <p
          ref={textRef}
          className="text-center font-light font-outfit text-colortext mt-3
                    xs:w-full xs:text-Paragraph6
                    lg:w-[50vw] lg:mx-auto lg:text-Paragraph5
                    xl:w-[30vw] xl:text-Paragraph4"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <motion.section
          initial={{ opacity: 0 }} // suruwat me halka upar aur hidden
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 2.2,
              ease: "easeInOut",
            }}
          className="xs:mt-16 xl:mt-20 grid
            xs:grid-cols-1 xs:gap-4
            lg:grid-cols-2 xl:gap-6"
        >
          {/* Left Side */}
          <div
            className="group w-full bg-cover bg-center bg-no-repeat rounded-2xl relative overflow-hidden
                    xs:h-[200px] 
                    sm:h-[280px] 
                    xl:h-[330px]"
            style={{ backgroundImage: `url(${image1})` }}
          >
            <div className="absolute inset-0 bg-[#020312] opacity-80 z-10 xs:flex xl:hidden xl:group-hover:flex items-center justify-center gap-4">
              <Link to="">
                <div className="bg-button p-3 w-14 h-14 rounded-full flex justify-center items-center text-colortext opacity-100">
                  <FaSearchPlus className="text-xl" />
                </div>
              </Link>

              <Link to="">
                <div className="bg-button p-3 w-14 h-14 rounded-full flex justify-center items-center text-colortext opacity-100">
                  <RiLinksLine className="text-xl" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div
            className="group w-full bg-cover bg-center bg-no-repeat rounded-2xl relative overflow-hidden
                    xs:h-[200px] 
                    sm:h-[280px] 
                    xl:h-[330px]"
            style={{ backgroundImage: `url(${image2})` }}
          >
            <div className="absolute inset-0 bg-[#020312] opacity-80 z-10 xs:flex xl:hidden xl:group-hover:flex items-center justify-center gap-4">
              <Link to="">
                <div className="bg-button p-3 w-20 h-20 rounded-full flex justify-center items-center text-colortext opacity-100">
                  <FaRegCirclePlay className="text-5xl" />
                </div>
              </Link>
            </div>
          </div>
        </motion.section>


        <div className="xs:mt-16 xl:mt-20 flex justify-center">
          <Link to=''>
          <button className="flex justify-between items-center gap-3 bg-button py-3 px-6 text-colortext rounded-lg cursor-pointer">
            See All
            <FaArrowRightFromBracket className=""/>
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
