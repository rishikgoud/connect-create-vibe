import { Instagram, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
              ConnectCreator
            </h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Connecting creativity with opportunity. The premier platform for freelance creators 
              and clients to find each other and collaborate on amazing projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-background transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-smooth">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-background/80 hover:text-background transition-smooth">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-smooth">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="text-background/80 hover:text-background transition-smooth">
                  Features
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-background/80 hover:text-background transition-smooth">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-smooth">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-smooth">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-smooth">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-smooth">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-background/60" />
                <span className="text-background/80">hello@connectcreator.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-background/60" />
                <span className="text-background/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-background/60" />
                <span className="text-background/80">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-background/20 pt-8 mt-12">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-background/80">
                Get the latest news and updates about ConnectCreator features.
              </p>
            </div>
            <div className="flex max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg bg-background/10 border border-background/20 text-background placeholder-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-r-lg hover:bg-primary/90 transition-smooth">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 mt-8">
          <div className="text-center md:flex md:items-center md:justify-between">
            <p className="text-background/60 text-sm">
              © {currentYear} ConnectCreator. All rights reserved.
            </p>
            <p className="text-background/60 text-sm mt-2 md:mt-0">
              Built with ❤️ for the creative community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;