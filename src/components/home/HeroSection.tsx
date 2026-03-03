import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Floating shapes */}
      <div className="absolute top-20 right-[15%] w-20 h-20 rounded-full border border-primary/20 floating-shape" />
      <div className="absolute bottom-32 left-[10%] w-14 h-14 rounded-lg border border-accent/20 floating-shape-delayed rotate-45" />
      <div className="absolute top-1/3 left-[5%] w-3 h-3 rounded-full bg-primary/40 floating-shape-slow" />
      <div className="absolute top-1/4 right-[8%] w-2 h-2 rounded-full bg-accent/40 pulse-glow" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary mb-6"
          >
            <Sparkles size={14} />
            Premium Digital Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight mb-6"
          >
            We Craft Digital
            <br />
            <span className="text-gradient">Experiences</span> That
            <br />
            Drive Growth
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
          >
            From stunning websites to powerful SEO strategies, we transform your digital
            presence into a high-converting growth engine.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-200 hover:opacity-90 glow-primary"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg glass-hover font-semibold text-foreground"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-wrap gap-8 md:gap-12"
          >
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "30+", label: "Happy Clients" },
              { value: "99%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-heading font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
