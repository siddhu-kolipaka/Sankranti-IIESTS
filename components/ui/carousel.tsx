"use client";
import React, { useEffect, useRef } from "react";

interface SlideData {
  src: string;
}

export default function Carousel({ slides: incomingSlides }: { slides?: SlideData[] }) {
  const defaultSlides: SlideData[] = [
    {  src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80" },
    { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80" },
    { src: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80" },
    {  src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80" },
    {  src: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80" }
  ];

  const baseSlides = incomingSlides?.length ? incomingSlides : defaultSlides;

  // triple duplication → prevents disappearing gap
  const slides = [...baseSlides, ...baseSlides, ...baseSlides];

  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animation = track.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-33.333%)" } // shift by exactly 1 set of slides
      ],
      {
        duration: 18000,
        iterations: Infinity,
        easing: "linear"
      }
    );

    return () => animation.cancel();
  }, []);

  return (
    <div className="w-full overflow-hidden py-6 select-none">
      <div ref={trackRef} className="flex flex-nowrap w-max">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-[90vw] sm:w-[40vw] md:w-[40vw]
                       h-[55vw] sm:h-[40vw] md:h-[25vw] rounded-xl overflow-hidden shadow-md bg-[#1D1F2F]
                       flex-shrink-0 mr-4"
          >
            <img src={slide.src} alt="photo" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
