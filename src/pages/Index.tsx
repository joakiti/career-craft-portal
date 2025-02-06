import { Link } from "react-router-dom";
import ConsultationForm from "@/components/ConsultationForm";
import ImageWithFallback from "@/components/ui/image-with-fallback";
import { Brain, Code, Database, ArrowRight, Check } from "lucide-react";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="min-h-screen bg-card text-white">
        <div className="p-4 space-y-6">
          {/* Profile Section */}
          <section className="rounded-3xl bg-card-lighter p-6">
            <div className="flex items-center justify-between mb-4">
              <ImageWithFallback
                src="/img/profile_pic.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full"
                fallbackSrc="/img/profile_pic.png"
              />
              <button className="p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
            
            <ImageWithFallback
              src="/img/profile_pic.jpg"
              alt="Profile"
              className="w-full aspect-square object-cover rounded-2xl mb-4"
              fallbackSrc="/img/profile_pic.png"
            />
            
            <div className="space-y-4">
              <div className="text-accent font-medium">
                Let's Create Digital Solutions Together
              </div>
              <h1 className="text-2xl font-bold">Making Technology Work for Your Business</h1>
              <p className="text-gray-300">
                Want to be part of projects that make a real difference? As your tech partner, I combine deep expertise in full-stack development, AI implementation, and system architecture to deliver solutions that drive your business forward.
              </p>
              
              <div className="flex flex-col gap-4">
                <ConsultationForm />
                <Link 
                  to="/services" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-accent/20 text-accent hover:bg-accent/10 transition-colors"
                >
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-xl font-bold text-accent">10+</div>
                  <div className="text-sm text-gray-400">Years of Innovation</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-accent">5</div>
                  <div className="text-sm text-gray-400">Major Projects</div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Services Section */}
          <section className="rounded-3xl bg-card-lighter p-6">
            <h2 className="text-xl font-bold mb-4">Ways We Can Help Your Business</h2>
            <div className="space-y-4">
              <div className="p-6 bg-card rounded-lg border border-accent/10">
                <Code className="w-8 h-8 text-accent mb-2" />
                <h3 className="text-lg font-bold text-white mb-2">Development That Works</h3>
                <p className="text-sm text-gray-300">
                  Building modern, scalable solutions that make your business thrive in the digital world.
                </p>
              </div>

              <div className="p-6 bg-card rounded-lg border border-accent/10">
                <Brain className="w-8 h-8 text-accent mb-2" />
                <h3 className="text-lg font-bold text-white mb-2">AI Solutions</h3>
                <p className="text-sm text-gray-300">
                  Transforming businesses with practical AI that solves real challenges and delivers measurable results.
                </p>
              </div>

              <div className="p-6 bg-card rounded-lg border border-accent/10">
                <Database className="w-8 h-8 text-accent mb-2" />
                <h3 className="text-lg font-bold text-white mb-2">Future-Ready Architecture</h3>
                <p className="text-sm text-gray-300">
                  Building your digital foundation right - modern cloud solutions that scale with your business.
                </p>
              </div>
            </div>
          </section>

          {/* Success Stories Section */}
          <section className="rounded-3xl bg-card-lighter p-6">
            <h2 className="text-xl font-bold mb-4">Client Success Stories</h2>
            <div className="space-y-4">
              <div className="p-4 bg-card rounded-lg border border-accent/10">
                <h3 className="text-accent font-medium mb-2">Tripletex Success Story</h3>
                <p className="text-sm text-gray-300">Created an AI support system handling thousands of queries with remarkable accuracy</p>
              </div>
              <div className="p-4 bg-card rounded-lg border border-accent/10">
                <h3 className="text-accent font-medium mb-2">Visma Transformation</h3>
                <p className="text-sm text-gray-300">Revolutionized system performance, making the impossible possible</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="rounded-3xl bg-card-lighter p-6">
            <h2 className="text-xl font-bold mb-4">Let's Talk About Your Project</h2>
            <ConsultationForm />
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-card flex flex-col">
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <div className="text-accent font-medium">
                Let's Create Digital Solutions Together
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Making Technology Work for Your Business
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Want to be part of projects that make a real difference? As your tech partner, I combine deep expertise in full-stack development, AI implementation, and system architecture to deliver solutions that drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationForm/>
                <Link 
                  to="/services" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-accent/20 text-accent hover:bg-accent/10 transition-colors"
                >
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-xl md:text-2xl font-bold text-accent">10+</div>
                  <div className="text-sm text-gray-400">Years of Innovation</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-accent">5</div>
                  <div className="text-sm text-gray-400">Major Projects</div>
                </div>
              </div>
            </div>
            <div className="relative order-first md:order-last">
              <ImageWithFallback
                src="/img/profile_pic.jpg"
                alt="Your Tech Partner"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                fallbackClassName="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-accent/10 hidden md:block">
                <p className="text-white font-medium">Ready to Transform Your Ideas into Reality?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-12 md:py-16 px-4 bg-card">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ways We Can Help Your Business</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Let's work together to create solutions that make a real difference for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <section className="bg-card border border-accent/10 hover:border-accent/30 transition-all group p-6 rounded-lg">
              <div className="mb-6">
                <Code className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl text-white mb-2">Full-Stack Development</h3>
                <p className="text-gray-400">
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
                <Brain className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl text-white mb-2">AI & ML Solutions</h3>
                <p className="text-gray-400">
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
                <Database className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl text-white mb-2">System Architecture</h3>
                <p className="text-gray-400">
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
      <section className="py-12 md:py-16 px-4 bg-card-lighter">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Real Results for Real Businesses</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              See how we've helped organizations like yours achieve their digital goals.
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
