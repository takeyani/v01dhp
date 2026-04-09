"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const divisions = [
  { href: "/", label: "V01D Group" },
  { href: "/creative", label: "Creative" },
  { href: "/technology", label: "Technology" },
  { href: "/space", label: "Space" },
  { href: "/platform", label: "Platform" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#050507]/70 border-b border-white/5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Link
          href="/"
          className="text-lg tracking-[0.3em] font-light text-white/90 hover:text-white transition-colors"
        >
          V01D
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {divisions.map((d) => {
            const isActive = pathname === d.href;
            return (
              <li key={d.href}>
                <Link
                  href={d.href}
                  className={`px-4 py-2 text-[11px] uppercase tracking-[0.15em] transition-colors rounded-sm ${
                    isActive
                      ? "text-white bg-white/10"
                      : "text-white/35 hover:text-white/70"
                  }`}
                >
                  {d.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="#contact"
          className="hidden md:inline-block text-[11px] uppercase tracking-[0.15em] text-white/40 hover:text-white transition-colors"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
