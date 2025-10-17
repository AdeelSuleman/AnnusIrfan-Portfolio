import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Slider from "./Slider";


// Images
import tiffinea from '../assets/Testimonials/tiffinea.jpg'
import jamila from '../assets/Testimonials/jamila.webp'
import client from '../assets/Testimonials/client.jpg'


// Reviews
import tiffineaReview from '../assets/Testimonials/TiffineaReview.png'
import jamilaReview from '../assets/Testimonials/jamilaReview.mp4'
import clientReview from '../assets/Testimonials/clientReview.png'



const TestiData = [
    {
        id : 101,
        name: 'Tiffinea Roberts',
        image: tiffinea,
        reviewImage: tiffineaReview,
        reviewVideo: '',
    },
    {
        id : 102,
        name: 'Jamila McMallow',
        image: jamila,
        reviewImage: '',
        reviewVideo: jamilaReview,
    },
    {
        id : 103,
        name: 'Client',
        image: client,
        reviewImage: clientReview,
        reviewVideo: '',
    }
];

const Testimonials = () => {


    const [activeIndex, setActiveIndex] = useState(0);

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
    <section className="bg-[#0A0C18] py-24  xl:py-32">
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
          <span className="text-colortext">What My</span> Clients Say
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

        <section
          className="xs:mt-16 xl:mt-20 grid items-center justify-between
                    xs:grid-cols-1 xs:gap-4
                    lg:grid-cols-2 xl:gap-6"
        >


            {/* Left Side */}
          <div className="flex justify-center relative">
            {/* Main circle start */}
            <motion.div
            initial={{ x: -40, opacity: 0 }} // suruwat me halka upar aur hidden
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  // repeat: Infinity,
                  ease: "easeInOut",
                }}
              className="border border-button/50 p-8 rounded-full relative z-10
                            xs:w-[300px] xs:h-[300px]
                            sm:w-[500px] sm:h-[500px]
                            lg:w-[360px] lg:h-[360px]"
            >
              {/* 2nd circle Start*/}
              <div
                className="border border-button/50 p-8 rounded-full relative
                            xs:w-full xs:h-full"
              >
                {/* 3rd circle Start */}
                <div
                  className="border border-button/50 p-8 rounded-full flex justify-center items-center relative
                            xs:w-full xs:h-full"
                >
                  {/* image circle Start */}
                  <div className="relative z-10 border border-button/50 rounded-full overflow-hidden xs:w-full xs:h-full sm:w-[200px] sm:h-[200px] lg:w-full lg:h-full">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={TestiData[activeIndex].id}
                        src={TestiData[activeIndex].image}
                        alt={TestiData[activeIndex].name}
                        className="w-full h-full object-cover rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      />
                    </AnimatePresence>
                  </div>
                  {/* image circle End */}
                  <motion.img 
                  initial={{ y: 40, x: -40, opacity: 0 }} // suruwat me halka upar aur hidden
                whileInView={{ y: 0, x: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  // repeat: Infinity,
                  ease: "easeInOut",
                }}
                  src={client} 
                  className="rounded-full absolute
                xs:w-12 xs:h-12 xs:-top-3 xs:right-0
                sm:w-14 sm:h-14 sm:top-5 sm:right-9
                lg:top-2 lg:right-0" />

                </div>
                {/* 3rd circle End */}
                <motion.img 
                initial={{ y: -40, x: 40, opacity: 0 }} // suruwat me halka upar aur hidden
                whileInView={{ y: 0, x: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  // repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={jamila} 
                className="rounded-full absolute
                xs:w-12 xs:h-12 xs:bottom-2 xs:right-4
                sm:w-14 sm:h-14 sm:-bottom-3 sm:right-28
                lg:-bottom-2 lg:left-10" />
              </div>
              {/* 2nd circle End*/}


              <motion.img 
              initial={{ y: 60, x: 60, opacity: 0 }} // suruwat me halka upar aur hidden
                whileInView={{ y: 0, x: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  // repeat: Infinity,
                  ease: "easeInOut",
                }}
              src={tiffinea} className="rounded-full absolute
                xs:w-12 xs:h-12 xs:top-2
                sm:w-14 sm:h-14 sm:top-7 sm:left-12
                lg:-top-3" />
            </motion.div>
            {/* Main circle End */}

            <div className="absolute top-20 z-0 bg-button/40 w-[200px] h-[200px] rounded-full shadow-2xl shadow-button blur-3xl"></div>

          </div>


          {/* Right Side */}
          <motion.div initial={{ x: 60, opacity: 0 }} // suruwat me halka upar aur hidden
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  // repeat: Infinity,
                  ease: "easeInOut",
                }}>
            <Slider TestiData={TestiData} setActiveIndex={setActiveIndex}/>
          </motion.div>
        </section>
      </div>
    </section>
  );
};

export default Testimonials;
