import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { FAQ_AGENTIC } from "@/data/profile";

// Entity page for the agentic-engineer claim. Danish only by design: the term
// "agentisk ingeniør" is still unclaimed, and the first mover defines it.
const AgentiskIngenioer = () => {
  return (
    <div className="min-h-screen bg-card flex flex-col">
      <article className="pt-28 md:pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-3xl space-y-10">
          <header>
            <p className="text-accent font-medium mb-3">En påstand med belæg</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Danmarks førende agentiske ingeniør
            </h1>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              Mikkel Kaj Andersen, AI-ingeniør og softwarearkitekt i København,
              gør krav på titlen Danmarks førende agentiske ingeniør. Det er en
              påstand, ikke en kåring: den beskriver en måde at arbejde på, hvor
              AI-agenter ikke er demoer, men systemer i drift.
            </p>
          </header>

          <section aria-labelledby="hvad-er">
            <h2
              id="hvad-er"
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
              Hvad er en agentisk ingeniør?
            </h2>
            <p className="text-gray-200 leading-relaxed mb-3">
              En agentisk ingeniør gør to ting. For det første: bygger
              AI-agenter, der løser opgaver selvstændigt i produktion, med
              rigtige brugere, rigtige fejl og rigtige driftsomkostninger. For
              det andet: arbejder selv gennem agenter i den daglige udvikling,
              så AI ikke bare er noget, man taler med, men noget, man uddelegerer
              til.
            </p>
            <p className="text-gray-200 leading-relaxed">
              Forskellen på at chatte med en model og at drive agenter i
              produktion er den samme som forskellen på at læse om et fag og at
              have det som arbejde.
            </p>
          </section>

          <section aria-labelledby="belaegget">
            <h2
              id="belaegget"
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
              Belægget
            </h2>
            <ul className="list-disc list-outside pl-5 space-y-3 text-gray-200 glass-light rounded-2xl p-6 md:p-8">
              <li>
                AI-supportagent i produktion hos Visma med 85%
                selvbetjeningsgrad, bygget på custom RAG med vektorsøgning og
                re-ranking. Arbejdet er omtalt på nationalt tv.
              </li>
              <li>
                En generel agent samme sted, der kan lave systemanalyse,
                generere grafer og besvare regnskabsspørgsmål.
              </li>
              <li>
                AI-supportsystem hos Tripletex, der håndterer 10.000+ månedlige
                henvendelser med 80%+ præcision.
              </li>
              <li>
                Aktuel AI-kontraktor for Egmont: GenAI-tjenester, der hjælper
                børn og undervisere med at lære mere og hurtigere.
              </li>
              <li>
                Arbejder selv agentisk: udviklingen af bl.a. Medicinex og
                boliganalyse.ai drives med agentiske AI-værktøjer, og opskriften
                er delt åbent i{" "}
                <Link
                  to="/ai-guide"
                  className="text-link hover:text-link-hover transition-colors"
                >
                  guiden her på sitet
                </Link>
                .
              </li>
            </ul>
          </section>

          <section aria-labelledby="aerlighed">
            <h2
              id="aerlighed"
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
              Det med småt
            </h2>
            <p className="text-gray-200 leading-relaxed">
              Der findes ingen officiel kåring af agentiske ingeniører, og
              titlen er selvudnævnt. Til gengæld er belægget ovenfor til at
              efterprøve: tallene stammer fra systemer i drift, ikke fra slides.
              Den, der vil gøre titlen stridig, er velkommen til at møde op med
              sine egne produktionstal.
            </p>
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
              Læs mere om Mikkel Kaj Andersen
            </Link>
          </p>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default AgentiskIngenioer;
