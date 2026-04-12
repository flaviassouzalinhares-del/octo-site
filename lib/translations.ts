export type Locale = "pt" | "es" | "en";

export const locales: Locale[] = ["pt", "es", "en"];
export const defaultLocale: Locale = "pt";

type SectionCard = {
  number: string;
  title: string;
  description: string;
};

type MethodologyStep = {
  range: string;
  title: string;
  description: string;
};

type Translation = {
  nav: {
    services: string;
    methodology: string;
    contact: string;
    getStarted: string;
  };
  home: {
    hero: {
      pretitle: string;
      headlineLine1: string;
      headlineLine2: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
    };
    pain: {
      title: string;
      headline: string;
      footer: string;
      points: string[];
    };
    differential: {
      title: string;
      subtitle: string;
      cards: SectionCard[];
    };
    methodology: {
      badge: string;
      title: string;
      highlighted: string;
      steps: MethodologyStep[];
    };
    cta: {
      title: string;
      button: string;
    };
  };
  services: {
    introTitle: string;
    introHeadline: string;
    introDescription: string;
    cards: SectionCard[];
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  };
  contact: {
    title: string;
    headline: string;
    description: string;
    prompt: string;
    submit: string;
    contactPromise: string;
  };
  footer: string;
  languageName: string;
};

