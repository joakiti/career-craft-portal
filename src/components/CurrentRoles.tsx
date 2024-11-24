import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FreelanceCard from "@/components/FreelanceCard";

const CurrentRoles = () => {
    return (
        <div className="container max-w-7xl mx-auto px-4">
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Current Roles</h2>

                {/* Tech Lead Role */}
                <Card className="bg-card-lighter border-gray-700 p-8">
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <h3 className="text-xl font-bold text-link mb-2">Tech Lead & AI Developer</h3>
                            <p className="text-lg text-accent mb-1">VISMA</p>
                            <p className="text-gray-400">Aug 2023 - Present</p>
                        </div>
                        <img
                            src="/img/Visma_logo.png"
                            alt="VISMA Logo"
                            className="w-16 h-16 object-contain"
                        />
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold text-accent mb-3">Current Achievements</h4>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>Led a 4-man team in Norway for the biggest self-service accounting SaaS firm.</li>
                                    <li>Developed custom RAG setup with vector search and re-ranking, achieving 85%
                                        self-service rate.
                                    </li>
                                    <li>Tech lead for work-roster team and personnel manager for two developers.</li>
                                    <li>Successfully led and delivered six consultancy project offers.</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-accent mb-3">Algorithm & Technical Excellence</h4>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>Architected heuristic-based optimization solver for hospital work rosters,
                                        implementing complex algorithms for scheduling optimization.
                                    </li>
                                    <li>Developed 12 different MIP solvers using Google OR tools for rapid feasibility
                                        assessment.
                                    </li>
                                    <li>Implemented sophisticated scoring rankers and candidate selection algorithms.</li>
                                    <li>Achieved 40% accuracy improvement in single-person assignment algorithms.</li>
                                    <li>Designed and implemented serverless infrastructure using CloudFormation, Docker, S3,
                                        and Lambda.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {["Java", "Python", "ML", "Azure", "AWS", "LLMs", "RAG", "Algorithms", "OR-Tools", "CloudFormation", "Docker"].map((tech) => (
                                <Badge key={tech} variant="secondary" className="bg-card text-gray-300">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </Card>

                {/* Freelancer Role */}
                <FreelanceCard/>
            </div>
        </div>
    );
};

export default CurrentRoles;
