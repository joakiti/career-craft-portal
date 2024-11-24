import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Card, CardContent} from "@/components/ui/card";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

interface TestimonialProps {
    name: string;
    role: string;
    company: string;
    image?: string;
    companyLogo?: string;
    content: string;
}

const Testimonial = ({name, role, company, image, companyLogo, content}: TestimonialProps) => (
    <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 bg-card-lighter h-full border-border/5">
        <CardContent className="p-3 md:p-6 space-y-3 md:space-y-4">
            <div className="flex items-start gap-3 md:gap-4">
                <Avatar className="w-16 h-16 border-2 border-accent/20 shadow-lg">
                    <AvatarImage src={image || "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"} alt={name}/>
                    <AvatarFallback className="text-lg">{name[0]}</AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                    <h4 className="text-base md:text-lg font-bold text-link truncate">{name}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground font-medium">{role}</p>
                    <p className="text-xs md:text-sm text-muted-foreground truncate">{company}</p>
                </div>
            </div>

            <div className="relative">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-accent/20 rounded-full"/>
                <blockquote className="pl-3 md:pl-4 text-xs md:text-sm text-muted-foreground leading-relaxed italic line-clamp-6 md:line-clamp-none">
                    {content}
                </blockquote>
            </div>
        </CardContent>
    </Card>
);

const Testimonials = () => {
    const testimonials = [
        {
            name: "Martin Sommerseth & Stian Vale",
            role: "Managers",
            company: "Resolve",
            content: `Technical leadership: Transitioned into a Tech Lead role based on great technical deliveries in combination with abilities to lead. Successfully carving out and defining the responsibilities of this position together with others in Resolve.

Project management: Demonstrated strong project management skills, particularly in leading the PN project to success, balancing technical implementation and alignment among different parties.

Tech strategy contribution: Actively contributed to the central tech strategy within Resolve, showing initiative and foresight in the LLM strategy and its potential role in AI API strategy.

Team collaboration: Improved in involving team members early in different initiatives, sharing knowledge, and facilitating independent work within the team.`
        },
        {
            name: "Jan Strandbakke",
            role: "CTO",
            company: "Tripletex",
            content: "It has been very good to collaborate with Resolve, where their expertise and innovative approach to LLM/GPT technology have been crucial for Tripletex and our AI team in an early phase. With Mikkel's central role, not just as a skilled technical leader but also as an inspiring person, we have succeeded in establishing a robust AI team that continuously drives us forward."
        },
        {
            name: "Marie Preisler",
            role: "CEO",
            company: "GoDream/Make It Matter",
            content: "Det har været en sand fornøjelse at have Mikkel som ekstern IT-konsulent på vores projekt. Han har leveret et solidt og brugervenligt system, som effektivt håndterer omkring 300 ordrer dagligt. Mikkel har været utrolig nem at kommunikere med, og han har hurtigt fanget alle aspekter af vores behov."
        }
    ];

    const plugin = Autoplay({delay: 5000, stopOnInteraction: false});

    return (
        <section className="py-4 md:py-8 px-2 md:px-4">
            <div className="container max-w-7xl mx-auto">
                <h2 className="text-xl md:text-2xl font-bold text-link mb-4 md:mb-6 text-center">
                    <span className="relative inline-block">
                        Words of Reference
                        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"/>
                    </span>
                </h2>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                        dragFree: true,
                        slidesToScroll: 1,
                        breakpoints: {
                            '(min-width: 640px)': {
                                slidesToScroll: 2,
                            },
                            '(min-width: 1024px)': {
                                slidesToScroll: 3,
                            },
                        },
                    }}
                    plugins={[plugin]}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Testimonial {...testimonial} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-center gap-2 mt-4">
                        <CarouselPrevious className="relative md:absolute"/>
                        <CarouselNext className="relative md:absolute"/>
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default Testimonials;
