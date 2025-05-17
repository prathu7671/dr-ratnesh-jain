
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useState } from "react";

const projects = [
  {
    title: "Study of Biosimilars",
    agency: "Mangalam Drug and Organics",
    color: "bg-blue-50"
  },
  {
    title: "Downstream Bioprocessing Development",
    agency: "Advy Chemicals",
    color: "bg-green-50"
  },
  {
    title: "Study of Probiotics",
    agency: "Meteoric Biopharmaceuticals",
    color: "bg-purple-50"
  },
  {
    title: "Cell Line Development",
    agency: "Oncosimis Biotech Pvt Ltd",
    color: "bg-yellow-50"
  },
  {
    title: "Process development, scale up and production, formulation development and characterization of XXXX",
    agency: "Mynvax Pvt. Ltd.",
    color: "bg-pink-50"
  },
  {
    title: "mRNA process development",
    agency: "Serum Institute of India",
    color: "bg-indigo-50"
  },
  {
    title: "Process development, scale up and production, formulation development and characterization of XXXX",
    agency: "Mynvax Pvt. Ltd.",
    color: "bg-orange-50"
  },
  {
    title: "Process development, scale up and production, formulation development and characterization of XXXX",
    agency: "Mynvax Pvt. Ltd.",
    color: "bg-teal-50"
  },
  {
    title: "Due diligence on two technologies: Tigen and Kure.ai",
    agency: "BDR Pharmaceuticals",
    color: "bg-rose-50"
  }
];

const ConsultancyProjects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <Card 
          key={index} 
          className={`transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${project.color} border-opacity-50`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <CardHeader className={`pb-2 ${hoveredIndex === index ? 'bg-opacity-80' : ''}`}>
            <CardTitle className="text-lg">{project.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Sponsoring Agency:</span> {project.agency}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ConsultancyProjects;
