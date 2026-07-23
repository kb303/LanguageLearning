import { useState } from "react";
import { motion } from "motion/react";

export default function HangulCard({ character, romanization }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-card border border-border rounded-xl p-4 cursor-pointer select-none overflow-hidden"
      whileHover={{ y: -3 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      transition={{ duration: 0.18 }}
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-200"
        style={{
          opacity: hovered ? 1 : 0,
          background: "linear-gradient(135deg, #EEF0F8 0%, #FAFAF8 100%)",
        }}
      />
      <div className="relative z-10">
        <div className="font-['Noto_Serif_KR'] text-4xl font-bold text-primary text-center mb-2">
          {character}
        </div>
        <div className="text-xs font-semibold text-accent text-center tracking-widest uppercase mb-1">
          {romanization}
        </div>
      </div>
    </motion.div>
  );
}
