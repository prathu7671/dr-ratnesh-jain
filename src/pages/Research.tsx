
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Beaker, Book, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Research = () => {
  const projects = [
    {
      title: "Development of Novel Brain-Targeted Nasal Drug Delivery",
      description: "Innovative approach to deliver drugs directly to the brain via nasal administration.",
      impact: "Enhanced drug efficacy and reduced systemic side effects."
    },
    {
      title: "3D Bioprinting of Functional Tissues",
      description: "Utilizing 3D bioprinting to create functional tissues for medical applications.",
      impact: "Advancing regenerative medicine and personalized healthcare."
    },
    {
      title: "Nanomedicine for Targeted Cancer Therapy",
      description: "Developing nanocarriers for targeted delivery of anti-cancer drugs.",
      impact: "Improved therapeutic efficacy with minimal side effects."
    }
  ];

  const publications = [
    {
      title: "Sterilizing bioinks: Understanding the impact of techniques on 3D bioprinting materials",
      authors: "Menon, L., Sanjanwala, D., Sharma, S., Jain R*, & Dandekar P.",
      journal: "Bioprinting",
      year: 2025
    },
    {
      title: "Biomimetic replenishment therapy of cortisol using semi-solid extrusion–3D printed tablets for adrenal insufficiencies",
      authors: "Ganatra, P., Ashapogu, A., Epili, R., Duggum, S., Desai, J., Jain R*, & Dandekar P.",
      journal: "International Journal of Pharmaceutics",
      year: 2025
    },
    {
      title: "Advances in 3D bioprinting for tissue engineering applications",
      authors: "Jain R*, Dandekar P., & Sharma S.",
      journal: "Journal of Tissue Engineering",
      year: 2024
    }
  ];

  const patents = [
    {
      title: "Novel formulation for brain-targeted drug delivery",
      inventors: "Jain R., Dandekar P., Sharma S.",
      year: 2023,
      status: "Granted"
    },
    {
      title: "3D bioprinting method for functional tissue generation",
      inventors: "Jain R., Ganatra P., Menon L.",
      year: 2022,
      status: "Pending"
    },
    {
      title: "Nanocarrier system for targeted cancer therapy",
      inventors: "Jain R., Puranik A., Naidu A.",
      year: 2021,
      status: "Granted"
    }
  ];

  const conferences = [
    {
      name: "ThermoFisher Scientific's Global Health Equity Conclave",
      topic: "Ideas in Motion: Panel Discussion on Clinical Diagnostics Solutions",
      date: "February 27, 2024"
    },
    {
      name: "International Proteomics Conference (APT2024)",
      topic: "Developing biopharmaceuticals from lab to manufacturing",
      date: "February 19, 2024"
    },
    {
      name: "IITB Biopharma Summit 2023",
      topic: "Emerging Technologies and Roadmap for Translational Research",
      date: "November 23-24, 2023"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="hero-title mb-6">Research & Innovations</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pioneering advancements in biopharmaceutical product development, nanomedicine, 
            and 3D bioprinting technologies.
          </p>
        </div>
      </section>
      
      {/* Current Research Focus */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Current Research Focus</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Beaker className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Biopharmaceutical Product Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Process development, scale-up, and manufacturing of biopharmaceutical products, 
                  with a focus on optimizing production efficiency and ensuring product quality.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Beaker className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Nanomedicine Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Development of innovative nanocarriers for targeted drug delivery, 
                  improving therapeutic efficacy while minimizing side effects in various disease treatments.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Beaker className="h-12 w-12 text-primary mb-4" />
                <CardTitle>3D Cell Culture & Bioprinting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Pioneering techniques in 3D bioprinting for tissue engineering and regenerative medicine, 
                  creating functional tissues for medical applications and research.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="border-t pt-4">
                    <p className="font-medium text-primary">Impact:</p>
                    <p className="text-gray-600">{project.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Research Collaborations */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Research Collaborations and Partnerships</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Industry Collaborations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <li className="text-gray-700">Cipla</li>
                  <li className="text-gray-700">Abbott</li>
                  <li className="text-gray-700">Reliance</li>
                  <li className="text-gray-700">Sun Pharma</li>
                  <li className="text-gray-700">Intas</li>
                  <li className="text-gray-700">Zydus</li>
                  <li className="text-gray-700">Mankind</li>
                  <li className="text-gray-700">USP</li>
                  <li className="text-gray-700">Biogenomics</li>
                </ul>
                
                <div className="mt-6">
                  <Link to="/research-collaborations" className="text-primary font-medium hover:underline">
                    View all industry collaborations →
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Academia Collaborations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="text-gray-700">IIT Bombay - Joint research on advanced drug delivery systems</li>
                  <li className="text-gray-700">TIFR - Collaborative projects on nanomedicine applications</li>
                  <li className="text-gray-700">Khalsa College - Student training and skill development</li>
                  <li className="text-gray-700">ACTREC - Cancer research and therapeutic development</li>
                </ul>
                
                <div className="mt-6">
                  <Link to="/research-collaborations" className="text-primary font-medium hover:underline">
                    View all academic collaborations →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Publications */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Selected Publications</h2>
          
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{pub.title}</h3>
                  <p className="text-gray-600 mb-1">{pub.authors}</p>
                  <p className="text-gray-500">{pub.journal}, {pub.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button size="lg" variant="outline" asChild>
              <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">
                View All Publications on Google Scholar <Book className="ml-2" size={16} />
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Patents */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Patents</h2>
          
          <div className="space-y-6">
            {patents.map((patent, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{patent.title}</h3>
                  <p className="text-gray-600 mb-1">Inventors: {patent.inventors}</p>
                  <div className="flex justify-between mt-2">
                    <span className="text-gray-500">Year: {patent.year}</span>
                    <span className={`font-medium ${patent.status === 'Granted' ? 'text-green-600' : 'text-orange-500'}`}>
                      Status: {patent.status}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Conferences & Talks */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Invited Speaker Engagements</h2>
          
          <div className="space-y-6">
            {conferences.map((conf, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <h3 className="text-lg font-bold mb-1">{conf.name}</h3>
                      <p className="text-gray-600">{conf.topic}</p>
                    </div>
                    <div className="mt-3 md:mt-0 flex items-center text-gray-500">
                      <Calendar size={16} className="mr-2" />
                      {conf.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Research;
