import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full glass-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center hover-scale">
            <span className="font-heading font-semibold text-lg md:text-xl text-foreground hover:text-primary transition-colors">
              Institute of Commerce
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-inter font-medium transition-all duration-300 relative hover-scale ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                } after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive(link.href) ? 'after:scale-x-100' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/enrollment">
              <Button className="btn-gradient hover-scale">Enroll Now</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(link.href)
                    ? "text-primary bg-muted/40"
                      : "text-foreground hover:text-primary hover:bg-muted/30"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link to="/enrollment">
                  <Button className="btn-gradient w-full">Enroll Now</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;