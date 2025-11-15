"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AboutSection from "../../components/sankranti/AboutSection";
import React, { useState, useEffect } from 'react';
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";

const titleWords: string[] = ["SANKRANTI", "సంక్రాంతి"];
const readTimeInMs: number = 2000;
const animationTimeInMs: number = 500;

export default function SankrantiPage() {
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [animationClass, setAnimationClass] = useState<string>('text-fade-in');
  const [sparkles, setSparkles] = useState<{ x: number, y: number }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 10 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setSparkles(generated);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimationClass('text-fade-out');
      setTimeout(() => {
        setCurrentWordIndex(prevIndex => (prevIndex + 1) % titleWords.length);
        setAnimationClass('text-fade-in');
      }, animationTimeInMs);
    }, readTimeInMs + animationTimeInMs);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  function useFadeText(text: string, delay = 500) {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
      setDisplayed("");
      const timer = setTimeout(() => {
        setDisplayed(text);
      }, delay);
      return () => clearTimeout(timer);
    }, [text, delay]);

    return displayed;
  }

  const typedText = useFadeText(titleWords[currentWordIndex]);

  return (
    <main ref={ref} className="relative min-h-screen -z-10 bg-gradient-to-br from-[#d0e8ff] via-[#b5d9ff] to-[#6ab7ff] text-white">
      <motion.div style={{ opacity: heroOpacity }}>
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-20"
        >
          <source src="sankranti/WhatsApp Video 2025-11-15 at 6.39.49 PM - Trim.mp4" type="video/mp4" />
        </video>
        <section className="min-h-screen relative flex items-center justify-center h-screen overflow-hidden z-10 bg-transparent">
          {/* Sparkles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {sparkles.map((s, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-70"
                initial={{ x: s.x, y: s.y }}
                animate={{
                  y: [s.y, -20],
                  opacity: [0.7, 0],
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Main Title and Subtitle */}
          <div className="z-10 text-center animate-fade-in p-6 rounded-2xl">

            <h1
              className={`font-extrabold bg-clip-text text-white font-inter
                    text-[50px] md:text-[120px] ${animationClass}`}
            >
              {typedText}
            </h1>

            <p
              className="text-lg md:text-2xl font-semibold tracking-wide"
            >
              Celebrating the spirit of harvest, unity, and joy at IIEST Shibpur
            </p>

          </div>

        </section>
      </motion.div>

      <motion.div>
        <AboutSection />
      </motion.div>

      {/* Events Section */}
      <motion.section
        className="min-h-screen max-w-7xl mx-auto px-6 pt-10 pb-0 relative z-30 text-white"
      >
        {/* Heading */}
        <div className="text-center mb-0">
          <motion.h2
            className="relative inline-block"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            {/* top row: kite + title */}
            <span className="flex items-center justify-center gap-4">
              {/* floating kite (decorative) */}
              {/* <motion.span
                aria-hidden="true"
                initial={{ y: 0, rotate: -6 }}
                animate={{ y: [0, -8, 0], rotate: [-6, 6, -6] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                className="w-10 h-10 rounded-full flex items-center justify-center"
              >
                <svg viewBox="0 0 64 64" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="kiteGrad" x1="0" x2="1">
                      <stop offset="0" stopColor="#FF6A00" />
                      <stop offset="1" stopColor="#FFD166" />
                    </linearGradient>
                  </defs>
                  <path d="M32 4 L56 28 L32 52 L8 28 Z" fill="url(#kiteGrad)" stroke="#7A2E0F" strokeWidth="1.5" />
                  <path d="M32 52 L32 62" stroke="#7A2E0F" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="32" cy="32" r="0.5" fill="transparent" />
                </svg>
              </motion.span> */}

              {/* main title with festival gradient */}
              <span
                className="bg-clip-text text-white
                   text-6xl font-extrabold tracking-tight font-comforter"
              >
                EVENTS
              </span>
            </span>

            {/* animated gradient underline (grows from center) */}
            <motion.span
              className="block mx-auto mt-3 h-[4px] w-40 rounded-full overflow-hidden"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              style={{ transformOrigin: "center" }}
            >
              <span className="block h-full w-full bg-gradient-to-r from-blue-400 to-blue-200" />
            </motion.span>

            {/* small subtitle */}
            <motion.p
              className="mt-4 text-sm md:text-base font-medium"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              Relive the moments — music, dance & harvest joy at IIEST Shibpur
            </motion.p>
          </motion.h2>
        </div>
        {/* Event Cards */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-between gap-10 mt-10 pb-5">
          {[
            {
              title: "Puja",
              date: "11 January 2026",
              time: "10:00 AM",
              venue: "Netaji Bhavan",
            },
            {
              title: "Cultural Performance",
              date: "11 January 2026",
              time: "11:00 AM",
              venue: "Netaji Bhavan",
            },
            {
              title: "Dance",
              date: "11 January 2026",
              time: "11:30 AM",
              venue: "Netaji Bhavan",
            },
            {
              title: "Classical Parade",
              date: "11 January 2026",
              time: "2:00 PM",
              venue: "Netaji Bhavan",
            },
            {
              title: "Dj",
              date: "11 January 2026",
              time: "2:30 AM",
              venue: "Netaji Bhavan",
            },
          ].map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.04 }}
              className="relative group bg-green-meadow-100 rounded-xl shadow-lg border border-amber-400 p-6 md:h-[250px] md:w-[300px]"
            >
              <h3 className="text-2xl font-bold text-blue-600 drop-shadow-lg text-center mt-4 tracking-wide">
                {event.title}
              </h3>

              <div className="mt-4 text-center text-gray-700 font-medium space-y-2">
                <p>
                  <span className="font-semibold text-blue-600">Date:</span> {event.date}
                </p>
                <p>
                  <span className="font-semibold text-blue-600">Time:</span> {event.time}
                </p>
                <p>
                  <span className="font-semibold text-blue-600">Venue:</span> {event.venue}
                </p>
              </div>

              <motion.span
                className="absolute top-3 right-3 text-blue-500"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                ✨
              </motion.span>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
