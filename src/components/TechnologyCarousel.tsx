import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";
import ImageWithFallback from "./ui/image-with-fallback";
import { Brain, Code } from "lucide-react";
import { Button } from "./ui/button";

interface Technology {
    name: string;
    logo: string;
    tooltip: string;
    category: 'development' | 'ai_and_data';
    position?: { x: number; y: number };
}

const technologies: Technology[] = [
    { 
        name: "Java", 
        logo: "/img/tech/java.svg",
        tooltip: "Built enterprise applications with Spring Boot at Netcompany and Keylane, along with experience from many other projects. Was my primary language in competitive programming.",
        category: 'development',
        position: { x: -200, y: -100 }
    },
    { 
        name: "C#", 
        logo: "/img/tech/csharp.svg",
        tooltip: "6 years of experience in C# development. Developed .NET applications as a fullstack developer at Visma Enterprise with microservices architecture, specializing in API development with EFCore and other tools. Completed various freelance projects with C#.",
        category: 'development',
        position: { x: -150, y: 0 }
    },
    { 
        name: "Python", 
        logo: "/img/tech/python.svg",
        tooltip: "Auxillary developer in Python building web server applications, algorithm development, infrastructure and APIs with Django and Flask.",
        category: 'development',
        position: { x: -100, y: 100 }
    },
    { 
        name: "Flutter", 
        logo: "/img/tech/flutter.svg",
        tooltip: "All of my freelance projects have been built with Flutter except 'The Tattoo Archive'.",
        category: 'development',
        position: { x: -50, y: 150 }
    },
    { 
        name: "TypeScript", 
        logo: "/img/tech/typescript.svg",
        tooltip: "Strong expertise in type-safe JavaScript development and modern frontend frameworks.",
        category: 'development',
        position: { x: 0, y: -150 }
    },
    { 
        name: "React", 
        logo: "/img/tech/react.svg",
        tooltip: "Proficient in building responsive and performant web applications with React and its ecosystem.",
        category: 'development',
        position: { x: 50, y: -100 }
    },
    { 
        name: "AWS", 
        logo: "/img/tech/aws.svg",
        tooltip: "AWS Developer Assosciate with experience in designing and implementing cloud infrastructure at Visma Resolve and various freelance projects.",
        category: 'development',
        position: { x: 100, y: -50 }
    },
    { 
        name: "Docker", 
        logo: "/img/tech/docker.svg",
        tooltip: "Containerization and orchestration of applications using Docker at Visma.",
        category: 'development',
        position: { x: 0, y: 0 }
    },
    { 
        name: "CI/CD", 
        logo: "/img/tech/cicd.svg",
        tooltip: "Implementation of automated deployment pipelines using Jenkins, GitHub Actions, and AWS CodePipeline.",
        category: 'development',
        position: { x: 50, y: 50 }
    },
    { 
        name: "Azure", 
        logo: "/img/tech/azure.svg",
        tooltip: "Experience with Azure cloud services and integration with Microsoft ecosystem.",
        category: 'development',
        position: { x: 100, y: 0 }
    },
    { 
        name: "Entity Framework", 
        logo: "/img/tech/ef.svg",
        tooltip: "Used during ORM development and database migration setup.",
        category: 'development',
        position: { x: 200, y: 0 }
    },
    { 
        name: "Spring Boot", 
        logo: "/img/tech/spring.svg",
        tooltip: "Worked on enterprise applications with Spring Boot at Netcompany and Keylane.",
        category: 'development',
        position: { x: 250, y: 50 }
    },
    { 
        name: "PostgreSQL", 
        logo: "/img/tech/postgresql.svg",
        tooltip: "Database design, optimization, and management in PostgreSQL/MySql/T-SQL, DynamoDB, and Redis.",
        category: 'ai_and_data',
        position: { x: 0, y: 0 }
    },
    { 
        name: "Algorithm Design", 
        logo: "/img/tech/predictive_modeling.svg",
        tooltip: "Expert in designing and implementing complex algorithms for optimization problems, including roster optimization, constraint satisfaction, and mathematical programming.",
        category: 'ai_and_data',
        position: { x: 50, y: 50 }
    },
    { 
        name: "Predictive Modeling", 
        logo: "/img/tech/predictive_modeling.svg",
        tooltip: "Skilled in creating various machine learning models, such as logistic regression, decision trees, and neural networks.",
        category: 'ai_and_data',
        position: { x: 100, y: 0 }
    },
    { 
        name: "LLM and Deep Learning", 
        logo: "/img/tech/deep_learning.svg",
        tooltip: "Proficient in using tools/models like TensorFlow, PyTorch, BERT, GPT, and Llama 3, to develop and implement custom GenAI solutions.",
        category: 'ai_and_data',
        position: { x: 150, y: 50 }
    },
    { 
        name: "Optimization", 
        logo: "/img/tech/statistical_analysis.svg",
        tooltip: "Experience in implementing complex mathematical optimization models for workforce planning, including linear programming, integer programming, and constraint programming for automatic roster generation.",
        category: 'ai_and_data',
        position: { x: 200, y: 0 }
    },
    { 
        name: "Statistical Analysis", 
        logo: "/img/tech/statistical_analysis.svg",
        tooltip: "Experience with probabilistic programming and statistical methods.",
        category: 'ai_and_data',
        position: { x: 250, y: 50 }
    }
];

