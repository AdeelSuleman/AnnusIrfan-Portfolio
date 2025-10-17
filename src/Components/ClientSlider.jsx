import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// ✅ Import all logos
import actionera from "../assets/ClientsLogo/actionera.png";
import caterCloud from "../assets/ClientsLogo/CaterCloud.png";
import ClienteleSolution from "../assets/ClientsLogo/clientEle.png";
import e2w from "../assets/ClientsLogo/e2w.png";
import eyePartner from "../assets/ClientsLogo/eyePartner.png";
import Flowjot from "../assets/ClientsLogo/flowjot.png";
import healthyStart from "../assets/ClientsLogo/healthy.png";
import leadcare from "../assets/ClientsLogo/leadcare.png";
import ml from "../assets/ClientsLogo/ml.png";
import Mtw from "../assets/ClientsLogo/melanie.png";
import myGrowth from "../assets/ClientsLogo/growthEngine.png";
import SmartGrowth from "../assets/ClientsLogo/smartGrowth.png";
import vicolize from "../assets/ClientsLogo/vicolize.png";
import "../App.css";

const ClientSlider = () => {
  // ✅ Optimized Slick settings
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  const ClientsLogo = [
    actionera,
    caterCloud,
    ClienteleSolution,
    e2w,
    eyePartner,
    Flowjot,
    healthyStart,
    leadcare,
    ml,
    Mtw,
    myGrowth,
    SmartGrowth,
    vicolize,
  ];

  return (
    <section
      className="mx-auto py-6 xs:w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[1260px]"
    >
      <div className="slider-container">
          <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000} // Smooth continuous scroll
        slidesPerView={5}
        spaceBetween={20}
        breakpoints={{
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 3 },
          300: { slidesPerView: 2 },
        }}
      >
          {ClientsLogo.map((logo, index) => (
            <SwiperSlide key={index}>
            <div
              // key={index}
              className="px-3 flex justify-center items-center focus:outline-none"
            >
              <img
                src={logo}
                alt={`client-${index}`}
                className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] xl:w-[180px] object-contain opacity-90 hover:opacity-100 transition-all duration-300"
              />
            </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default ClientSlider;
