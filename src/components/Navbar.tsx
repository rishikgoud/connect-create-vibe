import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              ConnectCreator
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-smooth font-medium">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-smooth font-medium">
                About
              </a>
              <a href="#features" className="text-foreground hover:text-primary transition-smooth font-medium">
                Features
              </a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-smooth font-medium">
                Testimonials
              </a>
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#login" className="text-foreground hover:text-primary transition-smooth font-medium">
              Login
            </a>
            <a href="#register" className="btn-primary text-sm px-6 py-2">
              Sign Up
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <a href="#home" className="block px-3 py-2 text-foreground hover:text-primary font-medium">
                Home
              </a>
              <a href="#about" className="block px-3 py-2 text-foreground hover:text-primary font-medium">
                About
              </a>
              <a href="#features" className="block px-3 py-2 text-foreground hover:text-primary font-medium">
                Features
              </a>
              <a href="#testimonials" className="block px-3 py-2 text-foreground hover:text-primary font-medium">
                Testimonials
              </a>
              <div className="pt-4 pb-3 border-t border-border">
                <div className="flex items-center px-3 space-x-3">
                  <a href="#login" className="text-foreground hover:text-primary font-medium">
                    Login
                  </a>
                  <a href="#register" className="btn-primary text-sm px-4 py-2">
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;