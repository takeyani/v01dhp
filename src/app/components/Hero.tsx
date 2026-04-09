import Reveal from "./Reveal";
import HeroBackdrop from "./HeroBackdrop";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center px-6 lg:px-12 pt-32 overflow-hidden"
    >
      <HeroBackdrop />
      <div className="relative mx-auto w-full max-w-7xl">
        <Reveal>
          <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-white/40">
            — Decompose &amp; Reconstruct
          </p>
        </Reveal>

        <Reveal delay={150}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.08] max-w-5xl">
            <span className="spectrum-text prism-animate font-semibold">
              光の7原則
            </span>
            <span className="text-white/90">を</span>
            <br />
            <span className="text-white/90">この世界を照らす</span>
          </h1>
        </Reveal>

        <Reveal delay={400}>
          <p className="mt-10 max-w-xl text-base md:text-lg text-white/50 leading-relaxed font-light">
            一つの光がプリズムを通して多様な色へと分かれるように、
            V01Dは複数の領域を横断し、価値を拡張していきます。
          </p>
        </Reveal>

        <Reveal delay={600}>
          <div className="mt-20 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-white/30">
            <span className="scroll-cue inline-block h-8 w-px bg-white/30" />
            <span>Scroll to explore</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
