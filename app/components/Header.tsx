"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: "O QUE FAZEMOS", href: "/#servicos" },
    { label: "METODOLOGIA", href: "/#metodologia" },
    { label: "CONTATO", href: "/contato" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(193,127,36,0.15)] bg-[#0a0a0a]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8">
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

          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
          >
            <span className="sr-only">{menuOpen ? "Fechar menu" : "Abrir menu"}</span>
            <div className="flex h-5 w-5 flex-col justify-between">
              <span
                className={`block h-[2px] w-full rounded-full bg-white transition ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span
                className={`block h-[2px] w-full rounded-full bg-white transition ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-[2px] w-full rounded-full bg-white transition ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-[rgba(193,127,36,0.15)] bg-[#0a0a0a]/98 px-6 py-5 backdrop-blur-xl">
          <div className="space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl border border-[rgba(193,127,36,0.15)] bg-[#111111] px-5 py-4 text-sm uppercase tracking-[0.2em] text-white transition hover:border-[#C17F24] hover:bg-[#1E40FF]/10"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contato"
              onClick={() => setMenuOpen(false)}
              className="block rounded-full bg-[#C17F24] px-5 py-4 text-center text-sm font-semibold uppercase text-black transition hover:bg-[#C17F24]/90"
            >
              Começar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
