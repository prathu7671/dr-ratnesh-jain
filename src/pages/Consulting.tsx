
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Target, Calculator, Shield, Users } from "lucide-react";

const Consulting = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="hero-title mb-6">Consulting & Entrepreneurship</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dr. Ratnesh Jain's consulting services and entrepreneurial ventures.
          </p>
        </div>
      </section>
      
      {/* Consulting Areas */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Consulting Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Briefcase className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Strategic Advisory</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Guiding biopharma companies in strategic planning and execution.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Target className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Regulatory Navigation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Ensuring 90% success rate for regulatory approvals.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Calculator className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Cost Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Customized quotations for cost-effective analysis.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Advisor Roles */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Advisor Roles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Avay Biosciences</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Strategic advisor for biopharma product development.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Oncosimis Biotech Pvt. Ltd.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Advisor on nanomedicine and drug delivery technologies.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
