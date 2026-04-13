import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import Header from "./components/Header";
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
          <Header />

          <div>{children}</div>

          <footer className="border-t border-[rgba(193,127,36,0.3)] bg-[#0a0a0a] px-6 py-8 text-center text-sm text-white/50 sm:px-8">
            ORGANIZAMOS SEU CAOS OPERACIONAL.
          </footer>
        </div>
      </body>
    </html>
  );
}
