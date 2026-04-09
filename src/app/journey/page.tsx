"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

const sections = [
  {
    no: "00",
    title: "Origin",
    sub: "起源",
    body: "すべては一筋の白い光から始まる。\n純粋なアイデア。まだ分解されていない可能性の塊。",
    color: "#ffffff",
    bg: "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)",
  },
  {
    no: "01",
    title: "Creative",
    sub: "創造",
    body: "光がプリズムに触れた瞬間、\n最初に現れるのは赤。\n情熱と衝動。表現の原点。",
    color: "var(--prism-1)",
    bg: "radial-gradient(ellipse at 30% 60%, rgba(255,59,92,0.12) 0%, transparent 55%)",
  },
  {
    no: "02",
    title: "Technology",
    sub: "技術",
    body: "構想に形を与える青い光。\nロジックとインフラ。\nアイデアを現実へ変換する力。",
    color: "var(--prism-5)",
    bg: "radial-gradient(ellipse at 60% 40%, rgba(59,197,255,0.12) 0%, transparent 55%)",
  },
  {
    no: "03",
    title: "Experience",
    sub: "体験",
    body: "空間と時間を染める黄金の光。\n五感に刻まれる記憶。\n訪れた人の世界を変える瞬間。",
    color: "var(--prism-3)",
    bg: "radial-gradient(ellipse at 40% 50%, rgba(255,210,59,0.12) 0%, transparent 55%)",
  },
  {
    no: "04",
    title: "Platform",
    sub: "基盤",
    body: "価値を循環させる紫の光。\nつながりを構造化し、\nエコシステムとして持続させる。",
    color: "var(--prism-6)",
    bg: "radial-gradient(ellipse at 50% 60%, rgba(110,59,255,0.12) 0%, transparent 55%)",
  },
  {
    no: "05",
    title: "Strategy",
    sub: "戦略",
    body: "ビジョンを市場に接続する緑の光。\n構造的思考で未来を描き、\n実行へ落とし込む。",
    color: "var(--prism-4)",
    bg: "radial-gradient(ellipse at 55% 45%, rgba(59,255,110,0.12) 0%, transparent 55%)",
  },
  {
    no: "06",
    title: "Ecosystem",
    sub: "生態系",
    body: "すべての光が再び一つに収束する。\n個の輝きがエコシステムへ。\nアイデアが世界を照らす。",
    color: "#ffffff",
    bg: "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 50%), radial-gradient(ellipse at 30% 50%, rgba(255,59,92,0.04) 0%, transparent 40%), radial-gradient(ellipse at 70% 50%, rgba(59,197,255,0.04) 0%, transparent 40%)",
  },
];

