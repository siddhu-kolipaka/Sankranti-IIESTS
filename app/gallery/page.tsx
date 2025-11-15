"use client";

import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./gallery.css";

import { Dancing_Script } from "next/font/google";
const dancing = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

// --- Types ---
interface PhotoSections {
  [sectionName: string]: string[];
}

interface PhotoGroup {
  year: string;
  photos: string[];
  sections: PhotoSections;
}
<style jsx global>{`
  @keyframes sankrantiFlow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`}</style>

// --- Component ---
const App: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<PhotoGroup | null>(null);
  const router = useRouter();

  const photoGroups: PhotoGroup[] = [
    {
      year: "January 15 2025",
      photos: [
        "/galleryphotos/2025/bhogi/DSC_0017.jpg",
          "/galleryphotos/2025/sankranthi/DSC_0224.jpg",
        "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg",
        "https://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-13.jpg",
        "https://www.pixelstalk.net/wp-content/uploads/2016/08/Nature-beautiful-desktop-images-cool.jpg",
        "https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg",
      ],
      sections: {
        
      },
    },
    {
      year: "January 14 2024",
      photos: [
        "/galleryphotos/2025/bhogi/DSC_0050.jpg",
          "/galleryphotos/2025/sankranthi/DSC_0228.jpg",
        "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?cs=srgb&dl=forest-trees-nature-green-1761279.jpg&fm=jpg",
        "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?cs=srgb&dl=sea-ocean-sunset-3225517.jpg&fm=jpg",
        "https://wallpapershome.com/images/pages/pic_h/14367.jpg",
        "https://www.pixelstalk.net/wp-content/uploads/2016/07/Beautiful-Images-HD-Free-Download.jpg",
        "https://www.pixelstalk.net/wp-content/uploads/2016/07/HD-Images-Free-Download-Beautiful.jpg",
      ],
      sections: {
        
      },
    },
    {
      year: "January 10 2023",
      photos: [
        "/galleryphotos/2025/bhogi/DSC_0059.jpg",
          "/galleryphotos/2025/sankranthi/DSC_0419.jpg",
        "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?cs=srgb&dl=mountain-top-view-3408744.jpg&fm=jpg",
        "https://wallpapershome.com/images/pages/pic_h/21969.jpg",
        "https://images.pexels.com/photos/2080965/pexels-photo-2080965.jpeg?cs=srgb&dl=forest-lake-reflection-2080965.jpg&fm=jpg",
        "https://images.pexels.com/photos/316466/pexels-photo-316466.jpeg?cs=srgb&dl=beautiful-landscape-mountains-nature-316466.jpg&fm=jpg",
        "https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?cs=srgb&dl=sunset-sky-clouds-912110.jpg&fm=jpg",
      ],
      sections: {
        
      },
    },
  ];

  return (
    /* <main
  className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20"
  style={{
    background:
      "linear-gradient(135deg, #03071E, #370617, #6A040F, #9D0208, #D00000, #DC2F02, #E85D04, #F48C06, #FAA307, #FFBA08)",
    backgroundSize: "100% 100%",
    animation: "sankrantiFlow 18s ease infinite",
  }} >*/
   <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">

  {/* VIDEO BACKGROUND */}
<video
  ref={(el) => {
    if (el) el.playbackRate = 0.75;   // <<< slow motion
  }}
  src="/galleryphotos/videoback2.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
/>


  {/* DARK OVERLAY */}
  <div
    className="
      absolute inset-0 
      bg-black/70    
      backdrop-blur-[0px]
      z-[-1]
    "
  />



      {/* Rotating Kolam */}
      
      {/* Heading */}
      <div className="text-center mb-20 z-10">
        <h1
  className={`${dancing.className} text-4xl md:text-8xl font-extrabold text-transparent bg-clip-text [-webkit-background-clip:text] bg-white`}
>
  {/* bg-gradient-to-r from-[#FFBA08] via-[#DC2F02] to-[#D00000] drop-shadow-lg animate-pulse */}
  Sankranti Memories
</h1>

        <p
          className="mt-2 text-lg md:text-xl text-yellow-100 font-medium tracking-wide"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Celebrating the joy of{" "}
          <span className="text-[#FFBA08]" style={{ fontFamily: "'poppins', cursive" }}>
            Batches from 2024 Passouts
          </span>
        </p>

        <div className="mt-4 w-24 h-1 bg-gradient-to-r from-[#FFBA08] via-[#DC2F02] to-[#D00000] mx-auto rounded-full animate-pulse"></div>
      </div>

      {/* === Timeline Section === */}
      <div className="relative w-full max-w-5xl z-10">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-white/40"></div>
{photoGroups.map((group, index) => (
  <div
    key={index}
    className="relative flex flex-col md:flex-row items-center justify-between mb-32"
  >
    {/* CENTER TIMELINE LINE */}
    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-white/40"></div>

    {/* LEFT STACK */}
    {/* <div className="relative w-full md:w-1/2 flex justify-end pr-16 md:pr-32"> */}
    <div className="relative w-full md:w-1/2 flex 
  justify-center md:justify-end
  px-2 md:pr-32 mb-6 md:mb-0"
>

  <motion.div
    // onClick={() => setSelectedYear(group)}
    onClick={() => router.push(`/gallery/${encodeURIComponent(group.year)}/Bhogi`)}
    className="relative w-[250px] h-[150px] sm:w-[300px] sm:h-[180px] md:w-[360px] md:h-[220px] group cursor-pointer"

    initial="initial"
    whileHover="hover"
    style={{ willChange: "transform" }}
  >
    {/* STACK IMAGES */}
    {group.photos.map((img, i) => (
      <motion.img
        key={i}
        src={img}
        className="absolute w-full h-full object-cover rounded-xl border-4 border-white shadow-md"
        variants={{
          initial: { rotate: (i-1) * 2 },
          hover: {
            rotate: (i - 2) * 3 + i * 2,
            transition: { duration: 0.45, ease: "easeInOut" }
          }
        }}
        style={{
          zIndex: 10 - i,
          willChange: "transform"
        }}
        alt=""
      />
    ))}

    {/* ONLY FIRST IMAGE OVERLAY */}
    <div
      className="
        absolute inset-0 rounded-xl 
        bg-black/60 
        opacity-0 
        group-hover:opacity-100 
        transition-opacity duration-500 ease-in-out
        pointer-events-none
      "
      style={{ zIndex: 11 }}
    ></div>

    {/* CALLIGRAPHY TEXT */}
    <div
      className="
        absolute inset-0 flex items-center justify-center
        opacity-0 group-hover:opacity-100
        transition-opacity duration-700 ease-in-out
        pointer-events-none
      "
      style={{ zIndex: 12 }}
    >
      <span
        className="text-white text-5xl drop-shadow-xl"
        style={{
          fontFamily: '"Dancing Script", cursive'
        }}
      >
        Bhogi
      </span>
    </div>
  </motion.div>
</div>



    {/* DOT + DATE (center) */}
   {/* CENTER: Dot + Date */}
{/* <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-30"> */}
{/* <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-30 my-4 md:my-0"> */}

  
  {/* Dot */}
  {/* <div className="group relative flex items-center justify-center w-8 h-8  */}
                  {/* rounded-full bg-white shadow-lg cursor-pointer"> */}

    {/* <div className="w-4 h-4 rounded-full bg-[#FFBA08] animate-ping absolute"></div> */}
    {/* <div className="w-4 h-4 rounded-full bg-[#DC2F02] z-10"></div> */}

    {/* Hover Date Tooltip */}
    {/* <div */}
      {/* // className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0  */}
                 {/* group-hover:opacity-100 transition-all duration-300  */}
                 {/* text-white text-xs font-semibold bg-black/50 px-3 py-1  */}
                 {/* rounded-lg border border-white/20 whitespace-nowrap" */}
    {/* > */}
      {/* {group.year} */}
    {/* </div> */}
  {/* </div> */}

{/* </div> */}
{/* CENTER DATE — replaces dot */}
<div
  className="
    absolute left-1/2 -translate-x-1/2
    z-30 
    backdrop-blur-[15px]
    hidden md:block 
  "
>
  <span className="text-white text-lg font-semibold bg-black/40 px-4 py-2 rounded-lg border border-white/20">
    {group.year}
  </span>
</div>

{/* MOBILE DATE — shown above both stacks */}
<div className="md:hidden w-full flex justify-center mb-4 mt-4 backdrop-blur-[15px]">
  <span className="text-white text-base font-semibold bg-black/40 px-4 py-2 rounded-lg border border-white/20">
    {group.year}
  </span>
</div>


    {/* RIGHT STACK */}
{/* <div className="relative w-full md:w-1/2 flex justify-start pl-16 md:pl-32"> */}
<div className="relative w-full md:w-1/2 flex 
  justify-center md:justify-start
  px-2 md:pl-32 mt-6 md:mt-0"
>

  <motion.div
    // onClick={() => setSelectedYear(group)}
    onClick={() => router.push(`/gallery/${encodeURIComponent(group.year)}/Sankranthi`)}

    // className="relative w-[360px] h-[220px] group cursor-pointer"
    className="relative w-[250px] h-[150px] sm:w-[300px] sm:h-[180px] md:w-[360px] md:h-[220px] group cursor-pointer"

    initial="initial"
    whileHover="hover"
    style={{ willChange: "transform" }}
  >
    {/* STACK IMAGES */}
    {/* {group.photos.map((img, i) => ( */}
    {[...group.photos.slice(1), group.photos[0]].map((img, i) => (
      <motion.img
        key={i}
        src={img}
        className="absolute w-full h-full object-cover rounded-xl border-4 border-white shadow-md"
        variants={{
          initial: { rotate: (i - 1) * 2 },
          hover: {
            rotate: (i - 2) * 3 + i * 2,
            transition: { duration: 0.45, ease: "easeInOut" }
          }
        }}
        style={{
          zIndex: 10 - i,
          willChange: "transform"
        }}
        alt=""
      />
    ))}

    {/* DARK OVERLAY ONLY ON TOP CARD */}
    <div
      className="
        absolute inset-0 rounded-xl
        bg-black/60
        opacity-0
        group-hover:opacity-100
        transition-opacity duration-500 ease-in-out
        pointer-events-none
      "
      style={{ zIndex: 11 }}
    ></div>

    {/* CALLIGRAPHY TEXT: SANKRANTHI */}
    <div
      className="
        absolute inset-0 flex items-center justify-center
        opacity-0 group-hover:opacity-100
        transition-opacity duration-700 ease-in-out
        pointer-events-none
      "
      style={{ zIndex: 12 }}
    >
      <span
        className="text-white text-5xl drop-shadow-xl"
        style={{
          fontFamily: '"Dancing Script", cursive'
        }}>
        Sankranthi
      </span>
    </div>
  </motion.div>
</div>

  </div>
))}

      </div>
    </main>
  );
};

export default App;
