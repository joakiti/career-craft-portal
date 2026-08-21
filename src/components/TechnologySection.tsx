import { Code, Brain, Cloud, Database } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";
import ImageWithFallback from "./ui/image-with-fallback";

const TechBadge = ({ tech }: { tech: { name: string; logo: string; tooltip: string } }) => (
    <TooltipProvider delayDuration={0}>
        <Tooltip>
            <TooltipTrigger asChild>
                <button
                    type="button"
                    className="inline-flex items-center gap-2 px-2.5 py-1.5 glass rounded-md hover:bg-card-lighter/80 transition-colors cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                    <ImageWithFallback
                        src={tech.logo}
                        alt={`${tech.name} logo`}
                        className="w-[22px] h-[22px] group-hover:scale-110 transition-transform"
                        fallbackClassName="w-[22px] h-[22px]"
                    />
                    <span className="text-[15px] text-gray-300 group-hover:text-white transition-colors whitespace-nowrap">{tech.name}</span>
                </button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs glass-light" side="top">
                <p className="text-sm">{tech.tooltip}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
);

const categoryColors: Record<string, string> = {
    "Sprog og frameworks": "bg-accent",
    "Cloud & DevOps": "bg-blue-400",
    "AI og modellering": "bg-green-400",
    "Data": "bg-purple-400",
};

const categories = [
    {
        name: "Sprog og frameworks",
        icon: <Code className="w-4 h-4 text-accent" />,
        items: [
            { name: "C++", logo: "/img/tech/cpp.svg", tooltip: "Byggede lavlatens C++23-børskomponenter hos Ella Exchange." },
            { name: "Java", logo: "/img/tech/java.svg", tooltip: "Enterprise-apps med Spring Boot hos Netcompany og Keylane." },
            { name: "C#", logo: "/img/tech/csharp.svg", tooltip: "6 år med .NET-microservices hos Visma Enterprise." },
            { name: "Python", logo: "/img/tech/python.svg", tooltip: "Algoritmer, ML og backend-tjenester med Django/Flask." },
            { name: "TypeScript", logo: "/img/tech/typescript.svg", tooltip: "Typesikker JS til React-frontends og Node-backends." },
            { name: "React", logo: "/img/tech/react.svg", tooltip: "Responsive, performante webapplikationer." },
            { name: "Flutter", logo: "/img/tech/flutter.svg", tooltip: "Alle freelance-mobilapps er bygget med Flutter." },
        ]
    },
    {
        name: "Cloud & DevOps",
        icon: <Cloud className="w-4 h-4 text-accent" />,
        items: [
            { name: "AWS", logo: "/img/tech/aws.svg", tooltip: "AWS Developer Associate. Lambda, S3, CloudFormation." },
            { name: "Docker", logo: "/img/tech/docker.svg", tooltip: "Containerisering hos Visma og i alle deployment-pipelines." },
            { name: "CI/CD", logo: "/img/tech/cicd.svg", tooltip: "Jenkins, GitHub Actions, AWS CodePipeline." },
            { name: "Azure", logo: "/img/tech/azure.svg", tooltip: "Azure-cloudtjenester og Microsoft-økosystemet." },
        ]
    },
    {
        name: "AI og modellering",
        icon: <Brain className="w-4 h-4 text-accent" />,
        items: [
            { name: "LLM / DL", logo: "/img/tech/deep_learning.svg", tooltip: "TensorFlow, PyTorch, BERT, GPT, Llama 3 - skræddersyet GenAI." },
            { name: "Algorithms", logo: "/img/tech/predictive_modeling.svg", tooltip: "Optimering, constraint satisfaction og matematisk programmering." },
            { name: "ML Models", logo: "/img/tech/predictive_modeling.svg", tooltip: "Logistisk regression, beslutningstræer, neurale netværk." },
        ]
    },
    {
        name: "Data",
        icon: <Database className="w-4 h-4 text-accent" />,
        items: [
            { name: "PostgreSQL", logo: "/img/tech/postgresql.svg", tooltip: "PostgreSQL, MySQL, T-SQL, DynamoDB, Redis." },
            { name: "EF Core", logo: "/img/tech/ef.svg", tooltip: "ORM-udvikling og databasemigreringer i .NET." },
            { name: "Spring", logo: "/img/tech/spring.svg", tooltip: "Enterprise-applikationer hos Netcompany og Keylane." },
        ]
    },
];

const TechnologySection = () => {
    return (
        <div className="glass-light rounded-xl p-5 border border-accent/10">
            <h3 className="text-lg font-bold text-white mb-4">Teknologier</h3>
            <div className="space-y-4">
                {categories.map((cat) => {
                    const dotColor = categoryColors[cat.name] || "bg-accent";
                    return (
                        <div key={cat.name}>
                            <div className="flex items-center gap-2 mb-2">
                                <div className={`w-2 h-2 rounded-full ${dotColor}`} />
                                {cat.icon}
                                <span className="text-[15px] font-medium text-gray-400">{cat.name}</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                {cat.items.map((tech) => (
                                    <TechBadge key={tech.name} tech={tech} />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TechnologySection;
