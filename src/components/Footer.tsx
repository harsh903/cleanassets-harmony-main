
import { Truck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary mt-20">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Truck className="h-6 w-6 text-primary" />
              <span className="font-semibold">SwachhGoa</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering efficient waste management infrastructure across Goa.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Guidelines</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Email: contact@swachhgoa.gov.in</li>
              <li className="text-sm text-muted-foreground">Phone: +91 832 XXX XXXX</li>
              <li className="text-sm text-muted-foreground">Address: Goa, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 SwachhGoa. All rights reserved. Government of Goa Initiative
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
