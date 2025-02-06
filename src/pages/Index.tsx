import { Link } from "react-router-dom";
import ConsultationForm from "@/components/ConsultationForm";
import ImageWithFallback from "@/components/ui/image-with-fallback";
import { Brain, Code, Database, ArrowRight, Check, Youtube, Linkedin, Instagram, Twitter } from "lucide-react";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

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
          <div className="rounded-3xl bg-card-lighter p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <ImageWithFallback
                  src="/img/profile_pic.jpg"
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                  fallbackSrc="/img/profile_pic.png"
                />
                <span className="font-semibold">@MikkelKaj</span>
              </div>
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
            
            <h1 className="text-2xl font-bold mb-2">I'm Mikkel 👋</h1>
            <p className="text-gray-300 mb-4">
              Senior Software Engineer & AI Architect. Building scalable solutions and optimizing enterprise systems.
            </p>
            
            <div className="flex gap-4 mb-6">
              <a href="https://youtube.com" className="text-gray-400 hover:text-white">
                <Youtube size={24} />
              </a>
              <a href="https://linkedin.com/in/mikkel-kaj-andersen-b0a097a5/" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Core Services Section */}
          <div className="rounded-3xl bg-card-lighter p-6">
            <h2 className="text-xl font-bold mb-4">Services</h2>
            <div className="space-y-4">
              <div className="p-6 bg-card rounded-lg border border-accent/10">
                <Code className="w-8 h-8 text-accent mb-2" />
                <h3 className="text-lg font-bold text-white mb-2">Full-Stack Development</h3>
                <p className="text-sm text-gray-300">
                  Modern, scalable applications built with enterprise-grade technologies.
                </p>
              </div>

              <div className="p-6 bg-card rounded-lg border border-accent/10">
                <Brain className="w-8 h-8 text-accent mb-2" />
                <h3 className="text-lg font-bold text-white mb-2">AI & ML Solutions</h3>
                <p className="text-sm text-gray-300">
                  Custom AI implementations that solve specific business challenges.
                </p>
              </div>

              <div className="p-6 bg-card rounded-lg border border-accent/10">
                <Database className="w-8 h-8 text-accent mb-2" />
                <h3 className="text-lg font-bold text-white mb-2">System Architecture</h3>
                <p className="text-sm text-gray-300">
                  Cloud-native architectures and legacy system modernization.
                </p>
              </div>
            </div>
          </div>

          {/* Recent Success Section */}
          <div className="rounded-3xl bg-card-lighter p-6">
            <h2 className="text-xl font-bold mb-4">Recent Success</h2>
            <div className="space-y-4">
              <div className="p-4 bg-card rounded-lg border border-accent/10">
                <h3 className="text-accent font-medium mb-2">Tripletex (Norway)</h3>
                <p className="text-sm text-gray-300">Built AI support system with 80%+ accuracy</p>
              </div>
              <div className="p-4 bg-card rounded-lg border border-accent/10">
                <h3 className="text-accent font-medium mb-2">Visma Enterprise</h3>
                <p className="text-sm text-gray-300">Optimized core system reducing loading times by 98%</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-3xl bg-card-lighter p-6">
            <h2 className="text-xl font-bold mb-4">Let's Connect</h2>
            <ConsultationForm />
          </div>
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
                Senior Software Engineer & AI Solutions Architect
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Delivering High-Impact Technical Solutions
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Specialized in three core areas: Enterprise full-stack development, AI/ML implementation, and system architecture. Focused on delivering measurable results that drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationForm/>
                <Link 
                  to="/services" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-accent/20 text-accent hover:bg-accent/10 transition-colors"
                >
                  View Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-xl md:text-2xl font-bold text-accent">10+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-accent">5</div>
                  <div className="text-sm text-gray-400">Enterprise Projects</div>
                </div>
              </div>
            </div>
            <div className="relative order-first md:order-last">
              <ImageWithFallback
                src="/img/profile_pic.jpg"
                alt="Mikkel Kaj Andersen - Senior Software Engineer"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                fallbackClassName="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-accent/10 hidden md:block">
                <p className="text-white font-medium">10+ Years Industry Experience</p>
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
