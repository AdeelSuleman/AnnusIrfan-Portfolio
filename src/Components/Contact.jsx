import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import heroImg from "../assets/workSkill/concept.jpg";

const Contact = () => {
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






  //   Form
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g7id877", 
        "template_bvcd5rp", 
        form.current, {
        publicKey: "B1fBb39iKkV-0wxjM",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="relative w-full h-fit overflow-x-hidden py-20">
      {/* Main Section */}
      <div
        className="mx-auto relative z-20
        xs:w-[90%]
        md:w-[80vw]
        xl:w-[1200px]"
      >
        {/* Section Heading */}
        <h1
          ref={headingRef}
          className="text-left font-medium font-Manrope text-colortext
    xs:text-Heading5
    lg:text-Heading4
    xl:text-Heading1"
        >
          Let's make your <br className="xs:inline sm:hidden"/> brand brilliant!
        </h1>

        <form ref={form} onSubmit={sendEmail} className="mt-10">
          {/* <label>Name</label> */}
          <input
            id="name"
            type="text"
            name="name"
            placeholder="What's your name"
            required
            className="font-outfit font-light text-white text-Paragraph5 w-full py-3 px-4 rounded-xl border-b-2 border-transparent mt-6
          hover:border-b-2 hover:border-button
          active:outline-none active:border-button
          focus:outline-none focus:border-button"
            style={{
              background: "rgba(180,180,180,0.2)",
            }}
          />
          {/* <label>Email</label> */}
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="font-outfit font-light text-white text-Paragraph5 w-full py-3 px-4 rounded-xl border-b-2 border-transparent mt-6
          hover:border-b-2 hover:border-button
          active:outline-none active:border-button
          focus:outline-none focus:border-button"
            style={{
              background: "rgba(180,180,180,0.2)",
            }}
          />
          {/* <label>Message</label> */}
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project"
            className="font-outfit font-light text-white text-Paragraph5 w-full py-3 px-4 rounded-xl border-b-2 border-transparent mt-6
          hover:border-b-2 hover:border-button
          active:outline-none active:border-button
          focus:outline-none focus:border-button"
            style={{
              background: "rgba(180,180,180,0.2)",
            }}
          />
          {/* <div className="flex xl:justify-end">
          <input
            type="file"
            className="file:bg-[#171822]/60 file:text-button file:px-5 file:py-3 file:rounded-full file:border-0 file:cursor-pointer file:mr-7
            hover:file:bg-colortext/90 
            bg-transparent text-colortext rounded-lg font-semibold font-ubuntu mt-5"
          />
          </div> */}

          <input
            type="submit"
            value="Get a Quote"
            className="bg-button text-colortext px-6 py-3 rounded-full font-ubuntu text-Paragraph5 mt-10 cursor-pointer ml-2"
          />
        </form>
      </div>

      <div className="absolute inset-0 bg-gray-950 opacity-80 z-10"></div>
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-0"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      
    </section>
  );
};

export default Contact;
