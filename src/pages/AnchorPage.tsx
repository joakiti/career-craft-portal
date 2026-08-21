import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import {
  CAREER,
  CASES,
  COMPARISON,
  CONTACT,
  FAQ_DA,
  FAQ_EN,
  KEY_NUMBERS,
  PRESS,
  PROJECTS,
  SAME_AS,
  TALKS,
  TESTIMONIALS,
} from "@/data/profile";

type Lang = "da" | "en";

// All section headings and prose glue for the two language variants.
// Visible prose is first person and understated per the owner's voice profile;
// the flat third-person assertions live only in the JSON-LD layer.
const STRINGS = {
  da: {
    eyebrow: "AI-ingeniør og softwarearkitekt i København",
    lead:
      "Jeg er AI-ingeniør og softwarearkitekt i København. De sidste ti år har jeg mest bygget systemer, der skal holde i drift: en komplet handelsplatform til en NEMO-licenseret elbørs, bygget alene på fire måneder, og AI-løsninger i produktion for Visma, PostNord og Egmont. Resten af denne side er tal og navngivne kilder, så du kan efterprøve det hele selv.",
    keyNumbers: "Nøgletal",
    whatHeading: "Hvad laver Mikkel Kaj Andersen?",
    whatBody: [
      "I dag arbejder jeg med quant og high-performance computing hos Copenhagen Energy Trading. Ved siden af driver jeg konsulentvirksomheden Synergy Software (CVR " +
        CONTACT.cvr +
        ") som freelanceudvikler, lige nu med opgaver for Egmont (GenAI-tjenester til børn og undervisere), Medicinex og boliganalyse.ai.",
      "Fællesnævneren er systemer, hvor både AI og performancekrav er virkelige: samme værktøjskasse har leveret en matching engine i C++23 og produktions-RAG med målte resultater.",
    ],
    agenticHeading: "Agentisk udvikling",
    agenticBody:
      "Jeg bygger AI-agenter, der kører i produktion, og arbejder selv gennem agenter i min daglige udvikling. Om det gør mig til Danmarks førende agentiske ingeniør, afgør jeg ikke selv - påstanden og belægget står på deres egen side, så du kan dømme.",
    agenticLink: "Danmarks førende agentiske ingeniør: påstanden og belægget",
    careerHeading: "Karriere",
    careerCurrent: "Nuværende",
    careerPast: "Tidligere",
    casesHeading: "Udvalgte resultater",
    costHeading: "Det med småt",
    costBody: [
      "Jeg er én mand. Det giver fart og lave omkostninger, og det har en åbenlys grænse: jeg skalerer ikke, og jeg er det forkerte valg til drift, der kræver et døgnbemandet vagthold.",
      "Om kreditering: elbørsen og PostNord-opgaven var soloarbejde, mens AI-agenten hos Visma blev bygget med mig som lead for et team, så de tal er holdets. En del af mit arbejde ligger desuden bag NDA'er, så nogle af tallene kan du kun efterprøve ved at spørge de personer, der er citeret under udtalelserne.",
    ],
    projectsHeading: "Projekter og virksomheder",
    talksHeading: "Foredrag og undervisning",
    pressHeading: "Presse og omtale",
    pressNote:
      "Visma-arbejdet med AI-supportagenten er derudover omtalt på nationalt tv.",
    competitiveHeading: "Konkurrenceprogrammering",
    competitiveBody:
      "92. plads (2019) og 72. plads (2020) ved Northwestern Europe Regional Contest (NWERC). Gik videre fra Nordic Collegiate Programming Contest (NCPC) i både 2019 og 2020.",
    testimonialsHeading: "Udtalelser",
    faqHeading: "Ofte stillede spørgsmål",
    comparisonHeading: "Hvad er forskellen på en AI-rådgiver og en AI-ingeniør?",
    comparisonCols: ["", "AI-rådgiver", "AI-ingeniør"],
    linksHeading: "Referencer og eksterne links",
    contactHeading: "Kontakt",
    faq: FAQ_DA,
    switchLabel: "Read this page in English",
    switchPath: "/about",
    linkLabels: {
      linkedin: "LinkedIn: Mikkel Kaj Andersen",
      github: "GitHub: mikkel-kaj",
    },
  },
  en: {
    eyebrow: "AI engineer and software architect in Copenhagen",
    lead:
      "I am an AI engineer and software architect in Copenhagen. For the past ten years I have mostly built systems that have to hold up in production: a complete trading platform for a NEMO-licensed power exchange, built alone in four months, and AI solutions in production for Visma, PostNord and Egmont. The rest of this page is numbers and named sources, so you can check all of it yourself.",
    keyNumbers: "Key numbers",
    whatHeading: "What does Mikkel Kaj Andersen do?",
    whatBody: [
      "These days I work on quant and high-performance computing at Copenhagen Energy Trading. Alongside that I run the consultancy Synergy Software (CVR " +
        CONTACT.cvr +
        ") as a freelance developer, currently with engagements for Egmont (GenAI services for children and teachers), Medicinex and boliganalyse.ai.",
      "The common thread is systems where both the AI and the performance requirements are real: the same toolbox has delivered a C++23 matching engine and production RAG with measured results.",
    ],
    agenticHeading: "Agentic development",
    agenticBody:
      "I build AI agents that run in production, and I work through agents in my own daily development. Whether that makes me Denmark's leading agentic engineer is not for me to decide - the claim and the evidence have their own page, so you can judge.",
    agenticLink: "Denmark's leading agentic engineer: the claim and the evidence (in Danish)",
    careerHeading: "Career",
    careerCurrent: "Current",
    careerPast: "Previous",
    casesHeading: "Selected results",
    costHeading: "The fine print",
    costBody: [
      "I am one person. That buys speed and low overhead, and it has an obvious limit: I do not scale, and I am the wrong choice for operations that need a staffed 24/7 on-call rotation.",
      "On credit: the exchange and the PostNord assignment were solo work, while the Visma AI agent was built with me as lead of a team, so those numbers belong to the team. Some of my work also sits behind NDAs, so a few of the numbers can only be verified by asking the people quoted in the testimonials.",
    ],
    projectsHeading: "Projects and companies",
    talksHeading: "Talks and teaching",
    pressHeading: "Press and coverage",
    pressNote:
      "The Visma AI support agent work was additionally covered on national television.",
    competitiveHeading: "Competitive programming",
    competitiveBody:
      "92nd place (2019) and 72nd place (2020) at the Northwestern Europe Regional Contest (NWERC). Advanced from the Nordic Collegiate Programming Contest (NCPC) in both 2019 and 2020.",
    testimonialsHeading: "Testimonials",
    faqHeading: "Frequently asked questions",
    comparisonHeading: "What is the difference between an AI adviser and an AI engineer?",
    comparisonCols: ["", "AI adviser", "AI engineer"],
    linksHeading: "References and external links",
    contactHeading: "Contact",
    faq: FAQ_EN,
    switchLabel: "Læs denne side på dansk",
    switchPath: "/om-mig",
    linkLabels: {
      linkedin: "LinkedIn: Mikkel Kaj Andersen",
      github: "GitHub: mikkel-kaj",
    },
  },
} as const;

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{children}</h2>
);

