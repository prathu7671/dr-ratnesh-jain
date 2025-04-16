
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

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
                {/* Placeholder for photo - replace with actual image */}
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
    </div>
  );
};

export default About;