export default function JourneyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollX = useRef(0);
  const targetX = useRef(0);
  const rafId = useRef(0);
  const maxScroll = useRef(0);

  // Smooth lerp animation loop
  const animate = useCallback(() => {
    scrollX.current += (targetX.current - scrollX.current) * 0.08;

    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${-scrollX.current}px, 0, 0)`;
    }

    const p = maxScroll.current > 0 ? scrollX.current / maxScroll.current : 0;
    setProgress(Math.min(1, Math.max(0, p)));
    setActiveIndex(Math.min(sections.length - 1, Math.round(p * (sections.length - 1))));

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const updateMax = () => {
      if (trackRef.current && containerRef.current) {
        maxScroll.current =
          trackRef.current.scrollWidth - containerRef.current.clientWidth;
      }
    };
    updateMax();
    window.addEventListener("resize", updateMax);

    // Wheel → horizontal
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetX.current = Math.min(
        maxScroll.current,
        Math.max(0, targetX.current + e.deltaY * 1.5)
      );
    };

    // Touch → horizontal
    let touchStartX = 0;
    let touchStartTarget = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartTarget = targetX.current;
    };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const dx = touchStartX - e.touches[0].clientX;
      targetX.current = Math.min(
        maxScroll.current,
        Math.max(0, touchStartTarget + dx * 1.8)
      );
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener("wheel", onWheel, { passive: false });
      el.addEventListener("touchstart", onTouchStart, { passive: true });
      el.addEventListener("touchmove", onTouchMove, { passive: false });
    }

    rafId.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("resize", updateMax);
      if (el) {
        el.removeEventListener("wheel", onWheel);
        el.removeEventListener("touchstart", onTouchStart);
        el.removeEventListener("touchmove", onTouchMove);
      }
    };
  }, [animate]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden bg-[#050507] cursor-grab active:cursor-grabbing"
    >
      {/* Top progress bar — spectrum */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-white/5">
        <div
          className="h-full transition-none"
          style={{
            width: `${progress * 100}%`,
            background:
              "linear-gradient(90deg, var(--prism-1), var(--prism-2), var(--prism-3), var(--prism-4), var(--prism-5), var(--prism-6), var(--prism-7))",
          }}
        />
      </div>

      {/* Back to home */}
      <Link
        href="/"
        className="fixed top-5 left-6 z-50 text-[11px] uppercase tracking-[0.2em] text-white/30 hover:text-white/70 transition-colors"
      >
        &larr; V01D Group
      </Link>

      {/* Section indicator */}
      <div className="fixed top-5 right-6 z-50 text-right">
        <p
          className="text-[11px] uppercase tracking-[0.2em] transition-colors duration-500"
          style={{ color: sections[activeIndex].color }}
        >
          {sections[activeIndex].no} — {sections[activeIndex].title}
        </p>
      </div>

      {/* Bottom dot navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-3">
        {sections.map((s, i) => (
          <button
            key={i}
            onClick={() => {
              targetX.current =
                maxScroll.current * (i / (sections.length - 1));
            }}
            className="w-2 h-2 rounded-full transition-all duration-500"
            style={{
              backgroundColor: i === activeIndex ? s.color : "rgba(255,255,255,0.15)",
              boxShadow: i === activeIndex ? `0 0 12px ${s.color}60` : "none",
              transform: i === activeIndex ? "scale(1.5)" : "scale(1)",
            }}
            aria-label={`${s.title} セクションへ移動`}
          />
        ))}
      </div>

      {/* Horizontal track */}
      <div
        ref={trackRef}
        className="flex h-screen will-change-transform"
        style={{ width: `${sections.length * 100}vw` }}
      >
        {sections.map((s, i) => (
          <section
            key={i}
            className="relative flex items-center justify-center w-screen h-screen flex-shrink-0 px-8 md:px-16 lg:px-24"
          >
            {/* Background glow */}
            <div className="absolute inset-0" style={{ background: s.bg }} />

            {/* Connecting beam line */}
            {i < sections.length - 1 && (
              <div
                className="absolute right-0 top-1/2 w-[200px] h-[1px] -translate-y-1/2 opacity-20"
                style={{
                  background: `linear-gradient(90deg, ${s.color}40, transparent)`,
                }}
              />
            )}

            {/* Content */}
            <div className="relative max-w-2xl text-center md:text-left">
              <p
                className="font-serif text-8xl md:text-[10rem] font-light leading-none mb-6 opacity-15"
                style={{ color: s.color }}
              >
                {s.no}
              </p>
              <h2
                className="font-serif text-4xl md:text-6xl leading-[1.1] mb-3"
                style={{ color: s.color }}
              >
                {s.title}
              </h2>
              <p className="text-sm uppercase tracking-[0.3em] text-white/25 mb-8">
                {s.sub}
              </p>
              <p className="text-base md:text-lg text-white/45 leading-[1.9] whitespace-pre-line font-light">
                {s.body}
              </p>
            </div>
          </section>
        ))}
      </div>

      {/* Scroll hint — first visit */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 text-[11px] uppercase tracking-[0.2em] text-white/20 animate-pulse">
        Scroll or swipe to explore
      </div>
    </div>
  );
}
