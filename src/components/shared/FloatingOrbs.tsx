import { motion } from 'framer-motion';

const orbs = [
  { size: 400, x: '15%', y: '20%', color: 'rgba(34, 211, 238, 0.08)', duration: 25 },
  { size: 300, x: '70%', y: '60%', color: 'rgba(52, 211, 153, 0.06)', duration: 30 },
  { size: 500, x: '50%', y: '30%', color: 'rgba(34, 211, 238, 0.05)', duration: 20 },
  { size: 250, x: '80%', y: '15%', color: 'rgba(34, 211, 238, 0.07)', duration: 35 },
  { size: 350, x: '25%', y: '70%', color: 'rgba(52, 211, 153, 0.05)', duration: 28 },
];

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 30, -20, 15, 0],
            y: [0, -25, 15, -10, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
