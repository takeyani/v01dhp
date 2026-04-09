/**
 * Hero background — pure SVG + CSS, fully original.
 * Layered mountain silhouettes + atmospheric gradient + subtle grain.
 */
export default function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Atmospheric radial gradient — visible warm glow at horizon */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 90%, rgba(201,169,97,0.25) 0%, rgba(60,40,20,0.1) 30%, rgba(10,10,10,0) 60%), radial-gradient(ellipse 70% 50% at 30% 20%, rgba(120,120,160,0.12) 0%, rgba(10,10,10,0) 70%)",
        }}
      />

      {/* Layered mountain silhouettes — increased contrast */}
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="m1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0a0a0a" />
            <stop offset="1" stopColor="#000000" />
          </linearGradient>
          <linearGradient id="m2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1f1f28" />
            <stop offset="1" stopColor="#0c0c12" />
          </linearGradient>
          <linearGradient id="m3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3a3a48" />
            <stop offset="1" stopColor="#1a1a22" />
          </linearGradient>
          <radialGradient id="fog" cx="50%" cy="60%" r="50%">
            <stop offset="0" stopColor="#5a5a70" stopOpacity="0.5" />
            <stop offset="1" stopColor="#0a0a0a" stopOpacity="0" />
          </radialGradient>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.05 0" />
          </filter>
        </defs>

        {/* Far layer — sharper peaks */}
        <path
          d="M0,560 L100,420 L200,500 L320,360 L440,460 L560,340 L680,440 L800,320 L920,420 L1040,360 L1160,440 L1280,360 L1400,460 L1520,400 L1600,440 L1600,900 L0,900 Z"
          fill="url(#m3)"
          opacity="0.95"
        />

        {/* Mid fog band */}
        <rect x="0" y="380" width="1600" height="280" fill="url(#fog)" />

        {/* Mid layer */}
        <path
          d="M0,680 L80,560 L180,620 L300,500 L420,580 L540,490 L660,570 L780,480 L900,560 L1020,500 L1140,580 L1260,520 L1380,590 L1500,540 L1600,580 L1600,900 L0,900 Z"
          fill="url(#m2)"
          opacity="1"
        />

        {/* Near layer */}
        <path
          d="M0,800 L80,720 L180,770 L300,690 L420,760 L540,710 L660,765 L780,700 L900,760 L1020,710 L1140,765 L1260,720 L1380,770 L1500,730 L1600,765 L1600,900 L0,900 Z"
          fill="url(#m1)"
        />

        {/* Grain overlay */}
        <rect x="0" y="0" width="1600" height="900" filter="url(#grain)" opacity="0.4" />
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
