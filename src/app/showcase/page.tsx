"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

/* ──────────────────────────────────────
   Chapter-based scroll with side dots,
   dark/light theme switching per chapter,
   text split-reveal animations.
   ────────────────────────────────────── */

// ─── Data ───

const divisions = [
  { label: "Creative", sub: "映像・ビジュアル・アート", href: "/creative", color: "var(--prism-1)", desc: "アイデアの源泉から、表現と発想を世界へ投影する。映像制作、ビジュアルデザイン、アートディレクションを統合し、ブランドの本質を可視化。" },
  { label: "Technology", sub: "AI・XR・インフラストラクチャ", href: "/technology", color: "var(--prism-5)", desc: "構想を現実に変える技術基盤を構築。AIパイプライン、XR体験開発、クラウドネイティブなインフラを設計・実装。" },
  { label: "Space", sub: "空間体験・インスタレーション", href: "/space", color: "var(--prism-3)", desc: "物理空間とデジタル空間を融合した体験設計。インスタレーション、イベント、空間デザインで記憶に残る場を創出。" },
  { label: "Platform", sub: "SaaS・エコシステム構築", href: "/platform", color: "var(--prism-6)", desc: "SaaSプロダクト開発からエコシステム設計まで。ネットワーク効果が働くプラットフォーム戦略を立案・実装。" },
];

const globalCities = [
  { name: "Tokyo", x: 82, y: 38 },
  { name: "London", x: 47, y: 28 },
  { name: "Singapore", x: 75, y: 55 },
  { name: "Dubai", x: 60, y: 40 },
  { name: "New York", x: 27, y: 33 },
  { name: "Shanghai", x: 79, y: 38 },
  { name: "Mumbai", x: 66, y: 45 },
  { name: "Sydney", x: 87, y: 72 },
];

const chapters = [
  { id: "hero", label: "", theme: "dark" },
  { id: "who", label: "Who We Are", theme: "light" },
  { id: "what", label: "What We Do", theme: "light" },
  { id: "global", label: "Global", theme: "dark" },
  { id: "vision", label: "Vision", theme: "dark" },
  { id: "values", label: "Values", theme: "dark" },
];

// ─── Reveal hook ───

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("is-visible"); obs.unobserve(el); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => el.classList.add("is-visible"), delay); obs.unobserve(el); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

// ─── Spinner SVG (inspired by mont-fort but original design) ───

