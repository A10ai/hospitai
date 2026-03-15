import AnimatedCounter from './AnimatedCounter';

interface StatCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  isOrdinal?: boolean;
}

export default function StatCard({
  value,
  label,
  prefix = '',
  suffix = '',
  isOrdinal = false,
}: StatCardProps) {
  return (
    <div className="text-center md:text-left">
      <div className="text-4xl md:text-5xl font-bold text-white">
        {prefix}
        <AnimatedCounter target={value} />
        {suffix}
      </div>
      <div className="text-slate-400 text-sm mt-2">{isOrdinal ? '' : ''}{label}</div>
    </div>
  );
}
