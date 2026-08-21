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
                <h2 className="text-3xl font-extrabold text-white">Seneste erfaring</h2>

                <Card className="glass-light border-accent/10 p-8 relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="space-y-2 mb-4">
                            <div className="flex items-center gap-3">
                                <h3 className="text-2xl font-extrabold text-link">Quant og high-performance computing</h3>
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-pulse-dot" />
                                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                                </span>
                                <span className="text-xs text-emerald-400 font-medium">Nuværende</span>
                            </div>
                            <p className="text-xl font-bold text-accent">Copenhagen Energy Trading</p>
                            <p className="text-gray-200 font-medium">2026 - nu</p>
                        </div>
                        <p className="text-gray-100 font-medium">
                            Fuldtidsstilling med kvantitative systemer og high-performance computing inden for energihandel.
                        </p>
                    </div>
                </Card>

                <Card className="glass-light border-accent/10 p-8 relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="space-y-2 mb-6">
                            <div className="flex items-center gap-3">
                                <h3 className="text-2xl font-extrabold text-link">Selvstændig konsulent og founder</h3>
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-pulse-dot" />
                                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                                </span>
                                <span className="text-xs text-emerald-400 font-medium">Nuværende</span>
                            </div>
                            <p className="text-gray-200 font-medium">Mar 2026 - nu</p>
                        </div>

                        <ul className="list-disc list-inside text-gray-100 space-y-2 font-medium">
                            <li>Egmont: leverede GenAI-tjenester til børn og undervisere (afsluttet).</li>
                            <li>Medicinex: komplet medicin- og juraplatform med store backend- og frontend-kodebaser.</li>
                            <li>boliganalyse.ai: værktøj til analyse af lejligheder i Danmark.</li>
                        </ul>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {["AI", "GenAI", "Produktudvikling", "Konsulentarbejde", "Arkitektur"].map((tech) => (
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
                            <p className="text-gray-200 font-medium">Okt 2025 - Mar 2026</p>
                        </div>

                        <div className="space-y-4">
                            <p className="text-gray-100 font-medium">
                                Eneste tekniske ansættelse på en intraday-elbørs. Jeg designede og leverede en komplet produktionsklar børsplatform fra bunden på fire måneder.
                            </p>
                            <ul className="list-disc list-inside text-gray-100 space-y-2 font-medium">
                                <li>Byggede en lavlatens multi-proces C++23 trading engine med adskilte order-entry- og market-data-stier.</li>
                                <li>Implementerede aktørbaseret concurrency med <code>std::jthread</code> og egne lock-frie MPMC-køer.</li>
                                <li>Integrerede Protobuf over WebSockets, Auth0 JWT/JWKS-verifikation og compile-time produktkatalog.</li>
                                <li>Leverede Go-backends med gRPC, PostgreSQL og Temporal til handel, nominering og settlement.</li>
                                <li>Provisionerede bare-metal Hetzner-infrastruktur med Terraform og Ansible samt observability med OpenTelemetry.</li>
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
