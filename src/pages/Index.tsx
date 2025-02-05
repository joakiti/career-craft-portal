import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import ImageWithFallback from "@/components/ui/image-with-fallback";
import { Brain, Code, Database, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
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
            <div className="space-y-6">
              <div className="text-accent font-medium mb-4">
                Senior Software Engineer & AI Solutions Architect
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Enterprise Solutions Through Technical Excellence
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Specializing in AI implementation, healthcare optimization, and enterprise-grade technical solutions. 
                Proven track record of delivering complex projects for industry leaders.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-primary px-8"
                  onClick={() => document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Schedule Consultation
                </Button>
                <Link 
                  to="/profile" 
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-accent/20 text-accent hover:bg-accent/10 transition-colors"
                >
                  View Credentials
                </Link>
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

      {/* Core Competencies */}
      <section className="py-16 px-4 bg-card-lighter">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-accent/10 transition-all duration-300">
              <CardHeader>
                <Brain className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-xl text-white">AI & ML Solutions</CardTitle>
                <p className="text-gray-400">
                  Implementing advanced AI systems with 85%+ accuracy in production environments
                </p>
              </CardHeader>
            </Card>
            <Card className="bg-card border-accent/10 transition-all duration-300">
              <CardHeader>
                <Code className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-xl text-white">Technical Architecture</CardTitle>
                <p className="text-gray-400">
                  Designing scalable solutions for enterprise-level applications
                </p>
              </CardHeader>
            </Card>
            <Card className="bg-card border-accent/10 transition-all duration-300">
              <CardHeader>
                <Timer className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-xl text-white">Optimization Expertise</CardTitle>
                <p className="text-gray-400">
                  Delivering efficient solutions for complex business challenges
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation-section" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Strategic Technical Consultation
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Leverage decade-long expertise in AI, cloud architecture, and enterprise solutions to transform your technical infrastructure.
          </p>
          <div className="bg-card-lighter p-8 rounded-xl border border-accent/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Project Consultation</h3>
            <p className="text-gray-300 mb-6">
              Currently accepting select projects for Q2 2024. Schedule a consultation to discuss your technical requirements and potential solutions.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Client Portfolio */}
      <section className="py-16 px-4 bg-card-lighter">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Enterprise Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <img src="/img/companies/resolve.svg" alt="Resolve" className="h-12 mx-auto opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/img/companies/visma.svg" alt="Visma" className="h-12 mx-auto opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/img/companies/tripletex.svg" alt="Tripletex" className="h-12 mx-auto opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/img/companies/netcompany.svg" alt="Netcompany" className="h-12 mx-auto opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;