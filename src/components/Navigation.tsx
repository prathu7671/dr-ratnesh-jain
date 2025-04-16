
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="font-playfair text-xl font-bold text-primary">
                Dr. Ratnesh Jain
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#research" className="nav-link">Research</a>
            <a href="#publications" className="nav-link">Publications</a>
            <a href="#contact" className="nav-link">Contact</a>
            <Button>Book Consultation</Button>
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
            <a href="#about" className="block px-3 py-2 nav-link">About</a>
            <a href="#research" className="block px-3 py-2 nav-link">Research</a>
            <a href="#publications" className="block px-3 py-2 nav-link">Publications</a>
            <a href="#contact" className="block px-3 py-2 nav-link">Contact</a>
            <div className="px-3 py-2">
              <Button className="w-full">Book Consultation</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
