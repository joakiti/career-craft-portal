import SocialLinks from "./SocialLinks";
import AboutSection from "./AboutSection";
import Testimonials from "./Testimonials";
import ImageWithFallback from "./ui/image-with-fallback";
import ContactForm from "./ContactForm";
import { Code, Brain, Cloud, Database } from "lucide-react";
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

const HeroSection = ({scrollToExperience}: HeroSectionProps) => {
    const technologies = [
        {
            category: "Backend & Frontend Development",
            icon: <Code className="w-5 h-5 text-accent mb-2" />,
            items: [
                { 
                    name: "Java", 
                    logo: "/img/tech/java.svg",
                    tooltip: "Expert in building enterprise applications with Spring Boot and microservices architecture."
                },
                { 
                    name: "C#", 
                    logo: "/img/tech/csharp.svg",
                    tooltip: "Experienced in developing .NET applications and Azure cloud services."
                },
                { 
                    name: "Python", 
                    logo: "/img/tech/python.svg",
                    tooltip: "Skilled in developing web server applications and APIs with Django and Flask, and proficient in database management with PostgreSQL, DynamoDB, and Redis."
                },
                { 
                    name: "Flutter", 
                    logo: "/img/tech/flutter.svg",
                    tooltip: "Building cross-platform mobile applications with modern UI/UX principles."
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
                    tooltip: "Certified AWS Solutions Architect with experience in designing and implementing cloud infrastructure."
                },
                { 
                    name: "Docker", 
                    logo: "/img/tech/docker.svg",
                    tooltip: "Containerization and orchestration of applications using Docker and Kubernetes."
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
                    tooltip: "Setting up monitoring and alerting with tools like Prometheus, Grafana, and CloudWatch."
                }
            ]
        },
        {
            category: "ML & AI / Models",
            icon: <Brain className="w-5 h-5 text-accent mb-2" />,
            items: [
                { 
                    name: "PyTorch", 
                    logo: "/img/tech/pytorch.svg",
                    tooltip: "Deep learning model development and training for computer vision and NLP tasks."
                },
                { 
                    name: "TensorFlow", 
                    logo: "/img/tech/tensorflow.svg",
                    tooltip: "Building and deploying machine learning models at scale."
                },
                { 
                    name: "scikit-learn", 
                    logo: "/img/tech/sklearn.svg",
                    tooltip: "Implementation of classical machine learning algorithms and data preprocessing pipelines."
                },
                { 
                    name: "LLMs & RAG", 
                    logo: "/img/tech/llm.svg",
                    tooltip: "Working with large language models and implementing retrieval-augmented generation systems."
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
                    tooltip: "Database design, optimization, and management for large-scale applications."
                },
                { 
                    name: "Entity Framework", 
                    logo: "/img/tech/ef.svg",
                    tooltip: "ORM development and database migrations in .NET applications."
                },
                { 
                    name: "Spring Boot", 
                    logo: "/img/tech/redis.svg",
                    tooltip: "Building robust and scalable Java applications with Spring ecosystem."
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
                                    <div key={index} className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            {category.icon}
                                            <h4 className="text-lg font-semibold text-accent">{category.category}</h4>
                                        </div>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                            {category.items.map((tech) => (
                                                <TooltipProvider key={tech.name}>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <div className="flex flex-col items-center p-3 bg-card rounded-lg hover:bg-card-lighter transition-colors cursor-pointer">
                                                                <ImageWithFallback
                                                                    src={tech.logo}
                                                                    alt={`${tech.name} logo`}
                                                                    className="w-8 h-8 mb-2"
                                                                    fallbackClassName="w-8 h-8 mb-2"
                                                                />
                                                                <span className="text-sm text-gray-300 text-center">{tech.name}</span>
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="max-w-xs">
                                                            <p>{tech.tooltip}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-8 space-y-6">
                        <AboutSection/>
                        <Testimonials/>
                        
                        {/* New CTA Section */}
                        <div className="mt-12 p-8 bg-card-lighter rounded-xl border border-accent/20 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-white mb-4">Want to Join This List?</h3>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                🚀 <span className="text-accent font-semibold">Elevate Your Tech Vision</span> with Expert Solutions
                                <br />
                                Join the roster of successful companies I've collaborated with. With expertise in AI, cloud architecture, 
                                and full-stack development, I bring enterprise-grade solutions to ambitious projects.
                            </p>
                            <div className="space-y-4">
                                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-4 bg-card rounded-lg border border-accent/10">
                                    <div className="text-gray-300">
                                        <span className="text-accent">✓</span> Proven track record with industry leaders
                                        <br />
                                        <span className="text-accent">✓</span> Specialized in AI and cloud solutions
                                        <br />
                                        <span className="text-accent">✓</span> Rapid deployment and scalable architecture
                                    </div>
                                    <ContactForm />
                                </div>
                            </div>
                            <p className="text-gray-300 mt-6 leading-relaxed">
                                Although I'm currently engaged in a full-time position, I'm available for freelance projects up to <span className="font-semibold text-accent">30 hours a week</span>.
                            </p>
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