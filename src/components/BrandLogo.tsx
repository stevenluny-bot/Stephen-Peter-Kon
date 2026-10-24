interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withText?: boolean;
  withSubtitle?: boolean;
  className?: string;
}

export default function BrandLogo({
  size = 'sm',
  withText = false,
  withSubtitle = false,
  className = '',
}: BrandLogoProps) {
  const sizeMap = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-xl',
  };

  const svgDimensionMap = {
    sm: 28,
    md: 36,
    lg: 48,
    xl: 64,
  };

  const dim = svgDimensionMap[size];

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Precision Geometric Monogram (S · P · K & Data Node Geometry) */}
      <div
        className={`${sizeMap[size]} shrink-0 rounded-md bg-black border border-zinc-700 hover:border-white transition-colors flex items-center justify-center p-1 shadow-sm overflow-hidden group`}
      >
        <svg
          width={dim - 8}
          height={dim - 8}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white"
        >
          {/* Outer geometric precision frame */}
          <rect
            x="2"
            y="2"
            width="36"
            height="36"
            rx="4"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeDasharray="2 2"
            className="text-zinc-600 group-hover:text-zinc-400 transition-colors"
          />

          {/* S-curve path */}
          <path
            d="M26 12H16C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20H24C26.2091 20 28 21.7909 28 24C28 26.2091 26.2091 28 24 28H14"
            stroke="currentColor"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Central P/K vertical axis & diagonal stem */}
          <path
            d="M20 9V31"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="text-zinc-400"
          />

          {/* K-branch lower diagonal */}
          <path
            d="M20 20L29 29"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Data node points */}
          <circle cx="12" cy="16" r="1.5" fill="currentColor" />
          <circle cx="28" cy="24" r="1.5" fill="currentColor" />
          <circle cx="20" cy="20" r="2" fill="white" />
        </svg>
      </div>

      {withText && (
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-white tracking-tight text-sm sm:text-base">
            Stephen Peter Kon
          </span>
          {withSubtitle && (
            <span className="text-[11px] font-mono text-zinc-400">
              Data Analyst &amp; Learning Facilitator
            </span>
          )}
        </div>
      )}
    </div>
  );
}
