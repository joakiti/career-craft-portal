import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import ImageWithFallback from "./ui/image-with-fallback";
import { InfiniteSlider } from "./ui/infinite-slider";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { AnimatePresence, motion } from "framer-motion";

interface Technology {
    name: string;
    logo: string;
    bubble: string;
    category: 'core' | 'framework' | 'tool';
}

const technologies: Technology[] = [
    { name: "C++", logo: "/img/tech/cpp.svg", bubble: "Byggede en matching engine i C++23 hos Ella Exchange - lock-frie køer, aktørbaseret concurrency, hele pakken.", category: 'core' },
    { name: "Java", logo: "/img/tech/java.svg", bubble: "Mit foretrukne sprog til konkurrenceprogrammering. Enterprise-apps med Spring hos Netcompany og Keylane.", category: 'core' },
    { name: "C#", logo: "/img/tech/csharp.svg", bubble: "6 år med .NET-microservices hos Visma, EFCore-API'er og en stribe freelanceprojekter.", category: 'core' },
    { name: "Python", logo: "/img/tech/python.svg", bubble: "Mit go-to til algoritmer, ML-prototyper og hurtige backend-tjenester med Django/Flask.", category: 'core' },
    { name: "TypeScript", logo: "/img/tech/typescript.svg", bubble: "Typesikkerhed hele vejen. TS til både React-frontends og Node-backends.", category: 'core' },
    { name: "React", logo: "/img/tech/react.svg", bubble: "Denne portfolio er React! Responsive, performante webapps med React-økosystemet.", category: 'framework' },
    { name: "Flutter", logo: "/img/tech/flutter.svg", bubble: "Alle mine freelance-mobilapps er Flutter - Tattoo Archive, Gas Money, ScheduleIT.", category: 'framework' },
    { name: "Spring Boot", logo: "/img/tech/spring.svg", bubble: "Enterprise-Java hos Netcompany og Keylane - statskritiske systemer.", category: 'framework' },
    { name: "Entity Framework", logo: "/img/tech/ef.svg", bubble: "Min foretrukne ORM i .NET-verdenen. Brugt på flere Visma-projekter.", category: 'framework' },
    { name: "AWS", logo: "/img/tech/aws.svg", bubble: "AWS Developer Associate-certificeret. Serverless infrastruktur hos Visma med Lambda, S3 og CloudFormation.", category: 'tool' },
    { name: "Docker", logo: "/img/tech/docker.svg", bubble: "Containeriser alt. Brugt intensivt hos Visma og i alle mine deployment-pipelines.", category: 'tool' },
    { name: "CI/CD", logo: "/img/tech/cicd.svg", bubble: "Jenkins, GitHub Actions, AWS CodePipeline - jeg har sat automatiserede deploys op i dem alle.", category: 'tool' },
    { name: "Azure", logo: "/img/tech/azure.svg", bubble: "Azure-cloudtjenester til DSV-projekter og flere Visma-integrationer.", category: 'tool' },
    { name: "PostgreSQL", logo: "/img/tech/postgresql.svg", bubble: "Min foretrukne database. Har også arbejdet med MySQL, T-SQL, DynamoDB og Redis.", category: 'tool' },
    { name: "Algorithm Design", logo: "/img/tech/predictive_modeling.svg", bubble: "Vagtplansoptimering hos Visma, constraint satisfaction, matematisk programmering - det er min hjemmebane.", category: 'core' },
    { name: "LLM & Deep Learning", logo: "/img/tech/deep_learning.svg", bubble: "Byggede en AI-supportagent til Tripletex med 80%+ præcision med GPT, BERT og RAG-pipelines.", category: 'framework' },
    { name: "Optimization", logo: "/img/tech/statistical_analysis.svg", bubble: "12 forskellige MIP-solvere med OR-Tools til hospitalsvagtplaner. LP, IP, CP - det hele.", category: 'core' },
];

const ChatBubble = ({ text }: { text: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 8, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 4, scale: 0.97 }}
        transition={{ duration: 0.15 }}
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 pointer-events-none"
    >
        <div className="relative bg-card-lighter/95 backdrop-blur-md border border-accent/15 rounded-xl px-3.5 py-2.5 shadow-xl shadow-black/30 w-[220px] md:w-[260px]">
            <div className="absolute top-0 left-3 right-3 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            <p className="text-xs md:text-sm text-gray-200 leading-relaxed">
                {text}
            </p>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-card-lighter/95" />
        </div>
    </motion.div>
);

const TechIcon = ({ tech }: { tech: Technology }) => {
    const [active, setActive] = useState(false);

    const toggle = useCallback(() => setActive(prev => !prev), []);

    return (
        <div
            className="relative shrink-0"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            onClick={toggle}
        >
            <AnimatePresence>
                {active && <ChatBubble text={tech.bubble} />}
            </AnimatePresence>

            <button
                type="button"
                className="flex flex-col items-center gap-2 px-3 py-2 min-w-[64px] min-h-[64px] rounded-lg cursor-pointer hover:bg-accent/5 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={`${tech.name}: ${tech.bubble}`}
            >
                <ImageWithFallback
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform"
                    fallbackClassName="w-10 h-10 md:w-12 md:h-12"
                />
                <span className={cn(
                    "text-xs md:text-sm font-medium text-gray-300 group-hover:text-white transition-colors text-center whitespace-nowrap",
                    tech.name.length > 14 && "text-[10px] md:text-xs"
                )}>
                    {tech.name}
                </span>
            </button>
        </div>
    );
};

const TechnologyCarousel = () => {
    const reducedMotion = useReducedMotion();

    const row1 = technologies.filter((_, i) => i < 9);
    const row2 = technologies.filter((_, i) => i >= 9);

    if (reducedMotion) {
        return (
            <div className="w-full py-4">
                <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto px-4">
                    {technologies.map((tech) => (
                        <TechIcon key={tech.name} tech={tech} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="w-full py-4 relative edge-fade-x">
            <div className="space-y-2 pt-24">
                <InfiniteSlider gap={8} speed={35} speedOnHover={80}>
                    {row1.map((tech) => (
                        <TechIcon key={tech.name} tech={tech} />
                    ))}
                </InfiniteSlider>

                <InfiniteSlider gap={8} speed={30} speedOnHover={80} reverse>
                    {row2.map((tech) => (
                        <TechIcon key={tech.name} tech={tech} />
                    ))}
                </InfiniteSlider>
            </div>
        </div>
    );
};

export default TechnologyCarousel;
