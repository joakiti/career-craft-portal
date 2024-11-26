import SocialLinks from "./SocialLinks";
import AboutSection from "./AboutSection";
import Testimonials from "./Testimonials";
import ImageWithFallback from "./ui/image-with-fallback";
import ContactForm from "./ContactForm";
import { Code, Brain, Cloud, Database } from "lucide-react";

interface HeroSectionProps {
    scrollToExperience: () => void;
}

const HeroSection = ({scrollToExperience}: HeroSectionProps) => {
    const technologies = [
        {
            category: "Languages / Frameworks",
            icon: <Code className="w-5 h-5 text-accent mb-2" />,
            items: [
                { name: "Java", logo: "/img/tech/java.svg" },
                { name: "C#", logo: "/img/tech/csharp.svg" },
                { name: "Python", logo: "/img/tech/python.svg" },
                { name: "Flutter", logo: "/img/tech/flutter.svg" },
                { name: "TypeScript", logo: "/img/tech/typescript.svg" },
                { name: "React", logo: "/img/tech/react.svg" }
            ]
        },
        {
            category: "Cloud & DevOps",
            icon: <Cloud className="w-5 h-5 text-accent mb-2" />,
            items: [
                { name: "AWS (certified)", logo: "/img/tech/aws.svg" },
                { name: "Docker", logo: "/img/tech/docker.svg" },
                { name: "CI/CD", logo: "/img/tech/cicd.svg" },
                { name: "Azure (occasional)", logo: "/img/tech/azure.svg" }
            ]
        },
        {
            category: "ML & AI",
            icon: <Brain className="w-5 h-5 text-accent mb-2" />,
            items: [
                { name: "PyTorch", logo: "/img/tech/pytorch.svg" },
                { name: "TensorFlow", logo: "/img/tech/tensorflow.svg" },
                { name: "scikit-learn", logo: "/img/tech/sklearn.svg" },
                { name: "LLMs", logo: "/img/tech/llm.svg" },
                { name: "BERT", logo: "/img/tech/bert.svg" },
                { name: "Llama", logo: "/img/tech/llama.svg" }
            ]
        },
        {
            category: "Data Engineering",
            icon: <Database className="w-5 h-5 text-accent mb-2" />,
            items: [
                { name: "PostgreSQL", logo: "/img/tech/postgresql.svg" },
                { name: "Entity Framework", logo: "/img/tech/ef.svg" },
                { name: "Spring Boot", logo: "/img/tech/redis.svg" },
                { name: "Snowflake", logo: "/img/tech/snowflake.svg" },
                { name: "dbt", logo: "/img/tech/dbt.svg" },
                { name: "Django", logo: "/img/tech/django.svg" }
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
                                                <div key={tech.name}
                                                     className="flex flex-col items-center p-3 bg-card rounded-lg hover:bg-card-lighter transition-colors">
                                                    <ImageWithFallback
                                                        src={tech.logo}
                                                        alt={`${tech.name} logo`}
                                                        className="w-8 h-8 mb-2"
                                                        fallbackClassName="w-8 h-8 mb-2"
                                                    />
                                                    <span className="text-sm text-gray-300 text-center">{tech.name}</span>
                                                </div>
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

                        <div className="text-center mt-12 space-y-8">
                            <button
                                onClick={scrollToExperience}
                                className="text-link hover:text-link-hover transition-colors cursor-pointer inline-flex items-center gap-2"
                            >
                                Discover my journey and achievements
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
                            <div className="flex justify-center">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;