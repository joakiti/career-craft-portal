import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const WorkExperience = () => {
  return (
    <section id="professional-experience" className="py-16 bg-card-lighter px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Professional Experience</h2>
        <div className="space-y-8">
          {/* VISMA AI Tech Lead Role */}
          <Card className="p-8 bg-card border-gray-700">
            <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">VISMA</h3>
                <p className="text-accent text-lg">AI Tech Lead / Team Lead</p>
                <p className="text-gray-400">Aug 2023 - Present</p>
              </div>
            </div>
            <div className="space-y-4">
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Led a 4-man team in Norway for the biggest self-service accounting SaaS firm for 4 months.</li>
                <li>As lead developer, planned and drove the AI infrastructure and application, and mentored junior engineers.</li>
                <li>Achievements:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                    <li>Developed support agent with 85% self-service rate using custom RAG setup with vector search</li>
                    <li>Work featured in national television and publications</li>
                    <li>Tech lead for work-roster team and personnel manager for two developers</li>
                    <li>Successfully led and delivered six consultancy project offers</li>
                  </ul>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Java", "Python", "ML", "Azure", "AWS", "LLMs", "RAG"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-card-lighter text-gray-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          {/* VISMA AI Developer Role */}
          <Card className="p-8 bg-card border-gray-700">
            <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">VISMA</h3>
                <p className="text-accent text-lg">AI Developer</p>
                <p className="text-gray-400">May 2022 - Aug 2023</p>
              </div>
            </div>
            <div className="space-y-4">
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Developed heuristic-based optimization solver for hospital work rosters</li>
                <li>Implemented 12 different MIP solvers using Google OR tools</li>
                <li>Led PostNord project resulting in 6 million NOK yearly contract:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                    <li>Improved single-person assignment accuracy by 40%</li>
                    <li>Enhanced re-scheduling capabilities</li>
                    <li>Optimized performance through improved caching and build processes</li>
                  </ul>
                </li>
                <li>Architected serverless infrastructure using CloudFormation, Docker, S3, and Lambda</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Java", "Python", "AWS", "CloudFormation", "Docker", "OR-Tools", "Lambda"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-card-lighter text-gray-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          {/* VISMA Software Developer Role */}
          <Card className="p-8 bg-card border-gray-700">
            <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">VISMA</h3>
                <p className="text-accent text-lg">Software Developer</p>
                <p className="text-gray-400">Oct 2020 - May 2022</p>
              </div>
            </div>
            <div className="space-y-4">
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Reduced Visma HR central loading time from 10-30 seconds to 100-500ms</li>
                <li>Led engineering transition from e-Boks to Mit.dk</li>
                <li>Developed MyVisma app for Android and iOS using Xamarin</li>
                <li>Presented engineering projects to C-level executives</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {["C#", "Angular", "Xamarin", "T-SQL", "DB2", "Realm DB"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-card-lighter text-gray-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          {/* Synergy Software Role */}
          <Card className="p-8 bg-card border-gray-700">
            <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">SYNERGY SOFTWARE</h3>
                <p className="text-accent text-lg">Software Engineer & Founder</p>
                <p className="text-gray-400">May 2022 - Present</p>
              </div>
            </div>
            <div className="space-y-4">
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Mainframe migration to AWS, requiring changes in most deployed codebases</li>
                <li>Maintain a data-processing project with a T-SQL database and BI products using C#</li>
                <li>Developed custom solution for GoDream (Danish gift-card provider):
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>Built on .NET with EFCore ORM</li>
                    <li>PostgreSQL database implementation</li>
                    <li>AWS infrastructure deployment</li>
                  </ul>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {[".NET", "C#", "AWS", "PostgreSQL", "EFCore", "T-SQL", "BI"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-card-lighter text-gray-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          {/* IT-University Role */}
          <Card className="p-8 bg-card border-gray-700">
            <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">IT-UNIVERSITY OF COPENHAGEN</h3>
                <p className="text-accent text-lg">Teaching Assistant</p>
                <p className="text-gray-400">Jan 2018 - Jan 2021</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">Conducted workshops and lectures in courses including:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Operating Systems and C</li>
                <li>Algorithm Design</li>
                <li>Analysis, Design, and Software Architecture</li>
                <li>Introduction to Database and Design</li>
                <li>Prototyping of Interactive Technologies</li>
                <li>StudyLab (Help for all courses)</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {["C", "Algorithms", "Architecture", "Databases", "Teaching"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-card-lighter text-gray-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          {/* Netcompany Role */}
          <Card className="p-8 bg-card border-gray-700">
            <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">NETCOMPANY</h3>
                <p className="text-accent text-lg">Part-time Consultant</p>
                <p className="text-gray-400">Aug 2019 - Oct 2020</p>
              </div>
            </div>
            <div className="space-y-4">
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Consultant on state-critical systems: Boligstøtte and Social Pension Kommune</li>
                <li>Developed systems handling multi-million annual payments</li>
                <li>Tech stack:
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>Java with Spring and Hibernate</li>
                    <li>OracleDB with T-SQL syntax</li>
                    <li>Frontend in React and Thymeleaf</li>
                  </ul>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Java", "Spring", "Hibernate", "React", "OracleDB", "T-SQL"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-card-lighter text-gray-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          {/* IT-Minds Role */}
          <Card className="p-8 bg-card border-gray-700">
            <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">IT-MINDS</h3>
                <p className="text-accent text-lg">Part-time Consultant</p>
                <p className="text-gray-400">Feb 2019 - Aug 2019</p>
              </div>
            </div>
            <div className="space-y-4">
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Developed features for DSV using Azure cloud services</li>
                <li>Integrated and extended C-code for micro devices at HPNow</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {["C", "Azure", "Cloud Services"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-card-lighter text-gray-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          {/* Keylane Role */}
          <Card className="p-8 bg-card border-gray-700">
            <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">KEYLANE</h3>
                <p className="text-accent text-lg">Part-time Developer</p>
                <p className="text-gray-400">Jan 2018 - Feb 2019</p>
              </div>
            </div>
            <div className="space-y-4">
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Developed in-house git server for visualizing branch status and DB statistics</li>
                <li>Created comprehensive front-end testing project using Selenium</li>
                <li>Maintained front-end and back-end systems using Java and MySQL</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Java", "MySQL", "Selenium", "Git"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-card-lighter text-gray-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
