"use client";

import Reveal from "./Reveal";

const principles = [
  { no: "01", title: "Creative", sub: "創造", desc: "アイデアの源泉。表現と発想の原点から、すべてが始まる。", color: "var(--prism-1)" },
  { no: "02", title: "Technology", sub: "技術", desc: "構想を現実に変える技術基盤。デジタルと物理の境界を越える。", color: "var(--prism-2)" },
  { no: "03", title: "Experience", sub: "体験", desc: "空間と時間を設計し、記憶に残る体験を生み出す。", color: "var(--prism-3)" },
  { no: "04", title: "Platform", sub: "基盤", desc: "価値の循環を支えるプラットフォーム。つながりを構造化する。", color: "var(--prism-4)" },
  { no: "05", title: "Strategy", sub: "戦略", desc: "ビジョンを市場へ接続する。構造的な思考で未来を描く。", color: "var(--prism-5)" },
  { no: "06", title: "Culture", sub: "文化", desc: "共鳴するカルチャーを育て、ブランドの根幹を形成する。", color: "var(--prism-6)" },
  { no: "07", title: "Ecosystem", sub: "生態系", desc: "すべてが接続される。個の輝きがエコシステムとして連鎖する。", color: "var(--prism-7)" },
];

export default function Pillars() {
  return (
    <section id="principles" className="py-32 lg:py-48 relative">
      <div className="spectrum-line w-full absolute top-0 left-0" />

      <div className="px-6 lg:px-12 mx-auto max-w-7xl mb-16">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-white/30 mb-6">
            02 — 7 Principles
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white/90 max-w-4xl">
            一つのアイデアが
            <span className="spectrum-text prism-animate">7つの光</span>
            へ分解される
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 text-white/30 text-sm tracking-[0.15em]">
            ← 横にスクロール →
          </p>
        </Reveal>
      </div>

      {/* Horizontal scroll cards */}
      <div className="horizontal-scroll pl-6 lg:pl-12 gap-6 pb-8">
        {principles.map((p, i) => (
          <Reveal key={p.no} delay={100 + i * 80}>
            <article
              className="w-[320px] md:w-[380px] h-[420px] flex flex-col justify-between p-8 lg:p-10 rounded-sm border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 relative overflow-hidden group"
            >
              {/* Color accent bar */}
              <div
                className="absolute top-0 left-0 w-full h-[2px] group-hover:h-[3px] transition-all duration-500"
                style={{ backgroundColor: p.color }}
              />
              {/* Glow on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(ellipse at top, ${p.color}15, transparent 70%)`,
                }}
              />

              <div className="relative">
                <span
                  className="font-serif text-5xl font-light"
                  style={{ color: p.color }}
                >
                  {p.no}
                </span>
                <h3 className="mt-6 text-2xl text-white/90 tracking-wide">
                  {p.title}
                </h3>
                <p className="text-sm text-white/30 mt-1 tracking-[0.15em]">
                  {p.sub}
                </p>
              </div>

              <p className="relative text-sm text-white/45 leading-relaxed">
                {p.desc}
              </p>
            </article>
          </Reveal>
        ))}
        {/* Spacer */}
        <div className="w-6 lg:w-12 flex-shrink-0" />
      </div>
    </section>
  );
}
