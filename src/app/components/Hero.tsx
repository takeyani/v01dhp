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
          <p className="mb-8 text-xs uppercase tracking-widest text-gold">
            — V01DHP Capital
          </p>
        </Reveal>

        <Reveal delay={150}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-bone max-w-5xl">
            Built on insight.
            <br />
            <span className="text-gold italic">Driven by discipline.</span>
          </h1>
        </Reveal>

        <Reveal delay={400}>
          <p className="mt-12 max-w-xl text-base md:text-lg text-muted leading-relaxed">
            An independent investment house combining decades of market
            intelligence with disciplined capital allocation across global
            opportunities.
          </p>
        </Reveal>

        <Reveal delay={600}>
          <div className="mt-20 flex items-center gap-3 text-xs uppercase tracking-widest text-muted">
            <span className="scroll-cue inline-block h-8 w-px bg-gold/60" />
            <span>Scroll to explore</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
