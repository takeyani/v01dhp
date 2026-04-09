import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer id="contact" className="px-6 lg:px-12 py-24 relative">
      <div className="spectrum-line w-full absolute top-0 left-0" />
      <div className="mx-auto max-w-7xl">
        {/* Offices */}
        <div className="grid gap-12 md:grid-cols-3 mb-20">
          {[
            { city: "Tokyo", lines: ["1-1 Marunouchi, Chiyoda-ku", "Tokyo 100-0005, Japan"] },
            { city: "London", lines: ["1 Mayfair Place", "London W1J 8AJ, UK"] },
            { city: "Singapore", lines: ["1 Raffles Quay", "Singapore 048583"] },
          ].map((o, i) => (
            <Reveal key={o.city} delay={i * 100}>
              <div className="border-l border-white/10 pl-6">
                <p className="text-sm text-white/70 font-medium mb-3">{o.city}</p>
                {o.lines.map((l) => (
                  <p key={l} className="text-[13px] text-white/30 leading-relaxed">{l}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="spectrum-line w-full mb-10" />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-lg tracking-[0.3em] font-light text-white/80 mb-1">V01D</p>
            <p className="text-[11px] uppercase tracking-[0.15em] text-white/20">
              Decompose &amp; Reconstruct &mdash; &copy; {new Date().getFullYear()}
            </p>
          </div>
          <ul className="flex gap-8 text-[11px] uppercase tracking-[0.15em] text-white/20">
            <li><a href="#" className="hover:text-white/50 transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-white/50 transition-colors">Terms</a></li>
            <li><a href="#" className="hover:text-white/50 transition-colors">ESG</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
