import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface WorkExperienceItemProps {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  achievements?: { title: string; items: string[] }[];
  technologies: string[];
  logo?: string;
  description?: string;
}

const WorkExperienceItem = ({
  company,
  role,
  period,
  responsibilities,
  achievements,
  technologies,
  logo,
  description
}: WorkExperienceItemProps) => {
  return (
    <Card className="p-8 bg-card border-gray-700">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="border-none">
          <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-4">
                {logo && (
                  <img src={logo} alt={`${company} logo`} className="h-8 w-auto" />
                )}
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
              {description && (
                <div className="mb-6 p-4 bg-card-lighter rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-2">Our Technology</h4>
                  <p className="text-gray-300 leading-relaxed">{description}</p>
                </div>
              )}
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
                {achievements && achievements.map((achievement, index) => (
                  <li key={`achievement-${index}`}>
                    {achievement.title}
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                      {achievement.items.map((item, itemIndex) => (
                        <li key={`achievement-${index}-item-${itemIndex}`}>{item}</li>
                      ))}
                    </ul>
                  </li>
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

export default WorkExperienceItem;