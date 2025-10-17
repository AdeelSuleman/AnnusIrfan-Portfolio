import React from "react";
import { motion } from "framer-motion";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import me from "../assets/Aboutme.webp";
import OrangeCircle from "../assets/CircleOrange.png";
import YellowCircle from "../assets/CircleYellow.png";

const HireMe = () => {
  return (
    <section className="bg-[#0A0C18]">
      <div
        className="mx-auto grid justify-between items-center gap-10
            xs:w-[90%] xs:grid-cols-1 xs:py-16
            md:w-[80vw]
            lg:grid-cols-2 lg:py-20
            xl:w-[1260px]"
      >
        {/* Left Side */}
        <div className="w-full xs:order-2 lg:order-1">
          <motion.h1
            initial={{ opacity: 0 }} // suruwat me halka upar aur hidden
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 2.2,
              ease: "easeInOut",
            }}
            className="font-semibold font-Manrope mt-3 text-button 
                            xs:text-Heading5 xs:leading-10
                            lg:text-Heading6 lg:leading-8
                            xl:text-Heading4 xl:leading-10"
          >
            <span className="text-colortext">Why</span> Hire Me?
          </motion.h1>

          <motion.p
            initial={{ y: 60, opacity: 0 }} // suruwat me halka upar aur hidden
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="font-normal font-outfit text-colortext
                            xs:text-Paragraph5 xs:mt-3
                            lg:text-Paragraph6 lg:mt-2 
                            xl:text-Paragraph5 xl:mt-3"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
            dignissim, metus nec fringilla accumsan
          </motion.p>

          <div
            className="bg-[#181923] rounded-xl w-full grid justify-between items-center gap-5
                            xs:mt-5 xs:py-5 xs:px-8 xs:grid-cols-1
                            lg:mt-3 lg:py-4 lg:px-6 lg:grid-cols-3"
          >
            {/* div one */}
            <motion.div
              initial={{ y: 60, opacity: 0 }} // suruwat me halka upar aur hidden
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
              className=""
            >
              <h1
                className="text-colortext font-bold text-center
                                    xs:text-Heading5"
              >
                10+
              </h1>

              <p
                className="text-colortext font-outfit text-center
                                    xs:text-Paragraph6 xs:mt-3
                                    lg:text-[14px] lg:mt-1
                                    xl:text-Paragraph6 xl:mt-3"
              >
                Years of Experience
              </p>
            </motion.div>

            {/* div Two */}
            <motion.div
              initial={{ y: 60, opacity: 0 }} // suruwat me halka upar aur hidden
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              className=""
            >
              <h1
                className="text-button font-bold text-center
                                    xs:text-Heading5"
              >
                6k
              </h1>

              <p
                className="text-colortext font-outfit text-center
                                    xs:text-Paragraph6 xs:mt-3
                                    lg:text-[14px] lg:mt-1
                                    xl:text-Paragraph6 xl:mt-3"
              >
                Project Completed
              </p>
            </motion.div>

            {/* div Three */}
            <motion.div
              initial={{ y: 60, opacity: 0 }} // suruwat me halka upar aur hidden
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
              className=""
            >
              <h1
                className="text-colortext font-bold text-center
                                    xs:text-Heading5"
              >
                12k
              </h1>

              <p
                className="text-colortext font-outfit text-center
                                    xs:text-Paragraph6 xs:mt-3
                                    lg:text-[14px] lg:mt-1
                                    xl:text-Paragraph6 xl:mt-3"
              >
                Happy Customers
              </p>
            </motion.div>
          </div>

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
                const aboutSection = document.getElementById("about");
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
              <h1 className="">Hire Me</h1>
              <FaArrowRightFromBracket className="" />
            </motion.button>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full flex justify-center items-center xs:order-1 lg:order-2">
          <div className="relative">
            {/* orange Circle */}
            <motion.img
              initial={{ y: 60, x: 20, opacity: 0 }} // suruwat me halka upar aur hidden
              whileInView={{ y: 1, x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
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
              src={YellowCircle}
              className="absolute
                                        xs:bottom-0 xs:right-[-3%] xs:w-28
                                        sm:bottom-0 sm:right-[-0%]
                                        lg:bottom-0 lg:right-[0%]
                                        xl:bottom-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
