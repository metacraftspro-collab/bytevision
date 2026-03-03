import { Shield, Zap, HeartHandshake, TrendingUp, Clock, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const reasons = [
  { icon: Zap, title: "Fast Delivery", description: "We deliver projects on time without compromising quality." },
  { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security baked into every project." },
  { icon: HeartHandshake, title: "Client-First Approach", description: "Your success is our top priority. We listen, adapt, and deliver." },
  { icon: TrendingUp, title: "Growth-Focused", description: "Every solution is designed to drive measurable business growth." },
  { icon: Clock, title: "24/7 Support", description: "Ongoing maintenance and support whenever you need it." },
  { icon: Award, title: "Proven Expertise", description: "Years of experience across diverse industries and technologies." },
];

const WhyChooseUs = () => {
  return (
    <AnimatedSection className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Built for <span className="text-gradient">Performance</span>,<br />
              Designed for <span className="text-gradient">Growth</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We don't just build websites—we build digital ecosystems that empower your brand, engage your audience, and convert visitors into loyal customers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {reasons.slice(0, 4).map((r) => (
                <div key={r.title} className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center">
                    <r.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-foreground">{r.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{r.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className={`p-5 rounded-xl glass-hover ${i === 0 ? "col-span-2" : ""}`}
              >
                <r.icon className="text-primary mb-3" size={24} />
                <h4 className="font-heading font-semibold text-foreground mb-1">{r.title}</h4>
                <p className="text-sm text-muted-foreground">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WhyChooseUs;
