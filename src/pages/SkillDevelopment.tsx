
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Wrench } from "lucide-react";

const SkillDevelopment = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="hero-title mb-6">Skill Development</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Training programs and skill development initiatives led by Dr. Ratnesh Jain.
          </p>
        </div>
      </section>
      
      {/* Programs Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
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
                <Button>Register Now</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <BookOpen className="w-12 h-12 text-primary mb-4" />
                <CardTitle>DST-STUTI Programs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Our DST-STUTI programs offer comprehensive training in biopharma technologies, with a focus on innovation and industry relevance. 
                  Participants gain practical experience and insights into the latest advancements in the field.
                </p>
                <Button>Learn More</Button>
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
                  Led by industry experts, these programs offer valuable insights and skills development opportunities.
                </p>
                <Button>Explore Programs</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillDevelopment;
