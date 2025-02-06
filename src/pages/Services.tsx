import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Database, Timer, Clock, Calendar, Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const Services = () => {

  return (
    <div className="min-h-screen bg-card pt-16 flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Enterprise Solutions & Technical Excellence
          </h1>
          <p className="text-base md:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-8 md:mb-12">
            Specialized technical consultancy focused on scalable architectures, machine learning solutions, and enterprise-grade development.
          </p>
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-accent/10 max-w-lg mx-auto">
            <div className="flex justify-between items-center gap-4">
              <div className="text-center">
                <div className="text-lg md:text-3xl font-bold text-accent">10+</div>
                <div className="text-xs md:text-base text-gray-400">Years Experience</div>
              </div>
              <div className="border-l border-accent/10 pl-4 text-center">
                <div className="text-lg md:text-3xl font-bold text-accent">AI & ML</div>
                <div className="text-xs md:text-base text-gray-400">Real experience, not just wrappers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-12 bg-card-lighter">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12">Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-card border-accent/10">
              <CardHeader className="space-y-4">
                <Code className="w-8 h-8 md:w-12 md:h-12 text-accent" />
                <CardTitle className="text-lg md:text-xl text-white">Full-Stack Development</CardTitle>
                <p className="text-sm md:text-base text-gray-400">
                  Enterprise-grade development with modern technologies, focusing on scalable and maintainable solutions.
                </p>
                <div className="space-y-3 pt-2">
                  <h4 className="font-semibold text-white text-sm md:text-base">Recent Success:</h4>
                  <p className="text-xs md:text-sm text-gray-400">
                    Led development of an AI-powered support agent achieving 85% self-service rate for Tripletex, Norway's largest self-service accounting SaaS.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-gray-300">Full-stack TypeScript/React development</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-gray-300">Cloud-native architecture (AWS/Azure)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-gray-300">CI/CD pipeline optimization</span>
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
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 px-4 bg-card">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12">
            Why Choose Me?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-6">
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-white flex items-center gap-2">
                  <X className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
                  With Traditional Consultancies...
                </h3>
                <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    Generic solutions that don't consider your unique technical challenges
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    Junior developers with limited enterprise experience
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    Overhead costs from large organizational structures
                  </li>
                </ul>
              </div>
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-white flex items-center gap-2">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                  With My Expertise...
                </h3>
                <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    Direct partnership with senior expertise and proven enterprise success
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    Custom solutions tailored to your specific technical challenges
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    Efficient delivery with minimal overhead
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-card-lighter rounded-lg p-4 md:p-8">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Recent Client Success</h3>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h4 className="text-accent font-medium mb-1 md:mb-2">Tripletex (Norway)</h4>
                  <p className="text-sm md:text-base text-gray-300">Led AI team in developing custom LLM solutions, achieving 80%+ accuracy in customer query handling</p>
                </div>
                <div>
                  <h4 className="text-accent font-medium mb-1 md:mb-2">Visma Enterprise</h4>
                  <p className="text-sm md:text-base text-gray-300">Optimized core system performance, reducing loading times from 30s to 500ms</p>
                </div>
                <div>
                  <h4 className="text-accent font-medium mb-1 md:mb-2">GoDream</h4>
                  <p className="text-sm md:text-base text-gray-300">Developed custom gift-card solution with modern .NET stack and AWS infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation-section" className="py-16 px-4 bg-card-lighter">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Let's Discuss Your Project
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Schedule a free consultation to explore how we can transform your technical challenges into opportunities.
            </p>
          </div>
          <div className="flex justify-center">
            <ConsultationForm />
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Engagement Models</h2>
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
