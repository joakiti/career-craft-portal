import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 animate-fade-in">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Mikkel Kaj Andersen</h1>
          <p className="text-lg text-text-light mb-4">AI Tech Lead | Software Engineer | Problem Solver</p>
          <div className="flex justify-center gap-4 mb-8">
            <a href="mailto:mikkel_ander@hotmail.com" className="text-primary hover:text-accent transition-colors">
              mikkel_ander@hotmail.com
            </a>
            <span className="text-text-light">|</span>
            <a href="tel:+4521537395" className="text-primary hover:text-accent transition-colors">
              +45 21 53 73 95
            </a>
          </div>
          <p className="text-text max-w-3xl mx-auto leading-relaxed">
            As an accomplished AI Tech Lead with nearly a decade of experience, I specialize in delivering innovative software solutions across diverse domains. My expertise spans competitive programming, advanced algorithms, and machine learning, complemented by a proven track record of leading successful AI teams in international settings. I excel in solving complex technical challenges while maintaining a strong focus on end-user experience and practical implementation.
          </p>
        </div>
      </section>

      {/* Testimonials Section - Moved here */}
      <Testimonials />

      {/* Education Section */}
      <section className="py-16 bg-primary-light px-4 animate-slide-in">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Education</h2>
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-primary mb-2">IT-University of Copenhagen</h3>
              <p className="text-text-light mb-2">MSc in Computer Science | Aug. 2019 - Aug 2021</p>
              <p className="text-text">Advanced algorithms and optimization. GPA (top 10%): 11.00 / 12.00</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-primary mb-2">IT-University of Copenhagen</h3>
              <p className="text-text-light mb-2">BSc in Computer Science | Aug. 2016 - Aug 2019</p>
              <p className="text-text">General software engineering, with electives in Machine Learning and Security.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {["Java", "C#", ".NET", "Python", "JavaScript", "SQL", "Flutter", "Dart", "iOS", "Android", "HTML", "React", "CSS", "Scala", "C++", "F#", "TypeScript", "Maven", "Git"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {["Spring", "Entity Framework", "Pandas", "PyTorch"].map((framework) => (
                  <Badge key={framework} variant="secondary" className="text-sm">{framework}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-primary-light px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Professional Experience</h2>
          <div className="space-y-8">
            <Card className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">VISMA</h3>
                  <p className="text-text-light">AI Tech Lead / Team Lead</p>
                </div>
                <span className="text-text-light">Aug 2023 - Present</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-text">
                <li>Led a 4-man team in Norway for the biggest self-service accounting SaaS firm</li>
                <li>Planned and drove AI infrastructure and application development</li>
                <li>Achieved 85% self-service rate with custom RAG setup</li>
                <li>Tech lead in work-roster team and personnel manager</li>
              </ul>
            </Card>
            {/* Add more experience cards as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-8 bg-primary text-white text-center">
        <div className="container max-w-4xl mx-auto">
          <p className="mb-4">Let's Connect</p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/yourusername" className="hover:text-accent transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="mailto:mikkel_ander@hotmail.com" className="hover:text-accent transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
