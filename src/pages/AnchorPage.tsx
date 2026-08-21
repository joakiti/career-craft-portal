import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import {
  CAREER,
  COMPARISON,
  CONTACT,
  FAQ_DA,
  FAQ_EN,
  PRESS,
  PROJECTS,
  SAME_AS,
  TALKS,
  TESTIMONIALS,
} from "@/data/profile";

type Lang = "da" | "en";

// Wiki-style entity page (captain-approved blueprint): third-person register,
// stat strip, named clients, career lists, footnoted numbers, infobox.
// Every number carries a footnote to a named source in the references list.

// Numbered sources. Order defines the footnote numbers.
const REFERENCES = [
  {
    id: 1,
    da: "Erfaring, teknologier og udtalelser på dette site",
    en: "Experience, technologies and testimonials on this site",
    url: "/profile",
    internal: true,
  },
  {
    id: 2,
    da: "LinkedIn: Mikkel Kaj Andersen",
    en: "LinkedIn: Mikkel Kaj Andersen",
    url: SAME_AS[0],
    internal: false,
  },
  {
    id: 3,
    da: "Ingeniøren (2023): Nyuddannet softwareudvikler: Jeg har fundet det sted, hvor jeg kan skabe min egen hverdag",
    en: "Ingeniøren (2023): Nyuddannet softwareudvikler: Jeg har fundet det sted, hvor jeg kan skabe min egen hverdag (in Danish)",
    url: PRESS[0].url,
    internal: false,
  },
  {
    id: 4,
    da: "DR: Udslæt, allergier og bylder: Ny app skal gøre det nemmere at finde den rette tatovør",
    en: "DR: Udslæt, allergier og bylder: Ny app skal gøre det nemmere at finde den rette tatovør (in Danish)",
    url: PRESS[1].url,
    internal: false,
  },
  {
    id: 5,
    da: "DN Studio, Dagens Næringsliv (2024): Hvordan utnytte KI som en vekstakselerator. Annonsørindhold om Tripletex' AI-support; nævner ikke Mikkel ved navn",
    en: "DN Studio, Dagens Næringsliv (2024): Hvordan utnytte KI som en vekstakselerator. Sponsored content about Tripletex's AI support; does not name Mikkel",
    url: PRESS[2].url,
    internal: false,
  },
  {
    id: 6,
    da: `CVR-registret: Synergy Software, CVR-nr. ${CONTACT.cvr}, etableret 20. december 2022`,
    en: `The Danish CVR register: Synergy Software, CVR no. ${CONTACT.cvr}, established 20 December 2022`,
    url: null as string | null,
    internal: false,
  },
  {
    id: 7,
    da: "GitHub: mikkel-kaj",
    en: "GitHub: mikkel-kaj",
    url: SAME_AS[1],
    internal: false,
  },
];

const STATS = [
  { value: "4 mdr", valueEn: "4 mo", da: "Komplet elbørs-platform bygget alene", en: "Complete power exchange platform built solo", refs: [1] },
  { value: "85%", valueEn: "85%", da: "Selvbetjeningsgrad, AI-supportagent hos Visma", en: "Self-service rate, AI support agent at Visma", refs: [1] },
  { value: "10.000+", valueEn: "10,000+", da: "Månedlige henvendelser, AI-support hos Tripletex", en: "Monthly queries, AI support at Tripletex", refs: [1, 5] },
  { value: "10+ år", valueEn: "10+ yrs", da: "Erfaring med software i produktion", en: "Experience delivering production software", refs: [2] },
];

const CLIENTS = ["Visma", "PostNord", "Egmont", "Tripletex", "Ella Exchange"];

