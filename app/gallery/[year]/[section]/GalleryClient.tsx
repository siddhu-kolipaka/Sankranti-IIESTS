"use client";

import { motion } from "framer-motion";

interface Props {
  images: string[];
  year: string;
  section: string;
}

export default function GalleryClient({ images, year, section }: Props) {
  // ---- BUILD ROWS WITH PATTERN 1,2,3,2,3,2,3... ----
  const rows: string[][] = [];
  let i = 0;

  const pattern = [1, 2, 3];  // first three rows
  const repeatPattern = [2, 3]; // repeating afterwards

  let p = 0;

  while (i < images.length) {
    let count;

    if (p < pattern.length) {
      count = pattern[p];
    } else {
      count = repeatPattern[(p - pattern.length) % repeatPattern.length];
    }

    rows.push(images.slice(i, i + count));
    i += count;
    p++;
  }

  return (
    <main className="min-h-screen bg-black text-white pb-20">
      {/* Header */}
      <section className="w-full py-12 text-center">
        <h1 className="text-6xl font-extrabold drop-shadow-xl great-vibes">{section}</h1>
        <p className="text-3xl text-gray-300 mt-2 comforter ">
          Memories on{" "}
          <span className="text-yellow-400 font-semibold">{year}</span>
        </p>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full shadow-[0_0_10px_#facc15]" />
      </section>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-8">

        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`
              grid gap-6
              ${
                row.length === 1
                  ? "grid-cols-1"
                  : row.length === 2
                  ? "grid-cols-1 sm:grid-cols-2"
                  : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
              }
            `}
          >
            {row.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.45)] group"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br
                    from-white/10 to-transparent
                    opacity-0 group-hover:opacity-20
                    transition-all duration-300"
                />

                <img
                  src={src}
                  alt=""
                  className="w-full h-[320px] object-cover rounded-2xl 
                             transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
