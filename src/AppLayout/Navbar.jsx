import React, { useState, useRef, useEffect } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import gsap from "gsap";
import Logo from "../assets/AnnusLogo.png";
import logo1 from "../assets/AnnusLogo1.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);

  const navigation = [
    { nam: "Home", url: "hero" },
    { nam: "About", url: "about" },
    { nam: "Services", url: "Myservices" },
    { nam: "Contact", url: "contact" },
  ];

  // Scroll to section
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Navigation click
  const handleNavClick = (id) => {
    setIsOpen(false); // sidebar band karo
    if (location.pathname === "/") {
      handleScroll(id);
    } else {
      navigate("/");
      setTimeout(() => handleScroll(id), 500);
    }
  };

  // GSAP Animation (open/close)
  useEffect(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, {
        duration: 0.3,
        opacity: 1,
        pointerEvents: "auto",
      });
      gsap.to(sidebarRef.current, {
        duration: 0.5,
        x: 0,
        ease: "power3.out",
      });
    } else {
      gsap.to(overlayRef.current, {
        duration: 0.3,
        opacity: 0,
        pointerEvents: "none",
      });
      gsap.to(sidebarRef.current, {
        duration: 0.5,
        x: "100%",
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className="bg-white mx-auto flex justify-between items-center gap-5 rounded-full shadow-lg shadow-gray-600
        xs:w-[90%] xs:py-2 xs:px-4
        md:w-[80vw] md:px-6
        xl:w-[1280px]"
      >
        {/* Logo Section */}
        <Link to="/" className="">
          <img src={Logo} alt="" className="xs:w-[120px] xl:w-[180px]" />
        </Link>

        {/* Desktop Menu */}
        <ul
          className="text-colorDark flex justify-between items-center gap-10 font-semibold xs:text-size-text xl:text-[22px]
            xs:hidden lg:inline-flex"
        >
          {navigation.map((navi, i) => (
            <li
              key={i}
              onClick={() => handleNavClick(navi.url)}
              className="cursor-pointer hover:text-[#FF6F49] transition-all"
            >
              {navi.nam}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="text-colortext xs:hidden lg:inline-flex">
          <button
            onClick={() => handleNavClick("contact")}
            className="flex items-center justify-center gap-3 bg-button px-6 py-3 font-semibold xs:text-size-text xl:text-[20px] rounded-full cursor-pointer"
          >
            <span>Let's Talks</span>
            <FaArrowRightFromBracket className="text-xl" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div
          onClick={() => setIsOpen(true)}
          className="bg-button p-3 rounded-full text-colortext lg:hidden cursor-pointer"
        >
          <RiMenu3Line className="text-2xl" />
        </div>
      </nav>

      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm opacity-0 pointer-events-none z-40"
      ></div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 h-full w-[70%] sm:w-[60%] bg-[#11121E] text-white z-50 p-6 flex flex-col gap-8 translate-x-full"
      >
        <div className="flex justify-between items-center">
          <img src={logo1} alt="Logo" className="w-[120px]" />
          <IoClose
            onClick={() => setIsOpen(false)}
            className="text-3xl cursor-pointer hover:text-[#FF6F49] transition-all"
          />
        </div>

        <ul className="flex flex-col gap-6 mt-10 text-lg font-semibold">
          {navigation.map((navi, i) => (
            <li
              key={i}
              onClick={() => handleNavClick(navi.url)}
              className="cursor-pointer hover:text-[#FF6F49] transition-all"
            >
              {navi.nam}
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNavClick("contact")}
          className="flex items-center justify-center gap-3 bg-button px-6 py-3 font-semibold rounded-full mt-10"
        >
          <span>Let's Talks</span>
          <FaArrowRightFromBracket className="text-xl" />
        </button>
      </div>
    </>
  );
};

export default Navbar;
