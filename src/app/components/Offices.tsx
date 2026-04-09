import Reveal from "./Reveal";

const offices = [
  {
    city: "Tokyo",
    address: ["1-1-1 Marunouchi", "Chiyoda-ku, Tokyo 100-0005", "Japan"],
  },
  {
    city: "London",
    address: ["1 Mayfair Place", "London W1J 8AJ", "United Kingdom"],
  },
  {
    city: "Singapore",
    address: ["1 Raffles Quay", "Singapore 048583", "Singapore"],
  },
];

export default function Offices() {
  return (
    <footer
      id="offices"
      className="px-6 lg:px-12 py-32 lg:py-40 border-t border-line"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-gold mb-6">
            03 — Presence
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-bone max-w-3xl mb-20">
            Global by design,
            <br />
            local by intention.
          </h2>
        </Reveal>

        <div id="contact" className="grid gap-12 md:grid-cols-3 mb-24">
          {offices.map((office, i) => (
            <Reveal key={office.city} delay={200 + i * 100}>
              <div className="border-l border-gold/40 pl-6">
                <h3 className="font-serif text-2xl text-bone mb-4">
                  {office.city}
                </h3>
                {office.address.map((line) => (
                  <p key={line} className="text-sm text-muted leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pt-12 border-t border-line">
            <div>
              <p className="font-serif text-lg text-bone mb-2">V01DHP CAPITAL</p>
              <p className="text-xs uppercase tracking-widest text-muted">
                © {new Date().getFullYear()} All rights reserved
              </p>
            </div>
            <ul className="flex gap-8 text-xs uppercase tracking-widest text-muted">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  ESG
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
