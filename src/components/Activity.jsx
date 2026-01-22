  export default function Activity({ icon, label, value }) {
    return (
      <div className="flex flex-col items-center">
        <div className="relative w-[90px] h-[90px]">
          <svg className="absolute inset-0" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="goldRing" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F4B43C" />
                <stop offset="100%" stopColor="#8E6923" />
              </linearGradient>
            </defs>

            <circle
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke="url(#goldRing)"
              strokeWidth="4"
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center text-[#F4B43C] text-[26px]">
            {icon}
          </div>

          <div
            className="
              absolute -bottom-2 left-1/2 -translate-x-1/2
              w-9 h-9
              rounded-full
              bg-gradient-to-b from-[#F4B43C] to-[#8E6923]
              flex items-center justify-center
              text-[22px] font-bold
              text-[#003266]
            "
          >
            {value}
          </div>
        </div>

        <p className="mt-4 text-xs tracking-widest text-center text-white">
          {label}
        </p>
      </div>
    );
  }
