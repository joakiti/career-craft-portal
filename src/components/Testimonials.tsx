import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  image?: string;
  companyLogo?: string;
  content: string;
}

const Testimonial = ({ name, role, company, image, companyLogo, content }: TestimonialProps) => (
  <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 bg-white h-full">
    <CardContent className="p-8 space-y-6">
      <div className="flex items-start gap-6">
        <div className="relative">
          <Avatar className="w-24 h-24 border-4 border-primary-light shadow-lg">
            <AvatarImage src={image || "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"} alt={name} />
            <AvatarFallback className="text-2xl">{name[0]}</AvatarFallback>
          </Avatar>
          {companyLogo && (
            <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-white p-1 shadow-lg animate-fade-in">
              <img src={companyLogo} alt={`${company} logo`} className="w-full h-full object-contain" />
            </div>
          )}
        </div>
        
        <div className="flex-1 space-y-2">
          <div className="space-y-1">
            <h4 className="text-xl font-bold text-primary">{name}</h4>
            <p className="text-sm text-text-light font-medium">{role}</p>
            <p className="text-sm text-text-light">{company}</p>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute left-0 top-0 w-1 h-full bg-accent/20 rounded-full" />
        <blockquote className="pl-6 text-text leading-relaxed italic">
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

  const plugin = Autoplay({ delay: 5000, stopOnInteraction: false });

  return (
    <section className="py-16 px-4">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center relative">
          <span className="relative inline-block">
            Words of Reference
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </span>
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            slidesToScroll: 3,
            startIndex: 0,
          }}
          plugins={[plugin]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3">
                <div className="p-1">
                  <Testimonial {...testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
