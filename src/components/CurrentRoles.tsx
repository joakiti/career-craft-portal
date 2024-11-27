import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FreelanceCard from "@/components/FreelanceCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CurrentRoles = () => {
    const ref = useScrollAnimation();
    
    return (
        <div ref={ref} className="container max-w-7xl mx-auto px-4 opacity-0">
            <div className="space-y-6">
                <h2 className="text-3xl font-extrabold text-white">Current Roles</h2>

                {/* Tech Lead Role */}
                <Card className="bg-card-lighter border-gray-700 p-8">
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <h3 className="text-2xl font-extrabold text-link mb-2">Tech Lead & AI Developer</h3>
                            <p className="text-xl font-bold text-accent mb-1">VISMA</p>
                            <p className="text-gray-200 font-medium">Aug 2023 - Present</p>
                        </div>
                        <img
                            src="/img/visma_logo.jpg"
                            alt="VISMA Logo"
                            className="w-16 h-16 object-contain"
                        />
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-xl font-bold text-accent mb-3">Current Achievements</h4>
                                <ul className="list-disc list-inside text-gray-100 space-y-2 font-medium">
                                    <li>
                                        Tech Lead for workforce planning team and manager of two developers, focusing on:
                                        <ul className="list-disc list-inside ml-6 mt-2">
                                            <li>
                                                Architecting an advanced Automatic Rostering system addressing the <strong>NP-Hard Nurse Scheduling Problem</strong>.
                                            </li>
                                            <li>
                                                Developing a service to automatically assign employees to shifts, optimizing workforce utilization while adhering to competency requirements and labor regulations.
                                            </li>
                                            <li>
                                                Enabling planners to generate high-quality rosters, significantly reducing manual planning time and improving employee satisfaction.
                                            </li>
                                            <li>
                                                Utilizing advanced algorithms and AI to solve complex scheduling challenges.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Led a 4-person team in Norway for Tripletex, the largest self-service accounting SaaS firm in the country, achieving:
                                        <ul className="list-disc list-inside ml-6 mt-2">
                                            <li>
                                                Building specialized LLM models for financial reporting and data visualization using Chain-of-Thought prompting.
                                            </li>
                                            <li>
                                                Including a custom RAG setup with vector search and re-ranking, handling over 100,000 customer queries with more than 80% accuracy.
                                            </li>
                                            <li>
                                                Implementing a GPT-4 based AI assistant providing 24/7 customer support, with 80% success rate in resolving tickets.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-accent mb-3">Algorithm & Technical Excellence</h4>
                                <ul className="list-disc list-inside text-gray-100 space-y-2 font-medium">
                                    <li>
                                        Architected heuristic-based optimization solvers for hospital work rosters, implementing complex scheduling algorithms.
                                    </li>
                                    <li>
                                        Developed 12 MIP solvers using Google OR-Tools for rapid feasibility assessments.
                                    </li>
                                    <li>
                                        Implemented sophisticated scoring rankers and candidate selection algorithms, achieving a 40% accuracy improvement.
                                    </li>
                                    <li>
                                        Designed and deployed serverless infrastructure using CloudFormation, Docker, S3, and Lambda.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {["Java", "Python", "ML", "Azure", "AWS", "LLMs", "RAG", "Algorithms", "OR-Tools", "CloudFormation", "Docker"].map((tech) => (
                                <Badge key={tech} variant="secondary" className="bg-card text-gray-100 font-medium">
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