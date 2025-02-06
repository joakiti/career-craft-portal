import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";
import ImageWithFallback from "./ui/image-with-fallback";
import { HelpCircle } from "lucide-react";

interface Technology {
    name: string;
    logo: string;
    tooltip: string;
}

const technologies: Technology[] = [
    { 
        name: "Java", 
        logo: "/img/tech/java.svg",
        tooltip: "Built enterprise applications with Spring Boot at Netcompany and Keylane."
    },
    { 
        name: "C#", 
        logo: "/img/tech/csharp.svg",
        tooltip: "6 years of experience in C# development, specializing in API development with EFCore."
    },
    { 
        name: "Python", 
        logo: "/img/tech/python.svg",
        tooltip: "Building web server applications and APIs with Django and Flask."
    },
    { 
        name: "Flutter", 
        logo: "/img/tech/flutter.svg",
        tooltip: "Mobile app development expertise with Flutter."
    },
    { 
        name: "TypeScript", 
        logo: "/img/tech/typescript.svg",
        tooltip: "Strong expertise in type-safe JavaScript development."
    },
    { 
        name: "React", 
        logo: "/img/tech/react.svg",
        tooltip: "Building responsive web applications with React."
    },
    { 
        name: "AWS", 
        logo: "/img/tech/aws.svg",
        tooltip: "AWS Developer Associate with cloud infrastructure expertise."
    },
    { 
        name: "Docker", 
        logo: "/img/tech/docker.svg",
        tooltip: "Containerization and orchestration of applications."
    },
    { 
        name: "PostgreSQL", 
        logo: "/img/tech/postgresql.svg",
        tooltip: "Database design and optimization."
    },
    { 
        name: "Spring Boot", 
        logo: "/img/tech/spring.svg",
        tooltip: "Enterprise application development with Spring Boot."
    }
];

const TechnologyItem = ({ tech, style }: { tech: Technology; style?: React.CSSProperties }) => (
    <TooltipProvider delayDuration={0}>
        <Tooltip>
            <TooltipTrigger asChild>
                <div 
                    className={cn(
                        "flex flex-col items-center p-3 bg-card rounded-lg",
                        "hover:bg-card-lighter transition-all cursor-pointer relative group",
                        "transform hover:scale-110 hover:z-10"
                    )}
                    style={style}
                >
                    <div className="relative">
                        <ImageWithFallback
                            src={tech.logo}
                            alt={`${tech.name} logo`}
                            className="w-8 h-8 mb-2"
                            fallbackClassName="w-8 h-8 mb-2"
                        />
                    </div>
                    <span className="text-sm text-gray-300 text-center">{tech.name}</span>
                </div>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs bg-card-lighter">
                <p>{tech.tooltip}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
);

const TechnologyCarousel = () => {
    const [positions, setPositions] = useState<React.CSSProperties[]>([]);

    useEffect(() => {
        const updatePositions = () => {
            const newPositions = technologies.map((_, index) => {
                const angle = (index / technologies.length) * Math.PI * 2;
                const time = Date.now() / 4600; // Adjust speed by changing divisor
                const radius = 350; // Adjust size of the orbit
                
                return {
                    transform: `translate(${Math.cos(angle + time) * radius}px, ${Math.sin(angle + time) * radius/2}px)`,
                    transition: 'transform 0.1s ease-out',
                };
            });
            setPositions(newPositions);
        };

        const intervalId = setInterval(updatePositions, 50); // Adjust update frequency
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="relative w-full h-[500px] overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {technologies.map((tech, index) => (
                    <div
                        key={tech.name}
                        className="absolute"
                        style={positions[index]}
                    >
                        <TechnologyItem tech={tech} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnologyCarousel; 