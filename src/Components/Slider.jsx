import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

const Slider = ({ TestiData, setActiveIndex }) => {

  const swiperRef = useRef(null);

  return (
    <div
      className="w-full max-w-2xl mx-auto py-10 relative overflow-visible"
      onMouseEnter={() => swiperRef.current?.autoplay.stop()}  // 👈 hover → stop
      onMouseLeave={() => swiperRef.current?.autoplay.start()} // 👈 hover end → start
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation={true}
        speed={2000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper; // 👈 swiper instance save
        }}
        className="rounded-2xl overflow-visible"
      >
        {TestiData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="text-white flex flex-col items-center justify-center rounded-2xl text-xl font-bold p-4 ">
              {item.reviewImage && (
                <img
                  src={item.reviewImage}
                  className="w-72 h-auto object-cover mb-3 rounded-lg hover:scale-125 transition-all duration-300 hover:cursor-zoom-in"
                />
              )}
              {item.reviewVideo && (
                <video
                  src={item.reviewVideo}
                  className="xs:w-full ml-auto md:w-[70%] h-auto object-cover mx-auto"
                  controls
                  autoPlay={true}
                  muted={true}
                  loop={true}
                />
              )}
              <p>{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows ke liye custom position */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #FF6F4A;
          // background: #FF6F4A;
          padding: 20px;
          font-size: 8px !important;
          border-radius: 9999px;
          width: 20px;
          height: 20px;
        }
        .swiper-button-next {
          right: 10px;
          top: auto;
          bottom: 10px;
          font-size: 8px !important;
        }
        .swiper-button-prev {
          right: 80px;
          left: auto;
          top: auto;
          bottom: 10px;
          font-size: 8px !important;
        }
      `}</style>
    </div>
  );
};

export default Slider;
