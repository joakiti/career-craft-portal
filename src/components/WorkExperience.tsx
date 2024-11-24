import SimpleWorkExperienceItem from "./SimpleWorkExperienceItem";

const WorkExperience = () => {
    return (
        <section id="professional-experience" className="py-16 bg-card-lighter px-4">
            <div className="container max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Professional Experience</h2>
                <div className="space-y-8">
                    <SimpleWorkExperienceItem
                        company="VISMA"
                        role="AI Tech Lead / Team Lead"
                        period="Aug 2023 - Present"
                        defaultOpen={true}
                        responsibilities={[
                            "Led a 4-man team in Norway for the biggest self-service accounting SaaS firm for 4 months.",
                            "As lead developer, planned and drove the AI infrastructure and application, and mentored junior engineers.",
                            "Developed support agent with 85% self-service rate using custom RAG setup with vector search",
                            "Work featured in national television and publications",
                            "Tech lead for work-roster team and personnel manager for two developers",
                            "Successfully led and delivered six consultancy project offers"
                        ]}
                        technologies={["Java", "Python", "ML", "Azure", "AWS", "LLMs", "RAG"]}
                    />

                    <SimpleWorkExperienceItem
                        company="VISMA"
                        role="AI Developer"
                        period="May 2022 - Aug 2023"
                        responsibilities={[
                            "Developed heuristic-based optimization solver for hospital work rosters",
                            "Implemented 12 different MIP solvers using Google OR tools",
                            "Led PostNord project resulting in 6 million NOK yearly contract",
                            "Architected serverless infrastructure using CloudFormation, Docker, S3, and Lambda",
                            "Improved single-person assignment accuracy by 40%",
                            "Enhanced re-scheduling capabilities",
                            "Optimized performance through improved caching and build processes"
                        ]}
                        technologies={["Java", "Python", "AWS", "CloudFormation", "Docker", "OR-Tools", "Lambda"]}
                    />

                    <SimpleWorkExperienceItem
                        company="VISMA"
                        role="Software Developer"
                        period="Oct 2020 - May 2022"
                        responsibilities={[
                            "Reduced Visma HR central loading time from 10-30 seconds to 100-500ms",
                            "Led engineering transition from e-Boks to Mit.dk",
                            "Developed MyVisma app for Android and iOS using Xamarin",
                            "Presented engineering projects to C-level executives"
                        ]}
                        technologies={["C#", "Angular", "Xamarin", "T-SQL", "DB2", "Realm DB"]}
                    />

                    <SimpleWorkExperienceItem
                        company="SYNERGY SOFTWARE"
                        role="Software Engineer & Founder"
                        period="May 2022 - Present"
                        responsibilities={[
                            "Mainframe migration to AWS, requiring changes in most deployed codebases",
                            "Maintain a data-processing project with a T-SQL database and BI products using C#",
                            "Developed custom solution for GoDream (Danish gift-card provider)",
                            "Built on .NET with EFCore ORM",
                            "PostgreSQL database implementation",
                            "AWS infrastructure deployment"
                        ]}
                        technologies={[".NET", "C#", "AWS", "PostgreSQL", "EFCore", "T-SQL", "BI"]}
                    />

                    <SimpleWorkExperienceItem
                        company="IT-UNIVERSITY OF COPENHAGEN"
                        role="Teaching Assistant"
                        period="Jan 2018 - Jan 2021"
                        responsibilities={[
                            "Conducted workshops and lectures in courses including:",
                            "Operating Systems and C",
                            "Algorithm Design",
                            "Analysis, Design, and Software Architecture",
                            "Introduction to Database and Design",
                            "Prototyping of Interactive Technologies",
                            "StudyLab (Help for all courses)"
                        ]}
                        technologies={["C", "Algorithms", "Architecture", "Databases", "Teaching"]}
                    />

                    <SimpleWorkExperienceItem
                        company="NETCOMPANY"
                        role="Part-time Consultant"
                        period="Aug 2019 - Oct 2020"
                        responsibilities={[
                            "Consultant on state-critical systems: Boligstøtte and Social Pension Kommune",
                            "Developed systems handling multi-million annual payments",
                            "Tech stack included Java with Spring and Hibernate",
                            "OracleDB with T-SQL syntax",
                            "Frontend in React and Thymeleaf"
                        ]}
                        technologies={["Java", "Spring", "Hibernate", "React", "OracleDB", "T-SQL"]}
                    />

                    <SimpleWorkExperienceItem
                        company="IT-MINDS"
                        role="Part-time Consultant"
                        period="Feb 2019 - Aug 2019"
                        responsibilities={[
                            "Developed features for DSV using Azure cloud services",
                            "Integrated and extended C-code for micro devices at HPNow"
                        ]}
                        technologies={["C", "Azure", "Cloud Services"]}
                    />

                    <SimpleWorkExperienceItem
                        company="KEYLANE"
                        role="Part-time Developer"
                        period="Jan 2018 - Feb 2019"
                        responsibilities={[
                            "Developed in-house git server for visualizing branch status and DB statistics",
                            "Created comprehensive front-end testing project using Selenium",
                            "Maintained front-end and back-end systems using Java and MySQL"
                        ]}
                        technologies={["Java", "MySQL", "Selenium", "Git"]}
                    />
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;