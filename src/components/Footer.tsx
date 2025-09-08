import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/favicon.png" 
                alt="Institute of Commerce Logo" 
                className="h-8 w-8 flex-shrink-0"
              />
              <span className="font-heading font-bold text-lg md:text-xl text-foreground">
                Institute of Commerce
              </span>
            </div>
            <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Helping commerce students score 70%+ in board exams through focused teaching and small batch sizes since 2019.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">Courses</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              
            </ul>
          </div>
          
          {/* Our Programs */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-foreground">Our Programs</h3>
            <ul className="space-y-3">
              <li><Link to="/courses#class-11" className="text-muted-foreground hover:text-primary transition-colors">Class 11 Commerce</Link></li>
              <li><Link to="/courses#class-12" className="text-muted-foreground hover:text-primary transition-colors">Class 12 Commerce</Link></li>
              <li><Link to="/courses#bcom" className="text-muted-foreground hover:text-primary transition-colors">B.Com Support</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-foreground">Get in Touch</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 md:h-5 w-4 md:w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Shivpur Road, Near Shivpur Mandir, Godda, Jharkhand 814133
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 md:h-5 w-4 md:w-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm md:text-base">+91 6201245391</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 md:h-5 w-4 md:w-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm md:text-base break-words">contact@instituteofcommerce.in</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Institute of Commerce. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;