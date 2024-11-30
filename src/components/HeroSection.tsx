import SocialLinks from "./SocialLinks";
import AboutSection from "./AboutSection";
import Testimonials from "./Testimonials";
import ImageWithFallback from "./ui/image-with-fallback";
import ContactForm from "./ContactForm";
import { Code, Brain, Cloud, Database, HelpCircle } from "lucide-react";
import { Button } from "./ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";

interface HeroSectionProps {
    scrollToExperience: () => void;
}

// Extract TechnologyItem component to reduce file size
const TechnologyItem = ({ tech }: { tech: { name: string; logo: string; tooltip: string } }) => (
    <TooltipProvider delayDuration={0}>
        <Tooltip>
            <TooltipTrigger asChild>
                <div className="flex flex-col items-center p-3 bg-card rounded-lg hover:bg-card-lighter transition-colors cursor-pointer relative group">
                    <div className="relative">
                        <ImageWithFallback
                            src={tech.logo}
                            alt={`${tech.name} logo`}
                            className="w-8 h-8 mb-2"
                            fallbackClassName="w-8 h-8 mb-2"
                        />
                        <div className="absolute -top-2 -right-2 bg-accent/2 rounded-full p-1">
                            <HelpCircle className="w-3 h-3 text-accent" />
                        </div>
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

// Extract TechnologyCategory component to reduce file size
const TechnologyCategory = ({ category, icon, items }: { 
    category: string; 
    icon: React.ReactNode; 
    items: Array<{ name: string; logo: string; tooltip: string }> 
}) => (
    <div className="space-y-4">
        <div className="flex items-center gap-2">
            {icon}
            <h4 className="text-lg font-semibold text-accent">{category}</h4>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {items.map((tech) => (
                <TechnologyItem key={tech.name} tech={tech} />
            ))}
        </div>
    </div>
);

const HeroSection = ({scrollToExperience}: HeroSectionProps) => {
    const technologies = [
        {
            category: "Backend & Frontend Development",
            icon: <Code className="w-5 h-5 text-accent mb-2" />,
            items: [
                { 
                    name: "Java", 
                    logo: "/img/tech/java.svg",
                    tooltip: "Built enterprise applications with Spring Boot at Netcompany and Keylane, along with experience from many other projects. Was my primary language in competitive programming."
                },
                { 
                    name: "C#", 
                    logo: "/img/tech/csharp.svg",
                    tooltip: "6 years of experience in C# development. Developed .NET applications as a fullstack developer at Visma Enterprise with microservices architecture, specializing in API development with EFCore and other tools. Completed various freelance projects with C#."
                },
                { 
                    name: "Python", 
                    logo: "/img/tech/python.svg",
                    tooltip: "Auxillary developer in Python building web server applications and APIs with Django and Flask"
                },
                { 
                    name: "Flutter", 
                    logo: "/img/tech/flutter.svg",
                    tooltip: "All of my freelance projects have been built with Flutter except 'The Tattoo Archive'."
                },
                { 
                    name: "TypeScript", 
                    logo: "/img/tech/typescript.svg",
                    tooltip: "Strong expertise in type-safe JavaScript development and modern frontend frameworks."
                },
                { 
                    name: "React", 
                    logo: "/img/tech/react.svg",
                    tooltip: "Proficient in building responsive and performant web applications with React and its ecosystem."
                }
            ]
        },
        {
            category: "Cloud & DevOps",
            icon: <Cloud className="w-5 h-5 text-accent mb-2" />,
            items: [
                { 
                    name: "AWS (certified)", 
                    logo: "/img/tech/aws.svg",
                    tooltip: "Certified AWS Solutions Architect with experience in designing and implementing cloud infrastructure at Visma Resolve and various freelance projects."
                },
                { 
                    name: "Docker", 
                    logo: "/img/tech/docker.svg",
                    tooltip: "Containerization and orchestration of applications using Docker at Visma."
                },
                { 
                    name: "CI/CD", 
                    logo: "/img/tech/cicd.svg",
                    tooltip: "Implementation of automated deployment pipelines using Jenkins, GitHub Actions, and AWS CodePipeline."
                },
                { 
                    name: "Azure (occasional)", 
                    logo: "/img/tech/azure.svg",
                    tooltip: "Experience with Azure cloud services and integration with Microsoft ecosystem."
                },
                { 
                    name: "Monitoring", 
                    logo: "/img/tech/monitoring.svg",
                    tooltip: "Proficient in building dashboards to monitor product lifecycles from end to end, analyzing logs and errors to ensure product reliability and performance in tools like Prometheus, Grafana, and CloudWatch."
                }
            ]
        },
        {
            category: "Predictive Modeling & AI",
            icon: <Brain className="w-5 h-5 text-accent mb-2" />,
            items: [
                { 
                    name: "Predictive Modeling", 
                    logo: "/img/tech/predictive_modeling.svg",
                    tooltip: "Highly proficient in building both supervised and unsupervised machine learning models, including logistic regression, KNN, GBM, decision trees, random forests, neural networks, SVM, K-means, PCA, etc."
                },
                { 
                    name: "LLM and Deep Learning", 
                    logo: "/img/tech/deep_learning.svg",
                    tooltip: "Proficient in using tools/models like TensorFlow, PyTorch, BERT, GPT, and Llama 3, to develop and implement custom GenAI solutions."
                },
                { 
                    name: "Statistical Analysis", 
                    logo: "/img/tech/statistical_analysis.svg",
                    tooltip: "Experience with probabilistic programming and statistical methods"
                },
            ]
        },
        {
            category: "Data Engineering",
            icon: <Database className="w-5 h-5 text-accent mb-2" />,
            items: [
                { 
                    name: "PostgreSQL", 
                    logo: "/img/tech/postgresql.svg",
                    tooltip: "Database design, optimization, and management in PostgreSQL/MySql/T-SQL, DynamoDB, and Redis"
                },
                { 
                    name: "Entity Framework", 
                    logo: "/img/tech/ef.svg",
                    tooltip: "Used during ORM development and database migration setup"
                },
                { 
                    name: "Spring Boot", 
                    logo: "/img/tech/spring.svg",
                    tooltip: "Worked on enterprise applications with Spring Boot at Netcompany and Keylane."
                },
            ]
        }
    ];

    return (
        <section className="py-12 px-4 animate-fade-in">
            <div className="container max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-4 space-y-6">
                        <div className="bg-card-lighter rounded-2xl p-8">
                            <ImageWithFallback
                                src="/img/profile_pic.png"
                                alt="Profile picture"
                                className="rounded-2xl shadow-xl w-full h-auto object-cover mb-6"
                                fallbackSrc="https://images.unsplash.com/photo-1518770660439-4636190af475"
                                fallbackClassName="w-full h-[300px] rounded-2xl"
                            />
                            <h1 className="text-3xl font-bold mb-2 text-white">Mikkel Kaj Andersen</h1>
                            <p className="text-gray-400 mb-6">Father | Tech Lead | Freelancer</p>
                            <div className="flex flex-wrap gap-4 mb-6">
                                <a href="mailto:mikkel_ander@hotmail.com"
                                   className="text-link hover:text-link-hover transition-colors">
                                    mikkel_ander@hotmail.com
                                </a>
                                <a href="tel:+4521537395" className="text-link hover:text-link-hover transition-colors">
                                    +45 21 53 73 95
                                </a>
                            </div>
                            <div className="flex gap-4">
                                <SocialLinks/>
                            </div>
                        </div>

                        <div className="bg-card-lighter rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-6">Technologies & Expertise</h3>
                            <div className="space-y-8">
                                {technologies.map((category, index) => (
                                    <TechnologyCategory 
                                        key={index} 
                                        category={category.category} 
                                        icon={category.icon} 
                                        items={category.items} 
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-8 space-y-6">
                        <AboutSection/>
                        <Testimonials/>
                        
                        {/* Personal CTA Section */}
                        <div className="mt-12 p-8 bg-card-lighter rounded-xl border border-accent/20 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-white mb-4 text-accent">A Personal Note</h3>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                I'll be honest - balancing freelancing alongside a full-time position might seem unusual. But it's truly my passion. 
                                Running my own company while delivering value to both my full-time employer and freelance clients brings me immense satisfaction. 
                                It allows me to live out my entrepreneurial dreams while maintaining the stability and growth opportunities of a permanent role.
                            </p>

                            <div className="space-y-4">
                                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-4 bg-card rounded-lg border border-accent/10">
                                    <div className="text-gray-300 italic">
                                        "I hope you'll consider partnering with me on your next tech project. I bring not just technical expertise, 
                                        but genuine enthusiasm and dedication to every collaboration."
                                        <div className="mt-2 text-accent">- Mikkel</div>
                                    </div>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-12 space-y-8">
                            <button
                                onClick={scrollToExperience}
                                className="text-link hover:text-link-hover transition-colors cursor-pointer inline-flex items-center gap-2"
                            >
                                Explore more
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;