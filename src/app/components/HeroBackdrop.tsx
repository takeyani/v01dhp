"use client";

/**
 * Hero background — prism-hero.webp with overlay effects.
 */
export default function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Hero prism image */}
      <img
        src="/images/prism-hero.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/60 via-[#050507]/30 to-[#050507]/90" />

      {/* Spectrum light leak at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] spectrum-line"
        style={{ opacity: 0.6 }}
      />

      {/* Floating spectrum particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => {
          const colors = [
            "#ff3b5c", "#ff8a3b", "#ffd23b", "#3bff6e",
            "#3bc5ff", "#6e3bff", "#ff3bdb",
          ];
          return (
            <span
              key={i}
              className="particle absolute block rounded-full"
              style={{
                left: `${(i * 47 + 5) % 100}%`,
                top: `${(i * 31 + 10) % 100}%`,
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                backgroundColor: colors[i % colors.length],
                boxShadow: `0 0 10px ${colors[i % colors.length]}80`,
                animationDelay: `${(i % 7) * 1.4}s`,
                animationDuration: `${9 + (i % 5) * 2}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
