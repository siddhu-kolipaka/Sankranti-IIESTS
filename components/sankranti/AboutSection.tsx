"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Carousel from "../ui/carousel";

const AboutSection: React.FC = () => {

  const slideData = [
    {
      title: "",
      button: "",
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen pb-10 overflow-hidden z-30">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-10 text-white drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400
                   text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight
                   drop-shadow-[0_8px_18px_rgba(0,0,0,0.55)]">
          ABOUT
        </span>
      </motion.h2>

      <motion.div
        className="w-[90%] md:w-[70%] lg:w-[60%] bg-white/15 backdrop-blur-lg rounded-2xl shadow-2xl border border-amber-300 p-8 md:p-12 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="text-base md:text-lg text-white font-medium mb-5 leading-relaxed">
          Sankranti, one of India's grand harvest festivals, marks the Sun's
          transition into the zodiac sign Capricorn, symbolizing new beginnings
          and prosperity.
        </p>

        <p className="text-base md:text-lg text-white font-medium mb-5 leading-relaxed">
          It unites diverse cultures in a spirit of gratitude to nature, the Sun,
          and the hardworking farmers who sustain life.
        </p>

        <p className="text-base md:text-lg text-white font-medium leading-relaxed">
          Homes are decorated with colorful rangolis, people fly kites, and share
          sweets — celebrating warmth, abundance, and harmony between humanity and
          nature.
        </p>
      </motion.div>

      <motion.h2
        className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400
                   text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight
                   drop-shadow-[0_8px_18px_rgba(0,0,0,0.55)] mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        GLIMPSES
      </motion.h2>
      <div className="relative overflow-hidden w-full h-full py-20">
        <Carousel slides={slideData} />
      </div>
    </section>
  );
};

export default AboutSection;
