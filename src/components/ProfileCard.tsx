import { useState, useEffect } from 'react';
import ImageWithFallback from "./ui/image-with-fallback";
import SocialLinks from "./SocialLinks";

const ProfileCard = () => {
    const [isAlternatePhoto, setIsAlternatePhoto] = useState(false);
    const [tiles, setTiles] = useState<boolean[]>(Array(16).fill(false));

    const handleImageClick = () => {
        // Reset tiles
        setTiles(Array(16).fill(false));
        
        // Trigger tile animations in sequence
        for (let i = 0; i < 16; i++) {
            setTimeout(() => {
                setTiles(prev => {
                    const newTiles = [...prev];
                    newTiles[i] = true;
                    return newTiles;
                });
            }, i * 50); // 50ms delay between each tile
        }

        // Switch the photo after the tile animation
        setTimeout(() => {
            setIsAlternatePhoto(!isAlternatePhoto);
            setTiles(Array(16).fill(false));
        }, 16 * 50 + 100);
    };

    return (
        <div className="bg-card-lighter rounded-2xl p-8">
            <div className="relative" onClick={handleImageClick}>
                <div className="relative w-full aspect-square">
                    <div className="absolute inset-0">
                        <ImageWithFallback
                            src={isAlternatePhoto ? "/img/profile_pic.jpg" : "/img/profile_pic.png"}
                            alt="Profile picture"
                            className="rounded-2xl shadow-xl w-full h-full object-cover"
                            fallbackSrc="https://images.unsplash.com/photo-1518770660439-4636190af475"
                            fallbackClassName="w-full h-[300px] rounded-2xl"
                        />
                    </div>
                    <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                        {tiles.map((isFlipped, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-300 ${
                                    isFlipped ? 'bg-card' : 'bg-transparent'
                                }`}
                                style={{
                                    transitionDelay: `${index * 50}ms`,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <h1 className="text-3xl font-bold mb-2 mt-6 text-white">Mikkel Kaj Andersen</h1>
            <p className="text-gray-400 mb-6">Father | Tech Lead | Freelancer</p>
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
    );
};

export default ProfileCard;