import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useReveal } from "@/hooks/useReveal";

const CurrentRoles = () => {
    const { ref, revealClass } = useReveal();

    return (
        <div
            ref={ref}
            className={`container max-w-7xl mx-auto px-4 ${revealClass}`}
        >
            <div className="space-y-6">
                <h2 className="text-3xl font-extrabold text-white">Recent Experience</h2>

                <Card className="glass-light border-accent/10 p-8 relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="space-y-2 mb-4">
                            <div className="flex items-center gap-3">
                                <h3 className="text-2xl font-extrabold text-link">Quant & High-Performance Computing</h3>
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-pulse-dot" />
                                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                                </span>
                                <span className="text-xs text-emerald-400 font-medium">Current</span>
                            </div>
                            <p className="text-xl font-bold text-accent">Copenhagen Energy Trading</p>
                            <p className="text-gray-200 font-medium">2026 - Present</p>
                        </div>
                        <p className="text-gray-100 font-medium">
                            Full-time role building quantitative systems and high-performance computing for energy trading.
                        </p>
                    </div>
                </Card>

                <Card className="glass-light border-accent/10 p-8 relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="space-y-2 mb-6">
                            <div className="flex items-center gap-3">
                                <h3 className="text-2xl font-extrabold text-link">Self-Employed Consultant and Founder</h3>
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-pulse-dot" />
                                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                                </span>
                                <span className="text-xs text-emerald-400 font-medium">Current</span>
                            </div>
                            <p className="text-gray-200 font-medium">Mar 2026 - Present</p>
                        </div>

                        <ul className="list-disc list-inside text-gray-100 space-y-2 font-medium">
                            <li>Egmont: delivered GenAI services for children and teachers (engagement completed).</li>
                            <li>Medicinex: Full medicine and law platform, including large backend and frontend codebases.</li>
                            <li>boliganalyse.ai: Tooling for apartment analysis in Denmark.</li>
                        </ul>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {["AI", "GenAI", "Product Development", "Consulting", "Architecture"].map((tech) => (
                                <Badge key={tech} variant="secondary" className="bg-card text-gray-100 font-medium hover:bg-accent/10 hover:border-accent/30 hover:text-white transition-colors">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </Card>

                <Card className="glass-light border-accent/10 p-8 relative overflow-hidden">
                    {/* Inset glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />
                    <div className="relative z-10">
                        <div className="space-y-2 mb-6">
                            <div className="flex items-center gap-3">
                                <h3 className="text-2xl font-extrabold text-link">CTO</h3>
                            </div>
                            <p className="text-xl font-bold text-accent">Ella Exchange</p>
                            <p className="text-gray-200 font-medium">Oct 2025 - Mar 2026</p>
                        </div>

                        <div className="space-y-4">
                            <p className="text-gray-100 font-medium">
                                Sole technical hire at an intraday power exchange. I designed and delivered a full production-grade exchange platform from scratch in four months.
                            </p>
                            <ul className="list-disc list-inside text-gray-100 space-y-2 font-medium">
                                <li>Built a low-latency multi-process C++23 trading engine with separated order-entry and market-data paths.</li>
                                <li>Implemented actor-based concurrency using <code>std::jthread</code> and custom lock-free MPMC queues.</li>
                                <li>Integrated Protobuf over WebSockets, Auth0 JWT/JWKS verification, and compile-time product catalogue logic.</li>
                                <li>Delivered Go backend services with gRPC, PostgreSQL, and Temporal for trade, nomination, and settlement workflows.</li>
                                <li>Provisioned bare-metal Hetzner infrastructure with Terraform and Ansible, and shipped observability with OpenTelemetry.</li>
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {["C++23", "uWebSockets", "Protobuf", "Go", "gRPC", "PostgreSQL", "Temporal", "Terraform", "Ansible", "OpenTelemetry"].map((tech) => (
                                    <Badge key={tech} variant="secondary" className="bg-card text-gray-100 font-medium hover:bg-accent/10 hover:border-accent/30 hover:text-white transition-colors">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default CurrentRoles;
