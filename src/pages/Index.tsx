
import Navigation from "@/components/Navigation";
import ImpactCounter from "@/components/ImpactCounter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Beaker, Briefcase, Building, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import ValueProp from "@/components/ValueProp";
import FeaturedCollaborations from "@/components/FeaturedCollaborations";
import ConsultancyProjects from "@/components/ConsultancyProjects";
import StartupGrid from "@/components/StartupGrid";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="hero-title mb-6">
              Accelerating Biopharma Innovation <br className="hidden md:block" />
              <span className="block mt-2">Transforming Research into Scalable Impact</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Dr. Ratnesh Jain is a visionary leader in biopharma, nanomedicine, and 3D bioprinting, 
              dedicated to advancing research, education, and entrepreneurship.
            </p>
            <Button size="lg" className="mr-4">
              Explore More <ArrowRight className="ml-2" size={16} />
            </Button>
            <Button size="lg" variant="outline">
              Book Consultation
            </Button>
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
      
      {/* Featured Collaborations */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Trusted by Industry Leaders</h2>
          <FeaturedCollaborations />
        </div>
      </section>
      
      {/* Consultancy Projects */}
      <section className="py-16 px-4 bg-gradient-to-l from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Featured Consultancy Projects</h2>
          <ConsultancyProjects />
        </div>
      </section>
      
      {/* Startups */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Entrepreneurial Ventures</h2>
          <StartupGrid />
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center">Areas of Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Beaker className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Biopharma Research</h3>
              <p className="text-gray-600">
                Leading innovative research in biopharmaceuticals, nanomedicine, and drug delivery systems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <BookOpen className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Education</h3>
              <p className="text-gray-600">
                Mentoring the next generation of biopharma innovators through advanced courses and workshops.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Briefcase className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Consulting</h3>
              <p className="text-gray-600">
                Providing expert consultation for biopharma companies, startups, and research institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-bl from-white via-blue-50 to-purple-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Interested in collaboration or consultation? Let's discuss how we can work together.
          </p>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 h-32"
                  placeholder="Your message"
                />
              </div>
              <Button size="lg" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
