import Reveal from "./Reveal";

export default function Offices() {
  return (
    <footer id="domains" className="px-6 lg:px-12 py-32 lg:py-40 relative">
      <div className="spectrum-line w-full absolute top-0 left-0" />
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-white/30 mb-6">
            03 — Domains
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white/90 max-w-4xl mb-6">
            領域を横断し、
            <br />
            <span className="spectrum-text prism-animate">価値を拡張する</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="max-w-2xl text-base text-white/40 leading-relaxed font-light mb-20">
            このサイトでは、縦スクロールによる深度と、横スクロールによる拡張性を組み合わせ、
            一つのアイデアがどのように分解され、再構築され、最終的にエコシステムへと接続されていくのかを
            体験として可視化しています。
          </p>
        </Reveal>

        {/* Prism beam image */}
        <Reveal delay={300}>
          <div className="relative mb-24">
            <img
              src="/images/prism-beam.webp"
              alt="光のスペクトラム"
              className="w-full max-h-[450px] object-cover rounded-sm opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/60 via-transparent to-[#050507]/60" />
          </div>
        </Reveal>

        {/* Domain cards */}
        <div className="grid gap-px bg-white/5 md:grid-cols-4 mb-24">
          {[
            { label: "Creative", desc: "映像・ビジュアル・アート" },
            { label: "Technology", desc: "AI・XR・インフラ" },
            { label: "Space", desc: "空間体験・インスタレーション" },
            { label: "Platform", desc: "SaaS・エコシステム構築" },
          ].map((d, i) => (
            <Reveal key={d.label} delay={400 + i * 100}>
              <div className="bg-[#050507] p-8 lg:p-10 h-full">
                <p
                  className="text-xs uppercase tracking-[0.2em] mb-4"
                  style={{
                    color: [
                      "var(--prism-1)",
                      "var(--prism-5)",
                      "var(--prism-3)",
                      "var(--prism-6)",
                    ][i],
                  }}
                >
                  {d.label}
                </p>
                <p className="text-sm text-white/45 leading-relaxed">
                  {d.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Contact / Footer */}
        <div id="contact" className="spectrum-line w-full mb-12" />
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-lg tracking-[0.3em] font-light text-white/80 mb-2">
                V01D
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/25">
                Decompose &amp; Reconstruct &mdash; &copy;{" "}
                {new Date().getFullYear()}
              </p>
            </div>
            <ul className="flex gap-8 text-[11px] uppercase tracking-[0.2em] text-white/25">
              <li>
                <a href="#" className="hover:text-white/60 transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/60 transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/60 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
