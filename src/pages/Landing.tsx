import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ImageWithFallback from "@/components/ui/image-with-fallback";
import ContactForm from "@/components/ContactForm";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-card">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-card/90 backdrop-blur-sm z-50 border-b border-accent/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-white">Mikkel Kaj Andersen</span>
          <div className="space-x-6">
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-white"
              onClick={() => navigate('/profile')}
            >
              Profile
            </Button>
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-white"
              onClick={() => navigate('/services')}
            >
              Services
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-full overflow-hidden aspect-square max-w-[500px] mx-auto">
            <ImageWithFallback
              src="/img/profile_pic.jpg"
              alt="Mikkel speaking at an event"
              className="w-full h-full object-cover"
              fallbackSrc="/img/profile_pic.png"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Get Your Business on <span className="text-accent">YouTube</span>
            </h1>
            <p className="text-xl text-gray-300">
              With expert help from Mikkel "Mikkelwolf" Vastila, YouTube can become your company's most unique marketing channel.
            </p>
            <p className="text-gray-400">
              Danish companies have been sleeping on YouTube as an organic marketing channel - both when it comes to building brand awareness and generating qualified leads. That ends in 2025!
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-16 px-4 bg-card-lighter">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Cases</h2>
          <p className="text-xl text-gray-300 mb-12">
            A selection of cases that differentiate themselves from each other...
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Content Production System",
                description: "I have conceptualized, developed, and set up systems for content production for Dinero's two YouTube channels. The project has spanned several years and involved multiple departments."
              },
              {
                title: "SEO Optimization",
                description: "I have SEO-optimized PickUp Music's content for beginner guitarists, so it now ranks for all the most relevant keywords on both YouTube and Google Search."
              },
              {
                title: "Personal Channels",
                description: "My personal channels, primarily the Mikkelwolf channel, I have continuously used to test YouTube strategies. The Mikkelwolf project started in 2011 and was what kickstarted my journey on YouTube."
              }
            ].map((caseStudy, index) => (
              <div key={index} className="bg-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-4">{caseStudy.title}</h3>
                <p className="text-gray-300">{caseStudy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;