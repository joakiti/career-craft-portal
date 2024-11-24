import {Badge} from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SkillsSection = () => {
    const ref = useScrollAnimation();
    
    return (
        <section ref={ref} className="py-16 px-4 bg-card opacity-0">
            <div className="container max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Programming</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Java", "C#", ".NET", "Python", "JavaScript", "SQL", "Flutter", "Dart", "iOS", "Android", "HTML", "React", "CSS", "Scala", "C++", "F#", "TypeScript", "Maven", "Git"].map((skill) => (
                                <Badge key={skill} variant="secondary"
                                       className="text-sm bg-card-lighter text-gray-300">{skill}</Badge>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Frameworks</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Spring", "Entity Framework", "Pandas", "PyTorch"].map((framework) => (
                                <Badge key={framework} variant="secondary"
                                       className="text-sm bg-card-lighter text-gray-300">{framework}</Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection; 
