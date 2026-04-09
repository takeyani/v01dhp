import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 lg:px-12 py-32 lg:py-48 border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-gold mb-6">
              01 — Philosophy
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-bone">
              Where conviction meets capital.
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-base md:text-lg leading-relaxed text-muted">
          <Reveal delay={200}>
            <p>
              We were founded on a simple belief: that long-term performance
              comes from clarity of thinking, patience, and a refusal to
              follow the consensus when the data tells a different story.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p>
              Our team brings together professionals from trading floors,
              research institutions, and operating companies — combining
              analytical rigor with the practical instincts only experience
              can teach.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <p>
              Every position we take is the result of conviction, not
              convenience. Every relationship is built for the long term.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
