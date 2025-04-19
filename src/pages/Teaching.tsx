
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Teaching = () => {
  const courses = [
    {
      title: "Advanced Biopharmaceuticals",
      description: "In-depth exploration of biopharmaceutical development, manufacturing, and regulatory aspects. The course covers cell line development, upstream and downstream processing, quality control, and regulatory considerations.",
      level: "Postgraduate",
      semester: "Fall & Spring"
    },
    {
      title: "Nanomedicine and Drug Delivery",
      description: "Focus on innovative drug delivery systems and nanomedicine applications. Students learn about nanocarrier design, characterization, and application in targeted therapy.",
      level: "Postgraduate",
      semester: "Fall"
    },
    {
      title: "3D Bioprinting and Tissue Engineering",
      description: "Advanced topics in 3D bioprinting and its applications in tissue engineering. The course includes hands-on training with bioprinting technologies and biomaterial development.",
      level: "Postgraduate",
      semester: "Spring"
    }
  ];

  const students = [
    {
      name: "Pankti Ganatra",
      achievement: "Prime Minister's Fellowship for research with Tvasta Biosciences Pvt. Ltd.",
      project: "Development of 3D printed drug delivery systems"
    },
    {
      name: "Amita Puranik",
      achievement: "Prime Minister's Fellowship for research with Lupin Limited.",
      project: "Novel formulation strategies for biologics"
    },
    {
      name: "Shailesh Dugam",
      achievement: "Best Research Award at Biologics 2025.",
      project: "Optimization of bioreactor conditions for recombinant protein production"
    },
    {
      name: "Utkarsh Tathe",
      achievement: "Best Poster Award at Biopharma Summit 2023.",
      project: "Nanomedicine applications in cancer therapy"
    }
  ];

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
      
      {/* Teaching Philosophy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Teaching Philosophy
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Dr. Jain believes in a hands-on, industry-relevant approach to education that prepares students for 
                  real-world challenges in the biopharmaceutical sector. His teaching methodology emphasizes:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-2">•</span>
                    <span>Practical application of theoretical concepts through laboratory work and industry projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-2">•</span>
                    <span>Critical thinking and problem-solving in complex biopharmaceutical scenarios</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-2">•</span>
                    <span>Innovation and entrepreneurial mindset development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-2">•</span>
                    <span>Industry-academia collaboration to provide students with relevant experience</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link to="/contact">
                    Connect for Academic Collaboration
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg">
              <div className="flex justify-center mb-8">
                <GraduationCap className="h-20 w-20 text-accent" />
              </div>
              <blockquote className="text-lg italic text-gray-700 text-center">
                "Education is not just about imparting knowledge, but about inspiring students to become
                innovators who can translate scientific discoveries into real-world solutions."
                <footer className="mt-4 font-medium text-gray-600">— Dr. Ratnesh Jain</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      
      {/* Courses Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Educational Contributions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index}>
                <CardHeader>
                  <BookOpen className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{course.description}</p>
                  <div className="flex justify-between text-sm">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">{course.level}</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">{course.semester}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Students */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Outstanding Students</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {students.map((student, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{student.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-primary mb-1">Achievement</h4>
                    <p className="text-gray-600">{student.achievement}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Research Project</h4>
                    <p className="text-gray-600">{student.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Teaching Resources */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Teaching Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Course Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Access lecture notes, presentations, and supplementary materials for current courses.
                </p>
                <Button variant="outline" className="w-full">Access Materials</Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Workshop Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Register for upcoming workshops and hands-on training sessions in biopharma technologies.
                </p>
                <Link to="/skill-development">
                  <Button variant="outline" className="w-full">Register Now</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Research Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Explore opportunities for research projects, internships, and Ph.D. positions.
                </p>
                <Button variant="outline" className="w-full">View Opportunities</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Teaching;
