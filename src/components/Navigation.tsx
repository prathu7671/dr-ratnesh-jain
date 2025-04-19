
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Research", path: "/research" },
    { name: "Teaching", path: "/teaching" },
    { name: "Skill Development", path: "/skill-development" },
    { name: "Consulting", path: "/consulting" },
    { name: "Media", path: "/media" },
    { name: "Contact", path: "/contact" }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="font-inter text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Dr. Ratnesh Jain
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`nav-link ${isActive(link.path) ? 'text-primary font-medium' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button>Collaborate with Dr. Jain</Button>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`block px-3 py-2 nav-link ${isActive(link.path) ? 'text-primary font-medium' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full">Collaborate with Dr. Jain</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
