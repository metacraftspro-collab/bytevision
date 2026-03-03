import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Globe, Code, ShoppingCart, Search, Megaphone, Users, Wrench, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "WordPress Website Development",
    description: "Custom WordPress websites with modern themes, plugins, and CMS functionality. From business websites to blogs, we build fast, secure, and SEO-friendly WordPress solutions.",
    features: ["Custom Theme Development", "Plugin Integration", "Performance Optimization", "Content Management"],
  },
  {
    icon: Code,
    title: "Django (Python) Web Development",
    description: "Powerful web applications built with Django and Python. Ideal for complex business logic, APIs, dashboards, and data-driven applications.",
    features: ["Custom Web Apps", "REST API Development", "Database Architecture", "Admin Dashboards"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Website Development",
    description: "Full-featured online stores with secure payment gateways, inventory management, and conversion-optimized design to maximize your revenue.",
    features: ["Payment Integration", "Inventory Management", "Mobile Commerce", "Analytics & Reporting"],
  },
  {
    icon: Megaphone,
    title: "Brand Awareness Websites",
    description: "Stunning brand awareness websites designed to build trust, showcase your expertise, and convert visitors into leads with compelling storytelling.",
    features: ["Conversion Optimization", "Brand Storytelling", "Lead Generation", "Social Proof Integration"],
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Comprehensive SEO strategies including keyword research, on-page optimization, technical SEO, and content strategy to boost your organic rankings.",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
  },
  {
    icon: Megaphone,
    title: "Meta Ads Campaign & Boosting",
    description: "Targeted Facebook and Instagram ad campaigns with advanced audience targeting, A/B testing, and ROI-focused strategies for maximum impact.",
    features: ["Campaign Strategy", "Audience Targeting", "A/B Testing", "Performance Analytics"],
  },
  {
    icon: Users,
    title: "Facebook Organic Growth",
    description: "Organic strategies to grow your Facebook presence with real, engaged followers. Community building, content planning, and engagement optimization.",
    features: ["Content Strategy", "Community Building", "Engagement Optimization", "Growth Analytics"],
  },
  {
    icon: Wrench,
    title: "Website Maintenance & Support",
    description: "Ongoing website maintenance including security updates, performance monitoring, content updates, and technical support to keep your site running smoothly.",
    features: ["Security Updates", "Performance Monitoring", "Content Updates", "Technical Support"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container-custom relative z-10 text-center">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Comprehensive <span className="text-gradient">Digital Solutions</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to launch and beyond—we offer end-to-end services to power your digital success.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="p-6 md:p-8 rounded-xl glass-hover group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((f) => (
                        <span key={f} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                          {f}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-sm text-primary font-semibold hover:underline"
                    >
                      Get Started <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="section-padding bg-card/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Every business is unique. Let's discuss your specific requirements and build something extraordinary together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-200 hover:opacity-90 glow-primary"
          >
            Let's Talk <ArrowRight size={18} />
          </Link>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Services;