const KEY_RESULTS = [
  {
    value: "4 måneder",
    valueEn: "4 months",
    da: "Komplet handelsplatform til en NEMO-licenseret elbørs, leveret alene hos Ella Exchange: C++23 matching engine, settlement og regulatoriske integrationer.",
    en: "Complete trading platform for a NEMO-licensed power exchange, delivered solo at Ella Exchange: C++23 matching engine, settlement and regulatory integrations.",
    refs: [1],
  },
  {
    value: "85%",
    valueEn: "85%",
    da: "Selvbetjeningsgrad for AI-supportagenten hos Visma, bygget på custom RAG med vektorsøgning og re-ranking. Leveret som lead for et team.",
    en: "Self-service rate for the AI support agent at Visma, built on custom RAG with vector search and re-ranking. Delivered as lead of a team.",
    refs: [1],
  },
  {
    value: "10.000+",
    valueEn: "10,000+",
    da: "Månedlige henvendelser håndteret af AI-supporten hos Tripletex med 80%+ præcision. Omtalt i DN Studio (Dagens Næringsliv, 2024).",
    en: "Monthly queries handled by the AI support at Tripletex at 80%+ accuracy. Covered in DN Studio (Dagens Næringsliv, 2024).",
    refs: [1, 5],
  },
  {
    value: "6 mio. NOK",
    valueEn: "6M NOK",
    da: "Årlig kontrakt landet som udviklingsansvarlig for PostNord, med +40% nøjagtighed i planlægningen som soloopgave.",
    en: "Yearly contract landed as development lead for PostNord, with +40% scheduling accuracy as a single-person assignment.",
    refs: [1, 2],
  },
  {
    value: "10-30 s → 100-500 ms",
    valueEn: "10-30 s → 100-500 ms",
    da: "Central svartid i Visma HR efter performanceoptimering.",
    en: "Central response time in Visma HR after performance optimisation.",
    refs: [1, 2],
  },
  {
    value: "11,0 / 12",
    valueEn: "11.0 / 12",
    da: "Karaktergennemsnit på kandidaten i datalogi, IT-Universitetet i København (top 10%).",
    en: "GPA for the MSc in Computer Science, IT University of Copenhagen (top 10%).",
    refs: [2],
  },
  {
    value: "72. plads",
    valueEn: "72nd place",
    da: "Northwestern Europe Regional Contest (NWERC) 2020; 92. plads i 2019, videre fra NCPC begge år.",
    en: "Northwestern Europe Regional Contest (NWERC) 2020; 92nd place in 2019, advanced from NCPC both years.",
    refs: [2],
  },
];

const RECEPTION = [
  {
    quote: "consistently impressed us with his exceptional skills and efficiency",
    name: "Morten Nørgaard Larsen",
    role: { da: "CTO & Senior Vice President, Visma Enterprise A/S", en: "CTO & Senior Vice President, Visma Enterprise A/S" },
    refs: [1],
  },
  {
    quote: "one of our standout products",
    name: "Stian Vale",
    role: { da: "Manager, Resolve, om PostNord-produktet", en: "Manager, Resolve, on the PostNord product" },
    refs: [1],
  },
  {
    quote: "utrolig nem at kommunikere med",
    name: "Marie Preisler",
    role: { da: "CEO, YOLO Cards", en: "CEO, YOLO Cards" },
    refs: [1],
  },
];

