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
                        I'm a coder who loves building stuff. I've been writing code for almost 10 years in different areas. I dig competitive programming, algorithms, optimization, and machine learning.
                    </p>
                    <p className="text-gray-100 leading-relaxed font-medium mt-4">
                        I enjoy solving tough problems and working across all parts of tech, from UI to algorithm design. I've built AI projects and led teams that shipped real products.
                    </p>
                    <p className="text-gray-100 leading-relaxed font-medium mt-4">
                        I've led AI teams, built optimization solvers for healthcare, freelanced, and constantly try to get better at software craftsmanship.
                    </p>
                    <p className="text-gray-100 leading-relaxed font-medium mt-4">
                        I love tackling hard projects. If I'm not coding, and not playing with my son, I might go hiking, bouldering, or play some strategy games.
                    </p>
                </div>
                </div>
    );
};

export default AboutSection;