import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import ImageWithFallback from "@/components/ui/image-with-fallback";
import { Brain, Code, Database, Timer, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Index = () => {
  return (
    <div className="min-h-screen bg-card">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-accent font-medium mb-4">
                Senior Software Engineer & AI Solutions Architect
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Delivering High-Impact Technical Solutions
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Specialized in three core areas: Enterprise full-stack development, AI/ML implementation, and system architecture. Focused on delivering measurable results that drive business growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-primary px-8"
                  onClick={() => document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Schedule Consultation
                </Button>
                <Link 
                  to="/services" 
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-accent/20 text-accent hover:bg-accent/10 transition-colors"
                >
                  View Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-2xl font-bold text-accent">10+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">5</div>
                  <div className="text-sm text-gray-400">Enterprise Projects</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="/img/profile_pic.jpg"
                alt="Mikkel Kaj Andersen - Senior Software Engineer"
                className="rounded-2xl shadow-2xl"
                fallbackClassName="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-accent/10">
                <p className="text-white font-medium">10+ Years Industry Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 px-4 bg-card-lighter">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Specialized Technical Solutions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Expert delivery in three core areas, each with proven enterprise success and measurable outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-accent/10 hover:border-accent/30 transition-all group">
              <CardHeader>
                <Code className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-xl text-white">Full-Stack Development</CardTitle>
                <p className="text-gray-400">
                  Modern, scalable applications built with enterprise-grade technologies. Focus on maintainability and performance.
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-1" />
                    <span className="text-sm text-gray-300">TypeScript & React expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-1" />
                    <span className="text-sm text-gray-300">Cloud-native solutions</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link 
                  to="/services" 
                  className="text-sm text-accent hover:text-accent/80 inline-flex items-center group-hover:gap-2 transition-all"
                >
                  View Full-Stack Services <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-card border-accent/10 hover:border-accent/30 transition-all group">
              <CardHeader>
                <Brain className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-xl text-white">AI & ML Solutions</CardTitle>
                <p className="text-gray-400">
                  Custom AI implementations that solve specific business challenges. Specializing in LLMs and optimization algorithms.
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-1" />
                    <span className="text-sm text-gray-300">LLM-powered support systems with 80%+ accuracy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-1" />
                    <span className="text-sm text-gray-300">Custom ML models</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link 
                  to="/services" 
                  className="text-sm text-accent hover:text-accent/80 inline-flex items-center group-hover:gap-2 transition-all"
                >
                  View AI Solutions <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-card border-accent/10 hover:border-accent/30 transition-all group">
              <CardHeader>
                <Database className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-xl text-white">System Architecture</CardTitle>
                <p className="text-gray-400">
                  Cloud-native architectures and legacy system modernization. Professional within AWS infrastructure.
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-1" />
                    <span className="text-sm text-gray-300">Part of driving mainframe to cloud migrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-1" />
                    <span className="text-sm text-gray-300">Experienced service owner and security engineer on AWS</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link 
                  to="/services" 
                  className="text-sm text-accent hover:text-accent/80 inline-flex items-center group-hover:gap-2 transition-all"
                >
                  View Architecture Services <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/services"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-accent hover:bg-accent/90 text-primary transition-colors"
            >
              View Detailed Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Success Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Measurable Results</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Recent projects that demonstrate concrete business impact through technical innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card-lighter p-6 rounded-lg border border-accent/10 hover:border-accent/30 transition-all">
              <h3 className="text-accent font-medium mb-2">Tripletex (Norway)</h3>
              <p className="text-gray-300 text-sm">Built and deployed an AI support system handling 10,000+ monthly queries with 80%+ accuracy, ensuring company growth not blocked by support</p>
            </div>
            <div className="bg-card-lighter p-6 rounded-lg border border-accent/10 hover:border-accent/30 transition-all">
              <h3 className="text-accent font-medium mb-2">Visma Enterprise</h3>
              <p className="text-gray-300 text-sm">Optimized core system reducing loading times from 30s to 500ms, improving user satisfaction significantly</p>
            </div>
            <div className="bg-card-lighter p-6 rounded-lg border border-accent/10 hover:border-accent/30 transition-all">
              <h3 className="text-accent font-medium mb-2">GoDream</h3>
              <p className="text-gray-300 text-sm">Delivered a scalable gift-card platform processing 10,000+ transactions monthly with 99.9% uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation-section" className="py-20 px-4 bg-card-lighter">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Let's Solve Your Technical Challenges
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Looking for expert help with full-stack development, AI implementation, or system architecture? Let's discuss your specific needs and how I can help.
          </p>
          <div className="bg-card p-8 rounded-xl border border-accent/10 max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;