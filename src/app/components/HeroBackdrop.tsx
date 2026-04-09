/**
 * Hero background — pure SVG + CSS, fully original.
 * Layered mountain silhouettes + atmospheric gradient + subtle grain.
 */
export default function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Atmospheric radial gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,169,97,0.08) 0%, rgba(10,10,10,0) 60%), radial-gradient(ellipse 60% 50% at 20% 30%, rgba(201,169,97,0.04) 0%, rgba(10,10,10,0) 70%)",
        }}
      />

      {/* Layered mountain silhouettes */}
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="m1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#15151a" />
            <stop offset="1" stopColor="#0a0a0a" />
          </linearGradient>
          <linearGradient id="m2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1c1c22" />
            <stop offset="1" stopColor="#0d0d11" />
          </linearGradient>
          <linearGradient id="m3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#22222a" />
            <stop offset="1" stopColor="#101015" />
          </linearGradient>
          <radialGradient id="fog" cx="50%" cy="60%" r="50%">
            <stop offset="0" stopColor="#1a1a1f" stopOpacity="0.6" />
            <stop offset="1" stopColor="#0a0a0a" stopOpacity="0" />
          </radialGradient>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.05 0" />
          </filter>
        </defs>

        {/* Far layer */}
        <path
          d="M0,640 L120,580 L240,610 L360,540 L480,580 L600,520 L720,560 L840,500 L960,550 L1080,510 L1200,560 L1320,520 L1440,570 L1600,540 L1600,900 L0,900 Z"
          fill="url(#m3)"
          opacity="0.7"
        />

        {/* Mid fog band */}
        <rect x="0" y="500" width="1600" height="200" fill="url(#fog)" />

        {/* Mid layer */}
        <path
          d="M0,720 L100,660 L200,700 L320,620 L440,680 L560,610 L680,670 L800,600 L920,660 L1040,620 L1160,680 L1280,640 L1400,690 L1520,650 L1600,680 L1600,900 L0,900 Z"
          fill="url(#m2)"
          opacity="0.85"
        />

        {/* Near layer */}
        <path
          d="M0,820 L80,770 L180,800 L300,740 L420,790 L540,750 L660,795 L780,750 L900,790 L1020,755 L1140,795 L1260,760 L1380,800 L1500,770 L1600,795 L1600,900 L0,900 Z"
          fill="url(#m1)"
        />

        {/* Grain overlay */}
        <rect x="0" y="0" width="1600" height="900" filter="url(#grain)" opacity="0.6" />
      </svg>

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Drifting gold particles */}
      <div className="absolute inset-0 opacity-60">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="particle absolute block h-[2px] w-[2px] rounded-full bg-gold"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              animationDelay: `${(i % 6) * 0.8}s`,
              animationDuration: `${10 + (i % 5) * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
