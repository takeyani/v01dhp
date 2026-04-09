export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#050507]/70 border-b border-white/5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <a
          href="#top"
          className="text-lg tracking-[0.3em] font-light text-white/90 hover:text-white transition-colors"
        >
          V01D
        </a>
        <ul className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] text-white/40">
          <li>
            <a href="#concept" className="hover:text-white transition-colors">
              Concept
            </a>
          </li>
          <li>
            <a href="#principles" className="hover:text-white transition-colors">
              7 Principles
            </a>
          </li>
          <li>
            <a href="#domains" className="hover:text-white transition-colors">
              Domains
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
