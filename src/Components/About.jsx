import React from "react";
import { motion } from "framer-motion";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { IoMdCloudDownload } from "react-icons/io";
import me from "../assets/Aboutme.webp";
import OrangeCircle from "../assets/CircleOrange.png";
import YellowCircle from "../assets/CircleYellow.png";

const About = () => {
  return (
    <section id="about" className="bg-[#0A0C18]">
      <div
        className="mx-auto grid justify-between items-center gap-10
        xs:w-[90%] xs:grid-cols-1 xs:py-16
        md:w-[80vw]
        lg:grid-cols-2 lg:py-20
        xl:w-[1260px]"
      >
        {/* Left Side */}
        <div className="w-full flex justify-center items-center">
          <div className="relative">
            {/* orange Circle */}
            <motion.img
              initial={{ y: 60, x: 20, opacity: 0 }} // suruwat me halka upar aur hidden
              whileInView={{ y: 1, x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              //   viewport={{ once: true }}
              src={OrangeCircle}
              className="absolute 
                    xs:top-[-5%] xs:left-[-8%] xs:w-40
                    sm:top-[-4%] sm:left-[-8%]
                    lg:top-[-4%] lg:left-[-6%]
                    xl:top-0 xl:left-[-2%]"
            />

            {/* circle div */}
            <div
              className="border-8 border-button rounded-full overflow-hidden relative
                xs:w-[300px] xs:h-[300px]
                sm:w-[350px] sm:h-[350px]
                lg:w-[420px] lg:h-[420px]
                xl:w-[500px] xl:h-[500px]"
            >
              <img src={me} className="w-full h-full" />
            </div>

            {/* Yellow Circle */}
            <motion.img
              initial={{ y: -120, x: 20, opacity: 0 }} // suruwat me halka upar aur hidden
              whileInView={{ y: 0, x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                // repeat: Infinity,
                ease: "easeInOut",
              }}
              //   viewport={{ once: true }}
              src={YellowCircle}
              className="absolute
                    xs:bottom-0 xs:right-[-3%] xs:w-28
                    sm:bottom-0 sm:right-[-0%]
                    lg:bottom-0 lg:right-[0%]
                    xl:bottom-10"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full">
          <motion.h1
            initial={{ opacity: 0 }} // suruwat me halka upar aur hidden
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 2.2,
              ease: "easeInOut",
            }}
            // viewport={{ once: true, amount: 0.2 }}
            className="font-semibold font-outfit bg-[#181923] text-colortext w-fit rounded-full border-2 border-button
                        xs:px-6 xs:py-2 xs:text-Paragraph6
                        lg:px-4 lg:py-1.5 lg:text-[14px]
                        xl:px-6 xl:py-2 xl:text-Paragraph6"
          >
            About Me
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0 }} // suruwat me halka upar aur hidden
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 2.2,
              ease: "easeInOut",
            }}
            // viewport={{ once: true, amount: 0.2 }}
            className="font-medium font-Manrope mt-3 text-colortext 
                        xs:text-Heading5 xs:leading-10
                        lg:text-Heading6 lg:leading-8
                        xl:text-Heading4 xl:leading-10"
          >
            Get a website that will make a lasting impression on your
            audience!!!
          </motion.h1>

          <motion.p
            initial={{ y: 60, opacity: 0 }} // suruwat me halka upar aur hidden
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            // viewport={{ once: true, amount: 0.2 }}
            className="font-normal font-outfit text-colortext
                        xs:text-Paragraph5 xs:mt-3
                        lg:text-Paragraph6 lg:mt-2 
                        xl:text-Paragraph5 xl:mt-3"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </motion.p>

          <motion.div
          initial={{ y: 60, opacity: 0 }} // suruwat me halka upar aur hidden
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              //   viewport={{ once: true, amount: 0.2 }}
            className="bg-[#181923] rounded-xl w-full grid xs:grid-cols-1 md:grid-cols-2 justify-between items-center gap-5
                        xs:mt-5 xs:py-5 xs:px-5
                        lg:mt-3 lg:py-4 lg:px-6"
          >
            {/* div one */}
            <div>
              <h1
                className="text-button font-ubuntu 
                                xs:text-Paragraph5 
                                lg:text-Paragraph6 
                                xl:text-Paragraph5"
              >
                Name:
              </h1>

              <p
                className="text-colortext font-outfit
                                xs:text-Paragraph6 xs:mt-3
                                lg:text-[14px] lg:mt-1
                                xl:text-Paragraph6 xl:mt-3"
              >
                Annus Irfan
              </p>
            </div>

            {/* div Two */}
            <div>
              <h1
                className="text-button font-ubuntu
                                xs:text-Paragraph5 
                                lg:text-Paragraph6 
                                xl:text-Paragraph5"
              >
                Phone:
              </h1>

              <p
                className="text-colortext font-outfit
                                xs:text-Paragraph6 xs:mt-3
                                lg:text-[14px] lg:mt-1
                                xl:text-Paragraph6 xl:mt-3"
              >
                +(234) 567-8910
              </p>
            </div>

            {/* div Three */}
            <div>
              <h1
                className="text-button font-ubuntu
                                xs:text-Paragraph5 
                                lg:text-Paragraph6 
                                xl:text-Paragraph5"
              >
                Email:
              </h1>

              <p
                className="text-colortext font-outfit
                                xs:text-Paragraph6 xs:mt-3
                                lg:text-[14px] lg:mt-1
                                xl:text-Paragraph6 xl:mt-3"
              >
                annusirfan01@gmail.com
              </p>
            </div>

            {/* div Four */}
            <div>
              <h1
                className="text-button font-ubuntu 
                                xs:text-Paragraph5 
                                lg:text-Paragraph6 
                                xl:text-Paragraph5"
              >
                Twiter:
              </h1>

              <p
                className="text-colortext font-outfit
                                xs:text-Paragraph6 xs:mt-3
                                lg:text-[14px] lg:mt-1
                                xl:text-Paragraph6 xl:mt-3"
              >
                Sairakarim0011
              </p>
            </div>
          </motion.div>

          {/* Buttons */}
          <div
            className="sm:flex justify-between items-center w-fit
                        xs:space-y-6 xs:mt-10
                        sm:space-y-0 sm:gap-5
                        lg:mt-5
                        xl:mt-10"
          >
            {/* contact me  */}
            <motion.button
              initial={{ y: 60, opacity: 0 }} // suruwat me halka upar aur hidden
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "linear",
              }}
              onClick={() => {
                const aboutSection = document.getElementById("contact");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-button text-colortext border-2 border-transparent flex justify-between items-center font-semibold font-outfit rounded-full cursor-pointer transition-all duration-200
                                xs:px-6 xs:py-3 xs:gap-2 xs:text-Paragraph6
                                lg:px-4 lg:py-2 lg:gap-1 lg:text-[14px]
                                xl:px-6 xl:py-3 xl:gap-2 xl:text-Paragraph6
                                hover:bg-transparent hover:border-button hover:text-button"
            >
              <h1 className="">Contact me</h1>
              <FaArrowRightFromBracket className="" />
            </motion.button>

            {/* Download My resume  */}
            <a 
              href="/cv.pdf"
              download="Annus-Irfan-CV.pdf">
            {/* <motion.button
              initial={{ y: 60, opacity: 0 }} // suruwat me halka upar aur hidden
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                ease: "linear",
              }}
              //   viewport={{ once: true, amount: 0.2 }}
              className="flex justify-between items-center font-semibold font-outfit rounded-full transition-all duration-300 cursor-pointer text-button border-2 border-button
                                xs:px-6 xs:py-3 xs:gap-2 xs:text-Paragraph6
                                lg:px-4 lg:py-2 lg:gap-1 lg:text-[14px]
                                xl:px-6 xl:py-3 xl:gap-2 xl:text-Paragraph6
                                hover:bg-button hover:text-colortext"
            >
              <h1 className="">Download my resume</h1>
              <IoMdCloudDownload className="" />
            </motion.button> */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
