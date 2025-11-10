"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AboutSection from "../../components/sankranti/AboutSection";
import "./style.css";
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

  const events = [
    { title: "Dance", img: "/sankranti/dance.jpg" },
    { title: "Ramp Walk", img: "/sankranti/ramp.jpg" },
    { title: "DJ Night", img: "/sankranti/dj.jpg" },
  ];

  return (
    <div className="relative sankranti-bg-container">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src="sankranti/Video_Generation_and_Enhancement - Trim.mp4" type="video/mp4" />
      </video>

      {/* Overlay shade */}
      <div className="background-overlay"></div>

      <main ref={ref} className="relative min-h-screen z-20 text-sankranti-red">
        <motion.div style={{ opacity: heroOpacity }}>
          <section className="min-h-screen relative flex items-center justify-center h-screen overflow-hidden z-30 bg-transparent">

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
            <div className="relative z-30 text-center animate-fade-in p-6 rounded-2xl">
              <h1
                className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500 text-[50px] md:text-[120px] ${animationClass}`}
              >
                {titleWords[currentWordIndex]}
              </h1>
              <p className="text-lg md:text-xl font-semibold text-white drop-shadow-lg">
                Celebrating the spirit of harvest, unity, and joy at IIEST Shibpur
              </p>
            </div>
          </section>
        </motion.div>

        <motion.div>
          <AboutSection />
          {/* Footer CTA */}
          <section className="pb-12 text-center">
            <h2 className="text-2xl font-semibold text-sankranti-gold mb-4">
              Want to relive the moments?
            </h2>
            <a
              href="/gallery"
              className="bg-sankranti-orange text-white px-6 py-3 rounded-full font-medium transition hover:bg-sankranti-red"
            >
              Visit Full Gallery
            </a>
          </section>
        </motion.div>

        {/* Events Section */}
        <motion.section
          className="min-h-screen max-w-7xl mx-auto px-6 pt-20 pb-0 relative z-30 text-white"
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
                <motion.span
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
                </motion.span>

                {/* main title with festival gradient */}
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400
                   text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight
                   drop-shadow-[0_8px_18px_rgba(0,0,0,0.55)]"
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
                <span className="block h-full w-full bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400" />
              </motion.span>

              {/* small subtitle */}
              <motion.p
                className="mt-4 text-sm md:text-base font-medium text-sankranti-gold/90"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                Relive the moments — music, dance & harvest joy at IIEST Shibpur
              </motion.p>
            </motion.h2>
          </div>


          {/* 3D Event Cards */}
          <div className="flex justify-center flex-wrap gap-10 px-4">
            {events.map((event, index) => (
              <CardContainer
                key={event.title}
                className="inter-var [perspective:10000px]"
              >
                <CardBody
                  className="relative group/card shadow-lg w-auto sm:w-[20rem] h-auto rounded-xl pt-8 pb-12 px-3 border border-black/10 [transform-style:preserve-3d]"
                >
                  <div
                    className="absolute inset-0 rounded-xl pointer-events-none z-0"
                    style={{
                      background: "rgba(0,0,0,0.40)",
                      backdropFilter: "blur(6px)",
                      WebkitBackdropFilter: "blur(6px)",
                    }}
                  />
                  <div className="relative z-10">
                    <CardItem
                      translateZ="50"
                      className="text-3xl font-bold text-white"
                    >
                      {event.title}
                    </CardItem>

                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-white/90 text-sm max-w-sm mt-2"
                    >
                      Hover over this card to unleash the power of CSS perspective
                    </CardItem>

                    <CardItem translateZ="100" className="w-full mt-4">
                      <img
                        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt={event.title}
                        height="200"
                        width="200"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-transform duration-300"
                        style={{
                          willChange: "transform",
                          backfaceVisibility: "hidden",
                        }}
                      />
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
