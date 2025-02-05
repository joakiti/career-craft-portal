import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Database, Timer, Clock, Calendar, Check, X } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";
import { cn } from "@/lib/utils";

const Services = () => {
  return (
    <div className="min-h-screen bg-card pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Enterprise Solutions & Technical Excellence
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-8">
            Specialized technical consultancy focused on scalable architectures, machine learning solutions, and enterprise-grade development.
          </p>
          <div className="flex justify-center gap-4 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">10+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">5</div>
              <div className="text-gray-400">Enterprise Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">Many</div>
              <div className="text-gray-400">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <Card className="bg-card border-accent/10">
          <CardHeader>
            <Code className="w-12 h-12 text-accent mb-4" />
            <CardTitle className="text-xl text-white">Full-Stack Development</CardTitle>
            <p className="text-gray-400 mb-4">
              Enterprise-grade development with modern technologies, focusing on scalable and maintainable solutions.
            </p>
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Recent Success:</h4>
              <p className="text-sm text-gray-400">
                Led development of an AI-powered support agent achieving 85% self-service rate for Tripletex, Norway's largest self-service accounting SaaS.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">Full-stack TypeScript/React development</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">Cloud-native architecture (AWS/Azure)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">CI/CD pipeline optimization</span>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
        <Card className="bg-card border-accent/10">
          <CardHeader>
            <Brain className="w-12 h-12 text-accent mb-4" />
            <CardTitle className="text-xl text-white">Machine Learning Solutions</CardTitle>
            <p className="text-gray-400 mb-4">
              From predictive modeling to optimization algorithms, delivering AI solutions that drive business value.
            </p>
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Recent Success:</h4>
              <p className="text-sm text-gray-400">
                Developed an advanced Automatic Rostering system for hospitals, solving the NP-Hard Nurse Scheduling Problem with custom optimization algorithms.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">Custom LLM solutions with RAG</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">Optimization algorithms</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">ML model development</span>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
        <Card className="bg-card border-accent/10">
          <CardHeader>
            <Database className="w-12 h-12 text-accent mb-4" />
            <CardTitle className="text-xl text-white">System Architecture</CardTitle>
            <p className="text-gray-400 mb-4">
              Designing and implementing robust, scalable system architectures that stand the test of time.
            </p>
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Recent Success:</h4>
              <p className="text-sm text-gray-400">
                Successfully migrated legacy mainframe systems to modern AWS infrastructure for multiple enterprise clients.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">Microservices architecture</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">Cloud migration strategies</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">Performance optimization</span>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Why Choose Me?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <X className="w-5 h-5 text-red-500" />
                With Traditional Consultancies...
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  • Generic solutions that don't consider your unique technical challenges
                </li>
                <li className="flex items-start gap-2">
                  • Junior developers with limited enterprise experience
                </li>
                <li className="flex items-start gap-2">
                  • Overhead costs from large organizational structures
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                With My Expertise...
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  • Responsibility from end-to-end. The partnership is between you and me, and I take that very seriously.
                </li>
                <li className="flex items-start gap-2">
                  • Direct access to senior expertise with proven enterprise success
                </li>
                <li className="flex items-start gap-2">
                  • Custom solutions tailored to your specific technical challenges
                </li>
                <li className="flex items-start gap-2">
                  • Efficient delivery with minimal overhead
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-card-lighter rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Recent Client Success</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-accent font-medium">Tripletex (Norway)</h4>
                <p className="text-gray-300 text-sm">Led AI team in developing custom LLM solutions, achieving 80%+ accuracy in customer query handling</p>
              </div>
              <div>
                <h4 className="text-accent font-medium">Visma Enterprise</h4>
                <p className="text-gray-300 text-sm">Optimized core system performance, reducing loading times from 30s to 500ms</p>
              </div>
              <div>
                <h4 className="text-accent font-medium">GoDream</h4>
                <p className="text-gray-300 text-sm">Developed custom gift-card solution with modern .NET stack and AWS infrastructure</p>
              </div>
            </div>
          </div>
        </div>
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
              From 75.000 DKK/month
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-2">Perfect For:</h4>
                <p className="text-sm text-gray-400">Large-scale projects requiring dedicated expertise and daily involvement</p>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Dedicated full-time technical expertise
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Direct project integration
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Strategic technical leadership
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Enterprise-grade development
                </li>
              </ul>
            </div>
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
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-2">Perfect For:</h4>
                <p className="text-sm text-gray-400">Projects requiring expert guidance and flexible involvement</p>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Flexible engagement model
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Project-based consultation
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Technical advisory
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Scalable commitment
                </li>
              </ul>
            </div>
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
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-2">Perfect For:</h4>
                <p className="text-sm text-gray-400">Quick technical assessments and strategic planning</p>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  10 hours of consultancy
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Technical assessment
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Architecture review
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Strategic planning
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Single Contact Button for all services */}
      <div className="mt-12 flex justify-center">
        <ConsultationForm />
      </div>
    </div>
  );
};

export default Services;
