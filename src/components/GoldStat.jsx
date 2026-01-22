export default function GoldStat({ title, value, sub }) {
  return (
    <div className="relative w-[260px] h-[90px]">
      {/* GOLD BORDER */}
      <svg className="absolute inset-0" viewBox="0 0 260 90">
        <defs>
          <linearGradient id="goldStroke" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F4B43C" />
            <stop offset="100%" stopColor="#8E6923" />
          </linearGradient>
        </defs>

        <rect
          x="3"
          y="3"
          width="254"
          height="84"
          rx="14"
          fill="none"
          stroke="url(#goldStroke)"
          strokeWidth="3"
        />
      </svg>

      {/* CONTENT */}
      <div className="relative h-full flex flex-col items-center justify-center text-white">
        <p className="text-xs tracking-widest opacity-80">
          {title}
        </p>

        <p className="text-2xl font-bold">
          {value}
        </p>

        {sub && (
          <p className="text-[11px] opacity-70">
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}
