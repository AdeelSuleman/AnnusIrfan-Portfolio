import React from "react";
import logo from "../assets/AnnusLogo1.png";
import { Link } from "react-router-dom";

// Navigation Icons
import { IoHome } from "react-icons/io5";
import { RiUserSettingsFill } from "react-icons/ri";
import { BsPcDisplay } from "react-icons/bs";
import { BiSolidUserAccount } from "react-icons/bi";
import { GrContact } from "react-icons/gr";

// Contact Icons
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";


// Social Media Icons
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";



const Footer = () => {
  const navigation = [
    {
      nam: "Home",
      url: "hero",
      icon: IoHome,
    },
    {
      nam: "About",
      url: "about",
      icon: BiSolidUserAccount,
    },
    {
      nam: "Services",
      url: "Myservices",
      icon: RiUserSettingsFill,
    },
    {
      nam: "Contact",
      url: "contact",
      icon: GrContact,
    },
  ];


  const contact = [
    {
        nam: "annusirfan01@gmail.com",
        url: "mailto:annusirfan01@gmail.com",
        icon: MdEmail,
    },
    {
        nam: "TechAventus.com",
        url: "https://techaventus.com/",
        icon: TbWorld,
    }
  ]

  const SocialMedia = [
    {
        nam: "Facebook",
        url: "",
        icon: FaFacebookF,
    },
    {
        nam: "Linkedin",
        url: "",
        icon: FaLinkedinIn,
    }
  ]

   // Scroll to section
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="pt-20">
      <div
        className="mx-auto
        xs:w-[90%]
        md:w-[80vw]
        xl:w-[1280px]"
      >
        <section
          className="grid gap-5 items-start
                xs:grid-cols-1 xs:gap-1
                md:grid-cols-2
                xl:grid-cols-4"
        >
          {/* First Div */}
          <div className="p-3">
            <img src={logo} className="w-40" />
            <p className="mt-5 pl-1 text-colortext font-outfit text-Paragraph5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* Second Div */}
          <div className="p-3">
            <h1 className="text-Paragraph3 text-colortext font-semibold font-Manrope xs:pl-0 pl-2">
              Navigation
            </h1>

            <ul className="mt-5">
              {navigation.map((item, i) => (
                
                <li 
                  key={i}
                  onClick={() => handleScroll(item.url)}
                  className="group flex items-center relative overflow-hidden cursor-pointer mb-4">
                  {/* Sliding Icon */}
                  <span className="text-colortext lg:inline-block xs:hidden 2xl:text-2xl transform -translate-x-6 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-button group-hover:scale-110 group-hover:font-semibold">
                    <item.icon/>
                  </span>

                  {/* Text shifts slightly on hover */}
                  <h3 className="text-colortext  transform xs:text-[14px] sm:text-[15px] md:text-[17px] transition-all duration-500 group-hover:translate-x-3 group-hover:text-button group-hover:scale-110 group-hover:font-semibold">
                    {item.nam}
                  </h3>
                </li>
              
              ))}
            </ul>
          </div>
              
          {/* thrid Div */}
          <div className="p-3">
            <h1 className="text-Paragraph3 text-colortext font-semibold font-Manrope ">
              Contact
            </h1>

            <ul className="mt-5">
              {contact.map((item, i) => (
                <Link to={item.url} key={i}>
                <li className="flex items-center gap-3 text-colortext mb-4
                  xs:text-[14px] sm:text-[15px] md:text-[17px]
                  hover:text-button">
                  <item.icon className="text-Paragraph4"/>
                  <p className="text-left">{item.nam}</p>
                </li>
              </Link>
              ))}
            </ul>
          </div>

          {/* forth Div */}
          <div className="p-3">
            <h1 className="text-Paragraph3 text-colortext font-semibold font-Manrope ">
              Social Media
            </h1>

            <ul className="mt-5">
              {SocialMedia.map((item, i) => (
                <Link to={item.url} key={i}>
                <li className="group flex items-center relative overflow-hidden cursor-pointer mb-4">
                  {/* Sliding Icon */}
                  <span className="text-colortext lg:inline-block xs:hidden 2xl:text-2xl transform -translate-x-6 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-button group-hover:scale-110 group-hover:font-semibold">
                    <item.icon/>
                  </span>

                  {/* Text shifts slightly on hover */}
                  <h3 className="text-colortext  transform xs:text-[14px] sm:text-[15px] md:text-[17px] transition-all duration-500 group-hover:translate-x-3 group-hover:text-button group-hover:scale-110 group-hover:font-semibold">
                    {item.nam}
                  </h3>
                </li>
              </Link>
              ))}
            </ul>
          </div>
          
        </section>

        <footer className="py-5 border-0 border-t border-gray-600 mt-5">
          <p className="text-center text-colortext">Copyright © {new Date().getFullYear()} Developer. All rights reserved.</p>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
