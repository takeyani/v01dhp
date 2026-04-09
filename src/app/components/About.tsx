import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="concept" className="px-6 lg:px-12 py-32 lg:py-48 relative">
      <div className="spectrum-line w-full absolute top-0 left-0" />
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/30 mb-6">
              01 — Concept
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              <span className="spectrum-text prism-animate">光の分解</span>
              <span className="text-white/90">と</span>
              <br />
              <span className="text-white/90">再構築</span>
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-base md:text-lg leading-[1.9] text-white/50 font-light">
          <Reveal delay={200}>
            <p>
              一つの光がプリズムを通して多様な色へと分かれるように、
              V01Dは、クリエイティブ・テクノロジー・空間体験・プラットフォームといった
              複数の領域を横断し、価値を拡張していきます。
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p>
              私たちが扱うのは単なる映像や表現ではなく、
              ビジネス、体験、そして未来の構造そのものです。
            </p>
          </Reveal>
          <Reveal delay={400}>
            <p>
              光が世界を照らすように、V01Dは、アイデアを社会へと投影し、
              新たな価値の連鎖を生み出します。
            </p>
          </Reveal>
        </div>
      </div>

      {/* Prism classic image */}
      <Reveal delay={500}>
        <div className="mx-auto max-w-7xl mt-24 relative">
          <img
            src="/images/prism-classic.webp"
            alt="プリズムによる光の分解"
            className="w-full max-h-[500px] object-cover rounded-sm opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-[#050507]/40" />
        </div>
      </Reveal>
    </section>
  );
}
