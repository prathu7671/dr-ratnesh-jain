
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Target, Calculator, Shield, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Consulting = () => {
  const advisorRoles = [
    {
      company: "Avay Biosciences",
      role: "Strategic advisor for biopharma product development."
    },
    {
      company: "Oncosimis Biotech Pvt. Ltd.",
      role: "Advisor on nanomedicine and drug delivery technologies."
    },
    {
      company: "Mynvax Pvt. Ltd.",
      role: "Advisor for process development and scale-up."
    },
    {
      company: "Serum Institute of India",
      role: "Advisor for mRNA process development."
    }
  ];

  const startupVentures = [
    {
      name: "Wetranslate",
      description: "Innovative translation services for the biopharma industry."
    },
    {
      name: "IPH",
      description: "Cutting-edge biopharma solutions for product development."
    },
    {
      name: "Biosimulate",
      description: "Advanced biopharma simulations for process optimization."
    },
    {
      name: "Mumbai Biocluster",
      description: "Collaborative biopharma research and development hub."
    },
    {
      name: "Bio-kraft Foods",
      description: "Innovative biopharma food solutions using biotechnology."
    },
    {
      name: "Amar Biosystems",
      description: "Pioneering biopharma systems for laboratory applications."
    },
    {
      name: "Nexcure",
      description: "Revolutionary biopharma therapeutics for unmet medical needs."
    },
    {
      name: "Newgen Biopharma",
      description: "Developing next-generation biopharmaceutical products."
    }
  ];

  const testimonials = [
    {
      quote: "Dr. Jain's expertise has been invaluable in advancing our biopharma projects. His strategic insights helped us navigate complex regulatory challenges.",
      author: "Dr. Anand Kumar",
      position: "Director, Research & Development",
      company: "Leading Pharmaceutical Company"
    },
    {
      quote: "His strategic insights and innovative approach have significantly impacted our product development. We've seen a 40% reduction in time-to-market.",
      author: "Priya Mehta",
      position: "CEO",
      company: "Biotech Startup"
    },
    {
      quote: "Working with Dr. Jain has transformed our approach to biopharmaceutical development. His guidance on process optimization was game-changing.",
      author: "Rajesh Sharma",
      position: "Head of Operations",
      company: "Global Biopharma Manufacturer"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="hero-title mb-6">Consulting & Entrepreneurship</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dr. Ratnesh Jain's consulting services and entrepreneurial ventures in the biopharmaceutical industry.
          </p>
        </div>
      </section>
      
      {/* Consulting Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Transforming Business Outcomes
              </h2>
              <p className="text-gray-700 mb-4">
                Dr. Ratnesh Jain specializes in transforming business outcomes through strategic consulting and innovative 
                solutions. With a focus on regulatory navigation, cost optimization, and quality policy, he ensures that your 
                projects achieve a 90% success rate for regulatory approvals.
              </p>
              <p className="text-gray-700 mb-6">
                His in-house designed methods for early drug development stages and customized quotations make him a trusted 
                partner for biopharma companies seeking to optimize their processes and products.
              </p>
              <Button asChild>
                <Link to="/contact">
                  Book a Consultation
                </Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg">
              <div className="flex justify-center mb-8">
                <Award className="h-20 w-20 text-accent" />
              </div>
              <blockquote className="text-lg italic text-gray-700 text-center">
                "Success in biopharmaceutical development comes from a combination of scientific excellence, 
                strategic planning, and careful execution. My goal is to guide companies through this 
                complex journey to achieve their objectives efficiently and effectively."
                <footer className="mt-4 font-medium text-gray-600">— Dr. Ratnesh Jain</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      
      {/* Consulting Areas */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Consulting Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Briefcase className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Strategic Advisory</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Guiding biopharma companies in strategic planning and execution, with a focus on aligning business goals 
                  with technical capabilities. Dr. Jain provides insights on market trends, competitive positioning, and 
                  growth opportunities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Target className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Regulatory Navigation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ensuring 90% success rate for regulatory approvals through well-designed quality policies and compliance 
                  strategies. Dr. Jain's expertise helps companies navigate complex regulatory landscapes efficiently.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Calculator className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Cost Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Customized quotations for cost-effective analysis and process optimization. Get your product analyzed at 
                  lower costs with Dr. Jain's cost optimization strategies tailored to your specific requirements.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Quality Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Well-designed quality policy to meet GLP requirements and ensure product consistency and safety. 
                  Dr. Jain helps companies implement robust quality management systems that align with industry best practices.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Briefcase className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Biopharma Product Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Assisting in the development and commercialization of biopharma products, from initial concept to market 
                  launch. Dr. Jain's approach emphasizes efficiency, quality, and market relevance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Skilled Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Access to highly skilled subject matter experts for quick responses to client queries. Dr. Jain's network 
                  of specialists ensures comprehensive support for diverse technical challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Advisor Roles */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Advisor Roles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {advisorRoles.map((role, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{role.company}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{role.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Entrepreneurial Ventures */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Entrepreneurial Ventures</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {startupVentures.map((venture, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{venture.name}</h3>
                  <p className="text-gray-600">{venture.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Industry Testimonials</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg">
                <div className="mb-4 text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <blockquote className="text-gray-700 mb-4">
                  {testimonial.quote}
                </blockquote>
                <div className="border-t pt-4">
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.position}</p>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Ready to Transform Your Business?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Connect with Dr. Ratnesh Jain to explore how his consulting services can help your organization 
            achieve its goals in the biopharmaceutical industry.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">
              Schedule a Consultation
            </Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Consulting;
