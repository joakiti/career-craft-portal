
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
          <div className="rounded-3xl bg-card-lighter p-6">
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
              alt="Hey there! This is me"
              className="w-full aspect-square object-cover rounded-2xl mb-4"
              fallbackSrc="/img/profile_pic.png"
            />
            
            <div className="space-y-4">
              <div className="text-accent font-medium">
                Tech Expert & Problem Solver
              </div>
              <h1 className="text-2xl font-bold">Let's Build Something Amazing Together! 🚀</h1>
              <p className="text-gray-300">
                Hey! I'm all about turning complex tech challenges into simple, elegant solutions. Whether it's full-stack development, 
                AI magic, or system architecture - I've got you covered!
              </p>
              
              <div className="flex flex-col gap-4">
                <ConsultationForm />
                <Link 
                  to="/services" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-accent/20 text-accent hover:bg-accent/10 transition-colors"
                >
                  Check Out What I Do <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-xl font-bold text-accent">10+</div>
                  <div className="text-sm text-gray-400">Years of Fun</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-accent">5</div>
                  <div className="text-sm text-gray-400">Major Projects</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="rounded-3xl bg-card-lighter p-6">
            <h2 className="text-xl font-bold mb-4">What I Do Best</h2>
            <div className="space-y-4">
              <div className="p-6 bg-card rounded-lg border border-accent/10">
                <Code className="w-8 h-8 text-accent mb-2" />
                <h3 className="text-lg font-bold text-white mb-2">Full-Stack Magic</h3>
                <p className="text-sm text-gray-300">
                  Building cool, fast apps that just work. No fuss, just results.
                </p>
              </div>

              <div className="p-6 bg-card rounded-lg border border-accent/10">
                <Brain className="w-8 h-8 text-accent mb-2" />
                <h3 className="text-lg font-bold text-white mb-2">AI Wizardry</h3>
                <p className="text-sm text-gray-300">
                  Making AI work for you, not the other way around.
                </p>
              </div>

              <div className="p-6 bg-card rounded-lg border border-accent/10">
                <Database className="w-8 h-8 text-accent mb-2" />
                <h3 className="text-lg font-bold text-white mb-2">System Crafting</h3>
                <p className="text-sm text-gray-300">
                  Building rock-solid systems that grow with you.
                </p>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="rounded-3xl bg-card-lighter p-6">
            <h2 className="text-xl font-bold mb-4">Cool Stuff I've Done</h2>
            <div className="space-y-4">
              <div className="p-4 bg-card rounded-lg border border-accent/10">
                <h3 className="text-accent font-medium mb-2">Tripletex (Norway)</h3>
                <p className="text-sm text-gray-300">Supercharged their support with AI - 80%+ accuracy!</p>
              </div>
              <div className="p-4 bg-card rounded-lg border border-accent/10">
                <h3 className="text-accent font-medium mb-2">Visma Enterprise</h3>
                <p className="text-sm text-gray-300">Made their system lightning fast - from 30s to 0.5s! ⚡</p>
              </div>
            </div>
          </div>

          {/* Let's Chat Section */}
          <div className="rounded-3xl bg-card-lighter p-6">
            <h2 className="text-xl font-bold mb-4">Let's Chat!</h2>
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
                Tech Expert & Problem Solver
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Let's Build Something Amazing Together! 🚀
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Hey! I'm all about turning complex tech challenges into simple, elegant solutions. Whether it's full-stack development, 
                AI magic, or system architecture - I've got you covered!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationForm/>
                <Link 
                  to="/services" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-accent/20 text-accent hover:bg-accent/10 transition-colors"
                >
                  Check Out What I Do <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-xl md:text-2xl font-bold text-accent">10+</div>
                  <div className="text-sm text-gray-400">Years of Fun</div>
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
                alt="Hey there! This is me"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                fallbackClassName="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-accent/10 hidden md:block">
                <p className="text-white font-medium">10+ Years of Tech Adventures</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Best Section */}
      <section className="py-12 md:py-16 px-4 bg-card">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What I Do Best</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Let's turn your tech dreams into reality! Here's how I can help you succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-card border-accent/10 hover:border-accent/30 transition-all group">
              <CardHeader>
                <Code className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-xl text-white">Full-Stack Magic</CardTitle>
                <p className="text-gray-400">
                  Building cool, fast apps that just work. No fuss, just results!
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-1" />
                    <span className="text-sm text-gray-300">Pro at C# and Java - they're like old friends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-1" />
                    <span className="text-sm text-gray-300">React & TypeScript ninja</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-1" />
                    <span className="text-sm text-gray-300">Cloud-native solutions that scale</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link 
                  to="/services" 
                  className="text-sm text-accent hover:text-accent/80 inline-flex items-center group-hover:gap-2 transition-all"
                >
                  See How I Can Help <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-card border-accent/10 hover:border-accent/30 transition-all group">
              <CardHeader>
                <Brain className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-xl text-white">AI Wizardry</CardTitle>
                <p className="text-gray-400">
                  Making AI work for you! From chatbots to smart analytics.
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-1" />
                    <span className="text-sm text-gray-300">Support systems with 80%+ accuracy - boom! 🎯</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-1" />
                    <span className="text-sm text-gray-300">Custom ML models that get results</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link 
                  to="/services" 
                  className="text-sm text-accent hover:text-accent/80 inline-flex items-center group-hover:gap-2 transition-all"
                >
                  Discover AI Solutions <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-card border-accent/10 hover:border-accent/30 transition-all group">
              <CardHeader>
                <Database className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-xl text-white">System Crafting</CardTitle>
                <p className="text-gray-400">
                  Building future-proof systems that grow with you. AWS expert here! 🚀
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-1" />
                    <span className="text-sm text-gray-300">Helped move big systems to the cloud - smooth sailing!</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-1" />
                    <span className="text-sm text-gray-300">AWS pro & security guru</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link 
                  to="/services" 
                  className="text-sm text-accent hover:text-accent/80 inline-flex items-center group-hover:gap-2 transition-all"
                >
                  See System Solutions <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Cool Stuff I've Done */}
      <section className="py-12 md:py-16 px-4 bg-card-lighter">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Cool Stuff I've Done</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here are some projects that show what we can achieve together!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-card-lighter p-6 rounded-lg border border-accent/10 hover:border-accent/30 transition-all">
              <h3 className="text-accent font-medium mb-2">Tripletex (Norway)</h3>
              <p className="text-gray-300 text-sm">Supercharged their support system with AI - now handling 10k+ questions monthly with 80%+ accuracy! 🎯</p>
            </div>
            <div className="bg-card-lighter p-6 rounded-lg border border-accent/10 hover:border-accent/30 transition-all">
              <h3 className="text-accent font-medium mb-2">Visma Enterprise</h3>
              <p className="text-gray-300 text-sm">Made their system lightning fast ⚡ - from 30s to 0.5s load time!</p>
            </div>
            <div className="bg-card-lighter p-6 rounded-lg border border-accent/10 hover:border-accent/30 transition-all">
              <h3 className="text-accent font-medium mb-2">GoDream</h3>
              <p className="text-gray-300 text-sm">Built a rock-solid gift-card platform - 10k+ happy customers monthly! 🎁</p>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Chat Section */}
      <section className="py-12 md:py-16 px-4 bg-card">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Want to Know More? 🤔</h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Hey, no pressure! But if you're curious, why not check out my profile? It's packed with real projects and cool tech wins that show what we could do together!
            </p>
            <Link 
              to="/profile"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 text-primary transition-colors"
            >
              See My Story <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
