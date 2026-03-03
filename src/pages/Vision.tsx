import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Target, Eye, Heart, Lightbulb, Rocket, Users } from "lucide-react";

const values = [
  { icon: Heart, title: "Passion", description: "We pour our heart into every pixel and line of code we write." },
  { icon: Lightbulb, title: "Innovation", description: "Constantly evolving with the latest tech trends and best practices." },
  { icon: Users, title: "Collaboration", description: "We work closely with our clients as true partners in success." },
  { icon: Rocket, title: "Excellence", description: "We don't settle for good—we strive for exceptional every time." },
];

const Vision = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Our Vision</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Building the <span className="text-gradient">Future</span> of Digital
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We envision a world where every business, regardless of size, has access to world-class digital solutions that drive meaningful growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <AnimatedSection className="section-padding bg-card/20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl glass-hover">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Target className="text-primary" size={28} />
              </div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with innovative digital solutions that not only look exceptional but deliver measurable results. We bridge the gap between technology and business growth, making premium digital services accessible to all.
              </p>
            </div>
            <div className="p-8 rounded-xl glass-hover">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <Eye className="text-accent" size={28} />
              </div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted digital agency globally, known for transforming businesses through cutting-edge technology, creative design, and data-driven strategies that set new industry standards.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Long-term Goals */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Long-Term Goals</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Where We're <span className="text-gradient">Headed</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { number: "01", title: "Global Reach", description: "Expand our services to businesses in over 50 countries, delivering localized digital solutions." },
              { number: "02", title: "AI Integration", description: "Integrate AI-powered features into all our solutions for smarter, more efficient digital experiences." },
              { number: "03", title: "Community Impact", description: "Train 1000+ aspiring developers through mentorship programs and open-source contributions." },
            ].map((goal) => (
              <div key={goal.number} className="p-6 rounded-xl glass-hover">
                <span className="text-4xl font-heading font-bold text-primary/20">{goal.number}</span>
                <h3 className="font-heading font-semibold text-lg text-foreground mt-3 mb-2">{goal.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection className="section-padding bg-card/20">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              What <span className="text-gradient">Drives Us</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6 rounded-xl glass-hover">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="text-primary" size={26} />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Different */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Why We're Different</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Not Just Another <span className="text-gradient">Digital Agency</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              While others follow templates, we craft bespoke digital experiences. Our team combines technical expertise with creative vision to deliver solutions that truly stand out. We don't just build—we strategize, design, develop, and optimize for long-term success.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "100%", label: "Custom Solutions" },
                { value: "24/7", label: "Support" },
                { value: "50+", label: "Projects" },
                { value: "5★", label: "Average Rating" },
              ].map((s) => (
                <div key={s.label} className="p-4 rounded-xl glass">
                  <p className="text-xl font-heading font-bold text-primary">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Vision;
