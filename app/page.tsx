"use client";

import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const problems = [
    "Processos na cabeça das pessoas",
    "Retrabalho constante",
    "Você no meio de tudo",
    "Equipe que trabalha mas não entrega",
    "Urgência como modo padrão",
  ];
  const [selected, setSelected] = useState<string[]>([]);

  const toggleProblem = (problem: string) => {
    setSelected((current) =>
      current.includes(problem) ? current.filter((item) => item !== problem) : [...current, problem],
    );
  };

  return (
<main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-1/4 flex justify-center">
        <div className="relative h-[520px] w-[520px] rounded-full bg-[#1E40FF]/10 blur-3xl">
          <span className="absolute inset-12 rounded-full border border-[#1E40FF]/30" />
        </div>
      </div>

      <section className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.45em] text-white/50">OPERACIONAL SEM APAGAR INCÊNDIO</p>
            <h1 className="mt-8 font-headline leading-[0.88] tracking-[-0.06em] text-5xl text-white sm:text-[5.25rem] md:text-[6.5rem] lg:text-[7.75rem]">
              OPERAÇÃO
            </h1>
            <h2 className="font-headline leading-[0.88] tracking-[-0.06em] text-5xl text-[#1E40FF] sm:text-[5.25rem] md:text-[6.5rem] lg:text-[7.75rem]">
              SEM CAOS.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Empresas que cresceram rápido e operam no improviso. A Octo entra, organiza e fica até funcionar.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contato"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#C17F24] px-8 py-4 text-base font-semibold uppercase text-black transition hover:bg-[#C17F24]/90 sm:w-auto"
              >
                Iniciar agora
              </Link>
              <Link
                href="#metodologia"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#1E40FF] bg-white/5 px-8 py-4 text-base font-semibold uppercase text-[#1E40FF] transition hover:border-[#1E40FF]/80 sm:w-auto"
              >
                Ver como funciona
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="dor" className="relative z-10 border-t border-[rgba(193,127,36,0.3)] px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.45em] text-[#C17F24]">DIAGNÓSTICO RÁPIDO</p>
            <h2 className="mt-6 text-[32px] font-headline uppercase tracking-[-0.05em] leading-[1.02] text-white sm:text-[32px] lg:text-[36px]">
              Clique nos problemas que você reconhece na sua operação.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {problems.map((point, index) => {
              const isSelected = selected.includes(point);
              const isLast = index === problems.length - 1;
              const messages: Record<string, string> = {
                "Processos na cabeça das pessoas":
                  "Quando uma pessoa-chave sai ou falta, a operação para. O conhecimento está na cabeça, não no processo.",
                "Retrabalho constante":
                  "Sem padrão definido, cada entrega é feita do zero. Tempo e dinheiro jogados fora.",
                "Você no meio de tudo":
                  "Você virou gargalo da própria empresa. Crescer assim é impossível.",
                "Equipe que trabalha mas não entrega":
                  "Esforço sem direção não gera resultado. Falta clareza de processo e responsabilidade.",
                "Urgência como modo padrão":
                  "Quando tudo é urgente, nada é prioritário. Sua operação está no modo sobrevivência.",
              };

              return (
                <button
                  key={point}
                  type="button"
                  onClick={() => toggleProblem(point)}
                  className={`relative flex min-h-[140px] w-full flex-col rounded-[1.5rem] border p-4 text-left transition-all duration-200 ${
                    isSelected
                      ? "border-[#1E40FF] bg-[#1E40FF] text-white shadow-lg"
                      : "border-[rgba(193,127,36,0.3)] bg-[#111111] text-white/90 hover:border-[#C17F24] hover:bg-[#161616]"
                  } ${isLast ? "sm:col-span-2 sm:justify-self-center sm:max-w-xl" : ""}`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#C17F24]/10 text-lg text-[#C17F24]">
                      ⚡
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white">
                        {point}
                      </p>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-white/10 p-3 text-sm leading-6 text-white/90">
                      {messages[point]}
                    </div>
                  )}

                  {isSelected && (
                    <span className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#1E40FF]/90 text-lg font-semibold text-white">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-6 text-center">
            {selected.length === 0 ? (
              <p className="text-base font-semibold text-white">Selecione os problemas que você reconhece.</p>
            ) : selected.length <= 2 ? (
              <>
                <p className="text-base font-semibold text-white">Atenção — sua operação tem pontos críticos.</p>
                <div className="mt-5">
                  <Link
                    href="/contato"
                    className="inline-flex rounded-full border border-[#1E40FF] bg-[#1E40FF] px-6 py-3 text-base font-semibold uppercase text-white transition hover:bg-[#1E40FF]/90"
                  >
                    Entrar em contato
                  </Link>
                </div>
              </>
            ) : selected.length <= 4 ? (
              <>
                <p className="text-base font-semibold uppercase text-[#C17F24]">
                  Você está vivendo Caos Operacional. A Octo vai te tirar desse lugar.
                </p>
                <div className="mt-5">
                  <Link
                    href="/contato"
                    className="inline-flex animate-pulse rounded-full border border-[#1E40FF] bg-[#1E40FF] px-6 py-3 text-base font-semibold uppercase text-white transition hover:bg-[#1E40FF]/90"
                  >
                    Falar com a Octo agora
                  </Link>
                </div>
              </>
            ) : (
              <>
                <p className="text-base font-semibold uppercase text-[#EF4444]">
                  ALERTA MÁXIMO — Sua operação está em colapso. Cada dia sem estrutura custa caro.
                </p>
                <div className="mt-5">
                  <Link
                    href="/contato"
                    className="inline-flex animate-pulse rounded-full border border-[#1E40FF] bg-[#1E40FF] px-6 py-3 text-base font-semibold uppercase text-white transition hover:bg-[#1E40FF]/90"
                  >
                    Falar com a Octo agora
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto max-w-6xl">
          <div id="servicos" className="scroll-mt-[120px] mb-12 max-w-3xl">
            <p className="text-[12px] uppercase tracking-[0.35em] text-[#C17F24]">
              Não somos consultoria. Somos implementadores.
            </p>
            <h2 className="mt-4 text-5xl font-headline uppercase tracking-[-0.05em] text-white sm:text-6xl">
              O que a Octo entrega antes do seu próximo mês.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              Consultorias entregam relatório. A Octo <span className="font-semibold">entrega resultado</span>. Entramos na operação, construímos os processos, implementamos as automações e <span className="font-semibold">saímos só quando está funcionando de verdade</span>.
            </p>
          </div>
          <div className="grid gap-6 xl:grid-cols-3">
            {[
              {
                number: "01",
                title: "Diagnóstico Operacional",
                description:
                  "Desvendamos o que está travando a execução e entregamos um plano claro de correção.",
              },
              {
                number: "02",
                title: "Construção de Processos",
                description:
                  "Identificamos os gargalos mais críticos da sua operação e resolvemos primeiro o que está custando mais caro.",
              },
              {
                number: "03",
                title: "Automações & IA",
                description:
                  "Automatizamos o que está travando, reduzindo trabalho manual e acelerando resultados.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="relative overflow-hidden rounded-[2rem] border border-[rgba(193,127,36,0.3)] bg-[#111111] pb-20 pt-8 px-8 transition hover:border-[#C17F24]/50"
              >
                <span className="pointer-events-none absolute bottom-4 right-4 text-[48px] font-headline text-[#C17F24] opacity-40 sm:text-[56px] xl:text-[64px]">
                  {item.number}
                </span>
                <div className="relative">
                  <p className="text-sm uppercase tracking-[0.35em] text-[#C17F24]">Serviço</p>
                  <h3 className="mt-6 text-3xl font-semibold text-[#1E40FF]">{item.title}</h3>
                  <p className="mt-5 text-base leading-7 text-white/70">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="metodologia" className="scroll-mt-[120px] relative z-10 border-t border-[rgba(193,127,36,0.3)] px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <span className="inline-flex rounded-full border border-[rgba(193,127,36,0.3)] bg-[#C17F24]/10 px-4 py-2 text-xs uppercase tracking-[0.45em] text-[#C17F24]">
              CRONOGRAMA DE IMPACTO
            </span>
            <h2 className="mt-6 text-5xl font-headline uppercase tracking-[-0.05em] text-white sm:text-6xl">
              Sua operação mais organizada em <span className="text-[#C17F24]">40</span> dias.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Em 40 dias, atacamos o que mais trava sua operação — e deixamos funcionando.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {[
              {
                range: "Dia 01-10",
                title: "Diagnóstico",
                description: "Imersão rápida para mapear os pontos que usam fogo como rotina.",
              },
              {
                range: "Dia 11-25",
                title: "Construção de Processos",
                description: "Configuramos a operação com estruturas claras e responsáveis.",
              },
              {
                range: "Dia 26-35",
                title: "Automações",
                description: "Automatizamos o que trava, reduzimos ruídos e aceleramos entrega.",
              },
              {
                range: "Dia 36-40",
                title: "Go-Live",
                description: "Testamos, ajustamos e deixamos a operação estável para rodar sozinha.",
              },
            ].map((item) => (
              <div
                key={item.range}
                className="rounded-[2rem] border border-[rgba(193,127,36,0.3)] bg-[#111111] p-8"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-[#C17F24]">{item.range}</p>
                <h3 className="mt-6 text-2xl font-semibold text-[#1E40FF]">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-24 sm:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[rgba(193,127,36,0.3)] bg-[#111111] p-8 sm:p-12">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.45em] text-white/50">Me conta o que está pesando.</p>
            <Link
              href="/contato"
              className="mt-10 inline-flex rounded-full bg-white px-10 py-5 text-base font-semibold uppercase text-[#1E40FF] transition hover:bg-white/90"
            >
              Quero conversar — <span className="text-[#C17F24]">é gratuito</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
