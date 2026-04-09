import Reveal from "./Reveal";

const pillars = [
  {
    no: "01",
    title: "Disciplined Strategy",
    body: "Position sizing and risk parameters defined before capital is committed. Process over impulse — always.",
  },
  {
    no: "02",
    title: "Market Intelligence",
    body: "Real-time fundamentals informed by direct relationships across the value chain we invest in.",
  },
  {
    no: "03",
    title: "Sustainable Growth",
    body: "Returns built to compound across cycles, with governance and transparency as foundations rather than afterthoughts.",
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="px-6 lg:px-12 py-32 lg:py-48 border-t border-line">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-gold mb-6">
            02 — Approach
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-bone max-w-3xl mb-20">
            Three pillars,
            <br />
            one philosophy.
          </h2>
        </Reveal>

        <div className="grid gap-px bg-line md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.no} delay={150 + i * 100}>
              <article className="bg-ink p-10 lg:p-12 h-full flex flex-col">
                <span className="font-serif text-gold text-3xl mb-8">
                  {p.no}
                </span>
                <h3 className="font-serif text-2xl text-bone mb-4">
                  {p.title}
                </h3>
                <p className="text-muted leading-relaxed text-sm">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
