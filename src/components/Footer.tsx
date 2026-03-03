import { Link } from "react-router-dom";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="Byte Vision Logo" 
                className="h-8 w-auto"
              />
              <span className="font-heading font-bold text-lg text-foreground">
                Byte <span className="text-primary">Vision</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
            Premium digital agency crafting exceptional web experiences and driving growth through innovative digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "Our Vision", path: "/vision" },
                { label: "Services", path: "/services" },
                { label: "Projects", path: "/projects" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <div className="space-y-2.5">
              {[
                "WordPress Development",
                "Django Development",
                "E-commerce Solutions",
                "SEO Optimization",
                "Meta Ads & Marketing",
              ].map((service) => (
                <p key={service} className="text-sm text-muted-foreground">
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
              href="mailto:info@bytevision.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} />
                info@bytevision.com
              </a>
              <a
                href="https://facebook.com/ByteVision"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook size={16} />
                Byte Vision
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} />
                Global Digital Agency
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Byte Vision. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com/ByteVision"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg glass-hover flex items-center justify-center text-muted-foreground hover:text-primary"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="mailto:info@bytevision.com"
              className="w-9 h-9 rounded-lg glass-hover flex items-center justify-center text-muted-foreground hover:text-primary"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
