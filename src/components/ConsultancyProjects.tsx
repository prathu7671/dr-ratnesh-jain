
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Study of Biosimilars",
    agency: "Mangalam Drug and Organics"
  },
  {
    title: "Downstream Bioprocessing Development",
    agency: "Advy Chemicals"
  },
  {
    title: "Study of Probiotics",
    agency: "Meteoric Biopharmaceuticals"
  },
  {
    title: "Cell Line Development",
    agency: "Oncosimis Biotech Pvt Ltd"
  },
  {
    title: "Process Development, Scale-Up, and Production",
    agency: "Mynvax Pvt. Ltd."
  },
  {
    title: "mRNA Process Development",
    agency: "Serum Institute of India"
  },
  {
    title: "Due Diligence on Technologies",
    agency: "BDR Pharmaceuticals"
  }
];

const ConsultancyProjects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
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
