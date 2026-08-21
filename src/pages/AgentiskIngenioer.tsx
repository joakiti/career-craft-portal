import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { FAQ_AGENTIC } from "@/data/profile";

// Entity page for the agentic-engineer claim. Danish only by design: the term
// "agentisk ingeniør" is still unclaimed, and the first mover defines it.
// The H1 carries the claim (owner-specified); the prose under it is first
// person and understated - the reader draws the conclusion, not the page.
const AgentiskIngenioer = () => {
  return (
    <div className="min-h-screen bg-card flex flex-col">
      <article className="pt-28 md:pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-3xl space-y-10">
          <header>
            <p className="text-accent font-medium mb-3">
              En påstand, ikke en kåring
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Danmarks førende agentiske ingeniør
            </h1>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              Titlen ovenfor er selvudnævnt. Der findes ingen kåring af
              agentiske ingeniører, og jeg ville være skeptisk over for en,
              hvis den fandtes. Så i stedet for at argumentere for titlen viser
              jeg regnestykket: hvad jeg har sat i produktion, hvad det målte,
              og hvor det stadig halter. Døm selv.
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
              En agentisk ingeniør gør to ting: bygger AI-agenter, der løser
              opgaver selvstændigt i produktion, med rigtige brugere og rigtige
              driftsomkostninger, og arbejder selv gennem agenter i den daglige
              udvikling, så AI ikke bare er noget, man taler med, men noget,
              man uddelegerer til.
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
                Hos Visma var jeg lead på en supportagent, der kører med 85%
                selvbetjeningsgrad, bygget på custom RAG med vektorsøgning og
                re-ranking. Det var holdarbejde, og det blev omtalt på
                nationalt tv.
              </li>
              <li>
                Samme sted byggede vi en generel agent, der laver
                systemanalyse, genererer grafer og besvarer
                regnskabsspørgsmål.
              </li>
              <li>
                AI-supportsystemet hos Tripletex håndterer 10.000+ månedlige
                henvendelser med 80%+ præcision.
              </li>
              <li>
                Lige nu bygger jeg GenAI-tjenester for Egmont, der skal hjælpe
                børn og undervisere med at lære mere og hurtigere.
              </li>
              <li>
                Min egen udvikling kører agentisk: Medicinex og boliganalyse.ai
                er drevet frem med agentiske AI-værktøjer, og opskriften ligger
                frit tilgængelig i{" "}
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
              Ingen måler agentiskhed, og titlen er min egen. Tallene ovenfor
              er til gengæld fra systemer i drift, ikke fra slides, og hvor de
              er holdarbejde, står det der. Møder nogen op med bedre
              produktionstal, retter jeg siden.
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
