import React, { useEffect, useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { services as servicesData } from "../Data/ServiceData";

gsap.registerPlugin(ScrollTrigger);
const MyServices = () => {
  const [services, setServices] = useState([]);
  const [activeService, setActiveService] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // useEffect(() => {
  //   const storedData = localStorage.getItem("servicesData");
  //   if (storedData) {
  //     const parsed = JSON.parse(storedData);
  //     setServices(parsed);
  //     setActiveService(parsed[0]); // default: pehla service active
  //   }
  // }, []);

  useEffect(() => {
  setServices(servicesData);
  setActiveService(servicesData[0]); // default active
}, []);

  // show more button
  const cardsPerRow = 3;

  const visibleCards = showAll
    ? activeService?.cards || []
    : activeService?.cards?.slice(0, cardsPerRow) || [];

  // component ke andar
  const navigate = useNavigate();

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
    <section id="Myservices" className="bg-[#020312] py-24 ">
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
          <span className="text-colortext">My</span> Services
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

        {/* Cards Secction */}
        <section className="">
          <div
            className={`mx-auto mt-8 grid gap-10 justify-center
                        xs:w-full xs:grid-cols-2
                        sm:w-[65%]
                        md:w-[90%]
                        lg:w-[80%]
                        xl:w-[70%]
                        ${services.length === 3 ? "md:grid-cols-3" : "md:grid-cols-auto"}`}
          >
            {services.map((service, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveService(service);
                  setShowAll(false);
                }}
                className={`px-5 xs:py-2 lg:py-3 rounded-full font-Manrope font-semibold transition-all duration-300 cursor-pointer
                    ${
                      activeService?.id === service.id
                        ? "bg-transparent border-2 border-button text-button scale-105"
                        : "bg-[#151729] text-colortext hover:bg-button border-2 border-[#151729]"
                    }
                    ${
                      services.length === 3 && i === 2
                        ? "col-span-2 justify-self-center md:col-span-1 md:justify-self-auto"
                        : ""
                    }`}
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Cards Contents */}
          <div
            className="mt-8 grid gap-5 mx-auto
                xs:grid-cols-1
                sm:w-[80%]
                lg:grid-cols-3 
                xl:w-[85%]"
          >
            {visibleCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={
                  idx % 3 === 0
                    ? { x: 250, opacity: 0 } // Left
                    : idx % 3 === 1
                    ? { opacity: 0, scale: 0.9 } // Center
                    : { x: -250, opacity: 0 } // Right
                }
                whileInView={
                  idx % 3 === 0
                    ? { x: 0, opacity: 1 }
                    : idx % 3 === 1
                    ? { opacity: 1, scale: 1 }
                    : { x: 0, opacity: 1 }
                }
                transition={{
                  duration: 0.8,
                  delay: idx % 3 === 1 ? 0.6 : 0,
                  ease: "easeOut",
                }}
                className="bg-[#11121E] relative border border-gray-700 rounded-2xl shadow-lg border-b-0 rounded-b-none"
              >
                <h1
                  className="text-center py-3 border-0 border-b border-gray-700 font-semibold text-colortext
                xs:text-Paragraph1 lg:text-Paragraph3 xl:text-Paragraph1"
                >
                  {card.title}
                </h1>

                <div className="mt-4">
                  <div className="w-[80%] h-[20px] mx-auto rounded-t-xl mt-2 bg-[#1D1E29]"></div>
                  <div className="w-[90%] h-[20px] mx-auto rounded-t-2xl bg-[#5E5E5E]"></div>
                  <div
                    className="rounded-t-2xl bg-gray-100 overflow-hidden
                  xs:w-full xs:h-[180px]
                  sm:w-full sm:h-[250px]
                  md:h-[300px]
                  lg:h-[180px]
                  xl:h-[220px]"
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="bg-[#020312] p-3 rounded-tl-4xl absolute z-10 bottom-[-15px] right-[-15px]">
                  {/* <Link to={card.url}> */}
                  <button
                    onClick={() => {
                      localStorage.setItem(
                        "selectedCard",
                        JSON.stringify(card)
                      );
                      navigate("/projects");
                    }}
                    className="bg-button cursor-pointer p-2 rounded-full text-colortext text-Heading5"
                  >
                    <GoArrowUpRight className="" />
                  </button>
                  {/* </Link> */}
                </div>
              </motion.div>
            ))}
          </div>
          {/* Show More/Hide button */}
          {activeService?.cards?.length > cardsPerRow && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="flex justify-center items-center font-semibold font-outfit rounded-full transition-all duration-300 cursor-pointer text-button border-2 border-button
                                xs:px-6 xs:py-3 xs:gap-2 xs:text-Paragraph6
                                lg:px-4 lg:py-2 lg:gap-1 lg:text-[14px]
                                xl:px-8 xl:py-3 xl:gap-2 xl:text-Paragraph6
                                hover:bg-button hover:text-colortext"
              >
                {showAll ? "Hide" : "Show More"}
              </button>
            </div>
          )}
        </section>
      </div>
    </section>
  );
};

export default MyServices;
