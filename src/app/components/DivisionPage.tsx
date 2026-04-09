import Reveal from "./Reveal";
import Footer from "./Footer";

interface DivisionPageProps {
  color: string;
  label: string;
  tagline: string;
  heroImage: string;
  intro: string;
  sections: { title: string; body: string }[];
}

export default function DivisionPage({
  color,
  label,
  tagline,
  heroImage,
  intro,
  sections,
}: DivisionPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] flex-col justify-end px-6 lg:px-12 pb-20 pt-32 overflow-hidden">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/40 to-[#050507]/60" />

        <div className="relative mx-auto w-full max-w-7xl">
          <Reveal>
            <p
              className="text-[11px] uppercase tracking-[0.3em] mb-6"
              style={{ color }}
            >
              — V01D {label}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.08] max-w-4xl text-white/90">
              {tagline}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 lg:px-12 py-24 lg:py-32 relative">
        <div
          className="absolute top-0 left-0 w-full h-[2px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          }}
        />
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="max-w-3xl text-lg md:text-xl text-white/50 leading-[1.9] font-light">
              {intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content sections */}
      {sections.map((s, i) => (
        <section key={i} className="px-6 lg:px-12 py-20 lg:py-28 relative">
          <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p
                  className="text-[11px] uppercase tracking-[0.3em] mb-4"
                  style={{ color }}
                >
                  0{i + 1}
                </p>
                <h2 className="font-serif text-3xl md:text-4xl leading-[1.15] text-white/85">
                  {s.title}
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <Reveal delay={150}>
                <p className="text-base text-white/45 leading-[1.9] font-light">
                  {s.body}
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </>
  );
}
