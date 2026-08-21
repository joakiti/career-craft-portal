import { useReveal } from "@/hooks/useReveal";

const AboutSection = () => {
    const { ref, revealClass } = useReveal();

    return (
        <div>
            <h2 className="text-xl md:text-2xl font-bold text-link mb-4 text-center">
                <span className="relative inline-block">
                    Hej <span aria-hidden="true">👋</span> velkommen til mit hjørne af internettet <span aria-hidden="true">🗺️</span>
                </span>
            </h2>
            <div
                ref={ref}
                className={`glass-light rounded-2xl p-6 md:p-8 ${revealClass}`}
            >
                <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-white">Lad os bygge noget sammen <span aria-hidden="true">✨</span></h2>
                <p className="text-gray-200 leading-relaxed font-medium">
                    Hej, jeg er teknologinørd og har været i faget i næsten ti år. Jeg har prøvet lidt af hvert, fra konkurrenceprogrammering til machine learning, og jeg elsker svære problemer - mine kernefelter er konkurrenceprogrammering, avancerede algoritmer og machine learning.
                </p>
                <p className="text-gray-200 leading-relaxed font-medium mt-3">
                    Jeg har arbejdet på nogle meget interessante projekter, både med at lede AI-teams og med at udvikle optimeringsløsninger til sundhedssektoren. Jeg trives i både frontend og backend, hvor tingene både skal virke og se godt ud.
                </p>
                <p className="text-gray-200 leading-relaxed font-medium mt-3">
                    Uden for arbejdet forsøger jeg at holde en god balance. Jeg elsker at bruge tid med min søn, og når jeg kan, går jeg en vandretur, klatrer lidt eller forsvinder ind i et godt strategispil.
                </p>
            </div>
        </div>
    );
};

export default AboutSection;