export const translations: Record<Locale, Translation> = {
  pt: {
    nav: {
      services: "O QUE FAZEMOS",
      methodology: "METODOLOGIA",
      contact: "CONTATO",
      getStarted: "Começar",
    },
    home: {
      hero: {
        pretitle: "OPERACIONAL SEM APAGAR INCÊNDIO",
        headlineLine1: "OPERAÇÃO",
        headlineLine2: "SEM CAOS.",
        description:
          "Empresas que cresceram rápido e operam no improviso. A Octo entra, organiza e fica até funcionar.",
        primaryCta: "Iniciar agora",
        secondaryCta: "Ver como funciona",
      },
      pain: {
        title: "Você se reconhece aqui?",
        headline: "A rotina é incêndio constante. A solução precisa chegar em segundos.",
        footer: "Se sim, o problema não é esforço. É falta de estrutura.",
        points: [
          "Processos na cabeça das pessoas",
          "Retrabalho constante",
          "Você no meio de tudo",
          "Equipe que trabalha mas não entrega",
          "Urgência como modo padrão",
        ],
      },
      differential: {
        title: "Diferencial Octo",
        subtitle: "O que a Octo entrega antes do seu próximo mês.",
        cards: [
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
              "Criamos uma operação clara, com fluxos definidos e entregas que não dependem de improviso.",
          },
          {
            number: "03",
            title: "Automações & IA",
            description:
              "Automatizamos o que está travando, reduzindo trabalho manual e acelerando resultados.",
          },
        ],
      },
      methodology: {
        badge: "CRONOGRAMA DE IMPACTO",
        title: "Sua operação organizada em",
        highlighted: "40",
        steps: [
          {
            range: "Dia 01-10",
            title: "Diagnóstico",
            description:
              "Imersão rápida para mapear os pontos que usam fogo como rotina.",
          },
          {
            range: "Dia 11-25",
            title: "Construção de Processos",
            description:
              "Configuramos a operação com estruturas claras e responsáveis.",
          },
          {
            range: "Dia 26-35",
            title: "Automações",
            description:
              "Automatizamos o que trava, reduzimos ruídos e aceleramos entrega.",
          },
          {
            range: "Dia 36-40",
            title: "Go-Live",
            description:
              "Testamos, ajustamos e deixamos a operação estável para rodar sozinha.",
          },
        ],
      },
      cta: {
        title: "Me conta o que está pesando.",
        button: "Quero conversar — é gratuito",
      },
    },
    services: {
      introTitle: "Serviços",
      introHeadline: "Operação sem improviso.",
      introDescription:
        "Entregamos diagnóstico, processos e automação para empresas cansadas de gastar energia apagando incêndio.",
      cards: [
        {
          number: "01",
          title: "Diagnóstico Operacional",
          description:
            "Mapeamos o seu modo de operar e revelamos a raiz dos incêndios que freiam o crescimento.",
        },
        {
          number: "02",
          title: "Construção de Processos",
          description:
            "Criamos uma operação clara, com fluxos definidos e entregas que não dependem de memória.",
        },
        {
          number: "03",
          title: "Automações & IA",
          description:
            "Automatizamos o que está travando, reduzindo trabalho manual e acelerando resultados.",
        },
      ],
      ctaTitle: "Chega de rodar no mesmo lugar.",
      ctaDescription:
        "Transforme o caos em operação previsível com um plano que funciona na prática.",
      ctaButton: "Quero conversar",
    },
    contact: {
      title: "Contato",
      headline: "Vamos tirar o peso da operação.",
      description:
        "Conte o maior problema operacional da sua empresa hoje e a Octo vai te mostrar o caminho para sair do improviso.",
      prompt: "Nossa equipe entra em contato em até 1h.",
      submit: "Quero conversar",
      contactPromise: "Qual é o maior problema operacional da sua empresa hoje?",
    },
    footer: "OCTO OPERATIONAL SYSTEMS. BUILT FOR PERFORMANCE.",
    languageName: "Português",
  },
  es: {
    nav: {
      services: "LO QUE HACEMOS",
      methodology: "METODOLOGÍA",
      contact: "CONTACTO",
      getStarted: "Comenzar",
    },
    home: {
      hero: {
        pretitle: "OPERACIONAL SIN APAGAR INCENDIOS",
        headlineLine1: "OPERACIÓN",
        headlineLine2: "SIN CAOS.",
        description:
          "Empresas que crecieron rápido y operan en improviso. Octo entra, organiza y se queda hasta que funcione.",
        primaryCta: "Iniciar ahora",
        secondaryCta: "Ver cómo funciona",
      },
      pain: {
        title: "¿Te reconoces aquí?",
        headline: "La rutina es incendio constante. La solución debe llegar en segundos.",
        footer: "Si es así, el problema no es esfuerzo. Es falta de estructura.",
        points: [
          "Procesos en la cabeza de las personas",
          "Retrabajo constante",
          "Tú en el medio de todo",
          "Equipo que trabaja pero no entrega",
          "Urgencia como modo estándar",
        ],
      },
      differential: {
        title: "Diferencial Octo",
        subtitle: "Lo que Octo entrega antes de tu próximo mes.",
        cards: [
          {
            number: "01",
            title: "Diagnóstico Operacional",
            description:
              "Descubrimos lo que frena la ejecución y entregamos un plan claro de corrección.",
          },
          {
            number: "02",
            title: "Construcción de Procesos",
            description:
              "Creamos una operación clara, con flujos definidos y entregables sin improvisación.",
          },
          {
            number: "03",
            title: "Automatizaciones & IA",
            description:
              "Automatizamos lo que está bloqueando, reduciendo trabajo manual y acelerando resultados.",
          },
        ],
      },
      methodology: {
        badge: "CRONOGRAMA DE IMPACTO",
        title: "Tu operación organizada en",
        highlighted: "40",
        steps: [
          {
            range: "Día 01-10",
            title: "Diagnóstico",
            description:
              "Inmersión rápida para mapear los puntos que usan fuego como rutina.",
          },
          {
            range: "Día 11-25",
            title: "Construcción de Procesos",
            description:
              "Configuramos la operación con estructuras claras y responsables.",
          },
          {
            range: "Día 26-35",
            title: "Automatizaciones",
            description:
              "Automatizamos lo que bloquea, reducimos ruidos y aceleramos entrega.",
          },
          {
            range: "Día 36-40",
            title: "Go-Live",
            description:
              "Probamos, ajustamos y dejamos la operación estable para que funcione sola.",
          },
        ],
      },
      cta: {
        title: "Cuéntame qué está pesando.",
        button: "Quiero conversar — es gratuito",
      },
    },
    services: {
      introTitle: "Servicios",
      introHeadline: "Operación sin improvisación.",
      introDescription:
        "Entregamos diagnóstico, procesos y automatización para empresas cansadas de gastar energía apagando incendios.",
      cards: [
        {
          number: "01",
          title: "Diagnóstico Operacional",
          description:
            "Mapeamos tu modo de operar y revelamos la raíz de los incendios que frenan el crecimiento.",
        },
        {
          number: "02",
          title: "Construcción de Procesos",
          description:
            "Creamos una operación clara, con flujos definidos y entregables que no dependen de memoria.",
        },
        {
          number: "03",
          title: "Automatizaciones & IA",
          description:
            "Automatizamos lo que está frenando, reduciendo trabajo manual y acelerando resultados.",
        },
      ],
      ctaTitle: "Basta de girar en el mismo lugar.",
      ctaDescription:
        "Transforma el caos en operación predecible con un plan que funciona en la práctica.",
      ctaButton: "Quiero conversar",
    },
    contact: {
      title: "Contacto",
      headline: "Vamos a quitar el peso de la operación.",
      description:
        "Cuenta el mayor problema operativo de tu empresa hoy y Octo te mostrará el camino para salir del improviso.",
      prompt: "Nuestro equipo se pone en contacto en hasta 1h.",
      submit: "Quiero conversar",
      contactPromise: "¿Cuál es el mayor problema operativo de tu empresa hoy?",
    },
    footer: "OCTO OPERATIONAL SYSTEMS. BUILT FOR PERFORMANCE.",
    languageName: "Español",
  },
  en: {
    nav: {
      services: "WHAT WE DO",
      methodology: "METHODOLOGY",
      contact: "CONTACT",
      getStarted: "Get Started",
    },
    home: {
      hero: {
        pretitle: "OPERATION WITHOUT FIREFIGHTING",
        headlineLine1: "OPERATION",
        headlineLine2: "NO CHAOS.",
        description:
          "Companies that scaled fast and still operate in improvisation. Octo enters, organizes, and stays until it works.",
        primaryCta: "Start now",
        secondaryCta: "See how it works",
      },
      pain: {
        title: "Do you recognize yourself here?",
        headline: "The routine is constant firefighting. The solution needs to land in seconds.",
        footer: "If so, the problem is not effort. It's lack of structure.",
        points: [
          "Processes living in people’s heads",
          "Constant rework",
          "You in the middle of everything",
          "Team that works but doesn’t deliver",
          "Urgency as the default mode",
        ],
      },
      differential: {
        title: "Octo’s advantage",
        subtitle: "What Octo delivers before your next month.",
        cards: [
          {
            number: "01",
            title: "Operational Diagnosis",
            description:
              "We uncover what’s blocking execution and deliver a clear plan to fix it.",
          },
          {
            number: "02",
            title: "Process Design",
            description:
              "We build a clear operation with defined flows and delivery ownership.",
          },
          {
            number: "03",
            title: "Automations & AI",
            description:
              "We automate what stalls growth, reduce manual work and speed delivery.",
          },
        ],
      },
      methodology: {
        badge: "IMPACT SCHEDULE",
        title: "Your operation organized in",
        highlighted: "40",
        steps: [
          {
            range: "Day 01-10",
            title: "Diagnosis",
            description:
              "Fast immersion to map the points that use fire as routine.",
          },
          {
            range: "Day 11-25",
            title: "Process Design",
            description:
              "We set up the operation with clear, responsible structures.",
          },
          {
            range: "Day 26-35",
            title: "Automations",
            description:
              "We automate what blocks work, reduce noise and speed delivery.",
          },
          {
            range: "Day 36-40",
            title: "Go-Live",
            description:
              "We test, adjust and leave the operation stable so it runs by itself.",
          },
        ],
      },
      cta: {
        title: "Tell me what’s weighing you down.",
        button: "Let’s talk — it’s free",
      },
    },
    services: {
      introTitle: "Services",
      introHeadline: "Operation without improvisation.",
      introDescription:
        "We deliver diagnosis, processes and automation for companies tired of burning energy fighting fires.",
      cards: [
        {
          number: "01",
          title: "Operational Diagnosis",
          description:
            "We map how you operate and reveal the root of the fires slowing growth.",
        },
        {
          number: "02",
          title: "Process Design",
          description:
            "We create a clear operation with defined flows and handoffs that don’t rely on memory.",
        },
        {
          number: "03",
          title: "Automations & AI",
          description:
            "We automate what is stalling progress, reduce manual work and accelerate results.",
        },
      ],
      ctaTitle: "Stop going in circles.",
      ctaDescription:
        "Turn chaos into predictable operation with a plan that works in practice.",
      ctaButton: "Let’s talk",
    },
    contact: {
      title: "Contact",
      headline: "Let’s take the weight off operations.",
      description:
        "Tell us the biggest operational problem your company faces and Octo will show you the path out of improvisation.",
      prompt: "Our team reaches out within 1h.",
      submit: "Let’s talk",
      contactPromise: "What is the biggest operational problem your company faces today?",
    },
    footer: "OCTO OPERATIONAL SYSTEMS. BUILT FOR PERFORMANCE.",
    languageName: "English",
  },
};
