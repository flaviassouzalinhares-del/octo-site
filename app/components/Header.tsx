"use client";

import Link from "next/link";

export default function Header() {
  const navLinks = [
    { label: "O QUE FAZEMOS", href: "/#servicos" },
    { label: "METODOLOGIA", href: "/#metodologia" },
    { label: "CONTATO", href: "/contato" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(193,127,36,0.15)] bg-[#0a0a0a]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#C17F24] shadow-sm">
            <span className="absolute inset-0 rounded-full border border-[#1E40FF]" />
            <span className="absolute inset-2 rounded-full bg-[#1E40FF]/20" />
            <span className="relative h-3.5 w-3.5 rounded-full bg-[#1E40FF]" />
          </div>
          <span className="text-lg font-semibold tracking-[0.2em] uppercase">Octo</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.2em] text-white/70 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contato"
            className="hidden rounded-full bg-[#C17F24] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#C17F24]/90 md:inline-flex"
          >
            Começar
          </Link>
          <Link
            href="/contato"
            className="inline-flex rounded-full bg-[#1E40FF] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1F47FF]/90 md:hidden"
          >
            Começar
          </Link>
        </div>
      </div>
    </header>
  );
}
