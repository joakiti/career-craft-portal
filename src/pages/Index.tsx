import { Link } from "react-router-dom";
import ConsultationForm from "@/components/ConsultationForm";
import ImageWithFallback from "@/components/ui/image-with-fallback";
import { Brain, Code, Database, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

const Index = () => {
  const scrollToContact = () => {
    document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-card flex flex-col">
      {/* Hero Section - Updated padding to account for Navbar */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-7 space-y-4 md:space-y-5 relative z-10">
              <div className="text-accent text-sm md:text-base font-medium">
                Senior Software Engineer & AI Solutions Architect
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-white">
                Delivering High-Impact Technical Solutions
              </h1>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
                Specialized in three core areas: Enterprise full-stack development, AI/ML implementation, and system architecture. Focused on delivering measurable results that drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <ConsultationForm size="default"/>
                <Link 
                  to="/services" 
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-accent/20 text-accent hover:bg-accent/10 transition-colors text-sm"
                >
                  View Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="flex gap-6 pt-4">
                <div>
                  <div className="text-lg md:text-xl font-bold text-accent">10+</div>
                  <div className="text-xs md:text-sm text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-lg md:text-xl font-bold text-accent">5</div>
                  <div className="text-xs md:text-sm text-gray-400">Enterprise Projects</div>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 relative md:-mt-12">
              <ImageWithFallback
                src="/img/profile_pic.jpg"
                alt="Mikkel Kaj Andersen - Senior Software Engineer"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                fallbackClassName="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-card/80 backdrop-blur-sm rounded-2xl p-3 border border-accent/10 hidden md:block">
                <p className="text-white text-sm font-medium">10+ Years Industry Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-12 md:py-16 px-4 bg-card">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Specialized Technical Solutions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Expert delivery in three core areas, each with proven enterprise success and measurable outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
                    <span className="text-sm text-gray-300">Industry expert in C# and Java Enterprise Development</span>
                  </li>
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
        </div>
      </section>

      {/* Recent Success Section */}
      <section className="py-12 md:py-16 px-4 bg-card-lighter">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Measurable Results</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Recent projects that demonstrate concrete business impact through technical innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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

      {/* Final Call to Action */}
      <section className="py-12 md:py-16 px-4 bg-card">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Still on the Fence?</h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Hey, no pressure! But while you're here, why not take a quick peek at my profile? I've packed it with real projects and cool tech wins that show what I'm all about.<br/><br/> Check it out, if you want.
            </p>
            <Link 
              to="/profile"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 text-primary transition-colors"
            >
              Profile <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
