"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

// Texts to cycle
const texts = [
  "Mechanical Design Engineer",
  "CAD Specialist (SolidWorks, Fusion 360)",
  "FEA & CFD Simulation Expert",
  "Turning Ideas into Products 🚀",
];

// Images to cycle
const images = ["/hero1.png", "/hero2.png", "/hero3.png", "/hero4.png"];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // typing speed controls
  const typingSpeed = 100; // ms per letter
  const deletingSpeed = 50; // ms per letter
  const pauseTime = 10000; // ms pause when full text is shown

  // cycle through texts
  useEffect(() => {
    if (textIndex >= texts.length) return;

    if (!deleting && subIndex === texts[textIndex].length) {
      // pause after typing full text
      const timeout = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      // move to next text after deleting
      setDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, textIndex]);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 max-w-6xl mx-auto">
      {/* Text Section */}
      <div className="flex-1">
        <motion.h1
          key={textIndex}
          className="text-4xl md:text-5xl font-bold text-brand min-h-[3rem]"
        >
          {texts[textIndex].substring(0, subIndex)}
          <span className="animate-pulse">|</span>
        </motion.h1>

        <p className="mt-6 text-lg text-gray-600">
          Building innovative solutions through design, simulation, and engineering excellence.
        </p>
        <li className="mt-8 bg-brand text-white rounded-xl shadow hover:opacity-90 transition cursor-pointer list-none" >
         <a href="./portfolio" >View My Work</a> 
        </li>
      </div>

      {/* Image Section */}
      <div className="flex-1 relative w-full h-72 md:h-96 mt-12 md:mt-0">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === textIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={src}
              alt={`Hero ${i}`}
              fill
              className="object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
