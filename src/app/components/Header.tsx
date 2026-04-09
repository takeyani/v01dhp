export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-ink/60 border-b border-line">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <a
          href="#top"
          className="font-serif text-xl tracking-widest text-bone hover:text-gold transition-colors"
        >
          V01DHP
        </a>
        <ul className="hidden md:flex items-center gap-10 text-xs uppercase tracking-widest text-muted">
          <li>
            <a href="#about" className="hover:text-bone transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#pillars" className="hover:text-bone transition-colors">
              Approach
            </a>
          </li>
          <li>
            <a href="#offices" className="hover:text-bone transition-colors">
              Offices
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-bone transition-colors">
              Contact
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-block text-xs uppercase tracking-widest text-gold border border-gold/30 px-5 py-2 hover:bg-gold hover:text-ink transition-colors"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
