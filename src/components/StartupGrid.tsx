
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const startups = [
  {
    name: "Wetranslate",
    description: "Innovative translation services for the biopharma industry."
  },
  {
    name: "IPH",
    description: "Cutting-edge biopharma solutions."
  },
  {
    name: "Biosimulate",
    description: "Advanced biopharma simulations."
  },
  {
    name: "Mumbai Biocluster",
    description: "Collaborative biopharma research and development."
  },
  {
    name: "Bio-kraft Foods",
    description: "Innovative biopharma food solutions."
  },
  {
    name: "Amar Biosystems",
    description: "Pioneering biopharma systems."
  },
  {
    name: "Nexcure",
    description: "Revolutionary biopharma cures."
  },
  {
    name: "Newgen Biopharma",
    description: "Developing next-generation biopharmaceutical products."
  }
];

const StartupGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {startups.map((startup, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">{startup.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">{startup.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StartupGrid;
