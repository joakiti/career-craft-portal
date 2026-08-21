import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { FAQ_AGENTIC, TESTIMONIALS } from "@/data/profile";

// Entity page for the agentic-engineer title. Danish only by design: the term
// "agentisk ingeniør" is still unclaimed, and the first mover defines it.
// Register (owner-directed, third iteration): state the title flat, then pay
// for it immediately with named institutions and measured numbers. No hedging,
// no self-appointed framing. Team work stays labelled as team work.

const REASONS = [
  {
    statement: "Begge halvdele af faget.",
    detail:
      "De fleste i dansk AI har enten agenter eller hård systemudvikling. Jeg har begge: til en NEMO-licenseret elbørs byggede jeg en C++23 matching engine alene på fire måneder, inklusive settlement og regulatoriske integrationer - og mine AI-agenter kører i drift hos Visma, Tripletex og Egmont.",
  },
  {
    statement: "Agenter i drift, ikke demoer.",
    detail:
      "Som lead hos Visma leverede jeg en supportagent med 85% selvbetjeningsgrad, bygget på custom RAG med vektorsøgning og re-ranking, plus en generel agent til systemanalyse og grafgenerering. Arbejdet er omtalt på nationalt tv.",
  },
  {
    statement: "Målt i stor skala.",
    detail:
      "AI-supporten hos Tripletex håndterer 10.000+ månedlige henvendelser med 80%+ præcision. PostNords AI-planlægning kører i daglig drift med +40% nøjagtighed, på en kontrakt på 6 mio. NOK årligt.",
  },
];

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

const PRESS_NAMES = ["DR", "Ingeniøren", "Nationalt tv"];

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
              Danmarks førende agentiske ingeniør
            </h1>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              AI-agenter i produktion for danske og nordiske virksomheder:
              bygget, sat i drift og målt på resultater.
            </p>
          </header>

          <section aria-labelledby="derfor">
            <h2
              id="derfor"
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
              Derfor
            </h2>
            <div className="space-y-4">
              {REASONS.map((r) => (
                <div key={r.statement} className="glass-light rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {r.statement}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">{r.detail}</p>
                </div>
              ))}
              <div className="glass-light rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  Min egen udvikling kører gennem agenter.
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  Medicinex og boliganalyse.ai er drevet frem med agentiske
                  AI-værktøjer, og opskriften er publiceret åbent i{" "}
                  <Link
                    to="/ai-guide"
                    className="text-link hover:text-link-hover transition-colors"
                  >
                    guiden her på sitet
                  </Link>
                  . Hos Egmont bygger jeg lige nu GenAI-tjenester til børn og
                  undervisere.
                </p>
              </div>
            </div>
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
              Ofte stillet spørgsmål
            </h2>
            <dl>
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
