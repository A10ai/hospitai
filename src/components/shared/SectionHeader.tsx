interface SectionHeaderProps {
  label: string;
  heading: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  label,
  heading,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-semibold text-white mt-2">
        {heading}
      </h2>
      {description && (
        <p
          className={`text-slate-400 mt-4 max-w-2xl text-lg leading-relaxed ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
