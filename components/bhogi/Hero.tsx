"use client";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/bhogi/vid.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide drop-shadow-lg">
          BHOGI
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200">
          A celebration of new beginnings, warmth, and togetherness.
          <br /> Let go of the old and welcome the light of the new.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent"></div>
    </div>
  );
}
