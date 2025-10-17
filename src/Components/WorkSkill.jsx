import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Ghl from "../assets/workSkill/highlevel.png";
import wordpress from "../assets/workSkill/wordpress.png";
import webDevelop from "../assets/workSkill/appdevelopment.png";
import webDesign from "../assets/workSkill/ui-design.png";
import videoediting from "../assets/workSkill/montage.png";
import MarketingAutomation from "../assets/workSkill/Marketing-automation.png";
import ClickFunnels from "../assets/workSkill/clickfunnels.png";
import zapier from "../assets/workSkill/zapier.svg";
import ActiveCamp from "../assets/workSkill/Active-Campaign.png";
import Kajabi from "../assets/workSkill/Kajabi.png";
import ThriveCart from "../assets/workSkill/Thrivecart.png";
import jot_and_Type from "../assets/workSkill/jot_and_type_form.png";
import Clickup from "../assets/workSkill/Clickup.png";

const WorkSkill = () => {
  const skills = [
    {
      id: "01",
      name: "Go High Level",
      pic: Ghl,
      rating: "98",
    },
    {
      id: "02",
      name: "WordPress",
      pic: wordpress,
      rating: "90",
    },
    {
      id: "03",
      name: "Web Development",
      pic: webDevelop,
      rating: "98",
    },
    {
      id: "04",
      name: "Web Design",
      pic: webDesign,
      rating: "93",
    },
    {
      id: "05",
      name: "Marketing Automation",
      pic: MarketingAutomation,
      rating: "89",
    },
    {
      id: "06",
      name: "Zapier / Pabbly / Make",
      pic: zapier,
      rating: "80",
    },
    {
      id: "07",
      name: "Video editing",
      pic: videoediting,
      rating: "95",
    },
    {
      id: "08",
      name: "ClickFunnels",
      pic: ClickFunnels,
      rating: "98",
    },
    {
      id: "09",
      name: "Active Campaign",
      pic: ActiveCamp,
      rating: "98",
    },
    {
      id: "10",
      name: "Kajabi",
      pic: Kajabi,
      rating: "98",
    },
    {
      id: "11",
      name: "ThriveCart",
      pic: ThriveCart,
      rating: "98",
    },
    {
      id: "12",
      name: "Jotform & Typeform",
      pic: jot_and_Type,
      rating: "98",
    },
    {
      id: "13",
      name: "ClickUp / Hubstaff / Monday / Slack",
      pic: Clickup,
      rating: "98",
    }
  ];

  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    skills.forEach((skill, index) => {
      let current = 0;
      const step = 1; // har bar +1 karega
      const interval = setInterval(() => {
        current += step;
        setProgress((prev) => {
          const newProgress = [...prev];
          newProgress[index] = current;
          return newProgress;
        });

        if (current >= skill.rating) {
          clearInterval(interval);
        }
      }, skill.rating); // yahan speed set karo (30ms = thoda slow, 15ms = fast)
    });
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, x: 60 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, delay },
    }),
  };

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
    <section className="bg-[#020312] py-24  xl:py-32">
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
          <span className="text-colortext">My Work</span> Skills
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

        {/* Skill Cards */}
        <div
          className="mt-14 grid gap-5
        xs:grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 50 }} // start: niche aur invisible
              whileInView={{ opacity: 1, y: 0 }} // animate: upar aajaye + visible
              transition={{
                duration: 0.6,
                delay: index * 0.3, // ek ek karke delay se aaye
                ease: "easeOut",
              }}
              className="border border-gray-700 py-6 px-8 flex flex-col items-center justify-center rounded-lg shadow-md gap-3"
            >
              <img
                src={skill.pic}
                alt={skill.name}
                className="w-12 h-12 mb-3"
              />
              <h1 className="font-bold text-lg mb-2 text-colortext">
                {skill.name}
              </h1>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                <div
                  className="bg-button h-6 flex items-center justify-center text-white text-sm font-bold rounded-full transition-all duration-300"
                  style={{ width: `${progress[index]}%` }}
                >
                  {progress[index]}%
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSkill;
