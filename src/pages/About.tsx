
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const milestones = [
    { period: "May 2022 – Present", role: "Associate Professor", organization: "ICT Mumbai" },
    { period: "Nov 2014 – 2022", role: "UGC Assistant Professor", organization: "ICT Mumbai" },
    { period: "Oct 2012 – Present", role: "Ramalingaswami Fellow", organization: "DBT, GoI" },
    { period: "Jan 2012 – Oct 2012", role: "Ramanujan Fellow", organization: "DST, GoI" },
    { period: "Jan 2011 – Dec 2011", role: "Alexander von Humboldt Postdoctoral Research Fellow", organization: "Saarland University, Germany" },
    { period: "Jan 2010 – Dec 2010", role: "Postdoctoral Research Fellow", organization: "Saarland University, Germany" },
    { period: "Aug 2009 – Nov 2009", role: "Assistant Manager", organization: "Famy Care Limited, Mumbai" },
    { period: "Mar 2007 – Jul 2009", role: "Senior Research Fellow", organization: "ICT Mumbai" },
    { period: "Feb 2006 – Mar 2007", role: "Junior Research Fellow", organization: "ICT Mumbai" },
    { period: "Aug 2005 – Feb 2006", role: "Research Trainee", organization: "Lupin Research Park, Pune" },
  ];

  const awards = [
    { name: "BIRAC Innovator Award", description: "For affordable CHO media for Biosimilar Production", year: 2020 },
    { name: "N. R. Kamath Book Award", description: "For the book \"Nanoparticulate Drug Delivery: Perspectives on the Transition from Laboratory to Market\"", year: 2014 },
    { name: "DAE Young Scientist Award", description: "DAE-BRNS, Govt. of India", year: 2012 },
    { name: "Ramalingaswami Fellowship", description: "Department of Biotechnology, Govt. of India", year: 2012 },
    { name: "INSPIRE Faculty Fellowship", description: "Department of Science and Technology, Govt. of India" },
    { name: "Ramanujan Fellowship", description: "Department of Science and Technology, Govt. of India", year: 2011 },
    { name: "Alexander von Humboldt Postdoctoral Research Fellowship", description: "Alexander von Humboldt Foundation, Germany", year: 2011 },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="hero-title mb-6">About Dr. Ratnesh Jain</h1>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden bg-gray-300 mb-6">
                <img
            src="https://static.wixstatic.com/media/a3bbe4_7b5784739749477886327d42af9750bf~mv2.jpg"
            alt="Dr. Ratnesh Jain"
            className="object-cover w-full h-full"
          />
                <div className="flex items-center justify-center h-full text-gray-500">
                  Dr. Jain's Photo
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg">
                Dr. Ratnesh Jain is an Associate Professor at the Institute of Chemical Technology (ICT), Mumbai, 
                and a renowned figure in the biopharma industry. With a Ph.D. in Pharmaceutical Sciences and 
                extensive postdoctoral research experience, he has made significant contributions to nanomedicine, 
                3D bioprinting, and biopharma product development.
              </p>
              <p className="text-lg">
                Dr. Jain's leadership in startups and knowledge platforms, along with his numerous awards 
                and recognitions, underscore his commitment to advancing research, education, and entrepreneurship.
              </p>
              <div className="pt-4">
                <Button asChild>
                  <Link to="/contact">
                    Collaborate with Dr. Jain <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision and Mission */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Vision and Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Vision</h3>
              <p className="text-gray-700">
                To revolutionize the biopharmaceutical industry through innovative research, educational initiatives, and 
                strategic collaborations that address global healthcare challenges and improve patient outcomes.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Mission</h3>
              <p className="text-gray-700">
                To bridge the gap between academic research and industrial application by developing cutting-edge technologies, 
                fostering skilled professionals, and providing strategic consulting services that drive innovation and 
                commercial success in the biopharmaceutical sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic and Research Journey */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Academic and Research Journey</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Role at ICT Mumbai</h3>
              <p className="text-gray-700 mb-6">
                As an Associate Professor at the Institute of Chemical Technology (ICT), Mumbai, Dr. Jain leads cutting-edge 
                research initiatives and educational programs in biopharmaceutical sciences. He mentors students, 
                oversees research projects, and contributes to curriculum development in advanced pharmaceutical technologies.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Areas of Research Focus</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-2">•</span>
                  <span>Biopharmaceutical Product Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-2">•</span>
                  <span>Nanomedicine and Drug Delivery Systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-2">•</span>
                  <span>3D Cell Culture & Bioprinting Technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-2">•</span>
                  <span>Biomaterials and Tissue Engineering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-2">•</span>
                  <span>Process Development and Scale-Up for Biologics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership and Entrepreneurship */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Leadership and Entrepreneurship</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Co-founder Roles</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-2">•</span>
                  <span><span className="font-medium">Wetranslate:</span> Innovative translation services for the biopharma industry.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-2">•</span>
                  <span><span className="font-medium">IPH:</span> Cutting-edge biopharma solutions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-2">•</span>
                  <span><span className="font-medium">Biosimulate:</span> Advanced biopharma simulations.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-2">•</span>
                  <span><span className="font-medium">Mumbai Biocluster:</span> Collaborative biopharma research and development.</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Consultant to Leading Industries</h3>
              <p className="text-gray-700 mb-6">
                Dr. Jain provides strategic consulting services to leading pharmaceutical and biotechnology companies, 
                helping them navigate regulatory challenges, optimize product development processes, and implement 
                innovative technologies. His expertise in biopharma product development and nanomedicine makes him a 
                valuable advisor to industry leaders seeking to enhance their competitive edge.
              </p>
              <div>
                <Link to="/consulting" className="text-primary font-medium hover:underline">
                  Learn more about consulting services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Career Timeline */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Career Milestones</h2>
          
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="md:w-1/3 font-medium text-gray-900 mb-2 md:mb-0">
                  {milestone.period}
                </div>
                <div className="md:w-2/3">
                  <p className="font-semibold">{milestone.role}</p>
                  <p className="text-gray-600">{milestone.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Awards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Awards and Honors</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{award.name} {award.year && `(${award.year})`}</h3>
                  <p className="text-gray-600">{award.description}</p>
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

export default About;
