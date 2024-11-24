import {Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

const FreelanceCard = () => {
    return (
        <Card className="bg-card-lighter border-gray-700 p-8">
            <div className="flex items-start justify-between mb-6">
                <div>
                    <h3 className="text-2xl font-extrabold text-link mb-2">SYNERGY SOFTWARE</h3>
                    <p className="text-xl font-bold text-accent mb-1">Software Engineer & Founder</p>
                    <p className="text-gray-300">May 2022 - Present</p>
                </div>
                <div className="w-16 h-16 bg-card-lighter rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                </div>
            </div>

            <div className="space-y-6">
                <div>
                    <h4 className="text-xl font-bold text-accent mb-3">Mobile Applications</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Developed The Tattoo Archive for iOS and Android, featured in Danish media</li>
                        <li>Created Gas Money App - Automatic route price calculation using Google APIs and custom
                            Python scraper
                        </li>
                        <li>Built ScheduleIT for university scheduling</li>
                        <li>Innovative Push-Ups app using touch screen nose detection for counting</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-bold text-accent mb-3">Enterprise Solutions</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Successfully migrated mainframe systems to AWS infrastructure</li>
                        <li>Maintain data-processing project with T-SQL database and BI products using C#</li>
                        <li>Developed custom solution for GoDream (Danish gift-card provider):
                            <ul className="list-disc list-inside ml-6 mt-2">
                                <li>Built on .NET with EFCore ORM</li>
                                <li>PostgreSQL database implementation</li>
                                <li>AWS infrastructure deployment</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                    {[".NET", "C#", "AWS", "PostgreSQL", "EFCore", "iOS", "Android", "Python", "T-SQL", "BI"].map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-card text-gray-300">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default FreelanceCard;