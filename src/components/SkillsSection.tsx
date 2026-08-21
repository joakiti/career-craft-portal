import { Badge } from "@/components/ui/badge";
import { useReveal } from "@/hooks/useReveal";

const primarySkills = ["Java", "C#", "C++", "Python", "TypeScript", "React", "Flutter", "SQL"];
const secondarySkills = [".NET", "JavaScript", "Dart", "iOS", "Android", "HTML", "CSS", "Scala", "F#", "Maven", "Git"];
const frameworks = ["Spring", "Entity Framework", "Pandas", "PyTorch"];

const SkillsSection = () => {
    const { ref, revealClass } = useReveal<HTMLElement>();

    return (
        <section
            ref={ref}
            className={`py-16 px-4 bg-card ${revealClass}`}
        >
            <div className="container max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Languages & Frameworks</h3>
                        <div className="flex flex-wrap gap-2">
                            {primarySkills.map((skill) => (
                                <Badge key={skill} variant="secondary"
                                       className="text-sm bg-card-lighter text-gray-300 border border-accent/20 px-3 py-1 hover:bg-accent/10 hover:border-accent/30 hover:text-white transition-colors">
                                    {skill}
                                </Badge>
                            ))}
                            {secondarySkills.map((skill) => (
                                <Badge key={skill} variant="secondary"
                                       className="text-sm bg-card-lighter text-gray-300 hover:bg-accent/10 hover:border-accent/30 hover:text-white transition-colors">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Frameworks</h3>
                        <div className="flex flex-wrap gap-2">
                            {frameworks.map((framework) => (
                                <Badge key={framework} variant="secondary"
                                       className="text-sm bg-card-lighter text-gray-300 hover:bg-accent/10 hover:border-accent/30 hover:text-white transition-colors">
                                    {framework}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
