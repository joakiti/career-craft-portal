import SocialLinks from "./SocialLinks";
import AboutSection from "./AboutSection";
import Testimonials from "./Testimonials";

interface HeroSectionProps {
    scrollToExperience: () => void;
}

const HeroSection = ({scrollToExperience}: HeroSectionProps) => {
    return (
        <section className="py-12 px-4 animate-fade-in">
            <div className="container max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    {/* Profile Card */}
                    <div className="md:col-span-4 bg-card-lighter rounded-2xl p-8">
                        <img
                            src="/img/profile_pic.png"
                            alt="Profile picture"
                            className="rounded-2xl shadow-xl w-full h-auto object-cover mb-6"
                        />
                        <h1 className="text-3xl font-bold mb-2 text-white">Mikkel Kaj Andersen 🚀</h1>
                        <p className="text-gray-400 mb-6">Innovation Leader | AI Architect | Tech Visionary</p>
                        <div className="flex flex-wrap gap-4 mb-6">
                            <a href="mailto:mikkel_ander@hotmail.com"
                               className="text-link hover:text-link-hover transition-colors">
                                mikkel_ander@hotmail.com
                            </a>
                            <a href="tel:+4521537395" className="text-link hover:text-link-hover transition-colors">
                                +45 21 53 73 95
                            </a>
                        </div>
                        <div className="flex gap-4">
                            <SocialLinks/>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="md:col-span-8 space-y-6">
                        <AboutSection/>
                        <Testimonials/>

                        {/* See More Section */}
                        <div className="text-center mt-8">
                            <button
                                onClick={scrollToExperience}
                                className="text-link hover:text-link-hover transition-colors cursor-pointer inline-flex items-center gap-2"
                            >
                                Discover my journey and achievements
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