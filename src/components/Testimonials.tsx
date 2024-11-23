import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  image?: string;
  companyLogo?: string;
  content: string;
}

const Testimonial = ({ name, role, company, image, companyLogo, content }: TestimonialProps) => (
  <Card className="p-6 hover:shadow-lg transition-shadow">
    <CardContent className="p-0 space-y-4">
      <div className="flex items-start gap-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-lg">{name}</h4>
              <p className="text-sm text-text-light">{role}</p>
              <p className="text-sm text-text-light">{company}</p>
            </div>
            {companyLogo && (
              <img src={companyLogo} alt={`${company} logo`} className="w-12 h-12 object-contain" />
            )}
          </div>
        </div>
      </div>
      <p className="text-text leading-relaxed">{content}</p>
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

  return (
    <section className="py-16 px-4 bg-primary-light">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Words of Reference</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;