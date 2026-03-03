import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, MapPin, Phone, MessageCircle, Facebook, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    setSending(true);
    // Simulate send
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent("Hi Byte Vision! I'd like to discuss a project.")}`;

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container-custom relative z-10 text-center">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Reach out and let's make it happen.
          </p>
        </div>
      </section>

      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="p-8 rounded-xl glass">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input
                    id="name"
                    type="text"
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    id="email"
                    type="email"
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    maxLength={1000}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-200 hover:opacity-90 disabled:opacity-50 glow-primary"
                >
                  {sending ? "Sending..." : <>Send Message <Send size={16} /></>}
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl glass-hover">
                <h3 className="font-heading font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a href="mailto:info@bytevision.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="text-primary" size={18} />
                    </div>
                    info@bytevision.com
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MessageCircle className="text-primary" size={18} />
                    </div>
                    Chat on WhatsApp
                  </a>
                  <a href="https://facebook.com/ByteVision" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Facebook className="text-primary" size={18} />
                    </div>
                    facebook.com/ByteVision
                  </a>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="text-primary" size={18} />
                    </div>
                    Global Digital Agency
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden glass h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-primary/40 mx-auto mb-2" size={40} />
                  <p className="text-sm text-muted-foreground">Google Maps Integration</p>
                  <p className="text-xs text-muted-foreground/60">Add your location embed here</p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-lg bg-[hsl(142_70%_45%)] text-foreground font-semibold transition-all hover:opacity-90"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Contact;
