import Link from "next/link";
import Reveal from "./Reveal";

const divisions = [
  {
    href: "/creative",
    label: "Creative",
    sub: "映像・ビジュアル・アート",
    desc: "アイデアの源泉から、表現と発想を世界へ投影する。",
    color: "var(--prism-1)",
  },
  {
    href: "/technology",
    label: "Technology",
    sub: "AI・XR・インフラストラクチャ",
    desc: "構想を現実に変換する技術基盤を構築する。",
    color: "var(--prism-5)",
  },
  {
    href: "/space",
    label: "Space",
    sub: "空間体験・インスタレーション",
    desc: "空間と時間を設計し、記憶に残る体験を創出する。",
    color: "var(--prism-3)",
  },
  {
    href: "/platform",
    label: "Platform",
    sub: "SaaS・エコシステム構築",
    desc: "価値の循環を支える基盤。つながりを構造化する。",
    color: "var(--prism-6)",
  },
];

export default function DivisionCards() {
  return (
    <section id="divisions" className="px-6 lg:px-12 py-32 lg:py-48 relative">
      <div className="spectrum-line w-full absolute top-0 left-0" />
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-white/30 mb-6">
            — Divisions
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white/90 max-w-4xl mb-20">
            一つの光が、
            <span className="spectrum-text prism-animate">4つの領域</span>
            へ
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {divisions.map((d, i) => (
            <Reveal key={d.href} delay={200 + i * 100}>
              <Link href={d.href} className="group block">
                <article className="relative p-10 lg:p-12 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden h-full min-h-[240px] flex flex-col justify-between rounded-sm">
                  {/* Top accent */}
                  <div
                    className="absolute top-0 left-0 w-full h-[2px] group-hover:h-[3px] transition-all duration-500"
                    style={{ backgroundColor: d.color }}
                  />
                  {/* Hover glow */}
                  <div
                    className="absolute top-0 left-0 right-0 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: `radial-gradient(ellipse at top, ${d.color}12, transparent 70%)` }}
                  />

                  <div className="relative">
                    <p
                      className="text-[11px] uppercase tracking-[0.2em] mb-3"
                      style={{ color: d.color }}
                    >
                      {d.label}
                    </p>
                    <h3 className="text-xl lg:text-2xl text-white/85 mb-2">
                      {d.sub}
                    </h3>
                  </div>

                  <div className="relative flex items-end justify-between">
                    <p className="text-sm text-white/40 leading-relaxed max-w-sm">
                      {d.desc}
                    </p>
                    <span className="text-white/20 group-hover:text-white/50 transition-colors text-sm ml-4 whitespace-nowrap">
                      Explore &rarr;
                    </span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
