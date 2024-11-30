import AboutSection from "./AboutSection";
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";
import ProfileCard from "./ProfileCard";
import TechnologySection from "./TechnologySection";

interface HeroSectionProps {
    scrollToExperience: () => void;
}

const HeroSection = ({scrollToExperience}: HeroSectionProps) => {
    return (
        <section className="py-12 px-4 animate-fade-in">
            <div className="container max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-4 space-y-6">
                        <ProfileCard />
                        <TechnologySection />
                    </div>

                    <div className="md:col-span-8 space-y-6">
                        <AboutSection/>
                        <Testimonials/>
                        
                        {/* Personal CTA Section */}
                        <div className="mt-12 p-8 bg-card-lighter rounded-xl border border-accent/20 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-white mb-4 text-accent">A Personal Note</h3>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                I'll be honest - balancing freelancing alongside a full-time position might seem unusual. But it's truly my passion. 
                                Running my own company while delivering value to both my full-time employer and freelance clients brings me immense satisfaction. 
                                It allows me to live out my entrepreneurial dreams while maintaining the stability and growth opportunities of a permanent role.
                            </p>

                            <div className="space-y-4">
                                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-4 bg-card rounded-lg border border-accent/10">
                                    <div className="text-gray-300 italic">
                                        "I hope you'll consider partnering with me on your next tech project. I bring not just technical expertise, 
                                        but genuine enthusiasm and dedication to every collaboration."
                                        <div className="mt-2 text-accent">- Mikkel</div>
                                    </div>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-12 space-y-8">
                            <button
                                onClick={scrollToExperience}
                                className="text-link hover:text-link-hover transition-colors cursor-pointer inline-flex items-center gap-2"
                            >
                                Explore more
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;