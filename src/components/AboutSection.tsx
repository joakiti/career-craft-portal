import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
    const ref = useScrollAnimation();
    
    return (
        <div ref={ref} className="bg-card-lighter rounded-2xl p-8 opacity-0">
            <h2 className="text-3xl font-extrabold mb-4 text-white">Crafting Digital Excellence ✨</h2>
            <p className="text-gray-300 leading-relaxed">
                As a visionary AI Tech Lead with a proven track record of innovation, I bring nearly a decade of expertise
                in transforming complex challenges into elegant solutions. My journey spans from mastering competitive
                programming to leading cutting-edge AI initiatives, always staying ahead of the technology curve. I excel
                in bridging the gap between advanced technical concepts and real-world applications, consistently
                delivering solutions that exceed expectations and drive business growth.
            </p>
        </div>
    );
};

export default AboutSection;