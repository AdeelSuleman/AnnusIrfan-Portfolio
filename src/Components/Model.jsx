import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const getEmbedUrl = (url) => {
  if (!url) return "";
  // agar url "youtu.be" ka hai to uska ID nikal ke embed url banao
  if (url.includes("youtu.be")) {
    const videoId = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  // agar url "youtube.com/watch" ka hai
  if (url.includes("watch?v=")) {
    const videoId = url.split("watch?v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return url;
};


const Model = ({ isOpen, onClose, card }) => {

  const hasVideo = card?.video && card.video.trim() !== "";
  const hasImage = card?.img && card.img !== "";

  return (
     <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Box */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-[#11121E] p-6 rounded-2xl shadow-lg w-[90%] md:w-[600px] relative border-2 border-button"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-colortext hover:text-red-400 text-xl"
            >
              ✕
            </button>

            <div className="mt-4">
              {hasVideo ? (
                <iframe
                  width="100%"
                  height="250"
                  src={getEmbedUrl(card.video)}
                  title={card?.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl"
                ></iframe>
              ) : hasImage ? (
                <img
                  src={card.img}
                  alt={card?.title}
                  className="w-full h-[250px] object-cover rounded-xl"
                />
              ) : (
                <img
                  src="https://via.placeholder.com/400x250?text=No+Content+Available"
                  alt="Error"
                  className="w-full h-[250px] object-cover rounded-xl"
                />
              )}
            </div>

            <h2 className="text-2xl font-semibold text-white mt-4 mb-3">
              {card?.title}
            </h2>
            <p className="text-colortext">{card?.content}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Model;