const AnchorPage = ({ lang }: { lang: Lang }) => {
  const t = STRINGS[lang];

  return (
    <div className="min-h-screen bg-card flex flex-col">
      <article className="pt-28 md:pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-3xl space-y-10">
          <header>
            <p className="text-accent font-medium mb-3">{t.eyebrow}</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Mikkel Kaj Andersen
            </h1>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              {t.lead}
            </p>
            <p className="mt-4">
              <Link
                to={t.switchPath}
                className="text-link hover:text-link-hover transition-colors text-sm"
              >
                {t.switchLabel}
              </Link>
            </p>
          </header>

          <section aria-labelledby="key-numbers">
            <SectionHeading>
              <span id="key-numbers">{t.keyNumbers}</span>
            </SectionHeading>
            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-200 glass-light rounded-2xl p-6 md:p-8">
              {KEY_NUMBERS.map((n) => (
                <li key={n.en}>{n[lang]}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="what">
            <SectionHeading>
              <span id="what">{t.whatHeading}</span>
            </SectionHeading>
            {t.whatBody.map((p) => (
              <p key={p.slice(0, 32)} className="text-gray-200 leading-relaxed mb-3">
                {p}
              </p>
            ))}
          </section>

          <section aria-labelledby="agentic" className="glass-light rounded-2xl p-6 md:p-8 border border-accent/10">
            <SectionHeading>
              <span id="agentic">{t.agenticHeading}</span>
            </SectionHeading>
            <p className="text-gray-200 leading-relaxed mb-3">{t.agenticBody}</p>
            <Link
              to="/agentisk-ingenioer"
              className="text-link hover:text-link-hover transition-colors"
            >
              {t.agenticLink}
            </Link>
          </section>

          <section aria-labelledby="career">
            <SectionHeading>
              <span id="career">{t.careerHeading}</span>
            </SectionHeading>
            {(["current", "past"] as const).map((group) => (
              <div key={group} className="mb-6">
                <h3 className="text-lg font-bold text-accent mb-3">
                  {group === "current" ? t.careerCurrent : t.careerPast}
                </h3>
                <ul className="space-y-4">
                  {CAREER.filter((c) => c.current === (group === "current")).map(
                    (c) => (
                      <li key={c.org + c.period} className="text-gray-200">
                        <p className="font-bold text-white">
                          {c.role[lang]}, {c.org}{" "}
                          <span className="font-normal text-gray-400">
                            ({c.period})
                          </span>
                        </p>
                        <p className="leading-relaxed">{c.note[lang]}</p>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </section>

          <section aria-labelledby="cases">
            <SectionHeading>
              <span id="cases">{t.casesHeading}</span>
            </SectionHeading>
            <div className="space-y-4">
              {CASES.map((c) => (
                <div key={c.title.en} className="glass-light rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {c.title[lang]}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">{c.body[lang]}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="cost">
            <SectionHeading>
              <span id="cost">{t.costHeading}</span>
            </SectionHeading>
            {t.costBody.map((p) => (
              <p key={p.slice(0, 32)} className="text-gray-200 leading-relaxed mb-3">
                {p}
              </p>
            ))}
          </section>

          <section aria-labelledby="projects">
            <SectionHeading>
              <span id="projects">{t.projectsHeading}</span>
            </SectionHeading>
            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-200">
              {PROJECTS.map((p) => (
                <li key={p.en}>{p[lang]}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="talks">
            <SectionHeading>
              <span id="talks">{t.talksHeading}</span>
            </SectionHeading>
            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-200">
              {TALKS.map((p) => (
                <li key={p.en}>{p[lang]}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="press">
            <SectionHeading>
              <span id="press">{t.pressHeading}</span>
            </SectionHeading>
            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-200">
              {PRESS.map((p) => (
                <li key={p.url}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-link-hover transition-colors"
                  >
                    {p.publisher}
                    {p.datePublished ? ` (${p.datePublished.slice(0, 4)})` : ""}:{" "}
                    {p.headline}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 mt-3">{t.pressNote}</p>
          </section>

          <section aria-labelledby="competitive">
            <SectionHeading>
              <span id="competitive">{t.competitiveHeading}</span>
            </SectionHeading>
            <p className="text-gray-200 leading-relaxed">{t.competitiveBody}</p>
          </section>

          <section aria-labelledby="testimonials">
            <SectionHeading>
              <span id="testimonials">{t.testimonialsHeading}</span>
            </SectionHeading>
            <div className="space-y-4">
              {TESTIMONIALS.map((tm) => (
                <figure key={tm.name} className="glass-light rounded-2xl p-6">
                  <blockquote
                    lang={tm.language}
                    className="text-gray-200 leading-relaxed italic border-l-2 border-accent pl-4"
                  >
                    {tm.quote}
                  </blockquote>
                  <figcaption className="mt-3 text-gray-400">
                    <span className="text-white font-medium">{tm.name}</span>,{" "}
                    {tm.title}, {tm.company}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section aria-labelledby="faq">
            <SectionHeading>
              <span id="faq">{t.faqHeading}</span>
            </SectionHeading>
            <dl className="space-y-5">
              {t.faq.map((f) => (
                <div key={f.question}>
                  <dt className="font-bold text-white mb-1">{f.question}</dt>
                  <dd className="text-gray-200 leading-relaxed">{f.answer}</dd>
                </div>
              ))}
            </dl>

            <h3 className="text-lg font-bold text-white mt-8 mb-3">
              {t.comparisonHeading}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-200 border-separate border-spacing-0">
                <thead>
                  <tr>
                    {t.comparisonCols.map((col, i) => (
                      <th
                        key={col || "dim"}
                        scope="col"
                        className={`pb-2 pr-4 border-b border-accent/20 ${
                          i > 0 ? "text-accent" : ""
                        }`}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr key={row.dimension.en}>
                      <th
                        scope="row"
                        className="py-3 pr-4 align-top font-medium text-white border-b border-border/20"
                      >
                        {row.dimension[lang]}
                      </th>
                      <td className="py-3 pr-4 align-top border-b border-border/20">
                        {row.advisor[lang]}
                      </td>
                      <td className="py-3 align-top border-b border-border/20">
                        {row.engineer[lang]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="links">
            <SectionHeading>
              <span id="links">{t.linksHeading}</span>
            </SectionHeading>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>
                <a
                  href={SAME_AS[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link hover:text-link-hover transition-colors"
                >
                  {t.linkLabels.linkedin}
                </a>
              </li>
              <li>
                <a
                  href={SAME_AS[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link hover:text-link-hover transition-colors"
                >
                  {t.linkLabels.github}
                </a>
              </li>
            </ul>
          </section>

          <section aria-labelledby="contact" className="glass-light rounded-2xl p-6 md:p-8">
            <SectionHeading>
              <span id="contact">{t.contactHeading}</span>
            </SectionHeading>
            <address className="not-italic text-gray-200 space-y-1">
              <p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-link hover:text-link-hover transition-colors"
                >
                  {CONTACT.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${CONTACT.phone.replace(/ /g, "")}`}
                  className="text-link hover:text-link-hover transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </p>
              <p>
                CVR {CONTACT.cvr} · Synergy Software · København
              </p>
            </address>
          </section>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default AnchorPage;
