"use client";
import { IImage } from "@/types";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import next from "@/assets/icons/next.svg";
import prev from "@/assets/icons/prev.svg";

interface ImageCarousel {
  images: IImage[];
  className?: string;
}

const ImageCarousel = ({ images, className }: ImageCarousel) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  return (
    <div className={"relative w-full overflow-hidden " + className}>
      <AnimatePresence initial={false}>
        <motion.img
          key={images[index].id}
          src={images[index].url}
          alt={`Image ${images[index].id}`}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-0 w-20 h-full grid place-content-center hover:bg-gradient-to-r hover:from-stone-900/[.3]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18.436"
          height="34.043"
          viewBox="0 0 18.436 34.043"
          className="h-12 w-6"
        >
          <path
            id="Path_112"
            data-name="Path 112"
            d="M-238.508,698.4l16.314,16.314,16.314-16.314"
            transform="translate(716.127 239.215) rotate(90)"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-0 w-20 h-full grid place-content-center hover:bg-gradient-to-l hover:from-stone-900/[.3]"
      >
        <svg
          className="h-12 w-6"
          xmlns="http://www.w3.org/2000/svg"
          width="18.436"
          height="34.043"
          viewBox="0 0 18.436 34.043"
        >
          <path
            id="Path_98"
            data-name="Path 98"
            d="M-238.508,698.4l16.314,16.314,16.314-16.314"
            transform="translate(-697.692 -205.172) rotate(-90)"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
          />
        </svg>
      </button>
    </div>
  );
};

export default ImageCarousel;
