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
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-screen pb-10 overflow-hidden z-30">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-10 text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400
                   text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-comforter
                   drop-shadow-[0_8px_18px_rgba(0,0,0,0.55)]">
            ABOUT
          </span>
        </motion.h2>

        <motion.div
          className="w-[90%] md:w-[70%] lg:w-[60%] bg-white/15 backdrop-blur-lg rounded-2xl shadow-2xl border border-amber-300 p-10 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-base md:text-xl text-white font-medium m-5 p-2 leading-relaxed">
            Sankranti, celebrated across India with unique regional traditions, is one of the
            oldest festivals rooted deeply in the agricultural heritage of the country. It
            signifies the end of the winter solstice and the beginning of longer, warmer days—
            a moment farmers welcome as a sign of renewed productivity and growth.
          </p>

          <p className="text-base md:text-xl text-white font-medium m-5 p-2 leading-relaxed">
            Historically, the festival traces its origins to ancient Vedic times, when people
            worshipped the Sun as a life-giving force. Scriptures describe Makar Sankranti as
            the day Surya, the Sun God, begins his northward movement, known as Uttarayana.
            This celestial shift has been revered for generations as a symbol of positivity,
            spiritual upliftment, and seasonal renewal.
          </p>
          <p className="text-base md:text-xl text-white font-medium m-5 p-2 leading-relaxed">
            Today, the festival stands as a vibrant reminder of Indian unity in diversity.
            From kite-filled skies to fireside gatherings, traditional dances, bullock races,
            and the sharing of sesame-jaggery sweets, Sankranti beautifully reflects the joy,
            hope, and cultural richness passed down through generations.
          </p>

        </motion.div>
      </section>
      <section className="relative flex flex-col items-center justify-center min-h-screen pb-10 overflow-hidden z-30">
        <motion.h2
          className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400
                   text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-comforter
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
    </>
  );
};

export default AboutSection;
