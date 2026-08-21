import { useReveal } from "@/hooks/useReveal";

const AboutSection = () => {
    const { ref, revealClass } = useReveal();

    return (
        <div>
            <h2 className="text-xl md:text-2xl font-bold text-link mb-4 text-center">
                <span className="relative inline-block">
                    Hi there <span aria-hidden="true">👋</span> welcome to my corner of the internet <span aria-hidden="true">🗺️</span>
                </span>
            </h2>
            <div
                ref={ref}
                className={`glass-light rounded-2xl p-6 md:p-8 ${revealClass}`}
            >
                <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-white">Let's build together <span aria-hidden="true">✨</span></h2>
                <p className="text-gray-200 leading-relaxed font-medium">
                    Hi, I'm a tech enthusiast who's been in the field for almost ten years. I've dabbled in a bit of everything, from competitive programming to machine learning. I love tackling tough problems - my expertise spans competitive programming, advanced algorithms, and machine learning.
                </p>
                <p className="text-gray-200 leading-relaxed font-medium mt-3">
                    I've had the chance to work on some very interesting projects, with both leading AI teams and developing healthcare optimization solutions. I enjoy diving into both the front-end and back-end, making sure everything works smoothly and looks great.
                </p>
                <p className="text-gray-200 leading-relaxed font-medium mt-3">
                    Outside of work, I try to keep a good balance. I love spending time with my son, and when I can, I hit the trails for a hike, climb some rocks, or get lost in a good strategy game.
                </p>
            </div>
        </div>
    );
};

export default AboutSection;
