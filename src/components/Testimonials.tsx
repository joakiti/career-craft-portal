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
    <Card
        className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 bg-card-lighter h-full border-border/5">
        <CardContent className="p-4 md:p-8 space-y-4 md:space-y-6">
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                <div className="relative mx-auto md:mx-0">
                    <Avatar className="w-20 h-20 md:w-24 md:h-24 border-4 border-accent/20 shadow-lg">
                        <AvatarImage src={image || "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"}
                                     alt={name}/>
                        <AvatarFallback className="text-2xl">{name[0]}</AvatarFallback>
                    </Avatar>
                    {companyLogo && (
                        <div
                            className="absolute -bottom-2 -right-2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card p-1 shadow-lg animate-fade-in border border-border/10">
                            <img src={companyLogo} alt={`${company} logo`} className="w-full h-full object-contain"/>
                        </div>
                    )}
                </div>

                <div className="flex-1 space-y-2 text-center md:text-left">
                    <div className="space-y-1">
                        <h4 className="text-lg md:text-xl font-bold text-link">{name}</h4>
                        <p className="text-sm text-muted-foreground font-medium">{role}</p>
                        <p className="text-sm text-muted-foreground">{company}</p>
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-accent/20 rounded-full"/>
                <blockquote className="pl-4 md:pl-6 text-sm md:text-base text-muted-foreground leading-relaxed italic">
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
        <section className="py-8 md:py-16 px-4">
            <div className="container max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-link mb-8 md:mb-12 text-center relative">
          <span className="relative inline-block">
            Words of Reference
            <div
                className="absolute -bottom-2 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"/>
          </span>
                </h2>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                        dragFree: true,
                        slidesToScroll: 1,
                        breakpoints: {
                            '(min-width: 768px)': {
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
                            <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Testimonial {...testimonial} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-center gap-4 mt-6 md:mt-8">
                        <CarouselPrevious className="relative md:absolute"/>
                        <CarouselNext className="relative md:absolute"/>
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default Testimonials;