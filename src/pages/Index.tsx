import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import ImageWithFallback from "@/components/ui/image-with-fallback";
import { Brain, Code, Sparkles, Trophy } from "lucide-react";
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
      {/* Hero Section - Attention */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 text-accent font-semibold mb-4">
                <Sparkles className="w-5 h-5" />
                <span>Hey there! 👋</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Need a tech wizard who speaks human? You found one! 🚀
              </h1>
              <p className="text-lg text-gray-300">
                I turn complex tech challenges into success stories. Whether it's AI that actually works or code that doesn't break on Mondays - I've got you covered!
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-primary px-8"
                  onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Let's Chat! →
                </Button>
                <Link 
                  to="/profile" 
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-accent/20 text-accent hover:bg-accent/10 transition-colors"
                >
                  Check My Track Record
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
                <p className="text-white font-semibold">10+ Years of Making Tech Work ✨</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Cards - Interest */}
      <section className="py-16 px-4 bg-card-lighter">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-accent/20 hover:border-accent/40 transition-all hover:scale-105">
              <CardHeader>
                <Trophy className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-xl text-white">Been There, Done That</CardTitle>
                <CardDescription className="text-gray-400">
                  From leading AI teams to optimizing healthcare systems - I've tackled the tough stuff so you don't have to
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-accent/20 hover:border-accent/40 transition-all hover:scale-105">
              <CardHeader>
                <Brain className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-xl text-white">AI That Actually Works</CardTitle>
                <CardDescription className="text-gray-400">
                  No buzzwords, just real results - 80%+ accuracy in production with my AI solutions
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-accent/20 hover:border-accent/40 transition-all hover:scale-105">
              <CardHeader>
                <Code className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-xl text-white">Quick Wins, Big Impact</CardTitle>
                <CardDescription className="text-gray-400">
                  Why wait months when we can start seeing results in weeks?
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Desire & Action */}
      <section id="cta-section" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Make Your Tech Dreams Real? 
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            No more headaches with complicated tech. Let's turn your challenges into opportunities - without the tech jargon! 
          </p>
          <div className="bg-card-lighter p-8 rounded-xl border border-accent/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-accent mb-4">Limited Spots Available!</h3>
            <p className="text-gray-300 mb-6">
              I'm currently taking on new projects for Q2 2024. Grab a spot in my calendar and let's see how we can level up your tech game! ⚡
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Social Proof - Reinforcing Desire */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Companies That Trust Me</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <img src="/img/companies/resolve.svg" alt="Resolve" className="h-12 mx-auto" />
            <img src="/img/companies/visma.svg" alt="Visma" className="h-12 mx-auto" />
            <img src="/img/companies/tripletex.svg" alt="Tripletex" className="h-12 mx-auto" />
            <img src="/img/companies/netcompany.svg" alt="Netcompany" className="h-12 mx-auto" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;