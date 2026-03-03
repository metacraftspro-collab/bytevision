import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const projects = [
  {
    title: "E-Commerce Fashion Store",
    category: "E-commerce",
    description: "Full-featured online store with payment integration, inventory management, and responsive design.",
    tech: ["WordPress", "WooCommerce", "SEO"],
  },
  {
    title: "SaaS Dashboard Platform",
    category: "Web Application",
    description: "Custom-built Django dashboard with analytics, user management, and real-time data visualization.",
    tech: ["Django", "Python", "PostgreSQL"],
  },
  {
    title: "Restaurant Chain Website",
    category: "Brand Awareness",
    description: "Multi-location restaurant website with online ordering, SEO optimization, and social media integration.",
    tech: ["WordPress", "SEO", "Meta Ads"],
  },
];

const ProjectsPreview = () => {
  return (
    <AnimatedSection className="section-padding bg-card/20">
      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Our Work</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real results for real businesses. Explore our latest work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="group rounded-xl glass-hover overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <ExternalLink className="text-primary/40 group-hover:text-primary/60 transition-colors" size={40} />
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

        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsPreview;
