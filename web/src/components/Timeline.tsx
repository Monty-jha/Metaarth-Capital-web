"use client";
import { motion } from "framer-motion";

type Item = { title: string; body: string };

export function VerticalTimeline({ items }: { items: Item[] }) {
  return (
    <div className="relative pl-6">
      <ul className="space-y-8">
        {items.map((it, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-1 top-1 size-2 rounded-full bg-[var(--accent)]" />
            <motion.h4 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="font-semibold">
              {it.title}
            </motion.h4>
            <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="muted mt-1">
              {it.body}
            </motion.p>
          </li>
        ))}
      </ul>
    </div>
  );
}


