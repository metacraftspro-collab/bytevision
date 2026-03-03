import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const CTASection = () => {
  return (
    <AnimatedSection className="section-padding">
      <div className="container-custom">
        <div className="relative rounded-2xl overflow-hidden p-10 md:p-16 text-center glass glow-primary">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Let's discuss how we can help you achieve your business goals with our tailored digital solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-200 hover:opacity-90"
            >
              Start Your Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CTASection;
