import { Link } from "react-router-dom";
import { Globe, Code, ShoppingCart, Search, Megaphone, Users, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: Globe,
    title: "WordPress Development",
    description: "Custom WordPress websites built for performance, scalability, and ease of management.",
  },
  {
    icon: Code,
    title: "Django Development",
    description: "Robust Python-powered web applications with Django for complex business needs.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "High-converting online stores with seamless payment integration and inventory management.",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Data-driven SEO strategies to boost your rankings and drive organic traffic.",
  },
  {
    icon: Megaphone,
    title: "Meta Ads & Marketing",
    description: "Targeted ad campaigns on Facebook and Instagram to maximize your ROI.",
  },
  {
    icon: Users,
    title: "Social Media Growth",
    description: "Organic strategies to grow your Facebook presence with real, engaged followers.",
  },
];

const ServicesOverview = () => {
  return (
    <AnimatedSection className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Services That <span className="text-gradient">Drive Results</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            End-to-end digital solutions tailored to elevate your brand and accelerate business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 rounded-xl glass-hover cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServicesOverview;
