"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

/**
 * Blackhole experience — scroll-driven descent into a black hole.
 * All visuals are CSS/SVG, no external images.
 *
 * Stages:
 * 0-15%  — Deep space, approaching
 * 15-35% — Accretion disk visible, gravitational lensing begins
 * 35-55% — Crossing the photon sphere, light bends wildly
 * 55-75% — Inside the event horizon, time distortion
 * 75-90% — Spaghettification, light spectrum tears apart
 * 90-100% — Singularity / rebirth of light (V01D concept tie-in)
 */

interface Stage {
  range: [number, number];
  title: string;
  sub: string;
  body: string;
}

const stages: Stage[] = [
  {
    range: [0, 0.15],
    title: "Deep Space",
    sub: "深宇宙",
    body: "無限の暗闇の中、一点の異常な重力を感じる。\n光が、わずかに歪み始めている。",
  },
  {
    range: [0.15, 0.35],
    title: "Accretion Disk",
    sub: "降着円盤",
    body: "超高温のガスが渦を巻いている。\n光速に近い速度で回転する物質が、\nスペクトラムの彼方へ輝く。",
  },
  {
    range: [0.35, 0.55],
    title: "Photon Sphere",
    sub: "光子球",
    body: "光すらも曲がり、自分自身の後頭部が見え始める。\n空間が折り畳まれ、\n宇宙の全方向が一つの環に収束する。",
  },
  {
    range: [0.55, 0.75],
    title: "Event Horizon",
    sub: "事象の地平線",
    body: "もう戻れない境界を越えた。\n外の宇宙は加速的に青方偏移し、\n全歴史が一瞬に圧縮されていく。",
  },
  {
    range: [0.75, 0.9],
    title: "Spaghettification",
    sub: "スパゲッティ化",
    body: "潮汐力が全てを引き伸ばす。\n光のスペクトラムが引き裂かれ、\n7つの色が解離していく。",
  },
  {
    range: [0.9, 1],
    title: "Singularity",
    sub: "特異点 — 光の再構築",
    body: "全ての情報が一点に収束する。\nそして、新たな光が生まれる。\nV01D — 分解と再構築。",
  },
];

