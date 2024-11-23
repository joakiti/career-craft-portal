import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Testimonials from "@/components/Testimonials";
import FreelanceCard from "@/components/FreelanceCard";
import Education from "@/components/Education";

const Index = () => {
  const scrollToExperience = () => {
    const element = document.getElementById('professional-experience');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-card text-white">
      {/* Hero Section */}
      <section className="py-12 px-4 animate-fade-in">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 bg-card-lighter rounded-2xl p-8">
              <img 
                src="/lovable-uploads/6c02bf6f-70b1-4852-999e-4ec283d50201.png" 
                alt="Profile picture" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover mb-6"
              />
              <h1 className="text-3xl font-bold mb-2 text-white">Mikkel Kaj Andersen 👋</h1>
              <p className="text-gray-400 mb-6">AI Tech Lead | Software Engineer | Problem Solver</p>
              <div className="flex flex-wrap gap-4 mb-6">
                <a href="mailto:mikkel_ander@hotmail.com" className="text-link hover:text-link-hover transition-colors">
                  mikkel_ander@hotmail.com
                </a>
                <a href="tel:+4521537395" className="text-link hover:text-link-hover transition-colors">
                  +45 21 53 73 95
                </a>
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/yourusername" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://linkedin.com/in/yourusername" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - Bio and Experience */}
            <div className="md:col-span-8 space-y-6">
              <div className="bg-card-lighter rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-white">About Me</h2>
                <p className="text-gray-300 leading-relaxed">
                  As an accomplished AI Tech Lead with nearly a decade of experience, I specialize in delivering innovative software solutions across diverse domains. My expertise spans competitive programming, advanced algorithms, and machine learning, complemented by a proven track record of leading successful AI teams in international settings. I excel in solving complex technical challenges while maintaining a strong focus on end-user experience and practical implementation.
                </p>
              </div>

              {/* Current Roles Section */}
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
                      src="/company-logo-placeholder.png" 
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
                          <li>Developed custom RAG setup with vector search and re-ranking, achieving 85% self-service rate.</li>
                          <li>Tech lead for work-roster team and personnel manager for two developers.</li>
                          <li>Successfully led and delivered six consultancy project offers.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-accent mb-3">Algorithm & Technical Excellence</h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                          <li>Architected heuristic-based optimization solver for hospital work rosters, implementing complex algorithms for scheduling optimization.</li>
                          <li>Developed 12 different MIP solvers using Google OR tools for rapid feasibility assessment.</li>
                          <li>Implemented sophisticated scoring rankers and candidate selection algorithms.</li>
                          <li>Achieved 40% accuracy improvement in single-person assignment algorithms.</li>
                          <li>Designed and implemented serverless infrastructure using CloudFormation, Docker, S3, and Lambda.</li>
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
                <FreelanceCard />
              </div>

              {/* See More Section */}
              <div className="text-center mt-8">
                <button 
                  onClick={scrollToExperience}
                  className="text-link hover:text-link-hover transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  Want to see more of my previous work?
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Education Section */}
      <Education />
      
      {/* Skills Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {["Java", "C#", ".NET", "Python", "JavaScript", "SQL", "Flutter", "Dart", "iOS", "Android", "HTML", "React", "CSS", "Scala", "C++", "F#", "TypeScript", "Maven", "Git"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm bg-card-lighter text-gray-300">{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {["Spring", "Entity Framework", "Pandas", "PyTorch"].map((framework) => (
                  <Badge key={framework} variant="secondary" className="text-sm bg-card-lighter text-gray-300">{framework}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="professional-experience" className="py-16 bg-card-lighter px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Professional Experience</h2>
          <div className="space-y-8">
            <Card className="p-6 bg-card border-gray-700">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">VISMA</h3>
                  <p className="text-gray-400">AI Tech Lead / Team Lead</p>
                </div>
                <span className="text-gray-400">Aug 2023 - Present</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Led a 4-man team in Norway for the biggest self-service accounting SaaS firm</li>
                <li>Planned and drove AI infrastructure and application development</li>
                <li>Achieved 85% self-service rate with custom RAG setup</li>
                <li>Tech lead in work-roster team and personnel manager</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
