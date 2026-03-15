import { ReactNode, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlowCard({ children, className = '' }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-xl overflow-hidden ${className}`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/20 via-transparent to-emerald-400/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />

      {/* Mouse follow glow */}
      {isHovered && (
        <div
          className="absolute w-64 h-64 rounded-full pointer-events-none transition-opacity duration-300"
          style={{
            left: mousePos.x - 128,
            top: mousePos.y - 128,
            background:
              'radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, transparent 70%)',
          }}
        />
      )}

      {/* Content */}
      <div className="relative bg-navy-800/60 backdrop-blur-sm border border-navy-700/80 hover:border-cyan-400/30 rounded-xl p-6 transition-colors duration-300 h-full">
        {children}
      </div>
    </motion.div>
  );
}
