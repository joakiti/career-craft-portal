import { Link } from "react-router-dom";
import ConsultationForm from "@/components/ConsultationForm";
import ImageWithFallback from "@/components/ui/image-with-fallback";
import { Brain, Code, Database, ArrowRight, Check } from "lucide-react";
import Footer from "@/components/Footer";
import TechnologyCarousel from "@/components/TechnologyCarousel";
import { useReveal } from "@/hooks/useReveal";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MouseFollowCardProps {
  children: React.ReactNode;
  className?: string;
}

const MouseFollowCard = ({ children, className = "" }: MouseFollowCardProps) => {
  const { position, ref, handleMouseMove, handleMouseLeave } = useMousePosition();
  const reducedMotion = useReducedMotion();

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      {!reducedMotion && position.x > 0 && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(251,191,36,0.06), transparent 60%)`,
          }}
        />
      )}
      {children}
    </div>
  );
};

const Index = () => {
  const tech = useReveal();
  const services = useReveal();
  const success = useReveal();
  const cta = useReveal();

  const serviceCards = [
    {
      icon: <Code className="w-8 md:w-12 h-8 md:h-12 text-accent mb-4" />,
      title: "C++ Exchange Systems",
      description: "Low-latency C++23 trading and market-data systems for production exchange workflows.",
      benefits: [
        "Matching engines and order routing",
        "Lock-free concurrency and actor patterns",
        "WebSockets + Protobuf integration",
      ],
      linkText: "View C++ Experience",
      span: "md:col-span-2 xl:col-span-1",
    },
    {
      icon: <Code className="w-8 md:w-12 h-8 md:h-12 text-accent mb-4" />,
      title: "Full-Stack Development",
      description: "Modern, scalable applications built with enterprise-grade technologies. Focus on maintainability and performance.",
      benefits: [
        "Industry expert in C# and Java Enterprise Development",
        "TypeScript & React expertise",
        "Cloud-native solutions",
      ],
      linkText: "View Profile",
      span: "md:col-span-2 xl:col-span-1",
    },
    {
      icon: <Brain className="w-8 md:w-12 h-8 md:h-12 text-accent mb-4" />,
      title: "AI & ML Solutions",
      description: "Custom AI implementations that solve specific business challenges. Specializing in LLMs and optimization algorithms.",
      benefits: [
        "LLM-powered support systems with 80%+ accuracy",
        "Custom ML models",
      ],
      linkText: "View Profile",
      span: "",
    },
    {
      icon: <Database className="w-8 md:w-12 h-8 md:h-12 text-accent mb-4" />,
      title: "System Architecture",
      description: "Cloud-native architectures and legacy system modernization. Professional within AWS infrastructure.",
      benefits: [
        "Part of driving mainframe to cloud migrations",
        "Experienced service owner and security engineer on AWS",
      ],
      linkText: "View Profile",
      span: "",
    },
  ];

  const successStories = [
    {
      company: "Ella Exchange",
      description: "Designed and delivered a production-grade intraday power exchange platform in 4 months, including a low-latency C++23 trading engine and full backend/infrastructure stack.",
    },
    {
      company: "Tripletex (Norway)",
      description: "Built and deployed an AI support system handling 10,000+ monthly queries with 80%+ accuracy, ensuring company growth not blocked by support",
    },
    {
      company: "Visma Enterprise",
      description: "Optimized core system reducing loading times from 30s to 500ms, improving user satisfaction significantly",
    },
    {
      company: "GoDream",
      description: "Delivered a scalable gift-card platform processing 10,000+ transactions monthly with 99.9% uptime",
    },
  ];

  return (
    <div className="min-h-screen bg-card flex flex-col">
      {/* Hero Section: content is present and visible immediately; the only
          entrance effect is a short CSS fade that never blocks first paint. */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16 px-4 animate-fade-in">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <p className="text-accent font-medium hidden md:block">
                AI Engineer & Software Architect
              </p>
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
                  to="/profile"
                  className="w-full md:w-auto inline-flex items-center justify-center h-[44px] px-6 rounded-lg border border-accent/20 text-accent hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(251,191,36,0.1)] transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Explore Profile <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative order-first md:order-last">
              <div className="w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent rounded-2xl" />
                <ImageWithFallback
                  src="/img/profile_pic.jpg"
                  alt="Mikkel Kaj Andersen"
                  className="rounded-2xl shadow-2xl w-full hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-shadow duration-500"
                  fallbackClassName="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 md:-right-4 glass rounded-2xl p-3 md:p-4 w-[calc(100%-2rem)] md:w-auto">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div>
                      <div className="text-base md:text-xl font-bold text-accent truncate">Mikkel Andersen</div>
                      <div className="text-xs md:text-sm text-gray-400 md:mt-1">AI Engineer & Software Architect</div>
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
      <section
        ref={tech.ref}
        className={`pb-12 md:pb-16 bg-card ${tech.revealClass}`}
      >
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

      {/* Core Services — Bento Grid */}
      <section
        ref={services.ref}
        className={`pb-12 md:pb-16 px-4 bg-card ${services.revealClass}`}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ways I Can Help Your Business</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Let's work together to create solutions - I can help you with the following:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            {serviceCards.map((card) => (
              <div key={card.title}>
                <MouseFollowCard className={`glass rounded-lg group h-full hover:border-accent/30 transition-all ${card.span}`}>
                  <div className="p-6 h-full flex flex-col">
                    <div className="mb-6">
                      <div className="bg-accent/10 rounded-lg p-2 w-fit shadow-[0_0_15px_rgba(251,191,36,0.1)]">
                        {card.icon}
                      </div>
                      <h3 className="text-lg md:text-xl text-white mb-2 mt-4">{card.title}</h3>
                      <p className="text-sm md:text-base text-gray-400">{card.description}</p>
                    </div>
                    <div className="space-y-2 flex-1">
                      {card.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                          <span className="text-sm text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/profile"
                      className="mt-4 text-sm text-accent hover:text-accent/80 inline-flex items-center opacity-70 group-hover:opacity-100 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                    >
                      {card.linkText} <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </MouseFollowCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Success Section */}
      <section
        ref={success.ref}
        className={`py-8 md:py-16 px-4 bg-card-lighter ${success.revealClass}`}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Real Results for Real Businesses</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              See how we've helped organizations like yours achieve their digital goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8">
            {successStories.map((story, i) => (
              <div
                key={story.company}
                className="glass-light p-6 rounded-lg group hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="relative">
                  <span className="absolute -top-3 -left-1 text-6xl font-bold text-accent/5 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-accent font-medium mb-2 border-l-2 border-accent pl-3">{story.company}</h3>
                </div>
                <p className="text-gray-300 text-sm">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section
        ref={cta.ref}
        className={`py-8 md:py-16 px-4 bg-card ${cta.revealClass}`}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Still considering?</h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              There is some more details to be found on my website - <br/><br/> Check it out, if you want.
            </p>
            <Link
              to="/profile"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] text-primary transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
