import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { ExternalLink } from "lucide-react";

const categories = ["All", "E-commerce", "Web Application", "Brand Awareness", "SEO & Marketing"];

const projects = [
  {
    title: "E-Commerce Fashion Store",
    category: "E-commerce",
    description: "A full-featured online fashion store with product filtering, wishlist, cart, and secure checkout integration.",
    tech: ["WordPress", "WooCommerce", "SEO"],
  },
  {
    title: "SaaS Analytics Dashboard",
    category: "Web Application",
    description: "Custom-built Django dashboard with real-time analytics, user management, and automated reporting.",
    tech: ["Django", "Python", "PostgreSQL"],
  },
  {
    title: "Restaurant Chain Website",
    category: "Brand Awareness",
    description: "Multi-location restaurant website with online ordering, reservation system, and SEO optimization.",
    tech: ["WordPress", "SEO", "Meta Ads"],
  },
  {
    title: "Organic Food Marketplace",
    category: "E-commerce",
    description: "Multi-vendor marketplace for organic products with vendor dashboards, reviews, and delivery tracking.",
    tech: ["Django", "Stripe", "PostgreSQL"],
  },
  {
    title: "Tech Startup Landing Page",
    category: "Brand Awareness",
    description: "High-converting landing page with animated hero, pricing tables, and lead capture forms.",
    tech: ["React", "Framer Motion", "SEO"],
  },
  {
    title: "Local Business SEO Campaign",
    category: "SEO & Marketing",
    description: "Complete SEO overhaul and Meta Ads campaign that increased organic traffic by 400% in 6 months.",
    tech: ["SEO", "Meta Ads", "Analytics"],
  },
  {
    title: "Healthcare Portal",
    category: "Web Application",
    description: "Patient management system with appointment booking, medical records, and telemedicine integration.",
    tech: ["Django", "Python", "REST API"],
  },
  {
    title: "Real Estate Platform",
    category: "Web Application",
    description: "Property listing platform with advanced search, virtual tours, and agent management system.",
    tech: ["WordPress", "Custom Plugins", "SEO"],
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container-custom relative z-10 text-center">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Our Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Projects That <span className="text-gradient">Speak Results</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse portfolio of successful projects across industries and technologies.
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div key={project.title} className="group rounded-xl glass-hover overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <ExternalLink className="text-primary/30 group-hover:text-primary/50 transition-colors" size={40} />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary tracking-wider uppercase">{project.category}</span>
                  <h3 className="font-heading font-semibold text-lg text-foreground mt-2 mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Projects;
