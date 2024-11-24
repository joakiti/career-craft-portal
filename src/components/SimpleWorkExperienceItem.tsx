import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SimpleWorkExperienceItemProps {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
  defaultOpen?: boolean;
}

const SimpleWorkExperienceItem = ({
  company,
  role,
  period,
  responsibilities,
  technologies,
  defaultOpen = false
}: SimpleWorkExperienceItemProps) => {
  const value = `${company}-${role}`.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <Card className="p-8 bg-card border-gray-700 hover:shadow-xl transition-all duration-300">
      <Accordion type="single" collapsible defaultValue={defaultOpen ? value : undefined}>
        <AccordionItem value={value} className="border-none">
          <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-4">
                <img 
                  src="/lovable-uploads/5e6cfa9b-a4ca-4489-a883-027093727213.png" 
                  alt={`${company} logo`} 
                  className="h-8 w-auto"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{company}</h3>
                  <p className="text-accent text-lg">{role}</p>
                  <p className="text-gray-400">{period}</p>
                </div>
              </div>
            </div>
          </div>
          <AccordionTrigger className="hover:no-underline">
            <span className="text-sm text-gray-400">Click to expand details</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-card-lighter text-gray-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default SimpleWorkExperienceItem;