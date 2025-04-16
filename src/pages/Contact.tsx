
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="hero-title mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with Dr. Ratnesh Jain for collaborations, consulting, or inquiries.
          </p>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-accent mr-3" />
                  <span>rd.jain@ictmumbai.edu.in</span>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-accent mr-3" />
                  <span>+91-22-3361-2029</span>
                </div>
                
                <div className="flex items-center">
                  <Linkedin className="w-5 h-5 text-accent mr-3" />
                  <a href="#" className="text-accent hover:underline">LinkedIn Profile</a>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Stay Updated</h3>
                <p className="text-gray-600">
                  Subscribe to our newsletter to receive the latest updates, insights, and event invitations from Dr. Ratnesh Jain.
                </p>
                
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-1 rounded-l-lg border border-gray-300 px-4 py-2"
                  />
                  <Button className="rounded-l-none">Subscribe</Button>
                </div>
              </div>
            </div>
            
            <div id="booking" className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 h-32"
                    placeholder="Your message"
                  />
                </div>
                
                <Button size="lg" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
