"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type Quote = { quote: string; author?: string };

export function Carousel({ items, intervalMs = 3500 }: { items: Quote[]; intervalMs?: number }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), intervalMs);
    return () => clearInterval(id);
  }, [items.length, intervalMs]);

  const item = items[index];
  return (
    <div className="relative overflow-hidden rounded-2xl border bg-white/70 p-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-xl md:text-2xl font-serif leading-relaxed">{item.quote}</div>
          {item.author && <div className="mt-3 text-sm muted">{item.author}</div>}
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-3 right-4 flex gap-1">
        {items.map((_, i) => (
          <span key={i} className={`h-1.5 w-4 rounded-full ${i === index ? 'bg-[var(--accent)]' : 'bg-[color-mix(in_oklab,var(--foreground)_15%,transparent)]'}`} />
        ))}
      </div>
    </div>
  );
}


