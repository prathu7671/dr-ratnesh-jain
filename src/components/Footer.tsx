
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/research" className="hover:text-accent transition-colors">Research</Link></li>
              <li><Link to="/teaching" className="hover:text-accent transition-colors">Teaching</Link></li>
              <li><Link to="/skill-development" className="hover:text-accent transition-colors">Skill Development</Link></li>
              <li><Link to="/consulting" className="hover:text-accent transition-colors">Consulting</Link></li>
              <li><Link to="/media" className="hover:text-accent transition-colors">Media</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:rd.jain@ictmumbai.edu.in" className="hover:text-accent transition-colors">
                  rd.jain@ictmumbai.edu.in
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+91-22-3361-2029" className="hover:text-accent transition-colors">
                  +91-22-3361-2029
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>ICT Mumbai, India</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="mb-4">Subscribe for the latest updates on research, workshops, and events.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md text-gray-900 w-full"
                aria-label="Email for newsletter"
              />
              <button type="submit" className="bg-accent hover:bg-opacity-90 transition-colors px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center">
          <p>Copyright © {currentYear} Dr. Ratnesh Jain. All Rights Reserved.</p>
          <div className="mt-2">
            <a href="#" className="text-sm text-gray-400 hover:text-accent mx-2 transition-colors">Privacy Policy</a>
            <span className="text-gray-500">|</span>
            <a href="#" className="text-sm text-gray-400 hover:text-accent mx-2 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