const STRINGS = {
  da: {
    eyebrow: "AI-ingeniør og softwarearkitekt i København",
    intro: [
      <>
        Mikkel Kaj Andersen er en dansk AI-ingeniør og softwarearkitekt i
        København og{" "}
        <Link to="/agentisk-ingenioer" className="text-link hover:text-link-hover transition-colors">
          en af de førende agentiske ingeniører
        </Link>
        . Han arbejder i dag med quant og high-performance computing hos
        Copenhagen Energy Trading og driver desuden konsulentvirksomheden
        Synergy Software (CVR {CONTACT.cvr}) som freelanceudvikler.
      </>,
      <>
        Han byggede en komplet handelsplatform til en NEMO-licenseret elbørs
        alene på fire måneder og har leveret AI-løsninger i produktion til
        Visma, PostNord og Egmont.
      </>,
    ],
    clientsHeading: "Tidligere kunder og arbejdsgivere",
    keyResultsHeading: "Nøgleresultater",
    careerHeading: "Karriere",
    careerProse:
      "Andersen har over ti års erfaring med at levere software i produktion, fra statskritiske systemer hos Netcompany til AI-optimering og LLM-systemer hos Visma. Gennem Synergy Software arbejder han i dag med Medicinex og boliganalyse.ai; senest har han leveret GenAI-tjenester til børn og undervisere for Egmont.",
    careerCurrent: "Nuværende stillinger",
    careerPast: "Tidligere stillinger",
    educationHeading: "Uddannelse og sprog",
    education: [
      "MSc Datalogi, IT-Universitetet i København, 2019-2021. Karaktergennemsnit 11,0/12 (top 10%).",
      "BSc Datalogi, IT-Universitetet i København, 2016-2019. Valgfag i machine learning og security.",
    ],
    languagesLabel: "Sprog",
    languages: "Dansk, engelsk",
    projectsHeading: "Projekter og virksomheder",
    pressHeading: "Publikationer og omtale",
    talksLabel: "Foredrag og undervisning",
    receptionHeading: "Modtagelse",
    testimonialsHeading: "Udtalelser",
    faqHeading: "Ofte stillede spørgsmål",
    comparisonHeading: "Hvad er forskellen på en AI-rådgiver og en AI-ingeniør?",
    comparisonCols: ["", "AI-rådgiver", "AI-ingeniør"],
    referencesHeading: "Referencer",
    externalHeading: "Eksterne links",
    infobox: {
      nationality: ["Nationalitet", "Dansk"],
      residence: ["Bopæl", "København"],
      education: ["Uddannelse", "MSc Datalogi, IT-Universitetet i København"],
      title: ["Stilling", "AI-ingeniør og softwarearkitekt"],
      employer: ["Arbejdsgiver", "Copenhagen Energy Trading"],
      company: ["Virksomhed", `Synergy Software (CVR ${CONTACT.cvr})`],
      knownFor: ["Kendt for", "Elbørs-platform bygget alene på 4 måneder; AI-agenter i produktion"],
      email: ["E-mail", CONTACT.email],
      phone: ["Telefon", CONTACT.phone],
      website: ["Hjemmeside", "www.mikkelkajandersen.dk"],
    },
    faq: FAQ_DA,
    switchLabel: "Read this page in English",
    switchPath: "/about",
  },
  en: {
    eyebrow: "AI engineer and software architect in Copenhagen",
    intro: [
      <>
        Mikkel Kaj Andersen is a Danish AI engineer and software architect in
        Copenhagen and{" "}
        <Link to="/agentisk-ingenioer" className="text-link hover:text-link-hover transition-colors">
          one of the leading agentic engineers
        </Link>
        . He currently works on quant and high-performance computing at
        Copenhagen Energy Trading and also runs the consultancy Synergy
        Software (CVR {CONTACT.cvr}) as a freelance developer.
      </>,
      <>
        He built a complete trading platform for a NEMO-licensed power exchange
        alone in four months and has delivered AI solutions in production for
        Visma, PostNord and Egmont.
      </>,
    ],
    clientsHeading: "Previous clients and employers",
    keyResultsHeading: "Key results",
    careerHeading: "Career",
    careerProse:
      "Andersen has over ten years of experience delivering production software, from state-critical systems at Netcompany to AI optimisation and LLM systems at Visma. Through Synergy Software he currently works with Medicinex and boliganalyse.ai; most recently he delivered GenAI services for children and teachers for Egmont.",
    careerCurrent: "Current positions",
    careerPast: "Previous positions",
    educationHeading: "Education and languages",
    education: [
      "MSc Computer Science, IT University of Copenhagen, 2019-2021. GPA 11.0/12 (top 10%).",
      "BSc Computer Science, IT University of Copenhagen, 2016-2019. Electives in machine learning and security.",
    ],
    languagesLabel: "Languages",
    languages: "Danish, English",
    projectsHeading: "Projects and companies",
    pressHeading: "Publications and coverage",
    talksLabel: "Talks and teaching",
    receptionHeading: "Reception",
    testimonialsHeading: "Testimonials",
    faqHeading: "Frequently asked questions",
    comparisonHeading: "What is the difference between an AI adviser and an AI engineer?",
    comparisonCols: ["", "AI adviser", "AI engineer"],
    referencesHeading: "References",
    externalHeading: "External links",
    infobox: {
      nationality: ["Nationality", "Danish"],
      residence: ["Based in", "Copenhagen"],
      education: ["Education", "MSc Computer Science, IT University of Copenhagen"],
      title: ["Title", "AI engineer and software architect"],
      employer: ["Employer", "Copenhagen Energy Trading"],
      company: ["Company", `Synergy Software (CVR ${CONTACT.cvr})`],
      knownFor: ["Known for", "Power exchange platform built solo in 4 months; AI agents in production"],
      email: ["E-mail", CONTACT.email],
      phone: ["Phone", CONTACT.phone],
      website: ["Website", "www.mikkelkajandersen.dk"],
    },
    faq: FAQ_EN,
    switchLabel: "Læs denne side på dansk",
    switchPath: "/om-mig",
  },
} as const;

