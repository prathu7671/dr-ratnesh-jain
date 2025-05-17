import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Wrench, Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const SkillDevelopment = () => {
  const upcomingWorkshops = [
    {
      title: "3DCC Workshop",
      date: "June 2-6, 2025",
      location: "INSTITUTE OF CHEMICAL TECHNOLOGY, MUMBAI",
      description: "Comprehensive training on 3D cell culture technologies and applications."
    },
    {
      title: "Peptides and Complex Generics Symposium",
      date: "September 25-26, 2025",
      location: "The LaLiT, Mumbai",
      description: "Strategic approaches to navigating challenges in peptides and complex generics development."
    }
  ];

  const successStories = [
    {
      name: "Dr. Priya Sharma",
      position: "Head of R&D, PharmaTech",
      story: "The Biologics Workshop transformed our approach to bioprocessing, leading to a 30% improvement in yield and significant cost savings.",
      workshop: "Biologics Workshop Series"
    },
    {
      name: "Rahul Mehra",
      position: "Founder, BioInnovate Startups",
      story: "Dr. Jain's mentorship through the DST-STUTI program gave me the confidence and skills to launch my own biotech startup.",
      workshop: "DST-STUTI Program"
    },
    {
      name: "Ananya Patel",
      position: "Research Scientist, Global Pharma",
      story: "The hands-on training program provided practical skills that were immediately applicable to my research work.",
      workshop: "Hands-on Training Program"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="hero-title mb-6">Skill Development</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Training programs and skill development initiatives led by Dr. Ratnesh Jain, designed to empower 
            professionals in the biopharmaceutical industry.
          </p>
        </div>
      </section>
      
      {/* Programs Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Skill Development Initiatives</h2>
          <div className="grid gap-12">
            <Card>
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Biologics Workshop Series</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  The Biologics Workshop Series focuses on advancing skills in biologics development, manufacturing, and regulatory compliance. 
                  With hands-on training and expert insights, this series aims to equip participants with the knowledge and tools needed to excel in the biopharma industry.
                </p>
                <p className="text-gray-600">
                  Workshops cover upstream and downstream processing, quality control, analytical techniques, and regulatory considerations. 
                  Participants engage in practical sessions, case studies, and industry interactions to gain comprehensive insights into biologics manufacturing.
                </p>
                <div className="pt-2">
                  <Button>Register for Next Workshop</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <BookOpen className="w-12 h-12 text-primary mb-4" />
                <CardTitle>DST-STUTI Programs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Our DST-STUTI (Synergistic Training program Utilizing the Scientific and Technological Infrastructure) programs offer comprehensive 
                  training in biopharma technologies, with a focus on innovation and industry relevance. 
                  Participants gain practical experience and insights into the latest advancements in the field.
                </p>
                <p className="text-gray-600">
                  These Department of Science & Technology sponsored programs enable access to sophisticated scientific instruments and provide 
                  training on cutting-edge technologies. The initiative aims to create skilled manpower for research and entrepreneurship in emerging areas of science and technology.
                </p>
                <div className="pt-2">
                  <Button>Learn More</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Wrench className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Hands-on Training Programs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Our hands-on training programs provide participants with practical experience in biopharma technologies and processes. 
                  Led by industry experts, these programs offer valuable insights and skills development opportunities directly applicable to workplace challenges.
                </p>
                <p className="text-gray-600">
                  These specialized programs are designed for professionals seeking to enhance their technical skills in specific areas such as 
                  cell culture techniques, purification processes, analytical methods, and quality assurance practices. Small group sizes ensure 
                  personalized attention and maximum learning opportunities.
                </p>
                <div className="pt-2">
                  <Button>Explore Programs</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Mumbai Biocluster */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Mumbai Biocluster</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Vision and Objectives</h3>
              <p className="text-gray-700">
                The Mumbai Biocluster is a collaborative platform that brings together academia, industry, and government agencies 
                to foster innovation and skill development in the biopharmaceutical sector. As a co-founder, Dr. Ratnesh Jain 
                has been instrumental in shaping this initiative to address the industry's evolving needs.
              </p>
              <p className="text-gray-700">
                The cluster aims to create an ecosystem that promotes knowledge sharing, infrastructure access, and collaborative research, 
                ultimately contributing to the growth of India's biopharmaceutical capabilities.
              </p>
              <div className="pt-2">
                <Button variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Visit Mumbai Biocluster
                  </a>
                </Button>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-6">Key Initiatives</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <Users className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Collaborative research projects between industry and academia</span>
                </li>
                <li className="flex">
                  <Wrench className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Access to specialized equipment and infrastructure</span>
                </li>
                <li className="flex">
                  <GraduationCap className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Training programs for students and industry professionals</span>
                </li>
                <li className="flex">
                  <BookOpen className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Knowledge sharing workshops and conferences</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Workshops */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Upcoming Workshops & Events</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingWorkshops.map((workshop, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{workshop.title}</h3>
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{workshop.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{workshop.description}</p>
                  <Button variant="outline" className="w-full">Register</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/contact">
              <Button variant="outline">Request Custom Training for Your Team</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Success Stories */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Success Stories & Testimonials</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="mb-4 text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <blockquote className="text-gray-700 mb-4">
                  {story.story}
                </blockquote>
                <div className="border-t pt-4">
                  <p className="font-bold">{story.name}</p>
                  <p className="text-gray-600">{story.position}</p>
                  <p className="text-primary text-sm mt-1">{story.workshop}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Enhance Your Team's Skills</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Interested in organizing a customized training program for your organization? 
            Contact us to discuss your specific requirements and design a tailored skill development solution.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SkillDevelopment;
