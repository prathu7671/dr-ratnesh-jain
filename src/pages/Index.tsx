
import Navigation from "@/components/Navigation";
import ImpactCounter from "@/components/ImpactCounter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ValueProp from "@/components/ValueProp";
import FeaturedCollaborations from "@/components/FeaturedCollaborations";
import ConsultancyProjects from "@/components/ConsultancyProjects";
import StartupGrid from "@/components/StartupGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-900">
                Dr. Ratnesh Jain
              </h1>
              <p className="text-lg text-gray-600">
                Associate Professor at ICT Mumbai
              </p>
              <p className="text-gray-600">
                Dr. Ratnesh Jain, Associate Professor at ICT Mumbai, is a visionary in biopharmaceutical product development, a co-founder of innovative startups, and a consultant empowering industries through strategic solutions and knowledge sharing platforms.
              </p>
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div>
              <img
                src="https://static.wixstatic.com/media/a3bbe4_6057860a5f334db18cdcae340cddb952~mv2.png"
                alt="Dr. Ratnesh Jain"
                className="rounded-lg shadow-sm w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Counter */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-900">Impact at a Glance</h2>
          <ImpactCounter />
        </div>
      </section>
      
      {/* Value Proposition */}
      <section className="py-20 px-4 bg-green-50">
        <div className="max-w-5xl mx-auto">
          <ValueProp />
        </div>
      </section>
      
      {/* Expertise */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-900">Key Areas of Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Research & Innovations", desc: "Pioneering work in nanomedicine and bioprinting", bg: "bg-purple-50" },
              { title: "Consultancy", desc: "Strategic advising for biopharma industry", bg: "bg-blue-50" },
              { title: "Education", desc: "Training and mentoring future scientists", bg: "bg-yellow-50" }
            ].map((item, index) => (
              <div key={index} className={`p-6 ${item.bg} rounded-lg border border-gray-100 hover:border-gray-200 transition-colors shadow-sm`}>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-20 px-4 bg-pink-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-900">Industry Collaborations</h2>
          <FeaturedCollaborations />
        </div>
      </section>
      
      {/* Consultancy Projects */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-900">Recent Consultancy Projects</h2>
          <ConsultancyProjects />
        </div>
      </section>
      
      {/* Startups */}
      <section className="py-20 px-4 bg-indigo-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-900">Startup Initiatives</h2>
          <StartupGrid />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Ready to Collaborate?</h2>
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
