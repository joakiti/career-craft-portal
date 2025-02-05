import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import ImageWithFallback from "@/components/ui/image-with-fallback";
import { Brain, Code, Database } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-card">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Elevate Your Tech Projects with Expert Consultancy
              </h1>
              <p className="text-lg text-gray-300">
                Senior Software Engineer & AI Developer with a decade of experience in complex technical solutions, 
                from healthcare optimization to cutting-edge AI implementations.
              </p>
              <div className="flex gap-4">
                <ContactForm />
                <Link 
                  to="/profile" 
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-accent/20 text-accent hover:bg-accent/10 transition-colors"
                >
                  View Profile →
                </Link>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <ImageWithFallback
                src="/img/profile_pic.jpg"
                alt="Profile"
                className="rounded-2xl shadow-2xl"
                fallbackClassName="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent/20 backdrop-blur-sm rounded-2xl p-4 border border-accent/30">
                <p className="text-white font-semibold">10+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-4 bg-card-lighter">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border border-accent/20 hover:border-accent/40 transition-colors">
              <Code className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Software Engineering</h3>
              <p className="text-gray-300">
                Full-stack development with modern technologies. Specializing in scalable, maintainable solutions.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-accent/20 hover:border-accent/40 transition-colors">
              <Brain className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">AI Development</h3>
              <p className="text-gray-300">
                Machine learning solutions, from predictive modeling to optimization algorithms.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-accent/20 hover:border-accent/40 transition-colors">
              <Database className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">System Architecture</h3>
              <p className="text-gray-300">
                Designing and implementing robust, scalable system architectures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card-lighter p-6 rounded-xl hover:scale-[1.02] transition-transform">
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered Roster Optimization</h3>
              <p className="text-gray-300 mb-4">
                Led the development of an AI solution for automatic roster generation, improving efficiency by 40%.
              </p>
              <div className="flex items-center text-accent">
                <span>Read more →</span>
              </div>
            </div>
            <div className="bg-card-lighter p-6 rounded-xl hover:scale-[1.02] transition-transform">
              <h3 className="text-xl font-bold text-white mb-3">Healthcare Systems Integration</h3>
              <p className="text-gray-300 mb-4">
                Developed and implemented healthcare optimization solutions for major institutions.
              </p>
              <div className="flex items-center text-accent">
                <span>Read more →</span>
              </div>
            </div>
            <div className="bg-card-lighter p-6 rounded-xl hover:scale-[1.02] transition-transform">
              <h3 className="text-xl font-bold text-white mb-3">Machine Learning Pipeline</h3>
              <p className="text-gray-300 mb-4">
                Built end-to-end ML pipelines for predictive analytics and data processing.
              </p>
              <div className="flex items-center text-accent">
                <span>Read more →</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;