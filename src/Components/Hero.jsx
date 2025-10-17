import React from "react";
import { motion } from "framer-motion";
import { TiStarFullOutline } from "react-icons/ti";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import bgHero from "../assets/HeroBg.png";
import Navbar from "../AppLayout/Navbar";
import hero from "../assets/Hero.png";
import icon from "../assets/icon.png";

const Hero = () => {
  return (
    <section
      id="hero"
      style={{ backgroundImage: `url(${bgHero})` }}
      className="bg-cover bg-center bg-no-repeat text-colortext xs:h-fit lg:h-screen overflow-hidden pt-10 xs:pb-20"
    >
      <Navbar />

      <div
        className="mx-auto grid gap-16 
        xs:w-[90%] xs:mt-24 xs:grid-cols-1
        md:w-[80vw] md:mt-22
        lg:grid-cols-2 lg:mt-40
        xl:w-[1260px]"
      >
        {/* Left Side */}
        <div className=" xs:order-2 lg:order-1">
          <div className="hidden lg:inline relative">
            <h1 className="bg-black/30 px-3 py-2 w-fit text-Paragraph6 font-semibold font-outfit rounded-full border-2 border-button">
              Hello !
            </h1>
            <motion.h1
              className="font-Manrope font-bold mt-5 
          xs:text-Heading6 
          sm:text-Heading3 
          lg:text-Heading5 
          xl:text-Heading2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 2,
                ease: "easeIn",
              }}
            >
              I'm <span className="text-button">Annus Irfan,</span> Automation
              Specialist
            </motion.h1>
            {/* Icon Image */}
            <motion.img
              src={icon}
              className="absolute xs:-top-5 xs:left-[70px]"
              initial={{ y: -20, opacity: 0 }} // suruwat me halka upar aur hidden
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                // repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <motion.p
            className="font-outfit mt-5
          xs:text-Paragraph5 xs:text-center
          sm:text-Paragraph4 
          lg:text-Paragraph5 lg:text-left xl:text-Paragraph3"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              ease: "circInOut",
            }}
          >
            <span className="font-semibold text-P1text">Saira</span> Cras
            molestie nunc id dolor mollis egestas vitae placerat purus. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Pellentesque
          </motion.p>

          {/* Buttons  */}
          <div className="bg-[#17182C] border border-gray-600 mt-10 flex justify-between items-center gap-3 w-fit p-3 rounded-full xs:mx-auto lg:mx-0 overflow-hidden">
            {/* Portfolio Button */}
            <motion.button
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 10 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              onClick={() => {
                const aboutSection = document.getElementById("Myservices");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-button border border-transparent px-6 py-2 flex justify-between items-center gap-2 text-Paragraph6 font-semibold font-outfit rounded-full cursor-pointer transition-all duration-200
            hover:bg-transparent hover:border-button hover:text-button"
            >
              <h1 className="">Services</h1>
              <FaArrowRightFromBracket className="" />
            </motion.button>

            {/* Hire Me Button */}
            <motion.button
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 10 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              onClick={() => {
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-6 py-2 text-Paragraph6 font-semibold font-outfit rounded-full transition-all duration-300 hover:bg-button cursor-pointer"
            >
              <h1 className="">Hire me</h1>
            </motion.button>
          </div>
        </div>

        {/* Right Side  */}
        <div className="relative xs:order-1 lg:order-2">
          {/* Mobile View Text */}
          <div className="lg:hidden xs:mb-14 md:mb-22">
            <h1 className="relative bg-black/30 px-3 py-2 w-fit mx-auto text-Paragraph6 font-semibold font-outfit rounded-full border-2 border-button">
              Hello !{/* Icon Image */}
              <motion.img
                initial={{ y: -20, opacity: 0 }} // suruwat me halka upar aur hidden
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  // repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={icon}
                className="absolute xs:-top-5 xs:left-[70px]"
              />
            </h1>
            <motion.h1
              className="font-Manrope font-bold mt-5 text-center
          xs:text-Heading6 
          sm:text-Heading3 
          lg:text-Heading5 
          xl:text-Heading1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 2,
                ease: "easeIn",
              }}
            >
              I'm <span className="text-button">Annus Irfan,</span>{" "}
              <br className="sm:inline hidden" /> Automation Specialist
            </motion.h1>
          </div>

          {/* Circle Box */}
          <div className="flex justify-center items-center">
            {/* Large Circle */}
            <div
              className="xs:border lg:border-2 border-button rounded-full flex justify-center items-center relative 
        xs:w-[330px] xs:h-[330px] xl:w-[450px] xl:h-[450px]"
            >
              {/* Mdeium Circle */}
              <motion.div
                initial={{ y: -10, opacity: 0 }} // suruwat me halka upar aur hidden
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  // repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="xs:border lg:border-2 border-button rounded-full flex justify-center items-center 
              xs:w-[250px] xs:h-[250px] xl:w-[360px] xl:h-[360px]"
              >
                {/* Small Circle */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }} // suruwat me halka upar aur hidden
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 3,
                    // repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="xs:border lg:border-2 border-button rounded-full xs:w-[200px] xs:h-[200px] xl:w-[280px] xl:h-[280px]"
                ></motion.div>
              </motion.div>
              <img src={hero} className="absolute xs:w-[70vw] xl:w-auto" />

              <motion.div
                className="bg-white/20 rounded-xl font-outfit absolute z-10
        xs:p-2 xs:-top-14 xs:-right-7
        sm:p-3 sm:-top-10 sm:-right-16
        lg:p-3 lg:-top-14 lg:-right-16
        xl:p-3 xl:-top-8 xl:-right-5 "
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  ease: "easeIn",
                }}
              >
                <div className="flex justify-between items-center gap-1">
                  <TiStarFullOutline className="text-button xs:text-Paragraph6 text-xl" />
                  <TiStarFullOutline className="text-button xs:text-Paragraph6 text-xl" />
                  <TiStarFullOutline className="text-button xs:text-Paragraph6 text-xl" />
                  <TiStarFullOutline className="text-button xs:text-Paragraph6 text-xl" />
                  <TiStarFullOutline className="text-button xs:text-Paragraph6 text-xl" />
                </div>
                <h1 className="font-semibold xs:text-Paragraph5 xs:mt-2 mt-3 text-xl">
                  10+ Years
                </h1>
                <p className="xs:text-Paragraph6">Experience</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
