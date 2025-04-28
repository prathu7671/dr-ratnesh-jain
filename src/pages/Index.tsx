import Navigation from "@/components/Navigation";
import ImpactCounter from "@/components/ImpactCounter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Beaker, Briefcase, Building, Award, Users, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import ValueProp from "@/components/ValueProp";
import FeaturedCollaborations from "@/components/FeaturedCollaborations";
import ConsultancyProjects from "@/components/ConsultancyProjects";
import StartupGrid from "@/components/StartupGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Photo and Profile */}
      <section className="pt-24 pb-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h1 className="text-4xl font-bold text-gray-900">
                Dr. Ratnesh Jain
              </h1>
              <p className="text-lg text-gray-600">
                Associate Professor at ICT Mumbai
              </p>
              <p className="text-gray-600">
                A distinguished expert in biopharmaceutical product development with over 15 years of experience.
                Specializing in nanomedicine, 3D bioprinting, and innovative drug delivery systems. Leading
                breakthrough research while mentoring the next generation of scientists.
              </p>
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Connect</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/ratnesh-jain.jpg"
                alt="Dr. Ratnesh Jain"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Counter Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Impact at a Glance</h2>
          <ImpactCounter />
        </div>
      </section>
      
      {/* Value Proposition Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <ValueProp />
        </div>
      </section>
      
      {/* Other sections with minimal styling */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Key Areas of Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Awards and Fellowships</h3>
              <p className="text-gray-600">Recognition for excellence in biopharmaceutical research.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Beaker className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Research & Innovations</h3>
              <p className="text-gray-600">Pioneering work in nanomedicine and bioprinting.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Consultancy</h3>
              <p className="text-gray-600">Strategic advising for biopharma industry.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <GraduationCap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Education</h3>
              <p className="text-gray-600">Training and mentoring future scientists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Remaining Sections */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Industry Collaborations</h2>
          <FeaturedCollaborations />
        </div>
      </section>
      
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Recent Consultancy Projects</h2>
          <ConsultancyProjects />
        </div>
      </section>
      
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Startup Initiatives</h2>
          <StartupGrid />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Collaborate?</h2>
          <p className="text-gray-600 mb-8">
            Connect with Dr. Ratnesh Jain to explore collaboration opportunities.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
