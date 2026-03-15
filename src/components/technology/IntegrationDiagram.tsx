import { Zap, TrendingUp, MessageSquare, Wrench, Home, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/shared/ScrollReveal';

const NODES = [
  { icon: Zap, label: 'Energy', color: '#22D3EE' },
  { icon: TrendingUp, label: 'Revenue', color: '#34D399' },
  { icon: MessageSquare, label: 'Guest Services', color: '#22D3EE' },
  { icon: Wrench, label: 'Maintenance', color: '#34D399' },
  { icon: Home, label: 'Smart Rooms', color: '#22D3EE' },
  { icon: Shield, label: 'Operations', color: '#34D399' },
];

export default function IntegrationDiagram() {
  const cx = 200;
  const cy = 200;
  const radius = 140;

  const positions = NODES.map((_, i) => {
    const angle = ((i * 60 - 90) * Math.PI) / 180;
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    };
  });

  return (
    <section className="section-padding relative overflow-hidden aurora-bg">
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="container-main relative">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          <ScrollReveal className="flex-1 flex justify-center" direction="left">
            <div className="relative w-[420px] h-[420px]">
              <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="centerPulse">
                    <stop offset="0%" stopColor="rgba(34, 211, 238, 0.15)" />
                    <stop offset="50%" stopColor="rgba(34, 211, 238, 0.05)" />
                    <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
                  </radialGradient>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(34, 211, 238, 0.3)" />
                    <stop offset="50%" stopColor="rgba(52, 211, 153, 0.2)" />
                    <stop offset="100%" stopColor="rgba(34, 211, 238, 0.3)" />
                  </linearGradient>
                </defs>

                {[60, 90, 140].map((r, i) => (
                  <circle key={r} cx={cx} cy={cy} r={r} fill="none" stroke={`rgba(34, 211, 238, ${0.06 - i * 0.015})`} strokeWidth="1" strokeDasharray="4 6">
                    <animateTransform attributeName="transform" type="rotate" from={`0 ${cx} ${cy}`} to={`${i % 2 === 0 ? 360 : -360} ${cx} ${cy}`} dur={`${40 + i * 15}s`} repeatCount="indefinite" />
                  </circle>
                ))}

                {positions.map((pos, i) => (
                  <g key={`line-${i}`}>
                    <line x1={cx} y1={cy} x2={pos.x} y2={pos.y} stroke="url(#lineGrad)" strokeWidth="1" opacity="0.4" />
                    <circle r="2" fill={NODES[i].color} opacity="0.8">
                      <animateMotion dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" path={`M${pos.x},${pos.y} L${cx},${cy}`} />
                      <animate attributeName="opacity" values="0;0.8;0.8;0" dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                ))}

                {positions.map((pos, i) => {
                  const next = positions[(i + 1) % positions.length];
                  return <line key={`ring-${i}`} x1={pos.x} y1={pos.y} x2={next.x} y2={next.y} stroke="rgba(34, 211, 238, 0.08)" strokeWidth="1" />;
                })}

                <circle cx={cx} cy={cy} r="55" fill="url(#centerPulse)">
                  <animate attributeName="r" values="50;60;50" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx={cx} cy={cy} r="30" fill="rgba(34, 211, 238, 0.06)" stroke="rgba(34, 211, 238, 0.25)" strokeWidth="1" />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div className="text-center" animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 3, repeat: Infinity }}>
                  <div className="text-[10px] font-semibold text-cyan-400 uppercase tracking-[0.2em]">Shared</div>
                  <div className="text-[10px] font-semibold text-cyan-400 uppercase tracking-[0.2em]">Intelligence</div>
                </motion.div>
              </div>

              {positions.map((pos, i) => {
                const Icon = NODES[i].icon;
                const offsetScale = 1.18;
                const ox = cx + (pos.x - cx) * offsetScale;
                const oy = cy + (pos.y - cy) * offsetScale;
                const isCyan = NODES[i].color === '#22D3EE';

                return (
                  <motion.div
                    key={`node-${i}`}
                    className="absolute flex flex-col items-center gap-1.5"
                    style={{ left: `${(ox / 400) * 100}%`, top: `${(oy / 400) * 100}%`, transform: 'translate(-50%, -50%)' }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center border backdrop-blur-sm"
                      style={{
                        background: `rgba(${isCyan ? '34, 211, 238' : '52, 211, 153'}, 0.08)`,
                        borderColor: `rgba(${isCyan ? '34, 211, 238' : '52, 211, 153'}, 0.2)`,
                      }}
                    >
                      <Icon size={18} style={{ color: NODES[i].color }} />
                    </div>
                    <span className="text-[11px] font-medium text-slate-400 whitespace-nowrap">{NODES[i].label}</span>
                  </motion.div>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal className="flex-1" direction="right">
            <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
              Integration architecture
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mt-2">
              Cross-system intelligence
            </h2>
            <p className="text-slate-400 mt-6 leading-relaxed">
              Six capability areas connected through a shared intelligence layer. Every system feeds data in and draws insights out.
            </p>
            <p className="text-slate-400 mt-4 leading-relaxed">
              This is{' '}
              <span className="text-cyan-400 font-medium">compounding intelligence</span>
              . Each system makes every other system smarter.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
