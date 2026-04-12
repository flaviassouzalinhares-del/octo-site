import type { Metadata } from "next";
import Link from "next/link";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-headline",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Octo | Operational Systems",
  description: "Octo organiza seu caos operacional com processos, automações e performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${bebasNeue.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#0a0a0a] text-white font-sans">
        <div className="min-h-full">
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
                <Link href="/#servicos" className="transition hover:text-white">
                  O QUE FAZEMOS
                </Link>
                <Link href="/#metodologia" className="transition hover:text-white">
                  METODOLOGIA
                </Link>
                <Link href="/contato" className="transition hover:text-white">
                  CONTATO
                </Link>
              </nav>

              <Link
                href="/contato"
                className="rounded-full bg-[#C17F24] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#C17F24]/90"
              >
                Começar
              </Link>
            </div>
          </header>

          <div>{children}</div>

          <footer className="border-t border-[rgba(193,127,36,0.3)] bg-[#0a0a0a] px-6 py-8 text-center text-sm text-white/50 sm:px-8">
            ORGANIZAMOS SEU CAOS OPERACIONAL.
          </footer>
        </div>
      </body>
    </html>
  );
}
