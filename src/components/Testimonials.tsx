import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Card, CardContent} from "@/components/ui/card";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

interface TestimonialProps {
    name: string;
    role: string;
    company: string;
    image?: string;
    companyLogo?: string;
    content: string;
}

const Testimonial = ({name, role, company, image, content}: TestimonialProps) => (
    <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 bg-card-lighter h-full border-border/5">
        <CardContent className="p-6 md:p-8 space-y-4 md:space-y-6">
            <div className="flex items-start gap-4 md:gap-6">
                <Avatar className="w-20 h-20 border-2 border-accent/20 shadow-lg">
                    <AvatarImage src={image || "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"} alt={name}/>
                    <AvatarFallback className="text-lg">{name[0]}</AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                    <h4 className="text-xl md:text-2xl font-bold text-link truncate">{name}</h4>
                    <p className="text-sm md:text-base text-muted-foreground font-medium">{role}</p>
                    <p className="text-sm md:text-base text-muted-foreground truncate">{company}</p>
                </div>
            </div>

            <div className="relative">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-accent/20 rounded-full"/>
                <blockquote className="pl-4 md:pl-6 text-sm md:text-base text-muted-foreground leading-relaxed italic">
                    {content}
                </blockquote>
            </div>
        </CardContent>
    </Card>
);

const CompanyLogos = () => (
    <div className="mt-8 pt-8 border-t border-border/10">
        <h3 className="text-lg md:text-xl font-semibold text-link mb-6 text-center">Companies I've Worked With</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            <div className="flex flex-col items-center space-y-2 p-4 bg-card-lighter rounded-lg hover:shadow-lg transition-all">
                <img src="/img/resolve_logo.png" alt="Resolve" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <span className="text-sm font-medium text-muted-foreground">Resolve</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-card-lighter rounded-lg hover:shadow-lg transition-all">
                <img src="/img/itu_logo.png" alt="ITU" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <span className="text-sm font-medium text-muted-foreground">ITU</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-card-lighter rounded-lg hover:shadow-lg transition-all">
                <img src="/img/tripletex_logo.png" alt="Tripletex" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <span className="text-sm font-medium text-muted-foreground">Tripletex</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-card-lighter rounded-lg hover:shadow-lg transition-all">
                <img src="/img/godream_logo.jpeg" alt="GoDream" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <span className="text-sm font-medium text-muted-foreground">GoDream</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-card-lighter rounded-lg hover:shadow-lg transition-all">
                <img src="/img/mim_logo.png" alt="Make It Matter" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <span className="text-sm font-medium text-muted-foreground">Make It Matter</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-card-lighter rounded-lg hover:shadow-lg transition-all">
                <img src="/img/keylane_logo.png" alt="Keylane" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <span className="text-sm font-medium text-muted-foreground">Keylane</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-card-lighter rounded-lg hover:shadow-lg transition-all">
                <img src="/img/itminds_logo.jpg" alt="IT-minds" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <span className="text-sm font-medium text-muted-foreground">IT-minds</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-card-lighter rounded-lg hover:shadow-lg transition-all">
                <img src="/img/netcompany_logo.png" alt="Netcompany" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <span className="text-sm font-medium text-muted-foreground">Netcompany</span>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    const testimonials = [
        {
            name: "Martin Sommerseth",
            role: "Manager",
            company: "Resolve",
            content: `In terms of technical leadership, Mikkel transitioned into a Tech Lead role due to his exceptional technical deliveries and leadership abilities. He played a key role in defining the responsibilities of this position alongside others at Resolve.
            
            Regarding project management, Mikkel showcased strong skills, particularly in leading the PN project to success by balancing technical implementation and aligning different parties.
            
            In tech strategy contribution, he actively participated in shaping the central tech strategy at Resolve, demonstrating initiative and foresight in the LLM strategy and its potential role in the AI API strategy.
            
            For team collaboration, Mikkel has improved in involving team members early in various initiatives, sharing knowledge, and enabling independent work within the team, though there is still room for growth in this area.`
        },
        {
            name: "Stian Vale",
            role: "Manager",
            company: "Resolve",
            content: `Mikkel's work on Automatic Rostering has received positive feedback from Postnord. Both Medvind and all stakeholders involved are extremely pleased with the deliveries, which were primarily led and implemented by Mikkel.
            
            He significantly enhanced the Automatic Rostering product, preparing it for further growth. What was once an "unsure Resolve card" a year ago has now become one of our standout products, thanks to the technological advancements made.`
        },
        {
            name: "Jan Strandbakke",
            role: "CTO",
            company: "Tripletex",
            content: `It has been very good to collaborate with Resolve, where their expertise and innovative approach to LLM/GPT technology have been crucial for Tripletex
and our AI team in an early phase. With Mikkel’s central role, not just as a skilled technical leader but also as an inspiring person, we have succeeded in
establishing a robust AI team that continuously drives us forward. Through our collaboration with Resolve, we have not only strengthened our internal
competence but also positioned ourselves to lead in the further development of our AI assistant, which plays a critical role in our support of customers, and
which in the future will become more and more central in the Tripletex solution. Having Resolve by our side has enriched our understanding and
application of groundbreaking AI technology.`
        },
        {
            name: "Marie Preisler",
            role: "CEO",
            company: "GoDream/Make It Matter",
            content: `Det har været en sand fornøjelse at have Mikkel som ekstern IT-konsulent på vores projekt. Han har leveret et solidt og brugervenligt system, som
effektivt håndterer omkring 300 ordrer dagligt. Mikkel har været utrolig nem at kommunikere med, og han har hurtigt fanget alle aspekter af vores behov.
Gennem hele processen har han guidet os sikkert fra start til slut, hvilket har gjort samarbejdet både nemt og effektivt.
Vi er meget tilfredse med den service vi har modtaget fra Mikkel. Han er altid hurtig til at svare og står klar til at hjælpe med stort som småt. Det er en
tryghed at vide, at vi kan regne med hans ekspertise, og vi ser frem til fortsat at være kunder hos ham.`
        }
    ];

    const plugin = Autoplay({delay: 5000, stopOnInteraction: false});

    return (
        <section className="py-8 md:py-12 px-4 md:px-6">
            <div className="container max-w-4xl mx-auto">
                <h2 className="text-xl md:text-2xl font-bold text-link mb-6 md:mb-8 text-center">
                    <span className="relative inline-block">
                        ... here's some honest feedback I've received
                        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"/>
                    </span>
                </h2>

                <Carousel
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    plugins={[plugin]}
                    className="w-full"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Testimonial {...testimonial} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-center gap-4 mt-6">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>

                <CompanyLogos />
            </div>
        </section>
    );
};

export default Testimonials;