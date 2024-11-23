import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  return (
    <section className="py-16 bg-card-lighter px-4 animate-slide-in relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
      
      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-4 mb-12">
          <img 
            src="/lovable-uploads/f86bcac0-68ca-45bb-b8e3-b2fba21107c3.png" 
            alt="ITU Logo" 
            className="h-12 w-auto"
          />
          <h2 className="text-3xl font-bold text-white">Education</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <Card className="p-6 bg-card/80 backdrop-blur border-gray-700 hover:bg-card/90 transition-colors hover:shadow-xl hover:scale-[1.02] transform duration-200">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">IT-University of Copenhagen</h3>
                <Badge className="bg-accent text-card font-semibold">MSc</Badge>
              </div>
              <p className="text-gray-400 mb-2">Aug. 2019 - Aug 2021</p>
              <div className="space-y-2">
                <p className="text-gray-300">Advanced algorithms and optimization</p>
                <p className="text-accent font-medium">GPA (top 10%): 11.00 / 12.00</p>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur border-gray-700 hover:bg-card/90 transition-colors hover:shadow-xl hover:scale-[1.02] transform duration-200">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">IT-University of Copenhagen</h3>
                <Badge className="bg-primary-light text-primary font-semibold">BSc</Badge>
              </div>
              <p className="text-gray-400 mb-2">Aug. 2016 - Aug 2019</p>
              <div className="space-y-2">
                <p className="text-gray-300">General software engineering</p>
                <p className="text-gray-300">Electives in Machine Learning and Security</p>
              </div>
            </Card>
          </div>
          
          <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/7bd2e008-3b74-4b32-bb0f-e4175cb18e4f.png"
              alt="IT University of Copenhagen Building"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm font-medium">IT University of Copenhagen</p>
              <p className="text-xs text-gray-300">Rued Langgaards Vej 7, 2300 København</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;