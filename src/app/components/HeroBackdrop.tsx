"use client";

import { useEffect, useRef } from "react";

/**
 * Hero background — SVG mountains with parallax + animated fog + particles.
 * All original, no external assets.
 */
export default function HeroBackdrop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const farRef = useRef<SVGPathElement>(null);
  const midRef = useRef<SVGPathElement>(null);
  const nearRef = useRef<SVGPathElement>(null);
  const fogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;

    function onScroll() {
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (farRef.current)
          farRef.current.style.transform = `translateY(${y * -0.08}px)`;
        if (midRef.current)
          midRef.current.style.transform = `translateY(${y * -0.04}px)`;
        if (nearRef.current)
          nearRef.current.style.transform = `translateY(${y * -0.015}px)`;
        if (fogRef.current)
          fogRef.current.style.transform = `translateY(${y * -0.06}px)`;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Warm horizon glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 90%, rgba(201,169,97,0.22) 0%, rgba(60,40,20,0.08) 35%, rgba(10,10,10,0) 60%), radial-gradient(ellipse 70% 50% at 25% 15%, rgba(100,100,140,0.1) 0%, rgba(10,10,10,0) 65%)",
        }}
      />

      {/* Mountain SVG with parallax layers */}
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="gFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3a3a50" />
            <stop offset="1" stopColor="#1a1a25" />
          </linearGradient>
          <linearGradient id="gMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#24242e" />
            <stop offset="1" stopColor="#0e0e14" />
          </linearGradient>
          <linearGradient id="gNear" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0e0e12" />
            <stop offset="1" stopColor="#020204" />
          </linearGradient>
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.04 0"
            />
          </filter>
        </defs>

        {/* Far peaks */}
        <path
          ref={farRef}
          d="M0,520 L80,380 L160,460 L280,310 L400,420 L520,290 L640,400 L760,280 L880,380 L1000,310 L1120,400 L1260,320 L1400,420 L1520,360 L1600,400 L1600,900 L0,900 Z"
          fill="url(#gFar)"
          style={{ willChange: "transform" }}
        />

        {/* Mid ridge */}
        <path
          ref={midRef}
          d="M0,660 L60,540 L160,600 L280,480 L400,560 L520,470 L640,550 L760,460 L880,540 L1000,480 L1120,560 L1260,500 L1380,570 L1500,520 L1600,560 L1600,900 L0,900 Z"
          fill="url(#gMid)"
          style={{ willChange: "transform" }}
        />

        {/* Near ridge */}
        <path
          ref={nearRef}
          d="M0,790 L60,710 L160,755 L280,680 L400,745 L520,700 L640,750 L760,695 L880,745 L1000,705 L1120,750 L1260,715 L1380,755 L1500,720 L1600,750 L1600,900 L0,900 Z"
          fill="url(#gNear)"
          style={{ willChange: "transform" }}
        />

        {/* Grain */}
        <rect
          x="0"
          y="0"
          width="1600"
          height="900"
          filter="url(#grain)"
          opacity="0.35"
        />
      </svg>

      {/* Animated drifting fog — CSS keyframes */}
      <div
        ref={fogRef}
        className="absolute left-[-20%] w-[140%] fog-drift"
        style={{
          top: "35%",
          height: "30%",
          willChange: "transform",
          background:
            "radial-gradient(ellipse 100% 100% at 30% 50%, rgba(140,140,160,0.18) 0%, rgba(10,10,10,0) 70%)",
        }}
      />
      <div
        className="absolute left-[-10%] w-[120%] fog-drift-slow"
        style={{
          top: "50%",
          height: "25%",
          background:
            "radial-gradient(ellipse 100% 100% at 70% 50%, rgba(100,100,120,0.12) 0%, rgba(10,10,10,0) 65%)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Gold floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="particle absolute block rounded-full bg-gold"
            style={{
              left: `${(i * 41 + 7) % 100}%`,
              top: `${(i * 29 + 13) % 100}%`,
              width: `${1.5 + (i % 3)}px`,
              height: `${1.5 + (i % 3)}px`,
              animationDelay: `${(i % 8) * 1.2}s`,
              animationDuration: `${8 + (i % 6) * 2}s`,
              opacity: 0.4 + (i % 4) * 0.15,
            }}
          />
        ))}
      </div>
    </div>
  );
}
