
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle the form submission with API call
    // For now, we'll just show a success state
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000); // Reset after 5 seconds
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="hero-title mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with Dr. Ratnesh Jain for collaborations, consulting, or inquiries. 
            We're here to help answer your questions and explore potential partnerships.
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
                  <a href="mailto:rd.jain@ictmumbai.edu.in" className="hover:text-accent transition-colors">rd.jain@ictmumbai.edu.in</a>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-accent mr-3" />
                  <a href="tel:+91-22-3361-2029" className="hover:text-accent transition-colors">+91-22-3361-2029</a>
                </div>
                
                <div className="flex items-center">
                  <Linkedin className="w-5 h-5 text-accent mr-3" />
                  <a href="#" className="text-accent hover:underline">LinkedIn Profile</a>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-accent mr-3 mt-1" />
                  <div>
                    <p>Department of Chemical Engineering</p>
                    <p>Institute of Chemical Technology</p>
                    <p>Nathalal Parekh Marg, Matunga</p>
                    <p>Mumbai - 400019, India</p>
                  </div>
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
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-2">Connect on Social Media</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="hover:text-accent transition-colors" aria-label="ResearchGate">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112 1.853 21.256 21.256 0 0 1-3.86-.531 11.36 11.36 0 0 1-2.573-.944c-.544-.285-1.056-.645-1.532-1.072-.238.215-.472.417-.7.603-.23.187-.414.394-.554.617a3.927 3.927 0 0 0-.242.439c.99.512.49 1.046.89 1.599.397.575.822 1.132 1.27 1.68.265.33.539.73.82 1.214.284.483.54 1.081.764 1.797.224.716.274 1.553.149 2.513-.124.96-.299 1.852-.524 2.686-.226.831-.466 1.29-.73 1.376-.263.085-.5-.018-.7-.31-.2-.293-.318-.653-.355-1.087-.038-.431-.026-.873.039-1.328.065-.455.148-.879.246-1.27.099-.39.174-.707.224-.953.05-.245.075-.368.075-.368l-.146-.057c-2.003.602-3.527 1.419-4.577 2.444-1.048 1.026-1.75 1.986-2.099 2.884-.347.895-.511 1.715-.5 2.447.013.73.096 1.283.246 1.652.15.37.387.615.712.73.324.117.697.18 1.117.192.42.013.84-.026 1.272-.113.431-.085.806-.342 1.127-.768.323-.424.607-.935.852-1.537.245-.6.432-1.2.559-1.8.129-.6.233-1.183.323-1.743.088-.558.153-.99.192-1.293.152.014.31.023.467.032.156.01.292.014.413.014.12 0 .277-.004.474-.014.196-.01.494-.033.894-.075.403-.04.882-.12 1.44-.234.559-.116 1.205-.294 1.932-.537.343.458.713.887 1.117 1.288.402.402.844.788 1.328 1.157.483.37 1 .724 1.548 1.059a7.721 7.721 0 0 0 1.684.8c-.114-.728-.293-1.36-.531-1.897-.242-.535-.524-.97-.852-1.306-.324-.335-.657-.672-1-.997-.342-.326-.631-.727-.867-1.2-.236-.477-.373-1.003-.41-1.582-.04-.58.039-1.249.234-2.009.193-.76.554-1.62 1.08-2.583.527-.963 1.291-1.95 2.289-2.958l-1.506-.149c-.493-.05-.965-.075-1.413-.075-.447 0-.943.05-1.49.149-.544.099-1.054.188-1.532.27-.476.08-.905.119-1.283.119-.38 0-.730-.04-1.048-.12-.317-.08-.6-.237-.851-.473-.25-.236-.474-.67-.672-1.3-.197-.63-.297-1.454-.297-2.475 0-.432.063-.887.186-1.36s.323-.8.599-1.013c.273-.212.661-.313 1.16-.3.45.014 1 .1 1.648.255.648.153 1.364.32 2.143.494.781.175 1.582.312 2.4.41.82.1 1.627.141 2.42.128.792-.013 1.54-.113 2.235-.3.027-.173.064-.35.112-.53.048-.18.109-.35.186-.51.074-.162.156-.312.246-.453.088-.14.196-.265.323-.375.128-.11.26-.208.4-.295.14-.088.3-.158.48-.212.18-.054.373-.08.58-.08.434 0 .809.093 1.126.28.317.186.57.425.765.715.193.29.33.604.41.944.079.341.12.671.12.991 0 .28-.034.559-.106.84-.074.282-.169.529-.287.734-.117.208-.542.795-.542.795l.856.214s.705-.291.96-.41c.256-.12.523-.283.8-.486.274-.205.51-.454.705-.75.195-.294.355-.635.48-1.019.123-.384.186-.82.186-1.306 0-.437-.06-.883-.185-1.344a3.69 3.69 0 0 0-.552-1.235 2.94 2.94 0 0 0-.934-.921c-.374-.241-.82-.36-1.341-.36h.005z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div id="booking" className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Subject</label>
                    <select 
                      className="w-full rounded-lg border border-gray-300 px-4 py-2"
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="consulting">Consulting Inquiry</option>
                      <option value="collaboration">Research Collaboration</option>
                      <option value="workshop">Workshop Registration</option>
                      <option value="speaking">Speaking Engagement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 h-32"
                      placeholder="Your message"
                      required
                    />
                  </div>
                  
                  <Button size="lg" type="submit" className="w-full">Send Message</Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Visit Us</h2>
          <div className="bg-gray-200 h-96 rounded-xl shadow-lg flex items-center justify-center">
            {/* This would be replaced with an actual Google Maps embed */}
            <div className="text-center">
              <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
              <p className="text-xl font-medium">Institute of Chemical Technology, Mumbai</p>
              <p className="text-gray-600">Nathalal Parekh Marg, Matunga, Mumbai - 400019, India</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
