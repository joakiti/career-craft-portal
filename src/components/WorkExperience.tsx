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
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;