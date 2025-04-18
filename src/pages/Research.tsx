
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FlaskConical, Brain, Printer } from "lucide-react";

const Research = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="hero-title mb-6">Research</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore groundbreaking research in biopharma, nanomedicine, and 3D bioprinting.
          </p>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Brain className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Development of Novel Brain-Targeted Nasal Drug Delivery</CardTitle>
                <CardDescription>Innovative approach to deliver drugs directly to the brain via nasal administration.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Enhanced drug efficacy and reduced systemic side effects.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Printer className="w-12 h-12 text-primary mb-4" />
                <CardTitle>3D Bioprinting of Functional Tissues</CardTitle>
                <CardDescription>Utilizing 3D bioprinting to create functional tissues for medical applications.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Advancing regenerative medicine and personalized healthcare.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Published Works</h2>
          <Tabs defaultValue="2025" className="w-full">
            <TabsList className="flex justify-center mb-8">
              <TabsTrigger value="2025">2025</TabsTrigger>
              <TabsTrigger value="2024">2024</TabsTrigger>
              <TabsTrigger value="2023">2023</TabsTrigger>
            </TabsList>
            <TabsContent value="2025" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-gray-800 mb-2">Menon, L., Sanjanwala, D., Sharma, S., Jain R*, & Dandekar P. (2025). Sterilizing bioinks: Understanding the impact of techniques on 3D bioprinting materials. Bioprinting, e00399.</p>
                  <p className="text-gray-800">Ganatra, P., Ashapogu, A., Epili, R., Duggum, S., Desai, J., Jain R*, & Dandekar P. (2025). Biomimetic replenishment therapy of cortisol using semi-solid extrusion–3D printed tablets for adrenal insufficiencies. International Journal of Pharmaceutics, 125342.</p>
                </CardContent>
              </Card>
            </TabsContent>
            {/* Add more years as needed */}
          </Tabs>
        </div>
      </section>

      {/* Conferences Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Invited Speaker Engagements</h2>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>ThermoFisher Scientific's Global Health Equity Conclave</CardTitle>
                <CardDescription>February 27, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Ideas in Motion: Panel Discussion on Clinical Diagnostics Solutions</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>International Proteomics Conference (APT2024)</CardTitle>
                <CardDescription>February 19, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Developing biopharmaceuticals from lab to manufacturing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
