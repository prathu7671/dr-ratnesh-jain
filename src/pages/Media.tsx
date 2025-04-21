import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Newspaper, Video, Camera, ArrowRight, Award, Book, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Media = () => {
  const pressReleases = [
    {
      title: "Dr. Ratnesh Jain Receives BIRAC Innovator Award",
      source: "ICT Mumbai Press",
      date: "October 15, 2023",
      excerpt: "For his groundbreaking work in developing affordable CHO media for biosimilar production...",
      link: "#"
    },
    {
      title: "Mumbai Biocluster Launch Brings Together Industry Leaders",
      source: "Biopharma Times",
      date: "June 22, 2023",
      excerpt: "The collaborative initiative aims to accelerate innovation in the biopharmaceutical sector...",
      link: "#"
    },
    {
      title: "New 3D Bioprinting Technology Developed at ICT Mumbai",
      source: "Science Daily",
      date: "March 8, 2023",
      excerpt: "Dr. Ratnesh Jain's team has developed a novel approach to 3D bioprinting that promises to revolutionize tissue engineering...",
      link: "#"
    }
  ];

  const upcomingEvents = [
    {
      title: "Advanced Bioprocessing Workshop",
      date: "June 15-17, 2025",
      location: "ICT Mumbai",
      description: "Hands-on training on upstream and downstream bioprocessing techniques.",
      link: "/skill-development"
    },
    {
      title: "International Conference on Biopharma Innovation",
      date: "September 5-7, 2025",
      location: "Mumbai Convention Center",
      description: "Dr. Jain will be delivering a keynote on recent advances in biopharmaceutical development.",
      link: "#"
    },
    {
      title: "Industry-Academia Symposium",
      date: "November 12, 2025",
      location: "Virtual Event",
      description: "Panel discussion on bridging the gap between academic research and industrial application.",
      link: "/industry-academia"
    }
  ];

  const mediaGalleries = [
    {
      title: "Conference Presentations",
      count: 18,
      thumbnail: "bg-blue-100",
      link: "#"
    },
    {
      title: "Workshop Sessions",
      count: 24,
      thumbnail: "bg-green-100",
      link: "#"
    },
    {
      title: "Laboratory Research",
      count: 32,
      thumbnail: "bg-purple-100",
      link: "#"
    },
    {
      title: "Industry Events",
      count: 15,
      thumbnail: "bg-orange-100",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="hero-title mb-6">Media & Impact</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dr. Ratnesh Jain's media coverage, news updates, and the impact of his work in the biopharmaceutical industry.
          </p>
        </div>
      </section>
      
      {/* Press Coverage */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Press Coverage</h2>
          
          <div className="space-y-6">
            {pressReleases.map((press, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{press.title}</h3>
                      <div className="flex items-center text-gray-500 mb-3">
                        <Newspaper className="h-4 w-4 mr-2" />
                        <span className="mr-4">{press.source}</span>
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{press.date}</span>
                      </div>
                      <p className="text-gray-700">{press.excerpt}</p>
                    </div>
                    <div className="ml-6 mt-1">
                      <a href={press.link} className="text-primary hover:underline flex items-center">
                        <span className="mr-1">Read</span>
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="outline">View All Press Releases</Button>
          </div>
        </div>
      </section>
      
      {/* Latest Achievements */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Latest Achievements</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">BIRAC Innovator Award 2023</h3>
              <p className="text-gray-700">
                Recognized for developing affordable CHO media for biosimilar production, significantly reducing production costs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                <Book className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">25+ International Publications</h3>
              <p className="text-gray-700">
                Published groundbreaking research in leading journals, advancing the field of biopharmaceutical development.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Industry-Academia Bridge</h3>
              <p className="text-gray-700">
                Successfully facilitated 15+ collaborations between academic institutions and industry partners.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Events and Workshops */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Upcoming Events & Workshops</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <Link to={event.link}>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/skill-development">
              <Button>View All Events</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Photo Gallery */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Photo Gallery</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaGalleries.map((gallery, index) => (
              <a 
                key={index} 
                href={gallery.link} 
                className="group block relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`h-64 ${gallery.thumbnail} flex items-center justify-center`}>
                  <Camera className="h-12 w-12 text-gray-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white font-bold text-lg mb-1">{gallery.title}</h3>
                    <p className="text-gray-200">{gallery.count} Photos</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-primary px-4 py-2 rounded-md font-medium">
                    View Gallery
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Video Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Video Content</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <Video className="h-12 w-12 text-gray-500" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-white/30 flex items-center justify-center group-hover:bg-white/50 transition-colors">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold">Advancements in Biopharma Technologies</h3>
                <p className="text-gray-600">Keynote presentation at Biopharma Summit 2023</p>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <Video className="h-12 w-12 text-gray-500" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-white/30 flex items-center justify-center group-hover:bg-white/50 transition-colors">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold">3D Bioprinting Workshop</h3>
                <p className="text-gray-600">Hands-on demonstration of latest techniques</p>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <Video className="h-12 w-12 text-gray-500" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-white/30 flex items-center justify-center group-hover:bg-white/50 transition-colors">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold">Interview: Future of Nanomedicine</h3>
                <p className="text-gray-600">Discussion on breakthrough technologies</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="outline">View All Videos</Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Media;
