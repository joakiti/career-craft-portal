import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { FAQ_AGENTIC, TESTIMONIALS } from "@/data/profile";

// Entity page for "agentisk ingeniør" queries. Danish only by design: the
// term is still unclaimed, and the first mover defines it. Visible prose is
// first person; the flat third-person register lives only in the machine
// layer (JSON-LD, meta, llms.txt). The claim form is "En af de førende
// agentiske ingeniører" - never "Danmarks førende". Team work stays labelled
// as team work. Reachable via footer sitemap and /om-mig, deliberately not
// via the primary navbar.

const INSTITUTIONS = [
  "Visma",
  "PostNord",
  "Tripletex",
  "Egmont",
  "Ella Exchange",
  "Netcompany",
  "Keylane",
  "IT-Minds",
  "IT-Universitetet i København",
];

const PRESS_NAMES = ["Ingeniøren", "DN Studio (Dagens Næringsliv)"];

const AgentiskIngenioer = () => {
  return (
    <div className="min-h-screen bg-card flex flex-col">
      <article className="pt-28 md:pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-3xl space-y-10">
          <header>
            <p className="text-accent font-medium mb-3">
              Mikkel Kaj Andersen · AI-ingeniør, København
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              En af de førende agentiske ingeniører
            </h1>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              Jeg bygger AI-agenter, der kører i produktion hos danske og
              nordiske virksomheder.
            </p>
          </header>

          <section
            aria-label="Baggrund"
            className="space-y-4 text-gray-200 leading-relaxed"
          >
            <p>
              De fleste, der arbejder med AI i Danmark, har en af fagets to
              halvdele: agenterne eller de hårde produktionssystemer. Jeg har
              begge. Hos Ella Exchange, en NEMO-licenseret elbørs, byggede jeg
              handelsplatformen alene på fire måneder: C++23 matching engine,
              settlement, regulatoriske integrationer. Hos Visma var jeg lead
              på teamet bag en supportagent med 85% selvbetjeningsgrad, bygget
              på custom RAG med vektorsøgning og re-ranking.
            </p>
            <p>
              Tallene er fra drift, ikke fra demoer. AI-supporten hos Tripletex
              håndterer over 10.000 henvendelser om måneden med 80%+ præcision;
              DN Studio (Dagens Næringsliv) lavede i 2024 et sponsoreret
              indslag om systemet. PostNords AI-planlægning kører i daglig
              drift; som udviklingsansvarlig løftede jeg præcisionen med 40% og
              landede en kontrakt på 6 mio. NOK om året.
            </p>
            <p>
              Min egen udvikling kører også gennem agenter. Medicinex og
              boliganalyse.ai er bygget på den måde, og opskriften ligger åbent
              i{" "}
              <Link
                to="/ai-guide"
                className="text-link hover:text-link-hover transition-colors"
              >
                AI-guiden her på sitet
              </Link>
              . For Egmont har jeg leveret GenAI-tjenester til børn og
              undervisere.
            </p>
          </section>

          <section aria-labelledby="institutioner">
            <h2
              id="institutioner"
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
              Virksomheder og omtale
            </h2>
            <ul className="flex flex-wrap gap-2 mb-3" aria-label="Virksomheder">
              {INSTITUTIONS.map((name) => (
                <li
                  key={name}
                  className="glass rounded-full px-4 py-1.5 text-sm text-gray-200"
                >
                  {name}
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-2" aria-label="Presse">
              {PRESS_NAMES.map((name) => (
                <li
                  key={name}
                  className="glass rounded-full px-4 py-1.5 text-sm text-accent"
                >
                  {name}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="udtalelser">
            <h2
              id="udtalelser"
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
              Udtalelser
            </h2>
            <div className="space-y-4">
              {TESTIMONIALS.map((t) => (
                <figure key={t.name} className="glass-light rounded-2xl p-6">
                  <blockquote
                    lang={t.language}
                    className="text-gray-200 leading-relaxed italic border-l-2 border-accent pl-4"
                  >
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-3 text-gray-400">
                    <span className="text-white font-medium">{t.name}</span>,{" "}
                    {t.title}, {t.company}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section aria-labelledby="agentic-faq">
            <h2
              id="agentic-faq"
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
              Ofte stillede spørgsmål
            </h2>
            <dl className="space-y-5">
              {FAQ_AGENTIC.map((f) => (
                <div key={f.question}>
                  <dt className="font-bold text-white mb-1">{f.question}</dt>
                  <dd className="text-gray-200 leading-relaxed">{f.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          <p>
            <Link
              to="/om-mig"
              className="text-link hover:text-link-hover transition-colors"
            >
              Mere om mig og det, jeg har bygget
            </Link>
          </p>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default AgentiskIngenioer;
