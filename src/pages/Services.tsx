
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Database, Timer, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div className="min-h-screen bg-card pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Enterprise Solutions & Technical Excellence
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Specialized technical consultancy focused on scalable architectures, machine learning solutions, and enterprise-grade development.
          </p>
          
          {/* Service Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-card border-accent/10">
              <CardHeader>
                <Code className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-xl text-white">Full-Stack Development</CardTitle>
                <p className="text-gray-400">
                  Full-stack development with modern technologies. Specializing in scalable, maintainable solutions.
                </p>
              </CardHeader>
            </Card>
            <Card className="bg-card border-accent/10">
              <CardHeader>
                <Brain className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-xl text-white">Machine Learning Solutions</CardTitle>
                <p className="text-gray-400">
                  Machine learning solutions, from predictive modeling to optimization algorithms.
                </p>
              </CardHeader>
            </Card>
            <Card className="bg-card border-accent/10">
              <CardHeader>
                <Database className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-xl text-white">System Architecture</CardTitle>
                <p className="text-gray-400">
                  Designing and implementing robust, scalable system architectures.
                </p>
              </CardHeader>
            </Card>
          </div>

          {/* Engagement Models */}
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Engagement Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-accent/10 hover:border-accent/30 transition-all">
              <CardHeader>
                <Calendar className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-xl text-white">Full-Time Project</CardTitle>
                <div className="text-2xl font-bold text-accent mt-2">
                  From 100.000 DKK/month
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    • Dedicated full-time technical expertise
                  </li>
                  <li className="flex items-start gap-2">
                    • Direct project integration
                  </li>
                  <li className="flex items-start gap-2">
                    • Strategic technical leadership
                  </li>
                  <li className="flex items-start gap-2">
                    • Enterprise-grade development
                  </li>
                </ul>
                <Button 
                  className="w-full mt-6 bg-accent hover:bg-accent/90 text-primary"
                  onClick={() => document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-accent/10 hover:border-accent/30 transition-all">
              <CardHeader>
                <Timer className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-xl text-white">Part-Time Engagement</CardTitle>
                <div className="text-2xl font-bold text-accent mt-2">
                  Hourly Rate Negotiated
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    • Flexible engagement model
                  </li>
                  <li className="flex items-start gap-2">
                    • Project-based consultation
                  </li>
                  <li className="flex items-start gap-2">
                    • Technical advisory
                  </li>
                  <li className="flex items-start gap-2">
                    • Scalable commitment
                  </li>
                </ul>
                <Button 
                  className="w-full mt-6 bg-accent hover:bg-accent/90 text-primary"
                  onClick={() => document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Discuss Requirements
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-accent/10 hover:border-accent/30 transition-all">
              <CardHeader>
                <Clock className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-xl text-white">Consultancy Package</CardTitle>
                <div className="text-2xl font-bold text-accent mt-2">
                  10.000 DKK
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    • 10 hours of consultancy
                  </li>
                  <li className="flex items-start gap-2">
                    • Technical assessment
                  </li>
                  <li className="flex items-start gap-2">
                    • Architecture review
                  </li>
                  <li className="flex items-start gap-2">
                    • Strategic planning
                  </li>
                </ul>
                <Button 
                  className="w-full mt-6 bg-accent hover:bg-accent/90 text-primary"
                  onClick={() => document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Purchase Package
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

