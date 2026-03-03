import { Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    text: "Byte Vision transformed our online presence completely. Our traffic increased by 300% within three months of launching the new website.",
    rating: 5,
  },
  {
    name: "Ahmed Khan",
    role: "Founder, ShopEase",
    text: "The e-commerce store they built for us is exceptional. Clean design, fast loading, and our conversion rate doubled. Highly recommended!",
    rating: 5,
  },
  {
    name: "Maria Garcia",
    role: "Marketing Director, GrowthCo",
    text: "Their Meta Ads strategy brought us qualified leads at half the cost. Professional, responsive, and truly results-driven team.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <AnimatedSection className="section-padding bg-card/20">
      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 rounded-xl glass-hover">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">"{t.text}"</p>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Testimonials;
