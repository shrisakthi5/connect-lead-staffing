import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">GL</span>
            </div>
            <span className="text-xl font-bold text-foreground">Global LeadConnect</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/why-choose-us" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/why-choose-us') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Why Choose Us
            </Link>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <a href="tel:9342076135" className="flex items-center space-x-1 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>93420 76135</span>
              </a>
              <a href="mailto:admin@globalleadconnect.com" className="flex items-center space-x-1 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>
            <Button variant="professional" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <Link
                to="/"
                className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                  isActive('/') ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/why-choose-us"
                className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                  isActive('/why-choose-us') ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Why Choose Us
              </Link>
              <div className="px-3 py-2 space-y-2">
                <a href="tel:9342076135" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>93420 76135</span>
                </a>
                <a href="mailto:admin@globalleadconnect.com" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>admin@globalleadconnect.com</span>
                </a>
              </div>
              <div className="px-3 pt-2">
                <Button variant="professional" size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;