interface CategoryButton {
    id: string;
    label: string;
    icon: React.ReactNode;
    categories: Technology['category'][];
}

const categoryButtons: CategoryButton[] = [
    {
        id: 'development',
        label: 'Development & Cloud',
        icon: <Code className="w-4 h-4" />,
        categories: ['development']
    },
    {
        id: 'ai_and_data',
        label: 'AI & Data',
        icon: <Brain className="w-4 h-4" />,
        categories: ['ai_and_data']
    }
];

const TechnologyItem = ({ tech, index }: { tech: Technology; index: number }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Only run animation on desktop screens
        if (window.innerWidth < 768) return;

        const updatePosition = () => {
            const time = Date.now() / 2000;
            const radius = 5;
            const offset = index * (Math.PI / 6);
            
            setPosition({
                x: Math.cos(time + offset) * radius,
                y: Math.sin(time + offset) * radius
            });
        };

        const intervalId = setInterval(updatePosition, 50);
        return () => clearInterval(intervalId);
    }, [index]);

    // Check if the name is long
    const isLongName = tech.name.length > 12;

    return (
        <TooltipProvider delayDuration={0}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div 
                        className={cn(
                            "flex flex-col items-center justify-start",
                            "p-1 md:p-4 rounded-lg",
                            "transition-all cursor-pointer relative",
                            "hover:scale-110 hover:z-10",
                            "text-white/90",
                            "h-[70px] md:h-auto", // Fixed height on mobile
                            isLongName ? "min-w-[60px]" : "min-w-[50px]" // Wider container for long names
                        )}
                        style={{
                            transform: `translate(${position.x}px, ${position.y}px)`,
                            transition: 'transform 0.1s ease-out'
                        }}
                    >
                        <div className="relative">
                            <ImageWithFallback
                                src={tech.logo}
                                alt={`${tech.name} logo`}
                                className="w-8 h-8 md:w-12 md:h-12 mb-1 md:mb-2"
                                fallbackClassName="w-8 h-8 md:w-12 md:h-12 mb-1 md:mb-2"
                            />
                        </div>
                        <span className={cn(
                            "leading-tight md:text-sm font-medium text-center break-words w-full",
                            isLongName ? "text-[8px]" : "text-[10px]" // Smaller text for long names
                        )}>
                            {tech.name}
                        </span>
                    </div>
                </TooltipTrigger>
                <TooltipContent 
                    className="max-w-[200px] md:max-w-xs bg-black/90 border-none"
                    side="top"
                >
                    <p className="text-xs md:text-sm text-white">{tech.tooltip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

const TechnologyCarousel = () => {
    return (
        <div className="w-full py-4 md:py-8">
            <div className="grid grid-cols-6 gap-0.5 md:gap-8 max-w-6xl mx-auto px-1 md:px-0">
                {technologies.map((tech, index) => (
                    <div key={tech.name} className="flex justify-center">
                        <TechnologyItem tech={tech} index={index} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnologyCarousel; 