function PrismSpinner() {
  return (
    <svg viewBox="0 0 200 200" className="w-32 h-32 md:w-48 md:h-48 animate-[spin_20s_linear_infinite]">
      <defs>
        <linearGradient id="sp1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--prism-1)" />
          <stop offset="50%" stopColor="var(--prism-3)" />
          <stop offset="100%" stopColor="var(--prism-5)" />
        </linearGradient>
        <linearGradient id="sp2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--prism-5)" />
          <stop offset="50%" stopColor="var(--prism-6)" />
          <stop offset="100%" stopColor="var(--prism-1)" />
        </linearGradient>
      </defs>
      <path d="M 4 100 A 96 96 0 0 1 196 100" stroke="url(#sp1)" strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M 196 100 A 96 96 0 0 1 4 100" stroke="url(#sp2)" strokeWidth="2" fill="none" opacity="0.3" />
      <circle cx="100" cy="4" r="3" fill="var(--prism-1)" />
      <circle cx="100" cy="196" r="3" fill="var(--prism-5)" />
    </svg>
  );
}

// ─── Chapter Dot Navigation ───

function ChapterNav({ active }: { active: number }) {
  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      {chapters.map((ch, i) => (
        <a
          key={ch.id}
          href={`#${ch.id}`}
          className="group flex items-center gap-3"
          aria-label={ch.label || "Top"}
        >
          <span className={`text-[10px] uppercase tracking-[0.15em] transition-all duration-500 ${i === active ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"} ${chapters[i].theme === "dark" ? "text-white/50" : "text-black/40"}`}>
            {ch.label}
          </span>
          <span
            className={`block rounded-full transition-all duration-500 ${i === active ? "w-3 h-3" : "w-1.5 h-1.5"}`}
            style={{
              backgroundColor: i === active
                ? (chapters[i].theme === "dark" ? "white" : "#111")
                : (chapters[i].theme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"),
            }}
          />
        </a>
      ))}
    </nav>
  );
}

// ─── Main Page ───

export default function ShowcasePage() {
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const sectionEls = chapters.map((ch) => document.getElementById(ch.id));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = sectionEls.findIndex((el) => el === e.target);
            if (idx !== -1) setActiveChapter(idx);
          }
        });
      },
      { threshold: 0.4 }
    );
    sectionEls.forEach((el) => { if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-transparent">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-12">
          <Link href="/" className="text-lg tracking-[0.3em] font-light text-white/90 mix-blend-difference">
            V01D
          </Link>
          <div className="hidden md:flex items-center gap-1 text-[11px] uppercase tracking-[0.15em] mix-blend-difference">
            {["V01D Group", "Creative", "Technology", "Space", "Platform"].map((l, i) => (
              <Link
                key={l}
                href={i === 0 ? "/" : `/${l.toLowerCase()}`}
                className="px-4 py-2 text-white/40 hover:text-white/80 transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <ChapterNav active={activeChapter} />

      <main>
        {/* ═══════ HERO ═══════ */}
        <section
          id="hero"
          className="relative flex flex-col items-center justify-center min-h-screen bg-[#050507] px-6 overflow-hidden"
        >
          {/* Prism background image */}
          <img
            src="/images/prism-hero.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/50 via-transparent to-[#050507]" />

          <div className="relative flex flex-col items-center text-center">
            <Reveal>
              <PrismSpinner />
            </Reveal>
            <Reveal delay={300}>
              <h1 className="mt-8 font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight">
                <span className="text-white/90">V01D</span>
              </h1>
            </Reveal>
            <Reveal delay={500}>
              <p className="mt-4 text-[11px] uppercase tracking-[0.4em] text-white/30">
                Decompose &amp; Reconstruct
              </p>
            </Reveal>
            <Reveal delay={700}>
              <div className="mt-16 scroll-cue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/20">
                  <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════ WHO WE ARE ═══════ */}
        <section
          id="who"
          className="relative min-h-screen flex items-center bg-[#f5f3ef] px-6 lg:px-12 py-32"
        >
          <div className="mx-auto max-w-[1400px] w-full grid gap-16 lg:grid-cols-24">
            {/* Large heading — right side on desktop */}
            <div className="lg:col-span-14 lg:col-start-11">
              <Reveal>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] text-[#0a0a12] uppercase">
                  V01Dは、「光の分解と再構築」を通じて、
                  クリエイティブ・テクノロジー・空間体験を横断する企業グループです。
                </h2>
              </Reveal>
            </div>

            {/* Body text — left side on desktop */}
            <div className="lg:col-span-8 lg:col-start-2 lg:row-start-1">
              <Reveal delay={200}>
                <p className="text-base leading-[2] text-[#0a0a12]/60 font-light">
                  私たちが扱うのは単なる映像や表現ではなく、ビジネス、体験、そして未来の構造そのものです。
                  一つの光がプリズムを通して多様な色へと分かれるように、
                  V01Dは複数の領域を横断し、価値を拡張していきます。
                </p>
              </Reveal>
              <Reveal delay={400}>
                <Link href="/journey" className="inline-flex items-center gap-3 mt-8 group text-[11px] uppercase tracking-[0.2em] text-[#0a0a12]/40 hover:text-[#0a0a12]/80 transition-colors">
                  <span className="w-8 h-[1px] bg-current transition-all group-hover:w-12" />
                  Explore our journey
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══════ WHAT WE DO ═══════ */}
        <section
          id="what"
          className="relative bg-[#f5f3ef] px-6 lg:px-12 py-32"
        >
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] text-[#0a0a12] uppercase max-w-4xl mb-8">
                複数の事業領域を通じて、
                光のように価値を拡張します。
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-base text-[#0a0a12]/50 font-light max-w-2xl mb-20 leading-[2]">
                V01Dの各事業部は互いに連携し、統合されたサービスを提供します。
                この相乗効果が運営効率を高め、ステークホルダーに卓越した価値を届けます。
              </p>
            </Reveal>

            <div className="space-y-0 border-t border-[#0a0a12]/10">
              {divisions.map((d, i) => (
                <Reveal key={d.label} delay={150 + i * 80}>
                  <Link href={d.href} className="group block">
                    <div className="grid lg:grid-cols-24 gap-6 py-12 border-b border-[#0a0a12]/10 hover:bg-[#0a0a12]/[0.02] transition-colors px-4 -mx-4">
                      {/* Number */}
                      <div className="lg:col-span-2">
                        <span className="text-[11px] tracking-[0.15em] text-[#0a0a12]/25">0{i + 1}</span>
                      </div>
                      {/* Title */}
                      <div className="lg:col-span-6">
                        <h3 className="font-serif text-2xl md:text-3xl text-[#0a0a12]/85 group-hover:text-[#0a0a12] transition-colors">
                          {d.label}
                        </h3>
                        <p className="text-sm text-[#0a0a12]/35 mt-1">{d.sub}</p>
                      </div>
                      {/* Description */}
                      <div className="lg:col-span-12 lg:col-start-10">
                        <p className="text-sm text-[#0a0a12]/50 leading-[1.9] font-light">{d.desc}</p>
                      </div>
                      {/* Arrow */}
                      <div className="lg:col-span-2 lg:col-start-23 flex items-center justify-end">
                        <span className="text-[#0a0a12]/15 group-hover:text-[#0a0a12]/50 transition-colors text-lg">&rarr;</span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ GLOBAL CONNECTIVITY ═══════ */}
        <section
          id="global"
          className="relative min-h-screen flex items-center bg-[#0a0a12] px-6 lg:px-12 py-32 overflow-hidden"
        >
          <div className="mx-auto max-w-[1400px] w-full">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.15] text-white/90 uppercase max-w-4xl mb-20">
                東京を拠点に、世界の主要都市と接続。
                グローバルに価値を届けます。
              </h2>
            </Reveal>

            {/* SVG world map (simplified dots) */}
            <Reveal delay={200}>
              <div className="relative w-full aspect-[2/1] max-h-[500px]">
                {/* Grid backdrop */}
                <svg viewBox="0 0 100 60" className="absolute inset-0 w-full h-full" aria-hidden="true">
                  {/* Horizontal grid lines */}
                  {Array.from({ length: 7 }).map((_, i) => (
                    <line key={`h${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="rgba(255,255,255,0.04)" strokeWidth="0.1" />
                  ))}
                  {/* Vertical grid lines */}
                  {Array.from({ length: 11 }).map((_, i) => (
                    <line key={`v${i}`} x1={i * 10} y1="0" x2={i * 10} y2="60" stroke="rgba(255,255,255,0.04)" strokeWidth="0.1" />
                  ))}
                </svg>

                {/* City markers */}
                {globalCities.map((city, i) => (
                  <div
                    key={city.name}
                    className="absolute group"
                    style={{
                      left: `${city.x}%`,
                      top: `${city.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Pulse ring */}
                    <span
                      className="absolute inset-0 -m-3 rounded-full glow-pulse"
                      style={{
                        border: "1px solid rgba(255,255,255,0.1)",
                        animationDelay: `${i * 0.5}s`,
                      }}
                    />
                    {/* Dot */}
                    <span className="block w-2 h-2 rounded-full bg-white/60 group-hover:bg-white transition-colors" />
                    {/* Label */}
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.15em] text-white/40 group-hover:text-white/80 transition-colors whitespace-nowrap">
                      {city.name}
                    </span>

                    {/* Connection lines to Tokyo */}
                    {city.name !== "Tokyo" && (
                      <svg className="absolute pointer-events-none" style={{ left: 0, top: 0, width: "1px", height: "1px", overflow: "visible" }}>
                        <line
                          x1="0" y1="0"
                          x2={`${(82 - city.x) * 10}px`}
                          y2={`${(38 - city.y) * 10}px`}
                          stroke="rgba(255,255,255,0.05)"
                          strokeWidth="0.5"
                          strokeDasharray="4 4"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════ VISION / SUSTAINABILITY ═══════ */}
        <section
          id="vision"
          className="relative bg-[#0a0a12] px-6 lg:px-12 py-32"
        >
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <p className="text-lg md:text-xl text-white/70 leading-[2] font-light max-w-3xl mb-24">
                私たちは、持続可能な価値の創造に取り組んでいます。
                テクノロジーの力で社会的課題を解決し、
                次世代のために責任ある事業運営を追求します。
              </p>
            </Reveal>

            {/* Numbered sections (like mont-fort sustainability) */}
            {[
              {
                no: "1",
                title: "倫理とコンプライアンス",
                body: "V01Dは、グローバルな事業展開において、すべての適用法令を遵守し、透明性のある運営を行います。独自の品質管理プラットフォームにより、国際基準を満たすサービスを提供します。",
              },
              {
                no: "2",
                title: "環境への配慮",
                body: "デジタル技術を活用した環境負荷の低減、再生可能エネルギーの活用、カーボンニュートラルなオフィス運営を推進。テクノロジーの力で持続可能な社会を支えます。",
              },
              {
                no: "3",
                title: "多様性と包括性",
                body: "15カ国以上の多様な人材が集うV01Dでは、すべての人が活躍できる環境を整備。マネジメントチームの30%以上が女性メンバーで構成されています。",
              },
              {
                no: "4",
                title: "社会貢献",
                body: "教育支援、テクノロジー人材の育成、地域コミュニティへの貢献を通じて、事業活動を超えた社会的インパクトの創出に取り組んでいます。",
              },
            ].map((item, i) => (
              <div key={item.no} className="grid lg:grid-cols-24 gap-8 py-16 border-t border-white/10">
                <div className="lg:col-span-2 lg:col-start-2">
                  <Reveal delay={i * 50}>
                    <span className="text-[11px] text-white/25 tracking-[0.15em]">{item.no}</span>
                  </Reveal>
                </div>
                <div className="lg:col-span-8 lg:col-start-3">
                  <Reveal delay={i * 50 + 50}>
                    <h3 className="font-serif text-2xl md:text-3xl text-white/85 uppercase">{item.title}</h3>
                  </Reveal>
                </div>
                <div className="lg:col-span-10 lg:col-start-12">
                  <Reveal delay={i * 50 + 100}>
                    <p className="text-sm text-white/45 leading-[2] font-light">{item.body}</p>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════ VALUES / STATS ═══════ */}
        <section
          id="values"
          className="relative bg-[#0a0a12] px-6 lg:px-12 py-32"
        >
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-5xl text-white/85 uppercase mb-20">
                数字が語る、V01Dの現在地
              </h2>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
              {[
                { value: "8+", label: "Global Cities" },
                { value: "15+", label: "Nationalities" },
                { value: "4", label: "Business Divisions" },
                { value: "30%+", label: "Women in Leadership" },
              ].map((stat, i) => (
                <Reveal key={stat.label} delay={i * 100}>
                  <div className="bg-[#0a0a12] p-10 lg:p-14 text-center">
                    <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-white/90 spectrum-text prism-animate">
                      {stat.value}
                    </p>
                    <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-white/30">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Spectrum line before footer */}
          <div className="spectrum-line w-full mt-32" />
        </section>
      </main>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="bg-[#0a0a12] px-6 lg:px-12 py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 md:grid-cols-3 mb-20">
            {[
              { city: "Tokyo", lines: ["1-1 Marunouchi, Chiyoda-ku", "Tokyo 100-0005, Japan"] },
              { city: "London", lines: ["1 Mayfair Place", "London W1J 8AJ, UK"] },
              { city: "Singapore", lines: ["1 Raffles Quay", "Singapore 048583"] },
            ].map((o) => (
              <Reveal key={o.city}>
                <div className="border-l border-white/10 pl-6">
                  <p className="text-sm text-white/60 font-medium mb-2">{o.city}</p>
                  {o.lines.map((l) => (
                    <p key={l} className="text-[13px] text-white/25 leading-relaxed">{l}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pt-10 border-t border-white/5">
            <div>
              <p className="text-lg tracking-[0.3em] font-light text-white/70">V01D</p>
              <p className="text-[11px] text-white/15 tracking-[0.15em] mt-1">
                &copy; {new Date().getFullYear()} All rights reserved
              </p>
            </div>
            <ul className="flex gap-8 text-[11px] uppercase tracking-[0.15em] text-white/15">
              <li><a href="#" className="hover:text-white/40 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white/40 transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white/40 transition-colors">ESG</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
