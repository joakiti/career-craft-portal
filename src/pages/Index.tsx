import { Link } from "react-router-dom";
import ConsultationForm from "@/components/ConsultationForm";
import ImageWithFallback from "@/components/ui/image-with-fallback";
import { Brain, Code, Database, ArrowRight, Check } from "lucide-react";
import Footer from "@/components/Footer";
import TechnologyCarousel from "@/components/TechnologyCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-card flex flex-col">
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <div className="text-accent font-medium hidden md:block">
              Senior Software Engineer & AI Tech Lead
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Making Technology Work for Your Business
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                As your tech partner, I combine deep expertise in full-stack development, AI implementation, and system architecture.
              </p>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full md:w-auto">
                  <ConsultationForm />
                </div>
                <Link 
                  to="/services" 
                  className="w-full md:w-auto inline-flex items-center justify-center h-[44px] px-6 rounded-lg border border-accent/20 text-accent hover:bg-accent/10 transition-colors whitespace-nowrap"
                >
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative order-first md:order-last">
              <div className="w-full max-w-md mx-auto">
                <ImageWithFallback
                  src="/img/profile_pic.jpg"
                  alt="Your Tech Partner"
                  className="rounded-2xl shadow-2xl w-full"
                  fallbackClassName="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 md:-right-4 bg-card/80 backdrop-blur-sm rounded-2xl p-3 md:p-4 border border-accent/10 w-[calc(100%-2rem)] md:w-auto">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div>
                      <div className="text-base md:text-xl font-bold text-accent">Mikkel Andersen</div>
                      <div className="text-xs md:text-sm text-gray-400 md:mt-1">Senior Software Engineer & AI Tech Lead</div>
                    </div>
                    <div className="border-l border-accent/10 pl-4 md:pl-6">
                      <div className="text-lg md:text-2xl font-bold text-accent">10+</div>
                      <div className="text-xs md:text-sm text-gray-400">Years of Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="pb-12 md:pb-16 bg-card">
        <div className="container mx-auto max-w-7xl px-0 md:px-4">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Technologies & Expertise</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Leveraging modern technologies to build robust, scalable solutions for your business needs.
            </p>
          </div>
          <TechnologyCarousel />
        </div>
      </section>

      {/* Core Services Section */}
      <section className="pb-12 md:pb-16 px-4 bg-card">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ways I Can Help Your Business</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Let's work together to create solutions - I can help you with the following:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <section className="bg-card border border-accent/10 hover:border-accent/30 transition-all group p-6 rounded-lg">
              <div className="mb-6">
                <Code className="w-8 md:w-12 h-8 md:h-12 text-accent mb-4" />
                <h3 className="text-lg md:text-xl text-white mb-2">Full-Stack Development</h3>
                <p className="text-sm md:text-base text-gray-400">
                  Modern, scalable applications built with enterprise-grade technologies. Focus on maintainability and performance.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 mt-1" />
                  <span className="text-sm text-gray-300">Industry expert in C# and Java Enterprise Development</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 mt-1" />
                  <span className="text-sm text-gray-300">TypeScript & React expertise</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 mt-1" />
                  <span className="text-sm text-gray-300">Cloud-native solutions</span>
                </div>
              </div>
              <Link 
                to="/services" 
                className="mt-4 text-sm text-accent hover:text-accent/80 inline-flex items-center group-hover:gap-2 transition-all"
              >
                View Full-Stack Services <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </section>

            <section className="bg-card border border-accent/10 hover:border-accent/30 transition-all group p-6 rounded-lg">
              <div className="mb-6">
                <Brain className="w-8 md:w-12 h-8 md:h-12 text-accent mb-4" />
                <h3 className="text-lg md:text-xl text-white mb-2">AI & ML Solutions</h3>
                <p className="text-sm md:text-base text-gray-400">
                  Custom AI implementations that solve specific business challenges. Specializing in LLMs and optimization algorithms.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 mt-1" />
                  <span className="text-sm text-gray-300">LLM-powered support systems with 80%+ accuracy</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 mt-1" />
                  <span className="text-sm text-gray-300">Custom ML models</span>
                </div>
              </div>
              <Link 
                to="/services" 
                className="mt-4 text-sm text-accent hover:text-accent/80 inline-flex items-center group-hover:gap-2 transition-all"
              >
                View AI Solutions <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </section>

            <section className="bg-card border border-accent/10 hover:border-accent/30 transition-all group p-6 rounded-lg">
              <div className="mb-6">
                <Database className="w-8 md:w-12 h-8 md:h-12 text-accent mb-4" />
                <h3 className="text-lg md:text-xl text-white mb-2">System Architecture</h3>
                <p className="text-sm md:text-base text-gray-400">
                  Cloud-native architectures and legacy system modernization. Professional within AWS infrastructure.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 mt-1" />
                  <span className="text-sm text-gray-300">Part of driving mainframe to cloud migrations</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 mt-1" />
                  <span className="text-sm text-gray-300">Experienced service owner and security engineer on AWS</span>
                </div>
              </div>
              <Link 
                to="/services" 
                className="mt-4 text-sm text-accent hover:text-accent/80 inline-flex items-center group-hover:gap-2 transition-all"
              >
                View Architecture Services <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </section>
          </div>
        </div>
      </section>

      {/* Recent Success Section */}
      <section className="py-8 md:py-16 px-4 bg-card-lighter">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Real Results for Real Businesses</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              See how we've helped organizations like yours achieve their digital goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
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
      <section className="py-8 md:py-16 px-4 bg-card">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to Start Your Journey?</h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Let's have a chat about your project. No pressure, just an honest conversation about how we can help you succeed in the digital world.
            </p>
            <Link 
              to="/profile"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 text-primary transition-colors"
            >
              Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
