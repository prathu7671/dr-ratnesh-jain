
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Award } from "lucide-react";

const Teaching = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="hero-title mb-6">Teaching</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dr. Ratnesh Jain's educational contributions and teaching philosophy.
          </p>
        </div>
      </section>
      
      {/* Courses Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Educational Contributions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Advanced Biopharmaceuticals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">In-depth exploration of biopharmaceutical development, manufacturing, and regulatory aspects.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Award className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Nanomedicine and Drug Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Focus on innovative drug delivery systems and nanomedicine applications.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>3D Bioprinting and Tissue Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Advanced topics in 3D bioprinting and its applications in tissue engineering.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Featured Students */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Outstanding Students</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Pankti Ganatra</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Prime Minister's Fellowship for research with Tvasta Biosciences Pvt. Ltd.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Amita Puranik</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Prime Minister's Fellowship for research with Lupin Limited.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teaching;