const Refs = ({ ids }: { ids: readonly number[] }) => (
  <sup className="ml-0.5">
    {ids.map((n) => (
      <a
        key={n}
        href={`#ref-${n}`}
        className="text-link hover:text-link-hover transition-colors"
      >
        [{n}]
      </a>
    ))}
  </sup>
);

const SectionHeading = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h2 id={id} className="text-2xl md:text-3xl font-bold text-white mb-4">
    {children}
  </h2>
);

const AnchorPage = ({ lang }: { lang: Lang }) => {
  const t = STRINGS[lang];

  const infoboxRows = [
    t.infobox.nationality,
    t.infobox.residence,
    t.infobox.education,
    t.infobox.title,
    t.infobox.employer,
    t.infobox.company,
    t.infobox.knownFor,
    t.infobox.email,
    t.infobox.phone,
    t.infobox.website,
  ];

  return (
    <div className="min-h-screen bg-card flex flex-col">
      <article className="pt-28 md:pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-8">
            {/* Wiki-style infobox: stacks on top on mobile, right column on desktop */}
            <aside
              className="order-first lg:order-last"
              aria-label={lang === "da" ? "Faktaboks" : "Infobox"}
            >
              <div className="glass-light rounded-2xl p-5 border border-accent/10 lg:sticky lg:top-24">
                <img
                  src="/img/profile_pic.jpg"
                  alt="Mikkel Kaj Andersen"
                  className="rounded-xl w-full mb-4"
                />
                <p className="text-center text-white font-bold mb-4">
                  Mikkel Kaj Andersen
                </p>
                <dl className="text-sm space-y-2">
                  {infoboxRows.map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[100px_1fr] gap-2">
                      <dt className="text-gray-400">{label}</dt>
                      <dd className="text-gray-200 break-words">
                        {label === "E-mail" ? (
                          <a href={`mailto:${value}`} className="text-link hover:text-link-hover transition-colors">{value}</a>
                        ) : label === "Telefon" || label === "Phone" ? (
                          <a href={`tel:${String(value).replace(/ /g, "")}`} className="text-link hover:text-link-hover transition-colors">{value}</a>
                        ) : label === "Hjemmeside" || label === "Website" ? (
                          <Link to="/" className="text-link hover:text-link-hover transition-colors">{value}</Link>
                        ) : (
                          value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>

            {/* Main column */}
            <div className="space-y-10 min-w-0">
              <header>
                <p className="text-accent font-medium mb-3">{t.eyebrow}</p>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Mikkel Kaj Andersen
                </h1>
                {t.intro.map((p, i) => (
                  <p key={i} className="text-base md:text-lg text-gray-200 leading-relaxed mb-3">
                    {p}
                    <Refs ids={i === 0 ? [6] : [1, 2]} />
                  </p>
                ))}
                <p className="mt-2">
                  <Link
                    to={t.switchPath}
                    className="text-link hover:text-link-hover transition-colors text-sm"
                  >
                    {t.switchLabel}
                  </Link>
                </p>
              </header>

              {/* Stat strip */}
              <section aria-label={lang === "da" ? "Nøgletal" : "Key numbers"}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {STATS.map((s) => (
                    <div key={s.da} className="glass-light rounded-2xl p-4 text-center">
                      <div className="text-xl md:text-2xl font-bold text-accent">
                        {lang === "da" ? s.value : s.valueEn}
                      </div>
                      <div className="text-xs md:text-sm text-gray-300 mt-1">
                        {s[lang]}
                        <Refs ids={s.refs} />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section aria-labelledby="clients">
                <SectionHeading id="clients">{t.clientsHeading}</SectionHeading>
                <ul className="flex flex-wrap gap-2">
                  {CLIENTS.map((name) => (
                    <li key={name} className="glass rounded-full px-4 py-1.5 text-sm text-gray-200">
                      {name}
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="key-results">
                <SectionHeading id="key-results">{t.keyResultsHeading}</SectionHeading>
                <ul className="space-y-4">
                  {KEY_RESULTS.map((r) => (
                    <li key={r.value} className="glass-light rounded-2xl p-5">
                      <span className="text-accent font-bold">
                        {lang === "da" ? r.value : r.valueEn}
                      </span>
                      <span className="text-gray-200"> · {r[lang]}</span>
                      <Refs ids={r.refs} />
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="career">
                <SectionHeading id="career">{t.careerHeading}</SectionHeading>
                <p className="text-gray-200 leading-relaxed mb-5">{t.careerProse}</p>
                {(["current", "past"] as const).map((group) => (
                  <div key={group} className="mb-6">
                    <h3 className="text-lg font-bold text-accent mb-3">
                      {group === "current" ? t.careerCurrent : t.careerPast}
                    </h3>
                    <ul className="space-y-4">
                      {CAREER.filter((c) => c.current === (group === "current")).map((c) => (
                        <li key={c.org + c.period} className="text-gray-200">
                          <p className="font-bold text-white">
                            {c.role[lang]}, {c.org}{" "}
                            <span className="font-normal text-gray-400">({c.period})</span>
                          </p>
                          <p className="leading-relaxed">{c.note[lang]}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              <section aria-labelledby="education">
                <SectionHeading id="education">{t.educationHeading}</SectionHeading>
                <ul className="list-disc list-outside pl-5 space-y-2 text-gray-200">
                  {t.education.map((e) => (
                    <li key={e.slice(0, 24)}>
                      {e}
                      <Refs ids={[2]} />
                    </li>
                  ))}
                </ul>
                <p className="text-gray-200 mt-3">
                  <span className="font-bold text-white">{t.languagesLabel}:</span> {t.languages}
                </p>
              </section>

              <section aria-labelledby="projects">
                <SectionHeading id="projects">{t.projectsHeading}</SectionHeading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PROJECTS.map((p) => (
                    <div key={p.en} className="glass-light rounded-2xl p-4 text-gray-200">
                      {p[lang]}
                    </div>
                  ))}
                </div>
              </section>

              <section aria-labelledby="press">
                <SectionHeading id="press">{t.pressHeading}</SectionHeading>
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
                        {p.datePublished ? ` (${p.datePublished.slice(0, 4)})` : ""}: {p.headline}
                      </a>
                      {!p.aboutPerson && (
                        <span className="text-gray-400">
                          {" "}
                          {lang === "da"
                            ? "- annonsørindhold om Tripletex' AI-support; nævner ikke Mikkel ved navn"
                            : "- sponsored content about Tripletex's AI support; does not name Mikkel"}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
                <h3 className="text-lg font-bold text-white mt-6 mb-2">{t.talksLabel}</h3>
                <ul className="list-disc list-outside pl-5 space-y-2 text-gray-200">
                  {TALKS.map((p) => (
                    <li key={p.en}>{p[lang]}</li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="reception">
                <SectionHeading id="reception">{t.receptionHeading}</SectionHeading>
                <ul className="space-y-3">
                  {RECEPTION.map((r) => (
                    <li key={r.name} className="text-gray-200">
                      "{r.quote}"
                      <Refs ids={r.refs} />
                      <span className="text-gray-400">
                        {" "}
                        - {r.name}, {r.role[lang]}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="testimonials">
                <SectionHeading id="testimonials">{t.testimonialsHeading}</SectionHeading>
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
                        <span className="text-white font-medium">{tm.name}</span>, {tm.title}, {tm.company}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section aria-labelledby="faq">
                <SectionHeading id="faq">{t.faqHeading}</SectionHeading>
                <dl className="space-y-5">
                  {t.faq.map((f) => (
                    <div key={f.question}>
                      <dt className="font-bold text-white mb-1">{f.question}</dt>
                      <dd className="text-gray-200 leading-relaxed">{f.answer}</dd>
                    </div>
                  ))}
                </dl>

                <h3 className="text-lg font-bold text-white mt-8 mb-3">{t.comparisonHeading}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-gray-200 border-separate border-spacing-0">
                    <thead>
                      <tr>
                        {t.comparisonCols.map((col, i) => (
                          <th
                            key={col || "dim"}
                            scope="col"
                            className={`pb-2 pr-4 border-b border-accent/20 ${i > 0 ? "text-accent" : ""}`}
                          >
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {COMPARISON.map((row) => (
                        <tr key={row.dimension.en}>
                          <th scope="row" className="py-3 pr-4 align-top font-medium text-white border-b border-border/20">
                            {row.dimension[lang]}
                          </th>
                          <td className="py-3 pr-4 align-top border-b border-border/20">{row.advisor[lang]}</td>
                          <td className="py-3 align-top border-b border-border/20">{row.engineer[lang]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section aria-labelledby="references">
                <SectionHeading id="references">{t.referencesHeading}</SectionHeading>
                <ol className="list-decimal list-outside pl-5 space-y-2 text-gray-200 text-sm">
                  {REFERENCES.map((r) => (
                    <li key={r.id} id={`ref-${r.id}`}>
                      {r.url ? (
                        r.internal ? (
                          <Link to={r.url} className="text-link hover:text-link-hover transition-colors">
                            {r[lang]}
                          </Link>
                        ) : (
                          <a
                            href={r.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-link hover:text-link-hover transition-colors"
                          >
                            {r[lang]}
                          </a>
                        )
                      ) : (
                        r[lang]
                      )}
                    </li>
                  ))}
                </ol>
              </section>

              <section aria-labelledby="external">
                <SectionHeading id="external">{t.externalHeading}</SectionHeading>
                <ul className="list-disc list-outside pl-5 space-y-2">
                  <li>
                    <a href={SAME_AS[0]} target="_blank" rel="noopener noreferrer" className="text-link hover:text-link-hover transition-colors">
                      LinkedIn: Mikkel Kaj Andersen
                    </a>
                  </li>
                  <li>
                    <a href={SAME_AS[1]} target="_blank" rel="noopener noreferrer" className="text-link hover:text-link-hover transition-colors">
                      GitHub: mikkel-kaj
                    </a>
                  </li>
                  <li>
                    <Link to="/" className="text-link hover:text-link-hover transition-colors">
                      www.mikkelkajandersen.dk
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default AnchorPage;