function getActiveStage(p: number): number {
  for (let i = stages.length - 1; i >= 0; i--) {
    if (p >= stages[i].range[0]) return i;
  }
  return 0;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export default function BlackholePage() {
  const [progress, setProgress] = useState(0);
  const scrollRef = useRef(0);
  const targetRef = useRef(0);
  const rafRef = useRef(0);

  const activeStage = getActiveStage(progress);
  const stage = stages[activeStage];

  // Derived visual values from progress
  const holeScale = lerp(0.05, 3.5, Math.pow(progress, 1.5));
  const diskOpacity = progress < 0.1 ? 0 : progress < 0.6 ? lerp(0, 1, (progress - 0.1) / 0.5) : lerp(1, 0, (progress - 0.6) / 0.3);
  const diskSpeed = lerp(20, 3, progress);
  const lensDistort = lerp(0, 40, Math.pow(progress, 2));
  const starWarp = lerp(1, 0, Math.min(1, progress * 1.5));
  const bgBlue = progress > 0.55 ? lerp(0, 60, (progress - 0.55) / 0.2) : 0;
  const spectrumTear = progress > 0.75 ? (progress - 0.75) / 0.15 : 0;
  const singularity = progress > 0.9 ? (progress - 0.9) / 0.1 : 0;

  const animate = useCallback(() => {
    scrollRef.current += (targetRef.current - scrollRef.current) * 0.06;
    setProgress(Math.min(1, Math.max(0, scrollRef.current)));
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetRef.current = Math.min(1, Math.max(0, targetRef.current + e.deltaY * 0.0004));
    };

    let touchY = 0;
    let touchTarget = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0].clientY;
      touchTarget = targetRef.current;
    };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const dy = touchY - e.touches[0].clientY;
      targetRef.current = Math.min(1, Math.max(0, touchTarget + dy * 0.001));
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [animate]);

  return (
    <div className="fixed inset-0 overflow-hidden bg-black select-none">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-white/5">
        <div
          className="h-full"
          style={{
            width: `${progress * 100}%`,
            background: progress > 0.9
              ? "linear-gradient(90deg, var(--prism-1), var(--prism-3), var(--prism-5), var(--prism-7))"
              : `rgba(255, ${Math.round(140 - progress * 140)}, ${Math.round(60 - progress * 60)}, 0.8)`,
          }}
        />
      </div>

      {/* Back link */}
      <Link
        href="/"
        className="fixed top-5 left-6 z-50 text-[11px] uppercase tracking-[0.2em] text-white/20 hover:text-white/50 transition-colors"
      >
        &larr; V01D
      </Link>

      {/* Stage indicator */}
      <div className="fixed top-5 right-6 z-50 text-right">
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/30">
          {stage.sub}
        </p>
      </div>

      {/* ===== STARFIELD ===== */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{ opacity: starWarp }}
      >
        {Array.from({ length: 120 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${(i * 83 + 17) % 100}%`,
              top: `${(i * 67 + 31) % 100}%`,
              width: `${1 + (i % 3)}px`,
              height: `${1 + (i % 3)}px`,
              opacity: 0.3 + (i % 5) * 0.1,
              transform: progress > 0.3
                ? `translate(${(50 - ((i * 83 + 17) % 100)) * lensDistort * 0.01}px, ${(50 - ((i * 67 + 31) % 100)) * lensDistort * 0.01}px)`
                : "none",
              transition: "transform 0.3s linear",
            }}
          />
        ))}
      </div>

      {/* ===== GRAVITATIONAL LENSING RING ===== */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: `${lerp(100, 600, Math.min(1, progress * 2))}px`,
          height: `${lerp(100, 600, Math.min(1, progress * 2))}px`,
          border: `1px solid rgba(255,200,100,${lerp(0, 0.15, Math.min(1, progress * 3))})`,
          boxShadow: `0 0 ${lerp(0, 80, progress)}px rgba(255,160,60,${lerp(0, 0.2, progress)}), inset 0 0 ${lerp(0, 60, progress)}px rgba(255,120,40,${lerp(0, 0.1, progress)})`,
          opacity: progress > 0.85 ? lerp(1, 0, (progress - 0.85) / 0.15) : 1,
        }}
      />

      {/* ===== ACCRETION DISK ===== */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: `${lerp(200, 800, Math.min(1, progress * 1.8))}px`,
          height: `${lerp(60, 240, Math.min(1, progress * 1.8))}px`,
          opacity: diskOpacity,
        }}
      >
        <div
          className="absolute inset-0 rounded-[50%]"
          style={{
            background: `conic-gradient(from 0deg, rgba(255,80,20,0.6), rgba(255,180,40,0.8), rgba(255,220,100,0.4), rgba(255,100,30,0.7), rgba(200,60,20,0.5), rgba(255,80,20,0.6))`,
            animation: `spin ${diskSpeed}s linear infinite`,
            filter: `blur(${lerp(2, 8, progress)}px)`,
          }}
        />
        {/* Inner ring glow */}
        <div
          className="absolute inset-[15%] rounded-[50%]"
          style={{
            background: `conic-gradient(from 90deg, rgba(255,200,100,0.4), rgba(255,140,50,0.6), rgba(255,220,120,0.3), rgba(255,160,60,0.5))`,
            animation: `spin ${diskSpeed * 0.7}s linear infinite reverse`,
            filter: `blur(${lerp(1, 5, progress)}px)`,
          }}
        />
      </div>

      {/* ===== BLACK HOLE (event horizon) ===== */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"
        style={{
          width: `${holeScale * 100}px`,
          height: `${holeScale * 100}px`,
          boxShadow: `0 0 ${holeScale * 30}px ${holeScale * 10}px rgba(0,0,0,0.9), 0 0 ${holeScale * 5}px rgba(255,150,50,${lerp(0, 0.15, Math.min(1, progress * 2))})`,
        }}
      />

      {/* ===== BLUE SHIFT (inside event horizon) ===== */}
      {bgBlue > 0 && (
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(40,80,${Math.round(180 + bgBlue)},${Math.min(0.15, bgBlue * 0.003)}) 0%, transparent 60%)`,
          }}
        />
      )}

      {/* ===== SPECTRUM TEAR (spaghettification) ===== */}
      {spectrumTear > 0 && (
        <div className="absolute inset-0 overflow-hidden" style={{ opacity: Math.min(1, spectrumTear * 2) }}>
          {["#ff3b5c", "#ff8a3b", "#ffd23b", "#3bff6e", "#3bc5ff", "#6e3bff", "#ff3bdb"].map((c, i) => (
            <div
              key={c}
              className="absolute left-1/2 top-1/2"
              style={{
                width: `${2 + spectrumTear * 4}px`,
                height: `${spectrumTear * 300}px`,
                backgroundColor: c,
                opacity: 0.4,
                filter: `blur(${3 + spectrumTear * 5}px)`,
                transform: `translate(-50%, -50%) rotate(${i * (360 / 7) + spectrumTear * 30}deg) translateY(${-spectrumTear * 120}px)`,
              }}
            />
          ))}
        </div>
      )}

      {/* ===== SINGULARITY FLASH ===== */}
      {singularity > 0 && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(255,255,255,${singularity * 0.6}) 0%, rgba(255,255,255,0) ${singularity * 40}%)`,
          }}
        >
          {singularity > 0.5 && (
            <div
              className="text-center"
              style={{ opacity: (singularity - 0.5) * 2 }}
            >
              <p className="spectrum-text prism-animate font-serif text-5xl md:text-7xl font-light">
                V01D
              </p>
            </div>
          )}
        </div>
      )}

      {/* ===== TEXT OVERLAY ===== */}
      <div className="fixed bottom-12 left-6 right-6 md:left-12 md:right-auto md:max-w-lg z-40">
        <p className="text-2xl md:text-3xl font-serif text-white/80 mb-2 transition-all duration-700">
          {stage.title}
        </p>
        <p className="text-sm text-white/30 whitespace-pre-line leading-relaxed font-light transition-all duration-700">
          {stage.body}
        </p>
      </div>

      {/* Scroll hint */}
      {progress < 0.05 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 text-[11px] uppercase tracking-[0.2em] text-white/15 animate-pulse">
          Scroll to descend
        </div>
      )}
    </div>
  );
}
