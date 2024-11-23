import { Card } from "@/components/ui/card";

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
            <Card className="p-6 bg-card/80 backdrop-blur border-gray-700 hover:bg-card/90 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">IT-University of Copenhagen</h3>
              <p className="text-gray-400 mb-2">MSc in Computer Science | Aug. 2019 - Aug 2021</p>
              <p className="text-gray-300">Advanced algorithms and optimization. GPA (top 10%): 11.00 / 12.00</p>
            </Card>
            <Card className="p-6 bg-card/80 backdrop-blur border-gray-700 hover:bg-card/90 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">IT-University of Copenhagen</h3>
              <p className="text-gray-400 mb-2">BSc in Computer Science | Aug. 2016 - Aug 2019</p>
              <p className="text-gray-300">General software engineering, with electives in Machine Learning and Security.</p>
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