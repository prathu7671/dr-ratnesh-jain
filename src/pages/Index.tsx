
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
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="hero-title mb-6">
              Innovating Biopharmaceutical Solutions <br className="hidden md:block" />
              <span className="block mt-2">Empowering the Next Generation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Dr. Ratnesh Jain, Associate Professor at ICT Mumbai, is a visionary in biopharmaceutical product development, 
              a co-founder of innovative startups, and a consultant empowering industries through strategic solutions and 
              knowledge sharing platforms.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/about">
                  Explore More <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">
                  Collaborate with Dr. Jain
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Impact Counter Section */}
          <div className="py-16">
            <h2 className="section-title text-center mb-12">Impact at a Glance</h2>
            <ImpactCounter />
          </div>
        </div>
      </section>
      
      {/* Value Prop Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <ValueProp />
        </div>
      </section>
      
      {/* Key Highlights Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Key Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Award className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Awards and Fellowships</h3>
              <p className="text-gray-600 mb-4">
                Recognition for innovation and excellence in biopharmaceutical research.
              </p>
              <Link to="/about" className="text-primary font-medium hover:underline">Learn More</Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Beaker className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Research & Innovations</h3>
              <p className="text-gray-600 mb-4">
                Pioneering work in nanomedicine, 3D bioprinting, and biopharma.
              </p>
              <Link to="/research" className="text-primary font-medium hover:underline">Learn More</Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Briefcase className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Startups & Consulting</h3>
              <p className="text-gray-600 mb-4">
                Strategic advising and entrepreneurial ventures in the biopharma industry.
              </p>
              <Link to="/consulting" className="text-primary font-medium hover:underline">Learn More</Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <GraduationCap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Skill Development</h3>
              <p className="text-gray-600 mb-4">
                Knowledge platforms and training initiatives for industry professionals.
              </p>
              <Link to="/skill-development" className="text-primary font-medium hover:underline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Collaborations */}
      <section className="py-16 px-4 bg-gradient-to-l from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Trusted by Industry Leaders</h2>
          <FeaturedCollaborations />
        </div>
      </section>
      
      {/* Consultancy Projects */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Featured Consultancy Projects</h2>
          <ConsultancyProjects />
        </div>
      </section>
      
      {/* Startups */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Entrepreneurial Ventures</h2>
          <StartupGrid />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Ready to Collaborate?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Connect with Dr. Ratnesh Jain to explore collaboration opportunities and transformative solutions.
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
