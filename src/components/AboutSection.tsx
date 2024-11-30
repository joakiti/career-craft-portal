import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
    const ref = useScrollAnimation();
    
    return (<div>
            <h2 className="text-xl md:text-2xl font-bold text-link mb-6 md:mb-8 text-center">
                <span className="relative inline-block">
                    Hi there 👋 welcome to my corner of the internet 🗺️
                </span>
            </h2>
                <div ref={ref} className="bg-card-lighter rounded-2xl p-8 opacity-0">
                    <h2 className="text-3xl font-extrabold mb-4 text-white">Let's build together ✨</h2>
                    <p className="text-gray-100 leading-relaxed font-medium">
                        I'm a performance-driven Tech Lead with nearly a decade of experience crafting software across various domains. My expertise spans competitive programming, advanced algorithms, and machine learning, making me a versatile generalist who thrives on complex challenges.
                    </p>
                    <p className="text-gray-100 leading-relaxed font-medium mt-4">
                        From leading international AI teams to developing healthcare optimization solutions, I've consistently delivered impactful projects. I enjoy working across the entire tech stack, from crafting intuitive user experiences to implementing sophisticated algorithms.
                    </p>
                    <p className="text-gray-100 leading-relaxed font-medium mt-4">
                        With an entrepreneurial mindset, I balance my passion for technology with an active lifestyle. When I'm not coding or spending time with my son, you'll find me hiking, bouldering, or enjoying strategy games.
                    </p>
                </div>
                </div>
    );
};

export default AboutSection;