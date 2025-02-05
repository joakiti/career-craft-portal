import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import ImageWithFallback from "@/components/ui/image-with-fallback";
import { Brain, Code, Database, Sparkles, Timer, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-card">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 text-accent font-semibold mb-4">
                <Sparkles className="w-5 h-5" />
                <span>Senior Software Engineer & AI Developer</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Transform Your Tech Vision into Reality
              </h1>
              <p className="text-lg text-gray-300">
                With a decade of experience in AI, healthcare optimization, and complex technical solutions, 
                I help companies leverage cutting-edge technology to solve their toughest challenges.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-primary px-8 animate-pulse"
                  onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Boost Your Project →
                </Button>
                <Link 
                  to="/profile" 
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-accent/20 text-accent hover:bg-accent/10 transition-colors"
                >
                  View Full Profile
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

      {/* Value Proposition Cards */}
      <section className="py-16 px-4 bg-card-lighter">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-accent/20 hover:border-accent/40 transition-all hover:scale-105">
              <CardHeader>
                <Trophy className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-xl text-white">Proven Track Record</CardTitle>
                <CardDescription className="text-gray-400">
                  Successfully led AI teams and healthcare optimization projects at industry leaders like Visma and Tripletex
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-accent/20 hover:border-accent/40 transition-all hover:scale-105">
              <CardHeader>
                <Brain className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-xl text-white">AI & ML Expertise</CardTitle>
                <CardDescription className="text-gray-400">
                  Specialized in LLMs, RAG systems, and advanced algorithms with 80%+ accuracy in production
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-accent/20 hover:border-accent/40 transition-all hover:scale-105">
              <CardHeader>
                <Timer className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-xl text-white">Quick Implementation</CardTitle>
                <CardDescription className="text-gray-400">
                  Rapid development and deployment of solutions that drive immediate business value
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Elevate Your Technical Projects?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't let technical challenges hold your business back. With expertise in AI, cloud architecture, and enterprise solutions, 
            I can help you build robust, scalable systems that drive real results.
          </p>
          <div className="bg-card-lighter p-8 rounded-xl border border-accent/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-accent mb-4">Limited Availability</h3>
            <p className="text-gray-300 mb-6">
              I'm currently accepting new projects for Q2 2024. Schedule a consultation now to discuss how we can transform your technical challenges into opportunities.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Companies I've Worked With Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Companies I've Worked With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <img src="/img/companies/resolve.svg" alt="Resolve" className="h-12 mx-auto" />
            <img src="/img/companies/visma.svg" alt="Visma" className="h-12 mx-auto" />
            <img src="/img/companies/tripletex.svg" alt="Tripletex" className="h-12 mx-auto" />
            <img src="/img/companies/netcompany.svg" alt="Netcompany" className="h-12 mx-auto" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-card-lighter">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">What Clients Say</h2>
          <div className="space-y-8">
            <blockquote className="bg-card p-6 rounded-lg">
              <p className="text-gray-300 mb-4">
                "Mikkel has consistently impressed us with his exceptional skills and efficiency. His ability to collaborate effectively across teams is unmatched."
              </p>
              <footer className="text-gray-400">- Morten Nørgaard Larsen, CTO, Visma Enterprise A/S</footer>
            </blockquote>
            <blockquote className="bg-card p-6 rounded-lg">
              <p className="text-gray-300 mb-4">
                "Mikkel transitioned into a Tech Lead role due to his exceptional technical deliveries and leadership abilities."
              </p>
              <footer className="text-gray-400">- Martin Sommerseth, Managing Director, Resolve</footer>
            </blockquote>
            <blockquote className="bg-card p-6 rounded-lg">
              <p className="text-gray-300 mb-4">
                "Mikkel's work on Automatic Rostering received positive feedback from all stakeholders involved."
              </p>
              <footer className="text-gray-400">- Stian Vale, Manager, Resolve</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
