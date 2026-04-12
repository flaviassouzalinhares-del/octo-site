"use client";

import { useState } from "react";

export default function ContactPage() {
  const [teamSize, setTeamSize] = useState("1 a 10");

  return (
    <main className="bg-[#050608] px-6 py-20 sm:px-8 lg:px-12 lg:py-24 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[2rem] border border-[#C17F24]/20 bg-[#111111] p-12 shadow-[0_0_120px_rgba(193,127,36,0.08)]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm uppercase tracking-[0.45em] text-[#C17F24]">Contato</p>
            <h1 className="mt-6 text-5xl font-headline uppercase tracking-[-0.05em] text-white sm:text-6xl">
              Vamos tirar o peso da operação.
            </h1>
            <p className="mt-6 text-base leading-8 text-white/70 sm:text-lg">
              Conte o maior problema operacional da sua empresa hoje e a Octo vai te mostrar o caminho para sair do improviso.
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.25em] text-[#C17F24]">
              ⚡ NOSSA EQUIPE ENTRA EM CONTATO EM ATÉ 1H
            </p>
          </div>

          <form action="#" className="mt-10 mx-auto max-w-[560px] space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-semibold uppercase tracking-[0.18em] text-white/70 opacity-0 animate-fade-up delay-100">
                Nome
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="mt-2 w-full rounded-[1.75rem] border border-[#C17F24]/20 bg-[#11131f] px-4 py-3 text-white outline-none transition focus:border-[#1E40FF] focus:ring-2 focus:ring-[#1E40FF]/20"
                />
              </label>

              <label className="block text-sm font-semibold uppercase tracking-[0.18em] text-white/70 opacity-0 animate-fade-up delay-200">
                Nome da empresa
                <input
                  type="text"
                  placeholder="Nome da sua empresa"
                  className="mt-2 w-full rounded-[1.75rem] border border-[#C17F24]/20 bg-[#11131f] px-4 py-3 text-white outline-none transition focus:border-[#1E40FF] focus:ring-2 focus:ring-[#1E40FF]/20"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-semibold uppercase tracking-[0.18em] text-white/70 opacity-0 animate-fade-up delay-300">
                Cargo
                <input
                  type="text"
                  placeholder="Seu cargo"
                  className="mt-2 w-full rounded-[1.75rem] border border-[#C17F24]/20 bg-[#11131f] px-4 py-3 text-white outline-none transition focus:border-[#1E40FF] focus:ring-2 focus:ring-[#1E40FF]/20"
                />
              </label>

              <label className="block text-sm font-semibold uppercase tracking-[0.18em] text-white/70 opacity-0 animate-fade-up delay-400">
                E-mail
                <input
                  type="email"
                  placeholder="email@empresa.com"
                  className="mt-2 w-full rounded-[1.75rem] border border-[#C17F24]/20 bg-[#11131f] px-4 py-3 text-white outline-none transition focus:border-[#1E40FF] focus:ring-2 focus:ring-[#1E40FF]/20"
                />
              </label>
            </div>

            <div className="space-y-3 opacity-0 animate-fade-up delay-450">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                Número de colaboradores
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {['1 a 10', '11 a 50', '50 a 100', '100 a 200', '200+'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTeamSize(option)}
                    className={`rounded-[1.75rem] border px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition ${
                      teamSize === option
                        ? 'border-[#C17F24] bg-[#1E40FF] text-white'
                        : 'border-[#C17F24]/20 bg-[#11131f] text-white/70 hover:border-[#C17F24] hover:text-white'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <label className="block text-sm font-semibold uppercase tracking-[0.18em] text-white/70 opacity-0 animate-fade-up delay-500">
              WhatsApp
              <input
                type="tel"
                placeholder="+55 11 9xxxx-xxxx"
                className="mt-2 w-full rounded-[1.75rem] border border-[#C17F24]/20 bg-[#11131f] px-4 py-3 text-white outline-none transition focus:border-[#1E40FF] focus:ring-2 focus:ring-[#1E40FF]/20"
              />
            </label>

            <label className="block text-sm font-semibold uppercase tracking-[0.18em] text-white/70 opacity-0 animate-fade-up delay-600">
              Qual é o maior problema operacional da sua empresa hoje?
              <textarea
                rows={5}
                placeholder="Descreva o ponto de dor mais urgente"
                className="mt-2 w-full rounded-[1.75rem] border border-[#C17F24]/20 bg-[#11131f] px-4 py-3 text-white outline-none transition focus:border-[#1E40FF] focus:ring-2 focus:ring-[#1E40FF]/20"
              />
            </label>

            <div className="opacity-0 animate-fade-up delay-800">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#1E40FF] px-6 py-4 text-base font-semibold uppercase text-white shadow-[0_0_40px_rgba(30,64,255,0.3)] transition duration-200 hover:bg-[#1d3dff] animate-pulse-slow"
              >
                Quero conversar
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
