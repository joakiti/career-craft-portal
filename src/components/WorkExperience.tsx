import SimpleWorkExperienceItem from "./SimpleWorkExperienceItem";

const WorkExperience = () => {
    return (
        <section id="professional-experience" className="py-16 bg-card-lighter px-4">
            <div className="container max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Erhvervserfaring</h2>
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-3 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" />

                    <div className="space-y-8">
                        {[
                            {
                                company: "COPENHAGEN ENERGY TRADING",
                                role: "Quant / High-Performance Computing",
                                period: "2026 - nu",
                                description: "Fuldtidsstilling med kvantitative systemer og high-performance computing inden for energihandel.",
                                responsibilities: [
                                    "Kvantitative systemer og high-performance computing inden for energihandel",
                                ],
                                technologies: [],
                            },
                            {
                                company: "ELLA EXCHANGE",
                                role: "CTO",
                                period: "Okt 2025 - Mar 2026",
                                defaultOpen: true,
                                isFeatured: true,
                                description: "Eneste tekniske ansættelse på en intraday-elbørs. Designede og leverede en komplet produktionsklar børsplatform fra bunden på 4 måneder.",
                                responsibilities: [
                                    "Byggede en lavlatens multi-proces C++23 matching engine med adskilte order-entry- og market-data-stier",
                                    "Implementerede aktørbaseret concurrency med std::jthread og egne lock-frie MPMC-køer",
                                    "Leverede Protobuf-serialiseret WebSocket-messaging og Auth0 JWT/JWKS-verifikation i C++-laget",
                                    "Leverede Go-backends til handel, nominering og settlement med gRPC, PostgreSQL og Temporal",
                                    "Opsatte bare-metal infrastruktur på Hetzner med Terraform og Ansible samt observability via OpenTelemetry"
                                ],
                                technologies: ["C++23", "uWebSockets", "Protobuf", "CMake", "vcpkg", "Go", "gRPC", "PostgreSQL", "Temporal", "Terraform", "Ansible", "OpenTelemetry"],
                            },
                            {
                                company: "VISMA",
                                role: "AI Tech Lead",
                                period: "Aug 2023 - Jan 2025",
                                description: "Som AI Tech Lead drev jeg udviklingen af AI-løsninger fra arkitektur til drift i tæt samarbejde med Product Management. Ud over alt under AI Developer-rollen stod jeg for følgende:",
                                responsibilities: [
                                    "Ledede teknisk strategi og implementering af AI-tjenester, inklusive arkitektur og CI/CD-pipelines",
                                    "Drev vidensdeling og mentoring i teamet med høje krav til kodekvalitet",
                                    "Udviklede en AI-supportagent med 85% selvbetjeningsgrad ved hjælp af RAG og vektorsøgning",
                                    "Stod for sprint-ceremonier og backlog-prioritering som agil lead for AI-teamet",
                                    "Oversatte forretningskrav til tekniske løsninger i samarbejde med kunderne",
                                    "Ansvar for cloud-infrastruktur på AWS og Azure med fokus på sikkerhed og skalerbarhed"
                                ],
                                technologies: ["Python", "Java", "AWS", "Azure", "ML/AI", "LLMs", "RAG", "CI/CD", "Terraform"],
                            },
                            {
                                company: "VISMA",
                                role: "AI Developer",
                                period: "Maj 2022 - Aug 2023",
                                description: "Udviklede optimeringsalgoritmer til vagtplaner for hospitaler med forskellige solver-tilgange og performanceforbedringer gennem matematisk modellering.",
                                responsibilities: [
                                    "Arbejdede på en heuristisk optimeringsmotor til vagtplaner for hospitaler og ældrepleje, med dyb OO-design, memory management og performanceoptimering i Java/Python",
                                    "Implementerede scoring-rankers, kandidatudvælgelse og constraints og stod for algoritmens arkitektur",
                                    "Implementerede 12 forskellige MIP-solvere med Google OR-Tools til hurtig feasibility-afklaring",
                                    "Cloud-arkitekt på teamet og gennemførte migreringen fra TeamCity til GitHub Actions",
                                    "Service Owner og Security Engineer med ansvar for produktets stabilitet",
                                    "Udviklingsansvarlig for PostNord, vores første store kunde: soloopgave med +40% nøjagtighed, performanceforbedringer (caching og buildprocesser) samt projektledelse",
                                    "Byggede og vedligeholdt serverless infrastruktur med CloudFormation, Docker, S3 og Lambda til test og deployment"
                                ],
                                technologies: ["Java", "Python", "AWS", "CloudFormation", "Docker", "OR-Tools", "Lambda"],
                            },
                            {
                                company: "VISMA",
                                role: "Software Developer",
                                period: "Okt 2020 - Maj 2022",
                                description: "Full-stack-udvikling med fokus på performanceoptimering og mobiludvikling, på tværs af frontend og backend.",
                                responsibilities: [
                                    "T-SQL-optimering, API-udvikling og forretningslogik i 5 store projekter, primært i C#",
                                    "Reducerede central svartid i Visma HR fra 10-30 sekunder til 100-500 ms",
                                    "Teknisk ansvarlig for overgangen fra e-Boks til Mit.dk",
                                    "Udviklede MyVisma-appen til Android og iOS med Xamarin og RealmDB",
                                    "Implementerede nye features og fejlrettelser i Visma Enterprise",
                                ],
                                technologies: ["C#", "Angular", "Xamarin", "T-SQL", "DB2", "Realm DB"],
                            },
                            {
                                company: "SYNERGY SOFTWARE",
                                role: "Software Engineer og founder",
                                period: "Maj 2022 - nu",
                                description: "Egen konsulentvirksomhed med fokus på enterprise-løsninger, cloud-migreringer og skræddersyet software til kunder på tværs af brancher.",
                                responsibilities: [
                                    "Mainframe-migrering til AWS med ændringer i de fleste udrullede kodebaser",
                                    "Vedligeholder databehandlingsprojekt med T-SQL-database og BI-produkter i C#",
                                    "Udviklede skræddersyet løsning for GoDream (dansk gavekortudbyder)",
                                    "Bygget på .NET med EFCore",
                                    "PostgreSQL-database",
                                    "AWS-infrastruktur"
                                ],
                                technologies: [".NET", "C#", "AWS", "PostgreSQL", "EFCore", "T-SQL", "BI"],
                            },
                            {
                                company: "IT-UNIVERSITETET I KØBENHAVN",
                                role: "Teaching Assistant",
                                period: "Jan 2018 - Jan 2021",
                                description: "Undervisning og vejledning af studerende på en række datalogikurser, med praktisk fokus på programmering, algoritmer og systemdesign.",
                                responsibilities: [
                                    "Afholdt workshops og forelæsninger i kurser som:",
                                    "Operating Systems and C",
                                    "Algorithm Design",
                                    "Analysis, Design and Software Architecture",
                                    "Introduction to Database Design",
                                    "Prototyping of Interactive Technologies",
                                    "StudyLab (hjælp på tværs af kurser)"
                                ],
                                technologies: ["C", "Algorithms", "Architecture", "Databases", "Teaching"],
                            },
                            {
                                company: "NETCOMPANY",
                                role: "Konsulent (deltid)",
                                period: "Aug 2019 - Oct 2020",
                                description: "Arbejdede på statskritiske systemer i Java/Spring-økosystemet med robust backend og React-frontend.",
                                responsibilities: [
                                    "Konsulent på statskritiske systemer: Boligstøtte og Social Pension Kommune",
                                    "Udviklede systemer, der håndterer udbetalinger for millioner årligt",
                                    "Java med Spring og Hibernate",
                                    "OracleDB med T-SQL-syntaks",
                                    "Frontend i React og Thymeleaf"
                                ],
                                technologies: ["Java", "Spring", "Hibernate", "React", "OracleDB", "T-SQL"],
                            },
                            {
                                company: "IT-MINDS",
                                role: "Konsulent (deltid)",
                                period: "Feb 2019 - Aug 2019",
                                description: "Azure-cloududvikling og embedded programmering, fra cloudinfrastruktur til lavniveau-enhedskode.",
                                responsibilities: [
                                    "Udviklede features for DSV med Azure-cloudtjenester",
                                    "Integrerede og udvidede C-kode til mikroenheder hos HPNow"
                                ],
                                technologies: ["C", "Azure", "Cloud Services"],
                            },
                            {
                                company: "KEYLANE",
                                role: "Udvikler (deltid)",
                                period: "Jan 2018 - Feb 2019",
                                description: "Full-stack-udvikling af interne værktøjer og testinfrastruktur med Java-backend og automatiseret test.",
                                responsibilities: [
                                    "Udviklede intern git-server til visualisering af branch-status og DB-statistik",
                                    "Byggede omfattende frontend-testprojekt med Selenium",
                                    "Vedligeholdt frontend- og backend-systemer i Java og MySQL"
                                ],
                                technologies: ["Java", "MySQL", "Selenium", "Git"],
                            },
                        ].map((item, i) => (
                            <div key={`${item.company}-${item.role}`} className="relative pl-8 md:pl-14">
                                {/* Timeline dot */}
                                <div className={`absolute left-1.5 md:left-4 top-8 w-3 h-3 rounded-full border-2 ${
                                    i === 0
                                        ? "bg-accent border-accent shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                                        : "bg-accent/40 border-accent/30 shadow-[0_0_10px_rgba(251,191,36,0.15)]"
                                }`} />

                                <SimpleWorkExperienceItem
                                    company={item.company}
                                    role={item.role}
                                    period={item.period}
                                    defaultOpen={item.defaultOpen}
                                    description={item.description}
                                    responsibilities={item.responsibilities}
                                    technologies={item.technologies}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
