"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Carousel from "../ui/carousel";

const AboutSection: React.FC = () => {

  const slideData = [
    {
      src: "/galleryphotos/2025/sankranthi/DSC_0240.jpg",
    },
    {
      src: "/galleryphotos/2025/sankranthi/DSC_0224.jpg",
    },
    {
      src: "/galleryphotos/2025/sankranthi/DSC_0420.jpg",
    },
    {
      src: "/galleryphotos/2025/sankranthi/DSC_0407.jpg",
    }
  ];

  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-screen lg::pb-10 overflow-hidden z-30">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-10 text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-clip-text text-white text-6xl font-extrabold tracking-tight font-comforter">
            ABOUT
          </span>
        </motion.h2>

        <motion.div
          className="
    w-[90%] md:w-[70%] lg:w-[60%]
    bg-[rgba(155,190,255)] backdrop-blur-2xl
    border border-[rgba(255,255,255,0.25)]
    rounded-3xl
    lg:p-10
    text-center
  "
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >

          <p className="text-base md:text-xl text-white font-small m-5 leading-relaxed">
            Sankranti, celebrated across India with unique regional traditions, is one of the
            oldest festivals rooted deeply in the agricultural heritage of the country. It
            signifies the end of the winter solstice and the beginning of longer, warmer days—
            a moment farmers welcome as a sign of renewed productivity and growth.
          </p>

          <p className="text-base md:text-xl text-white font-small m-5 leading-relaxed">
            Historically, the festival traces its origins to ancient Vedic times, when people
            worshipped the Sun as a life-giving force. Scriptures describe Makar Sankranti as
            the day Surya, the Sun God, begins his northward movement, known as Uttarayana.
            This celestial shift has been revered for generations as a symbol of positivity,
            spiritual upliftment, and seasonal renewal.
          </p>
        </motion.div>
      </section>
      <section className="relative flex flex-col items-center justify-center md:min-h-screen mb-20 lg:pb-10 overflow-hidden z-30">
        <motion.h2
          className="bg-clip-text text-white
                   text-6xl font-extrabold tracking-tight font-comforter md:mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          GLIMPSES
        </motion.h2>
        <div className="relative overflow-hidden w-full h-full md:py-20">
          <Carousel slides={slideData} />
        </div>
      </section>
    </>
  );
};

export default AboutSection;
