"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Hero() {
  const images = [
    "https://prudentequity.com/public/admin/banner/1577859132equityace_1.jpg",
    "https://i.pinimg.com/1200x/ae/08/03/ae080325890f393733e9a8f3b8dead54.jpg",
    "https://i.pinimg.com/1200x/a0/64/6b/a0646b29c189502aa6b089ddd7b30f3c.jpg",
    "https://i.pinimg.com/736x/f2/43/7b/f2437b0589e61be03f6f4c45a8c15189.jpg",
    "https://i.pinimg.com/1200x/d8/d1/5e/d8d15e655f81b7f2f5d4a1e6884aa3d5.jpg",
    "https://i.pinimg.com/1200x/e3/44/e1/e344e1db84f9cfe245153acae6a3857a.jpg",
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 3000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <AnimatePresence>
          <motion.div
            key={images[index]}
            initial={{ opacity: 0, x: 100, scale: 1.05 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.95 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeInOut",
              opacity: { duration: 0.6 },
              x: { duration: 0.8 },
              scale: { duration: 0.8 }
            }}
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${images[index]})` }}
          />
        </AnimatePresence>
        {/* Enhanced overlay for smooth transitions */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/10 pointer-events-none"></div>
      </div>

              <div className="section py-24 md:py-32 max-w-3xl">
                <motion.h1
                  className="section-title font-serif text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  Metaarth Capital: Institutional Strategy for the Sophisticated Investor
                </motion.h1>
                <motion.p
                  className="text-sm md:text-base leading-relaxed mt-6 !text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                >
                  SEBI-registered AIF Category III manager delivering disciplined, research-driven equity
                  strategies for Ultra-HNIs and Family Offices.
                </motion.p>
                <motion.div
                  className="mt-10 flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <a 
                    className="btn-accent" 
                    href="https://drive.google.com/file/d/1byzNJQNYwoxjy8wl9sFGKBdLe5T3lDsX/view?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Download Brochure
                  </a>
                  <Link href="/contact" className="btn-primary !bg-[#dc3545]">Contact Us</Link>
                </motion.div>
              </div>



    </section>
  );
}


