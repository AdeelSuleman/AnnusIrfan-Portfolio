import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import heroImg from "../assets/workSkill/concept.jpg";
import icon1 from "../assets/WorkProcess/icon1.png";
import icon2 from "../assets/WorkProcess/icon2.png";
import icon3 from "../assets/WorkProcess/icon3.png";

const OurWork = () => {
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
    <section className="relative w-full h-fit overflow-x-hidden py-20">
      {/* Main Section */}
      <div
        className="mx-auto relative z-20
        xs:w-[90%]
        md:w-[80vw]
        xl:w-[1260px]"
      >
        {/* Section Heading */}
        <h1
          ref={headingRef}
          className="text-center font-medium font-Manrope text-button
    xs:text-Heading6
    lg:text-Heading4
    xl:text-Heading1"
        >
          <span className="text-colortext">Our Work</span> Progress
        </h1>

        {/* Section Sub Heading */}
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

        <motion.div
          initial={{ y: 60, opacity: 0 }} // suruwat me halka upar aur hidden
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
        >
          {/* first Div*/}
          <section className="flex justify-between xs:mt-16 xl:mt-20 px-4">
            <div
              className="bg-[#171822] xs:p-2 xl:p-3 relative border-2 border-gray-700 rounded-full
            xs:w-full
            sm:w-[85%]
            lg:w-[60%]
            xl:w-[45%]"
            >
              <img
                src={icon1}
                className="absolute 
                    xs:w-[120px] xs:left-[-6%] xs:-top-4
                    sm:w-[120px] sm:left-[-7%] sm:-top-5
                    xl:w-[130px] xl:-left-5 xl:-top-4"
              />

              <div
                className="text-colortext font-semibold font-Manrope absolute 
                        xs:top-5 xs:left-4.5
                        sm:top-5 sm:left-[1%]
                        md:top-5 md:left-1
                        xl:top-6 xl:left-5"
              >
                <h1 className="text-center">STEP</h1>
                <h1 className="text-center">01</h1>
              </div>

              <div
                className="xs:ml-[38%] 
                    sm:ml-[25%]
                    lg:ml-[20%]"
              >
                <h1
                  className="font-ubuntu font-semibold text-white
                        xs:text-Paragraph5
                        sm:text-Paragraph4
                        xl:text-Paragraph2"
                >
                  Concept
                </h1>

                <p
                  className="font-outfit font-medium text-white
                        xs:text-[12px]
                        sm:text-[14px]
                        xl:text-Paragraph6"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec
                </p>
              </div>
            </div>
          </section>

          {/* 2nd Div*/}
          <section className="flex justify-between xs:mt-16 xl:mt-20 px-4">
            <div
              className="bg-[#171822] xs:p-2 xl:p-3 relative border-2 border-gray-700 rounded-full xs:mx-auto
            xs:w-full
            sm:w-[85%]
            lg:w-[60%]
            xl:w-[45%]"
            >
              <img
                src={icon2}
                className="absolute 
                    xs:w-[120px] xs:left-[-6%] xs:-top-4
                    sm:w-[120px] sm:left-[-7%] sm:-top-5
                    xl:w-[130px] xl:-left-5 xl:-top-4"
              />

              <div
                className="text-colortext font-semibold font-Manrope absolute 
                        xs:top-5 xs:left-4.5
                        sm:top-5 sm:left-[1%]
                        md:top-5 md:left-1
                        xl:top-6 xl:left-5"
              >
                <h1 className="text-center">STEP</h1>
                <h1 className="text-center">01</h1>
              </div>

              <div
                className="xs:ml-[38%] 
                    sm:ml-[25%]
                    lg:ml-[20%]"
              >
                <h1
                  className="font-ubuntu font-semibold text-white
                        xs:text-Paragraph5
                        sm:text-Paragraph4
                        xl:text-Paragraph2"
                >
                  Concept
                </h1>

                <p
                  className="font-outfit font-medium text-white
                        xs:text-[12px]
                        sm:text-[14px]
                        xl:text-Paragraph6"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec
                </p>
              </div>
            </div>
          </section>

          {/* 3rd Div*/}
          <section className="flex justify-between xs:mt-16 xl:mt-20 px-4">
            <div
              className="bg-[#171822] xs:p-2 xl:p-3 relative border-2 border-gray-700 rounded-full ml-auto
            xs:w-full
            sm:w-[85%]
            lg:w-[60%]
            xl:w-[45%]"
            >
              <img
                src={icon3}
                className="absolute 
                    xs:w-[120px] xs:left-[-6%] xs:-top-4
                    sm:w-[120px] sm:left-[-7%] sm:-top-5
                    xl:w-[130px] xl:-left-5 xl:-top-4"
              />

              <div
                className="text-colortext font-semibold font-Manrope absolute 
                        xs:top-5 xs:left-4.5
                        sm:top-5 sm:left-[1%]
                        md:top-5 md:left-1
                        xl:top-6 xl:left-5"
              >
                <h1 className="text-center">STEP</h1>
                <h1 className="text-center">01</h1>
              </div>

              <div
                className="xs:ml-[38%] 
                    sm:ml-[25%]
                    lg:ml-[20%]"
              >
                <h1
                  className="font-ubuntu font-semibold text-white
                        xs:text-Paragraph5
                        sm:text-Paragraph4
                        xl:text-Paragraph2"
                >
                  Concept
                </h1>

                <p
                  className="font-outfit font-medium text-white
                        xs:text-[12px]
                        sm:text-[14px]
                        xl:text-Paragraph6"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gray-950 opacity-90 z-10"></div>
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-0"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>
    </section>
  );
};

export default OurWork;
